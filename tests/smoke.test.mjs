import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('repository keeps required README safety instructions', async () => {
  const readme = await read('README.md');
  for (const heading of ['## Getting Started', '## Safety', '## What we test']) {
    assert.ok(readme.includes(heading), `Missing README heading ${heading}`);
  }
});

test('agent handoff documentation stays available', async () => {
  const doc = await read('docs/Getting-Started.md');
  for (const agent of ['Nova', 'Atlas', 'Iris', 'Elton']) {
    assert.ok(doc.includes(agent), `Missing agent ${agent}`);
  }
  assert.ok(doc.includes('PR'));
});

test('package scripts call local test and build checks', async () => {
  const pkg = JSON.parse(await read('package.json'));
  assert.equal(pkg.private, true);
  assert.match(pkg.scripts.test, /^node --test /);
  assert.match(pkg.scripts.build, /^node scripts\//);
});
