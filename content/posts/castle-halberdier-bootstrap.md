---
title: "[AI] Castle roster bootstrap"
date: 2026-09-16T17:10:00+08:00
lastmod: 2026-09-17T18:00:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
homeSummary: "Castle has fourteen independently reviewed Meshy meshes. Angel passes its independent sword, flight, three sword directions, hit, defence and move transitions; Archangel passes its independent sword, flight, three sword directions, defence, hit and move transitions in front and side review. These remain private Blender reviews, with no Castle unit installed in the game."
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
| Halberdier | Meshy body and original long-weapon components; holding, walk, three attack directions, 6-frame hit and 12-frame defence accepted in front and side review |
| Pikeman | mesh, local rig, 7-frame holding and 6-frame walk; separate body/pike two-hand constraint and 10-frame front-lunge probe pass |
| Archer | Meshy humanoid rig; three native 8-frame body shot directions and separate Meshy bolt layers pass continuity review |
| Griffin | mesh and 8-frame holding accepted; 4-frame gait rejected pending leg/tail reweighting |
| Swordsman | replacement Meshy candidate 02: static/rig rest, 8-frame holding, all three 7-frame attack directions and an 8-frame walk pass local review; earlier candidate retains hit/death, defence and move-transition reviews |
| Monk | original rig: 6-frame holding/walk accepted; candidate 03 adds locally repaired 10-frame front/up and 9-frame downward casts |
| Cavalier | mounted probe passes crop and side-motion review for holding, walk, front lance, move start/end; full 87 frames next |
| Angel | Meshy humanoid rig, four local wing bones; 8-frame holding and 7-frame flight review accepted; <s>first sword rebind leaves a second vertical rest weapon and is rejected</s>; separate Meshy sword passes static review, but the matching unarmed-body candidate has perforated wings and is rejected |
| Marksman | remote candidate 02: holding, moving, three-direction shooting, hit, defence, death and move transitions pass; melee candidate 01: separate sword mesh plus 6-frame three-direction attacks pass; three-direction projectile layers plus left/right turns pass; presentation groups next |
| Royal Griffin | <s>four local wing bones and 8-frame holding wing review accepted; ground gait needs rebuild</s> — native moving is airborne flight, not a ground gait; <s>candidate 02 passed only initial static review, but its whole-wing flight exposed black chest-feather defects and is rejected</s>; candidate 03 fixed the chest but collapsed into a near-planar wing spread in side review and is rejected; <s>candidate 04 generated from a strict three-quarter-volume concept and passed volume review, but its chest contains mesh holes that neither thin geometry nor UV-only repair can correct; it is rejected</s>; Royal Griffin now moves to a component-model reconstruction |
| Crusader | <s>Meshy mesh and rig; 11-frame defence candidate corrects shield folding, hand penetration and duplicate grip; 8-frame holding/walk and 6-frame recoil drafts added; recoil hand/shield contact remains unresolved; no game installation</s> Thirteen groups and 76 draft frames; hand/shield crossings and corpse support revised; battle camera and turns under adjustment; no game installation |
| Zealot | Meshy humanoid rig; local reviews accepted for 6-frame holding/walk, front/up/down casts with hand VFX, 8-frame hit, 7-frame defence and 11-frame death |
| Champion | mounted probe passes crop and side-motion review for holding, walk, front lance, move start/end; full 87 frames next |
| Archangel | Separate Meshy sword with a local-wing humanoid rig; holding, 7-frame flight, three 6-frame sword attacks, 10-frame defence, 6-frame hit, and move transitions accepted in review |

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

The replacement six-frame `ATTACK_FRONT` uses an explicit world-space sword matrix around the visible dual-hand guard. It fixes the rejected inherited-parent pivot: all front frames and side frames 1, 3, 4 and 6 keep the one sword, torso and wings continuous. This accepts the weapon path; a later local rig pass will add larger arm travel.

![Angel independent-sword front attack, wind-up](/images/castle-halberdier-01/angel-independent-attack-front-03.png)

![Angel independent-sword front attack, contact](/images/castle-halberdier-01/angel-independent-attack-front-04.png)

![Angel independent-sword front attack, side continuity](/images/castle-halberdier-01/angel-independent-attack-side-04.png)

The same explicit world-space constraint now passes the six-frame `ATTACK_UP` path: start, raised diagonal sweep, high contact and recovery retain the unique sword, hands, body and wings in front and side review.

![Angel independent-sword upward attack, raise](/images/castle-halberdier-01/angel-independent-attack-up-front-03.png)

![Angel independent-sword upward attack, contact](/images/castle-halberdier-01/angel-independent-attack-up-front-04.png)

![Angel independent-sword upward attack, side review](/images/castle-halberdier-01/angel-independent-attack-up-side-04.png)

The six-frame `ATTACK_DOWN` completes Angel’s three-direction independent-sword weapon paths. Its low diagonal release and recovery retain the one sword, retained hands, torso and wings in front and side review.

![Angel independent-sword downward attack, wind-up](/images/castle-halberdier-01/angel-independent-attack-down-front-03.png)

![Angel independent-sword downward attack, contact](/images/castle-halberdier-01/angel-independent-attack-down-front-04.png)

![Angel independent-sword downward attack, side review](/images/castle-halberdier-01/angel-independent-attack-down-side-04.png)

Angel’s native ten-frame `DEFENCE` now passes with a high diagonal sword guard. All front frames plus side frames 1, 4, 6 and 10 retain one sword and continuous hands, body and wings.

