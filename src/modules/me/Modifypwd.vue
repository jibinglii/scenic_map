<template>
  <div class="form_div">
    <img src="../../assets/images/login_top.jpg"
         class="login_top_img"
         alt />
    <!-- <van-button type="primary">默认按钮</van-button> -->
    <h3>{{title}}</h3>
    <van-cell-group>
      <van-field v-model="tel"
                 center
                 clearable
                 :left-icon="phoneImg"
                 placeholder="请输入手机号"
                 type="tel">
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="oldPwd"
                 center
                 clearable
                 :left-icon="pwdImg"
                 placeholder="请输入旧密码"
                 type="password"></van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="newPwd"
                 center
                 clearable
                 :left-icon="pwdImg"
                 placeholder="请输入新密码"
                 type="password"></van-field>
    </van-cell-group>
    <van-button round
                type="primary"
                class=" _btn"
                @click="confirmBtn()">确认</van-button>
  </div>
</template>

<script>
import { Field, Cell, CellGroup, Button } from "vant";
export default {
  name: "modifypwd",
  data () {
    return {
      title: "修改密码",
      tel: '',
      oldPwd: '',
      newPwd: '',
      phoneImg: require("../../assets/images/phone.png"),
      pwdImg: require("../../assets/images/pwd.png")
    };
  },
  methods: {
    confirmBtn () {
      if (this.tel === '') {
        this.$toast('请输入手机号')
        return
      } else if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel)) {
        this.$toast('请输入正确的手机号')
        return
      }

      if (this.oldPwd === '') {
        this.$toast('请输入密码')
        return
      } else if (this.oldPwd.length < 6) {
        this.$toast('请输入6-12位密码')
        return
      }

      if (this.newPwd === '') {
        this.$toast('请输入密码')
        return
      } else if (this.newPwd.length < 6) {
        this.$toast('请输入6-12位密码')
        return
      }
      this.reallR()
    },
    async reallR () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.post('/userinfo/modifypw', {
        token: token,
        loginMark: loginmark,
        "oldpassword": this.oldPwd,
        "newpassword": this.newPwd
      }).then(res => {
        // console.log(res)
        if (res.status === 200) {
          this.$toast(res.data.info)
          localStorage.removeItem('setToken');
          localStorage.removeItem('setUser');
          this.$router.push({ name: 'vlogin' })
        } else {
          this.$toast(res.data.info)
        }
      })
    }
  },
  components: {
    "van-field": Field,
    "van-cell-group": CellGroup,
    "van-cell": Cell,
    "van-button": Button
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// @import '../assets/scss/resetVant.scss';
.login_top_img {
  width: 100%;
  height: 5.3rem;
}
h3 {
  font-size: 0.48rem;
  padding: 15px 0;
  font-weight: 100;
  color: $color;
}
.van-cell-group {
  width: 90%;
  margin: auto;
  .van-cell {
    border-bottom: solid 1px #f2f2f2;
    .van-field__left-icon {
      padding-right: 10px;
    }
  }
}
.form_div ._btn {
  width: 50%;
}
</style>
