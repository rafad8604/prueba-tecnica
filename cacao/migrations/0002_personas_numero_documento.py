# Generated by Django 5.2.3 on 2025-07-01 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cacao', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='personas',
            name='numero_documento',
            field=models.CharField(default=0, max_length=20, unique=True),
            preserve_default=False,
        ),
    ]
