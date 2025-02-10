import { Project } from 'projen';
import { GitHub, GithubWorkflow } from 'projen/lib/github';
import { Job, JobPermission } from 'projen/lib/github/workflows-model';

export function addZgwClientsUpdateWorkflow(project: Project) {
  const github: GitHub | undefined = GitHub.of(project);
  if (!github) {
    throw new Error('ZGW Clients Update Workflow requires a GitHub project.');
  }
  const workflow = new GithubWorkflow(github, 'update-zgw-clients');

  workflow.on({
    workflowDispatch: {},
    schedule: [{ cron: '0 0 * * 0' }], // 1x per week op zondag om 00:00 UTC
  });

  const retrieveClientsJob: Job = {
    name: 'Upgrade ZGW Clients',
    runsOn: ['ubuntu-latest'],
    permissions: {
      contents: JobPermission.READ,
    },
    outputs: {
      patch_created: {
        stepId: 'create_patch',
        outputName: 'patch_created',
      },
    },
    steps: [
      {
        name: 'Checkout Repository',
        uses: 'actions/checkout@v4',
        with: {
          ref: 'acceptance',
        },
      },
      {
        name: 'Install Dependencies',
        run: 'yarn install --check-files --frozen-lockfile',
      },
      {
        name: 'Update ZGW Clients',
        run: 'npx ts-node -e "import { GenerateNewClients } from \'./src/client-generator/GenerateNewClients\'; (async () => { const generateNewClients = new GenerateNewClients(); await generateNewClients.generateClients(); })();"',
      },
      {
        name: 'Find Mutations',
        id: 'create_patch',
        run: 'git add . && git diff --staged --patch --exit-code > repo.patch || echo "patch_created=true" >> $GITHUB_OUTPUT',
      },
      {
        name: 'Upload Patch',
        if: '${{ steps.create_patch.outputs.patch_created }}',
        uses: 'actions/upload-artifact@v4.4.0',
        with: {
          name: 'repo.patch',
          path: 'repo.patch',
          overwrite: true,
        },
      },
    ],
  };

  // Definieer het pull request-job
  const prJob: Job = {
    name: 'Create Pull Request',
    runsOn: ['ubuntu-latest'],
    permissions: {
      contents: JobPermission.READ,
    },
    needs: ['upgrade'],
    if: '${{ needs.upgrade.outputs.patch_created }}',
    steps: [
      {
        name: 'Checkout Repository',
        uses: 'actions/checkout@v4',
        with: {
          ref: 'acceptance',
        },
      },
      {
        name: 'Download Patch',
        uses: 'actions/download-artifact@v4',
        with: {
          name: 'repo.patch',
          path: '${{ runner.temp }}',
        },
      },
      {
        name: 'Apply Patch',
        run: "[ -s ${{ runner.temp }}/repo.patch ] && git apply ${{ runner.temp }}/repo.patch || echo 'Empty patch. Skipping.'",
      },
      {
        name: 'Set Git Identity',
        run: 'git config user.name "github-actions" && git config user.email "github-actions@github.com"',
      },
      {
        name: 'Create Pull Request',
        id: 'create-pr',
        uses: 'peter-evans/create-pull-request@v6',
        with: {
          'token': '${{ secrets.PROJEN_GITHUB_TOKEN }}',
          'commit-message': 'chore(clients): update ZGW clients',
          'branch': 'github-actions/update-zgw-clients',
          'title': 'chore(clients): update ZGW clients',
          'labels': 'auto-merge',
          'body': 'Automatically generated update of ZGW clients.\n\n[Workflow Run]: https://github.com/${{ github.repository }}/actions/runs/${{ github.run_id }}',
          'author': 'github-actions <github-actions@github.com>',
          'committer': 'github-actions <github-actions@github.com>',
          'signoff': true,
        },
      },
    ],
  };

  // Voeg de jobs toe aan de workflow
  workflow.addJobs({
    upgrade: retrieveClientsJob,
    pr: prJob,
  });
}
