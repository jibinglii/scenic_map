<template>
  <div class="_div">
    <div class="main-bg" :style="{'background-image':'url('+integralBg+')'}">
      <div class="intrgral-info">
        <div>
          <h3>{{integralNumber}}</h3>
          <p>当前可用积分</p>
        </div>
      </div>
      <div class="integral_bg" :style="{'backgroundImage':'url('+waveBg+')'}"></div>
    </div>
    <van-tabs v-model="active">
      <van-tab title="全部">
        <v-integral :msg="allPoints"></v-integral>
      </van-tab>
      <van-tab title="获取">
        <v-integral :msg="getPoints"></v-integral>
      </van-tab>
      <van-tab title="使用">
        <v-integral :msg="usePoints"></v-integral>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Button, Tab, Tabs } from "vant";
import Integral from "../components/Points";
export default {
  name: "integral",
  data() {
    return {
      integralBg: require("../assets/images/bg-integral.png"),
      waveBg: require("../assets/images/wave2.png"),
      integralNumber: 5662552, //当前可用积分
      active: 0,
      allPoints: [
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        },
        {
          name: "使用",
          date: "2020-02-20 12:12:12",
          point: "-10"
        },
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        },
        {
          name: "使用",
          date: "2020-02-20 12:12:12",
          point: "-10"
        },
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        }
      ], //所有数据
      getPoints: [
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        },
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        },
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        },
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        },
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        },
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        },
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        },
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        },
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        },
        {
          name: "签到",
          date: "2020-02-20 12:12:12",
          point: "+10"
        }
      ], //获取
      usePoints: [
        {
          name: "使用",
          date: "2020-02-20 12:12:12",
          point: "-10"
        },
        {
          name: "使用",
          date: "2020-02-20 12:12:12",
          point: "-10"
        },
        {
          name: "使用",
          date: "2020-02-20 12:12:12",
          point: "-10"
        },
        {
          name: "使用",
          date: "2020-02-20 12:12:12",
          point: "-10"
        },
        {
          name: "使用",
          date: "2020-02-20 12:12:12",
          point: "-10"
        }
      ] //使用
    };
  },
  components: {
    "van-tabs": Tabs,
    "van-tab": Tab,
    "van-button": Button,
    "v-integral": Integral
  }
};
</script>

<style lang="scss" scoped>
$bgColor: #77d2f7;
$fontColor: #808080;
.main-bg {
  height: 5rem;
  position: relative;
  background-size: 100% 100%;
  .intrgral-info {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    h3 {
      font-size: 0.8rem;
      font-weight: 200;
      margin-bottom: 13px;
    }
  }
  .integral_bg {
    width: 100%;
    height: 1.5rem;
    position: absolute;
    bottom: 0;
    background-size: 100%;
  }
}
</style>