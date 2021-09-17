<template>
    <div>
        <transition-group name="list">
            <span class="listitem" v-for="item in list" v-bind:key="item">{{item}} </span>
        </transition-group>
        <div class="btnDiv">
          <button @click="add">add</button>
          <button @click="remove">remove</button>
        </div>
        <transition-group name="flip" tag="ul">
          <li v-for="item in list" :key="item">{{item}}</li>
        </transition-group>
        <div>
          <button @click="flip">filp</button>
        </div>
        <div class="boxDiv">
          <transition-group class="transitionBox" name="transitionBox">
            <div class="box" v-for="item in items" :key="item.id">
              {{item.number}}
            </div>
          </transition-group>
          <button @click="shuffle">shuffle</button>
        </div>
        <div>
          <input v-model="number" type="number">
          <p>{{showNumber}}</p>
        </div>
    </div>
</template>

<script>
import _ from 'underscore'
import gsap from 'gsap'
export default {
  data () {
    return {
      number: 0,
      newNumber: 0,
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      items: Array.apply(null, {length: 81}).map(function (_, index) {
        return {
          id: index,
          number: (index % 9) + 1
        }
      }),
      nextNum: 10
    }
  },
  methods: {
    randomIndex: function () {
      return Math.floor(Math.random() * 10)
    },
    add: function () {
      this.list.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function () {
      this.list.splice(this.randomIndex(), 1)
    },
    flip: function () {
      this.list = _.shuffle(this.list)
    },
    shuffle: function () {
      this.items = _.shuffle(this.items)
    }
  },
  computed: {
    showNumber: function () {
      return this.newNumber.toFixed(0)
    }
  },
  watch: {
    number: function (newValue) {
      gsap.to(this.$data, {duration: 0.5, newNumber: newValue})
    }
  }
}
</script>

<style scoped>
.listitem{
    display: inline-block;
    margin-right: 10px;
    transition: all 1s;
}
.list-leave-active{
    position: absolute;
}
.list-enter, .list-leave-to{
    opacity: 0;
    transform: translateY(30px);
}
.btnDiv{
  margin-top: 10px;
}
.flip-move{
  transition: all 1s;
}
.boxDiv{
  margin-top: 30px;
  align-items: center;
  flex-direction: column;
  display: flex;
}
.box{
  border: 1px solid;
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.boxGroup{
  display: flex;
  justify-content: center;
}
.transitionBox{
  display: flex;
  max-width: 288px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.transitionBox-move{
  transition: all 1s;
}
</style>
