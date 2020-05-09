<template>
  <div class="search">
    <div class="search_input">
      <form action="/">
        <van-search v-model="searchText"
                    :placeholder="placeText"
                    :right-icon="rightIcon"
                    @focus="onfocus"></van-search>
      </form>
    </div>
  </div>
</template>

<script>
import { Search } from "vant";
export default {
  name: "search",
  data () {
    return {
      searchText: "",
      placeText: '搜索',
      rightIcon: require("../assets/images/mike.png")
    };
  },
  methods: {
    onfocus () {
      this.$router.push({
        name: 'searchList'
      })
    }
  },
  components: {
    "van-search": Search
  }
};
</script>
<style lang="scss" scoped>
$fontColor: #dbdbdc;
.search_input {
  position: fixed;
  width: 100%;
  padding-bottom: 0.3rem;
  z-index: 999;
  .van-search {
    .van-icon-search {
      color: $fontColor !important;
    }

    .van-search__content {
      box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      padding: 5px 10px;
      border: solid 1px #f1f1f1;
      background-color: white !important;
    }
    .van-field__body .van-field__control::-webkit-input-placeholder {
      color: $fontColor !important;
    }
    // .van-icon{
    //   img{
    //     vertical-align: inherit;
    //   }
    // }
  }
}
</style>