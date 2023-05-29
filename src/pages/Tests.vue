<template>
  <div id="app" v-cloak>
    <div id="background">
      <div id="c4" class="circle"></div>
      <div id="c3" class="circle"></div>
      <div id="c2" class="circle"></div>
      <div id="c1" class="circle"></div>
    </div>
    <div id="header">
      <div>Color测</div>
      <div id="music" @click="play()" v-if="!playmusic">♫</div>
      <div id="music" @click="pause()" v-if="playmusic">■</div>
    </div>
    <div id="main">
      <div id="card" class="animate__animated animate__slideInLeft">
        <div id="question" v-text="this.$store.state.questions[index].question"></div>
        <ul id="options">
          <li
            v-text="this.$store.state.questions[this.index].options[0]"
            :class="this.classes[this.index][0]"
            @click="select(0)"
          ></li>
          <li
            v-text="this.$store.state.questions[this.index].options[1]"
            :class="this.classes[this.index][1]"
            @click="select(1)"
          ></li>
          <li
            v-text="this.$store.state.questions[this.index].options[2]"
            :class="this.classes[this.index][2]"
            @click="select(2)"
          ></li>
          <li
            v-text="this.$store.state.questions[this.index].options[3]"
            :class="this.classes[this.index][3]"
            @click="select(3)"
          ></li>
        </ul>
