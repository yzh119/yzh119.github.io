---
title: "[AI] Castle roster bootstrap"
date: 2026-09-16T17:10:00+08:00
lastmod: 2026-09-17T18:00:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
homeSummary: "Castle has fourteen independently reviewed Meshy meshes. Zealot’s principal motions pass local review; Monk candidate 03 passes front, upward and downward casts with independent three-dimensional hand VFX; Marksman remote candidate 02 completes core, shooting, hit, defence, death, turns and front/up bolt layers, while separate melee candidate 01 completes three-direction sword attacks. Royal Griffin’s four-frame airborne flight and Pikeman two-hand pike binding remain in reconstruction. No Castle unit is installed in the game."
tags: ["vcmi", "ai", "graphics", "blender", "meshy", "castle"]
---

The Castle roster now has independently reviewed meshes for all fourteen units: Pikeman, Halberdier, Archer, Marksman, Griffin, Royal Griffin, Swordsman, Crusader, Monk, Zealot, Cavalier, Champion, Angel and Archangel. They span long held equipment, a two-handed light crossbow, a winged quadruped, shield-and-sword combat, and an unarmed spellcaster. Each asset needs its own mesh and its own animation constraints.

![Three-quarter concept for the Castle Halberdier](/images/castle-halberdier-01/concept-34.png)

The concept fixes the features that need to survive generation: blue-and-gold tabard, brown boots, uncovered face under a steel cap, and a halberd held vertically at the left side. It is a reference for construction rather than an in-game image.

## All fourteen meshes

![Fourteen independently reviewed Castle mesh bootstraps, ordered by level and upgrade](/images/castle-halberdier-01/roster-bootstrap-01.png)

All fourteen models were generated from separate reviewed concepts and then checked from eight Blender angles. Accepted Meshy mesh tasks consumed 420 credits; the earlier rejected four-view Halberdier request consumed another 30. The Halberdier and Pikeman are now past the first local rig stage: both have holding and walking review sequences at their original 450×400 canvas. The Archer holds its crossbow in the static and holding review, but its first raised-shooting test exposed separated sleeve topology and was rejected. The remaining units have accepted mesh reviews and move on to creature-specific local rigs.

| Unit | reviewed state |
| --- | --- |
| Halberdier | mesh, local rig, 8-frame holding and 6-frame walk |
| Pikeman | mesh, local rig, 7-frame holding and 6-frame walk; separate body/pike two-hand constraint and 10-frame front-lunge probe pass |
| Archer | Meshy humanoid rig; three native 8-frame body shot directions and separate Meshy bolt layers pass continuity review |
| Griffin | mesh and 8-frame holding accepted; 4-frame gait rejected pending leg/tail reweighting |
| Swordsman | replacement Meshy candidate 02: static/rig rest, 8-frame holding, all three 7-frame attack directions and an 8-frame walk pass local review; earlier candidate retains hit/death, defence and move-transition reviews |
| Monk | original rig: 6-frame holding/walk accepted; candidate 03 adds locally repaired 10-frame front/up and 9-frame downward casts |
| Cavalier | mounted probe passes crop and side-motion review for holding, walk, front lance, move start/end; full 87 frames next |
| Angel | Meshy humanoid rig, four local wing bones; 8-frame holding and 7-frame flight review accepted; <s>first sword rebind leaves a second vertical rest weapon and is rejected</s>; separate Meshy sword passes static review, but the matching unarmed-body candidate has perforated wings and is rejected |
| Marksman | remote candidate 02: holding, moving, three-direction shooting, hit, defence, death and move transitions pass; melee candidate 01: separate sword mesh plus 6-frame three-direction attacks pass; three-direction projectile layers plus left/right turns pass; presentation groups next |
| Royal Griffin | <s>four local wing bones and 8-frame holding wing review accepted; ground gait needs rebuild</s> — native moving is airborne flight, not a ground gait; <s>candidate 02 passed only initial static review, but its whole-wing flight exposed black chest-feather defects and is rejected</s>; candidate 03 fixed the chest but collapsed into a near-planar wing spread in side review and is rejected; <s>candidate 04 generated from a strict three-quarter-volume concept and passed volume review, but its chest contains mesh holes that neither thin geometry nor UV-only repair can correct; it is rejected</s>; Royal Griffin now moves to a component-model reconstruction |
| Crusader | Meshy humanoid rig; 8-frame holding/walk and repaired 7-frame rigid-sword double strike pass |
| Zealot | Meshy humanoid rig; local reviews accepted for 6-frame holding/walk, front/up/down casts with hand VFX, 8-frame hit, 7-frame defence and 11-frame death |
| Champion | mounted probe passes crop and side-motion review for holding, walk, front lance, move start/end; full 87 frames next |
| Archangel | Meshy humanoid rig, four local wing bones; 8-frame holding and 7-frame flight review accepted; remaining actions next |

