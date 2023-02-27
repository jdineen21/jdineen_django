from django.contrib import admin

from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    search_fields = ['name', 'email_address']
    list_display = ['name', 'email_address', 'updated_at', 'created_at']

admin.site.register(Contact, ContactAdmin)