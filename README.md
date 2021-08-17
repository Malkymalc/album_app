# Albums App

## Overview
This project allows a user to view data on a selection of albums, and users, taken from [JSON placeholder](https://jsonplaceholder.typicode.com/).

The data is then stored locally in two PouchDB databases - one each for users and albums.

Subsequent loading of the app should result in the data being accessed directly from the databases.

Viewing of a list of users or albums can be accessed from the home page. From these lists you can then select to view the full details of a particular album or user.

Further, from the detail page of a user, you can choose to edit the user's details. On save, this updates the PouchDB database, refreshes the app data, and then returns you to the user's details page, which should reflect the changes just made.

Since the changes are stored locally, and the API is only used if a respective PouchDB database is not set up and populated, changes made to user data should persist between sessions.

The databases can be deleted by going DevTools > Application, and under Storage > IndexedDB in the side panel, deleting any databases with names starting  with `_pouch_albumApp`.


## Technologies Used
- Vue 2, with Vuex, Vue Router, and Vuelidate
- Bootstrap 5 for styling and components
- PouchDB for client-side storage

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
