<template>
  <div class="_div">
    <div class="top"
         :style="{'backgroundImage':'url('+integralBg+')'}">
      <div class="sign"
           @click="signInClick()">
        <p>{{signText}}</p>
        <span></span>
        <span></span>
      </div>
      <div class="integral_bg"
           :style="{'backgroundImage':'url('+waveBg+')'}"></div>
    </div>
    <div class="bottom">
      <p>
        已连续
        <span>签到{{days}}天</span>，获得{{Integrals}}积分，
        <br />坚持打卡签到也是考验一个人的毅力的一种表现哦！
      </p>
      <div class="steps">
        <div class="step"
             v-for="(item,index) in steps"
             :key="index">
          <div class="left">
            <img v-if="item.isIntegral"
                 :src="item.img"
                 alt
                 class="integral_img" />
            <img v-else
                 :src="item.activeImg"
                 alt
                 class="integral_img" />

            <div :class="[item.day_click_able?'day_clicked':'day']">{{item.day}}</div>

            <span :class="[item.inte_click?'inte_clicked':'inte']">{{item.number}}</span>
          </div>

          <img v-if="item.isLine"
               :src="item.line"
               alt
               class="line" />
          <img v-else
               :src="item.activeLine"
               alt
               class="line" />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "signIn",
  data () {
    return {
      integralBg: require("../../assets/images/bg-integral.png"),
      waveBg: require("../../assets/images/wave2.png"),
      active: 0,
      days: 0,
      Integrals: 0,
      steps: [
        {
          img: require("../../assets/images/integral_h.png"),
          activeImg: require("../../assets/images/integral.png"),
          day: 1,
          number: "+10",
          line: require("../../assets/images/line_h.png"),
          activeLine: require("../../assets/images/line.png"),
          day_click_able: false,
          inte_click: false,
          isIntegral: true,
          isLine: true,
        },
        {
          img: require("../../assets/images/integral_h.png"),
          activeImg: require("../../assets/images/integral.png"),
          day: 2,
          number: "+10",
          line: require("../../assets/images/line_h.png"),
          activeLine: require("../../assets/images/line.png"),
          day_click_able: false,
          inte_click: false,
          isIntegral: true,
          isLine: true,
        },
        {
          img: require("../../assets/images/integral_h.png"),
          activeImg: require("../../assets/images/integral.png"),
          day: 3,
          number: "+10",
          line: require("../../assets/images/line_h.png"),
          activeLine: require("../../assets/images/line.png"),
          day_click_able: false,
          inte_click: false,
          isIntegral: true,
          isLine: true,
        },
        {
          img: require("../../assets/images/integral_h.png"),
          activeImg: require("../../assets/images/integral.png"),
          day: 4,
          number: "+10",
          line: require("../../assets/images/line2_h.png"),
          activeLine: require("../../assets/images/line2.png"),
          day_click_able: false,
          inte_click: false,
          isIntegral: true,
          isLine: true,
        },
        {
          img: require("../../assets/images/integral_h.png"),
          activeImg: require("../../assets/images/integral.png"),
          day: 5,
          number: "+10",
          line: require("../../assets/images/line_h.png"),
          activeLine: require("../../assets/images/line.png"),
          day_click_able: false,
          inte_click: false,
          isIntegral: true,
          isLine: true,
        },
        {
          img: require("../../assets/images/integral_h.png"),
          activeImg: require("../../assets/images/integral.png"),
          day: 6,
          number: "+10",
          line: require("../../assets/images/line_h.png"),
          activeLine: require("../../assets/images/line.png"),
          day_click_able: false,
          inte_click: false,
          isIntegral: true,
          isLine: true,
        },
        {
          img: require("../../assets/images/integral_h.png"),
          activeImg: require("../../assets/images/integral.png"),
          day: 7,
          number: "+10",
          line: require("../../assets/images/line2_h.png"),
          activeLine: require("../../assets/images/line2.png"),
          day_click_able: false,
          inte_click: false,
          isIntegral: true,
          isLine: true,
        },
        {
          img: require("../../assets/images/integral_h.png"),
          activeImg: require("../../assets/images/integral.png"),
          day: 8,
          number: "+10",
          line: require("../../assets/images/line_h.png"),
          activeLine: require("../../assets/images/line.png"),
          day_click_able: false,
          inte_click: false,
          isIntegral: true,
          isLine: true,
        },
        {
          img: require("../../assets/images/integral_h.png"),
          activeImg: require("../../assets/images/integral.png"),
          day: 9,
          number: "+10",
          line: require("../../assets/images/line_h.png"),
          activeLine: require("../../assets/images/line.png"),
          day_click_able: false,
          inte_click: false,
          isIntegral: true,
          isLine: true,
        },
        {
          img: require("../../assets/images/integral_h.png"),
          activeImg: require("../../assets/images/integral.png"),
          day: 10,
          number: "+10",
          line: require("../../assets/images/line_h.png"),
          activeLine: require("../../assets/images/line.png"),
          day_click_able: false,
          inte_click: false,
          isIntegral: true,
          isLine: true,
        },
        {
          img: "",
          day: "✔",
          number: "",
          line: ""
        }
      ],
      integral: 10,
      signText: '签到'
    };
  },
  created () {
    this.signinifobymonth()
  },
  methods: {
    async signinifobymonth () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.get('/userinfo/signinifobymonth', {
        params: {
          token: token,
          loginMark: loginmark,
        }
      }).then(res => {
        console.log(res)
        this.days = res.data.data.length
        for (var i = 0; i < res.data.data.length; i++) {
          this.Integrals += res.data.data[i].F_Integral
          this.steps[i].isIntegral = false
          this.steps[i].isLine = false
          this.steps[i].day_click_able = true
          this.steps[i].inte_click = true
        }
      })
    },
    signInClick () {
      this.signIn()
    },
    async signIn () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.post('/userinfo/signin', {
        token: token,
        loginMark: loginmark,
        source: this.signText,
        integral: 10
      }).then(res => {
        console.log(res)
        this.signinifobymonth()
        this.$toast.success(res.data.info)
      })
    }
  }
};
</script>

