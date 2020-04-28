<template>
  <div class="main">
    <img src="../../assets/images/home_banner.jpg"
         alt
         class="banner" />
    <div class="row_div">
      <van-row type="flex"
               justify="space-around">
        <van-col v-for="(menu,index) in menus"
                 :key="index">
          <router-link :to="{name: menu.name}">
            {{menu.url}}
            <img :src="menu.imgUrl" />
            <p>{{menu.title}}</p>
          </router-link>
        </van-col>
      </van-row>
    </div>
    <div class="near">
      <div class="top">
        <span>景点周边</span>
        <router-link :to="{name:'scenicSpot'}">
          <img src="../../assets/images/more.png"
               alt />
        </router-link>
      </div>
      <div class="row_Div">
        <van-row type="flex"
                 justify="space-around">
          <van-col v-for="(mear,index) in nearLists"
                   :key="index">
            <router-link :to="{name:'scenicSpot'}">
              <img :src="mear.imgUrl" />
              <p>{{mear.name}}</p>
            </router-link>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="video">
      <div class="top">
        <span>实时视频展示</span>
        <!-- <router-link :to="{name:'videoList',params:{id:item_Id}}">
          <img src="../../assets/images/more.png"
               alt />
        </router-link> -->
      </div>
      <div class="list">
        <div v-for="(item,index) in list"
             :key="index">
          <router-link :to="{name:'videoList',params:{id:item.F_Id}}">
            <div class="item"
                 :style="{'backgroundImage':'url('+item.F_Image+')'}">
              <p>{{item.F_Name}}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="oDiv"></div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../../components/tabbar.vue";
import { Col, Row } from "vant";

export default {
  name: "home",
  data () {
    return {
      menus: [
        {
          imgUrl: require("../../assets/images/dz.png"),
          title: "电子导图",
          name: "electronicMap"
        },
        {
          imgUrl: require("../../assets/images/zn.png"),
          title: "智能报警 ",
          name: ""
        },
        {
          imgUrl: require("../../assets/images/xr.png"),
          title: "寻人寻物",
          name: "searchList"
        },
        {
          imgUrl: require("../../assets/images/jf.png"),
          title: "积分",
          name: "integral"
        },
        {
          imgUrl: require("../../assets/images/qd.png"),
          title: "签到打卡",
          name: "signIn"
        }
      ],
      nearLists: [
        {
          imgUrl: require("../../assets/images/cs.png"),
          name: "厕所 "
        },
        {
          imgUrl: require("../../assets/images/cz.png"),
          name: "车站"
        },
        {
          imgUrl: require("../../assets/images/jd.png"),
          name: "酒店"
        },
        {
          imgUrl: require("../../assets/images/fd.png"),
          name: "饭店"
        }
      ],
      list: [],
      item_Id: 0
    };
  },
  created () {
    this.gissetting2d()
    // this.scenicList()
    // this.videolist()
  },
  methods: {
    async gissetting2d () {
      this.$toast.loading({
        message: '加载中...',
      });
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.get('/gissetting/2d', {
        params: {
          token: token,
          loginMark: loginmark
        }

      }).then(res => {
        console.log(res)
        this.$toast.clear()
        let result = res.data.data
        this.fId = result.F_Id
        this.$store.dispatch('setfId', this.fId)
        this.scenicList()
      })
    },
    async scenicList () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.get('/gisscenicarea/getlist/' + this.fId, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        console.log(res)
        this.item_Id = res.data.data[0].F_Id
        console.log(this.item_Id)
        this.videolist()
      })
    },
    async videolist () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      var id = this.item_Id
      this.$store.dispatch('setItem_Id', this.item_Id)
      await this.$http.get("/gisscenicarea/getimageslist/" + id, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        console.log(res)
        this.list = res.data.data
      });
    },

  },

  components: {
    tabbar: tabbar,
    "van-col": Col,
    "van-row": Row
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  background: #eee;
}
.banner {
  width: 100%;
  height: 4.64rem;
}
.row_div {
  background: #fff;
  padding: 0.4rem 0;
  margin-top: -2px;
  img {
    width: 0.8rem;
    height: 0.8rem;
  }
  p {
    color: #333;
    font-size: 0.28rem;
    margin-top: 5px;
  }
}
.near {
  margin-top: 0.15rem;
  padding: 15px 10px 0;
  background: #fff;
  .top {
    display: flex;
    justify-content: space-between;
    img {
      width: 0.4rem;
    }
  }
  .row_Div {
    padding: 20px 0;
    img {
      width: 0.6rem;
      height: 0.6rem;
    }
    p {
      font-size: 0.24rem;
      color: #333;
      margin-top: 5px;
    }
  }
}
.video {
  margin-top: 0.15rem;
  padding: 5px 10px;
  background: #fff;
  .top {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
    img {
      width: 0.4rem;
    }
  }
}
.list {
  .item {
    width: 100%;
    height: 2.3rem;
    background-size: 100% 100%;
    margin: 15px auto;
    padding: 20px;
    p {
      text-align: left;
      color: #fff;
      font-size: 0.32rem;
    }
  }
}
</style>
