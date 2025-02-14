from django.db import models
from django.contrib.auth.models import User

class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notes')

    def __str__(self):
        return self.title


# class Unit(models.Model):
#     title = models.CharField(max_length=100)
#     type = models.CharField(max_length=100)
#     models = models.IntegerField()
#     point_const = models.IntegerField()
    
#     def __str__(self):
#         return self.title

# class Formation(models.Model):
#     title = models.CharField(max_length=100)
#     composition = models.ManyToManyField(UnitClass, related_name="formations") # a formation has many units 
#     s_description = models.CharField(max_length=100)
#     l_descriptio = models.CharField()
#     image = models.ImageField(upload_to="images/")
#     faction = models.CharField(max_length=100)
#     subfaction = models.CharField(max_length=100)

#     action_points = models.IntegerField()      # amount of actions a formation can do in a turn.
#     work_force = models.IntegerField()         # points to complete the an action.
#     damage = null
#     defense = models.IntegerField()
#     model_count = models.IntegerField()
#     vision = models.IntegerField()
#     Xp = models.IntegerField()
#     actions = models.JSONField(default=list)
#     intelligence = models.IntegerField()1
#     level = models.IntegerField()
#     benefits = models.JSONField(default=list)                               # this benefits come from the formation type if there is one 
#     badges = models.JSONField(default=list)                                 # this are archievements as formation
#     movement = models.IntegerField()
#     maxMovement = models.IntegerField()
#     type = undefined                          # this comes from the composition of the formation (old 40k formations rules)
#     dedicat ion=models.JSONField(default=list)                             # this are enancements assigned to the formation by user
#     color='white'                             # faction related
#     subColor='white'                          # user choice
#     is_listed = models.BooleanField()
#     point_const = models.IntegerField()  
#     carry_capacity = models.IntegerField()    # from the units
#     infantry_count = models.IntegerField()
#     isBeen = models.BooleanField()
#     isMoved = models.BooleanField()
#     army = models.ForeignKey(Army, on_delete=models.CASCADE, related_name="formations") # army that owns it
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='armies')

#     def __str__(self):
#         return self.title

# class Army(models.Model):
#     title = models.CharField(max_length=100)
#     content = models.TextField()
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='armies')

#     def __str__(self):
#         return self.title
    
# class Campaign_Map(models.Model):
#     title = models.CharField(max_length=100)
#     shape = models.CharField(max_length=8)
#     dimensions = models.CharField(max_length=8)
#     map = models.TextField()
#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='maps')

#     def __str__(self):
#         return self.title