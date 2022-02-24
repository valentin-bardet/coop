<template>
  <div class="connection">
   

        <form @submit.prevent="Validation">
           <h1>Connectez-vous</h1>
          <div>
            <font-awesome-icon icon="envelope-open" />
            <input type="email" required v-model="email">
          </div>
          <div>
            <font-awesome-icon icon="lock" />
            <input type="password" required v-model="password">
          </div>
          <div>
            <button>
                <h3>
                  Valider
                </h3>
              </button>
          </div>
          <router-link to="/creationCompte">Pas encore de compte ?</router-link> 

      </form> 

   
  </div>
</template>

<script>


export default({
  data() {
    return {
      fullname: 'Valentin Bardet',
      email: 'Valentin.bardet88@gmail.com',
      password: 'test'
    }
  },
  methods:{
    Validation(){
      // this.$api.get('ping')
      this.$api.post('members/signin',{
        email: this.email,
        password: this.password,
      }).then(response => (
        this.$store.commit("setToken",response.data.token),
        this.$store.commit("setMember",response.data.member),
        this.getMembers(),
        this.$router.push("/")
        
        )
      ).catch((error) => alert(error.response.data.message));
    },
    getMembers(){
      this.$api.get('members',{
        token: this.$store.state.token
      }).then(response => (
        console.log(response.data),
        this.$store.commit("setMembers",response.data)
        )
      ).catch((error) => alert(error.response.data.message));
    }
  }
})
</script>

<style scoped lang="scss">

.connection{
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-position: center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1332%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(96%2c 197%2c 117%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c725.067C137.843%2c730.849%2c270.943%2c676.754%2c385.885%2c600.449C499.692%2c524.898%2c605.66%2c425.681%2c647.069%2c295.507C686.754%2c170.754%2c633.003%2c40.862%2c604.541%2c-86.92C578.268%2c-204.873%2c565.938%2c-330.49%2c487.213%2c-422.172C408.333%2c-514.035%2c291.036%2c-562.133%2c173.067%2c-589.412C59.734%2c-615.619%2c-52.998%2c-587.753%2c-168.481%2c-573.792C-308.348%2c-556.883%2c-480.108%2c-602.337%2c-575.745%2c-498.886C-670.955%2c-395.897%2c-585.896%2c-225.48%2c-616.931%2c-88.701C-651.946%2c65.62%2c-825.07%2c203.181%2c-768.582%2c351C-712.945%2c496.592%2c-505.768%2c500.717%2c-365.625%2c568.924C-244.002%2c628.118%2c-135.144%2c719.398%2c0%2c725.067' fill='%233fac55'%3e%3c/path%3e%3cpath d='M1920 1703.1889999999999C2050.598 1705.228 2179.279 1717.923 2302.933 1675.855 2452.7200000000003 1624.897 2630.0299999999997 1578.027 2702.0280000000002 1437.1399999999999 2774.103 1296.1 2683.134 1130.29 2661.947 973.324 2640.542 814.741 2670.082 640.8720000000001 2576.983 510.721 2481.26 376.90200000000004 2322.3450000000003 279.21000000000004 2158.131 269 2001.475 259.26 1888.813 416.73800000000006 1737.519 458.52599999999995 1582.386 501.375 1371.0529999999999 391.41099999999994 1267.8429999999998 514.902 1164.0549999999998 639.0840000000001 1285.557 828.256 1293.404 989.909 1299.5 1115.483 1264.913 1241.311 1308.824 1359.115 1354.6309999999999 1482.003 1430.394 1599.6770000000001 1544.676 1664.0149999999999 1656.5529999999999 1726.999 1791.628 1701.184 1920 1703.1889999999999' fill='%238bd59a'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1332'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}
form{
  border-radius: 0.5em;
  background:#3FAC55;
  width:30vw;
  min-width: 20em;
  margin:auto;
  display: flex;
  flex-direction: column;
  padding:2em;
  div{
    width:90%;
    margin:1em auto;
    display: flex;
    color: #2c3e50;
    background:#8BD59A;
    border-radius: 0.3em;
    &:nth-child(4){
      background:none;
    }
    svg{
      padding:1em 0 1em 1em;
    }
    input{
      background:none;
      border: none;
      width:90%;
      Min-width: 15em;
      padding:1em;
      color:#2c3e50
    }
    button{
      background:#8BD59A;
      margin:auto;
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

      h3{
        color:#2c3e50
      }
      &::before,
      &::after {
        position: absolute;
        display: block;
        content: "";
        width: 100%;
        height: 100%;
      }
      &::after{
        width: 300%;
        height: 300%;
        left: -300%;
        transform: rotate(45deg);
        background-color: #60C575;
        transition: all 300ms ease;
      } 
      &:hover h3{
        
        z-index: 10;
        font-weight: 600;
      } 
      &:hover::after{
        left: -100%;
      }
    }
  }
  a{
    text-align: right;
    text-decoration: none;
    color: #2c3e50;
    transition: all 300ms ease;
    &:hover{
      color: #8BD59A;
      transition: all 300ms ease;
    }
  }
  
}
</style>



