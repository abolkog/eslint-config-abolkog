const assert = require('assert');
const eslint = require('eslint');
const conf = require('../');

const sourceFile = ['index.js'];
const eslintOpts = {
  envs: ['node', 'es6'],
  useEslintrc: false,
  rules: conf.rules,
};

const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(sourceFile);
assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 1);
sourceFile.forEach((file, index) => {
  assert(report.results[index].filePath.endsWith(file));
});