![Angel independent-sword defence, high guard](/images/castle-halberdier-01/angel-independent-defence-front-05.png)

![Angel independent-sword defence, side review](/images/castle-halberdier-01/angel-independent-defence-side-06.png)

<s>The first eight-frame Angel death uses a shared carrier for body, rig and independent sword, so it preserves continuity, but the rightward fall exits the front canvas and its end silhouette is not a readable ground fall. It is rejected; flight, attacks and defence remain accepted.</s>

Angel’s independent-sword path now includes a six-frame hit recoil and its native two-frame start / three-frame end flight transitions. The recoil applies the same world-space displacement to body and sword; the transitions open and settle the wings while retaining the sword at the hands.

![Angel independent-sword hit recoil](/images/castle-halberdier-01/angel-independent-hit-03.png)

![Angel independent-sword flight start](/images/castle-halberdier-01/angel-independent-move-start-02.png)

Archangel now uses the same separate-sword strategy: central embedded blade islands are removed, then an independently reviewed Meshy sword is placed at its retained hands. Static front, oblique and side review plus all seven flight frames and four side keys pass with one sword and continuous armour and wings.

The three native six-frame sword paths are now separately reviewed as well: a front sweep, an upward stroke, and a downward stroke. The sword is controlled by an explicit world-space matrix around the measured two-hand guard point, so it does not inherit the imported parent pivot or malformed hand-tail transforms. The contact and recovery keys below, including side checks for every direction, keep one sword visibly held through the action. These remain Blender motion reviews; DEF packing and game installation are not claimed.

![Archangel independent sword, oblique static review](/images/castle-halberdier-01/archangel-combined-sword-oblique.png)

![Archangel independent-sword flight, wing peak](/images/castle-halberdier-01/archangel-independent-flight-04.png)

![Archangel independent-sword flight, side review](/images/castle-halberdier-01/archangel-independent-flight-side-03.png)

![Archangel front-sweep impact](/images/castle-halberdier-01/archangel-independent-attack-front-impact.png)

![Archangel front-sweep side review](/images/castle-halberdier-01/archangel-independent-attack-front-side.png)

![Archangel upward-stroke peak](/images/castle-halberdier-01/archangel-independent-attack-up-peak.png)

![Archangel upward-stroke side review](/images/castle-halberdier-01/archangel-independent-attack-up-side.png)

![Archangel downward-stroke contact](/images/castle-halberdier-01/archangel-independent-attack-down-contact.png)

![Archangel downward-stroke side review](/images/castle-halberdier-01/archangel-independent-attack-down-side.png)

A ten-frame defence, six-frame hit recoil, two-frame move start, and three-frame move end have now passed the same front-and-side review. Defence keeps the separate sword readable across the chest at its high point; hit applies the identical world-space offset to body and sword; the short transitions use Archangel’s own wing bones while retaining the single sword carrier. The review set intentionally does not claim a death pose, DEF packing, or in-game installation.

![Archangel defence peak](/images/castle-halberdier-01/archangel-independent-defence-peak.png)

![Archangel defence side review](/images/castle-halberdier-01/archangel-independent-defence-side.png)

![Archangel hit recoil](/images/castle-halberdier-01/archangel-independent-hit-recoil.png)

![Archangel hit side review](/images/castle-halberdier-01/archangel-independent-hit-side.png)

![Archangel move-start wing key](/images/castle-halberdier-01/archangel-independent-move-start.png)

![Archangel move-end wing key](/images/castle-halberdier-01/archangel-independent-move-end.png)

<s>The first eight-frame Archangel death probe was rejected. Its front endpoint approached the original compact folded-wing silhouette, but its side review exposed a wing that had been flung away from the body by the current local wing-bone fold axis. The original `CRANGL.DEF` ends as a compact protected form, rather than the earlier rejected sideways-fall approach. A dedicated folded-wing rig is required before this group can be accepted.</s>

![Rejected Archangel death probe, front endpoint](/images/castle-halberdier-01/archangel-independent-death-rejected-front.png)

![Rejected Archangel death probe, side endpoint](/images/castle-halberdier-01/archangel-independent-death-rejected-side.png)

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

<s>The Crusader’s first mesh attempted a component-level sword rebind: a screen-space selection included blade strips together with forearm and tabard fragments, creating separated ribbons during the seven-frame double strike. It remains rejected.</s> A second Meshy candidate was generated from the same reviewed concept as a 20k-quad, 4K-texture mesh with image enhancement disabled (30 credits), then received a 5-credit humanoid rig. Its eight-view static mesh and rig-rest reviews keep sword, shield and cape distinct, but the first seven-frame double-strike still bends the sword’s layered surfaces through Meshy smooth weights. Removing its non-character `Cube` and `Icosphere` placeholders fixes an import artifact, not the blade deformation; a targeted sword rebind is still required. Neither candidate is DEF output or an in-game installation. <s>An eighth local repair removed the known deforming blade sheets and added a rigid four-piece 3D sword parented to the right hand. Front frames kept the new sword intact, but oblique review still exposed two residual original blade strips below the knee. The attempt is rejected; those remaining source components must be removed before any double-strike acceptance.</s> The ninth repair removes that narrow front-knee source region while retaining boots, cape and armour. <s>The rigid four-piece sword now passes all seven front frames and all seven oblique frames: sword, right hand, shield and legs stay continuous through the double strike.</s> Defence review subsequently exposed grip remnants and flexible shield deformation; those attack checks did not establish that the rig supports the full action set. This is Blender review only, without DEF output or game installation.



**Crusader defence review — work in progress**

