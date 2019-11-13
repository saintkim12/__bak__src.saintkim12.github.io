<template lang="pug">
  fragment
    nav-bar(:menu="['About', 'Experience', 'Education', 'Skills', 'Interests', 'Awards']")
    .container-fluid.p-0
      section-about
      hr.m-0
      section-experience
      hr.m-0
      section-education
      hr.m-0
      section-skills
      hr.m-0
      section-interests
      hr.m-0
      section-awards
      | X
</template>
<style src="@fortawesome/fontawesome-free/css/all.min.css"></style>
<style src="./css/resume.min.css"></style>
<script>
import NavBar from './layout/NavBar'
const sections = {
  SectionAbout: () => import('./views/section/About'),
  SectionExperience: () => import('./views/section/Experience'),
  SectionEducation: () => import('./views/section/Education'),
  SectionSkills: () => import('./views/section/Skills'),
  SectionInterests: () => import('./views/section/Interests'),
  SectionAwards: () => import('./views/section/Awards')
}
export default {
  // name: 'home',
  components: Object.assign({
    NavBar
  }, sections)
}
</script>
