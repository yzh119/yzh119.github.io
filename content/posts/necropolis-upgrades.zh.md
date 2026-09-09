---
title: "[AI]墓园升级兵种"
date: 2026-09-08T23:07:02+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "astra"]
lastmod: 2026-09-09T05:48:54+08:00
---

> 本文记录发布时的实现与测量。文中的版本号、费用和检查数量属于该阶段；后续兵种安装记录见[吸血鬼交付](/zh/posts/necropolis-vampires/)，现行工具入口见[独立仓库](/zh/posts/h3-art-tools/)。

**后续试做：**[幽灵和尸巫被否掉的程序造型，以及改用 imagegen、Meshy 的过程](/zh/posts/necropolis-bootstrap/)已另写一篇，包含失败图片与实际三维对照。


骷髅和行尸的动作、展示位置和背景已经有了可复用的版本。这次接着做它们的升级兵种：骷髅勇士 `CWSKEL` 和升级僵尸 `CZOMLO`。两种都已经渲染完十三组动作，本文放出全部播放预览。

[打开两种兵种的全部 26 组动画](/demos/necropolis-upgrades-01/)。下面的图片和视频使用确认过的新背景，按游戏展示框裁剪离线合成，并非游戏截图。待机按 4 fps、其他动作按 8 fps 播放，方便检查姿势；这不是游戏时序测试。

## 骷髅勇士

![骷髅勇士的待机、行走、攻击和死亡](/demos/necropolis-upgrades-01/cwskel-poses.png)

在骷髅的可编辑模型上增加了铁盔、胸甲、肩甲、护腿和圆盾。装备绑定到对应骨骼，圆盾随左手运动。剑仍用独立挂点，保留前一轮左右手脚交替的步态，以及手臂在前时剑抬起、在后时可以放平的变化。

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-upgrades-01/cwskel-moving.mp4" style="width:200px;max-width:100%"></video>

加装备后，原来的死亡姿势需要再检查一次。身体可以落地，头盔和盾牌却可能穿下去。按变形后的实际顶点测量，修正前最低处为 **−0.072617** 个模型单位；死亡动作的根节点最多上移 **0.075617**，修正后的采样最低值约为 **−0.000032**，在 0.002 的容差内。其他动作保持原来的身体运动。

## 升级僵尸

![升级僵尸的待机、行走、攻击和死亡](/demos/necropolis-upgrades-01/czomlo-poses.png)

升级版增加头盔、皮衣和斜挎带，调整裤子与靴子的材质，砍刀的刀身加宽、加长。身体仍使用此前的蒙皮和动作，保留拖步、举刀劈砍以及向后倒地。

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-upgrades-01/czomlo-attack_front.mp4" style="width:200px;max-width:100%"></video>

这次地面检查还发现，旋转后的包围盒不能当成真实的最低顶点。僵尸的包围盒看起来穿地，检查实际网格后最低点约为 **−0.000266**，无需额外抬升。原始采样放在[测量记录](/demos/necropolis-upgrades-01/measurements.json)中。

## 素材包与工具

骷髅勇士每个倍率 **82 帧**，升级僵尸 **80 帧**，各十三组。输出保留原版帧数和画布，2x 身体渲染缩成 1x；阴影和悬停描边提前生成。阴影沿用固定地面的二维投影，仍不是三维物理阴影。

0.8.0 候选包加入这两种升级兵种，原有骷髅、行尸和高清背景文件保留不变。合包检查得到 **84 条信息、零错误、零警告**，[验证记录](/demos/necropolis-upgrades-01/validation.json)已公开。0.8.0 交付时已安装进本地游戏，并备份了 0.7.0。安装目录的 1,463 个文件与候选包逐一校验一致，安装后检查仍为零错误、零警告。客户端已启动并成功加载该 mod；完整战斗中的动作接触与时序仍待逐项验收。本文视频保留为离线预览。

