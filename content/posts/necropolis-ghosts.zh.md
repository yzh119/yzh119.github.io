---
title: "[AI]幽灵和阴魂的动画接入"
date: 2026-09-09T01:48:31+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "meshy", "astra"]
lastmod: 2026-10-03T06:45:36Z
homeSummary: "墓园 0.12.6 重做幽灵和阴魂举爪、前探与挥抓，修手部权重，附原版对照和高清静帧。"
---

## 当前版本：把爪子伸出去（0.12.6）

本地墓园动画包 **0.12.6** 重做了幽灵和阴魂的攻击。此前的模型与漂浮曾获认可，但用户这次指出：“攻击也没有伸爪子。”对照原版，旧动画主要让整个身体前倾，缺少举爪和挥抓的轮廓；先前的“定稿”不能继续当作攻击已经完成的结论。

现在右臂先举起，随后前探挥抓，再收回；三个方向分别调整手臂轨迹。手掌和手指混入衣袍的权重也重新处理，让爪子能从袖口探出。早期只加大关节转角的试稿仍把爪子藏在脸旁，后来重新安排肩、肘、腕的姿势和袖子的伸展。下摆另作毫米级离地修正。

0.12.5 的高清复查发现，举爪仍会带起一条长布片，伸手时还会出现细线。手部选择范围误选了衣袍，又把横跨范围边界的爪子一半绑到手、一半留在躯干。0.12.6 收紧衣袍权重，补齐爪子绑定，并平滑交界。

![弃用的 0.12.5 举爪，衣袍被错误带起](/images/necro-flight-gait-20261002/ghost-cloth-rejected.jpg)

![幽灵：原版、旧攻击与 0.12.6；各行按轮廓取景](/images/necro-flight-gait-20261002/CWIGHT-current-comparison.jpg)

![幽灵的新攻击，实际 Blender 帧以 8 fps 离线播放](/images/necro-flight-gait-20261002/CWIGHT-current.webp)

![阴魂：原版、旧攻击与 0.12.6](/images/necro-flight-gait-20261002/CWRAIT-current-comparison.jpg)

![阴魂的新攻击，离线 8 fps 审阅](/images/necro-flight-gait-20261002/CWRAIT-current.webp)

![幽灵举爪：最终场景的 1400×1400 Blender 静帧](/images/necro-flight-gait-20261002/CWIGHT-raise-hd.jpg)

![幽灵伸爪：最终场景的 1400×1400 Blender 静帧](/images/necro-flight-gait-20261002/CWIGHT-claw-hd.jpg)

![阴魂举爪：最终场景的 1400×1400 Blender 静帧](/images/necro-flight-gait-20261002/CWRAIT-raise-hd.jpg)

![阴魂伸爪：最终场景的 1400×1400 Blender 静帧](/images/necro-flight-gait-20261002/CWRAIT-claw-hd.jpg)

![0.12.6 幽灵、阴魂实际 VCMI 测试战斗](/images/necro-flight-gait-20261002/ghost-battle126.jpg)

两种兵种各更新三组攻击及原资源中的三组 `SHOOT`，合计 84 张主体帧，保留原帧数与配套阴影。`SHOOT` 只是资源覆盖，不会增加远程攻击能力。已认可的漂浮、待机和死亡资源保持不变；本轮的新攻击仍需结合玩家实际观感继续验收，不能把旧版验收套在新动作上。

基础模型仍来自 Meshy，本轮由 Astra 在 Blender 内修改绑定和动画，没有新生成调用或引擎改动。马蹄、龙飞行和咬击的同批修订见[骑士与骨龙文章](/zh/posts/necropolis-final-four/)。以下保留早期模型、漂浮和旧攻击记录。

<details>
<summary>0.9.0 模型、漂浮与旧攻击记录（历史）</summary>

> 本文记录发布时的实现与测量。文中的版本号、费用和检查数量属于该阶段；后续兵种安装记录见[吸血鬼交付](/zh/posts/necropolis-vampires/)，现行工具入口见[独立仓库](/zh/posts/h3-art-tools/)。

幽灵换用带贴图的基础模型后，漂浮、挥爪、转身和死亡动作已经做完，与阴魂一起接入本地游戏。本次交付版本为 **0.9.0**。这一版收到的验收反馈是：“幽灵完美交付。”~~幽灵的模型和动作据此定稿~~，尸巫的后续交付见[尸巫和尸巫王](/zh/posts/necropolis-liches/)。

![幽灵使用当前游戏背景的展示合成](/demos/necropolis-ghosts-01/cwight-showcase.png)

[幽灵和阴魂的全部 32 组动作](/demos/necropolis-ghosts-01/)可以播放。视频是固定画布的离线渲染，待机按 4 fps、其余按 8 fps 审阅，并非游戏截图或游戏时序测量。

