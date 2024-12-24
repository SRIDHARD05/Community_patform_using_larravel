from flask import Blueprint, request, jsonify, render_template
import base64
from datetime import datetime
from uuid import uuid4
from src.Group import Group
from src.Database import Database
from src.Queries import Queries

bp = Blueprint("queries", __name__, url_prefix="/queries")


@bp.route('/<group_id>/questions', methods=['GET'])
def queries(group_id):
    group_id = group_id.replace("group-", "")

    queries = Queries.get_by_id(group_id)

    if queries is None:
        print(queries)
    
    return render_template("/queries/home.html", queries=queries)

@bp.route('/create')
def create_query():
    groups = list(Group.get_groups())
    # print(groups)
    return render_template('dialogs/query_create.html',groups = groups)


@bp.route('/save', methods=['POST'])
def save_query():
    try:
        data = request.get_json()

        if not all(key in data for key in ['question_title', 'group_id', 'question_descriptions']):
            return jsonify({'status': 'error', 'message': 'Missing required fields'}), 400

        query_title = data['question_title']
        group_id = data['group_id']
        query_description = data['question_descriptions']

        user_id = 'user_id'
        status = 'solved/Not_solved'
        tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5']
        user_email = 'user@gmail.com'

        query_result = Queries.register_queries(
            group_id=group_id,
            query_id=str(uuid4()),
            user_id=user_id,
            query_title=query_title,
            query_description=query_description,
            created_at=datetime.now().isoformat(),
            status=status,
            tags=tags,
            user_email=user_email
        )
        # print(query_result)

        return jsonify({
            'status': "success",
            'message' : 'record saved successfully'
        }), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