## Review gallery

These are Blender review renders from the accepted local states. They show the actual material under review, rather than concepts or a claimed game result.

### Halberdier: eight-frame holding cadence

![Halberdier holding frame one](/images/castle-halberdier-01/halberdier-holding-01.png)

![Halberdier holding frame three](/images/castle-halberdier-01/halberdier-holding-03.png)

![Halberdier holding frame five](/images/castle-halberdier-01/halberdier-holding-05.png)

![Halberdier holding frame seven](/images/castle-halberdier-01/halberdier-holding-07.png)

![Halberdier six-frame walking review](/images/castle-halberdier-01/halberdier-walking-contact-sheet.png)

### Angel: independent replacement sword, static eight-view check

The replacement sword has passed its own static review. It is deliberately shown separately: the compatible unarmed Angel body did not pass wing review, so this is not yet a combined Angel action.

![Independent Angel sword, front](/images/castle-halberdier-01/angel-independent-sword-000.png)

![Independent Angel sword, three-quarter](/images/castle-halberdier-01/angel-independent-sword-045.png)

![Independent Angel sword, side](/images/castle-halberdier-01/angel-independent-sword-090.png)

![Independent Angel sword, rear](/images/castle-halberdier-01/angel-independent-sword-180.png)

The accepted independent Angel sword is now combined with the original Angel body after selectively removing only the original central blade islands. Front, oblique and side static checks show a single intact sword at the retained hands, while armour and wings remain continuous. This is a static combination acceptance only; its flight and attack actions still need separate review.

![Angel with the independent sword, front static review](/images/castle-halberdier-01/angel-combined-sword-front.png)

![Angel with the independent sword, oblique static review](/images/castle-halberdier-01/angel-combined-sword-oblique.png)

![Angel with the independent sword, side static review](/images/castle-halberdier-01/angel-combined-sword-side.png)

The combined Angel now also passes its native-count seven-frame `CANGEL.DEF` flight review. All front frames and side frames 1, 3, 5 and 7 retain the one independent sword, the two retained hands, body and wing surfaces. This completes the sword-safe holding/flight path; attacks remain separate work.

![Angel independent-sword flight, frame one](/images/castle-halberdier-01/angel-independent-flight-front-01.png)

![Angel independent-sword flight, wing peak](/images/castle-halberdier-01/angel-independent-flight-front-04.png)

![Angel independent-sword flight, side review](/images/castle-halberdier-01/angel-independent-flight-side-03.png)

<s>The first six-frame independent-sword Angel front-attack probe reparented the sword around the static dual-hand guard pivot. An imported parent-inverse transform made it orbit an incorrect world point and leave the Angel, so it is rejected. Flight remains accepted; an attack needs an explicit world-space carrier rather than this inherited parent relationship.</s>

The old Marksman rig could make a front shot but could not reliably lift the light crossbow to the original high-angle direction, so its draft was not treated as an upward attack. Candidate 02 starts again from an independent blue-and-gold crossbowman mesh and Meshy humanoid rig; eight static angles retain the crossbow, both hands and sleeve cuffs. A native six-frame `CHCBOW.DEF` upward attack then moves from low level aim through raise and high release into recovery. Front and side key frames keep the grip, crossbow, hands and sleeves continuous. Its eight-frame front shooting body action also passes: low carry, level aim, short release recoil and recovery retain the crossbow, both hands and sleeve cuffs in front and side review. A separate eight-frame downward shooting action then passes as well: the crossbow presses into a low aim and recovers after release while hands and sleeve cuffs remain continuous from both views. A third eight-frame upward shooting action then passes: it moves from low carry through high aim/release and recovery while crossbow, hands and sleeve cuffs remain continuous in both views. All three ranged shooting body Actions are saved independently; projectile VFX remains a separate layer. Hit and defence were independently reviewed on the same candidate: the six-frame hit uses torso recoil while both hands retain the light crossbow, and the ten-frame defence raises it across the chest without detachment in either view. These are Blender character-motion reviews only, with no DEF output or game installation.

<s>Candidate 02’s first eight-frame moving pass used excessive hip, knee and ankle amplitude, reading as a crouched jump in side view, so it is rejected and will not enter export.</s>

The same rig’s eight-frame holding and revised moving review then pass. The revision retains the clearly alternating stride in the original `CHCBOW.DEF` moving frames while removing the excessive crouch; front and side checks preserve the low carried crossbow, both hands, robe and legs. This remains local Blender review work rather than DEF or game art.

<s>Candidate 02’s first six-frame death probe attempted a root-side fall, but its terminal frames did not form a stable physical collapse and instead stretched the crossbow-hand chain. It is rejected and will not export. Death needs independent ground anchoring and a local arm-weight repair.</s>