The original `CCRUSD` defence group contains eleven frames: raise the shield, lower the blade, and recover. The imported skin weights fold the shield as the forearm rises. A dedicated shield bone now drives 1,453 vertices from the existing Meshy mesh, including the small trim pieces. Across eleven frames, 3,648 internal shield edges change length by at most approximately 0.003%. This measures shield rigidity only.

<s>The front and side renders still show grey remnants on the shield and leftover geometry around the sword grip. Delivery remains pending.</s> Rendering the shield alone traced the grey patches to the hand penetrating its surface. Two sampled rays measured roughly 1–1.5 cm of penetration; adjusting the holding offset clears it. A grip close-up also showed that the original Meshy handle was intact. The revision retains that handle and the hand, removes the duplicate procedural handle, and replaces only the damaged guard and blade. A narrower selection left small trim fragments floating outside the shield and was rejected; the retained candidate includes those pieces. The revised candidate has eleven front and eleven side renders. Sampled start, raise, block and recovery poses no longer show the identified floating blade remnants. Other actions still need the same attachment fixes; there is no DEF export or game installation. The failure images remain below, followed by the revised Blender renders.

![Rejected defence study: automatic weights fold the shield](/images/castle-halberdier-01/crusader-defence-flexible-failure.png)

![Rigid shield, front review; surface and grip remnants remain](/images/castle-halberdier-01/crusader-defence-rigid-front.png)

![Side review of the same unfinished defence pose](/images/castle-halberdier-01/crusader-defence-rigid-side.png)

![Revised defence candidate, front](/images/castle-halberdier-01/crusader-defence-clean-front.png)

![Revised defence candidate, side](/images/castle-halberdier-01/crusader-defence-clean-side.png)

![Start, shield raise and recovery; other action groups remain pending](/images/castle-halberdier-01/crusader-defence-clean-grid.jpg)

**Holding, recoil and walking studies**

The repaired equipment now carries eight holding frames, six recoil frames and eight walking frames. An early recoil draft lifted the leg forward. Reviewing the original sequence corrected that to a forward torso lean, rear leg lift and extension, with the shield arm thrown backwards. The larger motion still exposes an unresolved glove/shield-edge contact problem.

The walk uses two-segment leg solves and changes the sword from raised to lowered carriage across the cycle. Each wrist travels opposite its same-side ankle. An extra ninth key closes the eight-frame loop; it is not an exported native frame. Endpoint vertex positions match, and sampled stance soles stay within roughly 1.2 mm of the ground. These checks do not establish native gait fidelity. Final frame-by-frame equipment review, movement transitions, attacks and death remain pending, with no game installation.

![Walking study with lowered sword carriage](/images/castle-halberdier-01/crusader-moving26-side.png)

![Rear leg lift and shield throw; glove/shield contact remains unresolved](/images/castle-halberdier-01/crusader-hitted24-pending-contact.png)

**Attack timing correction**

The old seven-frame draft contained two swings. Inspecting the original `ATTACK_FRONT` sequence showed one raise, slash and recovery, so the earlier double-strike acceptance is withdrawn. The replacement keeps seven frames and authors a single slash. Raising the sword overhead also exposed source handle pieces following forearm weights; binding them rigidly to the wrist removed the separated pommel in the inspected front and side wind-up views. <s>The lower-body lunge, full sword path and the other attack directions remain unfinished.</s> Three directional candidates now provide seven frames each on the repaired grip model, with a wider planted lunge. All 21 poses were inspected in front and side contact sheets; sampled low-foot vertices remain roughly -0.8 to +0.9 mm from the floor. The original anticipatory leg lift, torso turn and shield-arm coordination still need closer matching. These remain production candidates without game integration.

![Single-slash wind-up candidate; the full attack is not accepted](/images/castle-halberdier-01/crusader-single-slash29-windup.png)

![Side review of seven-frame up, front and down attack candidates](/images/castle-halberdier-01/crusader-attacks31-side.jpg)

![Front review of the same candidates; native pose refinement remains pending](/images/castle-halberdier-01/crusader-attacks31-front.jpg)

**Full-set draft review**

The Crusader now has drafts for thirteen standard groups, totaling 76 native frames, with an explicit action list for one shared model. Turning follows VCMI's two `TURN_L` frames, facing flip, and two `TURN_R` frames. The middle pose brings the equipment closer to the centerline; hover has eight separate frames. The six-frame death study falls backwards and ends face-up with lowered arms and equipment beside the body.

<s>This completes draft coverage only. Glove/shield-edge contact, corpse support, final camera alignment and transitions still need full-set review. Later hand-weight edits also affect earlier actions, so their individual review results cannot establish that the combined set is ready. There is no DEF export or game installation.</s>

September 17 review: after adjusting the shield, the selected hand/forearm and shield triangles show no crossings across the 76 frames. This excludes other body regions and does not establish a natural grip. A ground-plane render also exposed a floating corpse: placing the lowest equipment or hand point at ground level left the body elevated. The body has been lowered and the arms repositioned.

![Revised corpse support with a ground plane; Blender review only](/images/castle-halberdier-01/crusader-ground45.png)

All 76 body frames have been rendered on transparent 900×800 canvases, with holding height and foot placement registered to the original. No geometry exceeds the canvas. Comparing them with the original exposed another problem: the camera was too frontal, making the front strike point toward the viewer. The revised camera below gives a more side-on view. Each pair shows the original on the left and the new model on the right. Turns still need adjustment for that camera; shadow and outline layers and in-game validation remain unfinished. The Crusader is not installed in the game.

