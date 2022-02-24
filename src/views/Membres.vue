<template>
  <div class="Membres">
    <Navigation />
    <section class="content">
      <h1>Members</h1>
      <article
        v-for="membre in membres"
        :key="membre.id"
      >
        <router-link
          :to="`/membre/${membre.id}`"
          class="user"
        >
          <div>
            <img
              :src="
                  `https://eu.ui-avatars.com/api/?background=random&background=8BD59A&rounded=true&name=` +
                  membre.fullname
                "
              alt="avatar"
            />
            <div>
              <h3>{{membre.fullname}}</h3>
              <h4>{{membre.email}}</h4>
            </div>

          </div>

        </router-link>

        <font-awesome-icon
          @click="confirmDel(membre.id, membre.fullname)"
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
  name: "Membres",
  components: {
    Navigation,
    VRuntimeTemplate,
  },
  data() {
    return {
      membres: this.$store.state.members,
      popupContent: null,
      currentUser: null,
    };
  },
  methods: {
    chargerMembres() {
      this.$api
        .get("members", {
          token: this.$store.state.token,
        })
        .then((data) => (this.membres = data.data));
    },
    confirmDel(usrId, usrFullName) {
      console.log(usrId);
      console.log(usrFullName);
      this.currentUser = usrId;
      this.popupContent =
        `<section><h2>Etes vous sur de vouloir supprimer ` +
        usrFullName +
        `</h2><div>
        <button @click="annuler">Annuler</button><button @click="confirm">Supprimer</button></div></section>`;
    },
    confirm() {
      console.log(this.currentUser);
      this.popupContent = "";
    },
    annuler() {
      console.log("annuler");
      this.currentUser = "";
      this.popupContent = "";
      this.chargerMembres();
    },
  },
  created() {
    this.chargerMembres();
  },
};
</script>

<style scoped lang="scss">
.Membres {
  .content {
    article {
      align-items: center;
      padding-right: 1em;
      box-sizing: border-box;
    }
    a {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      div {
        display: flex;
        align-items: center;
        img {
          max-width: 3em;
          margin-right: 1em;
        }
        div {
          flex-direction: column;
          align-items: flex-start;
        }
      }
    }
  }
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
}
</style>
