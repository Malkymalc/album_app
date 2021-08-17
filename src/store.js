import Vue from 'vue'
import Vuex from 'vuex'
import PouchDB from 'pouchdb'
Vue.use(Vuex)

async function checkExistsOrNew(db) {
  const result = {};
  await db.info().then(function (details) {
    if (details.doc_count == 0) {
      result.msg = 'database does not exist';
      result.new = true;
    } else {
      result.msg = 'database exists';
      result.new = false;
    }
  })
  .catch(function (err) {
    result.msg = err;
    result.new = null;
  });
  return result;
}



const albums = {
  namespaced: true,
  state: () => ({ 
    allAlbums: [],
    _loaded: false,
   }),
  mutations: { 
    SET_ALL_ALBUMS(state, albums) {
      state.allAlbums = albums;
      state._loaded = true;
    },
  },
  actions: { 
    setAllAlbums({ commit }) {
      commit('SET_ALL_ALBUMS', albums);
    },
    async loadData({ commit }) {
      const albumsDB = new PouchDB('albumsApp-albums');
      const dbStatus = await checkExistsOrNew(albumsDB);
      if (dbStatus.new === true) {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(albums => {
          albumsDB.bulkDocs(albums)
          return albums;
        })
        .then(albums => commit('SET_ALL_ALBUMS', albums))
      } else {
        albumsDB.allDocs({include_docs: true})
        .then(albumsData => {
          const albums = albumsData.rows.map(albumEntry => albumEntry.doc);
          commit('SET_ALL_ALBUMS', albums)
        });
      }
    },
  },
};


const users = {
  namespaced: true,
  state: () => ({ 
    allUsers: [],
    _loaded: false,
   }),
  mutations: { 
    SET_ALL_USERS(state, users) {
      state.allUsers = users;
      state._loaded = true;
    },
  },
  actions: { 
    setAllUsers({ commit }) {
      commit('SET_ALL_USERS', users);
    },
    async loadData({ commit }) {
      const usersDB = new PouchDB('albumApp-users');
      const dbStatus = await checkExistsOrNew(usersDB);
      if (dbStatus.new === true) {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
          usersDB.bulkDocs(users)
          .then(() => {
            usersDB.allDocs({include_docs: true})
            .then(usersData => {
              const users = usersData.rows.map(albumEntry => albumEntry.doc);
              commit('SET_ALL_USERS', users);
            });
          });
        });
      } else {
        usersDB.allDocs({include_docs: true})
        .then(usersData => {
          const users = usersData.rows.map(albumEntry => albumEntry.doc);
          commit('SET_ALL_USERS', users)
        });
      }
    },
    updateUserData({ dispatch }, userData) {
      const usersDB = new PouchDB('albumApp-users');
      usersDB.put(userData)
      .then(dispatch('loadData'));
    },
  },
};

const store = new Vuex.Store({
  modules: {
    albums,
    users,
  }
});

export default store;
