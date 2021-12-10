<template>
  <div>Hello Vue app!</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style lang="scss">
@font-face {
  font-family: "Work Sans";
  src: url("/font/WorkSans-Subset.woff2") format("woff2");
  font-style: normal;
  font-weight: 1 999;
  font-display: swap;
}

$color-bg: #1a1b1b;

:root {
  --padding-page: 0.5rem;

  --color-text: white;
  --color-bg: #{$color-bg};
}

body {
  padding: var(--padding-page);
  margin: 0;
  font-family: "Work Sans", sans-serif;
  background-color: var(--color-bg);
  color: var(--color-text);
}

p,
ul,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
}

ul {
  padding-left: 1rem;
}

* {
  box-sizing: border-box;
}
</style>
