# MERN exercise 

Tutorial : [freeCodeCamp.org](https://www.youtube.com/watch?v=7CqJlxBYj-M)

1. Using MongoDB Atlas to create custer. 
    1. free tier here,
    2. Object ID for mongo DB
        `ObjectID("{UNIX timestamp: 4bytes}{Random Value: 5bytes}{COunt: 3bytes}")`

2. `npx create-react-app mern-exercise-track`
    1. `cd mern-exercise-track`
    2. `mkdir backend` right now both frontend and backend are in the same folder
    3. `npm install express cors mongoose dotenv`
        - express framework for nodejs
    4. `npm install -g nodemon` fore development.



Backend files in [here](./mern-exercise-track/backend/)

Frontend files in [here](./mern-exercise-track/)

the app is connected to the mongoDB Atlas, edit to your own by create a `.env` file in the `./mern-exercise-track/backend/` directory, and paste the following line in the `.env` file.

```
ATLAS_URI=mongodb+srv://<username>:<password>@cluster0.m2ejv.mongodb.net/?retryWrites=true&w=majority
```

