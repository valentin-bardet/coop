<template>
  <div class="Creer-conversation">
    <Navigation />
    <section class="content">

      <div>
        <form @submit.prevent="creerConversations">
          <h1>New Conversation</h1>
          <div>
            <label>Title</label>
            <input
              type="text"
              required
              v-model="sujet"
            >
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              required
              v-model="tags"
            >
          </div>
          <div>
            <button>
              <h3>
                Create
              </h3>
            </button>
          </div>

        </form>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "Creer-conversation",
  components: {
    Navigation,
  },
  data() {
    return {
      sujet: "",
      tags: "",
    };
  },
  methods: {
    creerConversations() {
      this.$api
        .post("channels", {
          token: this.$store.state.token,
          label: this.sujet,
          topic: this.tags,
        })
        .then((data) => this.$router.push("/"));
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  height: 100%;
  flex-basis: 90%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-basis: 100%;
    width: 90%;
    form {
      border-radius: 0.5em;
      background: #3fac55;
      width: 30vw;
      min-width: 20em;
      margin: auto;
      display: flex;
      flex-direction: column;
      padding: 2em;
      div {
        width: 90%;
        margin: 1em auto;
        display: flex;
        color: #2c3e50;
        background: #8bd59a;
        border-radius: 0.3em;
        align-items: center;
        label {
          padding: 0 0 0 1em;
        }
        &:nth-child(4) {
          width: 120px;
        }
        svg {
          padding: 1em 0 1em 1em;
        }
        input {
          background: none;
          border: none;
          width: 90%;
          min-width: 15em;
          padding: 1em;
          color: #2c3e50;
        }
        button {
          background: #8bd59a;
          margin: auto;
          overflow: hidden;
          height: 3em;
          width: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.8s ease;
          position: relative;
          border: 0;
          border-radius: 0.3em;

          h3 {
            color: #2c3e50;
          }
          &::before,
          &::after {
            position: absolute;
            display: block;
            content: "";
            width: 100%;
            height: 100%;
          }
          &::after {
            width: 300%;
            height: 300%;
            left: -300%;
            transform: rotate(45deg);
            background-color: #60c575;
            transition: all 300ms ease;
          }
          &:hover h3 {
            z-index: 10;
            font-weight: 600;
          }
          &:hover::after {
            left: -100%;
          }
        }
      }
    }
  }
}
</style>
