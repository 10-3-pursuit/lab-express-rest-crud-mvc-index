# Express Fitness

A new fantastic fitness place called Express Fitness has just opened up.

Your job will be to be to begin building a custom app that keeps track of numerous essential resources for the business such as locations, people, special events, plans, and workout machines.

## Lab Setup

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

1. Create a server as you have done previously in class.
1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

## Instructions

To complete this lab, you must create a series of static data models and controllers. Each of those controllers will have a single route which returns all data from the model. Read the details below carefully to ensure that you name filenames and routes correctly.

### Create your file structure

Your goal is to organize your folders and files following the MVC architecture you've learned in class. Your final folder and file structure should look like this:

```
├── controllers/
│  ├── locations.controller.js
│  ├── machines.controller.js
│  ├── persons.controller.js
│  ├── plans.controller.js
│
├── models/
│  ├── location.model.js
│  ├── machine.model.js
│  ├── person.model.js
│  ├── plan.model.js
│
├── .env
├── node_modules/
├── app.js
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

> **Note:** With Express, you are free to name your files and folders whatever you want. For example, when it comes to controllers you may see `locations.controllers.js` or `locations.js` or `locationsController.js`. There is no one "right way" to name these files, however it is important to have a consistent and understandable naming scheme.

### Create a basic Express application

Install the necessary `npm` packages and then build a basic Express server.

#### Generic route

Create the following generic route that is not tied to any specific resource.

- `GET /`: Responds with `"Hello, world!"`.

### Create models

For each model, make a folder with the appropriate file name. For example, for the `locations` resource create a file inside of the `models/` directory with the name `locations.model.js`. At this time, your model will simply be an array of data. Don't forget to export your model.

> **Note:** Like with controllers, there is no one right way to name your model files. For example, when it comes to models you may see `location.model.js` or `location.js` or `LocationModel.js`. For this lab, follow the naming conventions that have been set out for you.

#### Locations data

```js
[
  {
    id: 1,
    street: "45 Davis Street",
    city: "Long Island City",
    state: "NY",
    zip: "11101",
  },
  { id: 2, street: "23 Broadway", city: "New York", state: "NY", zip: "11011" },
];
```

#### Persons data

```js
[
  {
    id: 1,
    name: "Najee",
    role: "member",
    plan: "gold",
    mainLocation: "11101",
  },
  {
    id: 2,
    name: "Salina",
    role: "staff",
    plan: "staff",
    mainLocation: "11101",
  },
  {
    id: 3,
    name: "Amandine",
    role: "member",
    plan: "silver",
    mainLocation: "10011",
  },
];
```

#### Plans data

```js
[
  {
    id: 1,
    type: "bronze",
    price: 100,
    extras: [],
  },
  {
    id: 2,
    type: "silver",
    price: 200,
    extras: ["Laundry service", "Free smoothie each visit"],
  },
  {
    id: 3,
    type: "gold",
    price: 300,
    extras: ["Personal locker", "Monogrammed robe", "Sauna access"],
  },
];
```

#### Machines data

```js
[
  {
    id: 1,
    brand: "Bowflex",
    model: "Bowflexer 4000",
    type: "Extreme Fitness Bench",
    purchased: 1986,
    location: 11101,
  },
  {
    id: 2,
    brand: "Bowflex",
    model: "Bowflexer 4000",
    type: "Extreme Fitness Bench",
    purchased: 1996,
    location: 11101,
  },
  {
    id: 3,
    brand: "Bowflex",
    model: "Bowflexer 4000",
    type: "Extreme Fitness Bench",
    purchased: 2006,
    location: 10011,
  },
];
```

### Create controllers for each model

Following the same file and folder structure as in class, create the correct files. For example, the `locations` resource should be in the `controllers/` directory with the name `locations.controller.js`.

Each controller should have an endpoint returning the json object with a key and an array value for that resource.

Each controller should have a dynamic endpoint returning a json object based on the requested id
This controller should return a json object with a message - 'Nothing Found', if the id does not exist.

Once you've built the route in each controller, you should be able to visit the URLs below and see data for the associated resource.

- http://localhost:3333/locations
- http://localhost:3333/people
- http://localhost:3333/plans
- http://localhost:3333/equipment

### Create a Catch-all/404 Route

Add a catch-all route so that when the visited URL does not match any of the routes, a 404 response is sent. You may also wish to respond with a message for the user, such as `"Sorry, no page found!"`.

### Test Your Routes

You should be able to test your routes both in the Browser (since every call is a GET call) or in Postman. You should try Postman since you will need to test other routes (POST, PUT, DELETE) in Postman.

## Bonuses

Create a `GET` route at `/locations/people` that organizes each person according to their location. The JSON data outputted should look like the data below. Study the data to figure out the connection.

```js
[
  {
    street: "45 Davis Street",
    city: "Long Island City",
    state: "NY",
    zip: "11101",
    people: [
      {
        name: "Najee",
        role: "member",
        plan: "gold",
        mainLocation: "11101",
      },
      {
        name: "Salina",
        role: "staff",
        plan: "staff",
        mainLocation: "11101",
      },
    ],
  },
  {
    street: "23 Broadway",
    city: "New York",
    state: "NY",
    zip: "11011",
    people: [
      {
        name: "Amandine",
        role: "member",
        plan: "silver",
        mainLocation: "11011",
      },
    ],
  },
];
```
