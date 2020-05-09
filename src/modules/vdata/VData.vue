<template>
  <div class="vdata">
    <div class="weather_div">
      <v-weather></v-weather>
      <router-link to="/datadetails"
                   class="more">
        <p>查看更多</p>
        <van-icon name="arrow-down" />
      </router-link>
    </div>
    <div class="list_div">
      <div class="top">
        <span>停车场数据</span>
        <router-link :to="{name:'packData',params:{cheliang:packData.cheliang,shengyu:packData.shengyu}}">
          <img src="../../assets/images/more.png"
               alt />
        </router-link>
      </div>
      <div class="row_Div packData">
        <van-row type="flex"
                 justify="space-around">
          <van-col>
            <p class="data2">{{packData.cheliang}}</p>
            <p class="name">车辆统计</p>
          </van-col>
          <van-col>
            <v-circle></v-circle>
          </van-col>
          <van-col>
            <p class="data2">{{packData.shengyu}}</p>
            <p class="name">剩余车位数</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="list_div">
      <div class="top">
        <span>票务数据</span>
        <router-link :to="{name:'ticketData',params:{ShiShiShouPiao:ticketData.ShiShiShouPiao,ShiShiJianPiao:ticketData.ShiShiJianPiao,ZaiYuanCount:ticketData.ZaiYuanCount}}">
          <img src="../../assets/images/more.png"
               alt />
        </router-link>
      </div>
      <div class="row_Div">
        <van-row type="flex"
                 justify="space-around">
          <van-col>
            <p class="data2">{{ticketData.ShiShiShouPiao}}</p>
            <p class="name">实时售票数</p>
          </van-col>
          <van-col>
            <p class="data2">{{ticketData.ShiShiJianPiao}}</p>
            <p class="name">实时检票数</p>
          </van-col>
          <van-col>
            <p class="data2">{{ticketData.RuYuanCount}}</p>
            <p class="name">入园游客</p>
          </van-col>
          <van-col>
            <p class="data2">{{ticketData.ZaiYuanCount}}</p>
            <p class="name">在园游客</p>
          </van-col>
        </van-row>
      </div>
    </div>

    <div class="list_div">
      <div class="top">
        <span>环境监测</span>
        <router-link :to="{name:'monitors'}">
          <img src="../../assets/images/more.png"
               alt />
        </router-link>
      </div>
      <div class="row_Div">
        <van-row type="flex"
                 justify="space-around">
          <van-col>
            <p class="data3">{{monitor.qlty}}</p>
            <p class="name">空气质量</p>
          </van-col>
          <van-col>
            <p class="data3">{{monitor.main}}</p>
            <p class="name">主要污染物</p>
          </van-col>
          <van-col>
            <p class="data3">{{monitor.pm10}}</p>
            <p class="name">pm10</p>
          </van-col>
          <van-col>
            <p class="data3">{{monitor.so2}}</p>
            <p class="name">SO2浓度</p>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="oDiv"></div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../../components/tabbar.vue";
import vcircle from "../../components/vcircle.vue";
// import weather from "../../components/weather.vue";
import VWeather from "../../components/VWeather.vue";

import { Col, Row, Icon } from "vant";

export default {
  name: "vdata",
  data () {
    return {
      packData: {
        cheliang: 0,
        shengyu: 0,
        shiyonglv: 0
      },
      ticketData: {
        ShiShiShouPiao: '',
        ShiShiJianPiao: '',
        RuYuanCount: '',
        ZaiYuanCount: '',
      },
      monitor: {
        qlty: '',
        main: '',
        pm10: '',
        so2: ''
      },
    };
  },
  computed: {
  },
  created () {
    this.packDatas()
    this.ticketDatas()
    this.monitors()
  },
  methods: {
    async packDatas () {
      await this.$http.get('http://119.3.248.197:8086/api/mobile/TingCheChangShuJu').then(res => {
        console.log(res)
        this.packData.cheliang = res.data.data.CheLiang
        this.packData.shengyu = res.data.data.ShengYu
        this.packData.shiyonglv = res.data.data.ShiYongLv
        // console.log(this.packData.shiyonglv)
        this.$store.dispatch('setshiyonglv', res.data.data.ShiYongLv)
      })
    },
    async ticketDatas () {
      await this.$http.get('http://119.3.248.197:8086/api/mobile/PiaoWuShuJu').then(res => {
        console.log(res)
        this.ticketData.ShiShiShouPiao = res.data.data.ShiShiShouPiao
        this.ticketData.ShiShiJianPiao = res.data.data.ShiShiJianPiao
        this.ticketData.RuYuanCount = res.data.data.RuYuanCount
        this.ticketData.ZaiYuanCount = res.data.data.ZaiYuanCount
      })
    },
    async  monitors () {
      await this.$http.get('http://119.3.248.197:8086/api/mobile/HuanJiangJianCe').then(res => {
        console.log(res)
        this.monitor.qlty = res.data.data.qlty
        this.monitor.main = res.data.data.main
        this.monitor.pm10 = res.data.data.pm10
        this.monitor.so2 = res.data.data.so2
      })
    },
  },
  components: {
    tabbar: tabbar,
    "v-circle": vcircle,
    // "v-weather": weather,
    "v-weather": VWeather,
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
      background: #fff;
      color: #000;
      margin: -10px 0;
      p {
        color: #000;
      }
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
    .van-row {
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
