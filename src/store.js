import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase'
import { stat } from 'fs';


Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loadedBlogs:[],
    loadedPrograms:[
      {
        title: 'Test',
        content: 'Testing',
        price: '10:00'
      }
    ],
    user: null,
    loading: false,
    error: null
  },
  //CHANGES STATE
  mutations: {
    setUser(state, payload){
        state.user = payload
    },
    setLoading(state, payload){
        state.loading = payload
    },
    setError(state, payload){
        state.error = payload
    },
    clearError(state){
        state.error = null
    },
    setLoadedBlogs(state, payload){
      state.loadedBlogs = payload
    },
    setLoadedPrograms(state, payload){
      state.loadedPrograms = payload
    }
  },
  actions: {
      signUserIn({commit}, payload){
        commit('setLoading', true)
        commit('clearError')
        firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(
            user => {
                commit('setLoading', false)
                const newUser = {
                    id: user.user.uid,

                }
                commit('setUser',newUser)
            }
        ).catch(
            error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
            }
        )
    },
    loadBlogs({commit}){
        firebase.database().ref('posts').once('value').then(
          (data) =>{
              const posts = []
              const obj = data.val()
              for(let key in obj){
                  posts.push({
                      id: key,
                      author: obj[key].author,
                      category: obj[key].category,
                      content: obj[key].content,
                      title: obj[key].title,
                  })
              }
              commit('setLoadedBlogs', posts )
          }
      ).catch(
          (error) =>{
              console.log(error)
          }
      )
    },
    loadPrograms({commit}){
      firebase.database().ref('programs').once('value').then(
        (data) =>{
            const programs = []
            const obj = data.val()
            for(let key in obj){
                programs.push({
                    id: key,
                    category: obj[key].category,
                    content: obj[key].content,
                    title: obj[key].title,
                    price: obj[key].price
                })
            }
            commit('setLoadedPrograms', programs )
        }
    ).catch(
        (error) =>{
            console.log(error)
        }
    )
  },
    autoSignIn({commit}, payload){
      commit('setUser', {id: payload.uid, registeredTournaments:[]})
    },
    logout({commit}){
        firebase.auth().signOut()
        commit('setUser', null)
    },
    clearError({commit}){
        commit('clearError')
    }
  },

  getters:{
    loadedBlogs(state) {
        //returns new array
        return state.loadedBlogs.sort((blogA, blogB) => {
          return blogA.id < blogB.id
        })
    },
    //single Tournament
    loadedBlog(state){
        return (blogID) =>{
            return state.loadedBlogs.find((blog) =>{
                return blog.id == blogID
            })
        }
    },
    loadedPrograms(state) {
      //returns new array
      return state.loadedPrograms
    },
    //single program
    loadedProgram(state){
        return (blogID) =>{
            return state.loadedPrograms.find((blog) =>{
                return blog.id == blogID
            })
        }
    },
    user(state){
      return state.user
    },
    loading(state){
        state.loading
    },
    error(state){
        return state.error
    }
  }
});
