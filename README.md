generator-django-ana 
====================

[![NPM version][npm-image]][npm-url] 
[![Build Status][travis-image]][travis-url] 
[![Dependency Status][daviddm-image]][daviddm-url] 
[![Coverage percentage][coveralls-image]][coveralls-url]

[npm-image]: https://badge.fury.io/js/generator-django-ana.svg
[npm-url]: https://npmjs.org/package/generator-django-ana
[travis-image]: https://travis-ci.org/Wtower/generator-django-ana.svg?branch=master
[travis-url]: https://travis-ci.org/Wtower/generator-django-ana
[daviddm-image]: https://david-dm.org/Wtower/generator-django-ana.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Wtower/generator-django-ana
[coveralls-image]: https://coveralls.io/repos/Wtower/generator-django-ana/badge.svg
[coveralls-url]: https://coveralls.io/r/Wtower/generator-django-ana

Generate Django boilerplate. Featuring REST, gulp build and ng-gentelella.

Installation
------------

First, install [Yeoman](http://yeoman.io) and generator-django-ana using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-django-ana
```

Then generate your new project:

```bash
yo django-ana
```

Description
-----------

The generator creates a new project with:

- A default `requirements.txt` with most useful Django packages.
- A default `package.json` file with the appropriate description and dependencies for front-end management.
- Default meta documents: `README`, private `LICENSE`, `CONTRIBUTING`, `CHANGELOG`.
- Default `.gitignore` and `.editorconfig` files.
- A standard Django `manage.py` script.
- A default `gulpfile.js` for managing front-end.
- A `newrelic.ini` configuration file for Python.
- The main application python package with settings for development, testing and production, wsgi and mod_wsgi scripts
  and main urls routes.
- An additional 'core' python package for specifying application information, use signals and template tags.
- Default media, private and templates directories.

Prompts
-------

The generator prompts for the following information:

- Project name: the generated project name (snake case).
  Used in: `README.md, package.json, manage.py, gulpfile.js, _venv`, 
  `_name_/ settings*.py, urls.py, wsgi.py, wsgi_mod.py`,
  `_name__core/apps.py`.
  
- Pascal name: the generated project name (pascal case).
  Used in: `_name__core/apps.py`.
  
- Verbose name: a verbose project name, spaces allowed.
  Used in: `_name_/settings.py, _name__core/apps.py`.

- Description: project description.
  Used in: `README.md, package.json, _name_/settings.py`.

- Git repository URL. Used in `package.json`.

- Author. Used in `package.json, LICENSE, CONTRIBUTING.md`.

- Deploy host: optional for `npm deploy` command.
  Used in: `package.json`.

- Allowed host: Used in: `_name_/settings_live.py`.

- New Relic license key. Used in `newrelic.ini`.

After generation
----------------

Usually perform the following actions:

```
vf new -p python3 VIRTUALENV
pip install -U pip setuptools wheel
pip install -U -r requirements.txt
python manage.py migrate
```

License
-------

MIT © [Wtower](https://github.com/Wtower)
