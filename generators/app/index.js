'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var lodash = require('lodash');
var randomString = require('randomstring');
var path = require('path');
var pack = require('../../package.json');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay('Welcome to the ' + chalk.red('generator-django-ana') + ' Django generator'));
    var self = this;

    var prompts = [{
      // README.md, package.json, manage.py, gulpfile.js, _venv,
      // _name_/ settings*.py, urls.py, wsgi.py, wsgi_mod.py,
      // _name__core/apps.py
      type: 'input',
      name: 'name',
      message: 'Project name',
      default: function () {
        return lodash.snakeCase(self.appname);
      }
    }, {
      // _name__core/ apps.py, tests.py
      type: 'input',
      name: 'pascalName',
      message: 'Pascal name',
      default: function (response) {
        return lodash.upperFirst(lodash.camelCase(response.name));
      }
    }, {
      // _name_/settings.py, _name__core/apps.py
      type: 'input',
      name: 'verboseName',
      message: 'Verbose name',
      default: function (response) {
        return lodash.startCase(response.name);
      }
    }, {
      // README.md, package.json, _name_/settings.py
      type: 'input',
      name: 'description',
      message: 'Description',
      default: function (response) {
        return lodash.startCase(response.name);
      }
    }, {
      // package.json
      type: 'input',
      name: 'git',
      message: 'Git repository URL'
    }, {
      // package.json, LICENSE, CONTRIBUTING.md
      type: 'input',
      name: 'author',
      message: 'Author',
      store: true
    }, {
      // package.json
      type: 'input',
      name: 'deployHost',
      message: 'Deploy host',
      store: true
    }, {
      // _name_/ settings_live.py, wsgi_mod.py
      type: 'input',
      name: 'allowedHost',
      message: 'Allowed host',
      default: function (response) {
        return response.name + '.com';
      }
    }, {
      // newrelic.ini
      type: 'input',
      name: 'newRelicLicense',
      message: 'New Relic license key',
      store: true
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    var templatePaths = [
      '_name_/',
      '_name__core/',
      '_editorconfig',
      '_gitignore',
      '_venv',
      'CONTRIBUTING.md',
      'gulpfile.js',
      'LICENSE',
      'manage.py',
      'newrelic.ini',
      'package.json',
      'README.md'
    ];
    var copyPaths = [
      'media/',
      'private/',
      'static/',
      'templates/',
      'CHANGELOG',
      'requirements.txt'
    ];

    var git = this.props.git;
    // Remove prefix/suffix from git repo to add in template
    if (git.startsWith('git+')) git = git.substring(4, git.length - 4);
    if (git.endsWith('.git')) git = git.substring(0, git.length - 4);
    var today = new Date();

    var context = {
      name: this.props.name,
      pascalName: this.props.pascalName,
      verboseName: this.props.verboseName,
      description: this.props.description,
      git: git,
      author: this.props.author,
      deployHost: this.props.deployHost,
      allowedHost: this.props.allowedHost,
      newRelicLicense: this.props.newRelicLicense,
      secretKey: randomString.generate({length: 50, charset: 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)'}),
      pass: randomString.generate(12),
      today: today,
      date: [today.getDate(), today.getMonth() + 1, today.getFullYear()].join('/'),
      version: pack.version,
      header: function (val, char) {
        // return an underline of `char`s for markdown based on `val` length
        return new Array(val.length + 1).join(char);
      }
    };
    var $this = this;

    var pathNames = function (templatePath, props) {
      var output = templatePath;
      output = output.replace('_name_', props.name);
      output = output.replace(path.sep + '_', path.sep + '.');
      if (output.startsWith('_')) output = '.' + output.substring(1, output.length);
      return output;
    };

    templatePaths.forEach(function (templatePath) {
      $this.fs.copyTpl(
        $this.templatePath(templatePath),
        $this.destinationPath(pathNames(templatePath, $this.props)),
        context
      );
    });
    copyPaths.forEach(function (copyPath) {
      $this.fs.copy(
        $this.templatePath(copyPath),
        $this.destinationPath(copyPath)
      );
    });
  },

  install: function () {
    this.installDependencies();
    this.spawnCommand('git', ['init']);
  }
});
