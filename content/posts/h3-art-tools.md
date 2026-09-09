---
title: "[AI] A separate repository for the art tools"
date: 2026-09-09T04:12:16+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "meshy"]
lastmod: 2026-09-09T05:48:54+08:00
---

> This article records the implementation and measurements at its publication stage. Versions, costs and check counts belong to that stage. See [Vampire delivery](/posts/necropolis-vampires/) for the subsequent installation and [the standalone tools](/posts/h3-art-tools/) for maintained commands.

The art pipeline now has its own public repository: [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). Rig repair, animation, rendering and packaging will continue there. The former VCMI directories now point to the new location.

The repository contains code, configuration, text prompts, pinned Python dependencies and a [reproduction guide](https://github.com/yzh119/h3-art-pipeline/blob/main/docs/REPRODUCING.md). Models, extracted game references and complete mod packages remain local. The blog continues to show concepts, high-resolution Blender stills, motion reviews and game captures with captions identifying each kind of image.

Meshy remains part of the process. Imagegen supplies concepts; Meshy produces textured geometry and suitable humanoid rigs; Astra writes the local mesh repair, rigging, motion and export tools. The footless Wight uses a locally authored rig. Earlier experiments remain documented in the extracted tools.

Readers can give the prompts and commands to their own AI assistant as a starting point. Reproduction still involves inspection: a new generated mesh may have different hands, equipment or landmarks, and some character scripts contain corrections for a particular mesh. The guide records these limitations, paid API calls and recovery caveats rather than promising identical assets from another run.

At migration time, checks passed for all 38 Python scripts. Validation of the installed eight-creature package matches the earlier report: 188 informational findings, no warnings and no errors. The layered town build passed dimensions and alpha checks across 103 frames. Town tools now accept an explicit faction configuration and default to a pinned copy in the repository, so their operation does not depend on the engine checkout's location. Installed artwork was left unchanged.

The source retains GPL-2.0-or-later licensing and a migration manifest of original file hashes and the source commit. That code license does not cover third-party artwork. Earlier articles and [VCMI fork PR #10](https://github.com/yzh119/vcmi/pull/10) retain the development history; new work uses the standalone repository.

The subsequent [vampire delivery](/posts/necropolis-vampires/) includes flight, transformation and local rebinding. The 38-script and eight-creature migration checks above describe the migration snapshot.

## History

{{< history title="Earlier article and revision notes (expand)" note="The text, images and strikethrough annotations below are preserved from before this editorial pass. “Current”, unfinished work and next steps refer to the time each passage or annotation was written. Old versions, paths and trial renders are historical records." >}}

The art pipeline now has its own public repository: [h3-art-pipeline](https://github.com/yzh119/h3-art-pipeline). Rig repair, animation, rendering and packaging will continue there. The former VCMI directories now point to the new location.

The repository contains code, configuration, text prompts, pinned Python dependencies and a [reproduction guide](https://github.com/yzh119/h3-art-pipeline/blob/main/docs/REPRODUCING.md). Models, extracted game references and complete mod packages remain local. The blog continues to show concepts, high-resolution Blender stills, motion reviews and game captures with captions identifying each kind of image.

Meshy remains part of the process. Imagegen supplies concepts; Meshy produces textured geometry and suitable humanoid rigs; Astra writes the local mesh repair, rigging, motion and export tools. The footless Wight uses a locally authored rig. Earlier experiments remain documented in the extracted tools.

Readers can give the prompts and commands to their own AI assistant as a starting point. Reproduction still involves inspection: a new generated mesh may have different hands, equipment or landmarks, and some character scripts contain corrections for a particular mesh. The guide records these limitations, paid API calls and recovery caveats rather than promising identical assets from another run.

Migration checks passed for all 38 Python scripts. Validation of the installed eight-creature package matches the earlier report: 188 informational findings, no warnings and no errors. The layered town build passed dimensions and alpha checks across 103 frames. Town tools now accept an explicit faction configuration and default to a pinned copy in the repository, so their operation does not depend on the engine checkout's location. Installed artwork was left unchanged.

The source retains GPL-2.0-or-later licensing and a migration manifest of original file hashes and the source commit. That code license does not cover third-party artwork. Earlier articles and [VCMI fork PR #10](https://github.com/yzh119/vcmi/pull/10) retain the development history; new work uses the standalone repository.

~~The Vampire, Vampire Lord and bat base models have also finished generating, including the two humanoid auto-rigs. Local rig inspection, flight animation and transformation transitions are still ahead. These units are not installed in the game yet.~~

{{< /history >}}
