<template>
  <div class="weather">
    <div class="top">
      <p class="temperature">
        38°C
        <span>晴</span>
      </p>
      <p class="date">星期四 | 2月20日 | 12:45</p>
      <p class="address">陕西，西安</p>
    </div>
    <div class="bottom" :style="{'backgroundImage':'url('+waveBg+')'}">
      <div class="row_Div">
        <van-row type="flex" justify="space-around">
          <van-col v-for="(weav,index) in weavs" :key="index">
            <p class="week">{{weav.week}}</p>
            <img :src="weav.imgUrl" />
            <p>{{weav.temperature}}</p>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>
<script>
import { Col, Row } from "vant";
export default {
  name: "weather",
  data() {
    return {
      waveBg: require("../assets/images/wave.png"),
      weavs: [
        {
          week: "星期日",
          imgUrl: require("../assets/images/weather.png"),
          temperature: "38°C"
        },
        {
          week: "星期日",
          imgUrl: require("../assets/images/weather.png"),
          temperature: "38°C"
        },
        {
          week: "星期日",
          imgUrl: require("../assets/images/weather.png"),
          temperature: "38°C"
        },
        {
          week: "星期日",
          imgUrl: require("../assets/images/weather.png"),
          temperature: "38°C"
        },
        {
          week: "星期日",
          imgUrl: require("../assets/images/weather.png"),
          temperature: "38°C"
        }
      ]
    };
  },
  components: {
    "van-col": Col,
    "van-row": Row
  }
};
</script>
<style lang="scss" scoped>
.weather {
  background: #77d2f7;
  color: #fff;
  .top {
    height: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p.temperature {
      font-size: 0.8rem;
      span {
        font-size: 0.28rem;
      }
    }
    p.date {
      font-size: 0.24rem;
      padding: 5px 0;
      font-weight: 300;
    }
    p.address {
      font-size: 0.38rem;
    }
  }
  .bottom {
    width: 100%;
    height: 3.3rem;
    margin-top: -1rem;
    background-size: 100% 100%;
    padding-top: 0.8rem;
    color: #333;
    .row_Div {
      font-size: 0.28rem;
      color: #724604;
      padding: 30px 10px 0;
      p.week {
        color: #808080;
      }
      img {
        width: 0.8rem;
        padding: 0.2rem;
      }
    }
  }
}
</style>