<template>
  <div class="newlist">
    <!-- router-link  点击哪一条就跳转到对应的id上     -->
    <router-link :to="'/home/newslist/'+item.id" v-for="item in newslist" :key="item.id">
    <van-card :title="item.title" :thumb="item.img_url">
      <div slot="price">
        <span>发表时间:{{item.add_time}}</span>
      </div>
      <div slot="num">
        <span>点击{{item.click}}次</span>
      </div>
    </van-card>
    </router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    newslist: []
  }),
  created () {
    this.getnews()
  },
  methods: {
    async getnews () {
      const {
        data: { message, status }
      } = await this.$http.get('http://127.0.0.1:5000/api/getnewslist')
      console.log(message)
      if (status !== 0) return this.$Toast('获取新闻列表失败')
      this.newslist = message
    }
  }
}
</script>
<style lang="less" scoped>
  .van-card__thumb{
    height:55px;
  }
  .van-card__content{
    min-height:55px;
    .van-card__title{
      margin-bottom:20px;
    }
  }
</style>
