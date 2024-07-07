---
title: "Javascript for迴圈中in、of的使用方式"
description: "在Javascript中，for迴圈的使用方式千奇百怪，趁這次機會複習一下for的奇耙應用吧。"
date: "2024-07-07"
tags: ["Javascript"]
---

在 Javascript 中，除了基本的 for 寫法之外，Javascript 中也提供了各式各樣的迴圈語法，讓我們能夠便利的操作任何陣列。

## 範例

### for of

透過 for of 的迴圈方式，可以快速的遍歷整個陣列，

1. 參數設定
    ```Javascript
    const numArr = [1, 20, 10, 9, 99, 8, 50]
    ```
2. For...of 迴圈
    ```Javascript
    for (let arr of numArr) {
        console.log(arr);
    }
    ```
3. 回傳結果
    ```Javascript
    // 1, 20, 10, 9, 99, 8, 50
    ```
