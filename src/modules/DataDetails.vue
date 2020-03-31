<template>
  <div class="weather_div ">
    <v-weather></v-weather>
    <div>
      <van-tabs v-model="active">
        <van-tab :title="item.title" v-for="(item,index) in times" :key="index"></van-tab>
        <div id="myChart" :style="{width: '90%', height: '300px'}"></div>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import weather from "../components/weather.vue";
import { Col, Row, Tab, Tabs } from "vant";
// 引入基本模板
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/line");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/legend");

export default {
  name: "dataDetails",
  data() {
    return {
      active: 0,
      times: [
        {
          title: "24小时"
        },
        {
          title: "周"
        },
        {
          title: "15天"
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
        color:['#58e7ff','#58e7ff'],
        title: {
          text: "温度趋势(℃)",
          textStyle: {
            fontSize: 16,
            fontWeight: "200",
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
          data: ["最高温", "最低温"]
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
            name: "最高温",
            type: "line",
            stack: "最高温",
            smooth: true,
            symbol: null, //拐点图形类型
            symbolSize: 0, //拐点图形大小
            areaStyle: {
              color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
            },
            lineStyle: {
              color: "#58e7ff"
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#c2e8f7"
                },
                {
                  offset: 1,
                  color: "#ffe"
                }
              ])
            },
            data: [20, 15, 30, 18, 24, 26, 28]
          },
          {
            name: "最低温",
            type: "line",
            stack: "最低温",
            smooth: true,
            symbolSize: 0, //拐点图形大小
            lineStyle: {
              color: "#58e7ff",
              width: 1,
              type: "dashed"
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#e2f6fe"
                },
                {
                  offset: 1,
                  color: "#e2f6fe"
                }
              ])
            },
            data: [18, 5, 25, 15, 16, 18, 23]
          }
        ]
      });
    }
  },
  components: {
    "v-weather": weather,
    "van-col": Col,
    "van-row": Row,
    "van-tab": Tab,
    "van-tabs": Tabs
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.weather_div {
  background: #e2f6fe;
  position: fixed;
  width: 100%;
  height: 100%;
  #myChart {
    margin: 20px auto;
  }
}
</style>
