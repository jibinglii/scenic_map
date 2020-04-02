<template>
  <div class="vdata">
    <div class="weather_div">
        <v-weather></v-weather>
        <router-link to="/datadetails" class="more">
          <p>查看更多</p>
          <van-icon name="arrow-down" />
        </router-link>
    </div>
    <div class="list_div">
      <div class="top">
        <span>停车场数据</span>
        <router-link to="/packdata">
          <img src="../assets/images/more.png" alt />
        </router-link>
      </div>
      <div class="row_Div packData">
        <van-row type="flex" justify="space-around">
          <van-col>
            <p class="data2">10472</p>
            <p class="name">车辆统计</p>
          </van-col>
          <van-col>
            <v-circle ></v-circle>
          </van-col>
          <van-col>
            <p class="data2">10472</p>
            <p class="name">剩余车位数</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="list_div">
      <div class="top">
        <span>票务数据</span>
        <router-link :to="{name:'ticketData'}">
          <img src="../assets/images/more.png" alt />
        </router-link>
      </div>
      <div class="row_Div">
        <van-row type="flex" justify="space-around">
          <van-col v-for="(data,index) in ticketData" :key="index">
            <p class="data2">{{data.data}}</p>
            <p class="name">{{data.name}}</p>
          </van-col>
        </van-row>
      </div>
    </div>

    <div class="list_div">
      <div class="top">
        <span>环境监测</span>
        <router-link :to="{name:'monitors'}">
          <img src="../assets/images/more.png" alt />
        </router-link>
      </div>
      <div class="row_Div">
        <van-row type="flex" justify="space-around">
          <van-col v-for="(item,index) in monitors" :key="index">
            <p class="data3">{{item.data}}</p>
            <p class="name">{{item.name}}</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="oDiv"></div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../components/tabbar.vue";
import vcircle from "../components/vcircle.vue";
import weather from "../components/weather.vue";
import { Col, Row, Icon } from "vant";

export default {
  name: "vData",
  data() {
    return {
      
      
      ticketData: [
        {
          data: 2222,
          name: "实时售票数"
        },
        {
          data: 2222,
          name: "实时售票数"
        },
        {
          data: 2222,
          name: "实时售票数"
        },
        {
          data: 2222,
          name: "实时售票数"
        }
      ],
      monitors: [
        {
          data: "良好",
          name: "空气质量"
        },
        {
          data: "良好",
          name: "空气质量"
        },
        {
          data: "良好",
          name: "空气质量"
        },
        {
          data: "良好",
          name: "空气质量"
        }
      ],
      currentRate: 0
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  },
  components: {
    tabbar: tabbar,
    'v-circle': vcircle,
    'v-weather': weather,
    "van-col": Col,
    "van-row": Row,
    "van-icon": Icon
  
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.vdata {
  background: #eee;
  .weather_div {
      .more {
        display: block;
        font-size: 0.24rem;
        padding: 0.2rem 0 0.1rem;
        background: #e3f6fe;
      }
    }
}
.list_div {
  margin-top: 0.15rem;
  padding: 15px 15px 0;
  background: #fff;
  .top {
    display: flex;
    justify-content: space-between;
    img {
      width: 0.4rem;
    }
  }
  .row_Div {
    padding: 20px 0;
    .van-row{
      align-items: center;
    }
    p.data2 {
      font-size: 0.5rem;
      color: #00c8b0;
    }
    p.data3 {
      font-size: 0.38rem;
      color: #00c8b0;
    }
    p.name {
      color: #666;
      font-size: 0.24rem;
    }
  }
}
</style>
