from datetime import datetime #tratar disto

from main_route import db  # frst developd in main - working? test
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


notification_table = Notification_table