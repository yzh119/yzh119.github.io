---
title: "[AI]僵尸的十三组动画"
date: 2026-09-08T13:30:00+08:00
lastmod: 2026-09-09T05:48:54+08:00
series: ["英雄无敌3"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "astra"]
---

**截至 2026-09-09：**兵种 mod 为 **0.12.0**，已安装十四种墓园兵种。本文数字保留各次交付版本的含义；最新进展见[黑暗骑士与骨龙动画](/zh/posts/necropolis-final-four/)。

行尸（CZOMBI）的十三组动画已安装，每个倍率 80 帧；升级僵尸 CZOMLO 的交付另见[升级兵种](/zh/posts/necropolis-upgrades/)。

![已安装背景上的展示对照，离线合成](/demos/necropolis-creatures-game-02/czombi-comparison.png)

## 展示位置、阴影与首次加载

身体帧、阴影和悬停描边均提供 1×/2×。骷髅整体左移 25 个逻辑像素后，展示中心为 x=49.5；行尸展示中心也从 x=75 调整到 x=50。位移同时作用于战斗画布，原画布和帧数保留。

阴影使用固定地面、连续 alpha 和轻度空间模糊，1× 从 2× 投影缩小。骷髅行走的最大相邻帧 alpha 变化比从 1.083 降到 0.643，行尸从 0.489 降到 0.357。这是像素变化指标，不能单独证明所有动作都不闪烁；[六组播放对照](/demos/necropolis-creatures-game-02/)保留了范围。

阴影和描边在打包时生成，游戏读取预存图片。早期两兵种包的整包图片准备测试为现场生成 203.8 秒、预生成后加载 0.51 秒；它不包括 GPU 上传和游戏启动，也没有清空磁盘缓存，不能换算成启动提速。[原始测量](/demos/necropolis-creatures-game-01/benchmark.json)。

居中、效果和安装均通过资源检查，未改引擎源码；攻击接触与播放节奏仍需逐动作检查。下方保留的身体层视频用于审阅动作，不能据此判断已安装版本缺少阴影。

## 动作制作

骷髅之后开始做僵尸，看看上一轮写的 Blender 工具能在第二个兵种上复用多少。
待机、行走和正面攻击之后，其余十组也已补齐，这篇记录现在更新到全套十三组。代码继续由 Astra 编写，
复用之前 Meshy 生成的身体和贴图，没有新增 Meshy 调用。

[十三组动画和原版逐帧对照](/demos/zombie-motion-full-01/)已经可以播放、暂停和拖动。
这里保留的是身体层审阅视频；已安装版本另含下述效果层。

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

## 动作检查

十三组共 **80 帧**，分别导出 1 倍和 2 倍身体层，另有 **338 帧**连续预览。
重新打开保存的动画检查了 **667** 个整帧和半帧位置，最大 IK 误差约 0.000094，
支撑脚漂移约 0.000022 个模型单位。检查也覆盖了转身衔接、起停端点、
动作收回待机和三个攻击方向的刀尖高度。

身体最低点仍有约 0.00147 的地面穿入，在当前 0.002 的容差内。
死亡末帧的身体最高点约为 0.589 个模型单位。这些数值检查绑定和运动关系，
外观仍要继续看：旧模型偏干瘦，衣物和皮肤与原版不同，握刀手与身体的材质还需要协调。

工具在 [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline) 维护；模型和完整 mod 留在本地。[工具迁移与复现](/zh/posts/h3-art-tools/)。

## 历史记录

{{< history title="历史原文与修订记录（展开阅读）" note="以下完整保留本次整理前的原文、图片和删除线。这里的“当前”“尚未完成”和“下一步”均指各段写作或标注时的状态；旧版本号、旧工具路径与试稿不能作为现行操作说明。" >}}

~~**截至 2026-09-09：**兵种 mod 为 **0.11.1**，已安装十种墓园兵种。本文涉及的安装数字按各次交付版本注明；最近一次扩展见[吸血鬼与蝙蝠形态](/zh/posts/necropolis-vampires/)。~~


