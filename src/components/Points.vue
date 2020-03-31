<template>
  <div>
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(item, index) in msg" :key="index" :value="item.point">
        <template slot="title">
          <div>
            <h4>{{item.name}}</h4>
            <p>{{item.date}}</p>
          </div>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
import { List, Cell } from "vant";
export default {
  name:'points',
  data() {
    return {
      list: "",
      loading: false,
      finished: false
    };
  },
  props: ["msg"],
  components: {
    "van-list": List,
    "van-cell": Cell
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      //   setTimeout(() => {
      //     for (let i = 0; i < 10; i++) {
      //       this.list.push(this.list.length + 1);
      //     }
      //     // 加载状态结束
      //     this.loading = false;
      //     // 数据全部加载完成
      //     if (this.list.length >= 40) {
      //       this.finished = true;
      //     }
      //   }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.van-list {
  padding: 0 0.2rem;
  margin-top: 0.5rem;
  .van-cell__title {
    text-align: left;
  }
  p,
  h4 {
    color: #808080;
  }
}
</style>