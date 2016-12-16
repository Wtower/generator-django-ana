"""
mod_WSGI config for <%= name %> project.
"""

import os
import sys
import site

# Set paths
wsgi_app = '<%= name %>'
wsgi_path = '/var/www/vhosts/<%= allowedHost %>/httpdocs'
venv_path = '/var/virtualenvs/' + wsgi_app

# Add the site-packages of the chosen virtualenv to work with
site.addsitedir(venv_path + '/local/lib/python3.4/site-packages')

# Add the app's directory to the PYTHONPATH
sys.path.append(wsgi_path)
sys.path.append('/'.join((wsgi_path, wsgi_app)))

# Load settings
os.environ['DJANGO_SETTINGS_MODULE'] = wsgi_app + '.settings_live'

# Activate your virtual env
activate_env = os.path.expanduser(venv_path + '/bin/activate_this.py')
with open(activate_env) as f:
    code = compile(f.read(), activate_env, 'exec')
    exec(code, dict(__file__=activate_env))

# noinspection PyUnresolvedReferences
import newrelic.agent
newrelic.agent.initialize(wsgi_path + '/newrelic.ini')

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
