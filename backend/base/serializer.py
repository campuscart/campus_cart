from rest_framework import serializers
from .models import Buying,Selling

class BuyingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buying
        fields= '__all__'
        
class SellingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Selling
        fields = '__all__'
        