<template>
  <div>
    <div class="search_input">
      <form action="/">
        <van-search v-model="searchText"
                    placeholder="搜索"
                    @search="onSearch()"
                    :right-icon="rightIcon"></van-search>
      </form>
    </div>
    <div class="search-list">
      <!-- 当搜索框为空时 -->
      <div v-if="searchText==''?true :false"
           class="space_content">
        <p>搜索指定内容</p>
        <div class="btn_groups">
          <van-button v-for="(item,index) in tabs"
                      :key="index"
                      @click="tabClick(item.F_Name)">
            {{item.F_Name}} <span class="line">|</span>
          </van-button>
        </div>
      </div>
      <!-- 搜索框为酒店时 -->
      <div v-for="(item, index) in searchList"
           :key="index"
           v-show="searchText">
        <router-link :to="{name: item.url}">
          <div class="search_title">
            <h3>{{(index+1)+"." +item.F_Name}}</h3>
            <van-rate v-model="item.F_Score"
                      size="14px"
                      gutter="2px"
                      readonly
                      void-color="#ffd21e" />
            <span>评分:{{item.F_Score}}</span>
            <div>0m</div>
            <div class="clear"></div>
          </div>
          <div class="search_info">
            <van-card :thumb="item.shopImg">
              <template slot="title">
                <div class="card_info">
                  <p>
                    营业时间:
                    <span>{{item.F_Hours}}</span>
                  </p>
                  <p>
                    酒店地址:
                    <span>{{item.F_Address}}</span>
                  </p>
                  <p>
                    联系电话:
                    <span>{{item.F_Phone}}</span>
                  </p>
                </div>
              </template>
            </van-card>
          </div>
        </router-link>
      </div>
      <div v-show="isShow">未搜索到指定内容</div>
    </div>
  </div>
</template>

<script>
import { Search, Rate, Card, Button } from "vant";
export default {
  name: "searchList",
  data () {
    return {
      searchText: "",
      rightIcon: require("../../assets/images/mike.png"),
      tabs: [],
      searchList: [
        // {
        //   name: "西安国际大酒店",
        //   rateNum: 4,
        //   score: 9.4,
        //   distance: 1999,
        //   time: "24小时",
        //   address: "西安市新城区东新街139号",
        //   telephone: "029-34343434",
        //   shopImg: require("../../assets/images/shop.jpg"),
        //   url: "hotelDetails"
        // },
        // {
        //   name: "西安国际大酒店",
        //   rateNum: 4,
        //   score: 9.4,
        //   distance: 1999,
        //   time: "24小时",
        //   address: "西安市新城区东新街139号",
        //   telephone: "029-34343434",
        //   shopImg: require("../../assets/images/shop.jpg"),
        //   url: ""
        // },
        // {
        //   name: "西安国际大酒店",
        //   rateNum: 4,
        //   score: 9.4,
        //   distance: 1999,
        //   time: "24小时",
        //   address: "西安市新城区东新街139号",
        //   telephone: "029-34343434",
        //   shopImg: require("../../assets/images/shop.jpg"),
        //   url: ""
        // }
      ],
      isShow: false
    };
  },
  created () {
    this.tabList()
    // this.getListSearch()
  },
  methods: {
    async tabList () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.get("/scenicareaaround/gettypelist", {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        console.log(res)
        this.tabs = res.data.data
      });
    },
    onSearch () {
      var searchText = this.searchText;
      if (searchText) {
        this.getListSearch()
      }
    },
    tabClick (F_Name) {
      console.log(F_Name)
      this.searchText = F_Name
      this.getListSearch()
    },
    async getListSearch () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user

      await this.$http.get("/scenicareaaround/getlistforsearch/searchText", {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        console.log(res)
        this.searchList = res.data.data
        if (res.data.data.length === 0) {
          this.isShow = true
        } else {
          this.isShow = false
        }
      });
    }
  },
  components: {
    "van-search": Search,
    "van-rate": Rate,
    "van-card": Card,
    "van-button": Button
  }
};
</script>

<style lang="scss" scoped>
$spaceColor: #d2d2d2;
$fontColor: #dbdbdc;
$boxSpace: #f3f3f5;
.search_input {
  padding-bottom: 0.3rem;
  .van-search {
    .van-icon-search {
      color: $fontColor !important;
    }

    .van-search__content {
      box-shadow: 7px 3px 10px $spaceColor;
      border-radius: 5px;
      padding: 4px 14px;
      border: solid 1px #f1f1f1;
      background-color: white !important;
    }
    .van-field__body .van-field__control::-webkit-input-placeholder {
      color: $fontColor !important;
    }
  }
}
.search-list {
  // 搜索框为空 start
  .space_content {
    margin-top: 0.5rem;
    color: #808080;
    p {
      font-size: 12px;
    }
    .btn_groups {
      font-size: 14px;
      button {
        width: 17%;
        border: none;
        position: relative;
        .line {
          position: absolute;
          right: 0px;
          top: 0;
        }
      }
      button:nth-last-of-type(1) {
        .line {
          display: none;
        }
      }
    }
  }

  // 搜索框为空 end

  // 搜索框为酒店 start
  .search_title {
    padding: 0.3rem 0.3rem 0.5rem;
    border-bottom: solid 2px $boxSpace;
    height: 0.5rem;

    h3,
    span,
    .van-rate {
      float: left;
      line-height: 0.35rem;
    }
    h3 {
      font-weight: normal;
      font-size: 0.26rem;
    }
    span {
      font-size: 12px;
      margin-left: 0.1rem;
      color: $fontColor;
    }
    .van-rate {
      margin-left: 0.1rem;
    }
    div {
      float: right;
      color: #00c8b0;
    }
    .clear {
      clear: both;
    }
  }
  .search_info {
    background: $boxSpace;
    height: 2.5rem;
  }
  .van-card {
    background-color: white;
    margin-bottom: 0.3rem;
  }

  .card_info {
    text-align: left;
    font-size: 14px;
    line-height: 0.65rem;
    span {
      color: #969799;
    }
  }
  // 搜索框为酒店 end
}
</style>