<template lang="pug">
  nav#sideNav.navbar.navbar-expand-lg.navbar-dark.bg-primary.fixed-top
    a.navbar-brand.js-scroll-trigger(href='#page-top')
      span.d-block.d-lg-none {{ title }}
      span.d-none.d-lg-block
        img.img-fluid.img-profile.rounded-circle.mx-auto.mb-2(src='https://avatars1.githubusercontent.com/u/45479131?s=460&v=4' alt='')
    button.navbar-toggler(v-b-toggle.navbarsupportedcontent='' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
      span.navbar-toggler-icon
    // <div class="collapse navbar-collapse" id="navbarSupportedContent">
    b-collapse#navbarSupportedContent(is-nav)
      ul.navbar-nav
        li.nav-item(v-for='(item, i) in menu' :key='i')
          a.nav-link.js-scroll-trigger(:href='`#${item.toLowerCase()}`') {{ item }}
</template>
<script>
import { mapGetters } from 'vuex'
const STORE_KEY = 'resume-data'
export default {
  name: 'ResumeNavBar',
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapGetters(STORE_KEY, {
      name: 'name',
      title: 'title'
    })
  // },
  // created() {
  //   console.log(this.$store)
  }
}
</script>
