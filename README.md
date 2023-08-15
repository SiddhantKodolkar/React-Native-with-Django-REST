# React-Native-with-Django-REST
Integrate your React Native Mobile App frontend with Django Rest Framework backend with REST APIs

## Install the django-cors-headers package:
```bash
pip install django-cors-headers
```
## Add 'corsheaders' and 'api' to your INSTALLED_APPS in your project's settings.py:
<img width="241" alt="image" src="https://github.com/SiddhantKodolkar/React-Native-with-Django-REST/assets/111975032/b4783c52-d274-437a-bf8a-146e7ba7fcd0">

## Add 'corsheaders.middleware.CorsMiddleware' to your MIDDLEWARE in settings.py. It should be placed after CommonMiddleware:
<img width="440" alt="image" src="https://github.com/SiddhantKodolkar/React-Native-with-Django-REST/assets/111975032/13158008-6b38-47dc-aee6-2af1863220a4">

## Configure CORS settings in settings.py. 
#### Allow all origins and methods,type ipconfig in cmd and put the IPV4 address from the Wireless LAN adapter Wi-Fi to allowed hosts
<img width="281" alt="image" src="https://github.com/SiddhantKodolkar/React-Native-with-Django-REST/assets/111975032/8b683a74-556b-451d-9abe-e2f575bbb064">

