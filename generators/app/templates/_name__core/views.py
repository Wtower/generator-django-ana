"""
View handler definitions for core
Generated by yeoman generator-django-ana <%= version %> on <%= date %>.
"""
from django.views.generic.base import TemplateView
from braces.views import FormMessagesMixin
from envelope.views import ContactView as EnvelopeContactView


class IndexView(TemplateView):
    template_name = '<%= name %>_core/index.html'

    def get_context_data(self, **kwargs):
        return {}


class ContactView(FormMessagesMixin, EnvelopeContactView):
    form_valid_message = "Message sent."
    form_invalid_message = "Please fill in all fields in the contact form."