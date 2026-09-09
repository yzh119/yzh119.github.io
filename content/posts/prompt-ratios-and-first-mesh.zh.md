---
title: "[AI]用数字而不是形容词控制比例"
date: 2026-09-06T19:00:00+08:00
series: ["英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics"]
lastmod: 2026-09-09T05:48:54+08:00
---

## 概念图与首轮模型

这一阶段用原版比例修正提示词，再检查生成模型。首轮概念图使用 FLUX，是当时的工具记录；后来的概念图改用 imagegen，Meshy 仍提供基础几何。

后续采用的模型与动画见[完整动画](/zh/posts/skeleton-motion/)。

**截至 2026-09-09：**兵种 mod 为 **0.12.0**，已安装十四种墓园兵种。本文数字保留各次交付版本的含义；最新进展见[黑暗骑士与骨龙动画](/zh/posts/necropolis-final-four/)。

工具在 [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline) 维护；模型和完整 mod 留在本地。[工具迁移与复现](/zh/posts/h3-art-tools/)。

## 历史记录

{{< history title="历史原文与修订记录（展开阅读）" note="以下完整保留本次整理前的原文、图片和删除线。这里的“当前”“尚未完成”和“下一步”均指各段写作或标注时的状态；旧版本号、旧工具路径与试稿不能作为现行操作说明。" >}}

~~**截至 2026-09-09：**兵种 mod 为 **0.11.1**，已安装十种墓园兵种。本文涉及的安装数字按各次交付版本注明；最近一次扩展见[吸血鬼与蝙蝠形态](/zh/posts/necropolis-vampires/)。~~


> **2026-09-09 工具迁移：** 后续代码在 [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline) 维护，原 `tools/creature-art/` 与 `tools/town-art/` 对应新仓库的 `creature-art/` 与 `town-art/`。本文的旧路径和 PR 链接保留作历史记录。[迁移与复现说明](/zh/posts/h3-art-tools/)。

上一篇里，墓园城十四个兵种的概念稿只有八个通过比例检查，六个偏宽，一个偏窄的都没有。
这篇讲怎么修好的，以及第一个 3D 模型。

## 形容词把事情弄得更糟

偏差是单向的，所以改法很直接：在 prompt 里告诉模型要收紧。我按量到的宽高比给每个兵种
配了一句形容，比如骨龙（0.76）配的是 "broad and low, only slightly taller than it is wide"。

结果骨龙从 +35% 变成 **+51%**。

原因事后看很清楚：形容词描述的不只是形状，还有姿态。"broad and low" 读起来像在描述一个
张开翅膀、压低身体的姿势，模型照做了。幽灵那条也一样，从 +16% 过头到 -18%。

换成数字就没有这个问题：

```
The whole silhouette fits in a box about 1.3 times as tall as it is wide.
```

这句话只约束外框，不暗示任何姿态。而且它是从原版量到的宽高比算出来的，一行代码，
不用给十四个兵种各写一句。

十四个全部落进 15% 区间，骨龙 +51% → +9%。

<figure>
  <img src="/images/vcmi/necropolis-v2.jpg" alt="墓园城十四个兵种概念稿">
  <figcaption>十四个全绿。上一版是八个。</figcaption>
</figure>

## 内容审核会拦僵尸

两个僵尸的 prompt 被 FLUX 拒了，理由是 Violence。触发词是 "rotting flesh"、
"dried blood"、"bloated" 这类。

改成 desiccated、grey-green skin drawn tight、tattered rags 就过了，形象没丢。
我把这条记进了 roster 文件的注释里——不然过几周有人觉得措辞太绕，"优化"回去，又会被拦。

## 第一个 3D 模型

概念稿定下来之后，骷髅送去 Meshy 做图生 3D：quad 拓扑，目标两万面，带贴图。

<figure>
  <img src="/images/vcmi/skeleton-mesh.jpg" alt="骷髅的 3D 模型">
  <figcaption>37508 顶点，46034 三角面，base color 贴图。30 credits。</figcaption>
</figure>

上传前先按 alpha 把图裁到主体。概念稿是 1024×1440 的画布，主体只占其中 19%，
剩下全是透明区域——重建的是你给的东西，裁一下不花钱。

~~分工是明确的：概念稿一直用 BFL 的 FLUX.2 [pro]，Meshy 只做这一步。~~

> 2026-09-09 更新：当前使用 imagegen 母图、Meshy 带贴图基础模型及适用的人形自动绑定；Astra 编写本地修整、绑定、动画和合包工具。无腿幽灵已用本地骨架完成，不要求改用 Tripo。阴影和描边现由离线工具预生成。见[流程调整](/zh/posts/necropolis-bootstrap/)与[尸巫交付](/zh/posts/necropolis-liches/)。



## 下一步

绑骨。骷髅是人形，Meshy 的绑骨 API 能覆盖；但兵种表里一大半不是人形，那部分要用别的。

代码在 [PR #10](https://github.com/yzh119/vcmi/pull/10)：比例提示、审核绕过的措辞、
以及 `gen_mesh.py`。

{{< /history >}}
