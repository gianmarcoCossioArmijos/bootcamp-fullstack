from django import forms
from .models import Author


class ExampleForm(forms.Form):
    name = forms.CharField(max_length=100)
    

class AuthorsFrom(forms.ModelForm):
    class Meta:
        model = Author
        fields = "__all__"