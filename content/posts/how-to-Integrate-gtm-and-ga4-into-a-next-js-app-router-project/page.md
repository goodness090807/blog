---
title: "如何在Next.js APP Router的專案中整合 GTM 和 GA4"
description: "當完成Next.js網站開發後，除了優化SEO外，追蹤網站流量來源也是至關重要。本文將介紹如何利用Google Tag Manager (GTM)來管理Google Analytics (GA)，並在Next.js專案中安裝GTM，從而有效地監控和分析網站流量。"
date: "2024-07-10"
tags: ["Next.js", "GA4", "GTM"]
---

## 前置作業

**在進入到整合之前，我們需要先去註冊此次所需要用到的帳號資源**

1. Google Analytics 4 (GA4) [[連結首頁]](https://analytics.google.com/)

    GA4 是 Google Analytics 的最新版本，他能夠蒐集網站或是應用程式資料，進一步去了解分析使用者的操作歷程，他還提供各項(自訂)報表，讓我們能夠更靈活的制定報表選項，可以幫助我們理解，用戶是如何使用我們的產品。(補充說明：雖然 GA4 也能夠直接安裝在網頁上，但是考慮到後續的擴充性，比較推薦直接使用 GTM 安裝)

2. Google Tag Manager (GTM) [[連結首頁]](https://tagmanager.google.com/)

    Google Tag Manager 也是 Google 提供的一個免費工具，他可以透過一個介面就能管理多個追蹤碼，包括 Google Analytics, Google Ads, Facebook Pixel 等，GTM 也有很多很棒的優勢，如：控制標籤觸發時機、版本控制、自訂 HTML 標籤等，這也就是我為什麼推薦使用 GTM 來整合 GA4 的原因，只要埋入 GTM 代碼，可以做到的事情是多很多的。

## 整合流程

![Web串接GTM串接GA](/covers/web-gtm-ga4.png)

這邊參考了 Google 解說的流程圖，根據上圖所顯示的關聯，大概能分成幾個重點

-   你的網站只需要關聯 GTM 就好
-   GTM 則是與 GA4 進行關聯，用來管理追蹤碼
-   當用戶點擊網頁時，GTM 會發送相關事件至 GA4，並且能夠透過 GA4 查詢事件的報表

所以我們將會按照，GA 埋入 GTM => 在 Next.js 程式碼埋入 GTM 代碼流程來進行操作，最終達到流量追蹤的效果

## 參考資料

[[GA4] 在 Google 代碼管理工具中設定 Google Analytics (分析) 4](https://support.google.com/tagmanager/answer/9442095?hl=zh-MO)
