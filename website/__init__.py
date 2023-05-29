from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from werkzeug.utils import secure_filename
from flask_cors import CORS
from os import path
from .models import *
from .views import *
from .auths import *





UPLOAD_FOLDER = 'temp/'
ALLOWED_EXTENSIONS = {'txt','tif'}

def create_app():
    app = Flask(__name__)
    CORS(app)
   

    app.config['SECRET_KEY'] = '1221200015'
    # postgresql ://username:password@localhost:port/dbname
    app.config['SQLALCHEMY_DATABASE_URI']="postgresql://postgres:0000@localhost:5432/webAppDB"
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

    app.register_blueprint(view, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    


    app.register_error_handler(404, page_not_found)
    db.init_app(app)
    loginManger = LoginManager()
    loginManger.login_view = "auth.goLogin"
    loginManger.init_app(app)

    @loginManger.user_loader
    def loadUser(user_id):
        return Users.query.get(int(user_id))
    
    return app



