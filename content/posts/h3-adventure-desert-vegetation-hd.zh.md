---
title: "[AI]探险地图：沙漠植被"
date: 2026-09-10T10:42:00+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

沙漠植被从单株仙人掌开始。它看似很小，却是地图上判断沙漠地貌的高频轮廓；重绘保留了原版的单主干、右侧短臂、黄绿高光和窄占地，没有额外加入花、岩石或背景。

![仙人掌高清对照](/images/h3-environment-hd/desert-cactus-hd-compare.png)

主体图已同步为 2×、3×、4×；原始画布、阴影、遮挡和点击模板没有改动。全量资源校验仍为 0 错误。定制主体资源计数由 128 增至 **129**，其余资源继续保留完整 HD 基线等待逐类审查。

随后补入双节柱状仙人掌，保留原版的刺冠和上下两段柱体。

![柱状仙人掌高清对照](/images/h3-environment-hd/desert-column-cactus-hd-compare.png)

定制主体资源现为 **130** 个。

<s>细长单节仙人掌可以由同一提示直接外推。</s> 测试结果错误增加了柱节，因此没有接入；每个变体仍需单独对照原图。

![细长仙人掌废稿对照](/images/h3-environment-hd/desert-thin-cactus-rejected-compare.png)

低矮丛生仙人掌采用新增的“原生轮廓约束”处理：即使生成草稿出现多余节数，最终主体图也只能落在原版三节透明轮廓内。

![丛生仙人掌高清对照](/images/h3-environment-hd/desert-cluster-cactus-hd-compare.png)

定制主体资源现为 **131** 个。
