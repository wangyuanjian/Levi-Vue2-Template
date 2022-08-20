<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button class="p-1 ml-2" @click="changeTheme('light')">切换浅色</button>
      <button class="p-1 ml-2" @click="changeTheme('dark')">切换深色</button>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {
  private changeTheme(theme: string) {
    this.$store.dispatch('changeTheme', theme);
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
}

#nav {
  padding: 30px;
}
</style>
