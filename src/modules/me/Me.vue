<template>
  <div>
    <div class="main-user">
      <div class="user_info">
        <div class="user_left">
          <div class="user_img">
            <img :src="defaultAvatar"
                 v-if="!$store.state.isLogin" />
            <img :src="userImg"
                 v-else>
          </div>
          <div class="message">
            <h4 v-if="!$store.state.isLogin">
              <router-link :to="{name:'vlogin'}">
                登录
              </router-link>
            </h4>
            <h4 v-else>{{username}}</h4>
            <p>简介：{{introduce}}</p>
          </div>
        </div>
        <div class="user_right">
          <div class="sign">每日签到</div>
        </div>
      </div>
      <div class="user_bg"
           :style="{'backgroundImage':'url('+waveBg+')'}"></div>
    </div>
    <div class="message-list">
      <van-cell-group>
        <van-cell v-for="(item,index) in msgList"
                  :key="index"
                  :value="item.value"
                  :title="item.title"
                  :icon="item.icon"
                  is-link
                  :to="item.name"></van-cell>
      </van-cell-group>
      <van-button round
                  type="default"
                  class="loginOut"
                  @click="loginOut">退出登录</van-button>
    </div>

    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../../components/tabbar.vue";
import { Cell, CellGroup, Button } from "vant";
export default {
  name: "me",
  data () {
    return {
      username: "",
      introduce: "我，挺好的我，挺好的我，挺好的我，挺好的我，挺好的我，挺好的",
      defaultAvatar: require("../../assets/images/me/user.jpg"),
      userImg: '',
      waveBg: require("../../assets/images/wave.png"),
      msgList: [
        {
          icon: require("../../assets/images/me/smrz@2x.png"),
          title: "实名认证",
          value: "李笑笑",
          toPath: "",
          name: ''
        },
        {
          icon: require("../../assets/images/me/sjhm@2x.png"),
          title: "手机号码",
          value: this.$store.state.user,
          toPath: "",
          name: ''
        },
        // {
        //   icon: require("../assets/images/me/scjl@2x.png"),
        //   title: "收藏记录",
        //   value: "",
        //   toPath: ""
        // },
        {
          icon: require("../../assets/images/me/wdzj@2x.png"),
          title: "我的足迹",
          value: "",
          toPath: "",
          name: ''
        },
        {
          icon: require("../../assets/images/me/xgmm@2x.png"),
          title: "修改密码",
          value: "",
          toPath: "",
          name: 'modifypwd'
        },
        {
          icon: require("../../assets/images/me/wdkf@2x.png"),
          title: "我的客服",
          value: "",
          toPath: "",
          name: ''
        }
      ]
    };
  },
  created () {
    this.userInfo();
    this.avatar();
  },
  methods: {
    async userInfo () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      console.log(token)
      console.log(loginmark)
      await this.$http.get('/userinfo/info', {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        console.log(res)
        this.username = res.data.data.loginMark
      })
    },
    async avatar () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.get('/userinfo/img', {
        params: {
          token: token,
          loginMark: loginmark,
        }
      }).then(res => {
        console.log(res)
        this.userImg = res.data
      })
    },

    async loginOut () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.post('/userinfo/outlogin', {
        token: token,
        loginMark: loginmark,
      }).then(res => {
        console.log(res)
        localStorage.removeItem('setUser');
        localStorage.removeItem('setToken');
        this.$store.dispatch('setUser', '')
        this.$store.dispatch('setToken', '')
        this.$store.state.isLogin = false
        this.$toast(res.data.info)
      })
    }
  },
  components: {
    tabbar: tabbar,
    "van-cell-group": CellGroup,
    "van-cell": Cell,
    "van-button": Button
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.main-user {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  background-color: $bgColor;
  height: 4rem;
  .user_info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 88%;
    padding: 0.6rem 0 0;
    .user_left {
      width: 75%;
      display: flex;
      align-items: center;
      .user_img img {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
      }
      .message {
        align-items: center;
        padding: 0.5rem 0.2rem;
        h4 {
          font-size: 0.36rem;
          font-weight: 100;
          text-align: left;
          margin-bottom: 0.1rem;
          color: #fff;
          padding-left: 3px;
          a {
            color: #fff;
          }
        }
        p {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          font-size: 0.24rem;
          color: #fff;
        }
      }
    }
    .user_right {
      .sign {
        border: solid 1px white;
        padding: 0.1rem;
      }
    }
  }
  .user_bg {
    width: 100%;
    height: 2rem;
    background-size: 100%;
  }
}
.message-list {
  .van-cell__title {
    text-align: left;
  }
}
.van-icon__image {
  vertical-align: inherit;
}
.loginOut {
  width: 60%;
  margin-top: 1rem;
  color: white;
  background-color: #c2c2c2;
  font-size: 16px;
}
</style>