<template>
    <div id="button-counter">
        <button @click="count++">{{ post.title }}</button>
        <p>{{ count }}</p>
        <button @click="$emit('enlarge-text', 0.1)">enlarge text</button>
        <div v-html='post.content'></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  props: ['post']
}
</script>
