import numpy as np
import os

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template


#################################################
# Database Setup
#################################################
db_path = f"sqlite:///save_pandas.db"
print(db_path)
engine = create_engine(db_path)

app = Flask(__name__)
@app.route("/")
def homepage():
    """List all available api routes."""
    return render_template("index.html")

@app.route("/pop")
def pop():
    Popdata = engine.execute("SELECT * FROM Pop")
    Popdata


    population = []
    for Index,Country,Y1963,Y1973,Y1983,Y1993,Y2003,Y2013 in Popdata:
            population_dict = {}
            population_dict["Country"] = Country
            population_dict["Y1963"] = Y1963
            population_dict["Y1973"] = Y1973
            population_dict["Y1983"] = Y1983
            population_dict["Y1993"] = Y1993
            population_dict["Y2003"] = Y2003
            population_dict["Y2013"] = Y2013
            population.append(population_dict)
    return jsonify(population)

@app.route("/temp")
def temp():
    Tempdata = engine.execute("SELECT * FROM Temp")
    Tempdata
    temp = []
    for Index,Country,Y1963,Y1973,Y1983,Y1993,Y2003,Y2013 in Tempdata:
            temp_dict = {}
            temp_dict["Country"] = Country
            temp_dict["Y1963"] = Y1963
            temp_dict["Y1973"] = Y1973
            temp_dict["Y1983"] = Y1983
            temp_dict["Y1993"] = Y1993
            temp_dict["Y2003"] = Y2003
            temp_dict["Y2013"] = Y2013
            temp.append(temp_dict)
    return jsonify(temp)



if __name__ == '__main__':
    app.run(debug=True)
