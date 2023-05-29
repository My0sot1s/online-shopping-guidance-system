<template>
  <div id="PaySystem" class="animate__animated animate__fadeIn">
    <h1 class="t1">payment system</h1>
    <hr />
    <p class="num">1/3</p>
    <img src="../assets/pictures/1.jpg" alt="" />
    <h5>Digital RMB:</h5>
    <p>
      Digital renminbi is a digital currency issued by the People's Bank of
      China, and it is very likely to be the mainstream payment method in the
      future, but there are currently fewer applicable scenarios.
    </p>

    <hr />
    <p class="num">2/3</p>
    <img src="../assets/pictures/2.jpg" alt="" />
    <h5>WeChat Pay:</h5>
    <p>
      WeChat Pay is very adaptable and relatively simple to use. Currently, only
      Taobao does not support WeChat Pay on the shopping platform.
      <br />
      <br />
      But you need to bind a bank card before you can use it.
    </p>

    <hr />
    <p class="num">3/3</p>
    <img src="../assets/pictures/3.jpg" alt="" />
    <h5>Alipay:</h5>
    <p>
      Alipay is very adaptable and relatively simple to use. The shopping
      platform is currently suitable for platforms such as Taobao and Xianyu.
      <br />
      <br />
      But you need to bind a bank card before you can use it.
    </p>

    <div class="c1">
        <van-button round type="info" @click="backToHome">Back to previous</van-button>
        <van-button round type="info">Go shopping</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
        backToHome(){
            this.$router.currentRoute.fullPath=="/Home"||this.$router.push('/Home');
        }
    }
};
</script>

<style scoped>
#PaySystem {
  margin:10vh 2vw;
}
body {
  margin: 0;
  background-color: rgb(238, 252, 255);
}

.t1 {
  text-align: center;
}

img {
  width: 100%;
}

h5 {
  margin-left: 5%;
  margin-right: 5%;
}

p {
  margin-left: 5%;
  margin-right: 5%;
}

.num {
  color: #39a9ed;
  font-weight: 600;
}

.c1 {
  background-color: white;
  display: flex;
  flex-direction: column;
  padding:0 5vw;
  justify-content: space-around;
  height: 150px;
}

.c1c0 {
  height: 30px;
}

.c1c1 {
  width: 200px;
  height: 30px;
  margin: auto;
  text-align: center;
  font-weight: 800;
  padding-top: 5px;
  background-color: rgb(255, 145, 55);
  font-size: 140%;
}

.c1c1 a {
  text-decoration: none;
  color: white;
}
</style>