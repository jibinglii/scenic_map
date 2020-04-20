<template>
  <div class="electronicMap">
    <v-search></v-search>
    <v-map></v-map>
    <div class="dw_div">
      <div class="bj">
        <img src="../../assets/images/bj.png"
             alt
             srcset />
      </div>
      <div class="dw">
        <img src="../../assets/images/dw.png"
             alt
             srcset />
      </div>
    </div>
    <van-tabbar v-model="active"
                active-color="#00c8b0">
      <van-tabbar-item v-for="(item,index) in tabs"
                       :key="index"
                       @click="tabClick(index)">
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? item.active : item.normal" />
        <span>{{item.text}}</span>
      </van-tabbar-item>
    </van-tabbar>
    <van-popup v-model="show"
               position="bottom"
               :style="{ height: '53%' }">
      <div class="content">
        <div v-for="(item, index) in shopList"
             :key="index"
             class="list_item">
          <router-link :to="{name:'navigation'}">
            <div class="search_title">
              <div class="left">
                <h3>{{item.name}}</h3>
                <p>{{item.intro}}</p>
              </div>
              <div class="right">
                <van-button round
                            type="info"
                            size="small">{{item.btnText}}</van-button>
              </div>
            </div>
          </router-link>
        </div>
        <router-link :to="{}"
                     class="more">查看更多</router-link>
      </div>
    </van-popup>
    <van-popup v-model="show2"
               position="bottom"
               :style="{ height: '53%' }">
      <div class="content">
        <div v-for="(item, index) in scenicList"
             :key="index"
             class="list_item">
          <router-link :to="{name:'scenicDetails',query:{id:item.F_Id}}">
            <div class="search_title">
              <div class="left">
                <div>
                  <h3>{{index+1}}.{{item.F_Name}}</h3>
                  <p>{{item.intro}}</p>
                </div>
                <div>
                  <van-button v-for="(item,index) in tags"
                              :key="index">{{item.tag}}</van-button>
                </div>
              </div>
              <div class="right">
                <van-button round
                            type="info"
                            size="small">查看</van-button>
              </div>
            </div>
          </router-link>
        </div>
        <router-link :to="{}"
                     class="more">查看更多</router-link>
      </div>
    </van-popup>
  </div>
</template>

<script>
import VMap from "../../components/VMap";
import Search from "../../components/Search";
import { Tabbar, TabbarItem, Popup, Button } from "vant";
export default {
  name: "electronicMap",

  data () {
    return {
      active: "",
      show: false,
      show2: false,
      tabs: [
        {
          text: "推荐路线",
          normal: require("../../assets/images/lx_h.png"),
          active: require("../../assets/images/lx.png")
        },
        {
          text: "景区列表",
          normal: require("../../assets/images/jq_h.png"),
          active: require("../../assets/images/jq.png")
        },
        {
          text: "语言类型",
          normal: require("../../assets/images/yy_h.png"),
          active: require("../../assets/images/yy.png")
        }
      ],
      shopList: [
        {
          name: "1.5小时推荐路线",
          intro: "大明宫-革命公园-广仁寺-清真寺-鼓楼-钟楼- 阿房宫-大雁塔",
          btnText: "自动导览"
        },
        {
          name: "2小时推荐路线",
          intro: "大明宫-革命公园-广仁寺-清真寺-鼓楼-钟楼- 阿房宫-大雁塔",
          btnText: "自动导览"
        },
        {
          name: "2.5小时推荐路线",
          intro: "大明宫-革命公园-广仁寺-清真寺-鼓楼-钟楼- 阿房宫-大雁塔",
          btnText: "自动导览"
        }
      ],
      tags: [],
      scenicList: [
        {
          intro: '大雁塔',
          tag: '国家AAAAA级景区',
        },
        {
          intro: '大雁塔',
          tag: '国家AAAAA级景区'
        }
      ]
    };
  },
  methods: {
    tabClick (index) {
      console.log(index);
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      if (index === 0) {
        this.show = !this.show;
      }
      if (index === 1) {
        var fId = this.$store.state.fId
        this.$http.get('/gisscenicarea/getlist/' + fId, {
          params: {
            token: token,
            loginMark: loginmark
          }
        }).then(res => {
          console.log(res)
          this.scenicList = res.data.data
        })
        this.show2 = !this.show2;
      }
    }
  },
  components: {
    "v-map": VMap,
    "v-search": Search,
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem,
    "van-popup": Popup,
    "van-button": Button
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
      border-bottom: solid 1px #ccc;
      .left {
        text-align: left;
        width: 70%;

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