import fs from 'fs';
import path from 'path';

test('Project contains all necessary modules', () => {
  const requiredModules = [
    'catalogi-generated-client',
    'documenten-generated-client',
    'zaken-generated-client',
  ];

  const srcPath = path.join(__dirname, '../src');
  const existingModules = fs.readdirSync(srcPath);

  requiredModules.forEach((module) => {
    expect(existingModules).toContain(module);
  });
});