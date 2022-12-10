# Import library
import tensorflow as tf
import numpy as np
from flask import redirect, render_template, url_for, request, json
from keras.models import load_model
from app import app

# Load fresh rotten model
fresh_rotten_model = load_model('app/models/model_dir/model.h5')

# Read label dictionary
def fresh_rotten_label(result):
    with open('app/models/label_dir/fresh_rotten_dic.json', 'r') as file:
        labels = json.load(file)

    for key, value in labels.items():
        if str(result) == key:
            label_value = value

    return label_value

# Allowed filename extension
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Predict image
def predict_image(img_path):
    img = tf.keras.utils.load_img(img_path, target_size=(150, 150))
    img_array = tf.keras.utils.img_to_array(img)
    img_array = tf.expand_dims(img_array, axis=0)
    predictions = fresh_rotten_model.predict(img_array)
    return np.argmax(predictions)

# Render landing page
@app.route('/')
def index():
    return render_template('index.html')

# Render predict page
@app.route('/fresh-rotten')
def fresh_rotten():
    return render_template('fresh-rotten.html')

# Render result page
@app.route('/result-fresh-rotten', methods=['POST'])
def result_fresh_rotten():
    file = request.files['file']
    if file and allowed_file(file.filename):
        img_path = 'app/static/user_uploads/' + file.filename
        file.save(img_path)
        prediction = predict_image(img_path)
        result = fresh_rotten_label(prediction)
        return render_template('fresh-rotten-predict.html', prediction=result)
    else:
        return redirect(url_for('fresh_rotten'))

# Render about page
@app.route('/about')
def about():
    return render_template('about.html')

