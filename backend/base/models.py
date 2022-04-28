from django.db import models
import uuid

# Create your models here.
    
class Buying(models.Model):
    id = models.UUIDField(default=uuid.uuid4,unique=True,primary_key=True,editable=False)
    date = models.DateField(auto_now_add=True)
    order_closed = models.BooleanField(default=False)
    name = models.CharField(max_length=200)
    enrollment_number = models.CharField(max_length=10)
    phone_number = models.CharField(max_length=10)
    hostel = models.CharField(max_length=15)
    room_number = models.IntegerField()
    order_choices = (
        ('buy','BUY'),
        ('rent', 'RENT'),
        ('maintenance','MAINTENANCE')
    )
    order_type = models.CharField(max_length=15,choices=order_choices,default='buy')
    transaction_number = models.CharField(max_length=50)
    transaction_ss = models.ImageField(blank=True,null=True,default='default.jpg')
    def __str__(self):
        return self.name
    
    
class Selling(models.Model):
    id = models.UUIDField(default=uuid.uuid4,unique=True,primary_key=True,editable=False)
    date = models.DateField(auto_now_add=True)
    order_closed = models.BooleanField(default=False)
    name = models.CharField(max_length=200)
    enrollment_number = models.CharField(max_length=10)
    phone_number = models.CharField(max_length=10)
    hostel = models.CharField(max_length=15)
    room_number = models.IntegerField()
    amount_asked = models.IntegerField()
    image = models.ImageField(blank=True,null=True,default='default.jpg')
    def __str__(self):
        return self.name
