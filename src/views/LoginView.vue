<template>
  <div class="mainContainer">
    <navbarComponent />
    <div class="loginComponent">
      <form>
        <div class="title">LOGIN</div>
        <div class="account">Account</div>
        <div class="accountInput">
          <input
            type="text"
            size="30"
            v-model="account"
            v-bind:class="{ 'is-invalid': accountError }"
            style="
              border: 1px solid #558aba;
              width: 430px;
              height: 45px;
              border-radius: 8px;
              font-size: 20px;
            "
          />
          <div class="invalid-feedback">{{ accountErrMsg }}</div>
        </div>
        <div class="password">Password</div>
        <div class="passwordInput">
          <input
            type="password"
            size="30"
            v-model="password"
            v-bind:class="{ 'is-invalid': passwordError }"
            style="
              border: 1px solid #558aba;
              width: 430px;
              height: 45px;
              border-radius: 8px;
              font-size: 20px;
            "
          />
          <div class="invalid-feedback">{{ passwordErrMsg }}</div>
        </div>
        <div class="identify">identify</div>
        <div class="identifyInput">
          <input
            type="text"
            size="30"
            v-model="identify"
            style="
              border: 1px solid #558aba;
              width: 300px;
              height: 45px;
              border-radius: 8px;
              font-size: 20px;
            "
          />
          <div @click="refreshCode" style="cursor: pointer; margin-left: 5px">
            <Identify :identifyCode="identifyCode"></Identify>
          </div>
        </div>
        <div class="invalid-feedback">{{ identifyCodeErrMsg }}</div>

        <div class="loginBtn">
          <button class="submitBtn" @click="submitAccount()" type="button">
            Login
          </button>
        </div>
      </form>
    </div>
    <footerComponent />
  </div>
</template>

<script>
import navbarComponent from "@/components/BaseComponent/navbarComponent.vue";
import footerComponent from "@/components/BaseComponent/footerComponent.vue";
import Identify from "@/components/Identify.vue";

export default {
  name: "LoginView",
  components: {
    navbarComponent,
    footerComponent,
    Identify,
  },
  data() {
    return {
      account: "",
      accountError: true,
      accountErrMsg: "請填入帳號!",
      password: "",
      passwordError: true,
      passwordErrMsg: "請填入密碼!",
      identify: "",
      identifyCode: "",
      identifyCodeError: false,
      identifyCodeErrMsg: "請填入驗證碼!",
      // 驗證碼規則
      identifyCodes: "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    };
  },
  watch: {
    account: function () {
      // const re =
      //   /^(([.](?=[^.]|^))|[\w_%{|}#$~`+!?-])+@(?:[\w-]+\.)+[a-zA-Z.]{2,63}$/;
      if (this.account == "") {
        this.accountError = true;
        this.accountErrMsg = "請填入帳號!";
        // } else if (!re.test(this.code)) {
        //   this.codeError = true;
        //   this.codeErrMsg = "格式錯誤！";
      } else {
        this.accountErrMsg = "";
        this.accountError = false;
      }
    },
    password: function () {
      const re = /^[a-zA-Z0-9]+$/;
      if (this.password == "") {
        this.passwordError = true;
        this.passwordErrMsg = "請填入密碼!";
      } else if (!re.test(this.password)) {
        this.passwordError = true;
        this.passwordErrMsg = "請勿包含特殊字元！";
      } else if (this.password.length < 6) {
        this.passwordError = true;
        this.passwordErrMsg = "密碼長度請勿低於6個字元";
      } else {
        this.passwordError = false;
        this.passwordErrMsg = "";
      }
    },
    identify: function () {
      if (this.identify == "") {
        this.identifyCodeErrMsg = "請填入驗證碼!";
      } else {
        this.identifyCodeErrMsg = "";
      }
    },
  },
  methods: {
    async submitAccount() {
      // let userData = {
      //   account: this.account,
      //   password: this.password,
      // };
      if (this.accountError === true || this.passwordError === true) {
        alert("輸入資料格式錯誤");
        return false;
      } else if (this.identify !== this.identifyCode || this.identify == "") {
        alert("驗證碼錯誤");
        this.identify = "";
        this.identifyCodeError = true;
      }
    },
    // 切換驗證碼
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
      console.log(this.identifyCode);
    },
    // 生成隨機驗證碼
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode +=
          this.identifyCodes[
            Math.floor(Math.random() * (this.identifyCodes.length - 0) + 0)
          ];
      }
    },
    mounted() {
      this.refreshCode();
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;400&display=swap");
.mainContainer {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Lato", sans-serif;
}
.loginComponent {
  width: 542px;
  height: 675px;
  margin: auto;
  border: 2px solid #558aba;
  border-radius: 8px;
  box-shadow: 0px 4px 8px;
}
.title {
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #558aba;
  margin-top: 35px;
}
.account,
.password,
.identify {
  margin-top: 45px;
  margin-left: 53px;
  text-align: left;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  color: #558aba;
}
.accountInput,
.passwordInput,
.identifyInput {
  margin-top: 15px;
}
.identifyInput {
  display: flex;
  justify-content: center;
  align-content: center;
}
.loginBtn {
  margin-top: 198px;
}
.submitBtn {
  width: 135px;
  height: 50px;
  background-color: #558aba;
  color: #fff;
  font-weight: 800;
  font-size: 20px;
  line-height: 24px;
  border: transparent;
  border-radius: 10px;
  cursor: pointer;
}
.invalid-feedback {
  color: red;
}
</style>
