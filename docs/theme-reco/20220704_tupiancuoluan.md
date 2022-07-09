---
title: 图片错乱效果
date: 2022-07-04
sidebar: 'auto'
categories:
- 小练习
tags:
- 小练习
description: 'https://img-blog.csdnimg.cn/0bd89556c5564252af1e8720ae73b286.png'
---
<br>

>by [《拂晓：胜利之刻》官网](http://dawn.100bt.com/?fromAct=al0930-2###)

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body {
      background: #000;
    }

    .title {
      position: absolute;
      top: 270px;
      left: 50%;
      margin-left: -377px;
      width: 754px;
      height: 374px;
      background-image: url('http://resource.a0bi.com/eclanding_components/ec-fuxiao-yuyue-pc/img/home/title.png');
      z-index: 3;
      animation: main-img-hide 16s infinite step-end;
    }

    .title::before,
    .title::after {
      position: absolute;
      width: 754px;
      height: 374px;
      top: 0;
      left: 0;
      background: inherit;
    }

    .title::after {
      content: "";
      -webkit-animation: glitch-one 16s infinite step-end;
      animation: glitch-one 16s infinite step-end;
    }

    .title::before {
      content: "";
      -webkit-animation: glitch-two 16s infinite 1s step-end;
      animation: glitch-two 16s infinite 1s step-end;
    }


    @keyframes main-img-hide {
      5% {
        -webkit-filter: invert(1);
        filter: invert(1);
      }

      5.2% {
        -webkit-filter: none;
        filter: none;
      }

      10% {
        opacity: 0.5;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
      }

      11% {
        -webkit-filter: none;
        filter: none;
        opacity: 1;
      }

      45% {
        opacity: 0.5;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
      }

      46% {
        -webkit-filter: none;
        filter: none;
        opacity: 1;
      }

      53.5% {
        opacity: 0.5;
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
      }

      54% {
        -webkit-filter: none;
        filter: none;
        opacity: 1;
      }

      54.5% {
        opacity: 0.5;
        -webkit-filter: hue-rotate(30deg);
        filter: hue-rotate(30deg);
      }

      55% {
        -webkit-filter: none;
        filter: none;
      }

      55.5% {
        background-image: none;
        -webkit-filter: none;
        filter: none;
        opacity: 1;
      }

      56% {
        background-image: url("http://resource.a0bi.com/eclanding_components/ec-fuxiao-yuyue-pc/img/home/title.png");
        opacity: 0.5;
      }

      56.5% {
        background-image: none;
      }

      57% {
        background-image: url("http://resource.a0bi.com/eclanding_components/ec-fuxiao-yuyue-pc/img/home/title.png");
        opacity: 0.8;
      }

      57.5% {
        opacity: 0.3;
      }

      58% {
        opacity: 1;
      }
    }

    @keyframes glitch-one {
      10% {
        -webkit-clip-path: inset(107px 0 217px);
        clip-path: inset(107px 0 217px);
        left: 66px;
      }

      10.5% {
        -webkit-clip-path: inset(239px 0 82px);
        clip-path: inset(239px 0 82px);
        left: -47px;
      }

      11% {
        -webkit-clip-path: inset(272px 0 56px);
        clip-path: inset(272px 0 56px);
        left: 92px;
      }

      11.5% {
        -webkit-clip-path: inset(12px 0 307px);
        clip-path: inset(12px 0 307px);
        left: 58px;
      }

      12% {
        -webkit-clip-path: inset(23px 0 294px);
        clip-path: inset(23px 0 294px);
        left: 19px;
      }

      12.5% {
        -webkit-clip-path: inset(286px 0 49px);
        clip-path: inset(286px 0 49px);
        left: 91px;
      }

      13% {
        -webkit-clip-path: inset(254px 0 74px);
        clip-path: inset(254px 0 74px);
        left: 14px;
      }

      13.5% {
        -webkit-clip-path: inset(67px 0 282px);
        clip-path: inset(67px 0 282px);
        left: -61px;
      }

      14% {
        -webkit-clip-path: inset(149px 0 178px);
        clip-path: inset(149px 0 178px);
        left: 32px;
      }

      14.5% {
        -webkit-clip-path: inset(21px 0 305px);
        clip-path: inset(21px 0 305px);
        left: -45px;
      }

      15.5% {
        -webkit-clip-path: inset(10px 0 320px);
        clip-path: inset(10px 0 320px);
        left: -20px;
      }

      16% {
        -webkit-clip-path: inset(10px 0 320px);
        clip-path: inset(10px 0 320px);
        left: -10px;
        opacity: 0;
      }

      45% {
        opacity: 0.5;
        left: -20px;
        -webkit-filter: hue-rotate(90deg) saturate(1.3);
        filter: hue-rotate(90deg) saturate(1.3);
      }

      45.5% {
        left: 0px;
        -webkit-filter: invert(1);
        filter: invert(1);
      }

      46% {
        -webkit-clip-path: inset(150px 0 160px);
        clip-path: inset(150px 0 160px);
        left: 15%;
      }

      46.5% {
        -webkit-clip-path: inset(20px 0 200px);
        clip-path: inset(20px 0 200px);
        left: -10%;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }

      47% {
        -webkit-clip-path: inset(240px 0 20px);
        clip-path: inset(240px 0 20px);
        left: -11%;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }

      47.5% {
        -webkit-clip-path: inset(20 0 20px);
        clip-path: inset(20 0 20px);
        left: 13%;
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
        -webkit-filter: invert(0);
        filter: invert(0);
      }

      48% {
        -webkit-clip-path: inset(120 0 120px);
        clip-path: inset(120 0 120px);
        left: 15%;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }

      48.5% {
        -webkit-clip-path: inset(260px 0 10px);
        clip-path: inset(260px 0 10px);
        left: -11%;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        -webkit-filter: none;
        filter: none;
      }

      49% {
        -webkit-clip-path: inset(5px 0 350px);
        clip-path: inset(5px 0 350px);
        left: 11%;
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
      }

      49.5% {
        -webkit-clip-path: inset(105px 0 210px);
        clip-path: inset(105px 0 210px);
        left: 0%;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }

      50% {
        -webkit-clip-path: inset(175px 0 160px);
        clip-path: inset(175px 0 160px);
        left: -11%;
      }

      50.5% {
        -webkit-clip-path: inset(95px 0 230px);
        clip-path: inset(95px 0 230px);
        left: -14%;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }

      51% {
        -webkit-clip-path: inset(235px 0 12px);
        clip-path: inset(235px 0 12px);
        left: -14%;
      }

      51.5% {
        -webkit-clip-path: inset(350px 0 7px);
        clip-path: inset(350px 0 7px);
        left: -14%;
      }

      52% {
        -webkit-clip-path: inset(320px 0 27px);
        clip-path: inset(320px 0 27px);
        left: -12%;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }

      52.5% {
        -webkit-clip-path: inset(190px 0 127px);
        clip-path: inset(190px 0 127px);
        left: -11%;
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
        -webkit-filter: hue-rotate(90deg) saturate(1.3);
        filter: hue-rotate(90deg) saturate(1.3);
      }

      54% {
        -webkit-clip-path: inset(20px 0 20px);
        clip-path: inset(20px 0 20px);
        left: 12%;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        -webkit-filter: none;
        filter: none;
      }

      58% {
        -webkit-clip-path: inset(20px 0 20px);
        clip-path: inset(20px 0 20px);
        left: 12%;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        -webkit-filter: none;
        filter: none;
      }

      59% {
        opacity: 0;
      }
    }

    @keyframes glitch-two {
      20% {
        -webkit-clip-path: inset(12px 0 322px);
        clip-path: inset(12px 0 322px);
        left: -66px;
      }

      20.5% {
        -webkit-clip-path: inset(98px 0 221px);
        clip-path: inset(98px 0 221px);
        left: 64px;
      }

      21% {
        -webkit-clip-path: inset(240px 0 100px);
        clip-path: inset(240px 0 100px);
        left: 3px;
      }

      21.5% {
        -webkit-clip-path: inset(96px 0 240px);
        clip-path: inset(96px 0 240px);
        left: -18px;
      }

      22% {
        -webkit-clip-path: inset(257px 0 72px);
        clip-path: inset(257px 0 72px);
        left: -41px;
      }

      22.5% {
        -webkit-clip-path: inset(137px 0 192px);
        clip-path: inset(137px 0 192px);
        left: -5px;
      }

      23% {
        -webkit-clip-path: inset(265px 0 61px);
        clip-path: inset(265px 0 61px);
        left: -77px;
      }

      23.5% {
        -webkit-clip-path: inset(98px 0 219px);
        clip-path: inset(98px 0 219px);
        left: -25px;
      }

      24% {
        -webkit-clip-path: inset(105px 0 229px);
        clip-path: inset(105px 0 229px);
        left: -38px;
      }

      24.5% {
        -webkit-clip-path: inset(237px 0 90px);
        clip-path: inset(237px 0 90px);
        left: 34px;
      }

      25.5% {
        -webkit-clip-path: inset(10px 0 320px);
        clip-path: inset(10px 0 320px);
        left: -20px;
      }

      26% {
        -webkit-clip-path: inset(10px 0 320px);
        clip-path: inset(10px 0 320px);
        left: -10px;
        opacity: 0;
      }

      45% {
        opacity: 0.3;
        left: -20px;
        -webkit-filter: hue-rotate(45deg) saturate(1.1);
        filter: hue-rotate(45deg) saturate(1.1);
      }

      45.5% {
        left: 0px;
        -webkit-filter: invert(1.2);
        filter: invert(1.2);
      }

      46% {
        -webkit-clip-path: inset(50px 0 260px);
        clip-path: inset(50px 0 260px);
        left: -12%;
      }

      46.5% {
        -webkit-clip-path: inset(120px 0 100px);
        clip-path: inset(120px 0 100px);
        left: 8%;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }

      47% {
        -webkit-clip-path: inset(40px 0 300px);
        clip-path: inset(40px 0 300px);
        left: 8%;
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
      }

      47.5% {
        -webkit-clip-path: inset(220 0 70px);
        clip-path: inset(220 0 70px);
        left: -9%;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        -webkit-filter: invert(1.1);
        filter: invert(1.1);
      }

      48% {
        -webkit-clip-path: inset(240px 0 120px);
        clip-path: inset(240px 0 120px);
        left: 11%;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
      }

      48.5% {
        -webkit-clip-path: inset(0px 0 310px);
        clip-path: inset(0px 0 310px);
        left: -12%;
        -webkit-transform: scale(1.2);
        transform: scale(1.2);
        -webkit-filter: none;
        filter: none;
      }

      49% {
        -webkit-clip-path: inset(255px 0 50px);
        clip-path: inset(255px 0 50px);
        left: 11%;
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
      }

      49.5% {
        -webkit-clip-path: inset(10px 0 240px);
        clip-path: inset(10px 0 240px);
        left: 6%;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }

      50% {
        -webkit-clip-path: inset(275px 0 90px);
        clip-path: inset(275px 0 90px);
        left: -12%;
      }

      50.5% {
        -webkit-clip-path: inset(195px 0 90px);
        clip-path: inset(195px 0 90px);
        left: 14%;
        -webkit-transform: scale(1.4);
        transform: scale(1.4);
      }

      51% {
        -webkit-clip-path: inset(35px 0 282px);
        clip-path: inset(35px 0 282px);
        left: -14%;
      }

      51.5% {
        -webkit-clip-path: inset(350px 0 7px);
        clip-path: inset(350px 0 7px);
        left: 14%;
      }

      52% {
        -webkit-clip-path: inset(20px 0 270px);
        clip-path: inset(20px 0 270px);
        left: -12%;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }

      52.5% {
        -webkit-clip-path: inset(90px 0 227px);
        clip-path: inset(90px 0 227px);
        left: -11%;
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
        -webkit-filter: hue-rotate(150deg) saturate(1.3);
        filter: hue-rotate(150deg) saturate(1.3);
      }

      54% {
        -webkit-clip-path: inset(220px 0 100px);
        clip-path: inset(220px 0 100px);
        left: 12%;
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        -webkit-filter: none;
        filter: none;
      }

      54% {
        background-image: none;
      }
    }
  </style>
</head>

<body>
  <div class="title"></div>
</body>

</html>
```
### 效果超酷 (๑•̀ㅂ•́)و✧
