"""
Django settings for <%= name %> project.
Generated by yeoman generator-django-ana <%= version %> on <%= date %>.
"""

import os
from django.contrib import messages

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.9/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '<%= secretKey %>'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = []


# Application definition

INSTALLED_APPS = [
    # 'admin_bootstrapped_plus',
    # 'django_admin_bootstrapped',
    # 'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    '<%= name %>_core',
    'debug_toolbar',
    'envelope',
    # 'rest_framework',
    # 'mptt',
    # 'guardian',
    # 'ninecms',
]

MIDDLEWARE = [
    'debug_toolbar.middleware.DebugToolbarMiddleware',
    'django.middleware.cache.UpdateCacheMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.locale.LocaleMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.cache.FetchFromCacheMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
]

ROOT_URLCONF = '<%= name %>.urls'

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
            'debug': True,
        },
    },
]

WSGI_APPLICATION = '<%= name %>.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}


# Password validation
# https://docs.djangoproject.com/en/1.9/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/1.9/topics/i18n/

LANGUAGE_CODE = 'en'

LANGUAGES = (
    ('en', 'English'),
    # ('el', 'Greek'),
)

LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'locale'),
)

TIME_ZONE = 'Europe/Athens'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.9/howto/static-files/

STATIC_URL = '/static/'

STATICFILES_DIRS = (
    os.path.join(BASE_DIR, "static"),
)

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

MEDIA_URL = '/media/'


# Error reporting
# @todo email settings

ADMINS = (
    ("Webmaster", "web@9-dev.com"),
)

MANAGERS = (
    ("Webmaster", "web@9-dev.com"),
)

EMAIL_HOST = 'mail.9-dev.com'

EMAIL_HOST_USER = 'do-not-reply@9-dev.com'

EMAIL_HOST_PASSWORD = ''

EMAIL_USE_SSL = True

EMAIL_PORT = 465

EMAIL_SUBJECT_PREFIX = '[<%= verboseName %>] '

SERVER_EMAIL = 'do-not-reply@9-dev.com'

DEFAULT_FROM_EMAIL = 'do-not-reply@9-dev.com'

ENVELOPE_EMAIL_RECIPIENTS = ('web@9-dev.com', )

ENVELOPE_SUBJECT_INTRO = EMAIL_SUBJECT_PREFIX


# Security

LOGIN_URL = '/admin/login/'

SECURE_CONTENT_TYPE_NOSNIFF = True

SECURE_BROWSER_XSS_FILTER = True

X_FRAME_OPTIONS = 'DENY'

# disable http only on cookie to allow ajax
CSRF_COOKIE_HTTPONLY = False

CSRF_COOKIE_NAME = 'XSRF-TOKEN'

CSRF_HEADER_NAME = 'HTTP_X_XSRF_TOKEN'

SESSION_COOKIE_NAME = '<%= name %>_sessionid'

INTERNAL_IPS = ('127.0.0.1',)


# Caches

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.dummy.DummyCache',
    }
}

CACHE_MIDDLEWARE_SECONDS = 3 * 60 * 60


# Guardian

# AUTHENTICATION_BACKENDS = (
#     'django.contrib.auth.backends.ModelBackend',  # this is default
#     'guardian.backends.ObjectPermissionBackend',
# )

# ANONYMOUS_USER_ID = -1


# Django admin

# DAB_FIELD_RENDERER = 'django_admin_bootstrapped.renderers.BootstrapFieldRenderer'


# Messages

MESSAGE_TAGS = {
    messages.DEBUG: 'primary',
    messages.INFO: 'info',
    messages.SUCCESS: 'success',
    messages.WARNING: 'warning',
    messages.ERROR: 'danger',
}


# CMS settings

# from ninecms.settings import *

SITE_NAME = "<%= verboseName %>"

SITE_AUTHOR = "<%= author %>"

SITE_KEYWORDS = "<%= description %>"

I18N_URLS = True  # False

# IMAGE_STYLES.update({
#     'thumbnail_carousel_top': {
#         'type': 'thumbnail-crop',
#         'size': (210, 140)
#     },
# })
