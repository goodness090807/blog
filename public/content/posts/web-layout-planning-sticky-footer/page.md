---
title: "網頁布局規劃：固定頁尾(Sticky Footer)"
description: "在網站布局時，我們很常遇到架構排版的挑戰，像是當頁面內容較少時，想要將頁尾(Footer)會固定在視窗的底部，而不是緊隨著內容，當頁面內容超出視窗高度時，頁尾(Footer)應直接跟隨在內容區塊之後，藉此在內容不足時也能將Footer放到視窗底部，當內容超出畫面時，Footer也能緊隨在最後的元素區塊。"
date: "2024-07-24"
tags: ["網頁技術", "CSS"]
---

## 基本配置

為了能夠讓大家更容易理解 CSS 是怎麼操作的，我這邊使用最簡單的排版方式呈現給大家看，以下是這次會使用到的 HTML

```html
<body>
    <header>HEADER</header>

    <main>一行文字</main>

    <footer>FOOTER</footer>
</body>
```

在配置 CSS 時，如果你是新手的話，可能會需要注意一些設定，如下：

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

因為瀏覽器會有一些預設的排版設定，如果沒有將這些重設，在排版時可能會不符合我們的期待，詳情可以搜尋【Css Reset】。

<br />
接下來我們要配置 html 和 body 的高度，讓區塊能夠填滿網頁的高度，否則會因為這兩個元素預設的高度是0，導致後面不管怎麼設定都會發現無法填滿高度。

```css
html {
    height: 100%;
}
body {
    min-height: 100%;
}
```

<div style="background-color:#d1d1d1; padding: 5px;">
<strong>額外補充</strong>

關於高度設定，很多網站在說明時，會使用 100vh 的方式去設定，雖然這樣一樣能夠把高度變更為跟瀏覽器一樣高，但這個在手機上瀏覽時會有問題，因為手機底部有一個網址列，瀏覽器設置時是以螢幕高度去配置你的網頁，但是因為有網址列這個區塊，所以蓋掉原本應該要顯示在底部的資訊，導致無法完整顯示，所以如果有需要完整顯示的需求，還是建議使用 100% 或是 100dvh 來解決。

</div>

<br />
接下來我們做一些顏色設定，讓我們較好區分每一個區塊

```css
header {
    background: red;
    color: white;
}
footer {
    background: gray;
    color: white;
}
```

<br />
當前配置結果：

![sticky footer基本設置](1.png)

## sticky footer 配置

基本的設定已經完成了，接下來就要進入正題了

其實要將 footer 放到底部有很多方式，而我們這邊打算使用 Flexbox 的特性來做到這樣的效果，如果對於 Flexbox 還不熟悉，可以到六角學院所出的[Flex 基礎教學](https://w3c.hexschool.com/flexbox/2186a786)學習。

<br />

配置的方式也很簡單，只要幾行設定就能夠完成，設定如下

```css
body {
    min-height: 100%; // 這是前面的設置
    display: flex;
    flex-direction: column;
}

main {
    flex: 1;
}
```

body 部分(父層)：

`dislpay: flex;`： 將 body 區塊改為 flex 的顯示方式

`flex-direction: column;`： 將子元素改為直向的顯示方式

<br />
main 部分(主要區塊)：

`flex: 1;`： 將主要的資料區塊設定為自動填滿剩下的內容

<br />

最後達到的結果如下
![設定結果](2.png)

## 完整語法

這樣就完成了 sticky footer 的布局配置，完整的語法如下：

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>sticky footer</title>
    </head>
    <body>
        <header>HEADER</header>

        <main>
            <p>一行文字</p>
        </main>

        <footer>FOOTER</footer>
    </body>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        html {
            height: 100%;
        }
        body {
            min-height: 100%;
            display: flex;
            flex-direction: column;
        }
        header {
            background: red;
            color: white;
        }

        main {
            flex: 1;
        }
        footer {
            background: gray;
            color: white;
        }
    </style>
</html>
```

希望透過這篇文章能讓大家更熟悉基本的排版配置，並且解決內容不足時 Footer 置底的問題，如果遇到內容超過網頁高度時，也能讓 Footer 緊隨在內容區塊後面。

<br />

---

<br />
如果有任何想法，歡迎與我聯絡交流。

## 參考資料

[Sticky Footer, Five Ways](https://css-tricks.com/couple-takes-sticky-footer/)

[Make body have 100% of the browser height](https://stackoverflow.com/questions/6654958/make-body-have-100-of-the-browser-height)

[[CSS 學習筆記] CSS Reset 與重置](https://andy6804tw.github.io/2021/05/23/css-reset/)
