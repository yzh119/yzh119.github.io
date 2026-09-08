---
title: "[AI]opus -> astra：骷髅的连续动画"
date: 2026-09-08T12:13:00+08:00
lastmod: 2026-09-08T12:28:32+08:00
series: ["英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "astra"]
---

骷髅得先能走、能挥剑，才能判断上一轮修好的体态和双手在动作里是否仍然成立。
这轮继续用 Astra 写本地 Blender 工具，把[四个独立姿势](/zh/posts/skeleton-rig-study/)
扩成了待机、行走、正面攻击，以及起步、收步五段连续动画。

从 Opus-5 切到 Astra 之后，工作已经从修补生成结果推进到了直接编辑网格、骨架和动画。
这轮仍然复用原模型的头骨、胸廓、骨盆与贴图，没有新增 Meshy 调用。

<figure>
  <video controls loop muted playsinline preload="metadata" poster="/images/vcmi/skeleton-motion-attack_front.gif" src="/images/vcmi/skeleton-motion-attack_front.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>正面攻击的 30 fps 预览，按游戏 2 倍尺寸显示。可以暂停、拖动检查蓄力、落脚、挥剑和收势。目前只有身体层。</figcaption>
</figure>

攻击时后脚支撑，前脚抬起后向前落下，再单独抬脚收回。右手连同剑的朝向在关键姿势间
插值，剑柄、护手、剑刃仍然是挂在手骨上的独立物体。左手保持固定的张开造型，手指还没
逐根做动画。

四肢也继续细化了：骨干带弯曲和粗细变化，前臂、小腿保留两根骨头，膝部和上臂两端补了
关节形状。表面噪声绑定在静止网格的坐标上，避免角色移动时纹理在骨头上游动。

## 行走的脚底

<figure>
  <video controls loop muted playsinline preload="metadata" poster="/images/vcmi/skeleton-motion-moving.gif" src="/images/vcmi/skeleton-motion-moving.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>行走循环，原地显示。支撑脚检查会另外加回角色应有的前进距离；视频里没有模拟战场位移。</figcaption>
</figure>

第一版行走的剑太平，双手也缩在胸前。按这次反馈，改成全程朝上持握，剑刃仰角保持在
57–73 度；持剑手抬高，空手放低，躯干前倾减小。起步、收步也跟着更新。这里记录的是
修正后的设计范围，没有声称逐帧复刻原版。本页的视频和对照图已换成这一版。

引擎的走路速度和动画播放速度一起决定步幅。当前代码里，走路每秒播放
`10 × speedFactor / walkAnimationTime` 帧，角色每秒移动
`2 × speedFactor / walkAnimationTime` 格。因此八帧循环前进 **1.6 格**；横向每格
44 像素，一轮就是 **70.4 像素**。

制作时把这个距离换算成模型单位。支撑阶段脚踝相对身体向后移动；加回身体前进量以后，
脚踝应该留在地面同一个位置。这个检查目前针对直线横向移动，斜向路径和中途停步还要
进游戏看。

第一次重新打开保存文件测量，整数帧没问题，半帧位置却有约 **0.47 像素**的滑动。
Blender 的 Python 插帧实际生成了 Bezier 曲线，没有采用界面里设的线性插值。
直接改每条动画曲线后，相同检查降到了 **0.0033 像素以内**。

## 预览与游戏帧数

高帧率只用于检查动作。近战攻击在引擎里按固定帧速率播放，增加帧数会把动作拖长；
`attackAnimationTime` 对近战攻击不起作用。这轮导出的原始帧数仍然是：待机 8、行走 8、
正面攻击 8、起步 2、收步 2。另有 1 倍和 2 倍两套身体层。

<figure>
  <img src="/images/vcmi/skeleton-motion-native-frames.png" alt="原版与新动画的待机、行走、攻击八帧对照">
  <figcaption>每组上排原版，下排新动画，使用实际 1 倍像素尺寸。整排共用比例和裁切位置，没有逐帧放大缩小；攻击按动作阶段对照，不代表已匹配原版播放节奏。可打开图片查看原尺寸。</figcaption>
</figure>

五个 `.blend` 都保留可编辑动画曲线、IK 控制点和打包贴图。重新打开后检查了 **245 个
整数帧及半帧位置**：手脚目标最大误差约 0.000089 个模型单位，剑刃长度变化小于
0.000001。待机和行走闭环、攻击回到待机、起步和收步的端点衔接也通过检查。
这些检查没有覆盖全身碰撞，也不能判断动作是否足够有表现力。

剩下要补选中、受击、死亡、防御、转身及其他攻击方向，再接回阴影、阵营覆盖层和完整 mod，
做实机战斗验收。兵种顺序已经改成**骷髅之后做僵尸**，先不扩到木精灵和法师。
第二个角色用过这套工具，再决定哪些接口值得拆成独立仓库。

代码和复现命令在 [PR #10](https://github.com/yzh119/vcmi/pull/10)，包含连续动画生成器、
四肢细化、预览工具和保存后的动画检查。
