<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- output html -->
    <vue-typed-js :strings=processedMsg>
        <p class="typing"></p>
    </vue-typed-js>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    processedMsg() {
        var splitArr = this.msg.split(" ")
        splitArr.forEach((item, index, arr) =>
        {
          if(item.slice(0,1) == '*' && item.slice(-1) == '*')
          {
              arr[index] = '<strong>' + item.slice(1,-1) + '</strong>'
          }

        })
        return [splitArr.join(" ")]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
