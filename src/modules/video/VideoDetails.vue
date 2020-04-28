<template>
  <div class="_div videoDetails">
    <video-plyer :videoUrl="$route.params.videoUrl"
                 :defaultImg="$route.params.defaultImg"></video-plyer>
    <!-- <van-tabs v-model="active">
      <van-tab title="介绍">
        <div>{{$route.params.remarks}}</div>
      </van-tab>
      <van-tab title="其他实时视频"></van-tab>
    </van-tabs> -->
    <div class="intro">
      <h3>介绍</h3>
      <p>{{$route.params.remarks}}</p>
    </div>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
import VideoPlyer from '../../components/VideoPlyer'
export default {
  name: "videoDetails",
  data () {
    return {
      introduce: '',
      active: 0
    };
  },
  created () {
  },
  methods: {

  },
  components: {
    "van-tab": Tab,
    "van-tabs": Tabs,
    "video-plyer": VideoPlyer
  }
};
</script>
<style scoped lang='scss'>
.van-tab__pane div {
  padding: 0.3rem 0.6rem;
  text-align: justify;
  text-indent: 0.6rem;
  font-size: 12px;
  color: #808080;
  line-height: 0.5rem;
}
.intro {
  text-align: left;
  padding: 20px;
  p {
    color: #808080;
    text-align: justify;
    text-indent: 0.6rem;
    line-height: 0.5rem;
  }
}
</style>