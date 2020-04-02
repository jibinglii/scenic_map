<template>
  <div class="list">
    <div
      class="list_item"
      v-for="(item,index) in videoList"
      :key="index"
      :style="{backgroundImage:'url('+item.videoBg+')'}"
    >
      <router-link :to="{name:'videoDetails',query:{id:item.id}}">
        <span class="title">{{item.title}}</span>
        <img src="../assets/images/play.png" alt class="play" />
        <div class="viewed">
          <img src="../assets/images/person.png" alt />
          <span>{{item.view}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "videoList",
  data() {
    return {
      videoList: [
        {
          id: 1,
          title: "华清池-唐代封建帝王游幸的别宫",
          view: 45,
          videoBg: require("../assets/images/timg.png")
        },
        {
          id: 2,
          title: "兵马俑-秦始皇兵马俑陪葬坑",
          view: 45,
          videoBg: require("../assets/images/timg.png")
        }
      ]
    };
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
    padding: 3%;
    span.title {
      display: block;
      text-align: left;
      color: #fff;
    }
    .play {
      width: 1.2rem;
      height: 1.2rem;
      margin: 12% auto 7%;
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
      span{
          color: #fff;
      }
    }
  }
}
</style>