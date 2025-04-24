from flask import Blueprint, request, jsonify, render_template
import base64

bp = Blueprint("dialog", __name__, url_prefix="/dialog")


@bp.route('/queries/create')
def create_query():
    return render_template('queries/dialogs/query_create.html')