![Original holding and front strike alongside the revised camera candidate](/images/castle-halberdier-01/crusader-camera46-comparison.png)

The next two images preserve the earlier turn and death candidates, before the contact and support corrections described above.

![Turn halves with the engine facing flip simulated; contact remains unresolved](/images/castle-halberdier-01/crusader-turn34-flip-review.jpg)

![Six-frame death candidate, front and side review](/images/castle-halberdier-01/crusader-death36-review.jpg)

The next three images preserve the earlier double-swing draft; that timing has been discarded.

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

The next six-frame `ATTACK_FRONT` review accepts the original Meshy long weapon rather than a substitute. All forward pole/head components are regrouped around the measured visible grip as one carrier; the lower cap previously misclassified as a left-foot piece is included as well. The full rest frame, contact and side key retain the single long halberd, its original axe silhouette, and the holding hand without residual static fragments. This is a Blender weapon-path review only; it does not claim DEF assembly or game installation.

![Halberdier original Meshy halberd, full rest frame](/images/castle-halberdier-01/halberdier-original-component-attack-holding.png)

![Halberdier original Meshy halberd, front contact](/images/castle-halberdier-01/halberdier-original-component-attack-impact.png)

![Halberdier original Meshy halberd, side contact review](/images/castle-halberdier-01/halberdier-original-component-attack-side.png)

The same complete-component carrier now passes both remaining native directions: six-frame `ATTACK_UP` rises through a diagonal high contact, and seven-frame `ATTACK_DOWN` completes its descending diagonal contact and recovery. Front and side keys show the original axe head, shaft, butt cap and visible grip as one coherent object in each direction.

![Halberdier upward attack, front contact](/images/castle-halberdier-01/halberdier-original-component-attack-up-impact.png)

![Halberdier upward attack, side review](/images/castle-halberdier-01/halberdier-original-component-attack-up-side.png)

![Halberdier downward attack, front contact](/images/castle-halberdier-01/halberdier-original-component-attack-down-impact.png)

![Halberdier downward attack, side review](/images/castle-halberdier-01/halberdier-original-component-attack-down-side.png)

A six-frame `HITTED` recoil now translates both the body and the complete original-weapon carrier together. Twelve-frame `DEFENCE` then raises the same original axe head and shaft through a diagonal chest guard and recovery. The selected front and side keys keep the grip, shaft, axe head and butt cap continuous; they remain Blender reviews without DEF assembly or installation.

![Halberdier hit recoil](/images/castle-halberdier-01/halberdier-original-component-hit-recoil.png)

![Halberdier hit side review](/images/castle-halberdier-01/halberdier-original-component-hit-side.png)

![Halberdier defence peak](/images/castle-halberdier-01/halberdier-original-component-defence-peak.png)

![Halberdier defence side review](/images/castle-halberdier-01/halberdier-original-component-defence-side.png)

<s>The first four-frame Halberdier death probe shared one carrier between the body and complete original weapon, so it retained continuity, but it became an airborne sideways fall. The original `CHALBD.DEF` ends as a compact ground silhouette. This probe is rejected; a future death pass must author ground contact and a folded final pose rather than simply rotate the full character.</s>

![Rejected Halberdier death probe](/images/castle-halberdier-01/halberdier-death-rejected-front.png)

<s>A second probe shrank the shared carrier toward the original compact endpoint, but it only made the same airborne horizontal fall smaller. It is also rejected; scale and whole-object rotation cannot substitute for a ground-contact death pose.</s>

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

The third four-frame Halberdier `DEATH` pass replaces the failed scale trick with a ground-contact pivot at the forward foot and local limb curl. In the battle-facing review it reaches a readable low, horizontal end silhouette while the entire original halberd stays connected to the left hand. This is accepted for the front sprite path only: the side view confirms that the current model is authored for the battle camera, not as a free-rotation character performance. It remains a Blender review asset, with no DEF packing or game installation claimed.

![Halberdier ground-contact death, fall](/images/castle-halberdier-01/halberdier-death-ground-contact-fall.png)

![Halberdier ground-contact death, end](/images/castle-halberdier-01/halberdier-death-ground-contact-end.png)

### Royal Griffin: Meshy API bootstrap

<s>The first two Royal Griffin text-to-3D previews were rejected. One became an upright bird; the other replaced the eagle head with a lion. Neither preserves the `CRGRIF.DEF` silhouette, so neither will enter Blender animation work.</s>

The next bootstrap uses an enlarged holding frame from the original `CRGRIF.DEF` through Meshy’s Image-to-3D API. It restores the eagle head, folded wings and tawny lower body visible in the original. Its crown has been misread as tall horns, and the gold forward-limb ornament still needs local cleanup, so this is a review-stage mesh only—not a rig, DEF export, or in-game asset.

![Rejected Royal Griffin text-to-3D preview](/images/castle-halberdier-01/royal-griffin-meshy-api-text-rejected.png)

![Royal Griffin Image-to-3D bootstrap, side review](/images/castle-halberdier-01/royal-griffin-meshy-api-image-side.png)

<s>Four local crown-placement probes and one complete primitive head-replacement probe were rejected after front/side review. The source mesh does not expose the malformed horns as separable components; overlays either obscured the face, sat behind the wing, or left the artifact visible. Replacing the whole head with primitives created a visible neck seam and the wrong proportions. The next repair must reshape continuous local topology from the Image-to-3D mesh rather than stack cover geometry on top.</s>

### Cavalier: Image-to-3D static bootstrap

