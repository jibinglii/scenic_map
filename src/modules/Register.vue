<template>
  <div>
    <van-cell-group>
      <van-field v-model="tel" center clearable left-icon="phone-o" placeholder="请输入手机号" type="tel">
        <template #button>
          <van-button round size="small" type="primary" class="codeBtn">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="code" center clearable left-icon="more-o" placeholder="验证码"></van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="pwd" center clearable left-icon="eye-o"  placeholder="请输入6-12位密码" type="password"></van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="confirmPwd" center clearable left-icon="eye-o"  placeholder="确认密码" type="password"></van-field>
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
      code:"",
      pwd:"",
      confirmPwd:""
    };
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