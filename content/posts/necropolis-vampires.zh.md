---
title: "[AI]吸血鬼与蝙蝠形态"
date: 2026-09-09T04:26:09+08:00
series: ["用生成式ai增强英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "meshy"]
lastmod: 2026-09-09T05:48:54+08:00
---

**状态核对：2026-09-09。**

## 已安装的动画与模型

吸血鬼和吸血鬼王在 **0.11.1** 阶段接入，使当时的墓园包覆盖十个兵种。现用 [0.12.1](/zh/posts/necropolis-final-four/) 已补齐十四种，并逐文件保留本篇交付的素材。两个人形重新计算了骨骼权重，移动使用独立蝙蝠模型，起飞和落地各有五帧烟雾变身。没有修改 VCMI 引擎源码。

下面两张是最终待机场景直接渲染的 **1400×1600 Blender 静帧**，点击查看透明原图。它们使用这次动画的实际模型和绑定。

[![吸血鬼最终待机高清渲染](/images/necropolis-vampires/vampire-holding-blender-hd.jpg)](/images/necropolis-vampires/vampire-holding-blender-hd.png)

[![吸血鬼王最终待机高清渲染](/images/necropolis-vampires/vampire-lord-holding-blender-hd.jpg)](/images/necropolis-vampires/vampire-lord-holding-blender-hd.png)

[完整动画展示页](/demos/necropolis-vampires-01/) 收录两种兵的 **29 段视频**、动作拼图，以及使用当前高清背景的兵种展示。视频方便逐帧检查，待机按 4 fps、其他动作按 8 fps 播放，属于离线预览；游戏内的速度和接触位置还需要实际战斗检查。

![吸血鬼兵种展示，离线合成](/demos/necropolis-vampires-01/cvamp-showcase.png)

![吸血鬼王兵种展示，离线合成](/demos/necropolis-vampires-01/cnosfe-showcase.png)

普通吸血鬼有 13 组动作、每档清晰度 84 帧；吸血鬼王有 16 组、105 帧。1× 和 2× 共新增 **378 张身体帧**，保留原版帧数、450×400 逻辑画布，以及阴影和其他效果层。王的三个额外方向动作仍按原版组号提供，没有增加游戏技能。死亡动作是完整身体举手后折叠倒地，与原版更紧凑的残骸形态仍有差别，也没有布料物理模拟。

### 网格和权重的失败记录

最初吸血鬼王的破衣服确实有几何问题：合并重合点后仍有 13,521 条边界边。同一任务的 OBJ、FBX 也有大量边界，无法靠换 GLB 格式解决。[拓扑记录](/images/necropolis-vampires/topology-audit.json) · [格式对照](/images/necropolis-vampires/format-audit.json)。

复用原概念图，新增一次 Meshy 请求并关闭 remesh，得到 1,950,534 个三角面和 4096 贴图，衣服明显完整了。由于这也是一次重新生成，不能把所有改善都归因于一个开关。[Meshy 参数说明](https://docs.meshy.ai/en/api/image-to-3d)。

[![重新生成的高密度模型，尚未进入动作绑定](/images/necropolis-vampires/vampire-lord-dense-blender-hd.jpg)](/images/necropolis-vampires/vampire-lord-dense-blender-hd.png)

这份模型的自动绑定请求返回 HTTP 400，没有取得任务 ID；它的面数也超过 [Meshy 文档的 300,000 面限制](https://docs.meshy.ai/en/api/rigging)。于是本地简化到 159,999 面，借用旧骨架的关节位置继续制作。第一次简化忽略了 UV 接缝处重复的顶点，接缝又裂开了。先焊接空间重合点、保留逐面角 UV，再减面，才消掉这一类裂缝。

[![失败的早期动画绑定，接缝与错误权重同时造成破损](/images/necropolis-vampires/vampire-lord-split-seams.jpg)](/images/necropolis-vampires/vampire-lord-split-seams.png)

焊接后仍不对：旧绑定中部分靴子会跟随头和前臂，直接转移权重把错误一起带了过来。按空间位置过滤权重又把外衣拉长。下面这张保留了第二种失败。

[![失败的空间过滤权重，外衣被拉长](/images/necropolis-vampires/vampire-lord-filtered-weights.jpg)](/images/necropolis-vampires/vampire-lord-filtered-weights.png)

最终两个人形都丢弃导入权重，修正骨尾并用 Blender bone heat 重新绑定。关节目标通过检查时，表面仍可能被拉坏，所以补了独立的网格边长检查：每个保存场景重新打开，检查首、中、末三种姿势；边长超过原来的八倍且增长超过 0.08 模型单位时拒绝打包。旧普通吸血鬼在采样中有 161 次异常边记录，最终两种兵共 69 个姿势样本为零。[吸血鬼检查](/images/necropolis-vampires/vampire-skin-check-final.json) · [吸血鬼王检查](/images/necropolis-vampires/vampire-lord-skin-check-final.json)。这项检查只拦严重拉伸，不代表衣服和动作已经获得外观验收。

中途的 0.11.0 曾短暂装入游戏，之后高清待机图暴露出这些问题，现已替换为重新绑定的 0.11.1。旧尝试和备份保留在本地。

### 飞行、检查与工具

蝙蝠使用本地五骨架控制身体、翼根和翼尖。修补小型简单孔洞后，边界边从 196 减到 52，较大或复杂缺口仍保留。飞行按原版的平飞、下拍、平飞、上拍重新取帧，也调小了最初过大的翼展、修正高度。

烟雾先试过实心球和体积渲染，前者像一团团棉花，后者仍显得厚重且耗时。最终使用 38 个朝向相机、带程序噪声的半透明面片。变身两端与人形待机、蝙蝠飞行复用同一张输出帧，消除了独立渲染采样差异造成的接缝。

保存的人形场景通过 1379 个整帧及半帧样本检查，蝙蝠循环另外检查了 49 个样本。安装后 [资源验证](/demos/necropolis-vampires-01/validation.json) 为 238 条信息、零警告、零错误。4162 个安装文件与候选包哈希一致，旧八兵种的 3332 个非元数据文件未变；客户端日志确认 mod 加载成功。实际战斗的观感与节奏仍待检查。

这次新增建模 30 credits，吸血鬼阶段成功任务合计 **130 credits**。Meshy 继续提供带贴图几何与旧骨架的关节基础；Astra 编写本地修补、重新绑定、动作、渲染和打包工具。[复现流程与限制](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/docs/necropolis-vampires.md) 包含所需命令。开源仓库只放工具，模型和完整 mod 留在本地。

## 历史记录

{{< history title="历史原文与修订记录（展开阅读）" note="以下完整保留本次整理前的原文、图片和删除线。这里的“当前”“尚未完成”和“下一步”均指各段写作或标注时的状态；旧版本号、旧工具路径与试稿不能作为现行操作说明。" >}}

0.12.0 时的状态说明，现用补丁版本见正文：

~~吸血鬼和吸血鬼王在 **0.11.1** 阶段接入，使当时的墓园包覆盖十个兵种。现用 [0.12.0](/zh/posts/necropolis-final-four/) 已补齐十四种，并逐文件保留本篇交付的素材。两个人形重新计算了骨骼权重，移动使用独立蝙蝠模型，起飞和落地各有五帧烟雾变身。没有修改 VCMI 引擎源码。~~


~~吸血鬼和吸血鬼王的动画已经接入本地 mod **0.11.1**，墓园目前覆盖十个兵种。两个人形重新计算了骨骼权重，移动使用独立蝙蝠模型，起飞和落地各有五帧烟雾变身。没有修改 VCMI 引擎源码。~~


## 2026-09-09 动画与绑定更新

吸血鬼和吸血鬼王的动画已经接入本地 mod **0.11.1**，墓园目前覆盖十个兵种。两个人形重新计算了骨骼权重，移动使用独立蝙蝠模型，起飞和落地各有五帧烟雾变身。没有修改 VCMI 引擎源码。

下面两张是最终待机场景直接渲染的 **1400×1600 Blender 静帧**，点击查看透明原图。它们使用这次动画的实际模型和绑定。

[![吸血鬼最终待机高清渲染](/images/necropolis-vampires/vampire-holding-blender-hd.jpg)](/images/necropolis-vampires/vampire-holding-blender-hd.png)

[![吸血鬼王最终待机高清渲染](/images/necropolis-vampires/vampire-lord-holding-blender-hd.jpg)](/images/necropolis-vampires/vampire-lord-holding-blender-hd.png)

[完整动画展示页](/demos/necropolis-vampires-01/) 收录两种兵的 **29 段视频**、动作拼图，以及使用当前高清背景的兵种展示。视频方便逐帧检查，待机按 4 fps、其他动作按 8 fps 播放，属于离线预览；游戏内的速度和接触位置还需要实际战斗检查。

![吸血鬼兵种展示，离线合成](/demos/necropolis-vampires-01/cvamp-showcase.png)

![吸血鬼王兵种展示，离线合成](/demos/necropolis-vampires-01/cnosfe-showcase.png)

普通吸血鬼有 13 组动作、每档清晰度 84 帧；吸血鬼王有 16 组、105 帧。1× 和 2× 共新增 **378 张身体帧**，保留原版帧数、450×400 逻辑画布，以及阴影和其他效果层。王的三个额外方向动作仍按原版组号提供，没有增加游戏技能。死亡动作是完整身体举手后折叠倒地，与原版更紧凑的残骸形态仍有差别，也没有布料物理模拟。

### 网格和权重的失败记录

最初吸血鬼王的破衣服确实有几何问题：合并重合点后仍有 13,521 条边界边。同一任务的 OBJ、FBX 也有大量边界，无法靠换 GLB 格式解决。[拓扑记录](/images/necropolis-vampires/topology-audit.json) · [格式对照](/images/necropolis-vampires/format-audit.json)。

复用原概念图，新增一次 Meshy 请求并关闭 remesh，得到 1,950,534 个三角面和 4096 贴图，衣服明显完整了。由于这也是一次重新生成，不能把所有改善都归因于一个开关。[Meshy 参数说明](https://docs.meshy.ai/en/api/image-to-3d)。

[![重新生成的高密度模型，尚未进入动作绑定](/images/necropolis-vampires/vampire-lord-dense-blender-hd.jpg)](/images/necropolis-vampires/vampire-lord-dense-blender-hd.png)

这份模型的自动绑定请求返回 HTTP 400，没有取得任务 ID；它的面数也超过 [Meshy 文档的 300,000 面限制](https://docs.meshy.ai/en/api/rigging)。于是本地简化到 159,999 面，借用旧骨架的关节位置继续制作。第一次简化忽略了 UV 接缝处重复的顶点，接缝又裂开了。先焊接空间重合点、保留逐面角 UV，再减面，才消掉这一类裂缝。

[![失败的早期动画绑定，接缝与错误权重同时造成破损](/images/necropolis-vampires/vampire-lord-split-seams.jpg)](/images/necropolis-vampires/vampire-lord-split-seams.png)

焊接后仍不对：旧绑定中部分靴子会跟随头和前臂，直接转移权重把错误一起带了过来。按空间位置过滤权重又把外衣拉长。下面这张保留了第二种失败。

[![失败的空间过滤权重，外衣被拉长](/images/necropolis-vampires/vampire-lord-filtered-weights.jpg)](/images/necropolis-vampires/vampire-lord-filtered-weights.png)

最终两个人形都丢弃导入权重，修正骨尾并用 Blender bone heat 重新绑定。关节目标通过检查时，表面仍可能被拉坏，所以补了独立的网格边长检查：每个保存场景重新打开，检查首、中、末三种姿势；边长超过原来的八倍且增长超过 0.08 模型单位时拒绝打包。旧普通吸血鬼在采样中有 161 次异常边记录，最终两种兵共 69 个姿势样本为零。[吸血鬼检查](/images/necropolis-vampires/vampire-skin-check-final.json) · [吸血鬼王检查](/images/necropolis-vampires/vampire-lord-skin-check-final.json)。这项检查只拦严重拉伸，不代表衣服和动作已经获得外观验收。

中途的 0.11.0 曾短暂装入游戏，之后高清待机图暴露出这些问题，现已替换为重新绑定的 0.11.1。旧尝试和备份保留在本地。

### 飞行、检查与工具

蝙蝠使用本地五骨架控制身体、翼根和翼尖。修补小型简单孔洞后，边界边从 196 减到 52，较大或复杂缺口仍保留。飞行按原版的平飞、下拍、平飞、上拍重新取帧，也调小了最初过大的翼展、修正高度。

烟雾先试过实心球和体积渲染，前者像一团团棉花，后者仍显得厚重且耗时。最终使用 38 个朝向相机、带程序噪声的半透明面片。变身两端与人形待机、蝙蝠飞行复用同一张输出帧，消除了独立渲染采样差异造成的接缝。

保存的人形场景通过 1379 个整帧及半帧样本检查，蝙蝠循环另外检查了 49 个样本。安装后 [资源验证](/demos/necropolis-vampires-01/validation.json) 为 238 条信息、零警告、零错误。4162 个安装文件与候选包哈希一致，旧八兵种的 3332 个非元数据文件未变；客户端日志确认 mod 加载成功。实际战斗的观感与节奏仍待检查。

这次新增建模 30 credits，吸血鬼阶段成功任务合计 **130 credits**。Meshy 继续提供带贴图几何与旧骨架的关节基础；Astra 编写本地修补、重新绑定、动作、渲染和打包工具。[复现流程与限制](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/docs/necropolis-vampires.md) 包含所需命令。开源仓库只放工具，模型和完整 mod 留在本地。

## 最初的模型检查记录

以下保留更新前的模型、概念图与判断；已过时的进度加删除线。

墓园接下来补吸血鬼和吸血鬼王。这次先把两个人形和飞行时使用的蝙蝠模型导入 Blender，渲染高清静帧，检查生成结果能不能继续做动作。概念图和实际模型一起放出来，方便看出差异。

~~当前是**模型检查阶段**：人形自动绑定已返回，尚未完成本地动作检查、蝙蝠骨架和变身衔接，也没有安装到游戏。游戏里仍是此前的八兵种版本。~~

## 吸血鬼

概念图采用苍白秃头、尖耳、长爪和深色旧衣服。由内置 imagegen 生成，再交给 Meshy 7 重建带贴图的模型。

![吸血鬼概念图，供模型生成参考](/images/necropolis-vampires/vampire-concept.jpg)

下面是实际导入 Blender 后渲染的 **1400×1600 静帧**，使用模型自带的贴图和导入姿势。点击可查看透明 PNG 原图。

[![吸血鬼 Blender 高清静帧，当前导入姿势](/images/necropolis-vampires/vampire-blender-hd.jpg)](/images/necropolis-vampires/vampire-blender-hd.png)

头部、衣服接缝和双手可以直接放大检查。手指当前仍是生成模型的形状，~~尚未经过抓击动作检验。~~[提示词](/images/necropolis-vampires/vampire-prompt.txt) · [模型检查记录](/images/necropolis-vampires/vampire-audit.json) · [渲染记录](/images/necropolis-vampires/vampire-render.json)。

## 吸血鬼王

升级形态用了锈橙色长外衣和高领，内层仍以深色为主。

![吸血鬼王概念图，供模型生成参考](/images/necropolis-vampires/vampire-lord-concept.jpg)

[![吸血鬼王 Blender 高清静帧，衣服仍有待修缺口](/images/necropolis-vampires/vampire-lord-blender-hd.jpg)](/images/necropolis-vampires/vampire-lord-blender-hd.png)

这张同样是 **1400×1600**。实际渲染暴露了概念图里不明显的问题：胸前、袖口和衣摆有碎片状边缘和缺口，局部像散开的三角面。这一版保留作检查记录，需要进一步定位网格或材质问题，再处理衣服在动作中的形变，不能直接当成最终交付。

[提示词](/images/necropolis-vampires/vampire-lord-prompt.txt) · [模型检查记录](/images/necropolis-vampires/vampire-lord-audit.json) · [渲染记录](/images/necropolis-vampires/vampire-lord-render.json)。

## 蝙蝠

原版移动时是蝙蝠形态，因此另外生成了展开双翼的模型。~~飞行和变身会使用独立的本地骨架。~~

![蝙蝠概念图，供模型生成参考](/images/necropolis-vampires/vampire-bat-concept.jpg)

[![蝙蝠 Blender 高清静帧，当前展开双翼的静态模型](/images/necropolis-vampires/vampire-bat-blender-hd.jpg)](/images/necropolis-vampires/vampire-bat-blender-hd.png)

这张是 **2000×1400**，为翼展保留横向空间。正面可以看清头部和展开的轮廓，但翼膜下方偏暗。另做了一张[较高视角的检查图](/images/necropolis-vampires/vampire-bat-top-blender-hd.png)，抬高观察角度并加强补光后，能看到翅膀从这个角度显得很薄，背部也有缺口；这些还需要进一步检查。~~当前仍是静态展开姿势，还没有拍翼动作。~~

[提示词](/images/necropolis-vampires/vampire-bat-prompt.txt) · [模型检查记录](/images/necropolis-vampires/vampire-bat-audit.json) · [渲染记录](/images/necropolis-vampires/vampire-bat-render.json)。

## 工具和接下来的工作

三次 Meshy 建模各用了 30 credits，两次人形自动绑定各用了 5 credits，本阶段合计 **100 credits**。三套模型的导入颜色贴图均为 4096×4096。此次静帧由 Blender 5.2.1 LTS 本地渲染，每张 64 samples，没有新增生成请求。

Astra 编写的 [bootstrap_portrait.py](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/bootstrap_portrait.py) 保存可编辑检查场景，再调用高清渲染工具。检查记录包含输入与输出哈希、实际网格数量、贴图尺寸，以及是否超出画面。博客里的 JPEG 只加了展示背景，透明 PNG 保留原始渲染分辨率。

~~后续需要先处理吸血鬼王的衣服问题，再检查人形双手和关节，编写蝙蝠拍翼、起止变身、抓击与死亡动作，最后按原版帧数打包验证。工具代码继续在独立仓库维护；模型和完整 mod 留在本地。~~

{{< /history >}}
