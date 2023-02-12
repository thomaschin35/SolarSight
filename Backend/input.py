import numpy as np
import pandas as pd

# Load the trained model
from keras.models import load_model
model = load_model('/models/')

# Function to pre-process the input data
def preprocess_data(latitude, longitude):
    # Convert to numpy array
    data = np.array([[latitude, longitude]])
    # Standardize the data
    data = (data - data.mean()) / data.std()
    data = data.reshape(1,2)
    return data

# Function to make a prediction
def make_prediction(latitude, longitude):
    # Pre-process the data
    data = preprocess_data(latitude, longitude)
    # Make a prediction
    prediction = model.predict(data)
    return prediction[0][3]

# Get the user's input for latitude and longitude
latitude = float(input("Enter latitude: "))
longitude = float(input("Enter longitude: "))

# Make a prediction
predicted_ghi = make_prediction(latitude, longitude)

# Output the result
print("The predicted GHI is:", predicted_ghi)