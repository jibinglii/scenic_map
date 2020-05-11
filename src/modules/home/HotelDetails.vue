<template>
  <div class="shop_info">
    <!-- 顶部轮播 -->
    <van-swipe @change="onChange">
      <van-swipe-item>
        <img :src="imageUrl" />
        <div class="layer_bottom">
          <div class="layer_con">
            <h3>{{$route.params.items.F_Name}}</h3>
            <p>{{$route.params.items.F_Hours}}</p>
          </div>
        </div>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          <!-- <span>{{ current + 1 }}</span> -->
          <!-- /{{swipeData.length}} -->
        </div>
      </template>
    </van-swipe>
    <div class="shop_content">
      <div class="score_info">评分：{{score}}</div>
      <div class="address_info">地址：{{address}}</div>
      <div class="introduce_info">
        <div class="intro_title">简介：</div>
        <div class="intro_con">{{content}}</div>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="btn_groups">
      <a>
        <van-icon name="location-o" /> 查看路线</a>|
      <a :href="'tel:' +phone">
        <van-icon name="phone-o" />联系电话</a>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Button, Icon } from "vant";

export default {
  name: "hotelDetails",
  data () {
    return {
      score: 0,
      address: "",
      content: "",
      current: 0,
      imageUrl: '',
      phone: ''
    };
  },
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    "van-button": Button,
    "van-icon": Icon
  },
  mounted () {
    var item = this.$route.params.items
    this.address = item.F_Address
    this.score = item.F_Score
    this.content = item.F_Remarks
    this.imageUrl = item.F_Image
    this.phone = item.F_Phone
  },
  methods: {
    onChange (index) {
      this.current = index;
    }
  }
};
</script>
<style scoped lang='scss'>
.shop_info {
  text-align: left;

  // 轮播图start
  .van-swipe,
  .van-swipe-item {
    height: 4.5rem;
    img {
      width: 100%;
      height: 100% !important;
    }
  }

  .layer_bottom {
    width: 100%;
    height: 1.1rem;
    background: #696566ad;
    position: absolute;
    bottom: 0;
    .layer_con {
      padding: 0.1rem 0.8rem;
      color: white;
      letter-spacing: 2px;
      h3 {
        font-weight: 100;
        color: white;
      }
      p {
        font-size: 12px;
      }
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 14px;
    color: white;
    span {
      color: #67c9ef;
    }
  }

  //   轮播结束end
  .shop_content {
    color: #808080;
    .score_info,
    .address_info {
      font-size: 12px;
    }
    .score_info,
    .address_info,
    .intro_title,
    .intro_con {
      padding: 0.3rem 0.8rem;
      border-top: 1px solid #f1f1f1;
    }

    .intro_con {
      border-top: 1px solid #f1f1f1;
      text-indent: 0.6rem;
      text-align: justify;
      font-size: 12px;
      line-height: 0.4rem;
      margin-bottom: 45px;
    }
  }

  //   底部按钮
  .btn_groups {
    position: fixed;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #f1f1f1;
    color: #808080;
    font-size: 16px;
    background: #fff;
    padding: 15px 0;
    display: flex;
    a {
      width: 48%;
      border: none;
      letter-spacing: 3px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>