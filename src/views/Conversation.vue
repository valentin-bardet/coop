<template>
  <div class="Conversation">
    <Navigation />
    <section class="content">
      <div
        v-for="conv in conversations"
        :key="conv.id"
      >
        <h1 v-if="conv.id == id">{{conv.label}}</h1>
        <h2 v-if="conv.id == id">{{conv.topic}}</h2>
      </div>

      <form @submit.prevent="posterMessage">
        <div>
          <input
            type="text"
            required
            v-model="message"
          />
        </div>
        <div>
          <button>
            <h3>Send</h3>
          </button>
        </div>
      </form>
      <article
        v-for="mes in messages"
        :key="mes.id"
      >

        <div class="message">

          <div
            v-for="member in members"
            :key="member.id"
          >

            <!----- User qui ecrit ----->
            <div
              v-if="
                member.id == mes.member_id &&
                $store.state.member.id == member.id
              "
              class="mesMessages"
            >
              <div class="member">
                <div class="member__infos">
                  <p>{{ mes.created_at | formatDate }}</p>
                  <router-link :to="`/membre/${member.id}`">
                    <h3>{{ member.fullname }}</h3>
                  </router-link>
                </div>
                <h2>{{ mes.message }}</h2>
              </div>
              <img
                :src="
                  `https://eu.ui-avatars.com/api/?background=random&background=8BD59A&rounded=true&name=` +
                  member.fullname
                "
                alt="avatar"
              />
            </div>
            <!----- User qui est en face ----->
            <div v-if="
                member.id == mes.member_id &&
                $store.state.member.id !== member.id
              ">
              <img
                :src="
                  `https://eu.ui-avatars.com/api/?background=random&background=8BD59A&rounded=true&name=` +
                  member.fullname
                "
                alt="avatar"
              />

              <div class="member">
                <div class="member__infos">
                  <router-link :to="`/membre/${member.id}`">
                    <h3>{{ member.fullname }}</h3>
                  </router-link>

                  <p>{{ mes.created_at | formatDate }}</p>
                </div>
                <h2>{{ mes.message }}</h2>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "Conversation",
  components: {
    Navigation,
  },
  data() {
    return {
      id: this.$route.params.idConversation,
      messages: "",
      message: "",
      members: this.$store.state.members,
      conversations: "",
      convLabel: "",
      convTopic: "",
    };
  },
  methods: {
    chargerConversations() {
      this.$api
        .get("channels", {
          token: this.$store.state.token,
        })
        .then((data) => (this.conversations = data.data));
    },
    chargerConversation() {
      this.$api
        .get(`channels/${this.id}/posts`, {
          channel_id: this.id,
          token: this.$store.state.token,
        })
        .then((data) => (this.messages = data.data));
    },
    posterMessage() {
      this.$api
        .post(`channels/${this.id}/posts`, {
          channel_id: this.id,
          member_id: this.$store.state.member.id,
          message: this.message,
          token: this.$store.state.token,
        })
        .then((data) => (this.chargerConversation(), (this.message = "")));
    },
  },
  created() {
    this.chargerConversation();
    this.chargerConversations();
  },
};
</script>

<style scoped lang="scss">
.Conversation {
  div {
    h2 {
      font-weight: 300;
    }
  }
  .content {
    form {
      display: flex;
      width: 90%;
      justify-content: space-between;
      align-items: center;
      padding-right: 0.7em;
      margin: 1em 0 0 0;

      div:nth-child(1) {
        width: 90%;

        input {
          padding-left: 0.7em;
          width: 100%;
          min-height: 3em;
          border: none;
        }
      }
    }
    article {
      display: block;
      padding: 0.7em;
      .message {
        .mesMessages {
          display: flex;
          width: 100%;
          justify-content: flex-end !important;
          h2 {
            text-align: right;
          }
          .member {
            display: flex;
            align-items: flex-end;
            &__infos {
              text-align: right;

              a {
                padding: 0;
                text-align: right;
                width: initial;
                h3 {
                  margin-right: 0;
                  padding-left: 0.7em;
                  font-size: 1.17em;
                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
            }
          }
        }
        div {
          display: flex;
          align-items: flex-start;
          .member {
            display: flex;
            flex-direction: column;
            &__infos {
              display: flex;
              align-items: center;
              a {
                padding: 0;
                width: initial;
                h3 {
                  margin-right: 0.7em;
                  font-size: 1.17em;
                  text-transform: capitalize;
                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
            }
          }
          h2 {
            text-align: left;
          }
          img {
            margin-right: 1em;
            margin-left: 1em;
          }
        }
      }
    }
  }
}
</style>
