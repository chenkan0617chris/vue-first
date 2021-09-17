<template>
  <div class="hello">
    <img src="../assets/test.png">
    <h1>{{ msg }}</h1>
    <input type="radio" key="a" value="a" v-model="radio">
    <label>a</label>
    <input type="radio" key="b" value="b" v-model="radio">
    <label>b</label>
    <!-- <h2 v-bind:title='message'>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
          v-if='seen'
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          :[key]='url'
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>{{Ecosystem}}</h2>
    <h2>{{reverseMessages}}</h2>
    <router-link to='/watch'><button @click='reverseMessage'>reverse</button></router-link>
    <input v-model="Ecosystem" />
    <ul>
      <li v-bind:key="item.text" v-for='item in list'>
        <a>{{ item.text }}</a>
      </li>
    </ul>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
    <check-box></check-box> -->
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
import checkBox from './Checkbox.component';
export default {
  name: 'HelloWorld',
  data () {
    return {
      key: (typeof Ecosystem === 'string') ? 'href' : 'title',
      url: 'https://twitter.com/vuejs',
      msg: 'Welcome to myApp',
      message: '页面加载于' + new Date().toLocaleString(),
      seen: true,
      list: [
        { text: 'vue-router' },
        { text: 'vue-loader' },
        { text: 'awesome-vue1' }
      ],
      Ecosystem: 'Ecosystem',
      checked: false,
      radio: 'a',
    }
  },
  components: {
    checkBox
  },
  methods: {
    reverseMessage: function () {
      this.Ecosystem = this.Ecosystem.split('').reverse().join('')
    }
  },
  computed: {
    reverseMessages: function () {
      return this.Ecosystem.split('').reverse().join('')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.fade-enter-active, .fade-leave-active{
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
