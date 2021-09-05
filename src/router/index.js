import Vue from 'vue'
import VueRouter from 'vue-router'

//页面懒加载
const Home= () => import('views/home/home')
const Category= () => import('views/category/category')
const Cart= () => import('views/cart/cart')
const Profile= () => import('views/profile/profile')
const Detail= () => import('views/detail/Detail')

Vue.use(VueRouter)

const routes=[
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/detail/:id',
      component:Detail
    }
]

const router=new VueRouter({
    routes,
    mode:'history'

})

export default router