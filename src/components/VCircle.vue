<template>
  <div class="content-item">
    <div id="chart" style="width:120px;height:120px"></div>
  </div>
</template>
<script>
//1.引入上面 创建的 option.js
import { getAnnulusOption } from "../utils/options.js";
//2.引入 echarts 图表插件
import echarts from "Echarts";
export default {
  name: "vcircle",
  mounted() {
    this.$nextTick(() => {
      this.renderChart("chart", 450, 1000);
    });
  },
  methods: {
    /*
     * @param {String} id  获取HTML div元素的 ID,
     * @param {Number} dividend  数值1 ，（成功个数）
     * @param {Number} divisor   数值2，（总数）
     */
    //id,
    //dividend
    //divisor
    renderChart(id, dividend, divisor) {
      echarts.dispose(document.getElementById(id));
      const data = [dividend, divisor - dividend];
      const colors = ["#00d4c1", "#dcf8fc"];
      const percentage = divisor === 0 ? 0 : (dividend / divisor) * 100;
      const text = this.formatValue(percentage, 1) + "%";
      const subText = "停车场使用率";
      const textFontSize = 24;
      const subTextFontSize = 0;
      const marginTop = 60;
      const option = getAnnulusOption(
        data,
        colors,
        text,
        subText,
        textFontSize,
        subTextFontSize,
        marginTop
      );
      const charts = echarts.init(document.getElementById(id));
      charts.setOption(option);
    },
    /*
     * @param {number or string} value 数值
     * @param {Number} digits 保留小数位数
     * @param {bool} returnStr 返回值是字符串（如果保留位数那么返回是一个string）
     */
    formatValue(value, digits, returnStr = false) {
      if (digits < 0) {
        console.log("小数点后位数不能为负数");
        value = 0;
      }
      if (!value) {
        value = 0;
      }
      if (returnStr) {
        return parseFloat(value).toFixed(digits);
        console.log(returnStr)
      }
      return parseFloat(parseFloat(value).toFixed(digits));
    }
  }
};
</script>

<style lang="scss" scoped></style>