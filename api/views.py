from winreg import REG_QWORD
import requests

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import Contact

from .serializers import ContactSerializer

class ContactList(APIView):
    """
    List all contacts, or create a new contact.
    """
    def get(self, request, format=None):
        snippets = Contact.objects.all()
        serializer = ContactSerializer(snippets, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ContactSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        recaptcha_response = request.data.get('g_recaptcha_response')
        data = {
            'secret': '6Lci3WwfAAAAAIc9d2jMc4f_5SUg1iTWloYhCIvX',
            'response': recaptcha_response
        }
        r = requests.post('https://www.google.com/recaptcha/api/siteverify', data=data)
        result = r.json()

        if not result['success']:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
        