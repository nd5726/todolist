<template>
  <nav class="flex justify-between items-center py-4 bg-main-bg px-8">
    <img alt="Vue logo" src="../assets/logo_lg.png">
    <div>
      <router-link to="/" class="text-black text-base font-normal px-3">{{ nickname }}的代辦</router-link>
      <button type="button" @click="logout"  class="text-black text-base font-normal px-3">登出</button>
    </div>
  </nav>
  <div class="home h-screen pt-10">
    <form @submit="addTodos" class="bg-white rounded-[10px] max-w-[500px] mx-auto p-3 flex shadow-custom mb-4" >
      <input type="text" v-model="todo.content" class="focus:outline-none text-base flex-grow " placeholder="新增待辦事項">
      <button type="submit" class="rounded-[10px] h-[40px] w-[40px] btn-plus"></button>
    </form>
    <div class="bg-white rounded-[10px] max-w-[500px] mx-auto shadow-custom">
      <div class="flex">
        <div class="border-b border-[#EFEFEF] w-1/3 p-4 text-center text-[#9F9A91] cursor-pointer" :class="{ 'border-b-2 border-font-main font-bold text-font-main':active== 'all'}" @click="getTodos()">全部</div>
        <div class="border-b border-[#EFEFEF] w-1/3 p-4 text-center text-[#9F9A91] cursor-pointer" :class="{ 'border-b-2 border-font-main font-bold text-font-main':active== 'process'}" @click="filterTodo('process')">待完成</div>
        <div class="border-b border-[#EFEFEF] w-1/3 p-4 text-center text-[#9F9A91] cursor-pointer" :class="{ 'border-b-2 border-font-main font-bold text-font-main':active== 'finish'}" @click="filterTodo('finish')">已完成</div>
      </div>
      <ul class="bg-white">
        <li v-for="todo in todoList" :key="todo.id" class="flex items-center justify-between px-6">
          <div class="flex-grow border-b border-[#E5E5E5] py-4 mr-4">
            <input type="checkbox" :id="todo.id" :checked="todo.completed_at" @change="updateTodo(todo.id)">
            <label class="text-sm text-font-main" :for="todo.id">{{ todo.content }}</label>
          </div>
          <button @click="deleteTodo(todo.id)" v-if="!todo.completed_at" type="button" class="btn-del"></button>
        </li>
      </ul>
      <div class="flex justify-between py-6 pl-6 pr-12 text-sm">
        <p class="text-font-main">{{ processList.length }} 個待完成項目</p>
        <button type="button" class="text-[#9F9A91]" @click="deleteFinishTodos">清除已完成項目</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .home{
    background: linear-gradient(172.7deg, #FFD370 5.12%, #FFD370 53.33%, #FFD370 53.44%, #FFFFFF 53.45%, #FFFFFF 94.32%);
  }
  .active{
    border-bottom: 2px solid #333333;
  }
</style>

<script>
export default {
  data () {
    return {
      todo: {
        content: ''
      },
      token: '',
      todoList: [],
      nickname: '',
      active: '',
      processList: [],
      finishList: []
    }
  },
  methods: {
    checkLogin (token) {
      this.$http.get('https://todoo.5xcamp.us/check', { Authorization: token })
        .catch(err => {
          if (err) {
            alert('您尚未登入')
            this.$router.push('/login')
          }
        })
    },
    logout () {
      this.$http.delete('https://todoo.5xcamp.us/users/sign_out', { Authorization: this.token })
        .then(res => {
          document.cookie = 'token=; nickname=;'
          alert(res.data.message)
          this.$router.push('/login')
        })
    },
    addTodos () {
      if (this.todo.content !== '') {
        this.$http.post('https://todoo.5xcamp.us/todos', { todo: this.todo })
          .then(res => {
            this.todo.content = ''
            this.getTodos()
          })
          .catch(err => {
            console.log(err)
          })
      } else {
        alert('請輸入待辦事項')
      }
    },
    getTodos () {
      this.$http.get('https://todoo.5xcamp.us/todos')
        .then(res => {
          this.todoList = res.data.todos
          this.processList = this.todoList.filter((item) => !item.completed_at)
          this.finishList = this.todoList.filter((item) => item.completed_at)
          this.active = 'all'
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateTodo (id) {
      this.$http.patch(`https://todoo.5xcamp.us/todos/${id}/toggle`)
        .then(res => {
          this.getTodos()
        })
        .catch(err => {
          console.dir(err)
        })
    },
    deleteTodo (id) {
      this.$http.delete(`https://todoo.5xcamp.us/todos/${id}`)
        .then(res => {
          alert(res.data.message)
          this.getTodos()
        })
        .catch(err => {
          console.dir(err)
        })
    },
    deleteFinishTodos () {
      const len = this.finishList.length
      this.finishList.forEach((item, index) => {
        this.$http.delete(`https://todoo.5xcamp.us/todos/${item.id}`)
          .then(res => {
            if (index === len - 1) {
              this.getTodos()
              alert('已清除已完成')
            }
          })
      })
    },
    filterTodo (status) {
      if (status === 'finish') {
        this.todoList = this.finishList
        this.active = 'finish'
      } else if (status === 'process') {
        this.todoList = this.processList
        this.active = 'process'
      }
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1') // Eslint等號前面的斜線刪除
    this.$http.defaults.headers.common.Authorization = token // 使用.Authorization取代['Authorization'],axios改成this.$http
    if (token) {
      this.checkLogin(token)
      this.token = token
      this.nickname = document.cookie.replace(/(?:(?:^|.*;\s*)nickname\s*=\s*([^;]*).*$)|^.*$/, '$1')
    } else {
      alert('您尚未登入')
      this.$router.push('/login')
    }
    this.getTodos()
  }
}
</script>
