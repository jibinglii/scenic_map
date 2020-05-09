<template>
  <div class="_div">
    <div class="main-bg"
         :style="{'background-image':'url('+integralBg+')'}">
      <div class="intrgral-info">
        <div>
          <h3>{{Integrals}}</h3>
          <p>当前可用积分</p>
        </div>
      </div>
      <div class="integral_bg"
           :style="{'backgroundImage':'url('+waveBg+')'}"></div>
    </div>
    <van-tabs v-model="active"
              @click="tabsClick(active)">
      <van-tab :title="item.title"
               v-for="(item,index) in integralLIst"
               :key="index">
      </van-tab>
      <van-cell v-for="(item, index) in filterMsg"
                :key="index"
                :value="item.F_Integral">
        <template slot="title">
          <div>
            <h4>{{item.F_Source}}</h4>
            <p>{{item.F_Date}}</p>
          </div>
        </template>
      </van-cell>
    </van-tabs>
  </div>
</template>

<script>
import { Button, Tab, Tabs, Cell } from "vant";
export default {
  name: "integral",
  data () {
    return {
      integralBg: require("../../assets/images/bg-integral.png"),
      waveBg: require("../../assets/images/wave2.png"),
      Integrals: 0, //当前可用积分
      active: 0,
      integralLIst: [
        {
          title: '全部'
        },
        {
          title: '获取'
        },
        {
          title: '使用'
        },
      ],
      msg: [],
      filterMsg: []
    };
  },
  created () {
    this.signinifobymonth()
  },
  methods: {
    tabsClick (index) {
      if (index === 1) {
        return this.filterMsg = this.msg.filter(function (e) {
          return e.F_Source === '签到';
        })
      }
      if (index === 2) {
        return this.filterMsg = this.msg.filter(function (e) {
          return e.F_Purpose === '使用';
        })
      }
      if (index === 0) {
        return this.filterMsg = this.msg
      }
    },
    async signinifobymonth () {
      this.$toast.loading({
        message: '加载中...',
      });
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.get('/userinfo/signinifobymonth', {
        params: {
          token: token,
          loginMark: loginmark,
        }
      }).then(res => {
        console.log(res)
        this.$toast.clear()
        for (var i = 0; i < res.data.data.length; i++) {
          this.Integrals += res.data.data[i].F_Integral
        }
        this.msg = res.data.data;
        this.filterMsg = this.msg
      })
    },
  },
  components: {
    "van-tabs": Tabs,
    "van-tab": Tab,
    "van-button": Button,
    "van-cell": Cell
  }
};
</script>

<style lang="scss" scoped>
$bgColor: #77d2f7;
$fontColor: #808080;
.main-bg {
  height: 5rem;
  position: relative;
  background-size: 100% 100%;
  .intrgral-info {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    h3 {
      color: white;
      font-size: 0.8rem;
      font-weight: 200;
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
.van-cell {
  align-items: center;
  padding: 13px 30px;
  .van-cell__title {
    text-align: left;
  }
}
</style>