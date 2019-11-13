<template lang="pug">
  section#awards.resume-section.p-3.p-lg-5.d-flex.align-items-center
    .w-100
      h2.mb-5 Awards &amp; Certifications
      ul.fa-ul.mb-0
        li(v-for='(item, i) in data.list' :key='i')
          i.fa-li.fa.fa-trophy.text-warning
          span(v-html='item')
</template>
<script>
import { mapGetters } from 'vuex'
const STORE_KEY = 'resume-data'
export default {
  name: 'ResumeAwards',
  computed: {
    ...mapGetters(STORE_KEY, {
      data: 'awards'
    })
  }
}
</script>
