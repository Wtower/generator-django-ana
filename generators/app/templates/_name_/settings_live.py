"""
Django LIVE settings for <%= name %> project.
Generated by yeoman generator-django-ana <%= version %> on <%= date %>.
"""

from <%= name %>.settings import *
import os

DEBUG = False

ALLOWED_HOSTS = [
    '<%= allowedHost %>',
    'www.<%= allowedHost %>',
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': '<%= name %>',
        'USER': '<%= name %>',
        'PASSWORD': '<%= pass %>',
        'HOST': '127.0.0.1',
    }
}

# noinspection PyUnresolvedReferences
STATIC_ROOT = os.path.join(BASE_DIR, 'static')

STATICFILES_DIRS = []

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.memcached.MemcachedCache',
        'LOCATION': '127.0.0.1:11211',
        'TIMEOUT': 3 * 60 * 60,  # 3h
        'KEY_PREFIX': '<%= name %>_',
        'VERSION': 1,
    }
}
