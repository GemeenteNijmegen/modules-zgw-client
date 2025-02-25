import fs from 'fs';
import path from 'path';

interface FileOutputOptions {
  /**
   * Whether to enable writing logs to a file.
   * Defaults to `true`.
   */
  logToFile?: boolean;
  /**
   * Optional prefix for the log filename, e.g. "liverx"
   * => "liverx-{{timestamp}}.log".
   */
  prefix?: string;
  /**
   * Whether to also log to console in real-time.
   * Defaults to `true`.
   */
  logToConsole?: boolean;
  /**
   * Directory where the log file should be created.
   * Defaults to process.cwd() if not provided.
   */
  outputDir?: string;
}

/**
 * Sets up beforeAll/afterAll hooks to optionally write logs to a file,
 * returning a `logMessage` function you can use in your tests.
 */
export function setupTestFileOutput(options: FileOutputOptions = {}) {
  const {
    logToFile: enabled = true,
    prefix = '',
    logToConsole = true,
    // If not specified, default to the current working directory
    outputDir = path.join(process.cwd(), 'output'),
  } = options;

  // Local array for storing log messages in this test file
  const capturedLogs: string[] = [];

  /**
   * Call this in your tests to log a message that will be
   * written to the file (if `enabled`) and/or to the console
   * (if `logToConsole`).
   */
  function logMessage(message: string) {
    capturedLogs.push(message);
    if (logToConsole) {
      console.log(message);
    }
  }

  beforeAll(() => {
    if (enabled) {
      console.log(
        `File logging is enabled. Logs will be written with prefix "${prefix}" to folder: ${outputDir}`,
      );
    } else {
      console.log('File logging is disabled.');
    }
  });

  afterAll(() => {
    if (enabled) {
      // Ensure the directory exists
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const timestamp = Date.now();
      const filePrefix = prefix || 'test-results';
      const filename = `${filePrefix}-${timestamp}.log`;
      const filePath = path.join(outputDir, filename);

      fs.writeFileSync(filePath, capturedLogs.join('\n'), 'utf-8');
      console.log(`Test results written to file: ${filePath}`);
    }
  });

  return { logMessage };
}