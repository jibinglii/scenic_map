<template>
  <div class="top_bg">
    <div class="top">
      <h3>环境监测</h3>
      <van-row type="flex"
               justify="center">
        <van-col span="8">
          <p class="data">{{monitorData.aqi}}</p>
          <p class="name">空气质量指数</p>
        </van-col>
        <van-col span="8">
          <p class="data">{{monitorData.main}}</p>
          <p class="name">主要污染物</p>
        </van-col>
        <van-col span="8">
          <p class="data">{{monitorData.qlty}}</p>
          <p class="name">空气质量</p>
        </van-col>
        <van-col span="8">
          <p class="data">{{monitorData.pm10}}</p>
          <p class="name">pm10</p>
        </van-col>
        <van-col span="8">
          <p class="data">{{monitorData.pm25}}</p>
          <p class="name">pm25</p>
        </van-col>
        <van-col span="8">
          <p class="data">{{monitorData.no2}}</p>
          <p class="name">二氧化氮</p>
        </van-col>
        <van-col span="8">
          <p class="data">{{monitorData.so2}}</p>
          <p class="name">二氧化硫</p>
        </van-col>
        <van-col span="8">
          <p class="data">{{monitorData.co}}</p>
          <p class="name">一氧化碳</p>
        </van-col>
        <van-col span="8">
          <p class="data">{{monitorData.o3}}</p>
          <p class="name">臭氧</p>
        </van-col>
      </van-row>
      <div class="waveBg"
           :style="{'backgroundImage':'url('+waveBg+')'}"></div>
    </div>
    <div class="bottom">
      <div class="row_Div">
        <van-tabs v-model="active"
                  @click="tabsClick(active)">
          <van-tab :title="item.title"
                   v-for="(item,index) in tabs"
                   :key="index"></van-tab>
          <div id="myChart"
               :style="{width: '100%', height: '300px'}"></div>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { Col, Row, Tab, Tabs } from "vant";
// 引入基本模板
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
export default {
  name: "monitors",
  data () {
    return {
      waveBg: require("../../assets/images/wave.png"),
      weavs: [],
      active: 1,
      monitorData: {
        aqi: '',
        main: '',
        qlty: '',
        pm10: '',
        pm25: '',
        no2: '',
        co: '',
        o3: '',
        so2: '',
      },
      tabs: [
        {
          title: "周"
        },
        {
          title: "月"
        },
        {
          title: "年"
        }
      ]
    };
  },
  created () {
    this.monitors()
  },
  mounted () {
    this.$nextTick(() => {
      this.drawLine();
    });
  },
  methods: {
    async  monitors () {
      await this.$http.get('http://119.3.248.197:8086/api/mobile/HuanJiangJianCe').then(res => {
        console.log(res)
        this.monitorData.aqi = res.data.data.aqi
        this.monitorData.main = res.data.data.main
        this.monitorData.qlty = res.data.data.qlty
        this.monitorData.pm10 = res.data.data.pm10
        this.monitorData.pm25 = res.data.data.pm25
        this.monitorData.no2 = res.data.data.no2
        this.monitorData.so2 = res.data.data.so2
        this.monitorData.co = res.data.data.co
        this.monitorData.o3 = res.data.data.o3
      })
    },
    tabsClick (type) {
      console.log(type)
      this.drawLine(type);
    },
    drawLine (type) {
      this.$toast.loading({
        message: '加载中...',
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      this.$http.get('http://119.3.248.197:8086/api/mobile/HuanJiangJianCeChat', {
        params: {
          type: type
        }
      }).then(res => {
        console.log(res)
        this.$toast.clear()
        // 绘制图表
        myChart.setOption({
          color: ["#58e7ff", "#febb05"],
          title: {
            text: "μg/m3",
            textStyle: {
              fontSize: 16,
              fontWeight: "500",
              color: "#7a7b7b"
            }
          },
          tooltip: {
            trigger: "axis"
          },
          legend: {
            y: "top",
            x: "right",
            itemGap: 10,
            textStyle: {
              color: "#9c9e9e" //---所有图例的字体颜色
            },
            data: ["PM10", "PM2.5"]
          },

          xAxis: {
            type: "category",
            boundaryGap: false,
            axisTick: {
              show: false,
              lineStyle: {
                color: "#808080"
              }
            },
            data: res.data.data.days
          },
          yAxis: {
            type: "value",
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          series: [
            {
              name: "PM10",
              type: "line",
              stack: "",
              data: res.data.data.pm10
            },
            {
              name: "PM2.5",
              type: "line",
              stack: "",
              lineStyle: {
                width: 2,
                type: "dashed"
              },
              data: res.data.data.pm25
            }
          ]
        });
      })

    }
  },
  components: {
    "van-col": Col,
    "van-row": Row,
    "van-tab": Tab,
    "van-tabs": Tabs
  }
};
</script>
<style lang="scss" scoped>
.top_bg {
  .top {
    height: 7.5rem;
    h3 {
      font-weight: 200;
    }
    p.data {
      font-size: 0.36rem;
    }
    p.name {
      font-size: 0.24rem;
      padding: 5px 0;
      font-weight: 300;
      color: #808080;
    }
    .van-col {
      margin-bottom: 10px;
    }
    .van-row--flex {
      width: 90%;
      margin: 6% 0 20%;
      flex-wrap: wrap;
    }

    p.address {
      font-size: 0.38rem;
    }
  }
  .bottom {
    .row_Div {
      font-size: 0.28rem;
      color: #724604;
      background: #e2f6fe;
      p.week {
        color: #808080;
      }
      img {
        width: 0.5rem;
        padding: 0.2rem;
      }
      #myChart {
        margin: 20px auto;
      }
    }
  }
}
</style>