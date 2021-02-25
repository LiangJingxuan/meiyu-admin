<template>
  <div id="login">
    <a-row type="flex" class="login_card">
      <a-col :flex="5" class="logo">
        <i>美之相遇，从这里出发。</i>
      </a-col>
      <a-col :flex="4">
        <a-card
          title="美遇 · 后台管理系统"
          :headStyle="{
            color: '#666',
            textAlign: 'center',
            border: 'none',
            fontSize: '18px',
          }"
          :bodyStyle="{ padding: 0, marginTop: '20px' }"
          :bordered="false"
          class="login_form"
        >
          <a-form :form="form" @submit="loginSubmit">
            <a-form-item>
              <a-input
                v-decorator="[
                  'userName',
                  {
                    rules: [
                      {
                        required: true,
                        message: '请输入用户名!',
                      },
                    ],
                  },
                ]"
                placeholder="用户名"
              >
                <a-icon
                  slot="prefix"
                  type="user"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
                  'password',
                  {
                    rules: [
                      {
                        required: true,
                        message: '请输入密码!',
                      },
                    ],
                  },
                ]"
                type="password"
                placeholder="密码"
              >
                <a-icon
                  slot="prefix"
                  type="lock"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button type="danger" html-type="submit" block> 登录 </a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
    <div
      class="background_img"
      :style="{ backgroundImage: `url(${mafengwoRandomImg})` }"
    ></div>
  </div>
</template>

<script>
import { Row, Col, Card, Form, Input, Icon, Button } from "ant-design-vue";

export default {
  name: "login",
  components: {
    ARow: Row,
    ACol: Col,
    ACard: Card,
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AIcon: Icon,
    AButton: Button,
  },
  data() {
    return {
      imgs: [
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo1.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo2.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo3.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo4.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo5.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo6.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo7.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo8.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo9.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo10.jpg",
        "http://140.143.185.192:8888/ROOT_RESOURCE/lo0.jpg",
      ],
      mafengwoImg: "https://images.mafengwo.net/images/signup/wallpaper/1.jpg",
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "form_login" });
  },
  methods: {
    loginSubmit(e) {
      e.preventDefault();
      this.form.validateFields(async (err, values) => {
        if (!err) {
          console.log(values);
          // const { data } = await user.login(values);
          // if (data.token) {
          //   this.$message.success("登陆成功!");
          // }
        }
      });
    },
  },
  computed: {
    randomImg() {
      return this.imgs[parseInt(10 * Math.random())];
    },
    mafengwoRandomImg() {
      let num = Math.floor(Math.random() * (46 - 1) + 1);
      return (this.mafengwoImg = `https://images.mafengwo.net/images/signup/wallpaper/${num}.jpg`);
    },
  },
};
</script>

<style lang="less" scoped>
#login {
  height: 100vh;
  overflow: hidden;
}
.login_card {
  opacity: .85;
  filter:alpha(opacity=85);
  width: 730px;
  height: 430px;
  margin: 10% auto;
  background-color: #ffffff;
  border-radius: 100px 0px 100px 0px;
  box-shadow: 4px 4px 0px #0000004a;
  display: flex;
  overflow: hidden;
  .login_form {
    width: 80%;
    margin: 50px auto;
  }
  .logo {
    background-image: url("https://img.zcool.cn/community/0102175f0c1053a801215aa07e3a4f.jpg@3000w_1l_2o_100sh.jpg");
    background-size: cover;
    position: relative;
    i {
      color: #ffffff;
      background-color: #000000;
      padding: 0 5px;
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  }
}
.background_img {
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -1;
  animation: QR-move 60s;
  -moz-animation: QR-move 60s;
  -webkit-animation: QR-move 60s;
  -o-animation: QR-move 60s;
  transform: scale(1.3, 1.3);
  @keyframes QR-move {
    from {
      -moz-transform: scale(1, 1);
      -webkit-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    to {
      -moz-transform: scale(1.3, 1.3);
      -webkit-transform: scale(1.3, 1.3);
      -o-transform: scale(1.3, 1.3);
      transform: scale(1.3, 1.3);
    }
  }
  @-moz-keyframes QR-move {
    from {
      -moz-transform: scale(1, 1);
      -webkit-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    to {
      -moz-transform: scale(1.3, 1.3);
      -webkit-transform: scale(1.3, 1.3);
      -o-transform: scale(1.3, 1.3);
      transform: scale(1.3, 1.3);
    }
  }
  @-webkit-keyframes QR-move {
    from {
      -moz-transform: scale(1, 1);
      -webkit-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    to {
      -moz-transform: scale(1.3, 1.3);
      -webkit-transform: scale(1.3, 1.3);
      -o-transform: scale(1.3, 1.3);
      transform: scale(1.3, 1.3);
    }
  }
  @-o-keyframes QR-move {
    from {
      -moz-transform: scale(1, 1);
      -webkit-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    to {
      -moz-transform: scale(1.3, 1.3);
      -webkit-transform: scale(1.3, 1.3);
      -o-transform: scale(1.3, 1.3);
      transform: scale(1.3, 1.3);
    }
  }
}
</style>