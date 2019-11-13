<template lang="pug">
  section#education.resume-section.p-3.p-lg-5.d-flex.align-items-center
    .w-100
      h2.mb-5 Education
      div(v-for='(item, i) in data.list' :key='i' :class="['resume-item', 'd-flex', 'flex-column', 'flex-md-row', 'justify-content-between', i + 1 < data.list.length ? 'mb-5' : '']")
        .resume-content
          h3.mb-0 {{ item.title }}
          .subheading.mb-3 {{ item.subtitle }}
          p(v-html='item.description')
        .resume-date.text-md-right
          span.text-primary {{ item.date }}
</template>
<script>
import { mapGetters } from 'vuex'
const STORE_KEY = 'resume-data'
export default {
  name: 'ResumeEducation',
  computed: {
    ...mapGetters(STORE_KEY, {
      data: 'education'
    })
  }
}
</script>
