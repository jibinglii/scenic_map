<template>
  <div>
    <van-cell-group>
      <van-field v-model="tel"
                 center
                 clearable
                 :left-icon="phoneImg"
                 placeholder="请输入手机号"
                 type="tel">
        <template #button>
          <van-button round
                      size="small"
                      type="primary"
                      class="codeBtn"
                      @click="sendCode()">{{buttonmsg}}</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="sms"
                 center
                 clearable
                 :left-icon="codeImg"
                 placeholder="验证码"
                 ></van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="pwd"
                 center
                 clearable
                 :left-icon="pwdImg"
                 placeholder="请输入6-12位密码"
                 type="password"
                 ></van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field v-model="confirmPwd"
                 center
                 clearable
                 :left-icon="pwdImg"
                 placeholder="确认密码"
                 type="password"></van-field>
    </van-cell-group>
    <van-button round
                type="primary"
                class="register_btn _btn"
                @click="register()"
                :loading="loading"
                loading-text="注册..."
                :disabled="zhud">注册</van-button>
  </div>
</template>

<script>
import { Field, Cell, CellGroup, Button } from "vant";

export default {
  name: "register",
  data () {
    return {
      tel: "15706086571",
      sms: "456231",
      pwd: "123456",
      confirmPwd: "123456",
      zhud: false,
      loading: false,
      buttonmsg: '发送验证码',
      phoneImg: require("../../assets/images/phone.png"),
      codeImg: require("../../assets/images/code.png"),
      pwdImg: require("../../assets/images/pwd.png")
    };
  },
  computed: {
  
  },
  methods: {
    sendCode () {
      let time = 4;
      let timer;
      timer = setInterval(() => {
        time--;
        if (time === 0) {
          clearInterval(timer);
          this.flag = false;
          this.buttonmsg = "发送验证码";
          return;
        }
        this.flag = true;
        this.buttonmsg = time + "秒后重新发送";
      }, 1000);
      // this.getCode();
    },
    // getCode () {
    //     if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel) || this.tel===""){
    //         this.toast('手机号码输入有误')
    //     }else{
    //         axios.get('https://www.daxunxun.com/users/sendCode?tel='+this.tel).then(res=>{
    //             if(res.data === 1){
    //                 Toast('用户名已注册，请更改')
    //             }else if(res.data === 0){
    //                 Toast('获取验证码失败')
    //             }else{
    //                 this.adminCode = res.data.code
    //                 console.log(this.adminCode)
    //             }
    //         })
    //     }
    // },

    register () {
      if (this.tel === '') {
        this.$toast('请输入手机号')
        return
      }else if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.tel)){
        this.$toast('请输入正确的手机号')
        return
      }

      if (this.pwd === '') {
        this.$toast('请输入密码')
        return
      }else if(this.pwd.length<6){
         this.$toast('请输入6-12位密码')
        return
      }

      if(this.confirmPwd ===''){
        this.$toast('请再次输入密码')
      }else if(this.confirmPwd !== this.pwd){
         this.$toast('两次密码不一致')
         this.confirmPwd = ''
      }
      if (this.sms === '' ) {
          this.$toast('请输入验证码')
          return
      }
      this.reallR()
    },
    async reallR () {
      this.zhud = true;
      await this.$http.post('/userinfo/register', {
        "data": JSON.stringify({
          "username": this.tel, 
          "password": this.pwd
          }) 
      }).then(res => {
        this.zhud = false
        this.loading = false
        console.log(res)
        if (res.code === 200) {
          this.$toast('注册成功,请登录')
        } else {
        this.$toast(res.data.info)
        }
      })
    }

  },
  components: {
    "van-field": Field,
    "van-cell-group": CellGroup,
    "van-cell": Cell,
    "van-button": Button
  }
};
</script>

<style scoped>
.codeBtn {
  padding: 0px 18px;
}
</style>