<template lang="pug">
  section#interests.resume-section.p-3.p-lg-5.d-flex.align-items-center
    .w-100
      h2.mb-5 Interests
      p(v-for='(item, i) in data.list' :key='i' :class="{ 'mt-0': i !== 0 }" v-html='item')
</template>
<script>
import { mapGetters } from 'vuex'
const STORE_KEY = 'resume-data'
export default {
  name: 'ResumeInterests',
  computed: {
    ...mapGetters(STORE_KEY, {
      data: 'interests'
    })
  }
}
</script>
