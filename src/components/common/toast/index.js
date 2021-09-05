import Toast from './Toast'

const obj ={}

obj.install = function (Vue){
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast)

  //2.用这个构造器创建对象
  const toast = new toastConstructor()

  //3.将创建出来的这个对象挂在到一个元素上
  toast.$mount(document.createElement('div'))

  //4.将这个元素添加到body中
  document.body.appendChild(toast.$el)

  //5.添加到vue中
  Vue.prototype.$toast=toast
}

export default obj