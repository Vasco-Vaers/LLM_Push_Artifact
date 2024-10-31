# main.py

from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime  # Import datetime module retirar depois
import pymysql

# flask instance
app = Flask(__name__)
# Add database

app.config ['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:UrsoPollar2@localhost:1106/hello'
app.config ['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# initialize the database
db = SQLAlchemy(app) 

# ----  API routes and controllers

# retirada bloco dia 06.05 '''
class Notification_table(db.Model):
    __tablename__ = 'notifications'
    notificationid = db.Column(db.Integer, primary_key=True)
    createAt = db.Column(db.TIMESTAMP) #,default=datetime.now,nullable=False
    prompt = db.Column(db.String)
    _type = db.Column(db.String(50))
    greeting = db.Column(db.String)
    pass

    def __init__ (self, createAt, prompt, _type, greeting):
        self.createAt = createAt
        self.prompt = prompt
        self._type = _type
        self.greeting = greeting

from sqlalchemy import ForeignKey

# Define the main page route
@app.route ("/")
def main():
    return render_template('main.html')
 
#import class Chatgpt
from controller.chatgpt import Chatgpt 

# Define response title route - falta atulizar na JS Ajax
@app.route('/print_title', methods=['POST'])
def print_title():
    title_notification = request.form.get('notification')
    gpt=Chatgpt() #criation of object gpt
    responsenot=gpt.chat_with_gpt(title_notification)
    greeting = f'notification: {title_notification} \nfeedback: {responsenot}' 
    # definition of date of the commit
    current_datetime = datetime.now()
    # call of the variables
    from database_prompt import notification_table 
    #from database_table import Notification_table
    push_db = notification_table (createAt=current_datetime, prompt=title_notification, _type='title', greeting=responsenot) 
    app.app_context()
    db.session.add(push_db)
    db.session.commit()

    return jsonify ({'greeting': greeting})


@app.route('/print_body', methods=['POST'])
def print_body():
    notification = request.form.get('notification') 
    gpt=Chatgpt() #criation of object gpt
    responsenot=gpt.chat_with_gpt(notification)
    greeting = f'notification: {notification} \nfeedback: {responsenot}' 
    return jsonify({'greeting': greeting})


# import class Dalle
from controller.dalle import Dalle

@app.route('/print_image', methods=['POST'])
def print_image():
    image = request.form.get('image')
    dalle = Dalle()
    image_url = dalle.chat_with_dalle(image)
    greeting = f'image: {image} \nfeedback: {image_url}' 
    return jsonify({'greeting': greeting})


from datetime import datetime  # Import datetime

@app.route('/commit_feedback', methods=['POST'])
def commit_title():
    slider_value = request.form['sliderValue']
    print("Slider value submitted:", slider_value)
    
    current_datetime = datetime.now()  # Get current datetime
    
    # Assuming db is the SQLAlchemy database object
    from database_feedback import feedback_table 
    #from database_prompt import notification_table
    pushFeedback_db = feedback_table(createdAt=current_datetime, feedbackValue=slider_value)
    
    db.session.add(pushFeedback_db)
    db.session.commit()

    return jsonify({'feedback': slider_value})

    

if __name__=="__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)