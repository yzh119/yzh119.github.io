---
title: "[AI]opus -> astra：僵尸的十三组动画"
date: 2026-09-08T13:30:00+08:00
lastmod: 2026-09-08T13:59:32+08:00
series: ["英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "astra"]
---

骷髅之后开始做僵尸，看看上一轮写的 Blender 工具能在第二个兵种上复用多少。
待机、行走和正面攻击之后，其余十组也已补齐，这篇记录现在更新到全套十三组。代码继续由 Astra 编写，
复用之前 Meshy 生成的身体和贴图，没有新增 Meshy 调用。

[十三组动画和原版逐帧对照](/demos/zombie-motion-full-01/)已经可以播放、暂停和拖动。
目前是身体层预览，还没装进游戏。

## 砍刀

重新看 `CZOMBI.DEF` 才发现旧配置漏掉了武器。原版僵尸拿着短砍刀，
正面攻击先举过头顶，再往前劈。旧配置写的是空手，攻击只是把骷髅的动作幅度缩小。

<figure>
  <video controls loop muted playsinline preload="metadata" poster="/demos/zombie-motion-full-01/attack_front.gif" src="/demos/zombie-motion-full-01/attack_front.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>举刀、劈下、收势。30 fps 预览，按游戏 2 倍尺寸显示。</figcaption>
</figure>

右手重新做了掌部、四根弯曲的手指和拇指。刀柄和刀刃挂在手骨上的独立挂点，
不参与身体蒙皮。左手保留原模型张开的手指。目前握刀手的材质比较简单，
手指也还没有单独做动画。

## 身体和骨架

僵尸要保留皮肤在肘、膝处的连续变形，不能直接搬骷髅那套独立骨头。
这次保留了 **24,400** 个带原贴图和权重的顶点，身体使用保体积蒙皮。

导入骨架的关节位置正常，骨骼末端却伸得很远：最长一根是 **42.666** 个模型单位，
角色本身只有约 1.7 高。按相邻关节重建后，那段长度是 **0.426664**。
原来的旋转动画不一定会因此把身体拉长，但这样的骨骼长度不能直接用于两段 IK。

腕部和脚踝现在各有目标点，肘、膝各有控制弯曲方向的目标。
十三组动作都存成带贴图的 `.blend`，可以继续编辑，也能从脚本和配置重新生成。

## 拖步

<figure>
  <video controls loop muted playsinline preload="metadata" poster="/demos/zombie-motion-full-01/moving.gif" src="/demos/zombie-motion-full-01/moving.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>原地行走循环。右脚抬得低，左脚抬得稍高，持刀手随身体小幅摆动。</figcaption>
</figure>

这一版步幅是 0.38 个模型单位，单脚支撑阶段占周期的 68%。
右脚抬高 0.035，左脚抬高 0.070，身体跟着轻微起伏。
检查滑步时会加回假设的前进距离；视频本身没有模拟战场位移。

原版待机 **8 帧**、行走 **10 帧**、正面攻击 **7 帧**，
这轮分别导出了相同数量的 1 倍和 2 倍身体层。预览的播放时长是这次设定的，
帧数一致还不能说明游戏里的速度已经对上。

[原版与新版的行走序列](/demos/zombie-motion-full-01/moving-frames.png)按固定尺寸并排，
没有给每一帧单独缩放。原版的身体轮廓和摆动幅度仍是接下来调整的依据。

## 受击、防御与死亡

受击先缩身，再后仰并张开双臂，最后回到待机。防御把刀举到头侧，
屈膝承受冲击后收回。

<figure>
  <video controls loop muted playsinline preload="metadata" src="/demos/zombie-motion-full-01/hitted.mp4" style="width:360px;max-width:100%"></video>
  <video controls loop muted playsinline preload="metadata" src="/demos/zombie-motion-full-01/defence.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>受击与防御，分别导出原版的 7 帧与 8 帧；这里播放 30 fps 预览。</figcaption>
</figure>

原版死亡是向后倒、屈腿落地。这一版也按这个方向编排，先后仰举起双手，
再弯腿后倒，最后仰躺。根节点带动身体、蒙皮和控制点一起倾倒，
同时根据变形后网格的最低点修正高度。刀仍然跟着手，落地后的腿部造型与原版还有差异。

<figure>
  <video controls muted playsinline preload="metadata" src="/demos/zombie-motion-full-01/death.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>死亡的 9 帧输出另有连续预览，最后停在仰躺姿势。</figcaption>
</figure>

## 转身、起步和攻击方向

左右转身各三帧，整个角色转动。预览按引擎顺序拼接：先播 `TURN_L`，
切换显示朝向，再播 `TURN_R`。两组动作共享中间姿势。

<figure>
  <img src="/demos/zombie-motion-full-01/turn-order.gif" alt="僵尸按原版三帧转身组切换朝向">
  <figcaption>前后加了待机停顿，方便查看转身衔接。</figcaption>
</figure>

起步和停步在原版都只有一帧。编辑文件保留完整过渡，游戏输出各取一个中间姿势。
向上、正面、向下攻击分别设置手腕和身体目标，落刀阶段的刀尖高度约为
1.857、0.996、0.390 个模型单位。向下攻击会屈膝、俯身。

<figure>
  <video controls loop muted playsinline preload="metadata" src="/demos/zombie-motion-full-01/attack_up.mp4" style="width:360px;max-width:100%"></video>
  <video controls loop muted playsinline preload="metadata" src="/demos/zombie-motion-full-01/attack_down.mp4" style="width:360px;max-width:100%"></video>
  <figcaption>向上与向下劈砍，每组仍为 7 帧。</figcaption>
</figure>

## 检查与后续

十三组共 **80 帧**，分别导出 1 倍和 2 倍身体层，另有 **338 帧**连续预览。
重新打开保存的动画检查了 **667** 个整帧和半帧位置，最大 IK 误差约 0.000094，
支撑脚漂移约 0.000022 个模型单位。检查也覆盖了转身衔接、起停端点、
动作收回待机和三个攻击方向的刀尖高度。

身体最低点仍有约 0.00147 的地面穿入，在当前 0.002 的容差内。
死亡末帧的身体最高点约为 0.589 个模型单位。这些数值检查绑定和运动关系，
外观仍要继续看：旧模型偏干瘦，衣物和皮肤与原版不同，握刀手与身体的材质还需要协调。

阴影和归属覆盖层、完整 mod，以及装进战斗后的速度与接地检查仍待完成。
当前全套预览只含身体层。

代码和复现步骤在 [PR #10](https://github.com/yzh119/vcmi/pull/10)，
包括僵尸骨架、握刀手、十三组动作、原版帧数导出和保存后的动画检查。