<style lang="scss" scoped>
$activeBgColor: #0088ff;
$bgColor: #b5b5b5;
$fontColor: #0088ff;
._div {
  .top {
    height: 5rem;
    position: relative;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .sign {
      position: relative;
      width: 1.6rem;
      height: 1.6rem;
      p {
        text-align: center;
        line-height: 1.6rem;
        background: #fff;
        border-radius: 50%;
        color: $fontColor;
        font-size: 0.36rem;
      }
      span {
        position: absolute;
        display: block;
        width: 1.6rem;
        height: 1.6rem;
        left: 0;
        bottom: 0;
        background: #fff;
        border-radius: 50%;
        animation: living 3s linear infinite;
        //   z-index: -1;
      }
      span:nth-child(2) {
        animation-delay: 1.5s; /*第二个span动画延迟1.5秒*/
      }
    }
    @keyframes living {
      0% {
        transform: scale(1);
        opacity: 0.5;
      }
      50% {
        transform: scale(1.5);
        opacity: 0; /*圆形放大的同时，透明度逐渐减小为0*/
      }
      100% {
        transform: scale(1);
        opacity: 0.5;
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
  .bottom {
    padding: 5% 2%;
    height: 9.3rem;
    p {
      color: #666;
      line-height: 0.5rem;
      text-align: center;
      span {
        color: $fontColor;
      }
    }
    .steps {
      display: flex;
      flex-wrap: wrap;
      padding: 20px 10px;
      // flex-direction: column;
      position: relative;
      margin: 4% 0;
      .step {
        font-size: 0.26rem;
        display: flex;
        align-items: center;
        width: 24.3%;
        position: relative;
        .left {
          img.integral_img {
            width: 0.46rem;
          }
          .day {
            background: $bgColor;
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            text-align: center;
            line-height: 0.4rem;
            color: #fff;
            margin: 5px 0;
            z-index: 9;
          }
          .day_clicked {
            background: $activeBgColor;
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            text-align: center;
            line-height: 0.4rem;
            color: #fff;
            margin: 5px 0;
            z-index: 9;
          }
          span.inte {
            color: #666;
          }
          span.inte_clicked {
            color: #0088ff;
          }
        }
        img.line {
          width: 86%;
          margin: 5% 0 0 -6%;
          z-index: -1;
        }
      }
      .step:nth-of-type(4) {
        img.line {
          width: 100%;
          position: absolute;
          top: 42%;
          right: -16px;
        }
      }
      .step:nth-of-type(5) {
        position: absolute;
        right: 0;
        top: 139%;
        right: 11px;
        img.line {
          position: absolute;
          left: -77%;
          top: 43%;
        }
      }
      .step:nth-of-type(6) {
        position: absolute;
        right: 28%;
        top: 139%;
        img.line {
          position: absolute;
          left: -77%;
          top: 43%;
        }
      }
      .step:nth-of-type(7) {
        position: absolute;
        right: 53%;
        top: 139%;
        img.line {
          width: 100%;
          position: absolute;
          left: -88%;
          top: 43%;
          transform: rotateY(-180deg);
        }
      }
      .step:nth-of-type(8),
      .step:nth-of-type(9),
      .step:nth-of-type(10),
      .step:nth-of-type(11) {
        position: absolute;
        top: 263%;
      }
      .step:nth-of-type(8) {
        left: 21%;
      }
      .step:nth-of-type(9) {
        left: 46%;
      }
      .step:nth-of-type(10) {
        left: 71%;
      }
      .step:nth-of-type(11) {
        width: 20px;
        left: 93%;
        top: 267%;
      }
      @media screen and (min-width: 376px) and (max-width: 414px) {
        .step:nth-of-type(4),
        .step:nth-of-type(7) {
          img.line {
            width: 96%;
          }
        }
      }
      @media screen and (max-width: 320px) {
        .step:nth-of-type(4),
        .step:nth-of-type(7) {
          img.line {
            width: 113%;
          }
        }
        .step:nth-of-type(7) {
          img.line {
            left: -92%;
          }
        }
        .step:nth-of-type(11) {
          top: 263%;
        }
      }
      @media screen and (min-width: 767px) {
        .step:nth-of-type(5),
        .step:nth-of-type(6),
        .step:nth-of-type(7) {
          top: 157%;
        }
        .step:nth-of-type(5),
        .step:nth-of-type(6),
        .step:nth-of-type(8),
        .step:nth-of-type(9),
        .step:nth-of-type(10) {
          width: 26.5%;
        }
        .step:nth-of-type(8),
        .step:nth-of-type(9),
        .step:nth-of-type(10),
        .step:nth-of-type(11) {
          top: 301%;
        }
        .step {
          img.line {
            width: 100%;
            margin: 5% 0 0 -10%;
            padding: 0 5%;
          }
        }
        .step:nth-of-type(7) {
          img.line {
            left: -82%;
          }
        }
      }
    }
  }
}
</style>