A holding frame from `CCAVLR.DEF` now seeds a Meshy Image-to-3D Cavalier. Front, side and oblique Blender reviews retain one mounted rider, brown horse, blue saddle cloth and a full red-and-white lance. This accepts the static bootstrap only: the horse-leg topology still needs separation and a dedicated quadruped rig before any holding, movement, or charge group can be reviewed.

![Cavalier Image-to-3D bootstrap, side review](/images/castle-halberdier-01/cavalier-meshy-api-image-side.png)

![Cavalier Image-to-3D bootstrap, oblique review](/images/castle-halberdier-01/cavalier-meshy-api-image-oblique.png)

### Champion: corrected Image-to-3D static bootstrap

<s>The first `CCHAMP.DEF` Image-to-3D candidate was rejected after side review because it added a second red-and-white spike from the horse’s forehead.</s> The corrected second candidate has one lance only and keeps the gold-helmeted rider, horse armour and blue-and-white barding intact in front, side and oblique review. It is accepted as a static bootstrap; quadruped separation and rigging are still required before animation.

![Champion Image-to-3D bootstrap, side review](/images/castle-halberdier-01/champion-meshy-api-image-side.png)

![Champion Image-to-3D bootstrap, oblique review](/images/castle-halberdier-01/champion-meshy-api-image-oblique.png)

<s>A crown-reduced Image-to-3D retry also failed: it reduced the artifact to one horn but enlarged the gold forelimbs and lost the original `CRGRIF.DEF` silhouette. Prompt-only retries are now closed; future work must use the original frames as constraints while rebuilding continuous local topology.</s>

<s>The first Cavalier quadruped-rig probe was also rejected. Heat weights assigned no vertices on the overlapping rider-and-horse mesh; deterministic nearest-bone weights covered every vertex but coupled a forehoof to tack geometry, breaking the side-view joint line during a small leg probe. A usable mounted rig needs explicit component separation before weighting.</s>

<s>The Cavalier local leg-replacement probe was also rejected: removing the old legs disrupted the belly connection, while procedural upper/lower legs and hooves broke the source mesh’s style and proportions. It cannot substitute for continuous mesh reconstruction.</s>

### Griffin: concept-guided Meshy bootstrap

<s>The raw `CGRIFF.DEF` Image-to-3D attempt was rejected because it exaggerated the ear tufts and foreclaws and lost the resting wing pose.</s> A clean side concept derived from the same frame gives Meshy an unambiguous anatomy reference. Its resulting mesh passes front, side and oblique static review with a continuous eagle head, folded wing pair, lion hindquarters and four limbs. The ear tufts remain longer than the original, so this accepts static bootstrap only; wing rigging remains future work.

![Griffin concept-guided Meshy bootstrap, side review](/images/castle-halberdier-01/griffin-meshy-concept-side.png)

![Griffin concept-guided Meshy bootstrap, oblique review](/images/castle-halberdier-01/griffin-meshy-concept-oblique.png)

### Griffin: wing-root rig probe

<s>The first six-frame wing probe was rejected because the wing root separated from the torso in oblique review.</s> The revised grouping includes the high side feathers at the wing root, preserving continuity through a small six-frame fold cadence in both side and oblique review. This accepts a restrained idle-wing path only; flight and combat actions still need dedicated choreography.

![Griffin wing idle, side review](/images/castle-halberdier-01/griffin-wing-idle-side.png)

![Griffin wing idle, oblique review](/images/castle-halberdier-01/griffin-wing-idle-oblique.png)

### Griffin: flight-specific Meshy bootstrap

<s>The first six-frame flight probe reused the folded-wing mesh. At flight amplitude its oblique review opened a gap at the wing root, so it is rejected and will not be exported.</s>

A new Meshy Image-to-3D request used a deliberately spread-wing, airborne Griffin reference instead of attempting to stretch the folded-wing asset. Its front, side and oblique Blender reviews retain two continuous wing surfaces, eagle forequarters, lion hindquarters and tucked airborne limbs. A conservative four-frame reciprocal wing cycle also remains continuous in side and oblique review. This accepts a flight-idle foundation only: it is not yet the native `CGRIFF.DEF` moving, attack, hit, defence or death set, and it has no DEF output or game installation.

![Flight-specific Griffin Meshy bootstrap, side review](/images/castle-halberdier-01/griffin-flight-meshy-side.png)

![Flight-specific Griffin Meshy bootstrap, oblique review](/images/castle-halberdier-01/griffin-flight-meshy-oblique.png)

![Flight-specific Griffin small wing cycle, oblique review](/images/castle-halberdier-01/griffin-flight-wing-cycle-oblique.png)

### Griffin: native four-frame moving review

The original `CGRIFF.DEF` moving group is airborne rather than a ground gait. Its four reference frames read as closed wings, a low sweep, closed wings, then a high sweep. The flight-specific Meshy asset now has a matching four-frame Blender review: conservative local wing weights carry the two wings through that cadence while a shared carrier supplies the small airborne lift. Side and oblique checks retain both wing roots, torso, eagle forequarters, lion hindquarters and tucked limbs at every key. This accepts the timing and pose basis for `MOVING` only; attack, hit, defence, death, move transitions, output layers, DEF packing and game installation are still outstanding.

![Griffin MOVING frame one, side review](/images/castle-halberdier-01/griffin-moving-01-side.png)

![Griffin MOVING frame four, side review](/images/castle-halberdier-01/griffin-moving-04-side.png)

![Griffin MOVING frame four, oblique review](/images/castle-halberdier-01/griffin-moving-04-oblique.png)

