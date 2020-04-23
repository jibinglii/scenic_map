<template>
  <div class="form_commit">
    <van-cell-group>
      <van-field v-model="username"
                 label="姓名"
                 placeholder="请输入用户名" />
      <van-field v-model="encode"
                 label="身份证号码"
                 placeholder="请输入身份证号码" />
      <van-field v-model="intro"
                 rows="2"
                 autosize
                 label="用户简介"
                 type="textarea"
                 maxlength="50"
                 show-word-limit
                 placeholder="请输入个人简介" />
    </van-cell-group>
    <van-button type="primary"
                round
                @click="saveBtn()">保存</van-button>
  </div>
</template>
<script>
import { CellGroup, Field, Button } from 'vant';
export default {
  name: 'userupdata',
  data () {
    return {
      username: '张三三',
      encode: '610525198804322120',
      intro: '生活不止眼前的苟且，还有诗和远方的狂野~'
    }
  },
  methods: {
    saveBtn () {
      if (this.username === '') {
        this.$toast('请输入姓名')
        return
      }
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (this.encode === '') {
        this.$toast('请输入身份证号码')
        return
      } else if (reg.test(this.encode) === false) {
        this.$toast('身份证输入不合法')
        return false
      }

      if (this.intro === '') {
        this.$toast('请输入个人简介')
        return
      }
      this.userUpdata()
    },
    async userUpdata () {
      var token = this.$store.state.token
      var loginmark = this.$store.state.user
      await this.$http.post('/userinfo/updateinfo', {
        // params: {
        token: token,
        loginMark: loginmark,
        mobile: loginmark,
        realname: this.username,
        encode: this.encode,
        description: this.intro
        // }
      }).then(res => {
        console.log(res)
        this.$router.push({
          name: 'me'
        })
      })
    }
  },
  components: {
    'van-cell-group': CellGroup,
    'van-field': Field,
    'van-button': Button
  }
}
</script>
<style lang="scss" scoped>
.form_commit {
  .van-button {
    width: 80%;
    margin: 5% auto;
    background: linear-gradient(to right, #3fc6ab, #1583e3);
  }
}
</style>