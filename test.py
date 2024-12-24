from pymongo import MongoClient
from mongogettersetter import MongoGetterSetter
from src.Database import Database
from src.Group import Group
from src.Queries import Queries

# Connect to the MongoDB database and collection

# client = MongoClient("mongodb+srv://sridhardcse:sridhar@cluster0.59wpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
# db = client["community"]
# collection = db["groups"]

# print(collection)


db = Database.get_connection()
# Group.register_group("Group1","This is a Sample Group 1")
# Group.register_group("Group2","This is a Sample Group 2")
# Group.register_group("Group3","This is a Sample Group 3")
# Group.register_group("Group4","This is a Sample Group 4")
# Group.register_group("Group5","This is a Sample Group 5")
# Group.register_group("Group6","This is a Sample Group 6")
# Group.register_group("Group7","This is a Sample Group 7")
# Group.register_group("Group8","This is a Sample Group 8")


Queries.register_queries()
