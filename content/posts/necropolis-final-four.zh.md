---
title: "[AI]黑暗骑士与骨龙模型试作"
date: 2026-09-09T07:23:02+08:00
series: ["英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra", "meshy"]
---

墓园还剩黑暗骑士、恐怖骑士、骨龙和鬼龙。这四个需要新的运动结构：骑士要处理马的四条腿和骑手的坐姿，龙要处理双翼、长颈与尾巴。现有步行人形骨架不能直接套用。

目前完成了四张参考概念、三个 Meshy 三维初模，以及四个兵种的 **1400×1600 Blender 静态渲染**。鬼龙共用骨龙几何，在 Blender 中试幽白材质。这些还没有绑定和完整动画，**尚未接入游戏**；游戏里的四个兵种仍用原版。

## 骑士与坐骑

原版黑暗骑士骑完整的黑马，右手持弯刀、左手控缰，马鞍带红布。恐怖骑士增加马头、马颈和腿部铠甲，肩甲也更突出。这一轮按这些差异制作，保留黑、银、红配色。

![黑暗骑士 — 概念图](/images/necropolis-final-four/black-knight-concept.png)

![黑暗骑士 — Blender 静态初模，未绑定](/images/necropolis-final-four/black-knight-blender.png)

![恐怖骑士 — 概念图](/images/necropolis-final-four/dread-knight-concept.png)

![恐怖骑士 — Blender 静态初模，未绑定](/images/necropolis-final-four/dread-knight-blender.png)

每个骑士初模都生成了八个角度的 Blender 检查图。四条马腿可以辨认，骑手、马鞍与武器也有三维结构。静态可见不代表动作已经安全：弯刀与手的绑定、骑手脚蹬、缰绳、马腹附近的粘连，还需要在变形时检查。恐怖骑士马身的部分表面有明显切面感，后续要处理法线和材质。

## 骨龙与鬼龙

![骨龙 — 概念图](/images/necropolis-final-four/bone-dragon-concept.png)

![骨龙 — Blender 静态初模，未绑定](/images/necropolis-final-four/bone-dragon-blender.png)

![鬼龙 — 概念图](/images/necropolis-final-four/ghost-dragon-concept.png)

![鬼龙 — Blender 静态初模，未绑定](/images/necropolis-final-four/ghost-dragon-blender.png)

原版骨龙以后腿直立，胸前有两条小前肢，双翼带破损翼膜；移动时飞行。Meshy 初模的背面检查能看到独立双翼，但展开后的关节和翼膜拉伸还没验证。

鬼龙先使用同一份骨龙几何，降低骨色的黄调、提亮到银白，并加入少量自发光。这样后续可以共用骨架和动作。当前 Blender 图仍偏实体，翼膜半透明和战场背景上的辨识度没有完成，不能把它当成最终幽灵效果。

## 工具与失败记录

概念使用内置 image_gen；Meshy 负责三份贴图模型，每份 **30 credits，共 90 credits**。Astra 编写本地检查和材质试验脚本。鬼龙没有另花一次生成模型的费用。

![恐怖骑士失败的棋盘格背景](/images/necropolis-final-four/dreadKnight-checkerboard.jpg)

![鬼龙失败的棋盘格背景](/images/necropolis-final-four/ghostDragon-checkerboard.jpg)

两张升级概念都把棋盘格画进了 RGB，不能用作透明素材。分别改成纯品红背景后再去色键，得到上面的概念图；失败稿保留在这里。

为了保留细节，三次 Meshy 生成关闭了自动重拓扑。初模各有约 190 万三角面，也有很多按索引分开的网格片段；这不等于有那么多独立身体零件，UV 接缝也会造成分离。接下来需要检查并焊接重合点、减面、复核轮廓，再做专用骨架。

原版四种动画资源分别有 **92、125、84、88 帧**。恐怖骑士还多出三组资源，不能直接复制黑暗骑士的帧清单。接下来先验证马的步态、骑手接触和挥刀，再验证龙的起飞、飞行、落地、攻击和散架死亡，之后才能打包替换。

[工具、提示词与复现说明](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/docs/necropolis-final-four.md)。模型与完整 mod 继续留在本地，博客中的概念图和 Blender 图分别标注。
