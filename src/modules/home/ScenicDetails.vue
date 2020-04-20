<template>
  <div>
    <img src="../../assets/images/scenic_img.jpg"
         alt=""
         class="scenic_img">
    <div class="intro">
      <div class="top">
        <div class="title">
          <h2>{{title}}</h2>
          <div class="comment"><img src="../../assets/images/sound.png"
                 alt="">解说</div>
        </div>
        <div class="audioTest">
          <div style="width: 100%">
            <aplayer :music="videoUpload.music"></aplayer>
          </div>
        </div>
      </div>
      <div class="intro_text">
        <h3>景区简介</h3>
        <p>
          {{intro}}
        </p>
        <h4>景区地址：<span>{{address}}</span></h4>
        <h4>开放时间：<span>{{openTime}}</span></h4>
      </div>
    </div>
  </div>
</template>
<script>

import aplayer from "vue-aplayer";

export default {
  name: 'scenicDetails',
  data () {
    return {
      playFlag: false,
      title: '',
      intro: '',
      address: '',
      openTime: '8:30-21:30',
      videoUpload: {
        progress: false,
        progressPercent: 0,
        successPercent: 0,
        music: {
          title: '',
          author: '',
          url: require('../../assets/images/audio.mp3'),
          lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
        }
      }
    }
  },
  components: {
    //别忘了引入组件
    aplayer: aplayer
  },
  created () {
    this.scenicList();
  },
  methods: {

    async scenicList () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.get('/gisscenicarea/getinfo/' + this.$route.query.id, {
        params: {
          token: token,
          loginMark: loginmark
        }
      }).then(res => {
        console.log(res)
        this.title = res.data.data.F_Name
        this.intro = res.data.data.F_Remarks
        this.address = res.data.data.F_Address
      })
    },
  }
}
</script>
<style lang="scss" scoped>
.scenic_img {
  width: 100%;
}
.intro {
  padding: 0.4rem 0.5rem;
  .top {
    .title {
      display: flex;
      align-items: center;
      h2 {
        font-weight: 500;
        padding-right: 20px;
        color: #484848;
      }
      div.comment {
        display: flex;
        align-items: center;
        padding: 4px 15px;
        border-radius: 10px;
        background: #01d4c1;
        color: #fff;
        font-size: 12px;
        img {
          width: 15px;
          margin-right: 2px;
        }
      }
    }
    .audioTest {
      padding: 10px 0;
    }
  }
  .intro_text {
    text-align: left;
    color: #484848;
    h3 {
      padding: 15px 0;
    }
    p {
      font-size: 13px;
      text-align: justify;
      line-height: 28px;
      letter-spacing: 1px;
      padding-bottom: 10px;
    }
    h4 {
      font-size: 13px;
      color: #484848;
      letter-spacing: 1px;
    }
  }
}
</style>