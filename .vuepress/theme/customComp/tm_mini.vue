<template>
  <div class="tm">
    <div class="box box1"></div>
    <div class="box box2"></div>
    <div class="box box3"></div>
    <div class="box box4"></div>
    <div class="box box5"></div>
    <div class="box box6"></div>
    <div class="box box7"></div>
    <div class="box box8"></div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      sit: null
    };
  },
  methods: {},
  mounted() {
    this.sit = setInterval(() => {
      // 获取当前时间并保留第一位数字
      let date = new Date();
      let hour_s = parseInt(date.getHours() / 10);
      let hour_g = parseInt(date.getHours() % 10);
      let minute_s = parseInt(date.getMinutes() / 10);
      let minute_g = parseInt(date.getMinutes() % 10);
      let second_s = parseInt(date.getSeconds() / 10);
      let second_g = parseInt(date.getSeconds() % 10);
      //判断赋值
      switch (hour_s) {
        case 0:
          $(".box1").addClass("r0");
          $(".box1").removeClass("r1");
          $(".box1").removeClass("r2");
          break;
        case 1:
          $(".box1").addClass("r1");
          $(".box1").removeClass("r0");
          $(".box1").removeClass("r2");
          break;
        case 2:
          $(".box1").addClass("r2");
          $(".box1").removeClass("r0");
          $(".box1").removeClass("r1");
          break;
      }
      switch (hour_g) {
        case 0:
          $(".box2").addClass("r0");
          $(".box2").removeClass("r1");
          $(".box2").removeClass("r2");
          $(".box2").removeClass("r3");
          $(".box2").removeClass("r4");
          $(".box2").removeClass("r5");
          $(".box2").removeClass("r6");
          $(".box2").removeClass("r7");
          $(".box2").removeClass("r8");
          $(".box2").removeClass("r9");
          break;
        case 1:
          $(".box2").addClass("r1");
          $(".box2").removeClass("r0");
          $(".box2").removeClass("r2");
          $(".box2").removeClass("r3");
          $(".box2").removeClass("r4");
          $(".box2").removeClass("r5");
          $(".box2").removeClass("r6");
          $(".box2").removeClass("r7");
          $(".box2").removeClass("r8");
          $(".box2").removeClass("r9");
          break;
        case 2:
          $(".box2").addClass("r2");
          $(".box2").removeClass("r1");
          $(".box2").removeClass("r0");
          $(".box2").removeClass("r3");
          $(".box2").removeClass("r4");
          $(".box2").removeClass("r5");
          $(".box2").removeClass("r6");
          $(".box2").removeClass("r7");
          $(".box2").removeClass("r8");
          $(".box2").removeClass("r9");
          break;
        case 3:
          $(".box2").addClass("r3");
          $(".box2").removeClass("r1");
          $(".box2").removeClass("r2");
          $(".box2").removeClass("r0");
          $(".box2").removeClass("r4");
          $(".box2").removeClass("r5");
          $(".box2").removeClass("r6");
          $(".box2").removeClass("r7");
          $(".box2").removeClass("r8");
          $(".box2").removeClass("r9");
          break;
        case 4:
          $(".box2").addClass("r4");
          $(".box2").removeClass("r1");
          $(".box2").removeClass("r2");
          $(".box2").removeClass("r3");
          $(".box2").removeClass("r0");
          $(".box2").removeClass("r5");
          $(".box2").removeClass("r6");
          $(".box2").removeClass("r7");
          $(".box2").removeClass("r8");
          $(".box2").removeClass("r9");
          break;
        case 5:
          $(".box2").addClass("r5");
          $(".box2").removeClass("r1");
          $(".box2").removeClass("r2");
          $(".box2").removeClass("r3");
          $(".box2").removeClass("r4");
          $(".box2").removeClass("r0");
          $(".box2").removeClass("r6");
          $(".box2").removeClass("r7");
          $(".box2").removeClass("r8");
          $(".box2").removeClass("r9");
          break;
        case 6:
          $(".box2").addClass("r6");
          $(".box2").removeClass("r1");
          $(".box2").removeClass("r2");
          $(".box2").removeClass("r3");
          $(".box2").removeClass("r4");
          $(".box2").removeClass("r5");
          $(".box2").removeClass("r0");
          $(".box2").removeClass("r7");
          $(".box2").removeClass("r8");
          $(".box2").removeClass("r9");
          break;
        case 7:
          $(".box2").addClass("r7");
          $(".box2").removeClass("r1");
          $(".box2").removeClass("r2");
          $(".box2").removeClass("r3");
          $(".box2").removeClass("r4");
          $(".box2").removeClass("r5");
          $(".box2").removeClass("r6");
          $(".box2").removeClass("r0");
          $(".box2").removeClass("r8");
          $(".box2").removeClass("r9");
          break;
        case 8:
          $(".box2").addClass("r8");
          $(".box2").removeClass("r1");
          $(".box2").removeClass("r2");
          $(".box2").removeClass("r3");
          $(".box2").removeClass("r4");
          $(".box2").removeClass("r5");
          $(".box2").removeClass("r6");
          $(".box2").removeClass("r7");
          $(".box2").removeClass("r0");
          $(".box2").removeClass("r9");
          break;
        case 9:
          $(".box2").addClass("r9");
          $(".box2").removeClass("r1");
          $(".box2").removeClass("r2");
          $(".box2").removeClass("r3");
          $(".box2").removeClass("r4");
          $(".box2").removeClass("r5");
          $(".box2").removeClass("r6");
          $(".box2").removeClass("r7");
          $(".box2").removeClass("r8");
          $(".box2").removeClass("r0");
          break;
      }
      switch (minute_s) {
        case 0:
          $(".box4").addClass("r0");
          $(".box4").removeClass("r1");
          $(".box4").removeClass("r2");
          $(".box4").removeClass("r3");
          $(".box4").removeClass("r4");
          $(".box4").removeClass("r5");
          break;
        case 1:
          $(".box4").addClass("r1");
          $(".box4").removeClass("r0");
          $(".box4").removeClass("r2");
          $(".box4").removeClass("r3");
          $(".box4").removeClass("r4");
          $(".box4").removeClass("r5");
          break;
        case 2:
          $(".box4").addClass("r2");
          $(".box4").removeClass("r1");
          $(".box4").removeClass("r0");
          $(".box4").removeClass("r3");
          $(".box4").removeClass("r4");
          $(".box4").removeClass("r5");
          break;
        case 3:
          $(".box4").addClass("r3");
          $(".box4").removeClass("r1");
          $(".box4").removeClass("r2");
          $(".box4").removeClass("r0");
          $(".box4").removeClass("r4");
          $(".box4").removeClass("r5");
          break;
        case 4:
          $(".box4").addClass("r4");
          $(".box4").removeClass("r1");
          $(".box4").removeClass("r2");
          $(".box4").removeClass("r3");
          $(".box4").removeClass("r0");
          $(".box4").removeClass("r5");
          break;
        case 5:
          $(".box4").addClass("r5");
          $(".box4").removeClass("r1");
          $(".box4").removeClass("r2");
          $(".box4").removeClass("r3");
          $(".box4").removeClass("r4");
          $(".box4").removeClass("r0");
          break;
      }
      switch (minute_g) {
        case 0:
          $(".box5").addClass("r0");
          $(".box5").removeClass("r1");
          $(".box5").removeClass("r2");
          $(".box5").removeClass("r3");
          $(".box5").removeClass("r4");
          $(".box5").removeClass("r5");
          $(".box5").removeClass("r6");
          $(".box5").removeClass("r7");
          $(".box5").removeClass("r8");
          $(".box5").removeClass("r9");
          break;
        case 1:
          $(".box5").addClass("r1");
          $(".box5").removeClass("r0");
          $(".box5").removeClass("r2");
          $(".box5").removeClass("r3");
          $(".box5").removeClass("r4");
          $(".box5").removeClass("r5");
          $(".box5").removeClass("r6");
          $(".box5").removeClass("r7");
          $(".box5").removeClass("r8");
          $(".box5").removeClass("r9");
          break;
        case 2:
          $(".box5").addClass("r2");
          $(".box5").removeClass("r1");
          $(".box5").removeClass("r0");
          $(".box5").removeClass("r3");
          $(".box5").removeClass("r4");
          $(".box5").removeClass("r5");
          $(".box5").removeClass("r6");
          $(".box5").removeClass("r7");
          $(".box5").removeClass("r8");
          $(".box5").removeClass("r9");
          break;
        case 3:
          $(".box5").addClass("r3");
          $(".box5").removeClass("r1");
          $(".box5").removeClass("r2");
          $(".box5").removeClass("r0");
          $(".box5").removeClass("r4");
          $(".box5").removeClass("r5");
          $(".box5").removeClass("r6");
          $(".box5").removeClass("r7");
          $(".box5").removeClass("r8");
          $(".box5").removeClass("r9");
          break;
        case 4:
          $(".box5").addClass("r4");
          $(".box5").removeClass("r1");
          $(".box5").removeClass("r2");
          $(".box5").removeClass("r3");
          $(".box5").removeClass("r0");
          $(".box5").removeClass("r5");
          $(".box5").removeClass("r6");
          $(".box5").removeClass("r7");
          $(".box5").removeClass("r8");
          $(".box5").removeClass("r9");
          break;
        case 5:
          $(".box5").addClass("r5");
          $(".box5").removeClass("r1");
          $(".box5").removeClass("r2");
          $(".box5").removeClass("r3");
          $(".box5").removeClass("r4");
          $(".box5").removeClass("r0");
          $(".box5").removeClass("r6");
          $(".box5").removeClass("r7");
          $(".box5").removeClass("r8");
          $(".box5").removeClass("r9");
          break;
        case 6:
          $(".box5").addClass("r6");
          $(".box5").removeClass("r1");
          $(".box5").removeClass("r2");
          $(".box5").removeClass("r3");
          $(".box5").removeClass("r4");
          $(".box5").removeClass("r5");
          $(".box5").removeClass("r0");
          $(".box5").removeClass("r7");
          $(".box5").removeClass("r8");
          $(".box5").removeClass("r9");
          break;
        case 7:
          $(".box5").addClass("r7");
          $(".box5").removeClass("r1");
          $(".box5").removeClass("r2");
          $(".box5").removeClass("r3");
          $(".box5").removeClass("r4");
          $(".box5").removeClass("r5");
          $(".box5").removeClass("r6");
          $(".box5").removeClass("r0");
          $(".box5").removeClass("r8");
          $(".box5").removeClass("r9");
          break;
        case 8:
          $(".box5").addClass("r8");
          $(".box5").removeClass("r1");
          $(".box5").removeClass("r2");
          $(".box5").removeClass("r3");
          $(".box5").removeClass("r4");
          $(".box5").removeClass("r5");
          $(".box5").removeClass("r6");
          $(".box5").removeClass("r7");
          $(".box5").removeClass("r0");
          $(".box5").removeClass("r9");
          break;
        case 9:
          $(".box5").addClass("r9");
          $(".box5").removeClass("r1");
          $(".box5").removeClass("r2");
          $(".box5").removeClass("r3");
          $(".box5").removeClass("r4");
          $(".box5").removeClass("r5");
          $(".box5").removeClass("r6");
          $(".box5").removeClass("r7");
          $(".box5").removeClass("r8");
          $(".box5").removeClass("r0");
          break;
      }
      switch (second_s) {
        case 0:
          $(".box7").addClass("r0");
          $(".box7").removeClass("r1");
          $(".box7").removeClass("r2");
          $(".box7").removeClass("r3");
          $(".box7").removeClass("r4");
          $(".box7").removeClass("r5");
          break;
        case 1:
          $(".box7").addClass("r1");
          $(".box7").removeClass("r0");
          $(".box7").removeClass("r2");
          $(".box7").removeClass("r3");
          $(".box7").removeClass("r4");
          $(".box7").removeClass("r5");
          break;
        case 2:
          $(".box7").addClass("r2");
          $(".box7").removeClass("r1");
          $(".box7").removeClass("r0");
          $(".box7").removeClass("r3");
          $(".box7").removeClass("r4");
          $(".box7").removeClass("r5");
          break;
        case 3:
          $(".box7").addClass("r3");
          $(".box7").removeClass("r1");
          $(".box7").removeClass("r2");
          $(".box7").removeClass("r0");
          $(".box7").removeClass("r4");
          $(".box7").removeClass("r5");
          break;
        case 4:
          $(".box7").addClass("r4");
          $(".box7").removeClass("r1");
          $(".box7").removeClass("r2");
          $(".box7").removeClass("r3");
          $(".box7").removeClass("r0");
          $(".box7").removeClass("r5");
          break;
        case 5:
          $(".box7").addClass("r5");
          $(".box7").removeClass("r1");
          $(".box7").removeClass("r2");
          $(".box7").removeClass("r3");
          $(".box7").removeClass("r4");
          $(".box7").removeClass("r0");
          break;
      }
      switch (second_g) {
        case 0:
          $(".box8").addClass("r0");
          $(".box8").removeClass("r1");
          $(".box8").removeClass("r2");
          $(".box8").removeClass("r3");
          $(".box8").removeClass("r4");
          $(".box8").removeClass("r5");
          $(".box8").removeClass("r6");
          $(".box8").removeClass("r7");
          $(".box8").removeClass("r8");
          $(".box8").removeClass("r9");
          break;
        case 1:
          $(".box8").addClass("r1");
          $(".box8").removeClass("r0");
          $(".box8").removeClass("r2");
          $(".box8").removeClass("r3");
          $(".box8").removeClass("r4");
          $(".box8").removeClass("r5");
          $(".box8").removeClass("r6");
          $(".box8").removeClass("r7");
          $(".box8").removeClass("r8");
          $(".box8").removeClass("r9");
          break;
        case 2:
          $(".box8").addClass("r2");
          $(".box8").removeClass("r1");
          $(".box8").removeClass("r0");
          $(".box8").removeClass("r3");
          $(".box8").removeClass("r4");
          $(".box8").removeClass("r5");
          $(".box8").removeClass("r6");
          $(".box8").removeClass("r7");
          $(".box8").removeClass("r8");
          $(".box8").removeClass("r9");
          break;
        case 3:
          $(".box8").addClass("r3");
          $(".box8").removeClass("r1");
          $(".box8").removeClass("r2");
          $(".box8").removeClass("r0");
          $(".box8").removeClass("r4");
          $(".box8").removeClass("r5");
          $(".box8").removeClass("r6");
          $(".box8").removeClass("r7");
          $(".box8").removeClass("r8");
          $(".box8").removeClass("r9");
          break;
        case 4:
          $(".box8").addClass("r4");
          $(".box8").removeClass("r1");
          $(".box8").removeClass("r2");
          $(".box8").removeClass("r3");
          $(".box8").removeClass("r0");
          $(".box8").removeClass("r5");
          $(".box8").removeClass("r6");
          $(".box8").removeClass("r7");
          $(".box8").removeClass("r8");
          $(".box8").removeClass("r9");
          break;
        case 5:
          $(".box8").addClass("r5");
          $(".box8").removeClass("r1");
          $(".box8").removeClass("r2");
          $(".box8").removeClass("r3");
          $(".box8").removeClass("r4");
          $(".box8").removeClass("r0");
          $(".box8").removeClass("r6");
          $(".box8").removeClass("r7");
          $(".box8").removeClass("r8");
          $(".box8").removeClass("r9");
          break;
        case 6:
          $(".box8").addClass("r6");
          $(".box8").removeClass("r1");
          $(".box8").removeClass("r2");
          $(".box8").removeClass("r3");
          $(".box8").removeClass("r4");
          $(".box8").removeClass("r5");
          $(".box8").removeClass("r0");
          $(".box8").removeClass("r7");
          $(".box8").removeClass("r8");
          $(".box8").removeClass("r9");
          break;
        case 7:
          $(".box8").addClass("r7");
          $(".box8").removeClass("r1");
          $(".box8").removeClass("r2");
          $(".box8").removeClass("r3");
          $(".box8").removeClass("r4");
          $(".box8").removeClass("r5");
          $(".box8").removeClass("r6");
          $(".box8").removeClass("r0");
          $(".box8").removeClass("r8");
          $(".box8").removeClass("r9");
          break;
        case 8:
          $(".box8").addClass("r8");
          $(".box8").removeClass("r1");
          $(".box8").removeClass("r2");
          $(".box8").removeClass("r3");
          $(".box8").removeClass("r4");
          $(".box8").removeClass("r5");
          $(".box8").removeClass("r6");
          $(".box8").removeClass("r7");
          $(".box8").removeClass("r0");
          $(".box8").removeClass("r9");
          break;
        case 9:
          $(".box8").addClass("r9");
          $(".box8").removeClass("r1");
          $(".box8").removeClass("r2");
          $(".box8").removeClass("r3");
          $(".box8").removeClass("r4");
          $(".box8").removeClass("r5");
          $(".box8").removeClass("r6");
          $(".box8").removeClass("r7");
          $(".box8").removeClass("r8");
          $(".box8").removeClass("r0");
          break;
      }
    }, 100);
  },
  beforeDestroy(){
    clearInterval(this.sit);
  }
};
</script>

