from django.db import models

class Contact(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email_address = models.EmailField(max_length=254)
    message = models.TextField()

class Contact(models.ModelForm):
    class Meta:
        model = Contact
        fields = ['first_name', 'last_name', 'email_address', 'message']
