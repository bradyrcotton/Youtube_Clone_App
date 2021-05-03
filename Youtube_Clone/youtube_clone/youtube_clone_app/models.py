from django.db import models
# Create your models here.


class Videos(models.Model):
    Comments = models.CharField(max_length=50)

    def __str__(self):
        return self.name
