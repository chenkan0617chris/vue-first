<template>
    <div id='Watch'>
        <p>ask a yes/no question:
            <input v-model="question"  >
        </p>
        <p v-if="isActive">{{answer}}</p>
        <p v-else>{{fullName}}</p>
        <div v-bind:style="styleObj" v-bind:class="[{ active: isActive } , 'nothing']"></div>
        <button @click="switchActive()">{{button}}</button>
        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username" key="username-input">
            </template>
            <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address" key="email-input">
        </template>
        <button @click="toggle()">toggle</button>
    </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
import axios from "axios";
export default {
  name: 'Watch',
  data () {
    return {
        firstName: 'chris',
        lastName: 'chen',
        answer: 'please ask a question',
        isActive: true,
        question: '',
        button: 'switch',
        styleObj: {height: '20px', background: 'blue'},
        loginType: 'username'
    }
  },
  created: function () {
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  watch: {
      question: function () {
          this.answer = 'waiting for you to stop typing'
          this.debouncedGetAnswer()
      }
  },
  methods: {
      getAnswer: function () {
          if(this.question.indexOf('?') === -1){
              this.answer = 'questions usually contain a question mark. :-)'
              return
          }
          this.answer = 'thinking...'
          axios.get('https://yesno.wtf/api')
            .then(response => {
                this.answer =response.data.answer
            })
            .catch(error => {
                this.answer = 'error' + error
            })
      },
      switchActive(){
        this.isActive = !this.isActive
    },
    toggle(){
        if(this.loginType !== 'username'){
            this.loginType = 'username'
        } else {
            this.loginType = 'email'
        }
    }
  },
  computed: {
    fullName: function () {
      return this.firstName + this.lastName
    },
  },
}
</script>
<style scoped>
    button {
        height: 20px;
    }
    .active {
        height: 20px;
        background: red !important;
    }
</style>
