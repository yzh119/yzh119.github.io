---
title: "探险地图：地标"
date: 2026-09-10T08:05:00+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

这一篇记录可交互地标与大型静态地标的高清替换。地标不同于整张背景：未建造状态、升级形态、前后遮挡和点击范围都必须保留，因此新图只进入原资源的主体层。

## 小型知识建筑

女巫小屋与学习石碑也已重绘。前者保留低矮草顶、烟柱和根系，后者保留圆顶、石柱和中央书台；两者都只增强材质，不改变地图上的识别体量。

![女巫小屋与学习石碑](/images/h3-environment-hd/knowledge-buildings-compare.png)

## 资源与服务地标

矿井、祭坛、水井、酒馆、墓园、绿洲、金字塔、船只和三色方尖碑已有替换。所有对象继续沿用原始阴影、遮罩和元数据。

![早期地标](/images/h3-environment-hd/adventure-landmarks-compare.png)

![水井、酒馆与墓园](/images/h3-environment-hd/landmark-set-compare.png)

![金字塔、船只与方尖碑](/images/h3-environment-hd/pyramid-ship-obelisks-compare.png)

## 地形指示牌

五张单帧地形指示牌现已分别覆盖草地、沙地、熔岩、雪地与水面。牌面保留原作不可读的标记关系，并通过原始 alpha 遮罩保住木桩和地表底座。多帧地标仍使用原版美术，待 Blender 动画流程完成后再替换。

## 地貌水井变体

粗糙地与雪地水井也分别重绘：保留原版的小型石井、短木柱和屋顶比例，粗糙地保留陶瓦与苔藓，雪地则使用积雪屋顶和覆雪石砌。

![粗糙地与雪地水井](/images/h3-environment-hd/well-biomes-compare.png)

## 大型地标

巨型红木和大型城堡式地标也已重绘，保留原来的透明轮廓与层级关系。

![巨型红木](/images/h3-environment-hd/redwood-compare.png)

![大型城堡地标](/images/h3-environment-hd/castle-landmark-compare.png)

## 竞技场

竞技场（`AVSARNA0`）现已重绘为保留原作三层拱廊、椭圆内部、正面入口与台阶的紧凑石灰岩建筑。生成图的棋盘背景通过只保留连通的主体 alpha 清除；最终纵向投影校正使 2×、3×、4× 主体的顶部、左右与底部边界都与原资源一致。原始阴影、覆盖层、画布和对象行为均未改变。

![原版与最终竞技场重绘](/images/h3-environment-hd/arena-final-compare.png)

## 魔法与知识地标

魔法泉与先知小屋也已加入替换。主体重新绘制后仍套回原有轮廓、阴影和交互资源，因此不会影响访问规则。

![魔法泉与先知小屋](/images/h3-environment-hd/functional-landmarks-compare.png)

## 瞭望塔与龙之国重做

此前的巨型红木虽然更清晰，却仍像一棵普通树；这次将它重做为可一眼辨认的瞭望塔：外置螺旋梯、环形观景台、瞭望亭、望远镜和旗帜都进入主体轮廓。

![瞭望塔](/images/h3-environment-hd/observatory-compare.png)

<s>龙之国的第一版把石制神殿扩张成了巨型龙巢；随后曾计划在原轮廓上只增强砌石、风化和苔藓细节。再次审查后仍认为生成结果过于魔幻，已完全撤回，游戏直接使用原版 `AVSUTOP0`。</s>

这次通过审查的重绘回到原作紧凑的黄褐色石砌堡垒：中央主堡、红瓦屋顶层级、四座主要圆塔、城墙和浅色岩基均被保留。新增细节仅限砌石、瓦片、风化与克制的龙纹浮雕。它只登记到原资源 2×、3×、4× 的单帧主体层；源画布、alpha 占位、交互和图层顺序均未改变。

![原版与最终龙之国重绘](/images/h3-environment-hd/dragon-utopia-final-compare.png)

## 审查记录

<s>山堡的初版高清测试已弃用：两份草稿都把原版中央的低矮屋顶误读为额外塔楼，把紧凑前哨画成了城堡。离线超分样张虽保住大轮廓，却重构了石材、屋顶和边缘，因此只作材质参考，不会批量覆盖建筑。</s>

2026 年重试验证了同一约束：第一张重绘擅自增加城墙和前置塔楼；第二张仍保留这些虚构结构，并输出棋盘背景。两张都未登记。山堡继续使用原版，直至重绘能保住三座塔、一座低矮中央屋顶、入口位置、占地与原始交互画框。

![山堡 2026 重试审查](/images/h3-environment-hd/hill-fort-2026-retry-review.png)

## 水边功能建筑

船坞、市场与饮水点已单独接入；它们不是平铺背景，因此仍可维持原游戏的对象行为。

![船坞、市场与饮水点](/images/h3-environment-hd/shipyard-market-waterhole-compare.png)

本地以 Good to Go 地图启动验证时，客户端日志实际读取了新的红木和岩石 4× 资源。此项验证证明 mod 解析和资源选择正确；它不等同于完整通关测试。VCMI 源码没有修改。
