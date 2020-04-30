<template>
  <div>
    <van-cell-group>
      <van-field v-model="tel"
                 center
                 clearable
                 :left-icon="userImg"
                 placeholder="请输入用户名"
                 type="tel"></van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="pwd"
                 center
                 clearable
                 :left-icon="pwdImg"
                 placeholder="请输入密码"
                 type="password"></van-field>
    </van-cell-group>
    <van-button round
                type="primary"
                class="login_btn _btn"
                @click="login()"
                :loading="loading"
                loading-text="登录...">登录</van-button>

    <div class="pwd_text">
      <!-- <router-link to>忘记密码?</router-link> -->
    </div>
    <div class="row_div">
      <van-divider :style="{ color: '#78D2F7', borderColor: '#78D2F7', padding: '0 16px' }">第三方登录</van-divider>
      <van-row gutter="20"
               :style="{marginLeft: 0,marginRight:0}">
        <!-- <van-col span="8" v-for="(col,index) in cols" :key="index">
          <router-link :to={}>
            <img :src="col.imgUrl" />
            </router-link>
        </van-col>-->
        <van-col span="8">
          <img src="../../assets/images/wx.png"
               alt
               @click="wechat" />
        </van-col>
        <van-col span="8">
          <img src="../../assets/images/qq.png"
               alt
               @click="qq" />
        </van-col>
        <van-col span="8">
          <img src="../../assets/images/wb.png"
               alt
               @click="wb" />
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { Field, Cell, CellGroup, Button, Divider, Col, Row } from "vant";
// import { mapActions } from 'vuex'
export default {

  name: "login",
  data () {
    return {
      tel: "",
      pwd: "",
      loading: false,
      userImg: require("../../assets/images/user.png"),
      pwdImg: require("../../assets/images/password.png")
      // cols:[
      //   {
      //     imgUrl:require('../assets/images/wx.png')
      //   },
      //   {
      //     imgUrl:require('../assets/images/qq.png')
      //   },
      //   {
      //     imgUrl:require('../assets/images/wb.png')
      //   },
      // ]
    };
  },
  methods: {
    // ...mapActions(['loginAction']),
    login () {
      if (this.tel === '') {
        this.$toast('请输入手机号')
        return
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel)) {
        this.$toast('请输入正确的手机号')
        return
      }

      if (this.pwd === '') {
        this.$toast('请输入密码')
        return
      } else if (this.pwd.length < 6) {
        this.$toast('请输入6-12位密码')
        return
      }

      this.reallR()
    },
    async reallR () {
      this.$toast.loading({
        message: '加载中...',
      });
      await this.$http.post('/userinfo/login', {
        "username": this.tel,
        "password": this.pwd
      }).then(res => {
        this.loading = false
        console.log(res)
        if (res.data.code === 200) {
          this.$toast.clear()
          this.$toast('登录成功')
          //将用户名和token存放在sessionStorage中
          sessionStorage.setItem('setToken', res.data.data.token)
          sessionStorage.setItem('setUser', res.data.data.loginMark)
          // localStorage.setItem('userId', res.data.data.userId)
          // 将用户名放入vuex
          this.$store.dispatch('setUser', res.data.data.loginMark)
          this.$store.dispatch('setToken', res.data.data.token)
          this.$store.dispatch('loginAction', true)
          this.$router.back()
        } else {
          this.$toast(res.data.info)

        }
      })
    },
    // 第三方登录
    wechat () {
      // location.href =
      //   window.API_ROOT + "/api/v2/oauth/wechat/" + window.STORE_ID;
    },
    qq () {
      // location.href = window.API_ROOT + "/api/v2/oauth/qq/" + window.STORE_ID;
    },
    wb () { }
  },
  components: {
    "van-field": Field,
    "van-cell-group": CellGroup,
    "van-cell": Cell,
    "van-button": Button,
    "van-divider": Divider,
    "van-col": Col,
    "van-row": Row
  }
};
</script>

<style scoped lang="scss">
.pwd_text {
  text-align: left;
  padding-left: 0.5rem;
  a {
    color: $color;
  }
}
.van-col {
  img {
    width: 0.8rem;
    height: 0.8rem;
  }
}
</style>