'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-django-ana:app', function () {
  // test branches to increase coverage
  var runs = [
    {it: 'no suffix in git prompt', git: 'https://github.com/Wtower/generator-makrina'},
    {it: 'prefix in git prompt', git: 'git+https://github.com/Wtower/generator-makrina.git'},
    {it: 'suffix in git prompt', git: 'https://github.com/Wtower/generator-makrina.git'}
  ];

  runs.forEach(function (run) {
    describe('testing with ' + run.it, function () {
      before(function () {
        return helpers.run(path.join(__dirname, '../generators/app'))
          .withPrompts({
            name: 'yeotests',
            git: run.git
          })
          .toPromise();
      });

      it('creates files', function () {
        var templatePaths = [
          'yeotests/',
          'yeotests_core/',
          'private/',
          'templates/',
          '.editorconfig',
          '.gitignore',
          '.venv',
          'CONTRIBUTING.rst',
          'gulpfile.js',
          'LICENSE',
          'manage.py',
          'newrelic.ini',
          'package.json',
          'README.rst',
          '.yo-rc.json'
        ];
        var copyPaths = [
          'media/',
          'CHANGELOG',
          'requirements.txt'
        ];
        assert.file(templatePaths);
        assert.file(copyPaths);
        assert.fileContent('package.json', run.git);
      });
    });
  });
});
