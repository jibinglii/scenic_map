<template>
  <div class="top_bg">
    <div class="top">
      <h3>环境监测</h3>
      <van-row type="flex" justify="center">
        <van-col span="8" v-for="(data,index) in monitorData" :key="index">
          <p class="data">{{data.data}}</p>
          <p class="name">{{data.name}}</p>
        </van-col>
      </van-row>
      <div class="waveBg" :style="{'backgroundImage':'url('+waveBg+')'}"></div>
    </div>
    <div class="bottom">
      <div class="row_Div">
        <van-tabs v-model="active">
          <van-tab :title="item.title" v-for="(item,index) in tabs" :key="index"></van-tab>
          <div id="myChart" :style="{width: '100%', height: '300px'}"></div>
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
  data() {
    return {
      waveBg: require("../assets/images/wave.png"),
      weavs: [],
      active: 1,
      monitorData: [
        {
          data: "0.00m/s",
          name: "风速"
        },
        {
          data: "11μg/m3",
          name: " PM2.5"
        },
        {
          data: "18μg/m3",
          name: "PM10"
        },
        {
          data: "0.00m/s",
          name: "风速"
        },
        {
          data: "11μg/m3",
          name: " PM2.5"
        },
        {
          data: "18μg/m3",
          name: "PM10"
        },
        {
          data: "0.00m/s",
          name: "风速"
        },
        {
          data: "11μg/m3",
          name: " PM2.5"
        },
        {
          data: "18μg/m3",
          name: "PM10"
        }
      ],
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
  mounted() {
    this.$nextTick(() => {
      this.drawLine();
    });
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
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
          data: [
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
            "星期日"
          ]
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
            data: [20, 15, 30, 18, 24, 26, 23]
          },
          {
            name: "PM2.5",
            type: "line",
            stack: "",
            lineStyle: {
              width: 2,
              type: "dashed"
            },
            data: [18, 5, 25, 15, 16, 18, 23]
          }
        ]
      });
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