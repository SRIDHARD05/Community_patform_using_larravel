from flask import Blueprint, request, jsonify, render_template
import base64
from datetime import datetime
from uuid import uuid4
from src.Group import Group
from src.Database import Database
from src.Queries import Queries

bp = Blueprint("groups", __name__, url_prefix="/groups")


# @bp.route('/<group_id>/questions', methods=['GET'])
# def queries(group_id):
#     group_id = group_id.replace("group-", "")

#     queries = Queries.get_by_id(group_id)

#     if queries is None:
#         print(queries)
    
#     return render_template("/queries/home.html", queries=queries)

@bp.route('/create')
def create_groups():
    return render_template('dialogs/group_create.html')



@bp.route('/save', methods=['POST'])
def save_groups():
    try:
        data = request.get_json()

        if not all(key in data for key in ['name', 'desc']):
            return jsonify({'status': 'error', 'message': 'Missing required fields'}), 400
        
        # print(data)
        name = data['name']
        desc = data['desc']

        group_result =  Group.register_group(name, desc)
    
        return jsonify({
            'status': "success",
            'message' : 'record saved successfully',
            'result' : group_result
        }), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

