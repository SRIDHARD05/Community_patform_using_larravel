from src.Database import Database
from uuid import uuid4

# Get a MongoDB connection
db = Database.get_connection()

class QueriesCollection:
    def __init__(self, id):
        self._collection = db.groups
        self._filter_query = {
            '$or': [
                {'id': id},
                {'name': id}
            ]
        }
        self._data = self._collection.find_one(self._filter_query)
        if not self._data:
            raise ValueError(f"No matching document found for id: {id}")

    def __getattr__(self, name):
        if name in self._data:
            return self._data[name]
        raise AttributeError(f"'QueriesCollection' object has no attribute '{name}'")

class Queries:
    def __init__(self, id):
        try:
            self.collection = QueriesCollection(id)
            self.id = self.collection.id
        except ValueError as e:
            print(f"Error initializing Queries: {e}")
            self.collection = None
            self.id = None

    @staticmethod
    def register_queries(group_id, query_id, user_id, query_title, query_description, created_at, status, tags, user_email):
        collection = db.queries
        result = collection.insert_one({
            "group_id": group_id,
            "query_id": query_id,
            "user_id": user_id,
            "query_title": query_title,
            "query_description": query_description,
            "created_at": created_at,
            "status": status,
            "tags": tags,
            "user_email": user_email
        })
        return {"inserted_id": result.inserted_id}

    @staticmethod
    def get_by_id(group_id):
        collection = db.queries
        queries = collection.find({"group_id": group_id})
        # print(f"Queries {queries}")
        return list(queries)

    @staticmethod
    def get_by_query_id(query_id):
        collection = db.queries
        queries = collection.find({"query_id": query_id})
        # print(f"Queries {queries}")
        return list(queries)

