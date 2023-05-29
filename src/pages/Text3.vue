<template>
  <div id="Text3" class="animate__animated animate__slideInLeft">
      <h4 class="t1">根据您的购物需求，你可以使用比价软件进行价格对比，<br/>以获得良好的购物体验。
    </h4>

    <hr />
    <p class="num">1/9</p>
    <img src="../assets/pictures/27.jpg" alt="">
    <p>打开软件后如有需要跳转到购物平台，请保持该软件在后台运行</p>

    <hr />
    <p class="num">2/9</p>
    <img src="../assets/pictures/28.jpg" alt="">
    <p>建议在购买贵重物品是进行价格对比，普通商品直接在购物平台购买即可</p>

    <hr />
    <p class="num">3/9</p>
    <img src="../assets/pictures/29.jpg" alt="">
    <p>先选择商品型号，再进行搜索</p>

    <hr />
    <p class="num">4/9</p>
    <img src="../assets/pictures/30.jpg" alt="">
    <p>如果商品价格差距较小，建议前往服务更好的平台购买</p>

    <hr />
    <p class="num">5/9</p>
    <img src="../assets/pictures/31.jpg" alt="">
    <p>在任意购物平台购买商品都可以查看该商品的历史价格
    </p>

    <hr />
    <p class="num">6/9</p>
    <img src="../assets/pictures/32.jpg" alt="">
    <p>需要给购物平台授权，保证可以其拥有复制权限。</p>

    <hr />
    <p class="num">7/9</p>
    <img src="../assets/pictures/33.jpg" alt="">
    <p>复制链接后，打开喵喵折应用程序，即可弹出此窗口。</p>

    <hr />
    <p class="num">8/9</p>
    <img src="../assets/pictures/34.jpg" alt="">
    <p>可以利用图标查看</p>

    <hr />
    <p class="num">9/9</p>
    <img src="../assets/pictures/35.jpg" alt="">
    <p>可以根据图表预测商品可能降价的时间</p>

    
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
    #Text3{
        margin: 10vh 5vw;
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