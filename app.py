from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/api/submit-form', methods=['POST, GET'])
def submit_form():
    form_data = request.json
    print("Received form data:", form_data)

    # You can store this in a database here
    return jsonify({'message': 'Form received successfully', 'received': form_data}), 200


# # ------------------ Init ------------------
if __name__ == "__main__":
    app.run(debug=True)
