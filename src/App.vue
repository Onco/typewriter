<template>
  <div id="app">
  <meta charset="utf-8">
    <img alt="Do Sto Slov" src="./assets/logo.jpg">
    <p>Názov:<br><input v-model="header" /></p>
    <p>Text:<br><input v-model="text" /></p>
    <p>Title Speed: <input v-model="headerSpeed"></p>
    <p>Text Speed: <input v-model="textSpeed"></p>
    <p>Full-Stop Pause: 0.05s <input type="range" min="50" max="2000" value="200" v-model="fullStopPause"> 2s </p>
    <p>Pause After Header: 0.05s <input type="range" min="50" max="5000" value="1000" v-model="pauseAfterHeader"> 5s </p>
    <button v-on:click="hideComponent">Spusti</button>
    <Typewriter :msg="text" :header="header" :headerSpeed="headerSpeed" :textSpeed="textSpeed" :fullStopPause="fullStopPause" :pauseAfterHeader="pauseAfterHeader" :key="this.toggle"/>
    <!-- button to generate GIF / MP4 video -->
  </div>
</template>

<script>
import Typewriter from './components/Typewriter.vue'

export default {
  name: 'App',
  props: {
    toggle: {
        type: Boolean,
        default: true
    },
    header: {
        type: String,
        default: 'NÁZOV'
    },
    text: {
        type: String,
        default: 'Sem vlož svoj text...'
    },
    headerSpeed: {
        type: Number,
        default: 30
    },
    textSpeed: {
        type: Number,
        default: 10
    },
    fullStopPause: {
        type: Number,
        default: 200
    },
    pauseAfterHeader: {
        type: Number,
        default: 1000
    },
  },
  components: {
    Typewriter
  },
  methods: {
    hideComponent: function () {
      this.toggle = !this.toggle
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
