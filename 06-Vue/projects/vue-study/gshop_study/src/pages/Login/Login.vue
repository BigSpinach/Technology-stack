<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">TiKi外卖</h2>
        <div class="login_header_title">
          <a
            href="javascript:;"
            @click="isUserNameLogin = false"
            :class="{ on: !isUserNameLogin }"
            >短信登录</a
          >
          <a
            href="javascript:;"
            @click="isUserNameLogin = true"
            :class="{ on: isUserNameLogin }"
            >密码登录</a
          >
        </div>
      </div>
      <div class="login_content">
        <form>
          <!-- 手机号验证码登陆 -->
          <div :class="{ on: !isUserNameLogin }">
            <section class="login_message">
              <input
                name="phone"
                v-validate="'required|phone'"
                v-model="phoneNumber"
                type="tel"
                maxlength="11"
                placeholder="手机号"
              />
              <span style="color: red" v-show="errors.has('phone')">{{
                errors.first("phone")
              }}</span>
              <!-- :disabled="rightPhoneNumber && countDown > 0"
                -->
              <button
                @click="getCode"
                :disabled="!rightPhoneNumber || countDown > 0"
                class="get_verification"
                :class="{
                  rightPhone: rightPhoneNumber,
                }"
              >
                {{
                  countDown > 0 ? `${countDown}s后可以重新获取` : "获取验证码"
                }}
              </button>
            </section>
            <section class="login_verification">
              <input
                v-model="code"
                name="code"
                v-validate="'required|code'"
                type="tel"
                maxlength="8"
                placeholder="验证码"
              />
              <span style="color: red" v-show="errors.has('code')">{{
                errors.first("code")
              }}</span>
            </section>
            <section class="login_hint">
              温馨提示：未注册TiKi外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <!-- 用户名密码登陆 -->
          <div :class="{ on: isUserNameLogin }">
            <section>
              <section class="login_message">
                <input
                  v-model="username"
                  name="username"
                  v-validate="'required'"
                  type="tel"
                  maxlength="11"
                  placeholder="手机/邮箱/用户名"
                />
                <span style="color: red" v-show="errors.has('username')">{{
                  errors.first("username")
                }}</span>
              </section>
              <section class="login_verification">
                <input
                  v-model="pwd"
                  name="pwd"
                  v-validate="'required'"
                  :type="isShowPwd ? 'tel' : 'password'"
                  maxlength="8"
                  placeholder="密码"
                />
                <span style="color: red" v-show="errors.has('pwd')">{{
                  errors.first("pwd")
                }}</span>
                <div
                  class="switch_button"
                  :class="isShowPwd ? 'on' : 'off'"
                  @click="isShowPwd = !isShowPwd"
                >
                  <div
                    class="switch_circle"
                    :class="{ right: isShowPwd }"
                  ></div>
                  <span class="switch_text">{{
                    isShowPwd ? "abc" : "..."
                  }}</span>
                </div>
              </section>
              <section class="login_message">
                <input
                  v-model="captcha"
                  name="captcha"
                  v-validate="'required'"
                  type="text"
                  maxlength="11"
                  placeholder="验证码"
                />
                <span style="color: red" v-show="errors.has('captcha')">{{
                  errors.first("captcha")
                }}</span>
                <img
                  ref="captcha"
                  @click="getCaptcha"
                  class="get_verification"
                  src="http://localhost:4000/captcha"
                  alt="captcha"
                />
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
  </section>
</template>

<script>
import {
  sendCode,
  loginWithUserName,
  loginWithPhoneNumber,
} from "../../api/index.js";
// console.log(sendCode);

