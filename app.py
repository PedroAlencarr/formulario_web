from flask import Flask, jsonify, render_template
from flask_cors import CORS
import requests


app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

#aqui eu retorno um json para que possa ser manipulado no javascript
@app.route('/api/users')
def users(): 
    response = requests.get('https://randomuser.me/api/?results=10')
    users = response.json().get('results', [])
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True)
