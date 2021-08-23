"""
Definition of urls for DemoDjangoWP_TH.
"""

from datetime import datetime
from django.urls import path
from django.contrib import admin
from django.contrib.auth.views import LoginView, LogoutView
from app import forms, views


urlpatterns = [
    path('', views.home, name='home'),
    path('voice-interactive-mode/', views.voice, name='voice'),
    path('periodic-table/', views.ptable, name='periodic table'),
    path('periodic-table/element/', views.ptelement, name='element'),
    path('india-in-chemistry/', views.contri, name='ic'),
    path('games/', views.gdir, name='games'),
    path('games/2048/', views.g2048, name='elementos2048'),
    path('games/guess/', views.gGuess, name='guess'),
    path('games/match/', views.gMatch, name='match'),
    path('games/symbol/', views.gSym, name='sym'),
    path('contact/', views.contact, name='contact'),
    path('about/', views.about, name='about'),
    path('login/',
         LoginView.as_view
         (
             template_name='app/login.html',
             authentication_form=forms.BootstrapAuthenticationForm,
             extra_context=
             {
                 'title': 'Log in',
                 'year' : datetime.now().year,
             }
         ),
         name='login'),
    path('logout/', LogoutView.as_view(next_page='/'), name='logout'),
    path('admin/', admin.site.urls),
]
