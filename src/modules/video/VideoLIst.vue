<template>
  <div class="list">
    <div class="list_item"
         v-for="(item,index) in videoList"
         :key="index"
         :style="{backgroundImage:'url('+item.F_DefaultImage+')'}">
      <router-link :to="{name:'videoDetails',params:{id:item.F_Id,videoUrl:item.F_Video,defaultImg:item.F_DefaultImage,remarks:item.F_Remarks}}">
        <span class="title">{{item.F_Name}}</span>
        <img src="../../assets/images/play.png"
             alt
             class="play" />
        <div class="viewed">
          <img src="../../assets/images/person.png"
               alt />
          <span>{{item.F_Clicks}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "videoList",
  data () {
    return {
      videoList: [],
    };
  },
  created () {
    this.videoLists()
  },
  methods: {
    async videoLists () {
      this.$toast.loading({
        message: '加载中...',
      });
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      var fId = this.$store.state.item_Id
      console.log(fId)
      await this.$http.get('gisscenicarea/getvideolist/' + fId, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        this.$toast.clear()
        this.videoList = res.data.data
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  .list_item {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 3.8rem;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-bottom: 0.1rem;
    a {
      padding: 3%;
      span.title {
        display: block;
        text-align: left;
        color: #fff;
      }
      .play {
        width: 1.2rem;
        height: 1.2rem;
        margin: 10% auto 8%;
      }
      .viewed {
        text-align: right;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        img {
          width: 0.4rem;
          padding-right: 5px;
        }
        span {
          color: #fff;
          padding-top: 3px;
        }
      }
    }
  }
}
</style>