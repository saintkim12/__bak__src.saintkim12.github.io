<template>
  <fragment>
    <nav-bar :menu="['About', 'Experience', 'Education', 'Skills', 'Interests', 'Awards']"/>
    <div class="container-fluid p-0">
      <section-about/>
      <hr class="m-0" />
      <section-experience/>
      <hr class="m-0" />
      <section-education/>
      <hr class="m-0" />
      <section-skills/>
      <hr class="m-0" />
      <section-interests/>
      <hr class="m-0" />
      <section-awards/>
    </div>
  </fragment>
</template>

<script>
import '@/_template/startbootstrap-resume/vendor/bootstrap/css/bootstrap.min.css'
import '@/_template/startbootstrap-resume/vendor/fontawesome-free/css/all.min.css'
import '@/_template/startbootstrap-resume/css/resume.min.css'
import NavBar from '@/components/layout/NavBar'
const sections = {
  SectionAbout: () => import('@/views/section/About'),
  SectionExperience: () => import('@/views/section/Experience'),
  SectionEducation: () => import('@/views/section/Education'),
  SectionSkills: () => import('@/views/section/Skills'),
  SectionInterests: () => import('@/views/section/Interests'),
  SectionAwards: () => import('@/views/section/Awards')
}
export default {
  name: 'home',
  components: Object.assign({
    NavBar
  }, sections)
}
</script>
