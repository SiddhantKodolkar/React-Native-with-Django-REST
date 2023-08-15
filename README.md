# React-Native-with-Django-REST
Integrate your React Native Mobile App frontend with Django Rest Framework backend with REST APIs


# Backend:
## Install the django-cors-headers package:
```bash
pip install django-cors-headers
```
## Add 'corsheaders' and 'api' to your INSTALLED_APPS in your project's settings.py:
<img width="241" alt="image" src="https://github.com/SiddhantKodolkar/React-Native-with-Django-REST/assets/111975032/b4783c52-d274-437a-bf8a-146e7ba7fcd0">

## Add 'corsheaders.middleware.CorsMiddleware' to your MIDDLEWARE in settings.py. It should be placed after CommonMiddleware:
<img width="440" alt="image" src="https://github.com/SiddhantKodolkar/React-Native-with-Django-REST/assets/111975032/13158008-6b38-47dc-aee6-2af1863220a4">

## Configure CORS settings in settings.py. 
Allow all origins and methods,type ipconfig in command prompt and put the IPV4 address from under the 'Wireless LAN adapter Wi-Fi' section to allowed hosts


<img width="281" alt="image" src="https://github.com/SiddhantKodolkar/React-Native-with-Django-REST/assets/111975032/8b683a74-556b-451d-9abe-e2f575bbb064">

## Ensure that your Django development server is running and listening on the correct IP address (0.0.0.0) to accept connections from devices on the local network:
```bash
python manage.py runserver 0.0.0.0:8000
```
The main advantage of using 0.0.0.0 is that it enables you to access the development server from other devices on your local network, such as your React Native app running on a different device or emulator/simulator. This can be very useful for testing and development, as it allows you to see how your app behaves when interacting with the server from different devices.
Ensure that your firewall and security settings are configured to allow incoming connections on this port if you want to access the server from devices other than the one running the server.

# Frontend:
### Create a React Native App:
```bash
npx create-expo-app frontend
```
Download the Expo Go app and scan the QR code 
### Install axios for fetching data from Django REST
```bash
npm install axios
```
### Type ipconfig in command prompt and put the IPV4 address from under the 'Wireless LAN adapter Wi-Fi' section with port 8000 as the base URL with endpoint '/students/' to get the list of all students
<img width="372" alt="image" src="https://github.com/SiddhantKodolkar/React-Native-with-Django-REST/assets/111975032/897c4b50-e11b-4998-9c4e-12db32b61c78">

### Display the list using the map() function
<img width="307" alt="image" src="https://github.com/SiddhantKodolkar/React-Native-with-Django-REST/assets/111975032/a5b526dd-ab0d-4dc0-a95a-3065e420bb09">

### Output on mobile device 
<img height="707" width="307" alt="image" src="https://github.com/SiddhantKodolkar/React-Native-with-Django-REST/assets/111975032/84a9e732-5491-41e5-8d12-3e2246c13f3c">

