<template>
  <div class="Conversations">
    <Navigation />
    <section class="content">
      <h1>Conversations</h1>
      <article
        v-for="conversation in conv"
        :key="conversation.id"
      >
        <router-link
          :to="`/conversation/${conversation.id}`"
          class="conversation"
        >
          <h3>{{conversation.label}}</h3>
          <h4>{{conversation.topic}}</h4>
        </router-link>
        <font-awesome-icon
          @click="confirmDel(conversation.id, conversation.label)"
          icon="trash"
        />
      </article>
      <div id="popup">
        <v-runtime-template :template="popupContent"></v-runtime-template>
      </div>
    </section>
  </div>
</template>

<script>
import VRuntimeTemplate from "v-runtime-template";
import Navigation from "../components/Navigation.vue";

export default {
  name: "Conversations",
  components: {
    Navigation,
    VRuntimeTemplate,
  },
  data() {
    return {
      conv: "",
      popupContent: null,
      currentConv: null,
    };
  },
  methods: {
    chargerConversations() {
      this.$api
        .get("channels", {
          token: this.$store.state.token,
        })
        .then((data) => (this.conv = data.data));
    },
    confirmDel(convId, convLabel) {
      this.currentConv = convId;
      this.popupContent =
        `<section><h2>Etes vous sur de vouloir supprimer ` +
        convLabel +
        `</h2><div>
        <button @click="annuler">Annuler</button><button @click="confirm">Supprimer</button></div></section>`;
    },
    confirm() {
      this.popupContent = "";
      this.$api
        .delete(`channels/${this.currentConv}`, {
          id: this.currentConv,
          token: this.$store.state.token,
        })
        .then((data) => this.chargerConversations());
    },
    annuler() {
      this.currentConv = "";
      this.popupContent = "";
    },
  },

  created() {
    this.chargerConversations();
  },
};
</script>

<style lang="scss">
#popup {
  section {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    position: absolute;
    min-height: 30vh;
    top: 30%;
    left: 25%;
    background: #ebebeb !important;
    border-radius: 10px;
    padding: 1em;
    box-sizing: border-box;
    border: 3px solid #8bd59a;
    button {
      margin: 1em;
    }
  }
}
.Conversations,
.Conversation,
.Creer-conversation,
.Membres,
.Membre {
  display: flex;
  height: 100vh;
  background-color: #ebebeb;
  .content {
    height: 100%;
    flex-basis: 90%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    align-items: center;
    h1 {
      padding: 1em 0 0 0;
    }
    article {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #60c575;
      width: 90%;
      margin-top: 2em;
      border-radius: 8px;
      padding-right: 1em;
      box-sizing: border-box;
      svg {
        cursor: pointer;
      }
      a {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        padding: 1em;
        text-decoration: none;
        color: #2c3e50;
        text-align: left;
        h3 {
          font-size: 2em;
          font: 900;
        }
      }
    }
  }
}
@media (max-width: 850px) {
  .Conversations,
  .Conversation,
  .Creer-conversation,
  .Membres,
  .Membre {
    .content {
      flex-basis: 100%;
    }
  }
}
</style>