Import hierarchy review showed that the Marksman mesh and Armature are siblings: rotating only the rig cannot physically carry the full model into a fall. The repaired version gives both a shared carrier parent and drives the sideward collapse through that parent. Its six-frame death now passes, resolving to a low fallen silhouette while the crossbow and both hands remain intact in front and side review.

Move-start and move-end were each reviewed against their native two-frame group: start enters the restrained stride from the low-carry standing pose, while end returns to it. Both retain crossbow, hands, robe and legs in front and side views.

The original six-frame `CHCBOW.DEF` `attack_front`, `attack_up` and `attack_down` groups are melee motions in which the Marksman draws a short sword; the crossbow-bearing remote candidate cannot stand in for them.

Remote candidate 02’s eight-frame front shot now also has a separate three-dimensional bolt layer. A Meshy bolt generated from its own concept passes static review, seats in the crossbow through aim/release, then travels left-forward. <s>The first probe launched it from the waist; the second moved it forward but remained below the crossbow groove; the fourth lifted the attachment too far above it. All three are rejected and will not export.</s> The fifth pass retains the bolt body and a coherent origin/flight path in front and oblique key frames, so the front projectile layer passes. <s>The first up-shot bolt layer reused the horizontal axis, so it neither seated on the raised groove nor remained in frame; it is rejected.</s> The second turns the bolt with the elevated crossbow, seats it through release and sends it upper-left over eight frames; front and oblique review pass. The down trajectory remains to be authored. This is still neither DEF output nor game installation. <s>A separate Meshy sword was generated for an overlay on remote candidate 02, but the crossbow is embedded in that mesh and its imported hand space does not provide a stable attachment: the sword detached, so the overlay is rejected and will not export.</s> Melee candidate 01 therefore starts again from a complete sword-bearing Marksman Meshy mesh and humanoid rig. Static front, side and rear review retains the sword in the right hand. Its three six-frame actions now pass too: front moves from low guard through raised wind-up into a forward slash and recovery; down resolves from a high wind-up into a low strike; up rises from low guard into a high upward strike and returns. The right-hand sword grip remains continuous in front and side key frames. This remains private Blender motion review, with no DEF output or game installation.



The original Griffin has eight holding frames and four walking frames; the Swordsman has eight of each. Both tests use the original 450×400 canvas. Each now has a stable local holding review: the Griffin uses continuous weights for wings, neck and tail, while the Swordsman keeps sword, shield and armour intact in the rest pose.

<s>The Pikeman’s first ten-frame `CPKMAN.DEF` front-thrust trial keeps the long weapon attached but rotates it around only one hand. The shaft cuts through the torso and the free hand never supports it. A second trial added a two-bone grip constraint, but it pulled apart the rigid sleeve and tabard components without producing a natural thrust. Both are rejected; the next attempt needs a component-level two-hand hierarchy. </s>

<s>A second full Meshy Pikeman candidate explicitly generated a complete visible pike with two grip points and passes static review. Its automatic humanoid weights still do not provide a controllable two-hand attack chain: the first ten-frame action reads as an upward lift, and a later axis probe still cannot reach the original horizontal rightward impact. All three dynamic attempts are rejected and will not export.</s> The next pass needs a dedicated hand-to-pike constraint reconstruction.

The dedicated reconstruction now uses a separately generated Meshy body with two explicit grip points and a separately generated Meshy pike. The pike is placed on the measured line between both rig wrist joints, then body and pike share a 10-frame lunge carrier. Front and oblique checks keep both hands, the shaft and tip continuous through the lunge and recovery. This validates the two-hand equipment constraint; the next pass will add a stronger arm-driven push. It remains Blender review only, with no DEF or game installation.

![Pikeman two-hand pike holding review](/images/castle-halberdier-01/pikeman-twohand-holding.png)

![Pikeman two-hand pike ATTACK_FRONT, impact frame six](/images/castle-halberdier-01/pikeman-twohand-attack-06.png)

![Pikeman two-hand pike oblique impact review](/images/castle-halberdier-01/pikeman-twohand-attack-oblique-06.png)

<s>The first Griffin trial rigidly parented 2,829 disconnected components to bones. Its chest feathers separated in motion. Continuous surface weights repaired holding, but its gait then pulled apart layered surfaces near the legs and tail, so the four-frame walk was rejected.</s>

<s>A later Griffin rebuild split the leg surface across upper, lower and foot bones, then rigidly assigned low claw islands to the foot bones. Side frames still left a front claw and rear-foot fragments behind during the lift, so both versions were rejected. They are not DEF output. </s>

<s>A second 20k-quad Meshy Griffin candidate, generated from the same reviewed full-body concept, reduced disconnected components from 2,829 to 1,707. Its four-frame side gait still separates foreclaws and shin-feather islands from the lifted foreleg in frame 2, so this 30-credit candidate is rejected as well. It will not replace the earlier mesh or enter DEF assembly.</s>

