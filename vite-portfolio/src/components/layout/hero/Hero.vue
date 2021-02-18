<template>
  <div class="hero" :style="heroStyles">
    <slot name="heading" />
    <slot name="tagline" />
    <slot name="content" />
  </div>
</template>

<script lang="ts">
import { computed, PropType } from 'vue';
import { HeroConfiguration } from './hero';

export default {
  props: {
    confiuration: {
      type: Object as PropType<HeroConfiguration>,
      default: {} as PropType<HeroConfiguration>
    }
  },

  setup(props: HeroConfiguration) {

    const heroStyles = computed(() => {
      return {
        'background-image': `url(${props.backgroundImage})`,
        'background-position': 'center',
        'background-size': 'cover',
        'background-color': props.backgroundColor,
      };
    });

    return {
      heroStyles
    }
  }
}
</script>