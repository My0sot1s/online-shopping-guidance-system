<template>
  <div id="Result1" class="animate__animated animate__slideInLeft">
      <h4 class="t1">In view of your certain shopping experience and diversity of shopping needs,
         we provide you with multi-platform shopping analysis to enhance your shopping experience.
    </h4>

    <hr />
    <p class="num">1/4</p>
    <img src="../assets/pictures/4.jpg" alt="">
    <h5>NASDAQ:JD</h5>
    <p>Electronic products such as computers, mobile phones and cameras are the first choice for JD.com. It should only be JD.com. Why? 
        Because JD.com’s self-service after-sales is good. In addition, JD.com is basically genuine.
        <br />
        <br />
        The payment system recommends using WeChat Pay.
    </p>

    <hr />
    <p class="num">2/4</p>
    <img src="../assets/pictures/5.jpg" alt="">
    <h5>TaoBao</h5>
    <p>Tmall Taobao is the first choice for clothing, such as shoes, pants, bed sheets, and quilts. Why, because there are so many categories, Jingdong is far behind, so you can choose slowly. 
        The quality of Tmall can also be that the after-sales service is too painful. One word category wins more.


        <br />
        <br />
        The payment system uses Alipay.
    </p>

    <hr />
    <p class="num">3/4</p>
    <img src="../assets/pictures/6.jpg" alt="">
    <h5>PingDouDou</h5>
    <p>Small things, such as bowls and chopsticks, socks, pens, water cups and the like are things with a unit price of less than 30 yuan. 
        I will fight for a lot of things. Even if the gadgets are fake, where can they be faked? Affect my normal use.
        <br />
        <br />
        The payment system recommends using WeChat Pay.
    </p>

    <hr />
    <p class="num">4/4</p>
    <img src="../assets/pictures/7.jpg" alt="">
    <h5>XianYv</h5>
    <p>Xianyu is an idle trading platform owned by Alibaba. It is an idle trading platform for buying and selling second-hand products. 
        The advantage of salted fish is the real-name transaction, which is relatively safe for second-hand goods transactions.
        <br />
        <br />
        The payment system uses Alipay.
    </p>


    <div class="c1">
        <van-button round type="info" @click="backToHome">Back to home</van-button>
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
    },
    mounted(){

    }
}
</script>

<style scoped>
    #Result1{
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

        h4{
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