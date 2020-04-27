<template>
  <div class="top_bg">
    <div class="top">
      <h3>票务数据</h3>
      <van-row type="flex"
               justify="space-around">
        <van-col>
          <p class="data">{{$route.params.ShiShiShouPiao}}</p>
          <p class="name">实时售票数</p>
        </van-col>
        <van-col>
          <p class="data">{{$route.params.ZaiYuanCount}}</p>
          <p class="name">在园游客</p>
        </van-col>
        <van-col>
          <p class="data">{{$route.params.ShiShiJianPiao}}</p>
          <p class="name">实时检票数</p>
        </van-col>
      </van-row>
      <div class="waveBg"
           :style="{'backgroundImage':'url('+waveBg+')'}"></div>
    </div>
    <div class="bottom">
      <div class="row_Div">
        <van-tabs v-model="active"
                  @click="tabClick(active)">
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
  name: "ticketData",
  data () {
    return {
      waveBg: require("../../assets/images/wave.png"),
      weavs: [],
      active: 0,
      tabs: [
        {
          title: "景区票务"
        },
        {
          title: "景区客流量"
        }
      ]
    };
  },
  mounted () {
    this.$nextTick(() => {
      this.drawLine();
    });
  },

  methods: {
    tabClick (active) {
      console.log(active)
      if (active === 0) {
        this.drawLine()
      } else if (active === 1) {
        this.drawLine2()
      }
    },
    drawLine () {
      this.$toast.loading({
        message: '加载中...',
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      this.$http.get('http://119.3.248.197:8086/api/mobile/JingQuPiaoWu').then(res => {
        console.log(res)
        this.$toast.clear()
        // 绘制图表
        myChart.setOption({
          color: ["#58e7ff", "#febb05"],
          title: {
            text: "票数（万张）",
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
            data: ["售票票数", "环比（去年）"]
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
            data: res.data.data.month
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
              name: "售票票数",
              type: "bar",
              stack: "",
              smooth: true,
              barWidth: 10,
              data: res.data.data.shuliang
            },
            {
              name: "环比（去年）",
              type: "line",
              stack: "",
              smooth: true,
              symbolSize: 0, //拐点图形大小
              lineStyle: {
                width: 2,
                type: "dashed"
              },
              data: res.data.data.huanbi
            }
          ]
        });
      })

    },
    drawLine2 () {
      this.$toast.loading({
        message: '加载中...',
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById("myChart"));
      this.$http.get('http://119.3.248.197:8086/api/mobile/JingQuKeLiuLiang').then(res => {
        console.log(res)
        this.$toast.clear()
        // 绘制图表
        myChart.setOption({
          color: ["#58e7ff", "#febb05"],
          title: {
            text: "票数（万张）",
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
            data: ["售票票数", "环比（去年）"]
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
            data: res.data.data.month
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
              name: "售票票数",
              type: "bar",
              stack: "",
              smooth: true,
              barWidth: 10,
              data: res.data.data.shuliang
            },
            {
              name: "环比（去年）",
              type: "line",
              stack: "",
              smooth: true,
              symbolSize: 0, //拐点图形大小
              lineStyle: {
                width: 2,
                type: "dashed"
              },
              data: res.data.data.huanbi
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
    // background: #77d2f7;
    // height: 6rem;
    h3 {
      font-weight: 200;
      margin-top: -50px;
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
    .van-row--flex {
      width: 90%;
      margin: 5% 0;
      .van-col:nth-of-type(2) {
        margin-top: -20ox;
        p.data {
          font-size: 0.9rem;
        }
        p.name {
          font-size: 0.3rem;
        }
      }
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
        padding-left: 10px;
      }
    }
  }
}
</style>