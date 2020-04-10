<template>
  <div class="top_bg">
    <div class="top">
      <h3>停车场数据</h3>
      <div class="row_Div packData">
        <van-row type="flex" justify="space-around">
          <van-col>
            <p class="data">10472</p>
            <p class="name">车辆统计</p>
          </van-col>
          <van-col>
            <v-circle></v-circle>
          </van-col>
          <van-col>
            <p class="data">10472</p>
            <p class="name">剩余车位数</p>
          </van-col>
        </van-row>
      </div>
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
import vcircle from "../../components/vcircle.vue";

// 引入基本模板
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
require("echarts/lib/chart/bar");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");
export default {
  name: "packData",
  data() {
    return {
      waveBg: require("../../assets/images/wave.png"),
      weavs: [],
      active: 1,
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
          text: "停车场使用率（%）",
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
          data: ["停车数量", "环比（上周）"]
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
            name: "停车数量",
            type: "bar",
            stack: "",
            smooth: true,
            barWidth: 10,
            data: [20, 15, 30, 18, 24, 26, 28]
          },
          {
            name: "环比（上周）",
            type: "line",
            stack: "",
            smooth: true,
            symbolSize: 0, //拐点图形大小
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
    "van-tabs": Tabs,
    "v-circle": vcircle
  }
};
</script>
<style lang="scss" scoped>
.top_bg {
  .top {
    height: 6.5rem;
    h3 {
      font-weight: 200;
    }
    .row_Div {
      width: 100%;
      margin-bottom: 1rem;
      .van-row--flex {
        width: 90%;
        margin: 20px auto;
        align-items: center;
        p.data {
          font-size: 0.48rem;
        }
        p.name {
          font-size: 0.24rem;
          padding: 5px 0;
          font-weight: 300;
          color: #808080;
        }
      }
    }
  }
  .bottom {
    // margin-top: -0.5rem;
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