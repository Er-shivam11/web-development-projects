# Generated by Django 4.2 on 2023-05-16 06:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("luxmart", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="sign_up",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("first_name", models.CharField(max_length=100)),
                ("last_name", models.CharField(max_length=100)),
                ("email", models.EmailField(max_length=254)),
                ("password", models.CharField(max_length=100)),
            ],
        ),
        migrations.AddField(
            model_name="car",
            name="car_image",
            field=models.ImageField(default="", upload_to="cars"),
        ),
        migrations.AlterField(
            model_name="car", name="speed", field=models.IntegerField(default=50),
        ),
    ]
