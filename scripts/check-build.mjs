import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const file = name => readFile(new URL('../' + name, import.meta.url), 'utf8');
const [readme, docs, workflow] = await Promise.all([
  file('README.md'),
  file('docs/Getting-Started.md'),
  file('.github/workflows/verify.yml')
]);
assert.ok(readme.includes('## Safety'), 'README safety guidance is required');
assert.ok(docs.includes('Nova') && docs.includes('Iris'), 'Agent handoff explanation is required');
assert.ok(workflow.includes('pull_request:') && workflow.includes('test-and-build:') &&
  workflow.includes('name: Run npm test') && workflow.includes('name: Run npm run build'),
  'Required GitHub Actions CI workflow is absent or renamed');
console.log('Test project validated. No production app is built or deployed.');