export default {
  data() {
    return {
      isUserNameLogin: false,
      isShowPwd: false,
      phoneNumber: "",
      countDown: 0,
      username: "",
      pwd: "",
      captcha: "",
      code: "",
    };
  },
  methods: {
    /*获取验证码 */
    getCaptcha() {
      //同一地址连续发送请求，src不响应
      //只有当src的值变换时才会显示新的内容
      this.$refs.captcha.src =
        "http://localhost:4000/captcha?time=" + Date.now();
    },
    //获取短信验证码
    async getCode() {
      //console.log('获取验证码...');
      this.countDown = 5;
      let timerId = setInterval(() => {
        this.countDown--;
        this.countDown === 0 && clearInterval(timerId);
      }, 1000);

      //发送请求验证码的操作
      //http://localhost:4000/sendcode
      //需要拿到返回的数据吗？ 不需要
      //所以可以直接在这里发ajax
      let result = await sendCode(this.phoneNumber);
      if (result.code === 0) {
        //成功
        alert("短信发送成功");
      } else {
        //失败
        alert(result.msg);
      }
    },
    //登陆
    async login() {
      //1.前端验证
      let { isUserNameLogin, phoneNumber, username, pwd, captcha, code } = this;
      let names = isUserNameLogin
        ? ["username", "pwd", "captcha"]
        : ["phone", "code"];
      // const success = await this.$validator.validateAll() // 对所有表单项进行验证
      const success = await this.$validator.validateAll(names); // 对指定的所有表单项进行验证
      if (success) {
        // console.log("前端验证成功");
        // 后端验证
        let result;
        if (isUserNameLogin) {
          //用户名密码登陆
          // debugger;
          result = await loginWithUserName({ username, pwd, captcha });
          // console.log(result);
          if (result.code === 1) {
            //登录失败
            alert("登录失败！验证码、密码、用户名不正确");
            //刷新验证码
            this.getCaptcha();
            //清空验证码输入框
            this.captcha = "";
          }
        } else {
          //手机号验证码登陆
          result = await loginWithPhoneNumber({ phoneNumber, code });
          if (result.code === 1) {
            //登录失败
            alert("登录失败！请输入正确的验证码");
            //刷新验证码
            this.getCode();
            //清空验证码输入框
            this.code = "";
          }
        }

        //统一验证登陆成功要做的事
        if (result.code === 0) {
          //切换到个人中心页
          this.$router.replace("/profile");
          //存储用户信息
          this.$store.dispatch('getUserInfoAction',result.data);
        }
      } else {
        //前端验证失败
        console.log("前端验证失败，登陆失败");
      }
    },
  },
  computed: {
    rightPhoneNumber() {
      return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phoneNumber);
    },
  },
};
</script>

<style scoped lang="stylus">
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_logo {
        font-size: 40px;
        font-weight: bold;
        color: #02a774;
        text-align: center;
      }

      .login_header_title {
        padding-top: 40px;
        text-align: center;

        >a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;

          &:first-child {
            margin-right: 40px;
          }

          &.on {
            color: #02a774;
            font-weight: 700;
            border-bottom: 2px solid #02a774;
          }
        }
      }
    }

    .login_content {
      >form {
        >div {
          display: none;

          &.on {
            display: block;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 10px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;

            &:focus {
              border: 1px solid #02a774;
            }
          }

          .login_message {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .get_verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;

              &.rightPhone {
                color: #333;
              }
            }
          }

          .login_verification {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .switch_button {
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              transition: background-color 0.3s, border-color 0.3s;
              padding: 0 6px;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #fff;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);

              &.off {
                background: #fff;

                .switch_text {
                  float: right;
                  color: #ddd;
                }
              }

              &.on {
                background: #02a774;
              }

              >.switch_circle {
                // transform translateX(27px)
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;

                &.right {
                  transform: translateX(27px);
                }
              }
            }
          }

          .login_hint {
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;

            >a {
              color: #02a774;
            }
          }
        }

        .login_submit {
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 30px;
          border-radius: 4px;
          background: #4cd96f;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          border: 0;
        }
      }

      .about_us {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }

    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;

      >.iconfont {
        font-size: 20px;
        color: #999;
      }
    }
  }
}
</style>