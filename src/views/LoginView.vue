<template>
    <main class="bg-[#FFD370]">
        <div class=" flex items-center max-w-[1028px] mx-auto">
            <div class="login_left min-h-screen w-1/2"></div>
            <div class="w-1/2 p-8">
                <h1 class="text-2xl font-bold text-center">最實用的線上代辦事項服務</h1>
                <v-form @submit="onSubmit" class="max-w-[300px] text-center mx-auto py-6">
                    <div class="flex flex-col mb-4 items-start">
                        <label class="text-base font-bold text-font-main pb-1" for="">Email</label>
                        <v-field type="email" name="email" v-model="user.email" label="Email" class="bg-white rounded-[10px] px-4 py-3 w-full" placeholder="請輸入Email" rules="required|email"></v-field>
                        <error-message name="email" class="text-red-700 pl-2"></error-message>
                    </div>
                    <div class="flex flex-col mb-6 items-start">
                        <label class="text-base font-bold text-font-main pb-1" for="">密碼</label>
                        <v-field type="password" name="password" v-model="user.password" label="密碼" class="bg-white rounded-[10px] px-4 py-3 w-full" placeholder="請輸入密碼"  rules="required"></v-field>
                        <error-message name="password" class="text-red-700 pl-2"></error-message>
                    </div>
                    <button type="submit" class="bg-font-main text-white text-base font-bold px-12 py-3 rounded-[10px] ">登入</button>
                    <br>
                    <router-link to="/register" class="text-font-main inline-block text-base font-bold my-6">註冊帳號</router-link>
                </v-form>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
.login_left{
    background-image: url('../assets/left.png');
    background-repeat: no-repeat;
    background-position: center center;
}
</style>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$http.post('https://todoo.5xcamp.us/users/sign_in', { user: this.user })
        .then(res => {
          const { authorization } = res.headers
          const { nickname } = res.data
          document.cookie = `token=${authorization}; nickname=${nickname}; `
          alert('登入成功')
          this.$router.push('/')
        })
        .catch(err => {
          console.dir(err)
        })
    }
  }
}
</script>
