<template>
  <div id="Result" class="animate__animated animate__slideInLeft">
    <h4 class="t1">
      鉴于您有一定的购物经验，购物需求多样性，我们为您提供多平台的购物分析，以提升您的购物体验。
    </h4>

    <hr />
    <p class="num">1/4</p>
    <img src="../assets/pictures/4.jpg" alt="" />
    <h5>京东</h5>
    <p>
      电子类产品比如电脑手机相机这些首选京东，应该是只选京东，为什么呢，因为京东自营售后逆天的好.另外京东基本都是正品，
      虽然也有假货但是真货比例绝对比其他平台高的多。
      <br />
      <br />
      支付系统可以采用微信支付。
    </p>

    <hr />
    <p class="num">2/4</p>
    <img src="../assets/pictures/5.jpg" alt="" />
    <h5>淘宝</h5>
    <p>
      服装类比如鞋子裤子床单棉被之类的首选天猫淘宝，为什呢，因为品类多，这一点京东是远远比不上的，可以慢慢挑选。天猫质量也还可以就是售后太蛋疼。一句话品类多取胜。

      <br />
      <br />
      支付系统采用支付宝支付。
    </p>

    <hr />
    <p class="num">3/4</p>
    <img src="../assets/pictures/6.jpg" alt="" />
    <h5>拼多多：</h5>
    <p>
      小东西，比如碗筷啊，袜子啊，笔啊，水杯啊之类的就是单价低于30块钱的东西我会去拼多多，这小玩意就算是假货还能假到哪里去，不会影响我正常使用。
      <br />
      <br />
      支付系统建议使用微信支付。
    </p>

    <hr />
    <p class="num">4/4</p>
    <img src="../assets/pictures/7.jpg" alt="" />
    <h5>闲鱼</h5>
    <p>
      闲鱼是阿里巴巴旗下闲置交易平台，是一个闲置交易平台，买卖二手产品使用。咸鱼的优点就是实名制交易，对二手物品交易的安全性相对较高。
      <br />
      <br />
      支付系统采用支付宝支付。
    </p>

    <div class="c1">
        <van-button round type="info" @click="backToHome">返回首页</van-button>
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
  },
  mounted(){

  }
};
</script>

<style scoped>
#Result {
  margin:10vh 2vw;
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

h5 {
  margin-left: 5%;
  margin-right: 5%;
}

p {
  margin-left: 5%;
  margin-right: 5%;
}

.num {
  color: rgb(238, 74, 74);
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