<template>
  <div class="root">
  <meta charset="utf-8">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Courier+Prime">
    <div class="centered">
        <div class="typewriter">
          <div style="--aspect-ratio:9/16;">
            <div>
              <vue-typed-js class="centered" :strings=processedHeader :typeSpeed="30" :showCursor="false">
                <div class="header-style">
                  <p class="typing"></p>
                </div>
              </vue-typed-js>
              <vue-typed-js class="centered" :strings=processedMsg :typeSpeed="10" :showCursor="false">
                <div class="text-style">
                  <div class="typing"></div>
                </div>
              </vue-typed-js>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Typewriter',
  props: {
    header: String,
    msg: String
  },
  computed: {
    processedMsg() {
        var splitArr = this.msg.split(" ")
        splitArr.forEach((item, index, arr) =>
        {
          if(item.slice(0,1) == '*' && item.slice(-1) == '*')
          {
              arr[index] = '<b style="font-weight:900;">' + item.slice(1,-1) + '</b>'
          }
          else if (item.slice(0,1) == '*' && (item.slice(-2) == '*,' || item.slice(-2) == '*.' || item.slice(-2) == '*"'))
          {
              arr[index] = '<b style="font-weight:900;">' + item.slice(1,-2) + '</b>' + item.slice(-1)
          }
          else if (item.slice(0,2) == '"*' && item.slice(-1) == '*')
          {
              arr[index] = item.slice(0,1) + '<b style="font-weight:900;">' + item.slice(2,-1) + '</b>'
          }
          else if (item.slice(0,2) == '"*' && (item.slice(-2) == '*,' || item.slice(-2) == '*.' || item.slice(-2) == '*"'))
          {
              arr[index] = item.slice(0,1) + '<b style="font-weight:900;">' + item.slice(2,-2) + '</b>' + item.slice(-1)
          }
          else if (item.slice(0,1) == '*' && (item.slice(-3) == '*,"' || item.slice(-2) == '*."'))
          {
              arr[index] = '<b style="font-weight:900;">' + item.slice(1,-3) + '</b>' + item.slice(-1)
          }
          else if (item.slice(0,2) == '"*' && (item.slice(-2) == '*,"' || item.slice(-2) == '*."'))
          {
              arr[index] = item.slice(0,1) + '<b style="font-weight:900;">' + item.slice(2,-3) + '</b>' + item.slice(-1)
          }
          
          if (arr[index].slice(-1) == '.')
          {
            arr[index] = arr[index] + ' ^200 '
          }

        })
        return ["^1000" + splitArr.join(" ")]
    },
    processedHeader() {
      return [this.header]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
    font-family: "Komu-A";
    src: url("C:/Users/Onco/Desktop/Works/typewriter-to-video/src/assets/Komu-A.otf");
}
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}
.typewriter {
  width: 30%;
}
.header-style {
  color: #ffffe6;
  font-family: 'Komu-A', sans-serif;
  font-style: normal;
  font-size: 3vw;
}
.text-style {
  color: #ffffe6;
  font-family: 'Courier Prime', serif;
  font-style: normal;
  font-size: 1.5vw;
  text-align: justify;
  text-justify: inter-word;
  width: 90%;
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
    padding-bottom: calc(100% / (var(--aspect-ratio)));
  }  
  [style*="--aspect-ratio"] > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }  
}
</style>
