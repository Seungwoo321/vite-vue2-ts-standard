<template>
  <div>
    <h1>{{ msg }}</h1>

    <div class="card">
      <button
        type="button"
        @click="count ++"
      >
        count is {{ count }}
      </button>
      <p>
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a
        href="https://github.com/Seungwoo321/vite-vue2-ts-standard"
        target="_blank"
      >vite-vue2-ts-standard</a>, the official Vue 2.7 + Vite + Standard JS starter
    </p>
    <p>
      Learn more about IDE Support for Vue in the
      <a
        href="https://v2.vuejs.org/v2/guide/typescript.html"
        target="_blank"
      >Vue 2 TypeScript Guide</a>.
    </p>
    <p class="read-the-docs">
      Click on the Vite and Vue logos to learn more
    </p>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      count: 0
    }
  }
}

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