## Blender 高清静帧

以下两张是从已交付的三维场景直接渲染的 **1400×1600 静态图片**，不是概念图，也不是把游戏小图放大。仅重新取景，模型、材质和已验收的幽灵动作未改。

[![幽灵：Blender 高清静帧](/images/necropolis-ghosts/wight-blender-hd.jpg)](/images/necropolis-ghosts/wight-blender-hd.png)

幽灵：[透明 PNG 原图](/images/necropolis-ghosts/wight-blender-hd.png) · [渲染记录](/images/necropolis-ghosts/wight-blender-hd.json)

[![阴魂：Blender 高清静帧](/images/necropolis-ghosts/wraith-blender-hd.jpg)](/images/necropolis-ghosts/wraith-blender-hd.png)

阴魂：[透明 PNG 原图](/images/necropolis-ghosts/wraith-blender-hd.png) · [渲染记录](/images/necropolis-ghosts/wraith-blender-hd.json)

## 漂浮与挥爪

这次保留了 Meshy 生成的衣袍、骷髅脸和双手，用本地 Blender 工具添加躯干、颈部、头部、双臂以及三段下摆控制。下摆随漂浮动作弯曲，角色不再套用双腿行走。

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-ghosts-01/cwight-moving.mp4" style="width:500px;max-width:100%"></video>

攻击先收势，再让整个角色向前探出，下摆拖在身后，之后回到待机。向上、正面和向下攻击分别调整高度。左右转身保留独立组，配合引擎切换显示朝向。

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-ghosts-01/cwight-attack_front.mp4" style="width:500px;max-width:100%"></video>

死亡向下塌落，衣袍折叠并压缩成地上的残留。这是手工编排的消散效果，不是布料模拟或物理布娃娃。保存后重新检查 **73 个死亡整帧、半帧位置**，最低顶点约为 **0.002986** 个模型单位，没有穿过地面。

<video controls muted playsinline preload="metadata" src="/demos/necropolis-ghosts-01/cwight-death.mp4" style="width:500px;max-width:100%"></video>

## 阴魂

![阴魂使用当前游戏背景的展示合成](/demos/necropolis-ghosts-01/cwrait-showcase.png)

阴魂共用衣袍和骨架，将棕色布料压暗，尽量保留骨骼的亮度。它也有完整的漂浮、受击、防御、转身、攻击和死亡输出。这次明确收到的验收反馈针对幽灵；阴魂随同交付，后续可以单独微调。

两种兵种各有 **16 个原版动作组、每个倍率 98 帧**。原版资源中保留的三组 `SHOOT` 也一并输出，以保持资源组覆盖；这没有赋予兵种新的远程攻击能力。游戏机制未改。

## 游戏接入

0.9.0 在原有四种兵种上增加 `CWIGHT` 与 `CWRAIT`，1x/2x 身体帧、提前生成的阴影和悬停描边都已安装。继续使用固定地面的二维阴影投影，没有恢复首次加载时现场计算阴影的做法。

0.9.0 交付时，安装目录的 **2,324 个文件**与候选包逐一核对一致，之前的 **1,462 个非元数据文件**保持不变。最终检查为 **132 条信息、零警告、零错误**，[验证记录](/demos/necropolis-ghosts-01/validation.json)已公开。旧版 0.8.0 留有备份，启动后的客户端报告该 mod 加载成功。这里只将幽灵记为用户已验收，不把一次启动日志当成其余兵种的完整战斗验收。

