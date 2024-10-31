# test version
from main_route import db  
from sqlalchemy import ForeignKey

class Feedback_table(db.Model):
    __tablename__ = 'feedbacks'
    feedbackId = db.Column(db.Integer, primary_key=True)
    notificationid = db.Column(db.Integer, ForeignKey('notifications.notificationid'))  # Assuming you have a notifications table
    createdAt = db.Column(db.TIMESTAMP)  # You might consider adding a default value or making it non-nullable
    feedbackValue = db.Column(db.String)  # Adjusted to use a valid SQLAlchemy data type
    
    def __init__(self, createdAt, feedbackValue):
        self.createdAt = createdAt
        self.feedbackValue = feedbackValue

# Variable feedback_table for calling the route
feedback_table = Feedback_table