<s>The Archer’s first eight-frame upward-shot draft and a four-axis pose probe are rejected. X/Y arm rotations pull the arms away from the torso; Z rotations move the crossbow but break the two-hand hold. A component-level weapon-and-hand rebind is required before an upward shot can be authored. </s>

<s>The Swordsman’s first seven-frame downward attack draft was rejected after comparing it with exported `CSWORD.DEF` references: it merely lowers the sword behind the body rather than moving from a high ready into a low impact. Axis probes are retained privately; this group needs a rebuilt shoulder–elbow–wrist chain. </s>

<s>The Swordsman's eight-frame gait was also rejected: layered components around the skirt and shield side separate. Its holding and walking Actions are saved independently; the rejected walk will not enter DEF assembly.</s>

Update: the Swordsman now uses a Meshy humanoid rig (an additional 5 credits), with Astra authoring the local holding and walking Actions. Both eight-frame clips were reviewed at 450×400. The left and right feet travel 0.105 and 0.089 model units front-to-back, while the sword hand travels 0.072. Side review keeps sword, shield and skirt continuous, so this local walk review is accepted. It is still not DEF output or a game installation.

The Swordsman now also has a seven-frame `CSWORD.DEF` front-attack review. The wind-up carries the sword behind the body, but front and side checks keep the blade connected to the hand and preserve the shield; up/down strikes and the remaining groups still need authoring.

The Swordsman also now has an independent seven-frame `CSWORD.DEF` upward attack review. Its high-ready motion resolves into an elevated forward strike while the blade, hand, shield and skirt remain continuous in front and side checks. Downward attack and remaining groups still need authoring.

Crusader and Monk each now use their own Meshy humanoid rig (an additional 5 credits each); neither reuses the Swordsman's mesh or weights. The Crusader's eight-frame holding and walking reviews pass intact. Its seven-frame double-strike test is rejected because part of the sword remains weighted to the body chain, and will return after a local rebind. The Monk's six-frame holding and walking reviews pass; its ten-frame front cast is saved as a gesture calibration. The robe remains intact, but the raised-hand amplitude needs refinement, so it is not a final spell delivery.

These trials show that a convincing Meshy surface is not automatically an animatable continuous character topology. The next pass will rebuild local weights from visible joints and connected regions. Until then, these are Blender review assets only: no creature frames, shadows, overlays, DEF output, or game installation.

<s>An Angel two-arm sword probe shows the sword remaining on the body chain while both arms move. It is rejected before attack authoring; a local component-level sword rebind is needed. </s>

After static review of the Angel Meshy humanoid rig, Astra did not rotate the whole wing as one object. It located wing components by position among 1,356 connected components of the shared surface. Four local root/tip bones control 10,319 wing vertices; an eight-frame restrained wing review keeps armour, two-handed sword and torso still. This is a holding-wing result only: flight and sword motion remain to be authored.

Angel now also has a seven-frame `CANGEL.DEF` moving review: root and tip bones drive the existing classified wing regions through a full flap, while the torso and two-handed sword remain continuous in front and side checks. It is flight motion only, still without the remaining action groups, creature layers, DEF output or game installation.

Archangel completed the same local wing process on its separate mesh: 8,888 position-classified wing vertices are assigned to four root/tip bones. The eight-frame review keeps upgraded armour, torso and two-handed sword stable. It does not reuse Angel vertex groups, and is not flight or game installation.

Archangel now has its own seven-frame `CRANGL.DEF` moving review, built from its separate wing mesh and weights. Front and side checks keep both wings, upgraded armour, torso and sword continuous through the flap. It does not cover its remaining action groups or game-ready layers.

Cavalier and Champion each ran a local horse-and-rider probe against their own meshes and original alpha-height anchors. Holding, walking, front lance, move start and move end pass crop checks; a three-frame side review also keeps the horse legs, rider, barding and lance connected through the gait. This is still a probe: each needs its complete 87-frame action set and per-action timing before export.

<s>Royal Griffin uses its own mesh for four root/tip wing bones and 24,793 component-classified wing vertices. Its eight-frame holding wing review passes; its ground gait will not reuse the rejected Griffin leg/tail weights.</s> Rechecking `CRGRIF.DEF` corrects the premise: its four-frame `MOVING` group is airborne flight, not a terrestrial gait. The first split root/tip flight attempt tears neck, chest and wing-root components, so it is rejected. A separate 30-credit Meshy candidate now passes initial eight-view static review with its airborne wings, talons, rear lion legs and tail present. <s>Its replacement assigned complete connected wing components to one shoulder bone per side, which removed the earlier wing-root tearing; chest feather defects remained in side review.</s> Candidate 03 was generated from a front-facing clean-plumage concept (30 credits): the chest improved, but side review exposed a near-planar wing spread, so it too is rejected. <s>Candidate 04 was generated from a strict three-quarter-volume concept and retained a real lion torso and layered wing roots, but chest mesh holes persisted after both shallow-geometry and UV-only repair probes.</s> It is rejected; Royal Griffin now moves to component-model reconstruction before a four-frame airborne review. No rejected candidate has DEF output or game installation.

