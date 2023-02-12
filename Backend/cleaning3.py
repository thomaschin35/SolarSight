import pandas as pd
import numpy as np
import pandas as pd
import os
import glob
import csv
import shutil
from pathlib import Path

def main():
    final = [
        'Temperature', 'GHI', 'Wind Speed', 'Pressure',
        'Relative Humidity', 'Solar Zenith Angle'
    ]

    df = pd.DataFrame(columns=['Temperature', 'GHI', 'Wind Speed', 'Pressure',
        'Relative Humidity', 'Solar Zenith Angle', 'Latitude', 'Longitude'])
    # df.to_csv('/Users/adhishrajan/Desktop/hacklytics/finals.csv')
    # path = os.getcwd()
    # csv_files = glob.glob(os.path.join(path, "*.csv"))
    csv_files = glob.glob("*.csv")
    csv_files.remove('finals.csv')


    # print(csv_files)

    with open('finals.csv', 'w', newline='') as csvfile:
            writer = csv.writer(csvfile, delimiter=' ', quotechar='|', quoting=csv.QUOTE_MINIMAL)
            for f in csv_files:
                print(f)
                # filepath = Path(f'/Users/adhishrajan/Desktop/hacklytics/finals/{f}new.csv')  
                # filepath.parent.mkdir(parents=True, exist_ok=True)
                # b = clean(f, filepath)
                b = clean(f)
                # print(len(df))
                df.loc[len(df)] = b

                # writer.writerow([b[0], b[1], b[2], b[3], b[4], b[5], b[6], b[7]])

    df.to_csv('/Users/adhishrajan/Desktop/hacklytics/finals.csv')

    #with open('final.csv', 'w', newline='') as file:

def clean(file):
    df = pd.read_csv(file)
    df = df.drop(columns=['Source','Location ID', 'City', 
        'State', 'Country', 'Time Zone',
        'Cloud Type -15', 'Cloud Type 0', 'DHI Units', 'DNI Units',
        'GHI Units', 'Solar Zenith Angle Units', 'Temperature Units',
        'Pressure Units', 'Relative Humidity Units', 'Precipitable Water Units',
        'Wind Speed Units', 'Dew Point Units', 'Wind Direction Units',
        'Cloud Type 1', 'Cloud Type 2', 'Cloud Type 3', 'Clearsky GHI Units',
        'Cloud Type 4', 'Cloud Type 5', 'Cloud Type 6', 'Cloud Type 7',
        'Cloud Type 8', 'Cloud Type 9', 'Cloud Type 10', 'Cloud Type 11',
        'Cloud Type 12', 'Fill Flag 0', 'Fill Flag 1', 'Fill Flag 2',
        'Fill Flag 3', 'Fill Flag 4', 'Fill Flag 5', 'Surface Albedo Units',
        'Version'])

    lat = df.iloc[0,0]
    lon = df.iloc[0,1]
    df = df.iloc[2:]
    df.rename(columns={'Latitude': 'Temperature', 'Longitude': 'GHI',
        'Time Zone': 'Wind Direction', 'Elevation': 'Relative Humidity', 
        'Local Time Zone': 'Pressure',
        'Clearsky DHI Units': 'Wind Speed',
        'Clearsky DNI Units': 'Solar Zenith Angle'}, inplace=True)
    df['GHI'] = df['GHI'].astype('float')

    df['Temperature'] = df['Temperature'].astype('float')
    df['Relative Humidity'] = df['Relative Humidity'].astype('float')
    df['Pressure'] = df['Pressure'].astype('float')
    df['Wind Speed'] = df['Wind Speed'].astype('float')
    df['Solar Zenith Angle'] = df['Solar Zenith Angle'].astype('float')
    
    df = df[df['GHI'] > 0]
    avg_GHI = df['GHI'].mean() 
    avg_Temp = df['Temperature'].mean()
    avg_Hum = df['Relative Humidity'].mean()
    avg_speed = df['Wind Speed'].mean()
    avg_pres = df['Pressure'].mean()
    avg_Sza = df['Solar Zenith Angle'].mean()
    df = df.iloc[:1]


    latitude = [lat]
    longitude = [lon]
    df['Latitude'] = latitude
    df['Longitude'] = longitude

    df = df.reset_index(drop=True)
    df.at[0, 'GHI'] = avg_GHI
    df.at[0,'Temperature'] = avg_Temp
    df.at[0, 'Relative Humidity'] = avg_Hum
    df.at[0, 'Wind Speed'] = avg_speed
    df.at[0, 'Pressure'] = avg_pres
    df.at[0, 'Solar Zenith Angle'] = avg_Sza

    print(len(df.iloc[0].values))
    return df.iloc[0].values
    



if __name__ == "__main__":
    main()