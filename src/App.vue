<template>
  <div id="app">
  <meta charset="utf-8">
    <img alt="Do Sto Slov" src="./assets/logo.jpg">
      <div class="row">
        <div class="column">
          <div>
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
            <label for="name-spd">Rýchlosť názvu:</label>
            <input id="name-spd" v-model="headerSpeed">
          </p>
          <p class="table-row">
            <label for="txt-spd">Rýchlosť textu:</label>
            <input id="txt-spd" v-model="textSpeed">
          </p>
          <p class="table-row">
            <label for="sent-pause">Pauza po vete:</label>
            0.05s
            <input id="sent-pause" type="range" min="50" max="2000" value="200" v-model="fullStopPause">
            2s
          </p>
          <p class="table-row">
            <label for="name-pause">Pauza po názve:</label>
            0.05s
            <input id="name-pause" type="range" min="50" max="5000" value="1000" v-model="pauseAfterHeader">
            5s
          </p>
          </form>
          <br>
          <button v-on:click="changeToggle">Spusti</button>
          <br>
          <br>
          <button v-on:click="captureVideo">Uloz GIF</button>
          </div>
        </div>
        <div class="column">
          <div>
          <h2> Náhľad: </h2>
          <!--canvas id="cv" width="450" height="800"></canvas-->  
          <Typewriter :msg="text" :header="header" :headerSpeed="headerSpeed" :textSpeed="textSpeed" :fullStopPause="fullStopPause" :pauseAfterHeader="pauseAfterHeader" :key="this.toggle"/>
          <!-- button to generate GIF / MP4 video -->
          </div>
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
    changeToggle: function () {
      this.toggle = !this.toggle
      //this.drawCanvas()
    },
    captureVideo: function () {
    },
    drawCanvas: function () {
      var cv = document.getElementById("cv");
      var ctx = cv.getContext('2d');

      var story1 = {txt:this.header, 
                  storycount:0,
                  linecount:0,
                  lineheight:30,
                  xpos:10,
                  ypos:50,
                  startY:50,
                  speed:2,
                  animate:true,
                  complete:false,
                  storyarr:[]};
      
      var story2 = {txt:this.text,
                  storycount:0,
                  linecount:0,
                  lineheight:30,
                  xpos:10,
                  ypos:150,
                  startY:150,
                  speed:2,
                  animate:true,
                  complete:false,
                  storyarr:[]};
      
      setInterval(doAnimation, 50);
      var canvasWidth = 450;
      var canvasHeight = 800;
      ctx.font = "3vw Komu-A";
      story1.storyarr = getLines(ctx, story1.txt, 10, 450);
      ctx.font= "1.45vw CourierPrime-Regular";
      story2.storyarr = getLines(ctx, story2.txt, 10, 450);
      
      function doAnimation(){
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        ctx.fillStyle = "#ffffe6";
        ctx.font = "3vw Komu-A";
        animateTxt(story1,ctx); 
        if (story1.complete){
          ctx.font= "1.45vw CourierPrime-Regular";
          story2.startY = story1.ypos + 50;
          animateTxt(story2,ctx);  
        }
      }
      
      function getLines(context, str, x, maxWidth) {
        //adapt from https://www.html5canvastutorials.com/tutorials/html5-canvas-wrap-text-tutorial/
        var words = str.split(' ');
        var lineNumber = 0;
        var linesarr = [];
        var lineOfText = "";
        for(var n=0; n<words.length; n++) {
          var checkEndOfLine = lineOfText + words[n] + ' ';
          var checkTextWidth = context.measureText(checkEndOfLine);
          var textWidth = checkTextWidth.width;    
          
          if(textWidth > (maxWidth-10) ) {
            lineNumber++;
            lineOfText = words[n] + ' ';
          } else { 
            lineOfText = checkEndOfLine; 
          }
          linesarr[lineNumber] = lineOfText;
        }
        return linesarr;
      } 
      
      function animateTxt(story,context){
        if(story.animate){
        story.storycount+=story.speed;
        var storytxt = story.storyarr[story.linecount];
        story.ypos = story.startY + story.lineheight * story.linecount;
        if (story.storycount > storytxt.length-1){
          story.storycount = 0;
          story.linecount++;
          
          if(story.linecount > story.storyarr.length-1){
            //clearInterval(intervalID);
            story.animate = false;
            story.complete = true;
          }
        }
        //context.clearRect(0, 0, canvasWidth, canvasHeight);
          context.fillText(storytxt.substr(0, story.storycount), story.xpos, story.ypos);  
        }
          //Write Out The Previous Lines Too  
        for(var i=0; i<story.storyarr.length; i++){
          if(i < story.linecount){
            context.fillText(story.storyarr[i], story.xpos, (story.startY + (story.lineheight*i)) ) ;
          }
        }  
      }

    }
  }
}
</script>

<style>
@font-face {
    font-family: "Komu-A";
    src: url("assets/Komu-A.otf");
}
@font-face {
    font-family: "CourierPrime-Regular";
    src: url("assets/CourierPrime-Regular.ttf");
}
@font-face {
    font-family: "CourierPrime-Bold";
    src: url("assets/CourierPrime-Bold.ttf");
}
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
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
canvas {
  border:1px solid #f00;
  background: black;
}
</style>
