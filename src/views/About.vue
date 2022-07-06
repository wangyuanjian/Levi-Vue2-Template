<template>
  <div class="about">
    <h1>This is an about page, {{ $t('morning') }}</h1>
    <small class="text-green-500">{{ $t('greeting', {name}) }}</small>
    <hr>
    <el-button type="success" @click="sayHello">SUCCESS</el-button>
    <el-button type="danger" @click="showLoading">LOADING...</el-button>
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

  private sayHello(): void {
    this.$message({
      message: '恭喜你，这是一条成功消息',
      type: 'success'
    });
  }

  private showLoading(): void {
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    setTimeout(() => {
      loading.close();
    }, 2000);
  }

}
</script>
