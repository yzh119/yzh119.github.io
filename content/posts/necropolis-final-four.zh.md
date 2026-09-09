---
title: "[AI]黑暗骑士与骨龙动画"
date: 2026-09-09T07:23:02+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra", "meshy"]
lastmod: 2026-09-09T04:33:06+00:00
---

黑暗骑士和恐怖骑士的攻击在实战中被指出“非常奇怪”。逐帧对照原版后，原因很清楚：**0.12.0 的马几乎没有起落，挥刀被缩成了手边的小动作**。此前降低关节幅度让拉伸检查通过，却也丢掉了攻击的主要姿势。

本地动画包现已更新为 **0.12.2**。两种骑士重新绑定持刀侧的手臂和弯刀，重做九组攻击；它们的全部 **29 组、205 张 2× 主体帧**也重新渲染，让待机、行走与攻击使用同一套手臂。其他兵种没有重做模型或动作；四个末级兵种的展示位置现已全部校正。整个墓园仍是十四个兵种，没有修改 VCMI 源码。

![修正后的四个兵种展示，离线合成](/demos/necropolis-final-four-03/showcase-four.png)

[当前 55 组动画展示](/demos/necropolis-final-four-03/)使用固定画布离线合成，待机 4 fps、其余 8 fps，供逐帧查看，不代表游戏播放速度。

## 骑士的起落与挥刀

![黑暗骑士攻击：0.12.0 与修正版本逐帧对照](/images/necropolis-final-four/knight-attack-correction.png)

原版动作是马抬起前身，骑手举刀；马落下时，骑手前倾劈砍，随后收回。新版按这个顺序安排关键姿势，前腿在抬身时折起，后蹄在前后方向保持支撑位置。向上、正前、向下攻击分别调整刀的落点，恐怖骑士另保留三组特殊攻击。

弯刀的绑定也有实际错误。旧的空间选择范围没有覆盖弯曲的刀尖，部分顶点跟着马颈运动，另一些权重混进了骑手靴子。单纯把动作放大，会同时扯动刀、手和靴子。

![第一次放大动作的失败试渲染，刀与靴子出现拉扯](/images/necropolis-final-four/knight-attack-binding-failure.png)

这次切除了粘连的持刀手臂和刀面，用 Blender 几何重建分关节的护甲手臂、手套、护手与弯刀。刀作为刚体跟随持刀手，不再沿它与马身的粘连处平滑权重。其余马身与骑手仍使用已有 Meshy 初模；没有新增生成服务请求。护甲手臂的局部造型也随重建略有变化。

第一次重建的切除范围太宽，碰到了腰侧布料，新增肩甲也过于生硬。高清静帧暴露了这些缺口；随后按手臂段和刀身曲线收紧切除范围，保留原来的贴图肩甲，并重新处理护甲表面。

![被弃用的第一版手臂重建，腰侧布料缺口与粗糙肩甲](/images/necropolis-final-four/knight-arm-rebuild-rejected.png)

黑暗骑士还经历了一次单独清理：它的旧刀比恐怖骑士向下弯得更深，共用的曲线范围留下了第二截刀身。高清图检查发现后，按这份模型重新拟合切除范围，清理残片并重新检查全部动作。

![黑暗骑士旧刀残片的失败版本，已弃用](/images/necropolis-final-four/black-knight-old-blade-remnant.png)

## 兵种介绍框的对齐

黑暗骑士、恐怖骑士、骨龙和鬼龙四个双格兵种现已全部校正。0.12.1 只改了恐怖骑士与骨龙，用户指出遗漏了黑暗骑士与鬼龙，这两个在 **0.12.2** 补齐。VCMI 对双格兵种从逻辑 x=170 开始裁切，单格兵种从 x=150 开始；先前离线画廊误用了单格窗口，掩盖了游戏里的偏左。

四个兵种的主体、阴影和描边相对 0.12.0 向右平移 **20 个逻辑像素**，实际介绍框内的待机轮廓中心都回到约 **50/100**。恐怖骑士和骨龙沿用 0.12.1 的位置，没有重复平移。各分辨率保留全部可见像素；共用的战斗素材也同步平移，左右朝向均已核对。画廊使用真实的双格裁切。

