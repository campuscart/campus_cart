from email import message
from django.utils.decorators import method_decorator
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework import status
from .models import Buying,Selling
from .serializer import *

# Create your views here.
@api_view(('GET',))
def getRoutes(request):
    routes = {
        '/api/buy' : 'To place or edit an order',
        'api/sell' : 'To sell a cooler',
    }
    
    return Response(routes)

@api_view(('GET',))
@permission_classes([IsAuthenticated])
def get_buy(request):
    buyers = Buying.objects.all()
    serializer = BuyingSerializer(buyers,many=True)
    return Response(serializer.data)    

@api_view(('POST',))
def create_buy(request):
    data = request.data
    try:
        order = Buying.objects.create(
            name = data["name"],
            enrollment_number = data["enrollment_number"],
            phone_number = data["phone_number"],
            hostel = data["hostel"],
            room_number = data["room_number"],
            order_type = data["order_type"],
            transaction_number = data["transaction_number"]
        )
        message ={'detail' : 'Order placed successfully'}
        return Response(message)
    except:
        message = {'detail':'Data not compaitable'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

def log_buy(before,after):
    changeables = ["id","name","enrollment_number","phone_number","hostel","room_number"]
    change = ""
    changes = 0
    for changeable in changeables:
        if before[changeable] == after[changeable]:
            change += f'{before[changeable]},'
        else:
            change += f'{before[changeable]}->{after[changeable]},'
            changes+=1
    if changes > 0:
        with open('buy_log.csv','a') as f:
            change+='\n'
            print(change)
            f.write(change)
            
def log_sell(before,after):
    changeables = ["id","name","enrollment_number","phone_number","hostel","room_number","amount_asked"]
    change = ""
    changes = 0
    for changeable in changeables:
        if before[changeable] == after[changeable]:
            change += f'{before[changeable]},'
        else:
            change += f'{before[changeable]}->{after[changeable]},'
            changes+=1
    if changes > 0:
        with open('sell_log.csv','a') as f:
            change+='\n'
            print(change)
            f.write(change)
                
@api_view(('PATCH',))
@permission_classes([IsAuthenticated])
def update_buying(request,pk):
    try:
        order = Buying.objects.get(id=pk)
        serializer = BuyingSerializer(order,data=request.data,partial=True)
        if serializer.is_valid():
            before = BuyingSerializer(order).data
            serializer.save()
            log_buy(before,serializer.data)
            message = {'detail':'Updated Successfully'}
            buyers = Buying.objects.all()
            serializer = BuyingSerializer(buyers,many=True)
            return Response(serializer.data)
        else:
            message = {'detail':'Provided info not compaitable'}
            return Response(message)
    except:
        message = {'detail':'Data not compaitable'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

@api_view(('PATCH',))
@permission_classes([IsAuthenticated])
def update_selling(request,pk):
    try:
        order = Selling.objects.get(id=pk)
        serializer = SellingSerializer(order,data=request.data,partial=True)
        if serializer.is_valid():
            before = SellingSerializer(order).data
            serializer.save()
            log_sell(before,serializer.data)
            buyers = Selling.objects.all()
            serializer = SellingSerializer(buyers,many=True)
            return Response(serializer.data)
        else:
            message = {'detail':'Provided info not compaitable'}
            return Response(message)
    except:
        message = {'detail':'Could not find order with given id'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

@api_view(('GET',))
@permission_classes([IsAuthenticated])
def get_sell(request):
    buyers = Selling.objects.all()
    serializer = SellingSerializer(buyers,many=True)
    return Response(serializer.data)  

@api_view(('POST',))
def create_sell(request):
    data = request.data
    try:
        order = Selling.objects.create(
            name = data["name"],
            enrollment_number = data["enrollment_number"],
            phone_number = data["phone_number"],
            hostel = data["hostel"],
            room_number = data["room_number"],
            amount_asked = data["amount_asked"]
        )
        message ={'detail' : 'Order placed successfully'}
        return Response(message)
    except:
        message = {'detail':'Data not compaitable'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)       


        