<s>The Monk’s original ten-frame gesture calibration was described as a stronger native-count front cast with hands opening and rising. A re-review of its rendered peak frame shows it remains near the clasped holding pose, so that claim and acceptance are withdrawn; the clip will not seed the remaining cast groups.</s>

<s>A second ten-frame Monk front-cast rebuild used the original `CMONKK.DEF` single-hand-forward silhouette. Its front and side peak frames still remain close to clasped holding, so the current Meshy rig is rejected for casting and a separate rig candidate is required.</s>

<s>A second Monk mesh candidate was generated from the reviewed concept as a 20k-quad, 4K-texture Meshy asset with image enhancement disabled (30 credits). Its eight-view static review passes: robe, sleeves and hands remain readable from every side. Its new 5-credit humanoid rig still fails all four arm-axis probes: each either stretches the integrated cloak/sleeve surface into a long sheet or collapses the hands. The candidate is therefore rejected for casting; static acceptance alone is not a motion delivery. Re-running automatic humanoid binding is not a repair for this robe topology.</s>

<s>A third Monk candidate was built from a new single-hand-forward concept, again as a 20k-quad, 4K-texture Meshy asset with enhancement disabled (30 credits), followed by a 5-credit humanoid rig. Its static eight-view and rig-rest checks preserve a distinct casting hand, cuff, support hand and torso. A low-range arm test also remains continuous, but the native ten-frame `SHOOT_FRONT` review only produces wrist-level movement; increasing the range reintroduces sleeve deformation. It does not recreate the original gather, forward cast and recovery, so this character-only clip is rejected. A local sleeve/hand separation is now required; no VFX, DEF or game installation was made.</s>

The required local correction is now in place. Astra audited the automated weights and reweighted only the visible casting-arm vertices that already had strong `RightArm` / `RightForeArm` / `RightHand` membership, removing their erroneous torso and leg memberships. The repaired native-count ten-frame `CMONKK.DEF` front-cast review has a readable gather, forward-palm peak and recovery. Full front frames and side start/peak/recovery keep sleeve, wrist, hand and robe continuous. This is a character-motion review only: spell VFX, DEF assembly and game installation remain separate.

<s>The first Monk front-cast VFX test used a global offset from the imported `RightHand` matrix. Its glTF hand-tail transform is malformed, placing the independent particles at the torso in side review, so the test was rejected.</s> The replacement uses a per-frame selection of evaluated leading-palm mesh vertices in front-camera space, then places nine independent 3D particle meshes at that measured hand region. All ten front frames and side start, peak and recovery keep the pulse at the casting hand. This remains a Blender review only, without DEF assembly or game installation.

The native nine-frame `CMONKK.DEF` downward cast now uses the same local sleeve/hand rebind. The forward palm drops to waist height at the peak, then returns. Full front frames and side start, peak and recovery keep hand, sleeve, shoulder cape and robe continuous. It is character motion only; downward VFX, DEF assembly and game installation remain separate.

<s>The Zealot’s first fourteen-frame front-cast review used a symmetric two-hand raise. It stayed continuous, but extracted `CZEALT.DEF` frames show an asymmetric main-hand-forward silhouette, so this first pose is superseded.</s>

The replacement native-count fourteen-frame front cast blocks from that asymmetric original silhouette. All frames and side start, peak and recovery checks keep both hands, sleeves, robe and stole continuous. It is character motion only; spell VFX, DEF assembly and game installation remain separate.

<s>The first front-cast VFX probe parented particles to the imported hand bone, whose glTF tail scale threw them outside the canvas. A world-space replacement then attached correctly but was rejected because its burst was oversized.</s>

The accepted front-cast VFX review uses nine independent 3D particle meshes keyed from the evaluated main-hand world position. All fourteen front frames and side start, peak and recovery keep the compact blue-white sparks attached to the casting hand.

The upward and downward casts now each key the same reusable particle meshes from their own evaluated hand positions. Their native 13-frame sequences and side start, peak and recovery checks remain hand-locked; all three directions still await DEF assembly and game installation.

The original `SPECIAL_UP`, `SPECIAL_FRONT` and `SPECIAL_DOWN` body frames are pixel-identical, so they use one shared native ten-frame special action rather than invented directional variants. <s>The first 3D particle burst was continuous but too small against the original silhouette.</s> The accepted revision uses 31 independent 3D particle meshes, a two-hand raise and an upper-body-sized burst; front full sequence and side start, peak and recovery remain continuous. DEF assembly and game installation remain separate.

