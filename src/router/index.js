import VueRouter from 'vue-router'

import Home from '../pages/Home.vue'
import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'
import Tests from '../pages/Tests.vue'
import PaySystem from '../pages/PaySystem.vue'
import PaySystem1 from '../pages/PaySystem1.vue'
import Result from '../pages/Result.vue'
import Result1 from '../pages/Result1.vue'
import Text1 from '../pages/Text1.vue'
import Text2 from '../pages/Text2.vue'
import Text3 from '../pages/Text3.vue'
import Settings from '../pages/Settings.vue'
import My from '../pages/My.vue'
import ResultText from '../pages/ResultText.vue'
import Error from '../pages/Error.vue'

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'Home'
        },
        {
            path:'/Home',
            name:'Home',
            component:Home
        },
        {
            path:'/Register',
            name:'Register',
            component:Register
        },
        {
            path:'/Login',
            name:'Login',
            component:Login
        },
        {
            path:'/Tests',
            name:'Tests',
            component:Tests
        },
        {
            path:'/PaySystem',
            name:'PaySystem',
            component:PaySystem
        },
        {
            path:'/PaySystem1',
            name:'PaySystem1',
            component:PaySystem1
        },
        {
            path:'/Result',
            name:'Result',
            component:Result
        },
        {
            path:'/Result1',
            name:'Result1',
            component:Result1
        },
        {
            path:'/Text1',
            name:'Text1',
            component:Text1
        },
        {
            path:'/Text2',
            name:'Text2',
            component:Text2
        },
        {
            path:'/Text3',
            name:'Text3',
            component:Text3
        },
        {
            path:'/Settings',
            name:'Settings',
            component:Settings
        },
        {
            path:'/My',
            name:'My',
            component:My
        },
        {
            path:'/ResultText',
            name:'ResultText',
            component:ResultText
        },
        {
            path:'/Error',
            name:'Error',
            component:Error
        }
    ]
})