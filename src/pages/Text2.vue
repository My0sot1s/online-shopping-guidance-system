<template>
  <div id="Text2" class="animate__animated animate__slideInLeft">
      <h4 class="t1">根据您的购物需求，建议前往拼多多进行购物，<br />以获得良好的购物体验。
    </h4>

    <hr />
    <p class="num">1/8</p>
    <img src="../assets/pictures/19.jpg" alt="">
    <p>多多买菜采用自提模式，第一天买，第二天前往住址附近的自提点领取，菜品比价便宜，而且种类很多，对比去菜市场买会节约时间。</p>

    <hr />
    <p class="num">2/8</p>
    <img src="../assets/pictures/20.jpg" alt="">
    <p>这个平台的优惠活动不要相信，只需要搜索自己想买的商品直接购买就可以了</p>

    <hr />
    <p class="num">3/8</p>
    <img src="../assets/pictures/21.jpg" alt="">
    <p>一般情况下输入关键字即可，不用输入具体种类。例如需要购买厦门的萝卜，不需要输入厦门，只需要输入萝卜就行。</p>

    <hr />
    <p class="num">4/8</p>
    <img src="../assets/pictures/22.jpg" alt="">
    <p>点击喜欢的商品进入下一个页面，或者向下滑动</p>

    <hr />
    <p class="num">5/8</p>
    <img src="../assets/pictures/23.jpg" alt="">
    <p>购买商品
    </p>

    <hr />
    <p class="num">6/8</p>
    <img src="../assets/pictures/24.jpg" alt="">
    <p>确定订单信息</p>

    <hr />
    <p class="num">7/8</p>
    <img src="../assets/pictures/25.jpg" alt="">
    <p>如果对购买的商品有地址错误，想退换货，等各种需求，可以需求客服协助。</p>

    <hr />
    <p class="num">8/8</p>
    <img src="../assets/pictures/26.jpg" alt="">
    <p>这只是虚假宣传，一般消费者直接购买商品就好，不需要理会，若希望更有保障的网络购物，可以前往京东自营平台进行购买。</p>


    <div class="c1">
        <van-button round type="info" @click="backToHome">返回首页</van-button>
        <van-button round type="info">前往购物页面</van-button>
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
    #Text2{
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