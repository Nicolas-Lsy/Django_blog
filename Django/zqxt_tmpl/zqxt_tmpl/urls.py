from django.conf.urls import include, url
from django.contrib import admin
from learn import views as learn_views


urlpatterns = [
    url(r'^$', learn_views.home),
    url(r'^admin/', admin.site.urls),
]


