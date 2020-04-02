<template>
  <div>
    <div class="main-user">
      <div class="user_info">
        <div class="user_left">
          <div class="user_img">
            <img :src="userImg" />
          </div>
          <router-link :to="{name:'vlogin'}">
            <div class="message">
              <h4>{{username}}</h4>
              <p>简介：{{introduce}}</p>
            </div>
          </router-link>
        </div>
        <div class="user_right">
          <div class="sign">每日签到</div>
        </div>
      </div>
      <div class="user_bg" :style="{'backgroundImage':'url('+waveBg+')'}"></div>
    </div>
    <div class="message-list">
      <van-cell-group>
        <van-cell
          v-for="(item,index) in msgList"
          :key="index"
          :value="item.value"
          :title="item.title"
          :icon="item.icon"
          is-link
          to
        ></van-cell>
      </van-cell-group>
      <van-button round type="default" class="loginOut">注销账户</van-button>
    </div>

    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "../components/tabbar.vue";
import { Cell, CellGroup, Button } from "vant";
export default {
  name: "me",
  data() {
    return {
      username: "李笑笑",
      introduce: "我，挺好的我，挺好的我，挺好的我，挺好的我，挺好的我，挺好的",
      userImg: require("../assets/images/me/user.jpg"),
      waveBg: require("../assets/images/wave.png"),
      msgList: [
        {
          icon: require("../assets/images/me/smrz@2x.png"),
          title: "实名认证",
          value: "李笑笑",
          toPath: ""
        },
        {
          icon: require("../assets/images/me/sjhm@2x.png"),
          title: "手机号码",
          value: "138 9000 0000",
          toPath: ""
        },
        {
          icon: require("../assets/images/me/scjl@2x.png"),
          title: "收藏记录",
          value: "",
          toPath: ""
        },
        {
          icon: require("../assets/images/me/wdzj@2x.png"),
          title: "我的足迹",
          value: "",
          toPath: ""
        },
        {
          icon: require("../assets/images/me/xgmm@2x.png"),
          title: "修改密码",
          value: "",
          toPath: ""
        },
        {
          icon: require("../assets/images/me/wdkf@2x.png"),
          title: "我的客服",
          value: "",
          toPath: ""
        }
      ]
    };
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