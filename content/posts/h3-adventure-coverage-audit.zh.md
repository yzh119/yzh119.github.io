---
title: "[AI]探险地图：全量高清覆盖校验"
date: 2026-09-10T09:30:00+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

这一轮不是新增一张概念图，而是核对所有探险地图资源是否真的有 HD 层。审计发现此前 active package 漏装了 `AVA`、`AVG`、`AVM`、`AVS`、`AVR`、`AVT` 与 `AVZ` 七类资源：它们没有损坏，只是根本没有 2×、3×、4× override。

已用保留原始帧、阴影、前景遮挡和序列定义的构建流程补齐这些基线资源，并在本地启用 mod 上运行全量校验：

| 项目 | 结果 |
| --- | ---: |
| 探险资源 | 1,294 |
| 动画/静态帧 | 20,547 |
| body、shadow、overlay 图层 | 61,641 |
| 倍率 | 2×、3×、4× |
| 缺帧、序列或画布错误 | 0 |

校验器只检查资源完整性和几何一致性，允许后续生成式重绘替换主体图。因此这证明所有探险资源已有高清覆盖基线，不等于每个对象都已重绘。

随后启动 VCMI 测试客户端，日志确认 `h3-environment-hd` 已挂载 **74,739 个文件**，耗时 **182 ms**，并成功初始化渲染器；没有资源解析错误。该测试在启动阶段主动结束，不把它表述为完整地图通关验证。公开工具库已加入可重复运行的 [`verify_adventure_assets.py`](https://github.com/yzh119/h3-art-pipeline/blob/main/environment-art/verify_adventure_assets.py)。VCMI 源码没有修改。

## 定制重绘覆盖（持续更新）

覆盖审计现在也会把定制主体图与基线层分开统计。当前结果是 **128** 个资源已替换或重绘主体图，**1,166** 个仍只使用完整的 2×、3×、4×结构基线；两类都没有缺失帧。这个数字是下一轮地标、植被和地貌批处理的真实待办，而不是把基线覆盖误写成全部美术完成。可复现脚本为 [`audit_customization.py`](https://github.com/yzh119/h3-art-pipeline/blob/main/environment-art/audit_customization.py)。
