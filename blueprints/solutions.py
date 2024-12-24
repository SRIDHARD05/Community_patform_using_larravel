from flask import Blueprint, request, jsonify, render_template
import base64
from datetime import datetime
from uuid import uuid4
from src.Group import Group
from src.Database import Database
from src.Solution import Solution
from src.Queries import Queries

bp = Blueprint("solutions", __name__, url_prefix="/solutions")


@bp.route('/<queries_id>/solution', methods=['GET'])
def solutions(queries_id):
    queries_id = queries_id.replace("querie-", "")

    questions = Queries.get_by_query_id(queries_id)
    # print(questions)
    solutions = Solution.get_by_id(queries_id)
    print(solutions)

    return render_template("/solutions/home.html", solutions=solutions,questions = questions[0])


@bp.route('/save', methods=['POST'])
def save_solution():
    try:
        data = request.get_json()
        query_id = data.get("query_id")
        answer = data.get("answer")

        if not query_id or not answer:
            return jsonify({"error": "query_id and answer are required"}), 400

        result = Solution.register_solutions(
            answer_id=str(uuid4()),
            questions_id=query_id,
            user_id="test_user",
            answer=answer,
            created_at=datetime.now(),
            upvotes_count=0,
            downvotes_count=0,
            is_accepted=False
        )

        return jsonify({"message": "Solution saved successfully", 'status' : 'success'}), 201

    except Exception as e:
        print(f"Error in /solutions/save: {e}")
        return jsonify({"error": str(e)}), 500