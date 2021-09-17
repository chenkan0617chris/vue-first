<template>
    <div id='checkbox'>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
        <br>
        <input type="radio" value='one' v-model="picked">
        <input type="radio" value='two' v-model="picked">
        <p>picked: {{ picked }}</p>
        <br>
        <select v-model="selected">
          <option v-for="item in items" :key="item.value" v-bind:value="item.value">{{ item.text }}</option>
        </select>
        <p>已经选择{{ selected }}</p>
        <button-counter
          v-for="button in buttonGroup"
          :key='button.id'
          :post='button'
          @enlarge-text='onEnlargeText'
          :style="{ fontSize: postFontSize + 'em' }"
        ></button-counter>
    </div>
</template>

<script>
import ButtonCounter from './buttonCounter'

export default {
  data () {
    return {
      checkedNames: [],
      picked: '',
      selected: '',
      items: [
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' }
      ],
      buttonGroup: [
        {id: 1, title: 'add1', content: '123'},
        {id: 2, title: 'add2', content: '123'},
        {id: 3, title: 'add3', content: '1233'}
      ],
      postFontSize: 1
    }
  },
  components: {
    ButtonCounter
  },
  methods: {
    onEnlargeText: function (fontSize) {
      this.postFontSize += fontSize
    }
  }
}
</script>
