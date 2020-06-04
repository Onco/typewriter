<template>
  <div id="app">
  <meta charset="utf-8">
    <img alt="Do Sto Slov" src="./assets/logo.jpg">
    <!-- input box -->
    <!-- animation -->
    <Typewriter msg='"*Spisovateľ* nechtiac lomcoval perom ako *dieťa*, ktoré sa snaží zbaviť *rôsolu* z údenej *nátierky*. Jeden den plus jedna noc priniesli nejednu udalosť na jeden život. Ešteže onoho času priniesli Konštantín a Metod *hlaholiku*. Može podať svedectvo o rozbúrených vlnách vnútra, prelínavých prúdoch javov a ľudí či kráse nočnej oblohy, kde každá hviezda pláva *sasanku* zľava *doľava*," začínala kniha na stole s igelitovým obrusom. *Anča* ju zabuchla a radšej si zapálila cigaretu. "Títo hovno vedia o tom, čo je život," odpľula si. Vyzerala pri tom na Fera. Ruky pevné, v noci spí. *Trúdik* sa vedel obracať ako normálni ľudia.' header="ZMYSEL ŽIVOTA"/>
    <!-- button to generate GIF / MP4 video -->
  </div>
</template>

<script>
import Typewriter from './components/Typewriter.vue'

export default {
  name: 'App',
  components: {
    Typewriter
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
