<template>
  <div class="root">
  <meta charset="utf-8">
    <div class="centered">
        <div ref="printMe" class="typewriter">
          <!--div style="--aspect-ratio:9/16;"-->
          <div class="size">
            <div>
              <vue-typed-js class="centered" :strings=processedHeader :typeSpeed=headerSpeed :showCursor="false">
                <div class="header-style">
                  <p class="typing"></p>
                </div>
              </vue-typed-js>
              <vue-typed-js class="centered" :strings=processedMsg :typeSpeed=processedTextSpeed :showCursor="false">
                <div class="text-style">
                  <div class="typing"></div>
                </div>
              </vue-typed-js>
            </div>
          </div>
        </div>
    </div>
    <br>
    <button v-on:click="print">Uloz GIF</button>
    <br>
    <img :src="output">
  </div>
</template>

<script>
export default {
  name: 'Typewriter',
  props: {
    header: String,
    msg: String,
    headerSpeed: Number,
    textSpeed: Number,
    fullStopPause: Number,
    pauseAfterHeader: Number
  },
  data() {
    return {
        output: null
    }
  },
  computed: {
    processedMsg() {
        var splitArr = this.msg.trim().split(/\s+/)
        var boldStyle = '<b style="font-family: ' + "'CourierPrime-Bold'" + ';">'
        splitArr.forEach((item, index, arr) =>
        {
          if(item.slice(0,1) == '*' && item.slice(-1) == '*')
          {
              arr[index] = boldStyle + item.slice(1,-1) + '</b>'
          }
          else if (item.slice(0,1) == '*' && (item.slice(-2) == '*,' || item.slice(-2) == '*.' || item.slice(-2) == '*"'))
          {
              arr[index] = boldStyle + item.slice(1,-2) + '</b>' + item.slice(-1)
          }
          else if (item.slice(0,2) == '"*' && item.slice(-1) == '*')
          {
              arr[index] = item.slice(0,1) + boldStyle + item.slice(2,-1) + '</b>'
          }
          else if (item.slice(0,2) == '"*' && (item.slice(-2) == '*,' || item.slice(-2) == '*.' || item.slice(-2) == '*"'))
          {
              arr[index] = item.slice(0,1) + boldStyle + item.slice(2,-2) + '</b>' + item.slice(-1)
          }
          else if (item.slice(0,1) == '*' && (item.slice(-3) == '*,"' || item.slice(-2) == '*."'))
          {
              arr[index] = boldStyle + item.slice(1,-3) + '</b>' + item.slice(-1)
          }
          else if (item.slice(0,2) == '"*' && (item.slice(-2) == '*,"' || item.slice(-2) == '*."'))
          {
              arr[index] = item.slice(0,1) + boldStyle + item.slice(2,-3) + '</b>' + item.slice(-1)
          }
          
          if (arr[index].slice(-1) == '.')
          {
            arr[index] = arr[index] + ' ^' + this.fullStopPause.toString() + ' '
          }

        })

        return ["^"+ this.pauseAfterHeader.toString() + splitArr.join(" ")]
    },
    processedHeader() {
      return [this.header]
    },
    processedHeaderSpeed() {
      return this.headerSpeed
    },
    processedTextSpeed() {
      return this.textSpeed
    }
  },
  methods: {
    async print() {
      const el = this.$refs.printMe;
      const options = {
        type: 'dataURL'
      }
      this.output = await this.$html2canvas(el, options);
    }
  },
  mounted() {
    this.print()
  }
}
//var capturer = new this.$CCapture( {
//    format: 'gif', workersPath: 'js/',
//    framerate: 24,
//    verbose: true,
//    name: this.header,
//    timeLimit: 15,
//} );
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
    font-family: "Komu-A";
    src: url("../assets/Komu-A.otf");
}
@font-face {
    font-family: "CourierPrime-Regular";
    src: url("../assets/CourierPrime-Regular.ttf");
}
@font-face {
    font-family: "CourierPrime-Bold";
    src: url("../assets/CourierPrime-Bold.ttf");
}
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
.typewriter {
  width: 60%;
}
.header-style {
  color: #ffffe6;
  font-family: 'Komu-A', sans-serif;
  font-style: normal;
  font-size: 3vw;
}
.text-style {
  color: #ffffe6;
  font-family: 'CourierPrime-Regular', monospace;
  font-weight: 100;
  font-size: 1.45vw;
  text-align: justify;
  text-justify: inter-word;
  width: 90%;
}
.size {
  width: 450px;
  height: 800px;
  background: black;
}

[style*="--aspect-ratio"] > :first-child {
  width: 100%;
}
[style*="--aspect-ratio"] > img {  
  height: auto;
} 
@supports (--custom:property) {
  [style*="--aspect-ratio"] {
    position: relative;
    background: black;
    width: 100%;
  }
  [style*="--aspect-ratio"]::before {
    content: "";
    display: block;
    padding-top: calc(100% / (var(--aspect-ratio)));
  }  
  [style*="--aspect-ratio"] > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }  
}
</style>
