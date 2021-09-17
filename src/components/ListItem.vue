<template>
  <li>
      {{ title }}
      <button v-on:click="$emit('remove')"></button>
  </li>
</template>

<script>
export default {
  name: 'todo-item',
  data () {
    return {
      newTodoText: '',
      todos: [
        {
          id: 1,
          title: 'do the dishes'
        }
      ]
    }
  }
}
</script>

<style>

</style>
