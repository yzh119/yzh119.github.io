---
title: "[AI]opus -> astra：骷髅的十三组动画"
date: 2026-09-08T12:13:00+08:00
lastmod: 2026-09-08T16:12:19+08:00
series: ["英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "astra"]
---

**游戏接入更新：**最新动画已装入本地 `necropolis-creature-animations`，提供 1x/2x。
这是未升级骷髅兵，升级骷髅勇士和大地图外观仍沿用原版。身体沿用本篇审阅动作，并补入下述画布校准。
阴影与悬停描边由离线工具调用 VCMI 算法生成，属于简化投影；原有视频仍只展示身体层。
与行尸合包共 324 张身体图片，原版 DEF 对照检查零错误、零警告，客户端加载成功。

用户随后指出骷髅在兵种展示画框里靠右。原展示框固定从画布 x=150 裁剪，新模型中心
在 x=224.5，于是落在 100 像素宽的框内 x=74.5。按用户要求，这个问题用 mod 素材处理，
临时尝试的引擎代码和配置字段已全部撤回。将全部 164 张骷髅图片统一左移 25 个逻辑像素
（2x 为 50）后，展示中心为 x=49.5，原有画布尺寸、可见像素和动画时序均保留。
这也会调整战斗画布内的位置：待机底部区域的横向中心由 219.2 变为 194.2，原版为 196.5。
它不是只作用于展示框的偏移。更新后的本地包为 0.3.0，重启即可清除旧图片缓存。

![原版、调整前、mod 素材校准后的离线裁剪对照](/demos/necropolis-creatures-game-01/preview-centering.png)

这张图按展示框的背景和裁剪参数离线合成，并非游戏截图。完整战斗接触和效果仍待实测。
首次展示动画时卡顿，随后就顺畅，是这次收到的实际反馈。0.3.0 将阴影和描边移到了
打包阶段：离线工具直接调用 VCMI 现有 SDL3 算法，保存 324 张阴影和 72 张待机／悬停描边，
再删除动画配置中的现场生成标记。游戏沿用已有的分层 PNG 加载方式，身体帧、分辨率和
动作时序不变，引擎源码也不用改。396 张效果图片逐像素对比原算法全部一致，
最终素材检查零错误、零警告。

本机单独进程遍历两种倍率的全部 324 帧，现场计算效果用时 **203.8 秒**，加载提前生成的
效果用时 **0.51 秒**，另一次加载为 0.49 秒。这是整包图片准备的基准，游戏实际按需加载，
并不会在首次打开画框时遍历整包。测试没有清空系统磁盘缓存，也不包含 GPU 上传和游戏
启动，因此不能把这个比值当作游戏启动提速。[原始测量记录](/demos/necropolis-creatures-game-01/benchmark.json)
保留了测试范围。重启 VCMI 后生效，实际首次显示的停顿还需要在游戏里复看。

[PR #10](https://github.com/yzh119/vcmi/pull/10)包含接入记录和素材画布校准工具，无本轮引擎改动。

骷髅得先能走、能挥剑，才能判断上一轮修好的体态和双手在动作里是否仍然成立。
这轮继续用 Astra 写本地 Blender 工具，把[四个独立姿势](/zh/posts/skeleton-rig-study/)
扩成了十三组连续动画。受击、防御、死亡、转身和另外两个攻击方向也已补齐。

[逐组播放与原版对照](/demos/skeleton-motion-full-03/)可以查看全部十三组；每组都能暂停、拖动。

从 Opus-5 切到 Astra 之后，工作已经从修补生成结果推进到了直接编辑网格、骨架和动画。
这轮仍然复用原模型的头骨、胸廓、骨盆与贴图，没有新增 Meshy 调用。

<figure>
  <video controls loop muted playsinline preload="metadata" poster="/demos/skeleton-motion-full-03/attack_front.gif" src="/demos/skeleton-motion-full-03/attack_front.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>正面攻击的 30 fps 预览，按游戏 2 倍尺寸显示。可以暂停、拖动检查蓄力、落脚、挥剑和收势。目前只有身体层。</figcaption>
</figure>

攻击时后脚支撑，前脚抬起后向前落下，再单独抬脚收回。右手连同剑的朝向在关键姿势间
插值，剑柄、护手、剑刃仍然是挂在手骨上的独立物体。左手保持固定的张开造型，手指还没
逐根做动画。

四肢也继续细化了：骨干带弯曲和粗细变化，前臂、小腿保留两根骨头，膝部和上臂两端补了
关节形状。表面噪声绑定在静止网格的坐标上，避免角色移动时纹理在骨头上游动。

## 行走的脚底

<figure>
  <video controls loop muted playsinline preload="metadata" poster="/demos/skeleton-motion-full-03/moving.gif" src="/demos/skeleton-motion-full-03/moving.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>行走循环，原地显示。支撑脚检查会另外加回角色应有的前进距离；视频里没有模拟战场位移。</figcaption>
</figure>

持剑手和腿的配合又修了一轮。之前虽然补了摆臂，右手却和右脚同时向前，
看起来有点同手同脚。现在每只手按同侧脚的前后位置反向摆动；手腕和肘部目标一起动，
上臂绕肩膀转动。右手相对肩膀的前后行程约 0.353 个模型单位。

“剑朝上”也不能理解成整个周期都朝上。按原版和这次补充反馈，
持剑手摆到前方时剑抬起，摆到后方时剑放平。这一版的剑刃仰角随摆臂从约 0°
变到 65°，起步和收步沿用新的行走端点。

检查同侧手脚的前后位置，右侧相关系数从 +0.923 变为 −0.999，
左侧从 +0.329 变为 −0.983。负值表示反向运动；检查同时要求前摆时的剑比后摆时更高。
这些数值用来防止同手同脚和持剑角度回退，画面仍需要对照原版看。

<figure>
  <img src="/demos/skeleton-motion-full-03/walk-comparison.gif" alt="原版、同侧配合错误的上一版和修正后的行走对照">
  <figcaption>左边原版，中间上一版，右边新版。使用各自的八帧输出和固定裁切，在相同预览速度下比较手臂轨迹。</figcaption>
</figure>

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

## 受击、防御和死亡

受击会先后仰，再向前缓冲并回到待机；防御会举剑、受力后退，再收回架势。

<figure>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/hitted.mp4" style="width:360px;max-width:100%"></video>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/defence.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>受击与防御，分别保留原版的 6 帧和 11 帧输出；这里显示 30 fps 检查动画。</figcaption>
</figure>

死亡分为后仰、跪倒、身体前折和伏地。最后一帧停在地面上，剑仍然跟着手。
原版最后会散成骨堆，这一版采用连着骨架伏地的造型。生成时检查整个网格的最低点，
需要时把模型整体抬起少量，避免胸廓或剑穿进地面。

<figure>
  <video controls muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/death.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>死亡动画停在伏地姿态；可以重新播放检查过程。</figcaption>
</figure>

## 转身与攻击方向

转身新增了带动整个角色的根节点，身体、控制点和几何一起转。引擎先播放 `TURN_L`，
切换显示方向，再播放 `TURN_R`；两个动作各两帧，共用中间的正面姿势。

<figure>
  <img src="/demos/skeleton-motion-full-03/turn-order.gif" alt="左右转身按引擎顺序播放，中途切换显示方向">
  <figcaption>按原版帧数拼接的转身预览，前后加了待机停顿。这里只模拟显示方向切换，还没有实机验收。</figcaption>
</figure>

向上、正面、向下攻击分别编写手腕和躯干目标。命中阶段剑尖高度约为 1.840、1.211、
0.241 个模型单位。向下攻击的空手最初在两帧之间超出可达范围 0.002186 个单位，
把手腕目标收近后，十三组动作的最大 IK 误差降到了 0.000091 以内。

<figure>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/attack_up.mp4" style="width:360px;max-width:100%"></video>
  <video controls loop muted playsinline preload="metadata" src="/demos/skeleton-motion-full-03/attack_down.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>向上与向下攻击，保留此前的蓄力、抬脚和收势结构。</figcaption>
</figure>

## 预览与游戏帧数

高帧率只用于检查动作。近战攻击在引擎里按固定帧速率播放，增加帧数会把动作拖长；
`attackAnimationTime` 对近战攻击不起作用。这轮导出的原始帧数仍然是：待机 8、行走 8、
三个方向攻击各 8、起步和收步各 2、选中和防御各 11、受击和死亡各 6、左右转身各 2。
总计 **13 组、82 帧**，另有 1 倍和 2 倍两套身体层。

<figure>
  <img src="/demos/skeleton-motion-full-03/native-frames.png" alt="原版与新动画的待机、行走、攻击八帧对照">
  <figcaption>每组上排原版，下排新动画，使用实际 1 倍像素尺寸。整排共用比例和裁切位置，没有逐帧放大缩小；攻击按动作阶段对照，不代表已匹配原版播放节奏。可打开图片查看原尺寸。</figcaption>
</figure>

十三个 `.blend` 都保留可编辑动画曲线、IK 控制点和打包贴图。重新打开后检查了 **577 个
整数帧及半帧位置**：手脚目标最大误差约 0.000091 个模型单位，剑刃长度变化小于
0.000001。待机和行走闭环、攻击回到待机、起步和收步的端点衔接也通过检查。
这些检查没有覆盖全身碰撞，也不能判断动作是否足够有表现力。

接下来要接回阴影、阵营覆盖层和完整 mod，做实机战斗验收。当前导出的是身体层，
还没有作为完整替换包安装进游戏。[僵尸的十三组动画](/zh/posts/zombie-study/)也已做出身体层预览，先不扩到木精灵和法师。
第二个角色用过这套工具，再决定哪些接口值得拆成独立仓库。

代码和复现命令在 [PR #10](https://github.com/yzh119/vcmi/pull/10)，包含连续动画生成器、
四肢细化、预览工具和保存后的动画检查。
