<template>
  <div>
    <van-cell-group>
      <van-field
        v-model="tel"
        center
        clearable
        :left-icon="phoneImg"
        placeholder="请输入手机号"
        type="tel"
      >
        <template #button>
          <van-button round size="small" type="primary" class="codeBtn" @click="sendCode()">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="code" center clearable :left-icon="codeImg" placeholder="验证码"></van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="pwd"
        center
        clearable
        :left-icon="pwdImg"
        placeholder="请输入6-12位密码"
        type="password"
      ></van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="confirmPwd"
        center
        clearable
        :left-icon="pwdImg"
        placeholder="确认密码"
        type="password"
      ></van-field>
    </van-cell-group>
    <van-button round type="primary" class="register_btn _btn">注册</van-button>
  </div>
</template>

<script>
import { Field, Cell, CellGroup, Button } from "vant";

export default {
  name: "register",
  data() {
    return {
      tel: "",
      code: "",
      pwd: "",
      confirmPwd: "",
      phoneImg: require("../../assets/images/phone.png"),
      codeImg: require("../../assets/images/code.png"),
      pwdImg: require("../../assets/images/pwd.png")
    };
  },
  methods: {
    // 发送验证码
    sendCode() {
      // if (!/^1\d(10)$/.test(this.tel)) {
      //   this.$toast.fail("请输入正确的手机号！");
      //   return;
      // }
    }
    // 验证手机号是否被注册

  },
  components: {
    "van-field": Field,
    "van-cell-group": CellGroup,
    "van-cell": Cell,
    "van-button": Button
  }
};
</script>

<style scoped>
.codeBtn {
  padding: 0px 18px;
}
</style>