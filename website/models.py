from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()

class Users(UserMixin,db.Model):

    __tablename__ = "users"
    user_id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(30))
    user_email = db.Column(db.String(250))
    user_password = db.Column(db.String(30))

    def __init__(self, name,email,password):
        self.user_name = name
        self.user_email = email
        self.user_password = password

    def get_id(self):
           return (self.user_id)
    