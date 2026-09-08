---
title: "[AI] Vampire and bat forms"
date: 2026-09-09T04:26:09+08:00
series: ["Heroes III"]
ai: true
tags: ["vcmi", "ai", "graphics", "blender", "meshy"]
---

Vampire and Vampire Lord are the next Necropolis units. I imported both humanoids and a separate bat into Blender and rendered high-resolution stills to inspect the generated geometry before authoring motion. Each concept is shown alongside its actual model render.

These are **model inspection results**. The two humanoid auto-rigs have returned, but local motion checks, the bat rig and transformation transitions remain unfinished. Neither unit is installed; the local game still uses the previous eight-creature package.

## Vampire

The imagegen concept uses a pale bald head, pointed ears, long claws and worn dark clothing. Meshy 7 reconstructed the textured model from this image.

![Vampire concept used for model generation](/images/necropolis-vampires/vampire-concept.jpg)

The following **1400×1600 Blender render** shows the imported pose and supplied texture. Click it for the transparent PNG at its original resolution.

[![Vampire Blender still in its imported pose](/images/necropolis-vampires/vampire-blender-hd.jpg)](/images/necropolis-vampires/vampire-blender-hd.png)

The face, clothing seams and hands can now be inspected at full size. The generated fingers have not yet been tested through a claw attack. [Prompt](/images/necropolis-vampires/vampire-prompt.txt) · [Model audit](/images/necropolis-vampires/vampire-audit.json) · [Render record](/images/necropolis-vampires/vampire-render.json).

## Vampire Lord

The upgrade adds a rust-orange long coat and raised collar over dark inner clothing.

![Vampire Lord concept used for model generation](/images/necropolis-vampires/vampire-lord-concept.jpg)

[![Vampire Lord Blender still with unresolved fragmented clothing](/images/necropolis-vampires/vampire-lord-blender-hd.jpg)](/images/necropolis-vampires/vampire-lord-blender-hd.png)

This **1400×1600** render exposes fragmented edges and gaps around the chest, cuffs and coat tails. Some regions look like separated triangular faces. The image records an unresolved result: the mesh or material cause needs investigation before clothing deformation and animation delivery.

[Prompt](/images/necropolis-vampires/vampire-lord-prompt.txt) · [Model audit](/images/necropolis-vampires/vampire-lord-audit.json) · [Render record](/images/necropolis-vampires/vampire-lord-render.json).

## Bat

The original creature travels in bat form, so this uses a separate generated mesh with extended wings. Flight and transformation need a locally authored rig.

![Bat concept used for model generation](/images/necropolis-vampires/vampire-bat-concept.jpg)

[![Blender still of the bat with wings extended](/images/necropolis-vampires/vampire-bat-blender-hd.jpg)](/images/necropolis-vampires/vampire-bat-blender-hd.png)

The landscape render is **2000×1400**. The front view shows the head and spread silhouette, although the wing undersides remain dark. A [higher inspection view with stronger fill](/images/necropolis-vampires/vampire-bat-top-blender-hd.png) shows how thin the wings appear from above, along with gaps on the back. Those features need further inspection. The wings remain in a static spread pose; no flapping animation exists yet.

[Prompt](/images/necropolis-vampires/vampire-bat-prompt.txt) · [Model audit](/images/necropolis-vampires/vampire-bat-audit.json) · [Render record](/images/necropolis-vampires/vampire-bat-render.json).

## Tools and remaining work

Three Meshy geometry requests cost 30 credits each, and two humanoid rigging requests cost 5 each: **100 credits** for this stage. All three imported color textures are 4096×4096. The stills were rendered locally in Blender 5.2.1 LTS at 64 samples, with no additional generation requests.

Astra wrote [bootstrap_portrait.py](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/bootstrap_portrait.py) to save editable inspection scenes and invoke the portrait renderer. Records include source and render hashes, actual mesh counts, texture dimensions and image-bound checks. The JPEG versions add a display background; the transparent PNGs retain the rendered resolution.

Next come the Lord's clothing investigation, humanoid hand and joint checks, bat wing motion, transformation transitions, claw attacks and death. Native frame counts and mod validation follow those steps. Tool code is public in the standalone repository; models and complete mod packages stay local.
