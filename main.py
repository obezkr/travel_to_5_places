from flask import Flask, render_template, request, jsonify
import datetime

app = Flask(__name__)

# Route for the About Us page
@app.route('/about_us')
def about_us():
    return render_template("about_us.html")

# AJAX endpoint to get the current time
@app.route('/get_time', methods=['GET'])
def get_time():
    # Add your logic to fetch the current time here
    # For simplicity, let's assume we're getting it from a function called get_current_time()
    current_time = datetime.datetime.now()

    return jsonify({'time': current_time})

if __name__ == '__main__':
    app.run()