### Griffin: front claw attack review

<s>The first nine-frame front-attack probe used only a shared dive carrier. Although its wing roots stayed intact, its foreclaws never made an independent reach, so it does not satisfy the original attack silhouette and is rejected.</s>

The replacement uses separate left/right foreclaw regions alongside the flight-wing rig. Across the native nine-frame preparation, wing lift, forward/downward claw reach and recovery, the side and oblique contact reviews keep wing roots, chest feathers, both foreclaws, torso and airborne hind legs continuous. This accepts `ATTACK_FRONT` as a private Blender motion review only; the upward/downward strikes, hit, defence, death, transitions, DEF output and game installation remain outstanding.

![Griffin ATTACK_FRONT ready, side review](/images/castle-halberdier-01/griffin-attack-front-ready-side.png)

![Griffin ATTACK_FRONT claw reach, side review](/images/castle-halberdier-01/griffin-attack-front-impact-side.png)

![Griffin ATTACK_FRONT claw reach, oblique review](/images/castle-halberdier-01/griffin-attack-front-impact-oblique.png)

### Griffin: upward claw attack review

<s>The first upward nine-frame pass did not lift its carrier or foreclaws far enough to read separately from flight idle, so it is rejected.</s> The revised `ATTACK_UP` pass increases the upward carrier arc and local claw lift while preserving the Meshy flight mesh’s wing roots and feather surface. Side and oblique peak frames keep both wings, chest, foreclaws, lion hind legs and tail continuous. It is a private Blender review only; downward attack and the remaining groups are still unmade.

![Griffin ATTACK_UP reach, side review](/images/castle-halberdier-01/griffin-attack-up-reach-side.png)

![Griffin ATTACK_UP reach, oblique review](/images/castle-halberdier-01/griffin-attack-up-reach-oblique.png)

### Griffin: downward claw attack review

The native `CGRIFF.DEF` downward attack resolves from a wing lift into a descending pounce and lowered claw contact. The nine-frame Blender pass now follows that arc with its own downward carrier trajectory while retaining local wings and foreclaws. Side and oblique contact frames preserve wing roots, chest feather surface, foreclaws, torso, lion hind legs and tail. This accepts `ATTACK_DOWN` as a private motion review; hit, defence, death, move transitions, export layers, DEF packing and game installation remain outstanding.

![Griffin ATTACK_DOWN impact, side review](/images/castle-halberdier-01/griffin-attack-down-impact-side.png)

![Griffin ATTACK_DOWN impact, oblique review](/images/castle-halberdier-01/griffin-attack-down-impact-oblique.png)

### Griffin: hit recoil review

<s>The first seven-frame hit probe displaced the whole body too little to read beyond holding, so it is rejected.</s> The revised `HITTED` pass uses a larger rearward carrier recoil and recovery while keeping the local wings and foreclaws intact. Side and oblique peak frames retain wing roots, chest feathers, foreclaws, torso, lion hind legs and tail. Defence, death, transitions and export remain outstanding.

![Griffin HITTED recoil, side review](/images/castle-halberdier-01/griffin-hitted-recoil-side.png)

![Griffin HITTED recoil, oblique review](/images/castle-halberdier-01/griffin-hitted-recoil-oblique.png)

### Griffin: defence review

The eight-frame `DEFENCE` pass follows the native wing-guard rise, held protection and recovery. It uses restrained local wing motion and tucked foreclaws instead of the attack carrier. Side and oblique peak frames retain the wing roots, chest feather surface, foreclaws, torso, lion hind legs and tail. Death, move transitions, export layers, DEF packing and game installation remain outstanding.

![Griffin DEFENCE peak, side review](/images/castle-halberdier-01/griffin-defence-side.png)

![Griffin DEFENCE peak, oblique review](/images/castle-halberdier-01/griffin-defence-oblique.png)

### Griffin death constraint; Royal Griffin crown repair

<s>The nine-frame Griffin death probe rolled the complete flight mesh toward the ground. Its rigid wing remained upright at the terminal frame instead of forming the original compact grounded corpse, so it is rejected and will not export.</s> Death requires a local wing-fold and grounded-limb reconstruction.

Royal Griffin now has a new Meshy static bootstrap from an explicit three-point crown concept. The full-body side and oblique Blender reviews retain a small three-point gold crown band rather than horns, along with two folded wings, eagle forequarters, lion hindquarters and four limbs. Its bright front plumage still needs palette comparison against `CRGRIF.DEF`; no rig, animation, DEF output or game installation is claimed.

![Royal Griffin Meshy crown bootstrap, side review](/images/castle-halberdier-01/royal-griffin-crown-meshy-side.png)

![Royal Griffin Meshy crown bootstrap, oblique review](/images/castle-halberdier-01/royal-griffin-crown-meshy-oblique.png)

### Royal Griffin: original-palette correction

A `CRGRIF.DEF` holding comparison confirms that the bright front plumage is faithful, while the first Meshy wings were too near-black. A textured Blender wing-region correction now shifts them to silver gray without replacing the feather detail. Side and oblique review retains the crown, front plumage, wing surfaces, lion hindquarters and limbs. This is the static baseline only; rigging and all action groups remain unmade.

![Royal Griffin corrected palette, side review](/images/castle-halberdier-01/royal-griffin-palette-side.png)

![Royal Griffin corrected palette, oblique review](/images/castle-halberdier-01/royal-griffin-palette-oblique.png)

### Royal Griffin: independent idle wing review

