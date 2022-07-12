"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Planets, People, Starships
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }


@api.route('/people', methods=['GET'])
def get_people():
    people = People.query.all()
    if people is None:
        return jsonify(msg="This person does not exist"),400
    else:
        return jsonify(
        data=[person.serialize() for person in people]),200

@api.route('/people/<int:id>', methods=['GET'])
def get_person(id):
    people = People.query.filter(
        people.id == id
    ).one_or_none()
    if people is None:
        return jsonify(msg="This person does not exist"),400
    else:
        return jsonify(
            data=person.serialize()
        ),200

@api.route('/planets', methods=['GET'])
def get_planets():
    planets = Planets.query.all()
    if planets is None:
        return jsonify(msg="This person does not exist"),400
    else:
        return jsonify(
        data=[planet.serialize() for planet in planets]),200

@api.route('/planets/<int:id>', methods=['GET'])
def get_planet(id):
    planets = Planets.query.filter(
        planets.id == id
    ).one_or_none()
    if planet is None:
        return jsonify(msg="This person does not exist"),400
    else:
        return jsonify(
            data=planet.serialize()
        ),200

@api.route('/starships', methods=['GET'])
def get_starships():
    starships = Starships.query.all()
    if starships is None:
        return jsonify(msg="This person does not exist"),400
    else:
        return jsonify(
        data=[starship.serialize() for starship in starships]),200

@api.route('/starships/<int:id>', methods=['GET'])
def get_starship(id):
    starships = Starships.query.filter(
        starships.id == id
    ).one_or_none()
    if starship is None:
        return jsonify(msg="This person does not exist"),400
    else:
        return jsonify(
            data=starship.serialize()
        ),200

    return jsonify(response_body), 200


@api.route('/protected', methods=['GET'])
@jwt_required()
def super_secret():
        id=get.jwt.identity(),
        return jsonify(secret_message='Hello World')


@api.route('/login', methods=['POST'])
def login():
    body = request.json
    """
    {
        "email": "Some User Authenticator",
        "pass": "Some User Password"
    }
    """
    user = User.query.filter_by(
        email=body.get("email","").lower()
    ).first()

    if body:
        if body.get("pass", None) == user.password:
            return jsonify(
                token=create_access_token(
                    identity=user.email
                    )
            ),200
        return jsonify(msg="incorect passowrd or username"),400

