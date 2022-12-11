# Modelling Fresh Rotten Classifications

## 🎯 Summary & Goals

Fruity has the main feature of classifying fruit quality by predicting the input image and classify image into one of six classes. The results of the classification must indicate whether the quality of the fruit is rotten or fresh, such as fresh apples, rotten bananas, etc.

------

## ⚡️How to make the model?

### **Data Preparation for Modelling**

1. **Load the required libraries**, The main library used is Tensorflow, which is a free and open source software library for machine learning and artificial intelligence. It can be used across a wide range of tasks but has a particular focus on deep neural network training and inference.

2. **Data Loading**, This dataset contains image data of fruits. With six classes namely:,
     - `Fresh Apples`: 1693 images,
     - `Fresh Bananas`: 1581 images,
     - `Fresh Oranges`: 1466 images,
     - `Rotten Apples`: 2342 images,
     - `Rotten Bananas`: 2224 images,
     - `Rotten Oranges`: 1595 images,

3. **Image Augmentation**, Deep networks need large amount of training data to achieve good performance. To build a powerful image classifier using very small training data, image augmentation is usually required to boost the performance of deep networks. In this code, image augmentation artificially creates training images through rescale image.


### **Modelling Process**

4. **Create object model's**. In this case, the model uses 12 layers of Keras' Dense layer. The model architecture's is built on top of the Feature Extraction Layer and Fully-Connected Layer (MLP). The feature extraction layer consists of two parts, **convolutional** and **pooling layers**. Meanwhile, for most of the layers, the activation function used in the model is **ReLu**. In the last layer, the **softmax** activation is used to perform multi-class classification.

5. **Compile the model**. The loss used in this optimization is categorical cross-entropy. To fit this model better, the Adamax optimizer is used with accuracy as the metric.

6. **Define the callbacks function**. callback is used to stop train while the accuracy has reached the threshold of the accuracy (in this scoop is 0.99). This function is very helpful to save program runtime without requiring the training to finish at the last epoch.

7. **Define checkpoint function**. This checkpoint is used to save best model after each iteration. The model is stored in the models folder in the form of a .h5 file.

8. **Model fit for train**. Keras fit is the method used for the model training on the data set. In this case, fit the model with the epoch of 30.

    
### **Evaluating Model Performance**

9. **Plot accuracy models**. The plot on the graph shows accuracy of train set and the test set. If the accuracy continues to increase, then the model is good fit and vice-versa. However, it could be that increase in accuracy on train set is not followed by the accuracy on test set. This will cause the model to overfit.

10. **Plot loss models**. As the opposite of accuracy, the plot is for loss of both the train set and the test set. If it continues to decrease, then the model is good-fit.



### **Saving Models**

11. The last model, the best model, is saved to an .h5 file, which will be used as baseline models.

------

## ⚛ How to use the model?

The testing process can be done in either `tf_baseline_model`.ipynb and try test execution in `tf_test.py`.

Below is the how to use this testing model step by step:

1. Load the library
2. Run the main function to load the model
3. Input the image link (absolute path on your local computer)
4. Get the classification result

------