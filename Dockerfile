FROM osgeo/gdal:ubuntu-small-latest


# install pip
RUN apt-get update && apt-get -y install python3-pip --fix-missing
RUN apt-get -y install apache2
ENV LOCAL_POSTGRES_IP 192.168.43.79

# Set the working directory
WORKDIR /app

# Copy the app files
COPY . .

# Install the necessary dependencies
RUN pip install usgs-m2m-api-0.2.0.tar.gz
RUN pip install -r requirements.txt


CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]