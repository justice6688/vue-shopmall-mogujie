import Toast from './Toast'

const obj = {}

// main里安装了这个文件插件，就会自动执行install函数
obj.install = function (Vue) {
  // console.log('执行了install函数')
  //console.log(Toast.$el) //执行时，组件还没渲染完成，所以获得undefied

  // 如何添加组件
  //1、创建组件构造器
  const toastConstrustor = Vue.extend(Toast)

  // 2、new的方式，根据组件构造器创建组件对象
  const toast = new toastConstrustor();

  // 3、将组件对象，收到挂在到某一个元素上
  toast.$mount(document.createElement('div'))

  // 4、toast.$el对应就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast  // 要等与我们构造器构造出来的对象
  // 现在就是全局都可以通过this.$toast来直接调取组件内的东西
}

export default obj