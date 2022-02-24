<template>
  <nav
    class="navigation"
    v-bind:class="{open : menu }"
  >
    <button
      class="btn-menu"
      type="button"
      @click="toggleNav"
    >
      <i
        class="btn-menu__bars"
        aria-hidden="true"
      ></i>
      <span class="visually-hidden">Menu</span>
    </button>
    <div>
      <svg
        id="logo"
        width="841"
        height="60"
        viewBox="0 0 841 1004"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M179.145 0.886872C159.146 4.05238 134.609 11.3108 118.673 18.7726C61.2087 45.6902 16.3383 101.703 3.26713 162.842C-1.05707 183.064 -1.09564 227.064 3.19212 246.891C16.769 309.661 57.0817 361.115 114.86 389.414C144.504 403.932 167.55 409.167 202.716 409.368C244.683 409.608 276.476 400.93 314.118 378.962C342.236 362.552 374.441 326.343 392.217 291.159C397.949 279.814 404.479 254.92 405.516 240.465L406.283 229.757L353.784 229.247L301.285 228.735L297.162 237.814C291.113 251.133 263.246 278.158 247.252 286.215C199.928 310.057 145.327 291.703 121.863 244.064C115.184 230.502 114.86 228.709 114.86 205.171C114.86 182.672 115.385 179.376 120.811 167.796C128.911 150.508 139.993 137.565 154.991 127.876C167.994 119.476 189.863 113.031 205.366 113.031C218.05 113.031 237.911 118.915 250.856 126.507C266.152 135.479 291.799 160.934 297.102 172.409L301.285 181.456L354.36 181.512L407.436 181.567L406.452 176.748C405.912 174.099 404.884 166.628 404.166 160.15C401.551 136.548 393.499 117.76 372.868 87.1352C347.964 50.1664 302.099 18.6763 255.789 6.75313C235.233 1.45872 194.987 -1.62112 179.145 0.886872ZM593.779 4.87696C528.057 18.1601 469.022 67.5639 444.073 130.165C433.362 157.046 430.254 177.635 431.504 213.466C433.449 269.33 448.976 307.055 486.394 346.842C516.685 379.05 552.279 399.246 593.451 407.584C616.077 412.168 666.962 411.026 688.063 405.464C726.104 395.436 768.832 366.987 795.522 333.916C829.998 291.199 843.995 244.802 839.904 186.782C833.821 100.448 765.324 23.6237 678.458 5.70367C655.625 0.991818 614.965 0.595594 593.779 4.87696ZM666.017 119.771C708.4 135.49 734.019 177.554 726.721 219.442C723.224 239.519 715.334 254.828 700.877 269.595C683.048 287.807 665.299 295.727 639.849 296.826C624.179 297.502 617.986 296.787 606.814 293.013C554.407 275.31 529.128 217.255 551.99 167.104C561.461 146.333 585.531 125.064 607.249 118.281C622.077 113.648 651.521 114.395 666.017 119.771ZM172.003 438.837C151.563 442.233 120.635 453.863 102.7 464.893C82.9583 477.037 56.321 501.436 41.5656 520.891C28.3187 538.36 14.2362 568.496 8.41418 591.841C1.39004 620.007 1.81217 664.914 9.37415 693.596C29.0237 768.135 89.646 826.369 164.28 842.398C186.917 847.26 229.087 847.273 252 842.424C270.763 838.453 295.847 828.426 314.825 817.306C333.314 806.473 374.194 764.46 386.372 743.777C406.214 710.079 415.161 672.393 413.065 631.335C410.243 576.003 393.458 538.353 353.784 498.349C320.9 465.195 287.256 446.973 245.469 439.691C225.333 436.181 190.42 435.774 172.003 438.837ZM598.797 439.462C566.531 445.613 538.406 458.292 510.631 479.213C477.581 504.104 454.8 536.166 440.36 578.123L431.997 602.421L431.407 803.211L430.82 1004H486.585H542.351V915.117C542.351 866.232 542.998 826.235 543.791 826.235C544.582 826.235 551.255 828.644 558.617 831.589C594.57 845.964 643.415 850.426 678.941 842.578C750.075 826.866 811.026 771.337 832.413 702.756C842.984 668.859 843.869 623.462 834.659 587.691C826.638 556.541 806.431 522.538 780.332 496.274C753.864 469.637 723.293 451.681 689.134 442.711C667.027 436.905 620.913 435.247 598.797 439.462ZM236.604 554.266C260.475 561.634 281.723 580.805 293.537 605.634C298.529 616.127 299.142 619.992 299.142 641.018C299.142 663.44 298.784 665.348 292.002 679.118C282.428 698.554 265.796 715.266 247.318 724.013C233.497 730.556 231.395 730.927 208.073 730.927C184.806 730.927 182.625 730.545 168.986 724.088C134.461 707.742 113.68 672.264 116.538 634.548C118.666 606.457 132.83 581.572 155.623 565.883C179.156 549.683 208.244 545.511 236.604 554.266ZM671.67 556.978C710.311 574.795 733.137 614.52 727.105 653.466C722.416 683.737 702.094 710.895 673.701 724.829C662.137 730.505 659.495 730.927 635.519 730.927C610.801 730.927 609.19 730.646 595.649 723.983C577.071 714.842 560.64 698.468 552.219 680.705C545.977 667.539 545.566 665.153 545.566 642.044C545.566 619.594 546.093 616.289 551.516 604.713C562.858 580.507 582.383 562.681 607.251 553.825C624.29 547.76 654.922 549.257 671.67 556.978Z"
          fill="#8BD59A"
        />
      </svg>
      <img :src="userIcon" />
      <p>{{$store.state.member.fullname}}</p>
      <router-link to="/">Conversations</router-link>
      <router-link to="/creer-conversation">New Conversation</router-link>
      <router-link to="/Membres">Members</router-link>
      <router-link
        v-if="!$store.state.connecte"
        to="/creationCompte"
      >Register</router-link>
      <router-link
        v-if="!$store.state.connecte"
        to="/connexion"
      >Login</router-link>
    </div>

    <button
      class="logout"
      v-if="$store.state.connecte"
      v-on:click="deco"
    >Logout</button>

  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      menu: false,
      userIcon:
        "https://eu.ui-avatars.com/api/?background=random&background=8BD59A&rounded=true&name=" +
        this.$store.state.member.fullname,
    };
  },
  methods: {
    toggleNav() {
      this.menu = !this.menu;
    },
    deco() {
      console.log(this.$store.state.token);
      this.$api
        .delete("members/signout", {
          token: this.$store.state.token,
        })
        .then(
          (response) => (
            this.$store.commit("setToken", false),
            this.$store.commit("setMember", false),
            this.$store.commit("Deco"),
            this.$router.push("/connexion")
          )
        )
        .catch((error) => alert(error.response.data.message));
    },
  },
};
</script>

