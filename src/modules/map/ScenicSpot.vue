<template>
  <div>
    <v-search></v-search>
    <v-map-sur></v-map-sur>
    <ul class="lists">
      <li v-for="(item,index) in lists"
          :key="index"
          @click="listRightBtn(index)">
        <router-link :to="{name:''}">{{item.F_Name}}</router-link>
      </li>
    </ul>
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
                       @click="tabClick(item.F_Id)">
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? item.F_HighlightImage : item.F_Image" />
        <span>{{item.F_Name}}</span>
      </van-tabbar-item>
    </van-tabbar>
    <van-popup v-model="show"
               position="bottom"
               :style="{ height: '53%' }">
      <div class="content">
        <div v-for="(item, index) in searchList"
             :key="index"
             class="list_item">
          <router-link :to="{name:''}">
            <div class="search_title">
              <div class="left">
                <h3>{{(index+1)+"." +item.F_Name}}</h3>
                <p>{{item.F_Remarks}}-{{item.F_Address}}</p>
                <van-rate v-model="item.F_Score"
                          size="14px"
                          gutter="2px"
                          readonly
                          void-color="#ffd21e" />
                <span>评分:{{item.F_Score}}</span>
              </div>
              <div class="right">0m</div>
            </div>
          </router-link>
        </div>
        <!-- <router-link :to="{}"
                     class="more">查看更多</router-link> -->
      </div>
    </van-popup>
  </div>
</template>

<script>
import VMapSur from "../../components/VMapSur";
import Search from "../../components/Search";
import { Tabbar, TabbarItem, Popup, Rate } from "vant";
export default {
  name: "scenicSpot",
  data () {
    return {
      active: "",
      show: false,
      lists: [],
      tabs: [],
      searchList: [],
      Fid: 0
    };
  },
  created () {
    this.tabList()
    this.getListSearch()
  },
  methods: {
    async tabList () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.get("/scenicareaaround/gettypelist", {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        console.log(res)
        this.tabs = res.data.data
        this.lists = res.data.data
      });
    },
    listRightBtn (index) {
      if (index == 0) {
        var arr = []
        var markercsList = this.$store.state.markercsList
        var markerzxList = this.$store.state.markerzxList
        var markerwifiList = this.$store.state.markerwifiList
        var markerfdList = this.$store.state.markerfdList
        arr = markercsList.concat(markerzxList).concat(markerwifiList).concat(markerfdList)
        console.log(arr)
      }
    },
    tabClick (F_Id) {
      console.log(F_Id)
      this.show = true;
      this.getListSearch(F_Id)
    },
    async getListSearch (F_Id) {
      this.$toast.loading({
        message: '加载中...',
      });
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.get("/scenicareaaround/getlist/" + F_Id, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        this.$toast.clear()
        this.searchList = res.data.data
      });
    }
  },
  components: {
    "v-map-sur": VMapSur,
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
      line-height: 0.85rem;
      margin-bottom: 10px;
      font-size: 0.24rem;
    }
  }
  li:nth-of-type(1) {
    background: #79d52c;
    a {
      color: #fff;
    }
  }
  li:nth-of-type(2) {
    background: #fff;
    a {
      color: #787878;
    }
  }
  li:nth-of-type(3) {
    background: #00a0e9;
    a {
      color: #fff;
    }
  }
  li:nth-of-type(4) {
    background: #fff;
    a {
      color: #787878;
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
          line-height: 30px;
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