# Generated by Django 4.1.1 on 2022-10-06 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_detailupdatesituation'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='updated_detail',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]