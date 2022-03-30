from django.shortcuts import render, HttpResponseRedirect

from .models import ContactForm

def index(request):
    if request.method == 'POST':
        # create a form instance and populate it with data from the request:
        contact_form = ContactForm(request.POST)
        # check whether it's valid:
        if contact_form.is_valid():
            # process the data in form.cleaned_data as required
            contact_form.save()
            # redirect to a new URL:
            return render(request, 'base.html', {'sent': True})

    # if a GET (or any other method) we'll create a blank form
    else:
        contact_form = ContactForm()

    return render(request, 'base.html', {'contact_form': contact_form})
