---
title: "[AI]opus -> astra：幽灵和阴魂的动画接入"
date: 2026-09-09T01:48:31+08:00
series: ["英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "meshy", "astra"]
---

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
