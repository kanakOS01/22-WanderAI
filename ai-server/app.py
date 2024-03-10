from flask import Flask, request, jsonify, render_template
import utils
from flask_cors import CORS 
import requests

app = Flask(__name__)
CORS(app)

@app.route('/hello_world')
def hello_world():
    return 'Hello, World!' 

@app.route('/bot_response', methods=['GET', 'POST'])
def bot_response():
    itinerary = ""
    if request.method == 'GET':
        try:
            # Access the Authorization header from the request
            authorization_header = request.headers.get('Authorization')

            # Print the authorization header for debugging
            print("Authorization header:", authorization_header)

            # Define the headers including the received Authorization header
            headers = {
                'Authorization': authorization_header,
                # 'Content-Type': 'application/json'  # Assuming JSON content type
            }
            # Send a GET request to the external server
            response = requests.get("https://wander-ai-server.onrender.com/api/_v1/itenary/active", headers=headers)

            # Extract the content from the response
            itinerary = response.json()

            # Print the received itinerary for debugging
            print("Received itinerary:", itinerary)

            # Return the itinerary as JSON response
            return jsonify({'itinerary': itinerary})
        except Exception as e:
            print("Error:", e)
            return e
        
    print('giving input')
    if request.method == 'POST':
        user_input = request.form.get('bot_input')
    else:
        user_input = request.args.get('bot_input')
    
    print(user_input)

    if user_input is None:
        return jsonify({'error': 'Missing parameter: bot_input'}), 400

    response = jsonify({
        'bot_response': utils.bot_response(user_input, itinerary)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response
    # else:
    #     # Render the HTML form for GET requests
    #     # return render_template('form.html')
    #     pass

@app.route('/get_itinerary', methods=['GET', 'POST'])
def get_itinerary():
    if request.method == 'POST':
        location = request.form.get('location')
        # duration = request.form.get('duration')
        startDate = request.form.get('startDate')
        endDate = request.form.get('endDate')
        budget = request.form.get('budget')
        type = request.form.get('type')
    else:
        location = request.args.get('location')
        # duration = request.args.get('duration')
        startDate = request.form.get('startDate')
        endDate = request.form.get('endDate')
        budget = request.form.get('budget')
        type = request.args.get('type')

    if location is None or startDate is None or type is None or endDate is None or budget is None:
        return jsonify({'error': 'Missing parameter: location, startDate, endDate, budget or type'}), 400

    response = jsonify({
        'itinerary': utils.get_itinerary(location, startDate, endDate, budget, type)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

@app.route('/get_translation', methods=['GET', 'POST'])
def get_translation():
    if request.method == 'POST':
        message = request.form.get('message')
        lang = request.form.get('lang')
    else:
        message = request.args.get('message')
        lang = request.args.get('lang')

    if message is None or lang is None:
        return jsonify({'error': 'Missing parameter: message or lang'}), 400

    response = jsonify({
        'translation': utils.get_translation(message, lang)
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

# @app.route('/', methods=['GET', 'POST'])
# def receive_itinerary():
#     # itinerary = request.args.get('message')
#     itinerary = requests.get("https://wander-ai-server.onrender.com/")
#     print(itinerary)
#     return jsonify({'itinerary': itinerary})

@app.route('/', methods=['GET', 'POST'])
def receive_itinerary():
    if request.method == 'GET':
        try:
            # Access the Authorization header from the request
            authorization_header = request.headers.get('Authorization')
            
            # Print the authorization header for debugging
            print("Authorization header:", authorization_header)
            
            # Define the headers including the received Authorization header
            headers = {
                'Authorization': authorization_header,
                # 'Content-Type': 'application/json'  # Assuming JSON content type
            }

            # Send a GET request to the external server
            response = requests.get("https://wander-ai-server.onrender.com/api/_v1/me/chat", headers=headers)
            
            # Extract the content from the response
            itinerary = response.json()
            
            # Print the received itinerary for debugging
            print("Received itinerary:", itinerary)
            
            # Return the itinerary as JSON response
            return jsonify({'itinerary': itinerary})
        except Exception as e:
            print("Error:", e)
            return jsonify({'error': 'Failed to retrieve itinerary'})

# if __name__ == '__main__':
#     print("Starting flask server")
#     app.run(debug=True)
    # app.run(host='0.0.0.0', port=5000)
#    app.run()
