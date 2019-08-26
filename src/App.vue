<template>
  <div class="app">
    <!-- 头部 -->
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      fixed
    />
    <!-- 为了让它有切换滑动效果 -->
    <transition name="fly">
      <router-view></router-view>
    </transition>

    <!-- 底部 -->

    <van-tabbar v-model="active" fixed>
      <van-tabbar-item icon="home-o" to="/home">home</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/friend">friend</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/cart" info="8">cart</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">search</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      active: ''
    }
  },
  methods: {
    onClickLeft () {
      console.log('左')
    },
    onClickRight () {
      console.log('右')
    }
  }
}
</script>
<style lang="less" scoped>
.app {
  overflow: hidden;
  padding-top: 46px;
  padding-bottom: 50px;
  .fly-enter {
    transform: translateX(100%);
  }
  .fly-leave-to {
    transform: translateX(-100%);
    // 为了解决滑动时先往下压再走
    position: absolute;
    left: -300%;
  }
  .fly-enter-active,
  .fly-leave-active {
    transition: all 0.3s linear;
  }
}
</style>
