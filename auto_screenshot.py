import os
import glob

def main():
    feature_files = glob.glob("./W5/features/*.feature")
    with open(feature_files[0], 'r') as f:
        print(f.read())

if __name__ == '__main__':
    main()