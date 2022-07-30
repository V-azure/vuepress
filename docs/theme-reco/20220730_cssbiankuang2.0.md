---
title: css边框2.0
date: 2022-07-30
sidebar: 'auto'
categories:
- 小练习
tags:
- 小练习
description: 'https://img-blog.csdnimg.cn/42e6fe9e337d4a0c81e5882a08bff428.png'
---
<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            width: 180px;
            height: 180px;
            background: #000;
            margin-top: 20%;
            margin-left: 50%;
            position: relative;
        }
        .t{
            display: block;
            width: 18px;
            height: 18px;
            border-top: 4px solid red;
            border-left: 4px solid red;
            position: absolute;
            left: -10px;
            top: -10px;
        }
        .l{
            display: block;
            width: 18px;
            height: 18px;
            border-top: 4px solid red;
            border-right: 4px solid red;
            position: absolute;
            right: -10px;
            top: -10px;
        }
        .b{
            display: block;
            width: 18px;
            height: 18px;
            border-bottom: 4px solid red;
            border-left: 4px solid red;
            position: absolute;
            left: -10px;
            bottom: -10px;
        }
        .r{
            display: block;
            width: 18px;
            height: 18px;
            border-bottom: 4px solid red;
            border-right: 4px solid red;
            position: absolute;
            right: -10px;
            bottom: -10px;
        }
    </style>
</head>
<body>
    <div class="box">
        <div class="t"></div>
        <div class="l"></div>
        <div class="b"></div>
        <div class="r"></div>
    </div>
</body>
</html>
```