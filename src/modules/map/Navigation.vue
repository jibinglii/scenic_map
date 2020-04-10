<template>
  <div class="navigator">
    <v-map></v-map>
    <div class="dw_div">
      <div class="bj">
        <img src="../../assets/images/bj.png" alt srcset />
      </div>
      <div class="dw">
        <img src="../../assets/images/dw.png" alt srcset />
      </div>
    </div>
    <van-tabbar v-model="active" active-color="#00c8b0">
      <van-tabbar-item v-for="(item,index) in tabs" :key="index" @click="tabClick(index)">
        <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
        <span>{{item.text}}</span>
      </van-tabbar-item>
    </van-tabbar>
    <van-popup v-model="show" position="bottom" :style="{ height: '32%' }">
      <div class="content">
        <div v-for="(item, index) in shopList" :key="index" class="list_item">
          <router-link :to="{}">
            <div class="search_title">
              <div class="left">
                <h3>{{item.name}}</h3>
                <p>{{item.address}}</p>
              </div>
              <div class="right">
                <van-button round type="info" size="small">导航开始</van-button>
              </div>
            </div>
          </router-link>
        </div>
        <van-tabbar v-model="active2" active-color="#00c8b0">
          <van-tabbar-item v-for="(item,index) in lines" :key="index">
            <span class="plan">{{item.plan}}</span>
            <div class="time">
              <span>{{item.time}}</span>分钟
            </div>
            <p class="km">{{item.km}}公里</p>
          </van-tabbar-item>
        </van-tabbar>
      </div>
    </van-popup>
  </div>
</template>

<script>
import VMap from "../../components/VMap";
import { Tabbar, TabbarItem, Button, Popup } from "vant";
export default {
  name: "navigation",
  data() {
    return {
      active: 0,
      active2: 0,
      show: true,
      tabs: [
        {
          text: "驾车",
          normal: require("../../assets/images/jc_h.png"),
          active: require("../../assets/images/jc.png")
        },
        {
          text: "公交",
          normal: require("../../assets/images/gj_h.png"),
          active: require("../../assets/images/gj.png")
        },
        {
          text: "步行",
          normal: require("../../assets/images/bx_h.png"),
          active: require("../../assets/images/bx.png")
        },
        {
          text: "骑行",
          normal: require("../../assets/images/qx_h.png"),
          active: require("../../assets/images/qx.png")
        }
      ],
      shopList: [
        {
          name: "西安国际大酒店",
          address: "西安市新城区东新街319号"
        }
      ],
      lines: [
        {
          plan: "路程短",
          time: 36,
          km: 1.6
        },
        {
          plan: "方案一",
          time: 36,
          km: 1.6
        },
        {
          plan: "方案二",
          time: 36,
          km: 1.6
        }
      ]
    };
  },
  methods: {
    tabClick(index) {
      console.log(index);
      if (index) {
        this.show = true;
      }
    }
  },
  components: {
    "v-map": VMap,
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem,
    "van-button": Button,
    "van-popup": Popup
  }
};
</script>
<style lang="scss" scoped>
.dw_div {
  position: absolute;
  left: 3%;
  bottom: 15%;
  z-index: 999;
  img {
    width: 1rem;
    height: 1rem;
    margin-bottom: 5px;
  }
}
.van-tabbar--fixed {
  z-index: 9999;
}
.content {
  padding: 0 0 50px 0;
  .list_item {
    .search_title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.15rem;
      color: #8b8b8b;
      width: 90%;
      margin: 5px auto;
      border-bottom: solid 1px #f2f2f2;
      .left {
        text-align: left;
        p {
          font-size: 0.24rem;
        }
        span {
          font-size: 0.26rem;
        }
      }
      .right {
        color: #00d4c1;
      }
    }
  }
  .van-tabbar-item__text {
    .plan {
      font-size: 0.26rem;
    }
    .time {
      span {
        font-size: 0.38rem;
        color: #333;
      }
    }
    .km {
    }
  }
}
</style>