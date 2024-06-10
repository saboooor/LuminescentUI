<template>
  <div>
    <input
      placeholder="Your name"
      :value="name"
      @change="name = $event.target.value"
    />
    <div>Hello, {{ name }}!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "greet",

  data() {
    return { name: "" };
  },
});
</script>