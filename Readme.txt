Please refer to my super cache for more material on the optimization technique

in here, i have been exploring the use of shared memory to optimize reads

this performs better than traditional rest api setups by a margin

the App.js is for react component

the read-service.js simply focuses on getting the data from rest api and parsing it and serving it to the react component.

rest.py is a flask app with rest api

this setup was initially made using mongodb.