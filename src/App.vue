<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  watch: {
    $route() {
      this.verificationConnexion();
    },
  },
  mounted() {
    this.verificationConnexion();
    this.getMembers();
  },
  methods: {
    verificationConnexion() {
      if (this.$route.name == "Connexion") return;
      if (this.$route.name == "CreationCompte") return;
      if (!this.$store.state.token) {
        this.$router.push("/connexion");
      }
    },
    getMembers() {
      this.$api
        .get("members", {
          token: this.$store.state.token,
        })
        .then(
          (response) => (
            console.log(response.data),
            this.$store.commit("setMembers", response.data)
          )
        )
        .catch((error) => alert(error.response.data.message));
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  width: 100vw;
  height: 100vh;
}

* {
  margin: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
