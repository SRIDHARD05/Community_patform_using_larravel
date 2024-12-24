from src.Database import Database
from uuid import uuid4

db = Database.get_connection()

class SolutionCollection:
    def __init__(self, id):
        self._collection = db.solutions
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
        raise AttributeError(f"'SolutionCollection' object has no attribute '{name}'")

class Solution:
    def __init__(self, id):
        try:
            self.collection = SolutionCollection(id)
            self.id = self.collection.id
        except ValueError as e:
            print(f"Error initializing Solution: {e}")
            self.collection = None
            self.id = None

    @staticmethod
    def get_by_id(query_id):
        collection = db.solutions
        solutions = collection.find({"questions_id": query_id})
        return list(solutions)

    @staticmethod
    def register_solutions(answer_id, questions_id, user_id, answer, created_at, upvotes_count, downvotes_count, is_accepted):
        collection = db.solutions
        result = collection.insert_one({
            'answer_id': answer_id,
            'questions_id': questions_id,
            'user_id': user_id,
            'answer': answer,
            'created_at': created_at,
            'upvotes_count': upvotes_count,
            'downvotes_count': downvotes_count,
            'is_accepted': is_accepted
        })
        return {"inserted_id": result.inserted_id}

