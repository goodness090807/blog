---
title: "網站分析必備：如何利用GA4和GTM追蹤用戶與網頁的互動紀錄"
description: "當完成網站開發後，除了優化SEO外，追蹤網站流量來源也是至關重要。本文將介紹如何啟用Google Tag Manager (GTM)並管理Google Analytics 4(GA4)，從而有效地監控和分析網站流量。"
date: "2024-07-11"
tags: ["網頁技術", "GA4", "GTM"]
---

## 介紹

**在進入到整合之前，我們先了解一下 GA4 和 GTM 各別是在做什麼的**

1. Google Analytics 4 (GA4) [[連結首頁]](https://analytics.google.com/)

    GA4 是一個網站分析工具，他主要提供數據收集、用戶行為分析、事件追蹤等相關工作，也提供多種報表給我們查詢，方便讓我們制定更好的銷售策略。

2. Google Tag Manager (GTM) [[連結首頁]](https://tagmanager.google.com/)

    GTM 是 Google 提供的一個強大的代碼管理系統，簡化了網站標籤的管理過程，分析人員可以自行管理各種代碼，而不用與工程師頻繁溝通程。GTM 也提供了特定事件觸發的功能，可以用來追蹤頁面瀏覽、點擊事件等相關數據。

## 整合流程

![Web串接GTM串接GA](/content/images/web-gtm-ga4.png)

這邊參考了 GA 文件上提供的[流程圖](https://support.google.com/tagmanager/answer/9442095?hl=zh-Hant)，根據上圖所顯示的關聯，大概能分成幾個重點

-   GTM 與 GA4 進行關聯，用來管理追蹤碼
-   而你的網站只需要關聯 GTM 就好，也就是只要在你的網頁放上 GTM 的語法，也能享有 GA4 的功能
-   當用戶點擊網頁時，GTM 會發送相關事件至 GA4，並且能夠透過 GA4 查詢事件的報表

## 關聯 GTM 與 GA4

1. 在進行關聯之前，需要先建立 GTM 和 GA4 的帳號，並且從 GA4 取得你的 Google 代碼，進入 [GA4 首頁](https://analytics.google.com/) 後，點擊左下角設定的 ICON，點擊【資料串流】，如果還沒有串流則需要先建立串流
   ![設定串流](/content/images/ga4-set-stream.png)
   ![建立串流](/content/images/ga4-add-stream.png)
2. 建立完成後，會出現**設定 Google 代碼**的頁面，這個頁面可以不用理他，後續會使用 GTM 協助設定，可以先關閉
   ![不用設定GA4代碼](/content/images/ga4-not-use.png)
3. 關閉後，會出現有包含 G-\*代碼的頁面，需要把這個複製起來，後續在 GTM 設定時會用到
   ![GA4ID](/content/images/ga4-gtm-id.png)
4. 建立並複製好之後就先進入到 [GTM 首頁](https://tagmanager.google.com/) ，並點擊【新增代碼】區塊
   ![新增代碼](/content/images/gtm-add-tag.png)
5. 接下來可以先為你的代碼取一個較好識別的名稱，再點擊【代碼設定】區塊
   ![代碼設定](/content/images/gtm-setting-tag.png)
6. 接下來點擊 google 代碼，並把剛剛複製的 GA 的 ID 貼到【代碼 ID】輸入框內，並點擊觸發條件
   ![Google代碼畫面](/content/images/gtm-google-tag.png)
   ![新增GA代碼](/content/images/gtm-tag-insert.png)
7. 點擊【Initialization - All Pages】，設置初始化的時候會觸發
   ![Initialization - All Pages](/content/images/gtm-ga-trigger.png)
8. 點擊儲存
   ![代碼安裝儲存](/content/images/gtm-tag-save.png)
9. 點擊提交
   ![提交](/content/images/gtm-submit.png)
10. 最後輸入版本名稱和版本說明後點擊【發布】
    ![發布](/content/images/gtm-publish.png)
11. 成功畫面
    ![成功畫面](/content/images/gtm-success.png)

GTM 和 GA 的關聯流程就到這邊結束了，但這樣還沒完成建立，還需要與我們的網站做整合，才能真正地接收到資料。

## 將 GTM 埋設到你的網站上

當 GTM 跟 GA4 關聯完成後，接下來我們就可以將 GTM 放到你的網頁上啦，GTM 的攝製很簡單，只要將幾行 GTM 提供的代碼放到特定的位置，他就能自動幫你追蹤用戶的行為了。

1. 找到 GTM 提供的 Script 語法
   進入到 GTM 帳戶首頁 => 管理 => 安裝 Google 代碼管理工具
   ![取得管理安裝碼](/content/images/gtm-get-manager-code.png)
2. 將語法複製到網站中的對應位置
   ![複製語法到網站](/content/images/gtm-insert-script.png)
3. 貼完後記得把網站先部署好，再輸入你的網址做驗證
   ![驗證成功](/content/images/gtm-valid.png)

## 功能驗證

當所有東西都設定好之後，我們要怎麼資料是否有正確的被 GA4 紀錄呢

這時候就要會一點網站 Debug 的小技巧了：

1. 首先進入你的網頁
2. 按 F12 開啟 DevTools 工具
3. 點擊 Network
4. 在 Filter 輸入 gtm
5. 會看到有幾個跟 GTM 相關的資訊被傳送出去

![確認GTM有成功發送資料](/content/images/gtm-check-success.png)

這樣就確認資料有成功被傳送到 GA4 上面囉，我們也可以回 GA4 確認一下是否有紀錄。

以上就是如何在網站使用 GTM + GA4 的方式，希望能夠幫助到大家去分析自己網站上的用戶訊息，並打造出更好的銷售策略。

---

如果有任何想法，歡迎與我聯絡交流。

## 參考資料

[[GA4] 在 Google 代碼管理工具中設定 Google Analytics (分析) 4](https://support.google.com/tagmanager/answer/9442095?hl=zh-MO)

[[Youtube] Get started with Google Analytics](https://www.youtube.com/watch?v=UuE37-MM1ws&list=PLI5YfMzCfRtZ4bHJJDl_IJejxMwZFiBwz&index=2)
