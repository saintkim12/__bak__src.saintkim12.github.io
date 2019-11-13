<template lang="pug">
  section#skills.resume-section.p-3.p-lg-5.d-flex.align-items-center
    .w-100
      h2.mb-5 Skills
      .subheading.mb-3 Programming Languages &amp; Tools
      ul.list-inline.dev-icons
        li.list-inline-item(v-for='(item, i) in data.skillList' :key='i')
          i.fab.fa-html5(:id='`skills-${item.name || item}`' v-if="item === 'html' || item.name === 'html'")
          i.fab.fa-css3-alt(:id='`skills-${item.name || item}`' v-else-if="item === 'css' || item.name === 'css'")
          i.fab.fa-js-square(:id='`skills-${item.name || item}`' v-else-if="item === 'js' || item.name === 'js'")
          i.fab.fa-angular(:id='`skills-${item.name || item}`' v-else-if="item === 'angular' || item.name === 'angular'")
          i.fab.fa-react(:id='`skills-${item.name || item}`' v-else-if="item === 'react' || item.name === 'react'")
          i.fab.fa-vuejs(:id='`skills-${item.name || item}`' v-else-if="item === 'vue.js' || item.name === 'vue.js'")
          i.fab.fa-node-js(:id='`skills-${item.name || item}`' v-else-if="item === 'node.js' || item.name === 'node.js'")
          i.fab.fa-sass(:id='`skills-${item.name || item}`' v-else-if="item === 'sass' || item.name === 'sass'")
          i.fab.fa-less(:id='`skills-${item.name || item}`' v-else-if="item === 'less' || item.name === 'less'")
          i.fab.fa-java(:id='`skills-${item.name || item}`' v-else-if="item === 'java' || item.name === 'java'")
          i.fab.fa-wordpress(:id='`skills-${item.name || item}`' v-else-if="item === 'wordpress' || item.name === 'wordpress'")
          i.fab.fa-gulp(:id='`skills-${item.name || item}`' v-else-if="item === 'gulp' || item.name === 'gulp'")
          i.fab.fa-grunt(:id='`skills-${item.name || item}`' v-else-if="item === 'grunt' || item.name === 'grunt'")
          i.fas.fa-database(:id='`skills-${item.name || item}`' v-else-if="item === 'database' || item.name === 'database'")
          i.fas.fa-laptop-code(:id='`skills-${item.name || item}`' v-else='')
          template(v-if='item')
            b-tooltip(:target='`skills-${item.name || item}`') {{ item.description || item.name || item }}
      .subheading.mb-3 Workflow
      ul.fa-ul.mb-0
        li(v-for='(item, i) in data.workFlowList' :key='i')
          i.fa-li.fa.fa-check
          span(v-html='item')
</template>
<script>
import { mapGetters } from 'vuex'
const STORE_KEY = 'resume-data'
export default {
  name: 'ResumeSkills',
  computed: {
    ...mapGetters(STORE_KEY, {
      data: 'skills'
    })
  }
}
</script>
