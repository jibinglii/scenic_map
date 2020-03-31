<template>
  <div class="shop_info">
    <!-- 顶部轮播 -->
    <van-swipe @change="onChange">
      <van-swipe-item v-for="(item, index) in swipeData" :key="index">
        <img :src="item.images" />
        <div class="layer_bottom">
          <div class="layer_con">
            <h3>{{item.name}}</h3>
            <p>{{item.xj}}</p>
          </div>
        </div>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          <span>{{ current + 1 }}</span>
          /{{swipeData.length}}
        </div>
      </template>
    </van-swipe>
    <div class="shop_content">
      <div class="score_info">评分:{{score}}</div>
      <div class="address_info">{{address}}</div>
      <div class="introduce_info">
        <div class="intro_title">酒店简介</div>
        <div class="intro_con">{{content}}</div>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="btn_groups">
      <van-button type="default" icon="location-o" url>查看路线</van-button>|
      <van-button type="default" icon="phone-o" url>联系电话</van-button>
    </div>
  </div>
</template>
<script>
import { Swipe, SwipeItem, Button } from "vant";

export default {
  name: "hotelDetails",
  data() {
    return {
      score: 9.4,
      address: "西安市新城区东新街139号",
      content:
        "嘉兴富悦大酒店按照豪华五星级酒店标准建造，位于嘉兴市中环西路28号。酒店毗邻沪杭高速、乍嘉苏高速公路，交通便利，地理位置优越。紧邻南湖风景区、西塘、乌镇等风景名胜区。嘉兴富悦大酒店总面积7.4万平方米，拥有各类豪华客房450间套，宽敞豪华的大开间、通透舒适的落地大玻璃窗、风格时尚的卫浴设计、细心周到的贴身管家、无微不至的用心服务。豪华温馨的客房设施，将带给您品位非凡的享受。嘉兴富悦大酒店拥有极其完善和现代的会议场所及设施，配有两个层高7.5米、面积1500平方米的无柱多功能厅、宴会厅，10个不同规格的会议室，是目前浙江省同类酒店中规模最大、设施最完善的会议中心之一。气势恢宏的宴会设施、细致入微的会议团队、“一站式”会议服务专家，满足您高档会议的一切所需。",
      current: 0,
      swipeData: [
        {
          images: require("../assets/images/shop_img.png"),
          name: "西安国际大酒店",
          xj: "5星级"
        },
        {
          images: require("../assets/images/shop_img.png"),
          name: "西安国际大酒店",
          xj: "5星级"
        }
      ]
    };
  },
  components: {
    "van-swipe": Swipe,
    "van-swipe-item": SwipeItem,
    "van-button": Button
  },
  methods: {
    onChange(index) {
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
      border-top: 1px solid #ebebef;
    }

    .intro_con {
      border-top: 1px solid #cdcdcf;
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
    border-top: 1px solid #ebebef;
    color: #808080;
    font-size: 16px;

    button {
      width: 48%;
      border: none;
      letter-spacing: 3px;
    }
  }
}
</style>