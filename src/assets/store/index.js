import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    answers:['','','','','',''],
    language:'简体中文',
    topText:'网购指引平台',
    topRightText:'登录/注册',
    bottomText1:'主页',
    bottomText2:'我的',
    bottomText3:'设置',
    update:'检测新版本',
    aboutUs:'关于我们',
    signOut:'退出当前账号',
    shouYe:'首页',
    paySystem:'支付系统',
    priceComp:'比价平台',
    advantages:'网购优势',
    languageSettings:'语言设置/Language',
    productionTeam:'制作团队',
    start:'我们开始吧',
    manage:'管理账号，云服务等',
    previous:'上一题',
    next:'下一题',
    submit:'提交',
    resultTitle:'根据您的答题情况，以下是您的购物指引：',
    t1:'关于网购',
    t2:'价格',
    t3:'售后质量',
    t4:'物流时间',
    backToHome:'返回首页',
    more:'获得更多购物指引',
    toPage:'/Result',
    show:false,
    loggedIn:false,
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
          question: "你对物品送达时间的快慢有要求吗？",
          options: ["需要快速配送", "正常速度", "慢一点可以接受", "无所谓"],
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
      results:[
          [
              '鉴于您没有网购经验,您可以查看详细的购物指引以获得帮助。网上购物的最大的好处就是商品种类齐全，价格便宜，节省时间，相对安全。我们十分推荐您尝试网购。',
              '有，网上购物的最大的好处就是商品种类齐全，价格便宜，节省时间，相对安全。'
          ],
          [
              '您可以使用比价平台对商品价格进行对比，也可以查看商品历史价格，下拉以获得比价平台指引',
              '建议您前往京东购物以获得良好的购物体验，但是价格会比较贵哦'
          ],
          [
              '建议您前往京东自营购买商品，京东是中国网购平台售后最好的。',
              '建议您前往拼多多进行购物哦，拼多多虽然没有售后，但是商品价格会有比较大的优势。'
          ],
          [
              '建议您前往京东自营购买商品，这个平台可以自由选择配送时间，而且京东在中国各地都有仓库，一般上午买的东西，下午就送到了。',
              '建议您可以使用淘宝或者拼多多进行购物，他们的物流时间或许会比较漫长，但是他们在价格方面会有优势。'
        ]
      ]
}
const actions = {
  
}
const mutations = {
    GETANSWERS(state,answers){
      for(var i=0;i<4;i++){
        if(answers[i+1]>2){
          state.answers[i]=1
        }
        else if(answers[i+1]<=2){
          state.answers[i]=0
        }
      }
    },
    LOGIN(state,status){
        state.loggedIn=status
        if(status==true){
            if(state.language=='简体中文'){
                state.topRightText='你好，王乾润'
            }
            else if(state.language=='English'){
                state.topRightText='Hello,Wang'
            }
        }
        else if(status==false){
            if(state.language=='简体中文'){
                state.topRightText='登录/注册'
            }
            else if(state.language=='English'){
                state.topRightText='Login/Register'
            }
        }
    },
    TO_PAGE(state,to){
      state.toPage=to
    },
    CHANGE_LANGUAGE(state,language){
        if(language=='简体中文'){
            state.language='简体中文';
            this.commit('LOGIN',state.loggedIn)
            state.topText='网购指引平台'
            state.bottomText1='主页'
            state.bottomText2='我的'
            state.bottomText3='设置'
            state.update='检测新版本'
            state.aboutUs='关于我们'
            state.signOut='退出当前账号'
            state.shouYe='首页'
            state.paySystem='支付系统'
            state.priceComp='比价平台'
            state.advantages='网购优势'
            state.languageSettings='语言设置/Language'
            state.productionTeam='制作团队'
            state.start='我们开始吧'
            state.manage='管理账号，云服务等'
            state.previous='上一题'
            state.next='下一题'
            state.submit='提交'
            state.resultTitle='根据您的答题情况，以下是您的购物指引'
            state.t1='关于网购'
            state.t2='价格'
            state.t3='售后质量'
            state.t4='物流时间'
            state.backToHome='返回首页'
            state.more='获得更多购物指引'
            state.questions=[
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
                    question: "你对物品送达时间的快慢有要求吗？",
                    options: ["需要快速配送", "正常速度", "慢一点可以接受", "无所谓"],
                },
                {
                  question: "你想购买什么类型的物品呢？",
                  options: [
                    "数码产品，家用电器，奢侈品。",
                    "蔬菜，水果，零食，生鲜食品。",
                    "化妆品，运动户外，医疗保健。",
                    "二手产品。",
                  ],
                }
              ];
            state.results=[
            [
                '鉴于您没有网购经验,您可以查看详细的购物指引以获得帮助。网上购物的最大的好处就是商品种类齐全，价格便宜，节省时间，相对安全。我们十分推荐您尝试网购。',
                '网上购物的最大的好处就是商品种类齐全，价格便宜，节省时间，相对安全。'
            ],
            [
                '鉴于您对商品无所谓,您可以使用比价平台对商品价格进行对比，也可以查看商品历史价格，下拉以获得比价平台指引',
                '建议您前往京东购物以获得良好的购物体验，但是价格会比较贵哦'
            ],
            [
                '鉴于您需要售后,建议您前往京东自营购买商品，京东是中国网购平台售后最好的。',
                '建议您前往拼多多进行购物哦，拼多多虽然没有售后，但是商品价格会有比较大的优势。'
            ],
            [
                '鉴于您对物品送达时间有需求,建议您前往京东自营购买商品，这个平台可以自由选择配送时间，而且京东在中国各地都有仓库，一般上午买的东西，下午就送到了。',
                '建议您可以使用淘宝或者拼多多进行购物，他们的物流时间或许会比较漫长，但是他们在价格方面会有优势。'
            ]
        ]
        }
        else if(language=='English'){
            state.language='English';
            this.commit('LOGIN',state.loggedIn)
            state.topText='OSGP'
            state.bottomText1='Home'
            state.bottomText2='My'
            state.bottomText3='Settings'
            state.update='Detect new version'
            state.aboutUs='About us'
            state.signOut='Exit current account'
            state.shouYe='Home page'
            state.paySystem='Payment system'
            state.priceComp='Price comparison platform'
            state.advantages='Advantages of online shopping'
            state.languageSettings='语言设置/Language'
            state.productionTeam='Production team'
            state.start="Let's start"
            state.manage='Management account,Cloud services...'
            state.previous='Previous'
            state.next='Next'
            state.submit='Submit'
            state.resultTitle='According to your answer, the following is your shopping guide.'
            state.t1='About online shopping'
            state.t2='Price'
            state.t3='After sales quality'
            state.t4='Logistics time'
            state.backToHome='Home'
            state.more='More'
            state.questions=[
                {
                  question: "你会中文吗？/ Can you read Chinese?",
                  options: ["是的 / Yes", "会一些 / A litte","几乎不会 / Hardly","不 / No"],
                },
                {
                  question: "Do you have any experience in online shopping?",
                  options: ["I often do online shopping", "I occasionally do online shopping", "I hardly do online shopping", "I haven't done online shopping"],
                },
                {
                  question: "How sensitive are you to price? ",
                  options: ["extremely sensitive", "relatively sensitive", "average", "it doesn't matter"],
                },
                {
                  question:
                    "How much do you need for after-sales quality?？",
                  options: [
                    "Need high-quality after-sales service",
                    "General after-sales service is OK",
                    "As long as there is",
                    "I don't care",
                  ],
                },
                {
                  question: "Do you have any requirements for the delivery time? ",
                  options: ["Need fast delivery "," Normal speed "," Slower is acceptable "," It doesn't matter "],
                },
                {
                  question: "What kind of items do you want to buy?",
                  options: [
                    "Digital products,luxury goods.",
                    "Vegetables, fruits, snacks.",
                    "Outdoor sports, medical care.",
                    "Second hand products.",
                  ],
                }
              ]
            state.results=[
                [
                    "You can check the detailed shopping guide for help. The biggest advantage of online shopping is that it has a wide range of goods, cheap prices, saves time and is relatively safe. We highly recommend you to try online shopping.",
                    "The biggest advantage of online shopping is that it has a wide range of goods, cheap prices, saves time and is relatively safe."              
                ],
                [           
                    "You can use the price comparison platform to compare commodity prices, or you can view commodity historical prices and pull down to get the price comparison platform guidance",
                    "I suggest you go to Jingdong to get a good shopping experience, but the price will be more expensive."
                ],
                [
                    "I suggest you go to Jingdong to buy goods by yourself. Jingdong is the best after-sales service platform in China.",
                    "I suggest you go to pinduoduo for shopping. Although pinduoduo has no after-sales service, the commodity price will have a great advantage."
                ],
                [
                    "It is recommended that you go to jd.com to purchase goods by yourself. This platform can freely choose the delivery time. Moreover, jd.com has warehouses all over China. Generally, things bought in the morning will be delivered in the afternoon.",
                    "I suggest you use Taobao or pinduoduo for shopping. Their logistics time may be long, but they will have an advantage in price."
                ]    
              ]
        }
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})