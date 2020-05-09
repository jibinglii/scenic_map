<template>
  <div class="list">
    <div v-for="(item,index) in videoList"
         :key="index">
      <div class="item"
           @click="videoListClick(item.F_Id)"
           :style="{'backgroundImage':'url('+item.F_Image+')'}">
        <p>{{item.F_Name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "moreList",
  data () {
    return {
      videoList: [],
    };
  },
  created () {
    this.videoLists()
  },
  methods: {
    videoLists () {
      this.videoList = this.$store.state.imageslists
    },
    videoListClick (id) {
      this.$store.dispatch('setItem_Id', id)
      this.$router.push({
        name: 'videoList',
        params: {
          id: id
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.list {
  .item {
    width: 100%;
    height: 2.3rem;
    background-size: 100% 100%;
    margin: 0px auto 15px;
    p {
      text-align: left;
      color: #fff;
      font-weight: 600;
      font-size: 0.32rem;
      padding: 10px 15px;
    }
  }
}
</style>