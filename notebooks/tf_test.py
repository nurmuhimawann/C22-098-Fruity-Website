# Import all library
import os
import tensorflow as tf
import numpy as np
import json
from PIL import Image

# Function to load model
def load_model():
    model = tf.keras.models.load_model('model_dir/model.h5')
    return model

# Function to predict image
def predict_image(path):
    img = tf.keras.utils.load_img(
        path, target_size=(150, 150)
    )

    img_array = tf.keras.utils.img_to_array(img)
    img_array = tf.expand_dims(img_array, axis=0)

    predictions = model.predict(img_array)
    score = tf.nn.softmax(predictions[0])

    return np.argmax(predictions)

# Function to decode label
def label_decode(result):

    with open('fresh_rotten_dic.json', 'r') as file:
        labels = json.load(file)

    for key, value in labels.items():
        if str(result) == key:
            return value


# run test.py
if __name__ == "__main__":
    model = load_model()
    result = predict_image(input("Input path of the image: "))
    last_result = label_decode(result)
    print("This Fruits is: {}".format(last_result))
