import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';
import { stat } from 'fs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedBlogs: [],
    loadedPrograms: [
      {
        title: 'Test',
        content: 'Testing',
        price: '10:00',
      },
    ],
    loadedClients: [],
    user: null,
    loading: false,
    error: null,
  },
  // CHANGES STATE
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
    setLoadedBlogs(state, payload) {
      state.loadedBlogs = payload;
    },
    setLoadedPrograms(state, payload) {
      state.loadedPrograms = payload;
    },
    setLoadedClients(state, payload) {
      state.loadedClients = payload;
    },
  },
  actions: {
    signUserIn({ commit }, payload) {
      commit('setLoading', true);
      commit('clearError');
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          commit('setLoading', false);
          const newUser = {
            id: user.user.uid,
          };
          commit('setUser', newUser);
        })
        .catch((error) => {
          commit('setLoading', false);
          commit('setError', error);
          console.log(error);
        });
    },
    loadBlogs({ commit }) {
      firebase
        .database()
        .ref('posts')
        .once('value')
        .then((data) => {
          const posts = [];
          const obj = data.val();
          for (const key in obj) {
            posts.push({
              id: key,
              author: obj[key].author,
              category: obj[key].category,
              content: obj[key].content,
              title: obj[key].title,
              image: obj[key].image,
            });
          }
          commit('setLoadedBlogs', posts);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadPrograms({ commit }) {
      firebase
        .database()
        .ref('programs')
        .once('value')
        .then((data) => {
          const programs = [];
          const obj = data.val();
          for (const key in obj) {
            programs.push({
              id: key,
              category: obj[key].category,
              content: obj[key].content,
              title: obj[key].title,
              price: obj[key].price,
              image: obj[key].image,
            });
          }
          commit('setLoadedPrograms', programs);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    loadClients({ commit }) {
      const id = '';
      firebase
        .database()
        .ref('clients')
        // .on("child_added")
        .once('value')
        .then((data) => {
          const clients = [];
          const obj = data.val();
          console.log(obj);
          for (const key in obj) {
            clients.push({
              id: key,
              // payment:{
              //   first_name:
              // }
              name: `${obj[key].payment.first_name} ${obj[key].payment.last_name}`,
              email: obj[key].payment.email,
              // title: obj[key].title
            });
          }
          console.log(clients);
          commit('setLoadedClients', clients);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteProgram(payload) {
      console.log(payload);
      firebase
        .database()
        .ref('programs/')
        .child(payload)
        .remove();
      console.log(`${payload}removed`);
    },
    autoSignIn({ commit }, payload) {
      commit('setUser', { id: payload.uid, registeredTournaments: [] });
    },
    logout({ commit }) {
      firebase.auth().signOut();
      commit('setUser', null);
    },
    clearError({ commit }) {
      commit('clearError');
    },
  },

  getters: {
    loadedBlogs(state) {
      // returns new array
      return state.loadedBlogs.reverse();
    },
    // single Tournament
    loadedBlog(state) {
      return blogID => state.loadedBlogs.find(blog => blog.id == blogID);
    },
    loadedPrograms(state) {
      // returns new array
      return state.loadedPrograms;
    },
    // single program
    loadedProgram(state) {
      return blogID => state.loadedPrograms.find(blog => blog.id == blogID);
    },
    loadedClients(state) {
      return state.loadedClients.reverse();
    },
    loadedClient(state) {
      clientID => state.loadedClients.find(client => client, id == clientID);
    },
    user(state) {
      return state.user;
    },
    loading(state) {
      state.loading;
    },
    error(state) {
      return state.error;
    },
  },
});
