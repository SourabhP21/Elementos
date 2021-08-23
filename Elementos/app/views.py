from datetime import datetime
from django.shortcuts import render
from django.http import HttpRequest

    
def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/index.html',
        {
            'title':'ELEMENTOS',
            'year':datetime.now().year,
        }
    )

def voice(request):
    assert isinstance(request, HttpRequest)

    return render(
        request,
        'app/sr.html',
        {
            'title':'ELEMENTOS',
            'year':datetime.now().year,
        }
    )

def ptable(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/ptmain.html',
        {
            'title':'Periodic table',
            'year':datetime.now().year,
            }
        )

def ptelement(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/element.html',
        {
            'title':'Element Detail',
            'year':datetime.now().year,
            }
        )

def contri(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/factsMnemonics.html',
        {
            'title':'India Contribution',
            'year':datetime.now().year,
            }
        )

def gdir(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/games.html',
        {
            'title': 'Games',
         }
       )

def g2048(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/2048.html',
        {
            'title': 'Elementos2048',
         }
       )

def gGuess(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/guess.html',
        {
            'title': 'Guess The Element',
         }
       )

def gMatch(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/match.html',
        {
            'title': 'Match The Element',
         }
       )

def gSym(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/sym.html',
        {
            'title': 'Symbol',
         }
       )

def contact(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/contact.html',
        {
            'title':'Contact',
            'message':'Team Vector.06',
            'year':datetime.now().year,
        }
    )

def about(request):
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about.html',
        {
            'title':'About',
            'message':'ELEMENTOS',
            'year':datetime.now().year,
        }
    )
