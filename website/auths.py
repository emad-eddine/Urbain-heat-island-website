from flask import Blueprint, render_template,request,redirect,url_for,flash
from flask_login import login_user,login_required,logout_user,current_user
from werkzeug.security import generate_password_hash,check_password_hash

from .models import *


auth = Blueprint("auth",__name__)


@auth.route("/login",methods=['GET', 'POST'])
def goLogin():
    if request.method == 'POST':
        userName = request.form.get("Username")
        password = request.form.get("password")

        userObj = Users.query.filter_by(user_name=userName,user_password=password).first()

        if userObj:
            login_user(userObj)
            return redirect(url_for("view.goHome",user = current_user))
        else:
            print("not found ")

    return render_template("login.html",user = current_user)



@auth.route('/signup',methods=['GET','POST'])
def goSignup():

    if request.method == 'POST':
        username = request.form.get("Username")
        email = request.form.get('email')
        password = request.form.get('password')

        # check the data before submit to DB
        # check if username and email are unique
        userCheck = Users.query.filter_by(user_name=username,user_email=email).first()

        if userCheck:
            flash("Utilisateur déja exister")
            snackBar = 'show'
            fName = 'hideSnackBar()'
            print(snackBar)
            return render_template("signup.html",user = current_user,snackBar = snackBar,hideSnackBarF = fName)

        else:
            userObj = Users(username,email,password)
            db.session.add(userObj)
            db.session.commit()
            return redirect(url_for("auth.goLogin"))

    return render_template("signup.html",user = current_user)



@auth.route('/logout')
@login_required
def logOut():
    logout_user()
    return redirect(url_for("auth.goLogin"))
