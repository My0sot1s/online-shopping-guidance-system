<template>
  <div id="main" class="animate__animated animate__fadeIn">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/pictures/s1.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/pictures/s2.png" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/pictures/s3.png" />
      </van-swipe-item>
    </van-swipe>

    <van-grid>
      <van-grid-item
        icon="paid"
        :text="this.$store.state.paySystem"
        @click="toPaySystem"
      />
      <van-grid-item icon="points" :text="this.$store.state.priceComp" />
      <van-grid-item
        icon="thumb-circle-o"
        :text="this.$store.state.advantages"
      />
      <van-grid-item icon="exchange" text="Language" @click="toSettings" />
    </van-grid>

    <!-- <div id="start">
      <div
        @click="toLogin"
        class="
          animate__animated animate__flash animate__infinite
          infinite
          animate__slower
        "
      >
        {{ this.$store.state.start }}
      </div>
    </div> -->
    <a href="javascript:;" @click="toLogin">{{this.$store.state.start}}</a>
  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {
      if (this.$store.state.loggedIn == false) {
        this.$router.currentRoute.fullPath == "/Login" ||
          this.$router.push("/Login");
      } else if (this.$store.state.loggedIn == true) {
        this.$router.currentRoute.fullPath == "/Tests" ||
          this.$router.push("/Tests");
      }
    },
    toSettings() {
      this.$router.currentRoute.fullPath == "/Settings" ||
        this.$router.push("/Settings");
    },
    toPaySystem() {
      if (this.$store.state.language == "简体中文") {
        this.$router.currentRoute.fullPath == "/PaySystem1" ||
          this.$router.push("/PaySystem1");
      } else if (this.$store.state.language == "English") {
        this.$router.currentRoute.fullPath == "/PaySystem2" ||
          this.$router.push("/PaySystem");
      }
    },
  },
};
</script>

<style scoped>
@keyframes  sun{
	100%{
		background-position: -400% 0;
	}
}
a{
	text-decoration: none;
	position: absolute;
	left: 50vw;
	top: 70vh;
	transform: translate(-50%,-50%);
	font-size: 24px;
	background:linear-gradient(90deg,#03a9f4,#f441a5,#ffeb3b,#03a9f4);
	background-size: 400%;
	width: 90vw;
	height: 20vh;
	line-height: 20vh;
	text-align: center;
	color: white;
	text-transform: uppercase;
	border-radius: 50px;
	z-index: 1;
	
}
a::before{
	content: "";
	position: absolute;
	left: -5px;
	right: -5px;
	bottom: -5px;
	top: -5px;
	background:linear-gradient(90deg,#03a9f4,#f441a5,#03a9f4);
	background-size: 400%;
	border-radius: 12vw;
	z-index: -1;
	
}
a::before{
	animation: sun 20s infinite;
}

a{
	animation: sun 20s infinite;
}

img {
  height: 100%;
  width: 100%;
}
.my-swipe .van-swipe-item {
  margin: 10vh 0 0 0;
  height: 30vh;
  color: #fff;
  font-size: 20px;
  line-height: 30vh;
  text-align: center;
  background-color: #39a9ed;
}
#start {
  background-color: skyblue;
  color: white;
  margin: 5vh 5vw;
  width: 90vw;
  height: 25vh;
  font-size: 3rem;
  line-height: 25vh;
  text-align: center;
  border-radius: 2vw;
}
.van-sidebar-item--select::before {
  color: #39a9ed !important;
}
</style>