<template>
  <van-tabbar v-model="active" inactive-color="#777777" active-color="#000000">
    <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="(item.name)">
      <span>{{item.title}}</span>
      <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";

export default {
  name: "tabbar",
  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: "/",
          title: "首页",
          normal: require("../assets/images/home_h.png"),
          active: require("../assets/images/home.png")
        },
        {
          name: "vdata",
          title: "数据",
          normal: require("../assets/images/data_h.png"),
          active: require("../assets/images/data.png")
        },
        {
          name: "me",
          title: "我的",
          normal: require("../assets/images/me_h.png"),
          active: require("../assets/images/me.png")
        }
      ]
    };
  },
  methods: {},
  //通过路由跳转判断选中的样式
  created() {
    if (this.$route.name == "home") {
      this.active = 0;
    } else if (this.$route.name == "vdata") {
      this.active = 1;
    } else if (this.$route.name == "me") {
      this.active = 2;
    }
  },
  components: {
    "van-tabbar": Tabbar,
    "van-tabbar-item": TabbarItem
  }
};
</script>

<style scoped lang="scss">
.van-tabbar-item--active {
  span {
    color: #00c8b0;
  }
}
</style>
