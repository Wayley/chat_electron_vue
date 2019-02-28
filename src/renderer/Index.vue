<template>
  <div class="wrapper">
    <p class="wz-welcome">Welcome {{name}}</p>

    <button @click="openLink(githubProfile)">打开Github</button>
    <landing-page></landing-page>
  </div>
</template>
<script>
import LandingPage from '@/components/LandingPage'

export default {
  components: { LandingPage },
  data () {
    return {
      name: 'wz',
      githubProfile: 'https://github.com/Wayley'
    }
  },
  methods: {
    openLink (url) {
      this.$electron.shell.openExternal(url)
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
$brand-primary: #48abaf;
.wz-welcome {
  color: $brand-primary;
}
</style>
