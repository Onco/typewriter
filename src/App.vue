<template>
  <div id="app">
  <meta charset="utf-8">
    <img alt="Do Sto Slov" src="./assets/logo.jpg">
      <div class="row">
        <div class="column">
          <form>
          <p class="table-row">
            <label for="name">Názov:</label>
            <input id="name" v-model="header">
          </p>
          <p class="table-row">
            <label for="txt">Text:</label>
            <br>
            <textarea id="txt" cols="60" rows="11" v-model="text"></textarea>
          </p>
          <p class="table-row">
            <label for="name-spd">Rýchlosť Pomenovania:</label>
            <input id="name-spd" v-model="headerSpeed">
          </p>
          <p class="table-row">
            <label for="txt-spd">Rýchlosť Textu:</label>
            <input id="txt-spd" v-model="textSpeed">
          </p>
          <p class="table-row">
            <label for="sent-pause">Pauza po vete:</label>
            0.05s
            <input id="sent-pause" type="range" min="50" max="2000" value="200" v-model="fullStopPause">
            2s
          </p>
          <p class="table-row">
            <label for="name-pause">Pauza po Pomenovaní:</label>
            0.05s
            <input id="name-pause" type="range" min="50" max="5000" value="1000" v-model="pauseAfterHeader">
            5s
          </p>
          </form>
          <button v-on:click="hideComponent">Spusti</button>
        </div>
        <div class="column">
          <h2> Náhľad: </h2>
          <Typewriter :msg="text" :header="header" :headerSpeed="headerSpeed" :textSpeed="textSpeed" :fullStopPause="fullStopPause" :pauseAfterHeader="pauseAfterHeader" :key="this.toggle"/>
          <!-- button to generate GIF / MP4 video -->
        </div>
      </div> 
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
        default: 'POMENOVANIE'
    },
    text: {
        type: String,
        default: 'Sem vlož svoj text... *hviezdičkami* označ vybrané slová...'
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
form {
  display: table;
}
.table-row {
  display: table-row;
}
label {
  display: table-cell;
}
input {
  display: table-cell;
}
.column {
  float: left;
  width: 50%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
