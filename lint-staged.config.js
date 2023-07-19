module.exports = {
  'src/**/*.js': ['prettier --write'],
  'lint-staged.config.js': ['prettier --write'],
  'commitlint.config.js': ['prettier --write'],
  '.prettier.js': ['prettier --write'],
  'jsconfig.json': ['prettier --write'],
  '.github/**/*.yml': ['prettier --write'],
};