![四个兵种的真实介绍框裁切，校正前后离线对照](/images/necropolis-final-four/all-four-panel-centering.png)

## 高清 Blender 静帧

![黑暗骑士，修正绑定后的 Blender 静帧](/images/necropolis-final-four/black-knight-rigged-02.png)

![恐怖骑士，修正绑定后的 Blender 静帧](/images/necropolis-final-four/dread-knight-rigged-02.png)

![骨龙，Blender 静帧](/images/necropolis-final-four/bone-dragon-rigged.png)

![鬼龙，Blender 静帧](/images/necropolis-final-four/ghost-dragon-rigged.png)

这些是 **1400×1600** 的实际 Blender 渲染。两种骑士使用本次场景；两种龙保留 0.12.0 场景。概念图与旧版静帧在下方历史区。

## 检查与保留差异

两种骑士重新打开场景，检查了 **381 个原帧和帧间采样**，大幅拉伸阈值命中为 0。修正帧直接从带地面支撑的场景渲染，再生成固定地面阴影、描边和 3× 显示缓存。格式检查为 **0 errors、0 warnings**。这些检查不能代替实战中的动作观感；上次的用户反馈正好指出了数值检查没有覆盖的问题。

四个末级兵种合计仍为 **55 组、365 张独立 2× 主体帧**。1× 是缩小版本，3× 是提前缩放的显示缓存，并非新增原生 3× 细节。原 DEF 的重复转向 9、10 组在当前 VCMI 中不用，其余组保持原帧数。

骨龙与鬼龙的死亡仍是倒地收拢，尚未逐骨散成原版的骨堆；鬼龙翼膜也仍偏实体。两种龙保留原有模型和动作，只作介绍框对齐所需的画布平移。0.12.0 的客户端日志已经确认四个新兵种接入战斗，本次更新检查的是替换资源与保存场景，没有声称完成了全部动作的人工实战验收。

[变形检查](/demos/necropolis-final-four-03/motion-checks.json) · [攻击姿势测量](/demos/necropolis-final-four-03/attack-audit.json) · [格式检查](/demos/necropolis-final-four-03/validation.json)。复现工具放在 [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/docs/necropolis-final-four.md)，模型和完整 mod 继续留在本地。

{{< history title="0.12.1 只校正两个兵种时的记录（历史）" note="这一版只处理了恐怖骑士和骨龙，正文现已补齐黑暗骑士和鬼龙。" >}}

## 兵种介绍框的对齐

~~用户随后指出骨龙与恐怖骑士在介绍框里偏左。VCMI 对双格兵种从逻辑 x=170 开始裁切，单格兵种从 x=150 开始；先前离线画廊误用了单格窗口，所以没表现出游戏里的偏左。按真实双格窗口测量，这两个兵种的待机轮廓中心约在 100 像素框的 x=30。~~

~~本次将它们的全部主体、阴影和描边向右平移 **20 个逻辑像素**，中心回到约 x=50。每个分辨率使用对应整数位移，保留全部可见像素。**这不是仅对介绍框生效的偏移**：现有配置共用战斗动画，所以战斗中的素材也同步平移，左右朝向均作核对。画廊现按真实的双格裁切展示。~~

![骨龙和恐怖骑士的真实介绍框裁切，修正前后离线对照](/images/necropolis-final-four/panel-centering-correction.png)



~~其他兵种没有重做模型或动作；骨龙另做了展示位置校正。~~

~~骨龙只作上述画布平移，鬼龙素材未改动。~~

[0.12.1 gallery](/demos/necropolis-final-four-02/)

{{< /history >}}

{{< history title="0.12.0 首次动画交付与后续被否定的攻击（展开）" note="以下保留修正前的文字和图像。骑士攻击的幅度限制未能保证观感，旧画廊对双格兵种的介绍框裁切也有误；当前 0.12.2 的姿势与对齐见正文。" >}}

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

~~骑士使用马身、头颈、四条腿、尾巴与独立骑手控制。马腿采用对角相位，并计算腿部关节；挥刀分为抬臂、劈下、收回，恐怖骑士另有三组特殊攻击。它的铠甲权重允许的活动范围更小，攻击幅度经过了限制。~~

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

{{< /history >}}

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