<style scoped>
.tm {
  position: absolute;
  z-index: -1;
  left: calc(22% - 80px);
  top: -10%;
  width: 160px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 20px;
  height: 50px;
  background: #000;
}
.box1 {
  box-shadow: -20px 0px 30px rgb(0, 0, 0);
  background: url("../../public/img/0.png");
  background-size: cover;
}
.box2 {
  background: url("../../public/img/0.png");
  background-size: cover;
}
.box3 {
  background: url("../../public/img/10.png");
  background-size: cover;
  position: relative;
}
.box3::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../public/img/101.png");
  background-size: cover;
  animation: fade 1s infinite alternate linear;
}

.box4 {
  background: url("../../public/img/0.png");
  background-size: cover;
}
.box5 {
  background: url("../../public/img/0.png");
  background-size: cover;
}
.box6 {
  background: url("../../public/img/10.png");
  background-size: cover;
  position: relative;
}
.box6::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../public/img/101.png");
  background-size: cover;
  animation: fade 1s infinite alternate linear;
}
.box7 {
  background: url("../../public/img/0.png");
  background-size: cover;
}
.box8 {
  box-shadow: 20px 0px 30px rgb(0, 0, 0);
  background: url("../../public/img/0.png");
  background-size: cover;
}
@keyframes fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
}

/**jq */
.r0 {
  background: url("../../public/img/0.png");
  background-size: cover;
}
.r1 {
  background: url("../../public/img/1.png");
  background-size: cover;
}
.r2 {
  background: url("../../public/img/2.png");
  background-size: cover;
}
.r3 {
  background: url("../../public/img/3.png");
  background-size: cover;
}
.r4 {
  background: url("../../public/img/4.png");
  background-size: cover;
}
.r5 {
  background: url("../../public/img/5.png");
  background-size: cover;
}
.r6 {
  background: url("../../public/img/6.png");
  background-size: cover;
}
.r7 {
  background: url("../../public/img/7.png");
  background-size: cover;
}
.r8 {
  background: url("../../public/img/8.png");
  background-size: cover;
}
.r9 {
  background: url("../../public/img/9.png");
  background-size: cover;
}
</style>
