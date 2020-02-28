<template>
  <v-app id="inspire">
    <div>
      <v-btn router to="/">about</v-btn>
      <v-btn router to="/dark">dark</v-btn>
      <v-btn router to="/Baseline">Baseline</v-btn>
      <v-btn router to="/Baseline-flipped">Baseline-flipped</v-btn>
      <v-btn router to="/centered">Centered</v-btn>
      <v-btn router to="/complex">Complex</v-btn>
      <v-btn router to="/googlecontacts"> Google-contacts</v-btn>
      <v-btn router to="/googlekeep">Keep</v-btn>
      <v-btn router to="/googleyoutube">Youtube</v-btn>
      <v-btn router to="/sandbox">Sandbox</v-btn>
    </div>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>
