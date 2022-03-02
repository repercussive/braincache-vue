<template>
  <button>
    <span class="front">
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Button'
})
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  user-select: none;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: var(--radius-default);
  background-color: var(--color-button-border);
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  font-weight: 450;
  line-height: 1rem;
  transition: all 100ms;
  -webkit-tap-highlight-color: transparent;

  .front {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 2.5rem;
    padding: 0 1em;
    margin-top: -2px;
    border-radius: var(--radius-default);
    border: solid 2px var(--color-button-border);
    background-color: var(--color-button-bg);
    transform: translateY(-3px);
    transition: all 100ms;
  }

  &:active {
    top: 3px;
    .front {
      transform: translateY(0);
    }
  }

  &:disabled {
    pointer-events: none;
  }

  &:not(:disabled) {
    &:active,
    &:hover {
      @media (hover: hover) {
        --color-button-border: var(--color-button-border-highlight);
      }
    }
  }
}
</style>