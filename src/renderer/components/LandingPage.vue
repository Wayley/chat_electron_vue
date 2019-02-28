<template>
  <div>
    <main>
      <div class="left-side">
        <p>this is your app information</p>
        <system-information></system-information>
      </div>
    </main>
  </div>
</template>

<script>
import SystemInformation from './LandingPage/SystemInformation'

export default {
  name: 'landing-page',
  components: { SystemInformation },
  methods: {}
}
</script>
