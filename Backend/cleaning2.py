import numpy as np
import pandas as pd
import tensorflow as tf
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler

def main():
    # Load the dataset
    df = pd.read_csv('final.csv')

    # Split the data into features (inputs) and target (output)
    X = df[['Latitude', 'Longitude']]
    y = df[['Relative Humidity', 'Wind Speed', 'Temperature', 'GHI']]

    # Scale the data
    scaler = MinMaxScaler()
    X = scaler.fit_transform(X)
    y = scaler.fit_transform(y)

    # Split the data into training and testing sets
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

    # Define the model
    model = tf.keras.Sequential()
    model.add(tf.keras.layers.Dense(128, activation='relu', input_shape=(2,)))
    model.add(tf.keras.layers.Dense(64, activation='relu'))
    model.add(tf.keras.layers.Dense(32, activation='relu'))
    model.add(tf.keras.layers.Dense(16, activation='relu'))
    model.add(tf.keras.layers.Dense(4))

    # Compile the model
    model.compile(optimizer='adam', loss='mean_squared_error', metrics=['accuracy'])

    # Train the model
    model.fit(X_train, y_train, epochs=500, batch_size=16, validation_split=0.25, verbose=2, validation_data=(X_test, y_test))

    # Evaluate the model
    _, accuracy = model.evaluate(X_test, y_test)
    print("Accuracy: {:.2f}%".format(accuracy * 100))
    model.save('/Users/adhishrajan/Desktop/hacklytics/')


    coordinate = np.array([[33.8085, -84.8422]])
    coordinate = coordinate.reshape(1, 2)

    # Use the model to make predictions
    ghi = model.predict(coordinate)

    # Print the predictions
    print("Relative Humidity:", ghi[0][0])
    print("Wind Speed:", ghi[0][1])
    print("Temperature:", ghi[0][2])
    print("GHI:", ghi[0][3])
    print("cost:", cost_function(ghi))

def cost_function(ghi):
    if ghi[0][3] >= 100:
        return 1.0
    else:
        return ghi[0][3] / 100


if __name__ == "__main__":
    main()