<s>The first eight-frame `ATTACK_FRONT` probe kept its main hand and cloth continuous, but its burst was too small against extracted original frames.</s> The accepted replacement uses the native eight-frame main-hand-forward block and 23 independent 3D particles to project the burst toward the target. Front full sequence and side start, peak and recovery keep the hand, sleeves, robe and stole continuous.

The native nine-frame upward attack now keeps its 23-particle burst high at the casting hand; the native nine-frame downward attack uses the front-side low hand chain to keep its burst visible at waist height. Both pass front full-sequence and side start, peak and recovery checks. <s>The first low-attack hand choice left its burst behind the robe in side view, so it was rejected.</s> DEF assembly and game installation remain separate.

<s>The Zealot’s first native-count thirteen-frame upward-cast review used a symmetric two-hand raise. It stayed continuous, but extracted `CZEALT.DEF` frames show a single high forward hand with the other compact, so the first pose is superseded.</s>

The replacement thirteen-frame upward cast blocks from that original single-hand high-forward silhouette. Its front frames and side start, peak and recovery checks preserve hands, sleeves, robe and stole. It remains character motion only, without spell VFX, DEF assembly or game installation.

<s>A first thirteen-frame downward-cast counterpart keeps cloth continuous but collapses both hands into the torso silhouette at its peak. It is rejected; the next attempt will use hand positions measured from original frames rather than reversing the upward pose.</s>

A second thirteen-frame down-cast now blocks from extracted `CZEALT.DEF` frames: one hand projects low and forward while the other stays compact. All frames plus side start, peak and recovery keep the hands, sleeves, robe and stole continuous. This is character motion only; the original spell VFX, DEF assembly and game installation remain separate.

<s>The Marksman now has its own equivalent review on its separate Meshy rig: its `CHCBOW.DEF` front-shot group also has eight frames, and the raise, aim, recoil and return keep the light crossbow, sleeves and hands continuous. It has no bolt release or up/down firing groups yet.</s>

Remote candidate 02 subsequently gained the native eight-frame up/down shooting body groups; bolt release still needs its own three-dimensional layer.

The Monk’s ten-frame upward cast now has its independent three-dimensional hand VFX: one blue core and eight physical spark meshes pulse with the raised right hand. <s>The first screen-space vertex range anchored it on the chest; a local offset remained below the palm, and a later world offset occluded the hood. All were rejected.</s> The repaired version reads the rebound right-hand bone in world space and applies a palm-side world offset, keeping hand, hood and VFX distinct at peak, start and recovery. This remains Blender review, with no DEF or game installation.

<s>The Archer now has a separate Meshy-rig pose check after its earlier rejected local attempt: a five-key raised-crossbow motion keeps both sleeves and the light crossbow connected through the aiming pose. The first front-shot review now uses the original eight-frame group count at 450×400: raise, aim, recoil and return remain continuous. It still has no separate bolt release and no up/down groups, so it is not a finished firing clip.</s> <s>The native eight-frame `SHOOT_UP` body action has now passed front and side key-frame review: low carry rises to the aiming peak and recovers while the light crossbow, both hands and sleeve cuffs remain continuous. Its bolt layer and the separate downward group still need authoring; this is private Blender review only, with no DEF output or game installation.</s> <s>The native eight-frame `SHOOT_DOWN` body action now also passes front and side review: the low target aim and return keep light crossbow, hands and sleeve cuffs continuous. All three body shot directions are present; each still needs its own three-dimensional bolt layer. This remains private Blender review only, with no DEF output or game installation.</s> The first front bolt layer launched from the character’s left, and the second kept the correct rightward direction but sat below the crossbow groove; both are rejected. The third seats in the right-side groove through aim and exits rightward on recoil. Separate upward and downward layers use the same independently reviewed Meshy bolt but their own attached locations and rising/declining trajectories. All three eight-frame projectile layers pass front and side key-frame review. This remains private Blender review only, with no DEF output or game installation.

<s>The Zealot’s eight-frame `HITTED` probe used a rearward torso and defensive arms, but its peak silhouette remained close to holding because the robe hid the deformation. It is rejected and will not enter DEF assembly.</s>

The replacement native-count eight-frame `HITTED` review makes the rearward recoil visible through a compact screen-left displacement and asymmetric defensive arms. Front full-sequence and side start, peak and recovery checks keep the hands, sleeves, robe and stole continuous. It is a Blender motion review only, with no DEF assembly or game installation.

<s>The Zealot’s first seven-frame `DEFENCE` trial had a sound raised-hand pose, but keyed particles from an untransformed imported local hand matrix, leaving the effect outside the canvas.</s> The accepted native-count replacement uses an upper forward ward hand and 17 independent world-space 3D particles. Front full-sequence and side start, peak and recovery checks keep the effect hand-locked and the hands, sleeves, robe and stole continuous. It remains a Blender review, without DEF assembly or game installation.

