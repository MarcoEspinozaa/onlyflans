from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from web.forms import ContactFormForm, ContactFormModelForm
from web.models import Flan,ContactForm
from django.contrib.auth.decorators import login_required

# Create your views here.
def indice(request):
    public_flans = Flan.objects.filter(is_private=False)
    
    return render(request, 'index.html',{'public_flans': public_flans})

def acerca(request):
    return render(request,'about.html',{})

@login_required
def bienvenido(request):
    private_flans = Flan.objects.filter(is_private=True)

    return render(request,'welcome.html',{'private_flans':private_flans})

def contacto(request):
    if request.method == 'POST':
        # create a form instance and populate it whit data from the request:
        form = ContactFormModelForm(request.POST)
        # check whether it's valid:
        if form.is_valid():
            # process the data in form.cleaned_data as required

            contact_form = ContactForm.objects.create(**form.cleaned_data)
            # redirect to a new URL:
            return HttpResponseRedirect('/exito')
    # if a GET (or any other method) we'll create a blank form
    else:
        form = ContactFormModelForm()
    return render(request,'contactus2.html',{'form':form})

def exito(request):
    return render(request,'succes.html',{})

def ubicacion(request):
    return render(request,'ubication.html',{})

def productos(request):
    return render(request,'content.html',{})

def boton_login(request):
    return render(request,'button_login.html',{})