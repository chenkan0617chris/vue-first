<template>
  <div id='forDemo'>
    <ul>
      <li v-for="item in items" :key="item.message">{{ item.message }}</li>
    </ul>
    <ul>
      <li v-for="(value, name, index) in obj" :key="value">{{ index }}  {{ name }} : {{ value }}</li>
    </ul>
    <p>{{computeCaseA}}</p>
  </div>
</template>
<script>
export default {
  name: 'forDemo',
  data () {
    return {
      items: [
        { id: 1, message: '1' },
        { id: 2, message: '2' },
        { id: 3, message: '3' }
      ],
      obj: {
        age: 26,
        gender: 'male',
        name: 'chris'
      }
    }
  },
  computed: {
    computeCaseA () {
      return this.obj.age + 1
    }
  }
}
</script>