<s>The Zealot’s first eleven-frame `DEATH` attempt wrote Euler rotations while the imported Armature remained in quaternion mode, so it did not collapse. The next two repairs corrected rotation but sent the late body outside the canvas through an external pivot and then insufficient positional compensation.</s> The accepted native-count fourth review uses a physical diagonal collapse into a low horizontal final silhouette. Front full-sequence and side start, mid and end checks keep the complete body inside the canvas and preserve hands, sleeves, robe and stole continuity. It remains a Blender review, without DEF assembly or game installation.

The native two-frame `MOVE_START` and `MOVE_END` reviews now explicitly bridge holding to the first gait pose and back, rather than cutting the walking loop. Their front and side frames keep feet, sleeves, robe and stole continuous. They remain Blender reviews, without DEF assembly or game installation.

<s>The Crusader’s first mesh attempted a component-level sword rebind: a screen-space selection included blade strips together with forearm and tabard fragments, creating separated ribbons during the seven-frame double strike. It remains rejected.</s> A second Meshy candidate was generated from the same reviewed concept as a 20k-quad, 4K-texture mesh with image enhancement disabled (30 credits), then received a 5-credit humanoid rig. Its eight-view static mesh and rig-rest reviews keep sword, shield and cape distinct, but the first seven-frame double-strike still bends the sword’s layered surfaces through Meshy smooth weights. Removing its non-character `Cube` and `Icosphere` placeholders fixes an import artifact, not the blade deformation; a targeted sword rebind is still required. Neither candidate is DEF output or an in-game installation. <s>An eighth local repair removed the known deforming blade sheets and added a rigid four-piece 3D sword parented to the right hand. Front frames kept the new sword intact, but oblique review still exposed two residual original blade strips below the knee. The attempt is rejected; those remaining source components must be removed before any double-strike acceptance.</s> The ninth repair removes that narrow front-knee source region while retaining boots, cape and armour. The rigid four-piece sword now passes all seven front frames and all seven oblique frames: sword, right hand, shield and legs stay continuous through the double strike. This is Blender review only, without DEF output or game installation.

![Crusader double-strike start](/images/castle-halberdier-01/crusader-double-strike-start.png)

![Crusader double-strike second cut](/images/castle-halberdier-01/crusader-double-strike-cut.png)

![Crusader double-strike oblique continuity](/images/castle-halberdier-01/crusader-double-strike-oblique.png) <s>An eighth local repair removed the known deforming blade sheets and added a rigid four-piece 3D sword parented to the right hand. Front frames kept the new sword intact, but oblique review still exposed two residual original blade strips below the knee. The attempt is rejected; those remaining source components must be removed before any double-strike acceptance.</s>

The Swordsman now has a native six-frame `HITTED` review: a visible rearward recoil and raised shield keep the original defensive silhouette readable. Front full-sequence and side start, peak and recovery checks keep sword, shield, hands, armour and tabard continuous. It remains a Blender review, without DEF assembly or game installation.

The Swordsman also has a native six-frame `DEATH` review. It physically collapses diagonally into a low horizontal final silhouette rather than fading out; front full sequence and side start, mid and end checks keep sword, shield, hands, armour and tabard continuous within the canvas. It remains a Blender review, without DEF assembly or game installation.

<s>The Swordsman’s first eleven-frame `DEFENCE` trial raised the sword sideways; a second reused the upward-strike axis but left it behind the shoulder. Neither matched the original high guard.</s> The accepted native-count third review raises the complete sword diagonally before the head while the shield closes over the torso. Front full-sequence and side start, peak and recovery checks keep sword, shield, hands, armour and tabard continuous. It remains a Blender review, without DEF assembly or game installation.

