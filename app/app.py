# Import library
from flask import Flask, render_template, url_for

# Create flask app
app = Flask(__name__)

# Render landing page
@app.route('/')
def index():
    return render_template('index.html')

# Render predict page
@app.route('/fresh-rotten')
def fresh_rotten():
    return render_template('fresh-rotten.html')

# Render result page
@app.route('/result-fresh-rotten')
def crop_disease():
    return render_template('fresh-rotten-predict.html')

# Run flask app
if __name__ == '__main__':
    app.run(debug=True)
