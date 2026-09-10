---
title: "[AI]战场与地图墓园高清化"
date: 2026-09-09T07:00:53+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

兵种和城内建筑变清楚以后，战场和大地图上的城堡就显得模糊了。这一轮新增独立的 **h3-environment-hd 0.1.0**，处理 14 张常见战场背景、墓园大地图三种城镇形态，以及归属旗。字体继续使用文泉驿和隶书。

本地已安装并启用。客户端日志确认新 mod 解析、加载成功，地图实际读取了它的 3× 国会主体、阴影和归属旗层。14 张战场通过资源名、尺寸和透明度检查，尚未逐一进入对应战斗实测。VCMI 源码没有修改。

## 战场背景

覆盖泥地三种、沙漠与海岸、草地两种、雪地两种，以及沼泽、粗糙地形、地下、熔岩和船上战斗。保留原构图与可站立区域，细化远景、地面和材质；特殊魔法地形、攻城墙体及独立障碍物不在本轮范围。

内置 image_gen 根据原图生成细节，Astra 编写提取、配准和打包脚本。生成图实际约为 1504～1506×1045～1046，再整理到 **1600×1112（2×）**；这里没有把输出尺寸写成原生 3× 或 4× 生成分辨率。下方对照都缩到相同显示大小，点高清图可看输出细节。

![dirt birches](/images/h3-environment-hd/dirt_birches-compare.jpg)

[HD](/images/h3-environment-hd/dirt_birches-hd.jpg)

![dirt hills](/images/h3-environment-hd/dirt_hills-compare.jpg)

[HD](/images/h3-environment-hd/dirt_hills-hd.jpg)

![dirt pines](/images/h3-environment-hd/dirt_pines-compare.jpg)

[HD](/images/h3-environment-hd/dirt_pines-hd.jpg)

![sand mesas](/images/h3-environment-hd/sand_mesas-compare.jpg)

[HD](/images/h3-environment-hd/sand_mesas-hd.jpg)

![sand shore](/images/h3-environment-hd/sand_shore-compare.jpg)

[HD](/images/h3-environment-hd/sand_shore-hd.jpg)

![grass hills](/images/h3-environment-hd/grass_hills-compare.jpg)

[HD](/images/h3-environment-hd/grass_hills-hd.jpg)

![grass pines](/images/h3-environment-hd/grass_pines-compare.jpg)

[HD](/images/h3-environment-hd/grass_pines-hd.jpg)

![snow mountains](/images/h3-environment-hd/snow_mountains-compare.jpg)

[HD](/images/h3-environment-hd/snow_mountains-hd.jpg)

![snow trees](/images/h3-environment-hd/snow_trees-compare.jpg)

[HD](/images/h3-environment-hd/snow_trees-hd.jpg)

![swamp trees](/images/h3-environment-hd/swamp_trees-compare.jpg)

[HD](/images/h3-environment-hd/swamp_trees-hd.jpg)

![rough](/images/h3-environment-hd/rough-compare.jpg)

[HD](/images/h3-environment-hd/rough-hd.jpg)

![subterranean](/images/h3-environment-hd/subterranean-compare.jpg)

[HD](/images/h3-environment-hd/subterranean-hd.jpg)

![lava](/images/h3-environment-hd/lava-compare.jpg)

[HD](/images/h3-environment-hd/lava-hd.jpg)

![ship](/images/h3-environment-hd/ship-compare.jpg)

[HD](/images/h3-environment-hd/ship-hd.jpg)

## 大地图城镇和旗子

![三种墓园城镇，红蓝归属色；离线合成](/images/h3-environment-hd/map-flags.png)

村庄、城堡、国会提供 2×、3×、4× 三套资源。主体按原 192×192 画布与范围配准，使用新图的平滑透明边缘；游戏中的占地、阻挡和访问位置沿用原配置。主体透明轮廓有变化，不能把这描述成逐像素保留原轮廓。阴影仍保留原遮罩。

原版地面旗只有约 14×5 像素，直接放大会留下明显台阶。这次按原旗杆连接点绘制平滑旗面，并保留玩家颜色层。国会顶部旗帜的位置跟随新塔尖，避免旧遮罩在旁边悬空。图中红蓝是两种离线合成检查，尚未验证所有玩家颜色在游戏里的显示。

## 字体显示

![同一字体的 2× 与 3× 渲染对照](/images/h3-environment-hd/fonts.png)