<s>The Swordsman’s second seven-frame `ATTACK_DOWN` rebuild added the correct high-ready pose, but its low impact still carried the sword behind the torso instead of the original forward/downward cut. It is rejected alongside the earlier single-axis attempt; the next version requires a local forward hand rebind. A third through sixth attempt removed the low-impact lateral rotations and probed connected-bone translation plus imported hand offsets. They keep sword and hand connected, but side review still places the chain behind the torso; the old mesh/rig cannot supply the original forward/downward cut and will not be used for this group.</s> A separate Meshy candidate with a cleanly isolated sword, hand and shield is required. <s>Candidate 02 now passes static eight-view and Meshy humanoid-rig rest review: its blade, right hand, left-hand shield and torso remain distinct from every side. It used a 30-credit 20k-quad/4K Meshy mesh task and a separate 5-credit humanoid rig. A rigid rebinding of the two sword components prevents them from blending into the torso and gives a correct forward low-impact probe, but the automatic shoulder/elbow axes cannot also form the high-ready pose. A local sword-control bone derived from the right hand is now required; no new attack group is accepted yet.</s> The first rebuilt motion still placed the blade behind the body; a local `SwordControl` bone then isolated the components but inherited the malformed imported hand-scale axes and could not make a reliable high-ready pose. The accepted repair separates the two Meshy sword components as an independent 3D object and rotates it at the measured grip pivot. Its native seven-frame `ATTACK_DOWN` now has a high-ready, forward/downward impact and recovery. Full front frames plus side start, high-ready, impact, recovery and end keep sword, right hand, shield and torso continuous. This remains Blender review only, with no DEF output or game installation. Candidate 02’s independent seven-frame `ATTACK_UP` subsequently passes as well: its low carry rises to the elevated strike and returns while the measured grip pivot keeps sword, right hand, shield and torso continuous in front and side key frames. It still has no DEF output or game installation. Candidate 02’s seven-frame `ATTACK_FRONT` now also passes: a high-ready resolves into the original forward horizontal strike and recovery. The default oblique and side views clearly show the blade travelling before the shield; the camera aligned with the sword axis naturally reads it as a thin line, while sword, right hand and body remain continuous. This remains Blender review only, with no DEF output or game installation. Candidate 02 now also passes an independent native eight-frame `HOLDING` review: restrained body breath and the measured grip-pivot sword preserve sword, hands, shield and armour in all front/side keys. No DEF output or game installation has been made.

### Replacement Swordsman candidate 02: review frames

The following stills document the actual candidate rather than only its concept: mesh review, holding, the three attack directions, and the current walk key pose. They are Blender review renders, not DEF frames or an in-game installation.

![Candidate 02 static mesh review](/images/castle-halberdier-01/swordsman-candidate02-static-45.png)

![Candidate 02 holding, frame five](/images/castle-halberdier-01/swordsman-candidate02-holding-05.png)

![Candidate 02 ATTACK_FRONT, frame four](/images/castle-halberdier-01/swordsman-candidate02-attack-front-04.png)

![Candidate 02 ATTACK_UP, frame four](/images/castle-halberdier-01/swordsman-candidate02-attack-up-04.png)

![Candidate 02 ATTACK_DOWN, frame four](/images/castle-halberdier-01/swordsman-candidate02-attack-down-04.png)

![Candidate 02 moving, frame three](/images/castle-halberdier-01/swordsman-candidate02-moving-03.png)

The Swordsman’s native two-frame `MOVE_START` and `MOVE_END` reviews now explicitly bridge holding to the first verified gait pose and back rather than cutting the walk loop. Front and side frames keep sword, shield, hands, armour, tabard and boots continuous. They remain Blender reviews, without DEF assembly or game installation.

<s>The first six-frame Halberdier front-attack probe tried to turn the imported loose pole pieces as one left-hand carrier. The visual check exposed unmoved head and lower-shaft fragments alongside the rotated shaft, so it is rejected. The accepted holding and walking states were restored; attack work now needs a clean full-weapon component extraction before another probe.</s>

<s>The second six-frame front-attack reconstruction replaced the pole with one rigid authored shaft, spear, axe head and butt cap. Its broad mask correctly removed the Meshy weapon fragments but also removed the holding hand; keeping the hand’s local region retained a vertical shaft remnant. Both sub-passes are rejected. The next attempt must extract a complete Meshy hand-and-weapon component set before action authoring.</s>

## Meshy mesh

<s>The first Meshy request used the complete four-view sheet as one input image. It spent 30 credits and returned several copies of the halberd without a person, so it was rejected before rigging or animation.</s>

The second request used the single three-quarter panel. It also used 30 credits and returned a textured human mesh with the tabard, armour and halberd intact. Its source object has 404,705 vertices. Meshy's automatic rig endpoint returned HTTP 400 for this asset and did not create a rig task or consume rigging credits.

![Meshy review render of the accepted Halberdier mesh](/images/castle-halberdier-01/meshy-review.png)

## Local rig and motion review

Astra authored the Blender-side recovery instead of retrying the automatic rig. The Meshy export is 972 disconnected mesh components, so conventional smooth weighting would pull its clothing and weapon apart. The local rig assigns each component rigidly to an anatomical bone; 51 vertically aligned halberd components are attached to the left-hand weapon bone. The rest pose remains intact, and the weapon stays connected while the arm moves.

![Eight-frame holding clip, shown here at frame one](/images/castle-halberdier-01/local-rig-holding.png)

The first holding loop has eight authored frames. The six-frame walking review keeps the halberd upright and gives the holding arm a restrained swing alongside the opposite arm and legs. It is deliberately a review render: no creature frames, shadows, overlays, DEF packing, or game installation have been produced from it yet.

![Six-frame walking review, frame three](/images/castle-halberdier-01/local-rig-walk.png)

The next pass is to inspect the walk against the original group frame by frame, then author the remaining <code>CHALBD.DEF</code> groups before any local mod is assembled. Meshy supplies the textured geometry; Astra supplies the local rig, motion, render and validation tooling.
