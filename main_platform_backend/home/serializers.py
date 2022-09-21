from rest_framework import serializers

from home.models import Listing


class ListingSerializer(serializers.ModelSerializer):

    # def (self, req):
    #     super.list()
    class Meta:
        model = Listing
        fields = '__all__'