The palette-corrected Royal Griffin now has its own eight-frame holding-wing review, based on the native `CRGRIF.DEF` holding count. It uses separate local wing-root groups rather than the standard Griffin’s weights. Side and oblique checks preserve the crown, wing roots, silver-gray texture, white front plumage, lion hindquarters and limbs throughout the restrained fold cadence. This accepts holding only; flight and all combat groups remain unmade.

![Royal Griffin idle wings, side review](/images/castle-halberdier-01/royal-griffin-wing-idle-side.png)

![Royal Griffin idle wings, oblique review](/images/castle-halberdier-01/royal-griffin-wing-idle-oblique.png)

### Royal Griffin: flight mesh and four-frame moving review

A separate Meshy airborne Royal Griffin now supplies actual spread-wing geometry for the native flying `MOVING` group. <s>The first palette pass recolored crown polygons; the next crown-safe region fixed that, but its first four-frame wing rig still admitted tail vertices, producing a pale tail band at the high-wing frame. Both are rejected.</s> The revised local wing grouping excludes the tail. Its four-frame `CRGRIF.DEF` cadence—folded, low sweep, folded, high sweep—keeps crown, wing roots, tail, torso, lion hindquarters and airborne limbs intact in side and oblique review. This covers `MOVING` only, with no DEF output or game installation.

![Royal Griffin flight palette, side review](/images/castle-halberdier-01/royal-griffin-flight-palette-side.png)

![Royal Griffin flight palette, oblique review](/images/castle-halberdier-01/royal-griffin-flight-palette-oblique.png)

![Royal Griffin MOVING high-wing frame, side review](/images/castle-halberdier-01/royal-griffin-moving-04-side.png)

![Royal Griffin MOVING high-wing frame, oblique review](/images/castle-halberdier-01/royal-griffin-moving-04-oblique.png)

### Royal Griffin: front claw attack review

The flight-specific Royal Griffin now has a separate nine-frame `ATTACK_FRONT` review. Crown-safe palette regions and tail-excluded wing groups are retained while left/right foreclaws make the forward/downward reach. Side and oblique contact checks preserve the crown, wing roots, tail, chest feathers, foreclaws, torso and airborne hind legs. Up/down attacks, hit, defence, death, transitions, DEF output and game installation remain outstanding.

![Royal Griffin ATTACK_FRONT claw reach, side review](/images/castle-halberdier-01/royal-griffin-attack-front-side.png)

![Royal Griffin ATTACK_FRONT claw reach, oblique review](/images/castle-halberdier-01/royal-griffin-attack-front-oblique.png)

### Royal Griffin: hit recoil review

Royal Griffin now has its own seven-frame `HITTED` recoil and recovery. Its peak side and oblique frames preserve the crown, wing roots, tail, chest feather surface, foreclaws, torso and airborne hind legs. This remains a private Blender review; up/down attacks, defence, death, transitions, DEF output and game installation remain unmade.

![Royal Griffin HITTED recoil, side review](/images/castle-halberdier-01/royal-griffin-hitted-side.png)

![Royal Griffin HITTED recoil, oblique review](/images/castle-halberdier-01/royal-griffin-hitted-oblique.png)

### Royal Griffin: defence review

Royal Griffin’s independent eight-frame `DEFENCE` uses a wing-guard rise, tucked foreclaws and recovery, rather than its attack carrier. Side and oblique peak frames retain crown, wing roots, tail, chest feathers, foreclaws, torso and airborne hind legs. Up/down attacks, death, transitions, DEF output and game installation remain outstanding.

![Royal Griffin DEFENCE peak, side review](/images/castle-halberdier-01/royal-griffin-defence-side.png)

![Royal Griffin DEFENCE peak, oblique review](/images/castle-halberdier-01/royal-griffin-defence-oblique.png)

### Cavalier: split Meshy horse and rider bootstrap

<s>The earlier one-piece Cavalier mesh interleaved rider, horse and tack, so automatic quadruped weighting, nearest-bone weights and procedural leg replacement all failed. It cannot be repaired by another whole-mesh leg pass.</s>

The replacement begins with two Meshy assets: an empty-saddle Cavalier horse and a separate armoured rider with the red-white lance. The horse passes front, side and oblique static review with four readable legs, bridle, tail, blue-white barding and saddle. The rider preserves the lance grip, armour, tabard and limbs, then passes Meshy’s standard humanoid rigging task. The next step is a Blender riding pose and saddle interface; there is no mounted animation, DEF output or game installation yet.

![Cavalier horse component, side review](/images/castle-halberdier-01/cavalier-horse-component-side.png)

![Cavalier horse component, oblique review](/images/castle-halberdier-01/cavalier-horse-component-oblique.png)

![Cavalier rider component, side review](/images/castle-halberdier-01/cavalier-rider-component-side.png)

![Cavalier rider component, oblique review](/images/castle-halberdier-01/cavalier-rider-component-oblique.png)

### Cavalier: mounted static assembly

<s>The first two assembly passes are rejected: Meshy’s rigged GLB included an unbound `Icosphere` proxy, then an incorrect reparenting step broke the `char1 → Armature` skin hierarchy and enlarged the rider mesh. A later alignment pass left the rider above the saddle or facing opposite the horse.</s>

The accepted assembly excludes the proxy, preserves the native humanoid skin parent, aligns the rider root to the saddle and horse forward axis, and folds the rider’s legs through its own rig. Side and oblique reviews retain the horse, four legs, bridle, blue barding, saddle, seated rider, red-white lance and coherent direction. This is the mounted static foundation only: quadruped rigging, saddle/stirrup constraints and all creature action groups are still unmade.

