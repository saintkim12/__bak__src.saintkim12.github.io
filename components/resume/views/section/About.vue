<template lang="pug">
  section#about.resume-section.p-3.p-lg-5.d-flex.align-items-center
    .w-100
      h1.mb-0
        | {{ data.firstName }}
        span.text-primary {{ data.lastName }}
      .subheading.mb-5
        | {{ data.address }} · {{ data.tel }} ·
        a(:href="`mailto:${data.email}`") {{ data.email }}
      p.lead.mb-5 {{ data.description }}
      .social-icons
        a(href="#")
          i.fab.fa-linkedin-in
        a(:href="data.github || '#'")
          i.fab.fa-github
        a(href="#")
          i.fab.fa-twitter
        a(href="#")
          i.fab.fa-facebook-f
</template>
<script>
import { mapGetters } from 'vuex'
const STORE_KEY = 'resume-data'
export default {
  name: 'ResumeAbout',
  computed: {
    ...mapGetters(STORE_KEY, {
      data: 'about'
    })
  }
  // data () {
  //   return {
  //     data: {}
  //   }
  // }
}
</script>
