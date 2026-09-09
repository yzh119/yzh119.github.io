---
title: "[AI]黑暗骑士与骨龙动画"
date: 2026-09-09T07:23:02+08:00
series: ["英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra", "meshy"]
lastmod: 2026-09-09T08:10:48+08:00
---

黑暗骑士、恐怖骑士、骨龙和鬼龙已装入本地 **necropolis-creature-animations 0.12.0**，墓园十四个兵种的替换素材至此补齐。新包有 6570 个文件；之前十个兵种及共享背景的 4161 个旧文件逐文件保持一致，另更新了 mod 版本信息。

真实客户端在独立测试地图中启动了战斗，读取了四个新兵种的 3× 图片与特效层，日志还记录了鬼龙移动、攻击动画的创建。这个检查确认了接入和部分运行路径，没有把全部动作逐个做完人工实战验收。

![四个新兵种与现用背景，固定画布离线合成](/demos/necropolis-final-four-01/showcase-four.png)

[55 组动画检查页](/demos/necropolis-final-four-01/)包含全部动作视频与兵种展示图。视频为离线合成，待机 4 fps、其余 8 fps，方便检查，不能据此测量游戏速度。

## 动画与帧数

| 兵种 | 导出的动画组 | 2× 主体帧 |
| --- | ---: | ---: |
| 黑暗骑士 | 13 | 86 |
| 恐怖骑士 | 16 | 119 |
| 骨龙 | 13 | 78 |
| 鬼龙 | 13 | 82 |

合计 **55 组、365 张 2× 主体帧**。原 DEF 的 9、10 组是重复转向，当前 VCMI 明确不用，因此没有计入；其余组逐组保留原帧数。1× 从 2× 缩小，3× 是预计算的显示缓存，方便当前 3× 设置直接读取，**并非重新渲染了原生 3× 细节**。

骑士使用马身、头颈、四条腿、尾巴与独立骑手控制。马腿采用对角相位，并计算腿部关节；挥刀分为抬臂、劈下、收回，恐怖骑士另有三组特殊攻击。它的铠甲权重允许的活动范围更小，攻击幅度经过了限制。

骨龙和鬼龙共用骨架与飞行动作，分别控制双翼、颈部、下颌、前肢、后腿和尾巴。移动包括起飞、飞行、落地，攻击有抬头和俯身差别。死亡目前是倒地收拢版本，**没有逐骨散成原版的骨堆**。鬼龙使用偏冷的幽白材质和少量自发光，翼膜仍偏实体；这两点保留为后续美术改进项。

## 绑定后的 Blender 静态图

![黑暗骑士 — Blender](/images/necropolis-final-four/black-knight-rigged.png)

![恐怖骑士 — Blender](/images/necropolis-final-four/dread-knight-rigged.png)

![骨龙 — Blender](/images/necropolis-final-four/bone-dragon-rigged.png)

![鬼龙 — Blender](/images/necropolis-final-four/ghost-dragon-rigged.png)

这四张来自绑定后的场景，输出为 1400×1600 PNG。初模概念图与早期未绑定渲染保留在文末的历史记录中。

## 变形和落地修正

![第一次绑定的检查图，马胸与手臂附近出现拉伸](/images/necropolis-final-four/early-skin-failure.png)

按位置硬分权重会让共享三角面同时跟随差异很大的骨骼，首轮检查发现大量尖刺和拉伸。焊接、减面后沿网格邻接关系平滑权重，解决了大部分问题。把龙翼幅度加大后，全帧检查又捕捉到少量拉伸；恐怖骑士的特殊攻击也需要进一步收小幅度。

落地修正也有一个失败版本：只移动骨架对象，并不能保证没有绑定父级的网格整体一起移动。重新渲染与导出 PNG 的对照暴露了这个问题。最终给骨架与网格共同增加地面支撑父级，修正保存的动画，再按正交投影移动对应 PNG。这里使用方向光和环境光，整个物体平移不会改变这两类照明。

最终重新打开场景，检查了 **675 个原帧及帧间采样**：大幅拉伸阈值命中为 0，最低世界坐标 Z 大于 0.004。16 对移动过渡端点的二值透明轮廓完全一致。一张受击姿势另做实际重渲染核对，轮廓 IoU 为 0.9956，主体 RGB 平均误差约 2.82/255；这是一张代表帧的检查，没有声称每张平移后的 PNG 都逐一重渲染比较。

全包格式检查为 **0 errors、0 warnings**。阴影固定投影到同一地面，描边与 3× 显示缓存提前生成。首次进入不同战斗时的实际耗时仍需继续观察。

[变形检查](/demos/necropolis-final-four-01/motion-checks.json) · [过渡端点](/demos/necropolis-final-four-01/transitions.json) · [格式检查](/demos/necropolis-final-four-01/validation.json) · [客户端读取记录摘要](/demos/necropolis-final-four-01/native-loads.json)。这些资源和数值检查不替代后续的游戏观感反馈。

工具继续放在 [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/docs/necropolis-final-four.md)，模型与完整 mod 留在本地。本轮没有修改 VCMI 源码。

{{< history title="初模阶段与失败概念（展开）" note="以下为接入前的原文，保留当时的图片、计划与结论。未完成状态指初模阶段，2026-09-09 的 0.12.0 交付情况见正文。" >}}


墓园还剩黑暗骑士、恐怖骑士、骨龙和鬼龙。这四个需要新的运动结构：骑士要处理马的四条腿和骑手的坐姿，龙要处理双翼、长颈与尾巴。现有步行人形骨架不能直接套用。

目前完成了四张参考概念、三个 Meshy 三维初模，以及四个兵种的 **1400×1600 Blender 静态渲染**。鬼龙共用骨龙几何，在 Blender 中试幽白材质。这些还没有绑定和完整动画，**~~尚未接入游戏~~**；游戏里的四个兵种仍用原版。

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

{{< /history >}}
