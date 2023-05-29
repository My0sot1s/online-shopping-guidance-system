<template>
  <div id="PaySystem1" class="animate__animated animate__fadeIn">
    <h1 class="t1">支付系统</h1>

    <hr />
    <p class="num">1/3</p>
    <img src="../assets/pictures/1.jpg" alt="" />
    <h5>数字人民币：</h5>
    <p>
      数字人民币是由中国人民银行发行的数字货币，也很有可能是未来的主流支付方式，但是目前适用场景较少。
    </p>

    <hr />
    <p class="num">2/3</p>
    <img src="../assets/pictures/2.jpg" alt="" />
    <h5>微信支付：</h5>
    <p>
      微信支付的适应性很广，而且较为简单易用，购物平台目前只有淘宝不支持微信支付。
      <br />
      <br />
      但是需要绑定银行卡才可以使用。
    </p>

    <hr />
    <p class="num">3/3</p>
    <img src="../assets/pictures/3.jpg" alt="" />
    <h5>支付宝：</h5>
    <p>
      支付宝的适应性很广，而且较为简单易用，购物平台目前适用于淘宝与闲鱼等平台。
      <br />
      <br />
      但是需要绑定银行卡才可以使用。
    </p>

    <div class="c1">
        <van-button round type="info" @click="backToHome">返回上一级</van-button>
        <van-button round type="info">前往购物平台</van-button>
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
#PaySystem1 {
  margin:10vh 2vw;
  background-color: rgb(241, 241, 241);
}
body {
  margin: 0;
  background-color: rgb(251, 255, 215);
}

.t1 {
  text-align: center;
}

img {
  width: 100%;
}

h4 {
  margin-left: 5%;
  margin-right: 5%;
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