<style scoped lang="scss">
nav {
  display: flex;
  flex-basis: 25vw;
  flex-direction: column;
  max-width: 400px;
  height: 100vh;
  overflow-y: hidden;
  background: #3fac55;
  position: relative;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    #logo {
      max-width: 4em;
      margin: 0.8em 0.5em;
    }

    img {
      margin: auto;
      max-width: 4em;
    }
    p {
      padding: 1rem;
      font-size: 1.4em;
      color: #2c3e50;
    }
    a {
      color: #2c3e50;
      transition: all 300ms ease;
      &:hover {
        color: #8bd59a;
        transition: all 300ms ease;
      }
    }
  }
  .logout {
    margin: 0 auto 1.5em;
    overflow: hidden;
    height: 3em;
    min-width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 0;
    border-radius: 0.5em;
    background: linear-gradient(145deg, #4bcc65, #338c45);
    box-shadow: 9.91px 9.91px 15px #399d4d, -9.91px -9.91px 15px #45bb5d;
    &:hover,
    &:focus {
      background: linear-gradient(145deg, #4bcc65, #338c45);
      box-shadow: inset 9.91px 9.91px 15px #399d4d,
        inset -9.91px -9.91px 15px #45bb5d;
    }
    h3 {
      color: #2c3e50;
    }
  }
}
@media (min-width: 851px) {
  .btn-menu {
    display: none;
  }
}

@media (max-width: 850px) {
  nav {
    max-width: 0;
    transition: all 0.5s ease;
  }
  .btn-menu {
    position: fixed;
    left: 1em;
    top: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 26px;
    padding-left: 0;
    padding-right: 0;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: pointer;
    transition: 0.3s ease;
    .visually-hidden {
      display: none;
    }
    &:focus {
      outline: none;
    }

    &__text {
      display: none;
    }

    &__bars {
      display: block;
      position: relative;
      width: 29px;
      height: 4px;
      background-color: #8bd59a;
      transition: 0.3s;

      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #8bd59a;
        transition: 0.3s;
      }

      &:before {
        transform: translate(0, -11px);
      }

      &:after {
        transform: translate(0, 11px);
      }
    }
  }
  .open {
    .btn-menu__bars {
      background-color: transparent;

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }
  }
  .open {
    max-width: 400px;
    transition: max-width 0.5s ease;
    position: fixed;

    .btn-menu {
      position: absolute;
      right: 1em;
      top: 1em;
      left: inherit;
    }
  }
}
</style>
