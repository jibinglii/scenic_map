<template>
  <div class="_div videoDetails">
    <video-plyer></video-plyer>
    <van-tabs v-model="active">
      <van-tab title="介绍">
        <div>{{introduce}}</div>
      </van-tab>
      <van-tab title="其他实时视频"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Tab, Tabs } from "vant";
import VideoPlyer from '../../components/VideoPlyer'
export default {
  name: "videoDetails",
  data() {
    return {
      introduce:
        "嘉兴富悦大酒店按照豪华五星级酒店标准建造，位于嘉兴市中环西路28号。酒店毗邻沪杭高速、乍嘉苏高速公路，交通便利，地理位置优越。紧邻南湖风景区、西塘、乌镇等风景名胜区。嘉兴富悦大酒店总面积7.4万平方米，拥有各类豪华客房450间套，宽敞豪华的大开间、通透舒适的落地大玻璃窗、风格时尚的卫浴设计、细心周到的贴身管家、无微不至的用心服务。豪华温馨的客房设施，将带给您品位非凡的享受。嘉兴富悦大酒店拥有极其完善和现代的会议场所及设施，配有两个层高7.5米、面积1500平方米的无柱多功能厅、宴会厅，10个不同规格的会议室，是目前浙江省同类酒店中规模最大、设施最完善的会议中心之一。气势恢宏的宴会设施、细致入微的会议团队、“一站式”会议服务专家，满足您高档会议的一切所需。",
      active: 0
    };
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
</style>