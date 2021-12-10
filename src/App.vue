<template>
  <WelcomeScreen />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WelcomeScreen from '@/components/screens/WelcomeScreen.vue'

export default defineComponent({
  name: 'App',
  components: {
    WelcomeScreen
  }
})
</script>

<style lang="scss">
@use 'sass:color';

@font-face {
  font-family: "Work Sans";
  src: url("/font/WorkSans-Subset.woff2") format("woff2");
  font-style: normal;
  font-weight: 1 999;
  font-display: swap;
}

$color-accent: #5ea6ac;
$color-bg: #1a1b1b;

:root {
  --padding-page: 0.5rem;
  --radius-default: 10px;

  --color-text: white;
  --color-bg: #{$color-bg};
  --color-accent: #{$color-accent};
  --color-text-accent: #{color.scale($color-accent, $lightness: 40%, $saturation: 25%)};
  --color-button-border: #{color.scale($color-accent, $saturation: -80%)};
  --color-button-border-highlight: #{color.scale($color-accent, $lightness: 75%)};
  --color-button-border-empty: #{color.scale($color-accent, $lightness: -40%, $saturation: -80%)};
  --color-button-bg: #{color.scale($color-bg, $lightness: 6%)};
  --color-info: #eee;
  --color-logo-accent: #ffc0cb;
}

body {
  padding: var(--padding-page);
  margin: 0;
  font-family: 'Work Sans', sans-serif;
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