![Cavalier mounted static, side review](/images/castle-halberdier-01/cavalier-mounted-static-side.png)

![Cavalier mounted static, oblique review](/images/castle-halberdier-01/cavalier-mounted-static-oblique.png)

### Cavalier: mounted eight-frame moving review

The horse-only Meshy mesh now passes an eight-frame quadruped walk: four conservative lower-leg regions alternate while saddle, tack, barding and torso remain on the root. The rider is then carried by the horse body root rather than placed in leg weights, with a small matching body rise. Side and oblique key frames retain four legs, bridle, saddle, blue barding, seated rider, red-white lance, skin hierarchy and direction. This accepts `MOVING` at the original eight-frame count only; attack, hit, defence, death, transitions, exact per-frame pose calibration, DEF output and game installation remain outstanding.

![Cavalier MOVING key frame, side review](/images/castle-halberdier-01/cavalier-moving-side.png)

![Cavalier MOVING key frame, oblique review](/images/castle-halberdier-01/cavalier-moving-oblique.png)

### Cavalier: independent lance and front-thrust review

<s>The first split rider still embedded its lance in the character mesh. An axis probe showed that the embedded lance was not weighted to `RightHand`, so it stayed still when the arm moved and could not support a charge. The corrected assembly uses an unarmed Meshy rider with Meshy’s humanoid armature and a separate Meshy lance. Blender samples the animated right-hand position into the independent weapon on every frame. The ten-frame `ATTACK_FRONT` review now raises, levels, thrusts and recovers the lance toward the horse’s forward direction without leaving a static duplicate behind. This accepts the weapon/rider motion foundation only: horse attack motion, native pose calibration, other groups, DEF output and game installation remain outstanding.</s>

![Cavalier ATTACK_FRONT thrust, side review](/images/castle-halberdier-01/cavalier-attack-front-side.png)

![Cavalier ATTACK_FRONT thrust, oblique review](/images/castle-halberdier-01/cavalier-attack-front-oblique.png)

### Champion: component-based mounted static bootstrap

<s>The original one-piece Champion is useful as a visual reference, but its horse, rider, tack and weapon are one mixed mesh and cannot be used as a dependable animation base. A new component workflow supplies a dark Champion horse with four visible legs, blue-white striped barding, face armour and an empty saddle; a separate unarmed, gold-crested Champion rider then passes Meshy’s standard humanoid rig. The independent lance is reused through the proven weapon path. Side and oblique Blender review retain the complete mount, seated rider, crest and lance. This is a private static foundation only; quadruped gait, attacks, reactions, death, transitions, DEF output and game installation are still unmade.</s>

![Champion mounted static, side review](/images/castle-halberdier-01/champion-mounted-static-side.png)

![Champion mounted static, oblique review](/images/castle-halberdier-01/champion-mounted-static-oblique.png)


### Review correction: mounted alignment is not accepted yet

The two acceptance claims above were premature: Cavalier 12 faces away from the horse, Champion 05 sits sideways, and the lance origin was mistaken for its grip. Those claims are withdrawn; the old images remain as failure records. Cavalier 13 and Champion 06 align the riders with their horses and anchor the leather grip instead. The images below are work in progress. Champion legs still intersect the barding; stirrup contact, wrist orientation and the complete attack cadence remain unresolved. These are not finished animations or game integrations.

![Cavalier 13: revised direction and grip, under review](/images/castle-halberdier-01/cavalier-alignment-review13.png)

![Champion 06: revised direction, leg intersections unresolved](/images/castle-halberdier-01/champion-alignment-review06.png)


### Champion: seated pose and leg weights (work in progress)

The rider now faces forward with both legs outside the horse. A proportion adjustment preserves the pelvis position; a two-segment leg solve positions the ankles and turns the boots forward, bringing the soles closer to the stirrups. Targets were located visually, so exact tread contact remains unverified.

<s>The initial four-leg weights are ready for a complete walk.</s> Inspection found tail vertices in a hind-leg group; narrowing the region then missed parts of a hoof. Nearest-hoof-center assignment and blended weights reduce vertices lacking full leg weights in the specified lower-hoof check region from 43 to zero. The tail check region shows no appreciable leg-driven deformation across eight frames. This is still a small-angle deformation probe; full stepping, hoof contact, original timing and game integration remain unfinished.

![Champion seated pose and boot direction; exact stirrup contact under review](/images/castle-halberdier-01/champion-seat-contact09.png)

![Champion leg-weight probe, not a complete walk animation](/images/castle-halberdier-01/champion-leg-weights12.png)


### Champion: segmented legs and ground checks (not accepted yet)

The Blender rig over the Meshy horse now has segmented legs, a pastern segment and independent hoof orientation. Body bob and pitch carry the rider, saddle and lance; hoof targets compensate for those motions. Sampled support-hoof minimum heights stay close to the ground across eight frames. This verifies only those sample heights, not complete contact, anatomical shape or fidelity to the original animation.

Rejected experiments include seam welding with surface smoothing, which altered shading elsewhere, and texture-color-based root weights, which introduced local stretching even after weight smoothing. Those candidates remain failure records and do not replace the baseline. The additional segment reduces some distortion, but the lifted-leg silhouette below remains unnatural. Movement is still unaccepted, with no DEF export or game integration.

![Champion support pose in segmented-rig review](/images/castle-halberdier-01/champion-stance23-side.png)

![Champion lift candidate; leg shape still needs correction](/images/castle-halberdier-01/champion-stride23-oblique.png)
