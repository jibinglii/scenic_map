<template>
  <div class="form_div">
    <img src="../../assets/images/login_top.jpg" class="login_top_img" alt />
    <!-- <van-button type="primary">默认按钮</van-button> -->
    <h3>{{title}}</h3>
    <van-tabs v-model="active">
      <van-tab title="登入">
        <v-login></v-login>
      </van-tab>
      <van-tab title="注册">
        <v-register></v-register>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Button, Tab, Tabs } from "vant";
import Login from "./Login";
import Register from "./Register";
export default {
  name: "vlogin",
  data() {
    return {
      active: 1,
      title: "景区一张图"
    };
  },
  components: {
    "van-tabs": Tabs,
    "van-tab": Tab,
    "van-button": Button,
    "v-login": Login,
    "v-register": Register
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
  font-size: 0.58rem;
  padding: 15px 0;
  font-weight: 100;
  color: $color;
}
</style>
