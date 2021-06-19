<template>
  <div class="profile">
    <div class="header">个人主页</div>
    <p class="set">设置</p>
    <div class="avatar">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-chaiquan"></use>
      </svg>
    </div>
    <div class="login"><span>登录</span><span>注册</span></div>
    <div class="other">
        <p>钱包</p>
    <p>主题</p>
    <p>订单</p>
    </div>
    <div class="picture"></div>
    <p class="slogan">Have a Good Day</p>
  </div>
</template>

<script>
export default {};
</script>

<style >
.header{
    height: 44px;
    line-height: 44px;
    background-color: palevioletred;
    text-align: center;
}
.set{
    position: absolute;
    right: 0;
    width: 50px;
    padding: 5px;
    background-color: pink;
    border-radius: 10px;
    text-align: center;
    margin: 15px 5px;
}
.avatar{
    margin: 30px;
}
.login{
    text-align: center;
}
.login span{
    margin: 45px;
}
.other p{
    text-align: center;
    margin: 40px 0;
    width: 80px;
    padding: 10px;
    border: 2px solid palevioletred;
    background-color: white;
    border-radius: 5px;
    margin: 30px auto;
}
.slogan{
    text-align: center;
    margin-top: 150px;
    font-size: 30px;
    font-family: cursive;
    color: crimson;
}
</style>