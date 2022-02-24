<template>
  <div class="Membre">
    <Navigation />
    <section class="content">
      <article
        v-for="membre in membres"
        :key="membre.id"
        class="infos"
      >
        <div
          v-if="membre.id == id"
          class="user"
        >
          <img
            :src="
                  `https://eu.ui-avatars.com/api/?background=random&background=8BD59A&rounded=true&name=` +
                  membre.fullname
                "
            alt="avatar"
          />
          <h1>{{membre.fullname}}</h1>
          <h2>{{membre.email}}</h2>
          <p>Acount created {{membre.created_at | formatDate}}</p>
        </div>

      </article>
      <article id="last_posts">
        <h2>Last Posts</h2>
      </article>
    </section>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "Membre",
  components: {
    Navigation,
  },
  data() {
    return {
      id: this.$route.params.idMembre,
      membres: this.$store.state.members,
    };
  },
};
</script>

<style scoped lang="scss">
.content {
  .infos {
    background: none !important;
    margin: 0 !important;
    img {
      margin-top: 2em;
    }
    h1 {
      text-transform: capitalize;
      font-size: 2em;
    }
  }
  #last_posts {
    background: none;
  }
}
</style>