从 opus 迁移到 astra 后，这一阶段由 Astra 编写 Blender 装备、落地修正、打包和检查工具。继续复用之前 Meshy 生成的基础身体和贴图，这次没有新增 Meshy 调用。装备、动作修正和渲染都在本地完成。相关工具在 [PR #10](https://github.com/yzh119/vcmi/pull/10)，引擎源码未改。

后续已完成[幽灵](/zh/posts/necropolis-ghosts/)、[尸巫](/zh/posts/necropolis-liches/)和[吸血鬼](/zh/posts/necropolis-vampires/)两种形态；~~剩余黑暗骑士、恐怖骑士、骨龙和幽灵龙。~~ 2026-09-09：这四个兵种已随 ~~0.12.1~~ [0.12.2 接入](/zh/posts/necropolis-final-four/)。原表格保留在历史记录中。

工具在 [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline) 维护；模型和完整 mod 留在本地。[工具迁移与复现](/zh/posts/h3-art-tools/)。

## 历史记录

{{< history title="历史原文与修订记录（展开阅读）" note="以下完整保留本次整理前的原文、图片和删除线。这里的“当前”“尚未完成”和“下一步”均指各段写作或标注时的状态；旧版本号、旧工具路径与试稿不能作为现行操作说明。" >}}

0.12.0 时的状态说明，现用补丁版本见正文：

~~后续已完成[幽灵](/zh/posts/necropolis-ghosts/)、[尸巫](/zh/posts/necropolis-liches/)和[吸血鬼](/zh/posts/necropolis-vampires/)两种形态；~~剩余黑暗骑士、恐怖骑士、骨龙和幽灵龙。~~ 2026-09-09：这四个兵种已随 [0.12.0 接入](/zh/posts/necropolis-final-four/)。原表格保留在历史记录中。~~


> **2026-09-09 工具迁移：** 后续代码在 [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline) 维护，原 `tools/creature-art/` 与 `tools/town-art/` 对应新仓库的 `creature-art/` 与 `town-art/`。本文的旧路径和 PR 链接保留作历史记录。[迁移与复现说明](/zh/posts/h3-art-tools/)。

**后续试做：**[幽灵和尸巫被否掉的程序造型，以及改用 imagegen、Meshy 的过程](/zh/posts/necropolis-bootstrap/)已另写一篇，包含失败图片与实际三维对照。


骷髅和行尸的动作、展示位置和背景已经有了可复用的版本。这次接着做它们的升级兵种：骷髅勇士 `CWSKEL` 和升级僵尸 `CZOMLO`。两种都已经渲染完十三组动作，本文放出全部播放预览。

[打开两种兵种的全部 26 组动画](/demos/necropolis-upgrades-01/)。下面的图片和视频使用确认过的新背景，按游戏展示框裁剪离线合成，并非游戏截图。待机按 4 fps、其他动作按 8 fps 播放，方便检查姿势；这不是游戏时序测试。

## 骷髅勇士

![骷髅勇士的待机、行走、攻击和死亡](/demos/necropolis-upgrades-01/cwskel-poses.png)

在骷髅的可编辑模型上增加了铁盔、胸甲、肩甲、护腿和圆盾。装备绑定到对应骨骼，圆盾随左手运动。剑仍用独立挂点，保留前一轮左右手脚交替的步态，以及手臂在前时剑抬起、在后时可以放平的变化。

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-upgrades-01/cwskel-moving.mp4" style="width:200px;max-width:100%"></video>

加装备后，原来的死亡姿势需要再检查一次。身体可以落地，头盔和盾牌却可能穿下去。按变形后的实际顶点测量，修正前最低处为 **−0.072617** 个模型单位；死亡动作的根节点最多上移 **0.075617**，修正后的采样最低值约为 **−0.000032**，在 0.002 的容差内。其他动作保持原来的身体运动。

## 升级僵尸

![升级僵尸的待机、行走、攻击和死亡](/demos/necropolis-upgrades-01/czomlo-poses.png)

升级版增加头盔、皮衣和斜挎带，调整裤子与靴子的材质，砍刀的刀身加宽、加长。身体仍使用此前的蒙皮和动作，保留拖步、举刀劈砍以及向后倒地。

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-upgrades-01/czomlo-attack_front.mp4" style="width:200px;max-width:100%"></video>

这次地面检查还发现，旋转后的包围盒不能当成真实的最低顶点。僵尸的包围盒看起来穿地，检查实际网格后最低点约为 **−0.000266**，无需额外抬升。原始采样放在[测量记录](/demos/necropolis-upgrades-01/measurements.json)中。

## 素材包与工具

骷髅勇士每个倍率 **82 帧**，升级僵尸 **80 帧**，各十三组。输出保留原版帧数和画布，2x 身体渲染缩成 1x；阴影和悬停描边提前生成。阴影沿用固定地面的二维投影，仍不是三维物理阴影。

0.8.0 候选包加入这两种升级兵种，原有骷髅、行尸和高清背景文件保留不变。合包检查得到 **84 条信息、零错误、零警告**，[验证记录](/demos/necropolis-upgrades-01/validation.json)已公开。**接入更新：0.8.0 已安装进本地游戏，0.7.0 已备份。**安装目录的 1,463 个文件与候选包逐一校验一致，安装后检查仍为零错误、零警告。客户端已启动并成功加载该 mod；完整战斗中的动作接触与时序仍待逐项验收。本文视频保留为离线预览。

从 opus 迁移到 astra 后，这一阶段由 Astra 编写 Blender 装备、落地修正、打包和检查工具。继续复用之前 Meshy 生成的基础身体和贴图，这次没有新增 Meshy 调用。装备、动作修正和渲染都在本地完成。相关工具在 [PR #10](https://github.com/yzh119/vcmi/pull/10)，引擎源码未改。

## 墓园其余兵种

| 兵种 | 当前进度 |
| --- | --- |
| 骷髅、行尸 | 已安装；展示背景、居中和阴影更新已发布 |
| 骷髅勇士、升级僵尸 | ~~全套渲染和候选包检查完成，本篇公开全部预览~~ |
| 幽灵、阴魂 | ~~已核对原版，Blender 建模脚本仍在调试，没有完成版动画~~ |
| 吸血鬼、吸血鬼王 | ~~已提取原版动作参考，尚未完成新模型与动画~~ |
| 尸巫、尸巫王 | ~~已核对原版装备，制作脚本仍未完成~~ |
| 黑暗骑士、恐怖骑士 | 已提取原版参考，尚未完成新模型与动画 |
| 骨龙、幽灵龙 | 已提取原版参考，尚未完成新模型与动画 |

原版参考纠正了旧设计说明中的几处错误：阴魂不拿镰刀，尸巫有金属头饰、链甲和法杖，骑士骑深色马。吸血鬼移动时要变蝙蝠，龙需要起飞、飞行和落地动作。~~这些会分别制作，当前没有可发布的完成版。~~

> 2026-09-09 更新：升级骷髅、僵尸已安装；[幽灵与阴魂](/zh/posts/necropolis-ghosts/)和[尸巫与尸巫王](/zh/posts/necropolis-liches/)也已交付。吸血鬼、骑士和龙仍在后续制作范围内。



此前的[骷髅动画](/zh/posts/skeleton-motion/)、[行尸动画](/zh/posts/zombie-study/)、[墓园城高清化](/zh/posts/necropolis-hd/)和[展示位置、阴影对照](/demos/necropolis-creatures-game-02/)都已发布。

{{< /history >}}
