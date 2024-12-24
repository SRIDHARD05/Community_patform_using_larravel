import sys

from flask import Flask
from flask import Flask, redirect, url_for, request, render_template, session
import os
import math
import base64
from src import get_config
from src.Group import Group
from blueprints import queries, dialog, solutions

app = Flask(__name__, static_folder='assets', static_url_path="/")


@app.route('/')
def index():
    groups = list(Group.get_groups())
    return render_template('dashboard.html',groups=groups)


app.register_blueprint(queries.bp)
app.register_blueprint(solutions.bp)

if __name__ == '__main__':
   app.run(host='0.0.0.0', port=7000, debug=True)