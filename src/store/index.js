import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [new VuexPersistence().plugin],
    state: {
        token: false,
        member: false,
        connecte: false,
        members: false,
    },
    mutations: {
        setToken(state, token) {
            state.token = token;
            state.connecte = true;
        },
        setMember(state, member) {
            state.member = member;
        },
        Deco(state) {
            state.connecte = false;
        },
        setMembers(state, members) {
            state.members = members;
        }
    },
    actions: {},
    modules: {}
})