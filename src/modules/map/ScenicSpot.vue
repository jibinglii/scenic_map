<template>
  <div>
    <v-search></v-search>
    <v-map></v-map>
    <ul class="lists">
      <li v-for="(item,index) in lists" :key="index" :style="{'background':item.bgColor}">
        <router-link :to="{}" :style="{'color':item.color}">{{item.text}}</router-link>
      </li>
    </ul>
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
    <van-popup v-model="show" position="bottom" :style="{ height: '53%' }">
      <div class="content">
        <div v-for="(item, index) in shopList" :key="index" class="list_item">
          <router-link :to="{name:'navigation'}">
            <div class="search_title">
              <div class="left">
                <h3>{{(index+1)+"." +item.name}}</h3>
                <p>{{item.intro}}</p>
                <van-rate
                  v-model="item.rateNum"
                  size="14px"
                  gutter="2px"
                  readonly
                  void-color="#ffd21e"
                />
                <span>评分:{{item.score}}</span>
              </div>
              <div class="right">{{item.distance}}m</div>
            </div>
          </router-link>
        </div>
        <router-link :to="{}" class="more">查看更多</router-link>
      </div>
    </van-popup>
  </div>
</template>

<script>
import VMap from "../../components/VMap";
import Search from "../../components/Search";
import { Tabbar, TabbarItem, Popup, Rate } from "vant";
export default {
  name: "scenicSpot",
  data() {
    return {
      active: "",
      show: false,
      lists: [
        {
          text: "厕所",
          bgColor: "#79d52c",
          color: "#fff"
        },
        {
          text: "车站",
          bgColor: "#fff",
          color: "#787878"
        },
        {
          text: "酒店",
          bgColor: "#00a0e9",
          color: "#fff"
        },
        {
          text: "饭店",
          bgColor: "#fff",
          color: "#787878"
        }
      ],
      tabs: [
        {
          text: "厕所",
          normal: require("../../assets/images/cs_h.png"),
          active: require("../../assets/images/cs.png")
        },
        {
          text: "车站",
          normal: require("../../assets/images/cz_h.png"),
          active: require("../../assets/images/cz.png")
        },
        {
          text: "酒店",
          normal: require("../../assets/images/jd_h.png"),
          active: require("../../assets/images/jd.png")
        },
        {
          text: "饭店",
          normal: require("../../assets/images/fd_h.png"),
          active: require("../../assets/images/fd.png")
        }
      ],
      shopList: [
        {
          name: "西安国际大酒店",
          intro: "高档型·西安市新城区东新街319号",
          rateNum: 4,
          score: 9.4,
          distance: 1999
        },
        {
          name: "西安国际大酒店",
          intro: "高档型·西安市新城区东新街319号",
          rateNum: 4,
          score: 9.4,
          distance: 1999
        },
        {
          name: "西安国际大酒店",
          intro: "高档型·西安市新城区东新街319号",
          rateNum: 4,
          score: 9.4,
          distance: 1999
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
    "v-search": Search,
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem,
    "van-popup": Popup,
    "van-rate": Rate
  }
};
</script>
<style lang="scss" scoped>
.lists {
  position: absolute;
  z-index: 999;
  right: 3%;
  top: 17%;
  li {
    border-radius: 50%;
    box-shadow: 3px 5px 4px rgba(0, 0, 0, 0.2);
    a {
      display: block;
      width: 0.8rem;
      height: 0.8rem;
      text-align: center;
      line-height: 0.8rem;
      margin-bottom: 10px;
      font-size: 0.24rem;
    }
  }
}
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
      border-bottom: solid 1px #ccc;
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
  .more {
    color: #808080;
    display: block;
    padding-top: 10px;
  }
}
</style>