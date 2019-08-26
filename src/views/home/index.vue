<template>
  <div class="home">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white" class="lunbo">
      <van-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img" />
      </van-swipe-item>
    </van-swipe>

    <!-- 宫格 -->
    <van-grid :column-num="3" class="grids" >
      <!-- 最重要的是props  给子组件传递数据
      :to="item.to" 绑定每一个的跳转 后台接口有数据自动就跳转了-->
      <van-grid-item v-for="item in grids" :key="item.id" props="item" :to="item.to">
        <template slot="icon">
          <img :src="item.src">
          <span>{{item.title}}</span>
        </template>
      </van-grid-item>
    </van-grid>

  </div>
</template>
<script>
export default {
  data: () => ({
    list: [],
    grids: []
  }),
  created () {
    this.lunbo()
    this.getgrids()
  },
  methods: {
    async lunbo () {
      const {
        data: { message, status }
      } = await this.$http.get('http://127.0.0.1:5000/api/getlunbo')
      // console.log(await this.$http.get('http://127.0.0.1:5000/api/getlunbo'))
      if (status !== 0) return this.$Toast('获取轮播图失败')
      this.list = message
    },
    async getgrids () {
      const {
        data: { message, status }
      } = await this.$http.get('http://127.0.0.1:5000/api/grids')
      console.log(await this.$http.get('http://127.0.0.1:5000/api/grids'))
      if (status !== 0) return this.$Toast('获取宫格失败')
      this.grids = message
    }
  }
}
</script>
<style lang="less" scoped>
.lunbo {
  height: 200px;
  background: khaki;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.grids{
  img{
    height:60px;
    width:60px;
    display:block;
  }
  span{
    font-size:12px;
    padding: 5px 0px;
  }
}
</style>
