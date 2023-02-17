# myFlix-client

## Description

This is the client side server of the myFlix movie API. The server side of the same application you can find in the following link.
https://github.com/eloycotoalfonso/movie_api

## Dependencies

- Parcel
  This will bundle, minified, transpile and create the distribution files for the project. To create it type "path src/index.html" in the terminal in the project folder.
- react
- React-dom
- axios
- prop-types

## Built in
Reax Bootstrap

##Features:
This app returns a list of ALL movies that are storaged in a Database, through an backend hosted in heroku.
It also returns data about the director and the genre of the movie, as well as a synopsis and a image.

The app has the following views
- Main view: It will display either a welcome page (if any user is registered/login) or a list with all movies available.
- Movie view: Will display information about the movie, such  as director, genre, image and a synopsis:
- Genre View: A brief description of the genre
- Director View: A brief description of the director, including birthdate and bio.
- Profile view: This view displays information of the user as well as let him/her to change and modify his information. It also allows the user to delet his/her account.

