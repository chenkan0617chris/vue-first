<template>
    <div id="todo-list-example">
        <form v-on:submit.prevent="addNewTodo">
            <label>{{ label }}</label>
            <input
                v-model="newTodoText"
                id="new-todo"
                placeholder="feed the cat"
            >
            <button>add</button>
        </form>
        <ul>
            <todo-item
                v-for="(todo, index) in todos"
                v-bind:key="todo.id"
                v-bind:title="todo.tile"
                v-on:remove="todos.splice(index, 1)"
            ></todo-item>
        </ul>
        <alert-box>
          save
        </alert-box>
    </div>
</template>

<script>
import ListItem from './ListItem'
import alertBox from './alertBox'

export default {
  data () {
    return {
      label: 'add todos',
      newTodoText: '',
      todos: []
    }
  },
  components: {
    ListItem,
    alertBox
  }
}
</script>
