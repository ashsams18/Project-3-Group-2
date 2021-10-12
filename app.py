import numpy as np
import os

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
file_dir = os.path.abspath(os.path.dirname(os.path.realpath(__file__)))
db_path = f"sqlite:///{file_dir}/"
print(db_path)
engine = create_engine(db_path)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)
print(Base.classes.keys())




app = Flask(__name__)
@app.route("/")
def homepage():
    """List all available api routes."""
    return (
        f"Homepage:<br/>"
        f"/biodiversity"
    )



if __name__ == '__main__':
    app.run(debug=True)