这轮由 Astra 编写绑定、动画和合包工具，基础模型来自前一篇记录的 imagegen 与 Meshy 流程。代码与复现说明在 [PR #10](https://github.com/yzh119/vcmi/pull/10)。[被否掉的程序造型和生成过程中的问题](/zh/posts/necropolis-bootstrap/)仍单独保留，后续失败也继续记录。

工具在 [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline) 维护；模型和完整 mod 留在本地。[工具迁移与复现](/zh/posts/h3-art-tools/)。

## 历史记录

{{< history title="历史原文与修订记录（展开阅读）" note="以下完整保留本次整理前的原文、图片和删除线。这里的“当前”“尚未完成”和“下一步”均指各段写作或标注时的状态；旧版本号、旧工具路径与试稿不能作为现行操作说明。" >}}

> **2026-09-09 工具迁移：** 后续代码在 [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline) 维护，原 `tools/creature-art/` 与 `tools/town-art/` 对应新仓库的 `creature-art/` 与 `town-art/`。本文的旧路径和 PR 链接保留作历史记录。[迁移与复现说明](/zh/posts/h3-art-tools/)。

[尸巫和尸巫王的后续交付](/zh/posts/necropolis-liches/)已接入游戏，包含完整动作与本轮失败试稿。

幽灵换用带贴图的基础模型后，漂浮、挥爪、转身和死亡动作已经做完，与阴魂一起接入本地游戏。当前安装包是 **0.9.0**。这一版收到的验收反馈是：“幽灵完美交付。”幽灵的模型和动作据此定稿，接下来继续尸巫。

![幽灵使用当前游戏背景的展示合成](/demos/necropolis-ghosts-01/cwight-showcase.png)

[幽灵和阴魂的全部 32 组动作](/demos/necropolis-ghosts-01/)可以播放。视频是固定画布的离线渲染，待机按 4 fps、其余按 8 fps 审阅，并非游戏截图或游戏时序测量。

## Blender 高清静帧

以下两张是从已交付的三维场景直接渲染的 **1400×1600 静态图片**，不是概念图，也不是把游戏小图放大。仅重新取景，模型、材质和已验收的幽灵动作未改。

[![幽灵：Blender 高清静帧](/images/necropolis-ghosts/wight-blender-hd.jpg)](/images/necropolis-ghosts/wight-blender-hd.png)

幽灵：[透明 PNG 原图](/images/necropolis-ghosts/wight-blender-hd.png) · [渲染记录](/images/necropolis-ghosts/wight-blender-hd.json)

[![阴魂：Blender 高清静帧](/images/necropolis-ghosts/wraith-blender-hd.jpg)](/images/necropolis-ghosts/wraith-blender-hd.png)

阴魂：[透明 PNG 原图](/images/necropolis-ghosts/wraith-blender-hd.png) · [渲染记录](/images/necropolis-ghosts/wraith-blender-hd.json)

## 漂浮与挥爪

这次保留了 Meshy 生成的衣袍、骷髅脸和双手，用本地 Blender 工具添加躯干、颈部、头部、双臂以及三段下摆控制。下摆随漂浮动作弯曲，角色不再套用双腿行走。

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-ghosts-01/cwight-moving.mp4" style="width:500px;max-width:100%"></video>

攻击先收势，再让整个角色向前探出，下摆拖在身后，之后回到待机。向上、正面和向下攻击分别调整高度。左右转身保留独立组，配合引擎切换显示朝向。

<video controls loop muted playsinline preload="metadata" src="/demos/necropolis-ghosts-01/cwight-attack_front.mp4" style="width:500px;max-width:100%"></video>

死亡向下塌落，衣袍折叠并压缩成地上的残留。这是手工编排的消散效果，不是布料模拟或物理布娃娃。保存后重新检查 **73 个死亡整帧、半帧位置**，最低顶点约为 **0.002986** 个模型单位，没有穿过地面。

<video controls muted playsinline preload="metadata" src="/demos/necropolis-ghosts-01/cwight-death.mp4" style="width:500px;max-width:100%"></video>

## 阴魂

![阴魂使用当前游戏背景的展示合成](/demos/necropolis-ghosts-01/cwrait-showcase.png)

阴魂共用衣袍和骨架，将棕色布料压暗，尽量保留骨骼的亮度。它也有完整的漂浮、受击、防御、转身、攻击和死亡输出。这次明确收到的验收反馈针对幽灵；阴魂随同交付，后续可以单独微调。

两种兵种各有 **16 个原版动作组、每个倍率 98 帧**。原版资源中保留的三组 `SHOOT` 也一并输出，以保持资源组覆盖；这没有赋予兵种新的远程攻击能力。游戏机制未改。

## 游戏接入

0.9.0 在原有四种兵种上增加 `CWIGHT` 与 `CWRAIT`，1x/2x 身体帧、提前生成的阴影和悬停描边都已安装。继续使用固定地面的二维阴影投影，没有恢复首次加载时现场计算阴影的做法。

安装目录的 **2,324 个文件**与候选包逐一核对一致，之前的 **1,462 个非元数据文件**保持不变。最终检查为 **132 条信息、零警告、零错误**，[验证记录](/demos/necropolis-ghosts-01/validation.json)已公开。旧版 0.8.0 留有备份，启动后的客户端报告该 mod 加载成功。这里只将幽灵记为用户已验收，不把一次启动日志当成其余兵种的完整战斗验收。

这轮由 Astra 编写绑定、动画和合包工具，基础模型来自前一篇记录的 imagegen 与 Meshy 流程。代码与复现说明在 [PR #10](https://github.com/yzh119/vcmi/pull/10)。[被否掉的程序造型和生成过程中的问题](/zh/posts/necropolis-bootstrap/)仍单独保留，后续失败也继续记录。

{{< /history >}}

</details>
