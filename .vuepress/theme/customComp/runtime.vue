<template>
    <div class="all">
        <div class="runtime" id="runtime"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sit:null,
        }
    },
    methods: {
        runtime(){
            //运行时间
      this.sit = setInterval(() => {
        var X = new Date("6/26/2022 00:00:00");
        var Y = new Date();
        var T = Y.getTime() - X.getTime();
        var M = 24 * 60 * 60 * 1000;
        var a = T / M;
        var A = Math.floor(a);
        var b = (a - A) * 24;
        var B = Math.floor(b);
        var c = (b - B) * 60;
        var C = Math.floor((b - B) * 60);
        var D = Math.floor((c - C) * 60);
        var sitv = document.getElementById("runtime");
        sitv.innerHTML =
          "☀️本站已运行🌙: " +
          A +
          "天⭐" +
          B +
          "小时⭐" +
          C +
          "分⭐" +
          D +
          "秒⭐";
      }, 1000);
        }
    },
    beforeDestroy() {
    clearInterval(this.sit);
    console.log(this.sit+`
    (′▽\`〃)
    (′▽\`〃)
    (′▽\`〃)
    (′▽\`〃)
    (′▽\`〃)
    (′▽\`〃)
    `);
  },
}
</script>

<style scoped>
.runtime {
  font-size: 1.2em;
  font-weight: bolder;
  text-shadow: 0px 50px 3px blanchedalmond;
  opacity: 0.7;
}
</style>