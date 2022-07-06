<template>
  <div class="about">
    <h1>This is an about page, {{ $t('morning') }}</h1>
    <small class="text-green-500">{{ $t('greeting', {name}) }}</small>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class About extends Vue {
  
  private name: string = 'Levi';

}
</script>
