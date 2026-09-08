---
title: "[AI]吸血鬼与蝙蝠形态"
date: 2026-09-09T04:26:09+08:00
series: ["英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "meshy"]
---

墓园接下来补吸血鬼和吸血鬼王。这次先把两个人形和飞行时使用的蝙蝠模型导入 Blender，渲染高清静帧，检查生成结果能不能继续做动作。概念图和实际模型一起放出来，方便看出差异。

当前是**模型检查阶段**：人形自动绑定已返回，尚未完成本地动作检查、蝙蝠骨架和变身衔接，也没有安装到游戏。游戏里仍是此前的八兵种版本。

## 吸血鬼

概念图采用苍白秃头、尖耳、长爪和深色旧衣服。由内置 imagegen 生成，再交给 Meshy 7 重建带贴图的模型。

![吸血鬼概念图，供模型生成参考](/images/necropolis-vampires/vampire-concept.jpg)

下面是实际导入 Blender 后渲染的 **1400×1600 静帧**，使用模型自带的贴图和导入姿势。点击可查看透明 PNG 原图。

[![吸血鬼 Blender 高清静帧，当前导入姿势](/images/necropolis-vampires/vampire-blender-hd.jpg)](/images/necropolis-vampires/vampire-blender-hd.png)

头部、衣服接缝和双手可以直接放大检查。手指当前仍是生成模型的形状，尚未经过抓击动作检验。[提示词](/images/necropolis-vampires/vampire-prompt.txt) · [模型检查记录](/images/necropolis-vampires/vampire-audit.json) · [渲染记录](/images/necropolis-vampires/vampire-render.json)。

## 吸血鬼王

升级形态用了锈橙色长外衣和高领，内层仍以深色为主。

![吸血鬼王概念图，供模型生成参考](/images/necropolis-vampires/vampire-lord-concept.jpg)

[![吸血鬼王 Blender 高清静帧，衣服仍有待修缺口](/images/necropolis-vampires/vampire-lord-blender-hd.jpg)](/images/necropolis-vampires/vampire-lord-blender-hd.png)

这张同样是 **1400×1600**。实际渲染暴露了概念图里不明显的问题：胸前、袖口和衣摆有碎片状边缘和缺口，局部像散开的三角面。这一版保留作检查记录，需要进一步定位网格或材质问题，再处理衣服在动作中的形变，不能直接当成最终交付。

[提示词](/images/necropolis-vampires/vampire-lord-prompt.txt) · [模型检查记录](/images/necropolis-vampires/vampire-lord-audit.json) · [渲染记录](/images/necropolis-vampires/vampire-lord-render.json)。

## 蝙蝠

原版移动时是蝙蝠形态，因此另外生成了展开双翼的模型。飞行和变身会使用独立的本地骨架。

![蝙蝠概念图，供模型生成参考](/images/necropolis-vampires/vampire-bat-concept.jpg)

[![蝙蝠 Blender 高清静帧，当前展开双翼的静态模型](/images/necropolis-vampires/vampire-bat-blender-hd.jpg)](/images/necropolis-vampires/vampire-bat-blender-hd.png)

这张是 **2000×1400**，为翼展保留横向空间。正面可以看清头部和展开的轮廓，但翼膜下方偏暗。另做了一张[较高视角的检查图](/images/necropolis-vampires/vampire-bat-top-blender-hd.png)，抬高观察角度并加强补光后，能看到翅膀从这个角度显得很薄，背部也有缺口；这些还需要进一步检查。当前仍是静态展开姿势，还没有拍翼动作。

[提示词](/images/necropolis-vampires/vampire-bat-prompt.txt) · [模型检查记录](/images/necropolis-vampires/vampire-bat-audit.json) · [渲染记录](/images/necropolis-vampires/vampire-bat-render.json)。

## 工具和接下来的工作

三次 Meshy 建模各用了 30 credits，两次人形自动绑定各用了 5 credits，本阶段合计 **100 credits**。三套模型的导入颜色贴图均为 4096×4096。此次静帧由 Blender 5.2.1 LTS 本地渲染，每张 64 samples，没有新增生成请求。

Astra 编写的 [bootstrap_portrait.py](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/bootstrap_portrait.py) 保存可编辑检查场景，再调用高清渲染工具。检查记录包含输入与输出哈希、实际网格数量、贴图尺寸，以及是否超出画面。博客里的 JPEG 只加了展示背景，透明 PNG 保留原始渲染分辨率。

后续需要先处理吸血鬼王的衣服问题，再检查人形双手和关节，编写蝙蝠拍翼、起止变身、抓击与死亡动作，最后按原版帧数打包验证。工具代码继续在独立仓库维护；模型和完整 mod 留在本地。
