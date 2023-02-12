import pandas as pd
import numpy as np
import pandas as pd
import os
import glob
import csv
import shutil
from pathlib import Path

def main():
    df = pd.read_csv('finals.csv')
    df = df.iloc[1:]
    df = df.drop(columns="Unnamed: 0")
    df = df.reset_index()
    df.to_csv('/Users/adhishrajan/Desktop/hacklytics/final.csv')


if __name__ == "__main__":
    main()