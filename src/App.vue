<template>

  <div class="md:w-9/12 mx-auto">

    <NavBar />

    <MainComponent />
  </div>
  <FooterComponent />
</template>

<script>
import NavBar from './components/NavBar.vue'
import MainComponent from './components/MainComponent.vue'
import FooterComponent from './components/footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    MainComponent,
    FooterComponent
}
}
</script>

<style>


</style>
