  
import os
from flask_admin import Admin
from .models import db, User, People, Starships, Planets
from flask_admin.contrib.sqla import ModelView

class UserView(ModelView):
    colum_list = ['email', 'is_active', '_password']
    column_editable_list = ['is_active']
    create_modal = True
    edit_modal = True
    # form_extra_fields = {
    #     'password': PasswordField('password')
    # }


def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(People, db.session))
    admin.add_view(ModelView(Starships, db.session))
    admin.add_view(ModelView(Planets, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))