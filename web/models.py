from django.db import models
import uuid
from django.db import models
from django.core.validators import RegexValidator

# Create your models here.
class Flan(models.Model):
    flan_uuid = models.UUIDField()
    name = models.CharField(max_length=64)
    description = models.TextField()
    img_url = models.URLField()
    slug = models.SlugField()
    is_private = models.BooleanField()
    price = models.IntegerField(null=True)

class ContactForm(models.Model):
    contact_form_uuid = models.UUIDField(default=uuid.uuid4, editable = False)
    customer_email = models.EmailField()
    customer_name = models.CharField(max_length=64)
    message = models.TextField()

class Producto(models.Model):
    producto_uuid = models.UUIDField(default=uuid.uuid4, editable = False)
    name = models.CharField(max_length=64)
    img_url = models.URLField()
    slug = models.SlugField()
    price = models.IntegerField(null=True)

