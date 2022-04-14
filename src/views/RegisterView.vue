<template>
    <main class="bg-[#FFD370]">
        <div class=" flex items-center max-w-[1028px] mx-auto">
            <div class="login_left min-h-screen w-1/2"></div>
            <div class="w-1/2 p-8">
                <v-form @submit="register"  class="max-w-[304px] text-center mx-auto">
                    <h1 class="text-2xl font-bold text-left py-6">註冊帳號</h1>
                    <div class="flex flex-col mb-4 items-start">
                        <label class="text-base font-bold text-font-main pb-1" for="">Email</label>
                        <v-field type="email" v-model="user.email" name="email" label="Email"  class="bg-white rounded-[10px] px-4 py-3 w-full" placeholder="請輸入Email" rules="required|email"></v-field>
                        <error-message name="email" class="text-red-700 pl-2"></error-message>
                    </div>
                    <div class="flex flex-col mb-4 items-start">
                        <label class="text-base font-bold text-font-main pb-1" for="">暱稱</label>
                        <v-field type="text" v-model="user.nickname" name="nickname" label="暱稱" class="bg-white rounded-[10px] px-4 py-3 w-full" placeholder="請輸入您的暱稱" rules="required"></v-field>
                        <error-message name="nickname" class="text-red-700 pl-2"></error-message>
                    </div>
                    <div class="flex flex-col mb-6 items-start">
                        <label class="text-base font-bold text-font-main pb-1" for="">密碼</label>
                        <v-field type="password" v-model="user.password" label="密碼" name="password" class="bg-white rounded-[10px] px-4 py-3 w-full" placeholder="請輸入密碼" rules="required|min:6"></v-field>
                        <error-message name="password" class="text-red-700 pl-2"></error-message>
                    </div>
                    <div class="flex flex-col mb-6 items-start">
                        <label class="text-base font-bold text-font-main pb-1" for="">再次輸入密碼</label>
                        <v-field type="password"  v-model="confirmPWD" name="confirmPWD" label="再次輸入密碼" class="bg-white rounded-[10px] px-4 py-3 w-full" placeholder="請再次輸入密碼" rules="required|confirmed:@password|min:6"></v-field>
                        <error-message name="confirmPWD" class="text-red-700 pl-2"></error-message>
                    </div>
                    <button type="submit" class="bg-font-main text-white text-base font-bold px-12 py-3 rounded-[10px] ">註冊帳號</button>
                    <br>
                    <router-link to="/login" class="text-font-main inline-block text-base font-bold my-6">登入</router-link>
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
        nickname: '',
        password: ''
      },
      confirmPWD: ''
    }
  },
  methods: {
    register () {
      this.$http.post('https://todoo.5xcamp.us/users', { user: this.user })
        .then(res => {
          alert('註冊成功')
          this.$router.push('/login')
        })
        .catch(err => {
          console.dir(err)
        })
    }
  }
}
</script>
