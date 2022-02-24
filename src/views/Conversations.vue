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
      </article>
    </section>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "Conversations",
  components: {
    Navigation,
  },
  data() {
    return {
      conv: "",
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
  },
  created() {
    this.chargerConversations();
  },
};
</script>

<style lang="scss">
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
      background-color: #60c575;
      width: 90%;
      margin-top: 2em;
      border-radius: 8px;
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
