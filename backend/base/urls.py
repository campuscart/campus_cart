from django.urls import path
from . import views 
from rest_framework_simplejwt.views import TokenObtainPairView
urlpatterns = [
    path('', views.getRoutes,name="routes"),
    path('login',TokenObtainPairView.as_view(),name='login'),
    path('sell', views.get_sell,name="get_sell"),
    path('sell/create', views.create_sell,name="create_sell"),
    path('sell/<slug:pk>', views.update_selling,name="sell_specific"), 
    path('buy', views.get_buy,name="get_buy"),
    path('buy/create', views.create_buy,name="create_buy"),
    path('buy/<slug:pk>', views.update_buying,name="buy_specific"),
] 