> **2026-09-09 工具迁移：** 后续代码在 [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline) 维护，原 `tools/creature-art/` 与 `tools/town-art/` 对应新仓库的 `creature-art/` 与 `town-art/`。本文的旧路径和 PR 链接保留作历史记录。[迁移与复现说明](/zh/posts/h3-art-tools/)。

**后续进展：**[骷髅勇士、升级僵尸的全部动画与其余墓园兵种进度](/zh/posts/necropolis-upgrades/)已单独发布。


**展示框与阴影更新（0.7.0）：**本篇展示图已经换成确认过的新背景。僵尸的待机中心
从框内 x=75 移到 x=50，全部 160 张身体图和对应阴影、描边同步左移；骷髅保留既有居中修正。
这会一起调整战斗画布中的位置，画布大小、可见像素和动作帧数都保留。

![使用最新背景的兵种展示对照](/demos/necropolis-creatures-game-02/czombi-comparison.png)

上述图片按游戏裁剪参数离线合成，并非游戏截图。背景之前看起来比兵种糊的反馈，
用户明确指的是合成图；这轮没有确认到游戏加载低倍率资源的问题。

阴影方面，旧算法以每帧最低像素为投影基准，并把 alpha 在 128 处硬切。骷髅行走时该基准
跨帧变化 4.5 个逻辑像素，正面攻击为 6.5；行尸行走为 2.5。现在使用固定地面、连续 alpha
和轻度空间模糊，1x 从同一份 2x 投影缩下，不做时间平均，保留动作响应。
行走的最大相邻帧 alpha 变化比，骷髅由 1.083 降到 0.643，行尸由 0.489 降到 0.357。
这是像素变化指标，会受真实动作与模糊程度影响，不能直接等同于闪烁感；攻击动作的变化
也没有全部降低。仍需结合[六组阴影播放对照](/demos/necropolis-creatures-game-02/)观察。
全部 324 张阴影已重新离线生成，身体和描边保持一致，最终验证零错误、零警告。
新包已安装，上一版保留备份；重启游戏后加载。引擎源码未改。

**游戏接入更新：**全套动画已和骷髅一起装入本地 `necropolis-creature-animations`，
13 组、每个倍率 80 帧，1x/2x 都有。`CZOMBI` 对应未升级的行尸；升级僵尸的
`CZOMLO`、大地图外观和头像没有替换，进入战斗才能查看这轮动作。
身体渲染保持原样，离线工具调用 VCMI 算法，根据 alpha 提前生成简化阴影和悬停描边。
合包的 324 张身体图片通过原版帧数与画布检查，零错误、零警告，客户端加载成功。
完整战斗中的攻击接触、落点和时序尚未逐项实测，原有视频仍为身体层预览。
[PR #10](https://github.com/yzh119/vcmi/pull/10)补入安装步骤和验证范围。

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

骷髅之后开始做僵尸，看看上一轮写的 Blender 工具能在第二个兵种上复用多少。
待机、行走和正面攻击之后，其余十组也已补齐，这篇记录现在更新到全套十三组。代码继续由 Astra 编写，
复用之前 Meshy 生成的身体和贴图，没有新增 Meshy 调用。

[十三组动画和原版逐帧对照](/demos/zombie-motion-full-01/)已经可以播放、暂停和拖动。
这里保留的是身体层审阅视频；游戏接入状态见上面的更新。

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

~~阴影和归属覆盖层、完整 mod，以及装进战斗后的速度与接地检查仍待完成。
当前全套预览只含身体层。~~

> 2026-09-09 更新：身体、阴影和悬停描边已经装入游戏；原身体层画廊仍作为历史预览保留。完整战斗速度与接触检查不因安装通过而视为完成。



代码和复现步骤在 [PR #10](https://github.com/yzh119/vcmi/pull/10)，
包括僵尸骨架、握刀手、十三组动作、原版帧数导出和保存后的动画检查。

{{< /history >}}
