<template>
  <div>
    <div class="dialogDetailAudio"
         onselectstart="return false">
      <img class="dialogAudioPlay"
           :src="audioImg"
           title=""
           @click="playAudio">
      <span class="dialogAudioTime">{{time}}</span>
      <div class="dialogAudioProgress"
           ref="dialogAudioProgress"
           @mousedown="controlAudioProgress($event)">
        <span class="progressDot"
              :style="dotStyle"></span>
        <span class="bar"
              :style="progressStyle"></span>
      </div>
      <span class="dialogAudioDuration">{{duration}}</span>
      <!-- <img class="dialogAudioListen"
           :src="dialogAudioListen"
           title="静音"
           @click="listenDialogAudio"> -->
      <!-- <img class="dialogAudioDownload"
           src="./callRecordDownload.png"
           title="下载"
           @click="downloadCallRecord"> -->
      <audio ref="recordAudio"
             class="recordAudio"
             type="audio/mpeg"
             @canplay="canPlay"
             @timeupdate="timeUpdate"
             @ended="onEnded"
             :src="audioUrl">
      </audio>
    </div>
  </div>
</template>
<script>
export default {
  name: 'audioPlay',
  data () {
    return {
      time: "00:00",
      duration: "00:00",
      progressStyle: { width: "" },
      dotStyle: { left: "" },
      audioUrl: "",
      audioImg: require("../assets/images/pause.jpg"),
      // dialogAudioListenGroup: ["../assets/images/play.jpg", "../assets/images/pause.jpg"],
      imgIndex: 0,
    }
  },
  //计算属性 切换静音图片
  computed: {
    // dialogAudioListen () {
    //   return this.dialogAudioListenGroup[this.imgIndex]
    // }

  },
  created () {
    this.audioplay()
  },
  methods: {
    async audioplay () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      var audiotype = this.$store.state.audiotype
      var id = this.$route.query.id
      console.log(audiotype)
      await this.$http.get('/gisscenicarea/audioplay', {
        params: {
          token: token,
          loginMark: loginmark,
          gisscenicareaid: id,
          audiotype: audiotype
        }
      }).then(res => {
        console.log(res)
        this.audioUrl = res.data.data
      })
    },
    //播放暂停控制
    playAudio () {
      let recordAudio = this.$refs.recordAudio; //获取audio元素
      if (recordAudio.paused) {
        this.audioImg = require("../assets/images/play.jpg")
        recordAudio.play();
      } else {
        this.audioImg = require("../assets/images/pause.jpg")
        recordAudio.pause();
      }
    },

    //进度条更新
    timeUpdate () {
      console.log(111)
      this.duration = this.transTime(this.$refs.recordAudio.duration);
      let timeStr = parseInt(this.$refs.recordAudio.currentTime);
      this.time = this.transTime(timeStr);
      let scales = this.$refs.recordAudio.currentTime / this.$refs.recordAudio.duration;
      this.progressStyle.width = scales * 100 + '%';
      this.dotStyle.left = scales * 100 + '%';
    },

    //播放结束
    onEnded () {
      this.audioImg = require("../assets/images/pause.jpg");
      this.time = "00:00";
      this.progressStyle.width = 0;
      this.dotStyle.left = 0;
    },

    //用户可以开始播放audio
    canPlay () {
      //获取audio音频文件总时长 并设置到界面并解决出现 NAN 的问题
      this.duration = this.transTime(this.$refs.recordAudio.duration);
    },

    //静音控制
    // listenDialogAudio () {
    //   this.imgIndex = (this.imgIndex + 1) % (this.dialogAudioListenGroup).length;
    //   if (this.dialogAudioListen == "./quite.png") {
    //     this.$refs.recordAudio.volume = 0;
    //   } else {
    //     this.$refs.recordAudio.volume = 1;
    //   }
    // },

    //鼠标点击移动播放进度
    controlAudioProgress (event) {
      let audio = this.$refs.recordAudio;
      let dialogAudioProgress = this.$refs.dialogAudioProgress;
      if (!audio.paused || audio.currentTime != 0) {
        let pgsWidth = parseFloat(window.getComputedStyle(dialogAudioProgress, null).width.replace('px', ''));
        let rate = event.offsetX / pgsWidth;
        audio.currentTime = audio.duration * rate;
        this.timeUpdate();
      }
    },

    //下载音频
    // downloadCallRecord () {
    //   console.log("下载...");
    // },

    //时间转换
    transTime (value) {
      let time = "";
      let h = parseInt(value / 3600);
      value %= 3600;
      let m = parseInt(value / 60);
      let s = parseInt(value % 60);
      if (h > 0) {
        time = this.formatTime(h + ":" + m + ":" + s);
      } else {
        time = this.formatTime(m + ":" + s);
      }
      return time;
    },

    //时间格式化
    formatTime (value) {
      let time = "";
      let s = value.split(':');
      let i = 0;
      for (; i < s.length - 1; i++) {
        time += s[i].length == 1 ? ("0" + s[i]) : s[i];
        time += ":";
      }
      time += s[i].length == 1 ? ("0" + s[i]) : s[i];
      return time;
    }
  },
}
</script>
<style lang="scss" scoped>
.dialogDetailAudio {
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 0 10px;
  width: 100%;
  height: 49px;
  line-height: 49px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 30px 0px rgba(29, 34, 54, 0.18);
  border-radius: 6px;
}

.dialogAudioPlay {
  display: inline-block;
  cursor: pointer;
  position: relative;
  width: 23px;
  height: 23px;
}

.dialogAudioTime {
  margin-left: 11px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.dialogAudioProgress {
  display: inline-block;
  width: 300px;
  height: 2px;
  background: rgba(212, 249, 232, 1);
  border-radius: 1px;
  margin-left: 12px;
  position: relative;
}

.progressDot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  background-color: rgba(5, 180, 147, 1);
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -4px;
  margin-left: -5px;
  cursor: pointer;
}

.bar {
  height: 100%;
  background: rgba(5, 180, 147, 1);
  border-radius: 3px;
  display: inline-block;
  position: absolute;
  left: 0;
}

.dialogAudioDuration {
  margin-left: 11px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
}

.dialogAudioListen,
.dialogAudioDownload {
  width: 16px;
  height: 13px;
  cursor: pointer;
}

.dialogAudioListen {
  margin-left: 8px;
}

.dialogAudioDownload {
  margin-left: 5px;
}
</style>