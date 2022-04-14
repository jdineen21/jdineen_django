from django.db import models
from django.forms import ModelForm, TextInput

class Contact(models.Model):
    name = models.CharField(max_length=30)
    email_address = models.EmailField(max_length=254)
    message = models.TextField()

    class Meta:
        verbose_name = 'contact'
        verbose_name_plural = 'contacts'

    def __str__(self):
        return self.name

class ContactForm(ModelForm):
    class Meta:
        model = Contact
        fields = ['name', 'email_address', 'message']
        widgets = {
            'name': TextInput(attrs={'class': 'contact_input', 'placeholder': 'Name'}),
            'email_address': TextInput(attrs={'class': 'contact_input', 'placeholder': 'Email'}),
            'message': TextInput(attrs={'class': 'contact_textarea', 'placeholder': 'Message'}),
        }