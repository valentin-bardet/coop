import Vue from 'vue'
import VueRouter from 'vue-router'
import Conversations from '../views/Conversations.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Conversations',
        component: Conversations
    },
    {
        path: '/creationCompte',
        name: 'CreationCompte',

        component: () =>
            import ('../views/CreationCompte.vue')
    },
    {
        path: '/connexion',
        name: 'Connexion',

        component: () =>
            import ('../views/Connexion.vue')
    },
    {
        path: '/creer-conversation',
        name: 'Creer-conversation',

        component: () =>
            import ('../views/Creer-conversation.vue')
    },
    {
        path: '/conversation/:idConversation',
        name: 'Conversation',

        component: () =>
            import ('../views/Conversation.vue')
    },
    {
        path: '/membres',
        name: 'Membres',

        component: () =>
            import ('../views/Membres.vue')
    },
    {
        path: '/membre/:idMembre',
        name: 'Membre',

        component: () =>
            import ('../views/Membre.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router