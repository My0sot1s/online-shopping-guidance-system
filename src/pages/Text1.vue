<template>
  <div id="Text1" class="animate__animated animate__slideInLeft">
      <h4 class="t1">According to your shopping needs<br /> can shop on NASDAQ:JD <br />to get a good shopping experience.
    </h4>

    <hr />
    <p class="num">1/11</p>
    <img src="../assets/pictures/8.jpg" alt="">
    <p>Must-have apps for mobile shopping.</p>

    <hr />
    <p class="num">2/11</p>
    <img src="../assets/pictures/9.jpg" alt="">
    <p>You can choose products in different ways.</p>

    <hr />
    <p class="num">3/11</p>
    <img src="../assets/pictures/10.jpg" alt="">
    <p>You can enter only keywords or specific product models.</p>

    <hr />
    <p class="num">4/11</p>
    <img src="../assets/pictures/11.jpg" alt="">
    <p>You need to translate the entered text into Chinese.</p>

    <hr />
    <p class="num">5/11</p>
    <img src="../assets/pictures/12.jpg" alt="">
    <p>Under normal circumstances, we
        recommend that you use a professional search.
    </p>

    <hr />
    <p class="num">6/11</p>
    <img src="../assets/pictures/13.jpg" alt="">
    <p>You can choose the detailed parameters of the goods you need to buy in detail.</p>

    <hr />
    <p class="num">7/11</p>
    <img src="../assets/pictures/14.jpg" alt="">
    <p>If you have any doubts, you can ask the customer service for help, but currently only Chinese customer service is
        available.</p>

    <hr />
    <p class="num">8/11</p>
    <img src="../assets/pictures/15.jpg" alt="">
    <p>You can refer to the suggestions of people who have bought this product.</p>

    <hr />
    <p class="num">9/11</p>
    <img src="../assets/pictures/16.jpg" alt="">
    <p>It is very important to fill in your receiving information clearly.</p>

    <hr />
    <p class="num">10/11</p>
    <img src="../assets/pictures/17.jpg" alt="">
    <p>You can refer to the ranking data to buy goods.</p>

    <hr />
    <p class="num">11/11</p>
    <img src="../assets/pictures/18.jpg" alt="">
    <p>On the "My" page, you can view the order of the purchased goods.</p>

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
    }
}
</script>

<style scoped>
    #Text1{
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