<!--         <img id="picture" :src="this.pictures[this.index]" /> -->
      </div>
    </div>
    <div id="footer" class="animate__animated animate__fadeIn">
      <div id="pgup" class="footericon" @click="indexreduce">{{this.$store.state.previous}}</div>
      <div id="pgnow" class="footericon" v-text="this.index + 1 + '/6'"></div>
      <div
        id="pudn"
        class="footericon"
        @click="indexplus"
        v-if="this.index != 5"
      >
        {{this.$store.state.next}}
      </div>
      <div
        id="submit"
        class="footericon"
        @click="submit"
        v-if="this.index == 5"
      >
        {{this.$store.state.submit}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "你会中文吗？/ Can you read Chinese?",
          options: ["是的 / Yes", "会一些 / A litte","几乎不会 / Hardly","不 / No"],
        },
        {
          question: "你有没有网购的经验？",
          options: ["我经常网购", "我偶尔网购", "我几乎不网购", "我没有网购过"],
        },
        {
          question: "你对价格的敏感程度？",
          options: ["极度敏感", "比较敏感", "一般", "无所谓"],
        },
        {
          question:
            "你对售后质量有多大需求？",
          options: [
            "需要优质的售后",
            "一般的售后就行",
            "只要有售后就可以",
            "我不关心",
          ],
        },
        {
          question: "你喜欢囤货吗？",
          options: ["囤货给我安全感", "囤不过期的货", "很少囤", "不想囤占地方"],
        },
        {
          question: "你想购买什么类型的物品呢？",
          options: [
            "数码产品，家用电器，奢侈品。",
            "蔬菜，水果，零食，生鲜食品。",
            "化妆品，运动户外，医疗保健。",
            "二手产品。",
          ],
        },
      ],
      answers: ["", "", "", "", "", ""],
      index: 0,
      classes: [
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
        ["", "", "", ""],
      ],
      /* pictures: [
        "..\\images\\questions\\p1.png",
        "..\\images\\questions\\p2.png",
        "..\\images\\questions\\p3.png",
        "..\\images\\questions\\p4.png",
        "..\\images\\questions\\p5.png",
        "..\\images\\questions\\p6.png",
      ], */
      playmusic: parent.playmusic,
      pgupid: "pgupdisabled",
      submitid: "",
    };
  },
  methods: {
    select(option) {
      this.answers[this.index] = option + 1;
      this.classes[this.index] = ["", "", "", ""];
      this.classes[this.index][option] = "selectedoption";
      this.$forceUpdate();
      if (this.index==0&&(this.answers[0]==1||this.answers[0]==2)){
        this.$store.commit('CHANGE_LANGUAGE','简体中文')
      }
      else if(this.index==0&&(this.answers[0]==3||this.answers[0]==4)){
        this.$store.commit('CHANGE_LANGUAGE','English')
      }
      if (this.index != 5) {
        setTimeout(() => {
          this.indexplus();
        }, 500);
      } else {
        this.indexplus();
      }
    },
    indexplus() {
      /* this.classes[this.index]=[]; */
      if (this.index < 5) {
        this.index++;
      }
      if (
        this.answers[0] == "" ||
        this.answers[1] == "" ||
        this.answers[2] == "" ||
        this.answers[3] == "" ||
        this.answers[4] == "" ||
        this.answers[5] == ""
      ) {
        this.submitid = "submitdisabled";
      } else {
        this.submitid = "";
      }
      this.pgupid = "";
    },
    indexreduce() {
      /* this.class=[]; */
      if (this.index > 0) {
        this.index--;
      }
      if (this.index == 0) {
        this.pgupid = "pgupdisabled";
      }
    },
    play() {
      parent.audio.play();
      this.playmusic = 1;
      parent.playmusic = 1;
    },
    pause() {
      parent.audio.pause();
      this.playmusic = 0;
      parent.playmusic = 0;
    },
    submit() {
      if (
        this.answers[0] != "" &&
        this.answers[1] != "" &&
        this.answers[2] != "" &&
        this.answers[3] != "" &&
        this.answers[4] != "" &&
        this.answers[5] != ""
      ) {
          this.$store.commit('GETANSWERS',[
            this.answers[0],
            this.answers[1],
            this.answers[2],
            this.answers[3],
            this.answers[4],
            this.answers[5],
          ])
          if(this.answers[0]>2&&this.answers[1]==4&&this.answers[2]==4&&this.answers[3]==12&&this.answers[4]==1){
            this.$store.commit('TO_PAGE','/Text1')
          }
          else if(this.answers[0]<=2&&this.answers[1]==4&&this.answers[2]==3&&this.answers[3]==4&&this.answers[4]==4){
            this.$store.commit('TO_PAGE','/Text2')
          }
          else if(this.answers[0]<=2&&this.answers[1]==1&&this.answers[2]==1&&this.answers[3]==1&&this.answers[4]==4){
            this.$store.commit('TO_PAGE','/Text3')
          }
          else if(this.answers[0]>2){
            this.$store.commit('TO_PAGE','/Result1')
          }
          else{
            this.$store.commit('TO_PAGE','/Result')
          }
          this.$router.push('/ResultText')
        /* axios
          .post("/predict", {
            text1: this.answers[0],
            text2: this.answers[1],
            text3: this.answers[2],
            text4: this.answers[3],
            text5: this.answers[4],
            text6: this.answers[5],
          })
          .then((response) => {
            if (response.data.answer != "error") {
              
              location.href = "new.html";
            } else {
              alert("数据返回失败！");
            }
          }); */
      } else {
        alert("还有题目未完成！");
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
/* #background{
			position: absolute;
			width: 100vw;
			height: 100vh;
            background: radial-gradient(circle, 
			hsl(320deg, 80%, 70%),
			hsl(250deg, 80%, 70%),
			hsl(190deg, 80% ,70%) 150%
            );
		} */
#background {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #1989fa;
  /* background-color: rgb(240, 239, 239); */
  /* filter: brightness(175%); */
}
/* .circle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  border-radius: 50%;
}
#c1 {
  width: 37vw;
  height: 37vw;
  background-color: #9e9e9e;
}
#c2 {
  width: 108vw;
  height: 108vw;
  background-color: #a39bb8;
}
#c3 {
  width: 172vw;
  height: 172vw;
  background-color: #9aa8b8;
}
#c4 {
  width: 250vw;
  height: 250vw;
  background-color: #84c0c0;
} */
#header {
  position: relative;
  width: 100vw;
  height: 10vh;
  background-color: white;
  text-align: center;
  line-height: 10vh;
  opacity: 0.5;
}
/* #header::after {
			content: "♫";
			position: absolute;
			top:0%;
			left:90%;
			font-weight: bolder;
			font-size: 7vw;
		} */
#music {
  position: absolute;
  top: 0%;
  left: 90%;
  font-weight: bolder;
  font-size: 7vw;
}
#main {
  position: relative;
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
#card {
  background-color: white;
  position: relative;
  margin-top: 5vh;
  width: 90vw;
  height: 80vh;
  opacity: 0.9;
  color: black;
}
#question {
  width: 70vw;
  height: 10vh;
  margin: 4vh auto 2vh auto;
  font-size: 1rem;
  color: black;
  font-weight: bold;
  border-radius: 3vw;
}
#options {
  position: relative;
  width: 70vw;
  height: 30vh;
  margin: 0 auto 3vh auto;
}
#options > * {
  list-style-type: none;
  width: 70vw;
  height: 6vh;
  line-height: 6vh;
  margin-bottom: 3vh;
  background-color: #38f;
  color:white;
  border-radius: 6vw;
}
.selectedoption {
  background-color: #0e68a0 !important;
}
#picture {
  background-size: 86vw 25vh;
  margin: 0 auto 2vh auto;
  width: 86vw;
  height: 25vh;
}
#footer {
  position: relative;
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 0 0 3vh 0;
}
.footericon {
  width: 20vw;
  height: 4vh;
  line-height: 4vh;
  text-align: center;
  box-shadow: 0.1px 0.1px 5px gray;
  color:black;
  background-color: white;
  opacity: 0.9;
  border-radius: 2vw;
}
#pgupdisabled {
  opacity: 0.4;
}
#submitdisabled {
  opacity: 0.4;
}
#pgnow {
  box-shadow: 0 0;
  color:white;
  background-color: inherit;
}
</style>