文泉驿与隶书本来就是轮廓字体。问题在于先以多大尺寸生成文字、再怎样缩放到屏幕。现有自动设置最多选到 2×，这台 Retina 屏幕的界面预计显示在约 2.72×；文字可能还会被放大一次。

这次把现有 `video.upscalingFilter` 设为 `xbrz3`，字体家族、逻辑字号和 `fontScale` 均不变。日志确认隶书从 44 到 66 点、文泉驿小字从 26 到 39 点，3× 设置已生效。上图使用实际 SDL_ttf 渲染，再用 Pillow 近似屏幕缩放，**不是游戏截图**；2.72× 是依据屏幕尺寸推算的值。

这是全局内部渲染倍率，会增加缓存和显存需求，长期帧率与首次进入战斗的耗时还需要观察。兵种素材仍是已有 2×，没有在这一轮重新渲染 4× 动画。日志里仍有中文编码转换错误；旧日志也存在，字体清晰度设置没有解决这些错误。

## 没采用的版本

![错误地画出棋盘格的城堡草稿](/images/h3-environment-hd/checkerboard-failure.jpg)

城堡首稿把透明背景的棋盘格画进了 RGB。改用纯品红背景后再去色键，才得到可用透明图。另一版把新画面硬塞回原像素轮廓并混入旧边缘，建筑边缘反而变糊，最终改用生成图的透明边缘。

![修复前的归属旗合成](/images/h3-environment-hd/flag-failure.png)

这张中间版还使用旧归属遮罩：顶部旗悬空，地面旗也很方。用户指出后，重新配准顶部并绘制地面旗面；现用结果见上面的红蓝对照。

工具和提示词放在 [h3-art-pipeline 的 environment-art](https://github.com/yzh119/h3-art-pipeline/tree/main/environment-art)。完整 mod、原始游戏资源和生成素材留在本地，博客只展示结果。

## 2026-09-09 更新：探险地图 0.2.0

这一版把范围扩展到探险地图本身：八种静态地貌、三种道路与冰河，以及 **AVL** 地貌障碍/植被、**AVX** 建筑和矿井、**AVW** 中立生物。原有墓园城镇不参与这次批量覆盖，继续使用上面的独立高质量版本。

批量部分不是逐张 AI 重画，而是高质量缩放基线：每个 DEF 的原画布、动画组、帧数、主体/阴影/叠加层均保留。它不改地图对象模板，所以锚点、占地、阻挡格、点击和访问逻辑仍由原版配置决定。共 953 组对象动画，连同地貌和已有资源，模组共有 2,904 个 2×/3×/4×动画描述和 55,899 张图层文件，约 1 GB；大图首次进入时仍应留意缓存压力。

包级检查确认所有动画描述和图层可解析、尺寸正确；原生测试地图成功启动，日志确认实际读取本模组的 4× `DIRTTL` 地貌切片。该测试图没有放入每类建筑和中立生物，因此这次没有把它表述为逐对象的游戏内视觉验收。后续会挑矿井、传送门等高频地标，在相同配准约束下单独做生成式细化。

### 之后的实际美术替换

批量高清化本身在正常缩放下变化很小，不能把它当成美术重绘。本轮随后重绘并接入了沙地矿井、草地矿井和祭坛：新主体来自生成式绘制，原有画布、阴影、叠加层和对象逻辑没有改变。下面左边是批量高清基线，右边才是实际替换后的地图物件。

![三种探险地图地标：基线与实际重绘替换](/images/h3-environment-hd/adventure-landmarks-compare.png)

### 2026-09-09：草地与荒地山体变体

地图上的山体不是地面切片，而是带有遮挡与占格的 `AVL` 对象。这一轮为草地和荒地各自绘制了不同轮廓的主脊、双峰、孤峰、低矮岩台与岩坳，共十个变体；每一项仍套回原画布并保留阴影、遮挡和访问逻辑。下图左为原先的高清基线，右为实际的生成式山体替换。

![草地与荒地的十种山体变体：基线和实际替换](/images/h3-environment-hd/mountain-variants-compare.png)

### 2026-09-09：树、灌木与岩石

山体替换以后，周围仍是旧像素植被会显得割裂。针对测试地图实际加载的对象，补入两组不同树群、草地灌木带、荒地刺灌与荒地岩石。客户端日志确认这五项的 4×资源已被实际读取；左侧为基线，右侧为新绘制主体。

![树、灌木与岩石：基线和实际替换](/images/h3-environment-hd/vegetation-compare.png)
