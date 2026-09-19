---
title: "[AI] Castle roster bootstrap"
date: 2026-09-16T17:10:00+08:00
lastmod: 2026-09-19T15:28:11+00:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
homeSummary: "A revised Crusader is installed as local test 0.7.0. Later Blender drafts adjust blade length, plate materials and the helmet crown, with new high-resolution stills. Those edits remain unexported; game and visual acceptance are open."
tags: ["vcmi", "ai", "graphics", "blender", "meshy", "castle"]
---

<s>The Castle roster now has independently reviewed meshes for all fourteen units: Pikeman, Halberdier, Archer, Marksman, Griffin, Royal Griffin, Swordsman, Crusader, Monk, Zealot, Cavalier, Champion, Angel and Archangel. They span long held equipment, a two-handed light crossbow, a winged quadruped, shield-and-sword combat, and an unarmed spellcaster. Each asset needs its own mesh and its own animation constraints.</s>

All fourteen Castle units have Meshy bootstrap attempts, with modeling, motion repair and integration still in progress. <s>The Zealot has returned to modeling because its old white-robed design did not match the original.</s> The corrected blue-robed Zealot is now installed as a private test; <s>the brown-robed Monk remains in offline animation work.</s> The Monk is also installed as a private 0.6.0 candidate. The table distinguishes installed drafts from offline trials and rejected candidates.

![Three-quarter concept for the Castle Halberdier](/images/castle-halberdier-01/concept-34.png)

The concept fixes the features that need to survive generation: blue-and-gold tabard, brown boots, uncovered face under a steel cap, and a halberd held vertically at the left side. It is a reference for construction rather than an in-game image.

## Crusader design correction

The earlier Crusader was rejected because its helmet, shield, cloth and stance departed from the original. Meshy supplied the replacement body and rig, plus separate sword, shield and gauntlet meshes. Astra authored Blender tools for assembly, mesh repairs and animation. The installed test and later offline edits are at different stages.

| Version | Current state |
| --- | --- |
| Local test 0.7.0 | The new body and equipment replace the old Crusader assets, with 1×/2× bodies, shadows and selection outlines. Format validation reports zero errors and warnings. The attempted game check encountered a locked desktop and stopped at display presentation; it produced no battle verification. |
| Later Blender draft | The blade is 28% longer, plate and cloth use separate material treatment, and the helmet crown and plume have revised geometry. Old crown fragments and floating debris were removed. These changes are propagated across action files but have not been exported or installed. |

![A 1000-pixel Blender still of the later draft; not installed, concept art or an in-game screenshot](/images/castle-crusader-1124/model.png)

The source animation has 15 groups and 80 frame entries, including two duplicate turn groups. The test package uses 13 active groups and 76 entries, including movement start and end. Hit and death drafts are present. These counts describe file coverage; appearance, wrist joins, equipment contact and transitions still need review.

Extending the blade introduced about 1.25 cm of ground penetration in one downward-attack frame. The wrist and adjacent keys were adjusted. The longer plume also crossed the ground in the final death pose, so its tips now deform against the floor. Reopening the scene confirms that the plume stays above ground at all six death keys. This check covers the plume alone; it does not validate the whole corpse pose.

![Final death pose rendered as a Blender still; feather tips are adjusted, while body and equipment support remain under review](/images/castle-crusader-1124/death.png)

The material trials also exposed a mistake. The original body used zero metallic value; emission was already off. Deriving metallic value directly from texture brightness produced the mottled result below, which was rejected. The current draft identifies the main plate regions from mesh position, with cloth boundaries still to review.

![Rejected mottled-metal trial, an actual Blender render](/images/castle-crusader-1124/steel-rejected.png)

An early crown patch covered the old geometry but left fragments visible around its edge. The upper remnants were then trimmed, and a dome was built from the outer cut boundary. The failed close-up below is retained. The plume still looks too much like ribbons and is not visually accepted.

![Rejected crown patch with old mesh fragments still visible around it](/images/castle-crusader-1124/crown-rejected.png)

These later edits made no new Meshy requests and changed no VCMI source. The full fourteen-unit Castle roster remains unfinished.

<details>
<summary>Earlier Crusader production record: statuses below predate local test 0.7.0</summary>

### Crusader design correction

The user found that the current Crusader model did not resemble the original. Comparing the native frames confirms several major differences: the enclosed helm and blue crest became an open-face helmet, the round shield became a pointed shield, and bright silver armour with short white-and-blue cloth became a long blue heraldic robe. Repairs to sword deformation, collision and export formatting did not address those design errors.

![Rejected Crusader design, actual Blender render](/images/castle-crusader-969/old-model.png)

The revised concept restores those original features. Its first version introduced an oversized plume and a shoulder spike; both were revised. The [rejected concept](/images/castle-crusader-969/plume-rejected.png) remains in the record. The sword now lies outside the leg silhouette for a clearer modeling input.

![Revised Crusader concept for Meshy; not a finished Blender model or game capture](/images/castle-crusader-969/concept.png)

The concept was generated with built-in imagegen and submitted through the Meshy Image to 3D API using Meshy 7.1, a 20k quad target and 4K textures, with image enhancement disabled. The task succeeded for 30 credits, producing 29,508 vertices, 37,611 faces and a 4096-pixel base-colour texture. Eight views have been rendered and inspected; rigging, motion and replacement in the game remain unfinished. The earlier installation history remains below; **it does not establish acceptance of the old design**.


![Actual 1200-pixel Blender render of the new Meshy model, unrigged and not installed](/images/castle-crusader-969/model.png)

The [eight-view review under the original lighting](/images/castle-crusader-969/views.png) is retained. The portrait adds studio fill lights without changing geometry or textures. The enclosed helm, round shield and short cloth survive generation. Metallic finish, plume thickness and sword-hand shape remain rough, and the right shin has a generated colour blemish. This is a replacement bootstrap awaiting further repair and acceptance.


### Binding the Crusader body separately from equipment

The armed model returned HTTP 422, `Pose estimation failed`, before the API created a rigging task. The [Meshy rigging documentation](https://docs.meshy.ai/en/api/rigging) lists this failure mode. Shield occlusion is a possible contributor; the response alone does not identify the cause.

After coincident vertices are welded for inspection, the body, sword and shield form one main connected region. Removing small components would not separate the equipment cleanly. A new empty-handed A-pose concept retains the same armour design while leaving the arms clearly separated from the torso. The equipment will receive separate bindings.

![Empty-handed A-pose concept used as modeling input, not a mesh render](/images/castle-crusader-977/concept.png)

The new Meshy 7.1 body consumed 30 credits, followed by a successful 5-credit rigging task. This actual 1200-pixel Blender render shows the rigged body. The armed bootstrap remains as a reference; <s>the new body has no attached weapons and is not installed.</s> This records the earlier stage; sword and shield are assembled below, while game replacement remains unfinished.

![Actual Blender render of the new body with its Meshy rig](/images/castle-crusader-977/body.png)

Astra authored three static arm-raising probes using actual joint positions, alongside the rest pose. These four poses are deformation tests, not completed native animation groups. Joint-length changes stay below 0.001 mm, but the original binding in the both-arms-raised pose stretches 42 mesh edges longer than 1 mm by more than three times their rest length. The largest ratio is about 4.28. These edges lie around the shoulders and armpits, where soft skin weights still pull the armour.

![Right-arm probe rendered in Blender; shoulder and armpit deformation remains unaccepted](/images/castle-crusader-977/raised.png)

The [four-pose sheet](/images/castle-crusader-977/probes.png) records the test. Reopening the saved scene reproduces the right-arm render in every RGBA channel. Fingers, metallic finish, armour binding, separate equipment, complete actions and replacement in the game remain unfinished.


### Crusader back-weight repair

Vertices near the back centre included left- and right-arm influences. Raising both arms pulled the back armour and cloth outward. The repair reduces those influences inside the torso, assigns the removed weight to the spine, and smooths the transition along mesh adjacency. Coincident UV-seam vertices share the weight calculation; geometry and textures remain unchanged.

![Rear view of the same pose: original binding left, revised binding right](/images/castle-crusader-987/comparison.png)

For 108 selected central-back vertices, the largest displacement from rest falls from about 83.6 mm to 0.080 mm. This measurement covers only that back region. In the both-arms-raised probe, edges exceeding three times their rest length fall from 42 to 35. Remaining stretch is concentrated around the armpits; full armour articulation is unfinished.

![Current rear pose, actual 1200-pixel Blender render](/images/castle-crusader-987/back.png)

![Diagnostic red indicates larger weight changes](/images/castle-crusader-987/mask.png)

Several trials were rejected. Removing weights and renormalizing worsened armpit stretching; the [failed render](/images/castle-crusader-987/rejected.png) is retained. Spatial-neighbour smoothing mixed nearby surfaces and also made the result worse. Additional iterations of surface-adjacency smoothing did not improve the result, so the shorter pass was kept.

Reopening reproduces the raised-arm render in every RGBA channel. Rest-surface changes stay below 0.001 mm. Moving shoulder plates still need separate treatment from the flexible armpit region. Equipment binding, fingers, materials, complete actions and game replacement remain unfinished.


### Separate round shield and shoulder trials

A separate shield was generated through the Meshy Text to 3D API. Preview and texture stages succeeded, costing 30 credits together. The Blender import contains 12,025 vertices and 19,638 faces, inspected at a provisional diameter of 55 cm. Its circular outline, central boss and concentric metal rings fit the original equipment type; rim colour and scale still need comparison on the character.

![Separate shield front, actual 1000-pixel Blender render; not bound](/images/castle-crusader-996/shield-front.png)

The [rear render](/images/castle-crusader-996/shield-back.png) shows one broad band rather than the requested complete pair of straps and grip. Finger contact and forearm attachment still need work before installation.

Blender geometry adds a raised grip, metal standoffs and a retaining strap while preserving the generated shield surface and textures. The shield is provisionally reduced to 46 cm and positioned in front of the left hand. The arm reaches its target before hand orientation is adjusted. This is an equipment fit pose, not the original idle action.

![Character and shield fit, actual 1100-pixel Blender render; sword and grip remain unfinished](/images/castle-crusader-1004/fit.png)

![Shield rear with added grip and retaining strap, actual Blender render](/images/castle-crusader-1004/hardware.png)

The automatic rig has no finger bones. A mesh-bending trial closes the fingers in the [second grip close-up](/images/castle-crusader-1004/grip-trial.png), but 89 sampled hand vertices still enter the grip cylinder, with a maximum depth of about 11.8 mm. The thumb remains open. This trial is rejected. The check samples vertices within the grip length and does not establish complete collision coverage. <s>Individual finger joints and the thumb need separate treatment.</s> A closer palm inspection led to a separate-hand bootstrap, described next.

Shoulder experiments duplicated part of the original mesh into rigid plates over a dark flexible backing. Three follow angles were tried; the final trial also moved the plates outward and upward. Raised arms still exposed floating edges and discontinuous joins. All three trials were rejected. The current body remains the back-weight repair described above; the image below records a failed experiment.

![Rejected separate-shoulder trial: floating edges with both arms raised, actual Blender render](/images/castle-crusader-996/shoulder-rejected.png)

The replacement Crusader is not installed. Shoulder boundaries and joins, <s>a separate sword, equipment grips</s> and the full action set remain unfinished. Sword and grip assembly now appears below; seams and motion still need work.


### Separate gauntlet and sword

Isolating the hand exposed two further mistakes. The [original palm](/images/castle-crusader-1021/old-palm.png) contains joined sheets of generated geometry, and the previous fit pointed the back of the hand toward the shield. Flipping the hand bone then twisted the cuff. Work on the bulk finger bend was set aside for a separate gripping gauntlet.

imagegen used the existing silver plates, brass rivets and short cuff to produce a [new reference](/images/castle-crusader-1021/hand-concept.png). The [first concept](/images/castle-crusader-1021/hand-concept-rejected.png) incorrectly included a hollow tube; that was removed before submission to Meshy Image to 3D. The Meshy 7.1 task used a 12k quad target and 4K textures, cost 30 credits, and returned 16,581 vertices and 22,279 faces.

![Actual Blender render of the new gauntlet, inspected at a provisional height of 17 cm; not concept art](/images/castle-crusader-1021/hand-model.png)

The new mesh has curled fingers and a folded thumb, but Meshy capped the wrist opening. <s>The interior grip space still needs inspection.</s> An oblique passage and static grip clearance are inspected in the next section. The [assembly close-up](/images/castle-crusader-1021/hand-fit.png) aligns the cuff with the forearm; <s>it also shows that the fist and handle remain misaligned.</s> This earlier assembly image is retained; the next section revises the alignment. Wrist boundaries and the retaining strap are not accepted, and no game resources were replaced.

A separate Meshy Text to 3D sword cost 30 credits across geometry and texture stages. Its [original output](/images/castle-crusader-1021/sword-rejected.png) had a blade-shaped handle, pointed end and an unwanted blade bump. Blender retains the generated crossguard, rebuilds a clean blade surface from its outline, applies a simple steel material, and adds a leather grip and round pommel. The blade reaches about 78 cm from the guard; overall length is about 101 cm.

![Repaired sword draft, actual Blender render; character grip is unfinished](/images/castle-crusader-1021/sword.png)

These two bootstraps cost 60 new Meshy credits. Editable gauntlet, sword and shield drafts now exist. Equipment contact, wrist seams, shoulder articulation and the full action set remain unfinished.


### Shield-grip alignment

[Three gauntlet sections](/images/castle-crusader-1030/sections.png) reveal an oblique interior space. A horizontal-axis search found no suitable placement. Searching more directions found clearance, but maximizing clearance alone placed the grip outside the intended grasp. The [misplaced, over-expanded trial](/images/castle-crusader-1030/rejected.png) was rejected.

The sections then guided the handle between the thumb and curled fingers. Its 24 mm diameter is retained while excess generated geometry at the passage ends is removed. The shield and body are hidden below to expose the actual hand/grip relationship.

![Static gauntlet and grip alignment, actual Blender render with shield and body hidden for inspection](/images/castle-crusader-1030/grip.png)

In this static pose, triangle-surface distances sampled every 0.5 mm along the grip axis yield a conservative clearance lower bound of about 0.14 mm after subtracting sampling uncertainty and the grip radius. This covers only hand/grip surface separation. Mesh connectivity defects remain; the result does not establish complete equipment or animation clearance, or acceptance of the hand pose.

The shield and its two standoffs now follow the grip axis. A retaining-strap trial moves toward the wrist. The [current side close-up](/images/castle-crusader-1030/mounted.png) retains the unresolved cuff boundary and strap-fit issues. No new Meshy tasks or game-resource replacements were made.


### Crusader sword and shield assembly

The separate gauntlet mesh is mirrored for the right hand, with its normals corrected, and the sword is now attached to the character. The hilt is narrowed to fit the hand passage. The blade material is lightened for readability under the current lighting. No new Meshy tasks were submitted.

![Crusader sword and shield assembly draft, actual Blender still; the old game model has not been replaced](/images/castle-crusader-1033/front.png)

![Right-hand sword close-up, actual Blender render; the cuff seam remains unfinished](/images/castle-crusader-1033/right-grip.png)

The first assembly omitted a scene update after importing the sword, leaving its hilt, wrap and pommel misplaced. The corrected assembly was rendered again in full-body and close-up views. Static right-hand/hilt surface clearance passes, but that check does not cover the guard, body or collisions during motion. A cuff seam remains, and <s>the sword obscures part of the helmet from the front; its angle still needs to follow the original motion.</s> The pose below revises the direction; game-view calibration remains unfinished. Shoulder armor, straps and the full animation set remain unfinished. The game still uses the old test assets.

Comparison with the original holding frames led to a lower right hand and a blade directed forward. This full-body still shows the revised pose. Sword length, angle and stance still need calibration in the game view.

![Crusader with revised sword direction, actual Blender still of an offline draft](/images/castle-crusader-1040/front.png)

A flexible liner now blends between forearm and hand bones. The [first trial](/images/castle-crusader-1040/liner-rejected.png) was too wide and protruded through the metal; the second still had a smaller protrusion. Both were rejected. Narrowing the liner and aligning its end sections removed those two obvious protrusions in the [current close-up](/images/castle-crusader-1040/wrist.png). Cuff boundaries, the left retaining strap and large movements remain unaccepted.

![Eight-frame holding draft from a Blender 3D action, shown at eight frames per second for offline review](/images/castle-crusader-1040/holding.webp)

The first holding draft adds small movements to both arms and their equipment. After reopening the scene, all 80,490 inspected mesh vertices match between frame 1 and the closing key at frame 9. This proves positional loop closure, not visual or animation acceptance. The native frame table also contains movement start and stop: the full scope is **15 groups and 80 frame entries**. Earlier internal notes counted 13 groups and 76 frames, omitting those two groups. <s>This is the new body's only action draft; other actions and game replacement remain unfinished.</s> Walk and movement-start drafts follow below; the complete action set and game replacement remain unfinished.

### Crusader movement start and walk

In the original walk, the sword arm swings forward and back while the blade moves from raised, through level, to slightly downward. The new eight-frame draft adds alternating steps, arm swing and opposing pelvis/chest turns. The first trial moved the limbs but kept the torso too stiff; shoulder rotation was added afterward. This preview comes from a Blender 3D action at ten frames per second and remains offline.

![Eight-frame Crusader walk draft rendered from a Blender 3D action](/images/castle-crusader-1046/moving.webp)

![Sword arm forward, a 1200-pixel Blender still](/images/castle-crusader-1046/walk01.png)

![Sword arm back, a 1200-pixel Blender still](/images/castle-crusader-1046/walk05.png)

A [two-frame movement-start draft](/images/castle-crusader-1046/start.png) connects holding to the first step. Direct pose blending put the intermediate sole about 7.7 mm below the floor; a pelvis lift compensates for that penetration. Reopening all three scenes gives whole-mesh endpoint differences below 0.004 mm for holding→start and the start boundary→walk. Walk frame 1 and closing key 9 match. These checks cover boundary positions only; in-game speed, foot sliding and intermediate motion remain unverified.

The [backswing wrist close-up](/images/castle-crusader-1046/wrist05.png) still shows an unfinished cuff boundary. The blade is also too dark at some angles. Shoulder armor, cloth, retaining straps and weapon collisions remain unaccepted. <s>The new body now has holding, walk and movement-start drafts covering 18 native frame entries.</s> Movement-end and front-attack drafts follow below; none is accepted as finished. Full scope remains 15 groups and 80 entries; the old game model has not been replaced.

### Crusader movement end and front attack

The seven-frame front-attack draft follows the original raise, wind-up, strike and recovery, with a larger forward step and weapon reach. The first strike showed an [almost edge-on blade](/images/castle-crusader-1054/edge-on-trial.png). A constant 110-degree roll around the hilt axis makes it readable. The same attachment is applied to holding, walking, movement start, movement end and attack; the weapon does not turn toward the camera each frame.

![Seven-frame front-attack draft rendered from a Blender 3D action; looped for inspection, not installed in the game](/images/castle-crusader-1054/attack.webp)

![Attack wind-up, a 1200-pixel Blender still](/images/castle-crusader-1054/windup.png)

![Forward strike, a 1200-pixel Blender still](/images/castle-crusader-1054/impact.png)

A [two-frame movement-end draft](/images/castle-crusader-1054/stop.png) now exists, but its entry remains unresolved. Reading the current VCMI source shows a nominal five animation frames per ground hex, from the ratio of movement and frame speeds. An eight-frame gait therefore reaches different phases depending on route length, while movement end resets to its first frame. Entering from the downward-sword phase still produces a visible jump upward. Matching the stop's final boundary to holding does not establish smooth entry from every gait phase. Route-dependent behavior still needs in-game inspection; the engine source is unchanged.

<s>The new body now has five offline action drafts covering 27 native frame entries,</s> The following section adds upward/downward attacks and defence. Full scope remains 15 groups and 80 entries. Attack fidelity, wrist and shoulder deformation, and weapon collisions remain unaccepted. The stop draft also fails the phase-entry requirement above. The old game model has not been replaced.

### Crusader directional attacks and defence

Seven-frame upward and downward attack drafts now accompany the front attack. The upward action turns the body, lowers the hand and raises the blade more steeply. The downward action bends the knees and torso before striking forward and down. The three directions share their opening and holding poses, with different body headings, arm paths and weight shifts between them.

![Seven-frame upward attack draft from a Blender 3D action, previewed at ten frames per second](/images/castle-crusader-1064/up.webp)

![Upward attack, a 1200-pixel Blender still](/images/castle-crusader-1064/up.png)

![Seven-frame downward attack draft from a Blender 3D action, previewed at ten frames per second](/images/castle-crusader-1064/down.webp)

![Downward attack, a 1200-pixel Blender still](/images/castle-crusader-1064/down.png)

The [first upward trial](/images/castle-crusader-1064/up-rejected.png) overextended the hand and reached the image edge; both the pose and preview bounds were revised. The second downward trial placed the hand about 23 mm beyond the actual arm reach, so the solver check stopped it before rendering. The revised targets are reachable. All fourteen frames now have image margins, and the downward blade stays about 13 cm above the floor at its lowest point. Those checks cover geometry and framing, not complete motion or collision acceptance.

The eleven-frame defence raises the shield, shifts the body back slightly and lowers the sword, then recovers. An [overextended shield-arm trial](/images/castle-crusader-1064/defence-rejected.png) was rejected and the shield brought closer. Re-solving the legs initially shifted the endpoint pose by about 4 mm. Preserving the holding pose at both ends reduces the freshly reopened mesh difference to about 0.002 mm.

![Eleven-frame defence draft from a Blender 3D action, previewed at ten frames per second](/images/castle-crusader-1064/defence.webp)

![Defence with the shield closer to the body, a 1200-pixel Blender still](/images/castle-crusader-1064/defence.png)

<s>The new body now has eight offline drafts covering 52 native frame entries, against a full scope of 15 groups and 80 entries. Mouse-over, hit reaction, death and turns remain. Stop-entry jumps, shoulder and wrist joins, cloth and weapon collisions still need work. The old game model has not been replaced.</s> This records the directional-attack and defence stage; the next section gives the current state.

### Crusader shape, wrist and turn drafts

The latest shape trial restores a warm gold shield rim, brightens the blade, widens the stance and flattens the shoulder caps. Stretching the plume also bent the rear helmet rim; the [rejected render](/images/castle-crusader-1095/plume-rejected.png) is retained. That small region was subsequently replaced with separate geometry bound to the head. Feather detail, the crown join and a few residual mesh fragments still need work.

![Current shape trial, a 1000-pixel Blender still, not concept art or an in-game screenshot](/images/castle-crusader-1095/model.png)

A defence close-up exposed another problem: the sword gauntlet and forearm axes approached a right angle, exposing the capped wrist surface. Rotating only the hand made the blade horizontal; moving only the elbow produced an awkward pose. The revised trial moves the wrist and elbow together while preserving the downward blade direction. A separate mounting trial adds overlap between gauntlet and forearm. The cap boundary and liner remain unfinished, and neither is installed as a finished asset.

![Wrist close-up from the earlier defence draft, rendered in Blender](/images/castle-crusader-1095/wrist-before.png)

![Revised arm and equipment placement; the cap boundary still needs repair](/images/castle-crusader-1095/wrist-draft.png)

The eight-frame mouse-over draft follows the original small lift-and-return sword gesture. Two two-frame turn actions also have drafts; two additional native groups are exact file duplicates. The preview below mirrors the second half to reproduce VCMI's facing switch. Moving the sword toward the image centre reduces its sideways jump, but feet, lighting and the mirror seam still require review.

![Eight-frame mouse-over draft rendered from a Blender 3D action](/images/castle-crusader-1095/mouseon.webp)

![Turn draft with the second half mirrored to follow engine playback order; not yet checked in-game](/images/castle-crusader-1095/turn.webp)

<s>The documented drafts now cover 13 groups and 68 native frame entries, including the duplicate turn entries. A separate six-frame hit trial remains unreviewed, and death is still missing. Appearance revisions have not been unified across the actions. The full scope remains 15 groups and 80 entries, and the game still uses the rejected earlier Crusader. Meshy supplied the body, equipment bootstraps and base rig; Astra authored the Blender tools for these local mesh repairs, actions, renders and checks. This batch made no new Meshy requests.</s>



Previous roster-table record:

| Crusader | <s>Meshy mesh and rig; 11-frame defence candidate corrects shield folding, hand penetration and duplicate grip; 8-frame holding/walk and 6-frame recoil drafts added; recoil hand/shield contact remains unresolved; no game installation</s> <s>Thirteen groups and 76 draft frames; hand/shield crossings and corpse support revised; battle camera and turns under adjustment; no game installation</s> Crusader 1×/2× test package installed and mod loading verified; battle playback and creature panel still unverified  **User rejected the old design; installation does not imply art acceptance.** <s>The new body has sword/shield assembly, wrist liners and eight offline drafts covering 52 frame entries, including all three attack directions and defence, with unresolved stop-entry jumps. Full scope: 15 groups / 80 frame entries; replacement is not installed.</s> New-body drafts cover 13 groups / 68 entries; hit review and death remain. Appearance revisions are not unified; replacement is not installed. |

Previous homepage summary:

<s>Crusader shape and wrist repairs, plus mouse-over and turn drafts, with Blender stills and rejected trials. Appearance, remaining actions and game replacement are unfinished.</s>

</details>

## All fourteen meshes

![Fourteen independently reviewed Castle mesh bootstraps, ordered by level and upgrade](/images/castle-halberdier-01/roster-bootstrap-01.png)

All fourteen models were generated from separate reviewed concepts and then checked from eight Blender angles. Accepted Meshy mesh tasks consumed 420 credits; the earlier rejected four-view Halberdier request consumed another 30. The Halberdier and Pikeman are now past the first local rig stage: both have holding and walking review sequences at their original 450×400 canvas. The Archer holds its crossbow in the static and holding review, but its first raised-shooting test exposed separated sleeve topology and was rejected. <s>The remaining units have accepted mesh reviews and move on to creature-specific local rigs.</s> That was the initial bootstrap review; the table below records later problems and current action status.

| Unit | reviewed state |
| --- | --- |
| Halberdier | 1×/2× test package installed: 11 groups /63 frames with geometry shadows; native battle read 38 body frames in eight groups. Grip, shoulder cloth, death and transitions remain under review |
| Pikeman | mesh, local rig, 7-frame holding and 6-frame walk; separate body/pike two-hand constraint and 10-frame front-lunge probe pass |
| Archer |New Meshy body, hands, crossbow and dagger; 17 offline groups cover 94 frame entries, including four reused turn entries. Six death frames, appearance repairs, layered export and installation remain unfinished |
| Griffin | Flight-specific mesh has offline flight, three melee directions, hit and defence trials; death13 rejected, full layered export and integration unfinished |
| Swordsman | Thirteen groups and 76 frames installed at 1×/2×; a test battle read 45 distinct 2× body frames across nine groups; offline holding crop is centred, with native visual and transition review pending |
| Monk | Installed local 0.6.0 candidate: fifteen groups, 109 frames, 1×/2× bodies, shadows, outlines and spell projectiles. Native logs read 109 body images across 15 groups; appearance and transitions remain under review |
| Cavalier | Separate rider, horse and lance have a melee draft; grip, full horse attack and original cadence unresolved, not installed |
| Angel | Meshy humanoid rig, four local wing bones; 8-frame holding and 7-frame flight review accepted; <s>first sword rebind leaves a second vertical rest weapon and is rejected</s>; separate Meshy sword passes static review, but the matching unarmed-body candidate has perforated wings and is rejected |
| Marksman | Installed 1×/2× test package has 16 active groups /97 frames; combined native logs read 87 body images in 15 groups, with the prone death revision installed. Defence coverage, fingers and action transitions unfinished |
| Royal Griffin | New flight-specific Meshy mesh has flight, front pounce, hit and defence trials; directional attacks, death, full layers and integration unfinished |
| Crusader | New-body local test 0.7.0 installed: 13 active groups /76 entries. Later blade, material and crown edits remain in Blender, unexported. Game and visual acceptance are unfinished. |
| Zealot | Mantle revision 638 installed: 18 groups, 150 slots, 1×/2×. New native logs read 113 body images across 14 groups and three projectile directions. Defence, three special groups and visual acceptance remain unfinished |
| Champion | Mounted gait and skin-weight repair remain experimental; version26 rejected, with local joint deformation and original gait still unresolved in version25; not installed |
| Archangel | Separate Meshy sword with a local-wing humanoid rig; holding, 7-frame flight, three 6-frame sword attacks, 10-frame defence, 6-frame hit, and move transitions accepted in review |

<details>
<summary>Roster overview before this update (historical)</summary>

| Unit | Previous record |
| --- | --- |
| Monk | <s>Fourteen body-action drafts plus an eleven-frame death trial rejected for robe deformation. All fifteen groups have been attempted; death repair, clothing, effects and integration remain unfinished</s> |
| Monk | <s>Fourteen body drafts preserved; corrected skirt collision lengths and eleven new death renders. Pose, clothing and boot connections still need repair; uninstalled</s> |
| Griffin | <s>mesh and 8-frame holding accepted; 4-frame gait rejected pending leg/tail reweighting</s> |
| Cavalier | <s>mounted probe passes crop and side-motion review for holding, walk, front lance, move start/end; full 87 frames next</s> |
| Marksman | <s>Holding, walking, movement start/end and three shooting directions: seven groups, 44 offline candidate frames; grip and finger constraints unaccepted, other actions and game integration pending Nine groups, 60 offline candidate frames, adding six hit and ten defence frames; pose fidelity, grip and integration unfinished Eleven groups, 75 offline body draft frames, adding hover and death; death timing/pose, grip, melee/turns and game integration unfinished</s> |
| Royal Griffin | <s>four local wing bones and 8-frame holding wing review accepted; ground gait needs rebuild — native moving is airborne flight, not a ground gait; candidate 02 passed only initial static review, but its whole-wing flight exposed black chest-feather defects and is rejected; candidate 03 fixed the chest but collapsed into a near-planar wing spread in side review and is rejected; candidate 04 generated from a strict three-quarter-volume concept and passed volume review, but its chest contains mesh holes that neither thin geometry nor UV-only repair can correct; it is rejected; Royal Griffin now moves to a component-model reconstruction</s> |
| Champion | <s>mounted probe passes crop and side-motion review for holding, walk, front lance, move start/end; full 87 frames next</s> |

</details>

## Review gallery

<s>These are Blender review renders from the accepted local states. They show the actual material under review, rather than concepts or a claimed game result.</s> The gallery retains drafts, rejected candidates and historical review results, with their scope stated in the surrounding text and captions. Unless explicitly identified otherwise, these are offline Blender renders and do not establish native-game acceptance.

### Halberdier skinning revision

The earlier local rig split the Meshy surface into fragments and attached each rigidly to a nearby bone. That supported weapon-path studies, but continuous joint deformation needed a skin. The existing model has now gone through Meshy's humanoid rigging API.

The first request returned HTTP 400 because the source had 741,522 faces, above the rigging limit. A remesh request targeted 50,000 quads and returned a GLB with 98,106 triangles. Rigging then succeeded; each task cost 5 credits. The source design was reused. The imported Icosphere bone-display helper was explicitly excluded before normalizing the mesh and armature together.

![Halberdier with the new Meshy humanoid skin, rendered in Blender](/images/castle-halberdier-01/halberdier-meshy-rig72.png)

Knee, elbow and shoulder probes exercise individual joints. None triggers the current large-edge stretch threshold, which does not establish weapon rigidity, cloth quality or grip contact. Weapon weights and the grip need separate checks before authoring native-length clips.

![Single elbow probe, not a finished attack](/images/castle-halberdier-01/halberdier-elbow73.png)

![Single knee probe, not a finished walk](/images/castle-halberdier-01/halberdier-knee73.png)

[The remesh tool and reproduction instructions](https://github.com/yzh119/h3-art-pipeline/commit/2a331f9) are public. Three tests cover recovery without a new submission, duplicate-task prevention and rejection of a different source task. Models and complete mods remain local.

The full six-frame front attack exposed problems that the small joint probes had missed. The halberd head carried upper-arm weights while its butt carried pelvis weights. The complete weapon and primary grip now share a rigid hand control. The mask below shows the weapon in yellow and primary grip in red.

![Rigid weapon and primary-grip selection, a Blender diagnostic](/images/castle-halberdier-01/halberdier-weapon75-mask.png)

The first two-hand attack pulled the coat upward with the arm. Attenuating distant arm weights reduced the large displaced cloth panels, but the support hand, cuff and clothing boundary still formed stretched strips. Extending the mask using skin colour also selected some gold trim; tightening it left parts of the hand behind. None of these candidates passed review.

![First full-range attack probe, rejected because the arm pulls up the coat](/images/castle-halberdier-01/halberdier-attack76-failure.png)

![Later rejected candidate: less displaced cloth, but visible strips remain beside the support hand](/images/castle-halberdier-01/halberdier-attack99-failure.png)

![Impact pose from the same rejected candidate; a usable weapon path does not establish a finished attack](/images/castle-halberdier-01/halberdier-attack99-impact.png)

Reopening candidate 99’s six-frame file gives a maximum selected-weapon edge-length change below 4.6×10⁻⁷ model units. Each body frame still has 258–274 edges longer than 0.08 model units and more than three times their rest length. Weapon rigidity passes this check; body skinning fails. <s>The next step is to resolve the support-hand/clothing geometry boundary before extending the binding and motion.</s> Work subsequently moved to the arm-separated body below. The Halberdier remains uninstalled.

### Arm-separated body candidate (September 18)

Local selection changes did not resolve the support hand pulling on the coat. A built-in imagegen edit now places the same character in an A-pose with open hands clear of the torso, removing the halberd. The blue-and-gold tabard, heraldic emblem, helmet and boots follow the previous design. <s>The weapon will be attached separately.</s> The subsequent six-frame combination is documented below.

![A-pose modelling reference, generated concept art](/images/castle-halberdier-01/halberdier-body100-concept.png)

Meshy 7 received this image through the API with a 40,000-quad target and 4K textures. The downloaded body contains 75,660 triangles. Generation cost 30 credits and the subsequent humanoid rig cost 5. The 1200×1400 Blender still below shows the new geometry; front and side views were inspected for hand separation and body depth.

![High-resolution Blender still of the new unarmed body](/images/castle-halberdier-01/halberdier-body100-portrait.png)

Astra authored five larger single-joint probes and a six-frame two-arm range test. Reopening the saved six-frame scene found no edges longer than 0.08 units and more than three times their rest length. Four front/side key-pose renders show no strips pulling the coat toward the support hand. This covers the tested range only.

![Raised-arm Blender probe: the shoulder plate deforms and the hands are not posed for a grip](/images/castle-halberdier-01/halberdier-body100-raised.png)

![Side view of the forward-arm probe, without a weapon, grip or attack footwork](/images/castle-halberdier-01/halberdier-body100-forward.png)

<s>The raised pose still compresses the shoulder armour.</s> The separate-plate experiment below follows up on this failure. Rigid plate controls, wrist orientation, finger grips and weapon attachment remain ahead of the native animation set. This is a working body candidate; the Halberdier remains uninstalled.

Two shoulder treatments followed. Assigning the entire mask to the upper-arm bone stretched the adjacent cloth, producing 6–112 large edges per frame; that candidate was rejected. Candidate 103 extracts two independent plates and follows part of the upper-arm rotation. Across six reopened poses, plate edge lengths vary by less than 2.92×10⁻⁷ units and the retained body stays below the large-edge threshold. Raised-plate placement and the neckline seam still need visual correction.

![Independent rigid plates in a raised-arm probe; placement and seams remain unfinished](/images/castle-halberdier-01/halberdier-shoulder103.png)

Grip work starts from the open hands. Curl attempts 104–106 flattened fingers or thumbs and were rejected. Candidate 108 adjusts the curl axis and separates the thumb treatment from the other fingers. A diagnostic shaft of radius 0.014 units exposes the remaining gaps: the thumb is open and finger contact is unfinished. This rod is not the final halberd.

![Rejected early curl, with collapsed hand geometry](/images/castle-halberdier-01/halberdier-grip104-rejected.png)

![Current grip close-up draft; thumb closure and shaft contact remain unfinished](/images/castle-halberdier-01/halberdier-grip108.png)

### Six-frame body and halberd combination

The original Meshy halberd is now extracted. The first extraction retained part of the old gripping hand, so the affected central band was removed and a short wooden handle segment inserted. The head, remaining shaft and butt cap reuse the existing geometry. Candidate 116 combines this weapon with the new body and independent shoulder plates in the original six-frame front-attack group.

Early combinations put the right hand forward and kept the shaft aligned with the body's forward axis. The horizontal pose intersected the torso and arms, and the axe face lay flat. Comparing the original impact frame led to a right hand close to the body, a forward left hand, and a shaft crossing diagonally in front. Adjusting the rear elbow then cleared the buttward shaft. Candidates 111–115 remain rejected history.

![Rejected early combination with body intersections and incorrect blade roll](/images/castle-halberdier-01/halberdier-combined111-rejected.png)

![Historical Blender impact pose from candidate 116; blade side and camera changed in the subsequent review](/images/castle-halberdier-01/halberdier-combined116-portrait.png)

![Six-frame combination candidate: raise, strike, follow-through and recovery; offline Blender renders](/images/castle-halberdier-01/halberdier-combined116-sheet.jpg)

After reopening the saved scene, none of the six body poses triggers the large-edge stretch threshold. Nine longitudinal rays along the shaft centre and circumference find no intersections with non-hand body triangles or either shoulder plate at those six frames. Grip-hand faces are explicitly excluded. Finite ray sampling does not cover every weapon surface, finger contact, self-intersections or intermediate poses, so this is not a complete collision guarantee.

This front-attack candidate includes a small forward step. The editable base and combined action are saved separately. Finger detail, native stance/camera/scale and the remaining animation groups still need work; the Halberdier remains uninstalled. No new Meshy requests were made in this step.

### Holding, walking and native registration

At candidate 121, eight holding frames and six walking frames joined the earlier six-frame front attack: three groups and twenty native frames. Both new groups keep the original two-handed, slanted pole carriage with alternating legs. The first walk sank a sole by about 0.00391 units. Rigid sole weights blended into the ankle reduce maximum penetration across the twenty native frames to about 8×10⁻⁸ units. Some lowest points sit slightly above the floor, by at most about 0.000095 units.

![Candidate 121 holding, a 1280×1600 Blender still](/images/castle-halberdier-01/halberdier-holding122.png)

Side-by-side review exposed a reversed blade side and an opposite starting leg phase. The blade was rolled over, the walk shifted by half a cycle, and camera azimuth changed to 52° while retaining 30° elevation. This remains an offline review camera.

![Original and candidate 121 at matching display scale; the right column uses 2× Blender frames, not game captures](/images/castle-halberdier-01/halberdier-native122-comparison.jpg)

The original canvas is 450×400. The first holding frame sets height, horizontal centre and ground registration; the same camera then renders all three groups without per-frame scaling. All twenty frames fit. Evaluated vertices match exactly between holding keys 1 and 9, and between walking keys 1 and 7. Those final closure keys are not extra exported frames.

![Six walking frames after the starting-phase correction](/images/castle-halberdier-01/halberdier-moving122-sheet.jpg)

No frame triggers the large-edge threshold, and the nine longitudinal shaft samples avoid non-hand body and shoulder-plate triangles. The sampling limitations above still apply. The comparison also shows insufficient attack reach and stance, with detailed finger contact still unreviewed. These clips have not passed complete visual acceptance. <s>Up/down attacks, hit, defence, death, turns, hover, shadow layers and game integration remain unfinished.</s> Up/down candidates have since been added below; the other items remain unfinished.

### Attack and defence candidates

Candidate 131 retains eight holding frames, six walking frames and nineteen directional attack frames, and adds the original twelve-frame defence group: six groups and forty-five frames. Front preparation raises the grips, the upward wind-up now passes across the head, and strikes use a deeper knee bend. These are fixed-camera offline candidates.

![Directional attacks: original above candidate 131 at matching display scale](/images/castle-halberdier-01/halberdier-attacks131-comparison.jpg)

Defence opens from the slanted holding pose, turns into a cross-body block and returns to holding. Draft 130 raised both hands above the forehead with a nearly upright stance. Candidate 131 lowers the grips and adds body rotation and knee bend. Its shaft is still flatter than the original block, whose blade points slightly upward.

![All twelve defence frames, original above the Blender candidate](/images/castle-halberdier-01/halberdier-defence131-comparison.jpg)

![Cross-body block, an 1800×1400 Blender still; fingers and shoulder trim remain unfinished](/images/castle-halberdier-01/halberdier-defence131.png)

Reopening the scene gives a maximum grip-target error of about 5.7×10⁻⁷ units across nineteen attack and twelve defence frames, with no edges above the existing stretch threshold. Nine shaft rays avoid non-hand body and shoulder plates in all forty-five frames; all frames fit the native canvas. Evaluated body, plate and weapon vertices at both defence endpoints match holding frame one exactly. These checks do not certify complete surfaces, finger contact or between-frame motion. The close-up still shows incomplete finger closure and distorted shoulder trim. <s>Hit, death, turns, hover, shadows and game integration remain unfinished.</s> A hit candidate is included below; the other items remain unfinished.

### Hit reaction and hand release

Candidate 137 adds the original six-frame hit reaction, bringing the scene to seven groups and fifty-one frames. The body recoils, the stance widens, and the later frames lean forward again. The secondary hand leaves the shaft and opens. Astra turned the original Meshy open-hand geometry into an animated shape key; other groups keep it disabled.

![Six hit frames, original above candidate 137 at matching display scale](/images/castle-halberdier-01/halberdier-hit137-comparison.jpg)

Draft 132 drove the shaft tail through the right thigh. Adjusting the weapon cleared that issue, but candidate 135 still had a narrow stance and weak recovery. Candidate 137 revises foot placement and weight shift. After reopening, all fifty-one poses stay below the existing large-edge threshold and avoid the nine shaft rays against non-hand body and plates. Evaluated body, plate and weapon vertices in the earlier forty-five frames match candidate 131 exactly. Six new frames were rendered; unchanged images were reused after checking vertices and projected bounds.

![Hit-reaction key pose with the secondary hand open, an 1800×1400 Blender still](/images/castle-halberdier-01/halberdier-hit137.png)

The last hit frame still has a released hand, so its return to holding needs review. The gripping fingers, shoulder trim and pose detail remain unfinished. <s>Death, turns and hover account for twelve missing native frames, followed by shadow/outline layers and in-game verification.</s> Turn and hover candidates are added below; the death trial is rejected. The Halberdier is not installed.

### Turns, hover and a rejected death draft

Candidate 140 adds two frames for each turn direction and four hover frames, extending the working candidate to ten groups and fifty-nine frames. VCMI plays the first turn segment, flips facing, then plays the second. Both segments follow the original frame counts and bring the pole upright; hover adds a small pole lift.

![Original turn and hover frames above candidate 140; in-game transitions remain unverified](/images/castle-halberdier-01/halberdier-turn-hover140.jpg)

![Front-facing turn key, an 1800×1400 Blender still; shoulder and grip detail remain unfinished](/images/castle-halberdier-01/halberdier-turn140.png)

Adding the groups exposed a control-type regression: an integer assignment reduced the earlier hand-release values to fully open or closed. Float assignments restore the intermediate values. Reopening and comparing evaluated vertices confirms that the prior fifty-one body, plate and weapon poses match candidate 137 exactly. The eight new poses stay below the large-edge threshold. All fifty-nine fit the canvas and avoid the nine shaft samples against non-hand body and plates.

Four-frame death trials 141–144 were made separately. In 141, torso and arm rotations cancelled too much of the fall, leaving a seated-looking endpoint. Later drafts release the pole onto the ground and bring the arms back in. The high-resolution result exposes an unnatural fan of coat folds around the bent knees, and the corpse differs substantially from the original silhouette. **The death group is rejected and excluded from the fifty-nine-frame candidate.**

![Original death sequence above rejected draft 144](/images/castle-halberdier-01/halberdier-death144-comparison.jpg)

![Rejected death still: the coat folds and corpse pose need revision](/images/castle-halberdier-01/halberdier-death144-rejected.png)

No edge exceeded the stretch threshold. The final body's lowest point is about 0.008 units above the floor and the weapon's about 0.006. Those measurements cannot establish plausible cloth folds. The next work is the coat and leg pose during collapse, followed by gripping fingers, shoulder trim, transitions and fuller collision review. <s>Shadow/outline layers, installation and native visual acceptance remain unfinished.</s> Shadow and outline layers are now included in offline preview 164 below; installation and native visual acceptance remain unfinished.



Trials 145–150 examined the lower coat weights. Thigh bones account for most of the selected blue-and-gold fabric weights; shin bones contribute about 0.7%. Added coat-fold controls in 146 tore the selection boundaries into strips. Expanding and smoothing that selection in 147 reduced the outer-coat damage, but the inner mail still stretched. Both were rejected.

![Rejected cloth-control trial 147, with stretched inner surfaces](/images/castle-halberdier-01/halberdier-cloth147-rejected.png)

A closer look at the original endpoint led to a side collapse with asymmetric knees and the raised arm brought back toward the body. Trial 150 retains the existing cloth weights. Ground placement now includes both shoulder plates, correcting the previous trial's roughly 0.026-unit right-plate penetration. Evaluated body, plate and weapon vertices in all previous fifty-nine frames remain identical.

![Original and trial 150 death poses; weapon release still happens too early](/images/castle-halberdier-01/halberdier-death150-comparison.jpg)

![Trial 150 side-collapse draft, 1800×1400 Blender still; neither accepted nor installed](/images/castle-halberdier-01/halberdier-death150-draft.png)

The coat is more compact than in 144. However, the original still holds its pole aloft in frame three, while this draft has released it. Corpse and weapon silhouettes also differ. **Death remains an unaccepted draft outside the fifty-nine-frame candidate.** All sixty-three trial poses fit the canvas and pass the existing edge threshold. Those checks do not establish cloth self-collision, complete surface clearance or plausible weight support. The next revision needs to retain the pole during the intermediate fall and improve body pose before reviewing landing contact and transitions.

Trial 157 keeps the pole in the left hand through frame three and releases it in frame four. Arm elevation and wrist orientation are controlled separately. Rotating the whole arm in 152 drove the butt into the floor; the wrist roll in 155 put the shaft through the forearm. Reversing that roll and moving the frame-two holding arm forward restores a visible diagonal blade. Nine shaft rays find no non-hand body or plate intersections across all sixty-three poses. Body, plates and weapon remain above the floor, and the previous fifty-nine poses match 140 at every evaluated vertex.

![Original death poses and trial 157; frame three retains the pole, but frame two is still too extended](/images/castle-halberdier-01/halberdier-death157-comparison.jpg)

![Trial 157 frame three, 1800×1400 Blender still; not installed, with grip and cloth review outstanding](/images/castle-halberdier-01/halberdier-death157-held.png)

Early release and the edge-on blade have been addressed. The second pose is still less curled than the original, and the final corpse and dropped weapon silhouettes differ. Death remains outside the fifty-nine-frame working candidate. Body compression, weapon landing, contact and transitions remain to be revised; sampled clearance does not establish complete collision or appearance acceptance.

Trial 160 folds the hips and knees further in frame two and moves the holding arm forward to clear the head. The final weapon now rests with its blade flat; its previous upright blade held the shaft too high. This remains a death draft. The body is more compact, but the final pole is more prominent than in the original, and grip, cloth and transitions remain unaccepted.

![Original and trial 160 death poses; not installed](/images/castle-halberdier-01/halberdier-death160-comparison.jpg)

![Trial 160 endpoint, 1800×1400 Blender still, with the blade lying flat](/images/castle-halberdier-01/halberdier-death160-ground.png)

A separate triangle-surface check covers the complete weapon, including blade and metal butt. Across sixty-three poses it finds no intersections with either shoulder plate or the body after excluding wholly hand-dominant triangles. The same check detects 349 and 199 intersecting triangle pairs in frames two and three of known-failing trial 155. This does not cover complete containment without a surface crossing, finger contact, body self-intersection or motion between sampled frames. All previous fifty-nine poses still match 140 at every evaluated vertex.

### Layered review and geometry shadows

Offline package 164 contains eleven groups and sixty-three frames of 1×/2× bodies, shadows and the required selection outlines. Four death poses still await appearance acceptance. <s>This package is not installed.</s> Installation record 507 now installs it as a test candidate; the observed native coverage follows below.

The first shadow pass transformed body alpha around a fixed ground line. It lacked the vertices' individual heights and depth positions. The replacement reads the evaluated Blender mesh, projects it along a fixed light direction onto world z=0, and renders that silhouette through the same camera. Opacity and spatial softness are shared between the comparisons; body images remain unchanged.

![Body-alpha projection above, geometry-ground projection below; offline death comparison](/images/castle-halberdier-01/halberdier-shadow-comparison162.jpg)

![Layered walk from package 164, shown at 150 milliseconds per frame rather than measured game timing](/images/castle-halberdier-01/halberdier-walk-layered164.gif)

The sixty-three geometry shadows produce 126 files at 1×/2×. Body and selection-outline files match the preceding package byte for byte. Format validation reports zero errors, zero warnings and twenty informational notices about movement inside the canvas. No temporal averaging or frame-count change was applied. The native encounter below now covers some groups. Flicker, transitions and full appearance acceptance remain under review.

Installation record 507 adds the preceding package 164 to the local mod. It retains that package's grip and does not include the later rejected finger experiments. The source-scene hash and format checks were revalidated. The installation adds 278 files while preserving 1,123 existing Swordsman, Crusader and Marksman resource files.

The native encounter loaded **38 distinct 2× body images in eight groups**: holding, hover, movement, both turns, forward attack, hit and death. Upward/downward attacks and defence were not exercised. The capture below shows the installed draft; grip anatomy, shoulder cloth, corpse support and transitions remain open, along with a dedicated review of shadow stability over time.

![Native Halberdier battle capture showing the installed combat and corpse drafts; full appearance acceptance remains open](/images/castle-halberdier-01/halberdier-battle508.png)

<details><summary>Overview before expanded native testing, 2026-09-18</summary>

<s>| Halberdier | Offline 1×/2× layered preview: 63 frames in 11 groups, with geometry-projected shadows; death, grip, shoulder cloth and transitions remain unaccepted; not installed |</s>

<s>| Marksman | 1×/2× test package installed: 16 active groups /97 frames with body, geometry shadows and selection outlines; battle loaded 39 body images in five groups and the bolt. Pose, transitions and remaining native coverage unfinished |</s>

</details>

### Marksman layers and battle test

Private package 479 is installed locally. The original file contains two unused duplicate turn groups, 9 and 10. VCMI uses **16 groups and 97 frames** from this set; the full reference comparison retains 18 groups and 101 slots. The first export incorrectly included both unused IDs in its configuration. Removing them resolved the format errors; the body animation validator now reports zero errors and zero warnings.

Shadows come from each evaluated 3D pose projected onto the ground, including visible hands, weapons and the bowstring. A fixed opacity and soft edge are applied before exporting both resolutions. Holding and hover also receive selection outlines. Those outlines support highlighting; the clothing keeps its original model colours, without player-colour recolouring.

![Nine offline pose composites with geometry-projected shadows; animation drafts remain under review](/images/castle-halberdier-01/marksman-layers479.png)

The native battle loaded **39 distinct 2× body images** across holding, hover, forward shooting, downward shooting and death, plus two directions of the separate Meshy bolt. The mod sets release to frame 4 and uses Blender-derived launch positions. Directional foreshortening and the visible handoff still need frame-by-frame review. This encounter did not exercise every group. Its log also contains text-encoding errors, a test-map Grail-placement warning and a query -1 error at termination, so this is not a clean-log claim.

![VCMI battle capture: the Marksman on the left shoots as the defender reacts; desktop areas were cropped, with no repainting](/images/castle-halberdier-01/marksman-battle480.png)

Existing Swordsman and Crusader files were preserved byte for byte. <s>The late fall, straight corpse legs, finger anatomy, sword-to-empty-hand transition and loading continuity remain unresolved.</s> Revision 502 installs the prone, bent-leg ending; the mid-fall motion, fingers, sword transition and loading continuity still need work. <s>Movement, turns, melee and upward shooting need dedicated native coverage.</s> Subsequent logs cover these groups, as recorded below; appearance and transitions still need review. Earlier installation statements below describe the named historical versions.

<details><summary>Overview before installation, 2026-09-18</summary>

<s>| Marksman | All 18 original groups /101 body draft frames, including duplicate turns; melee and turns added, with death, fingers, draw/sheath and loading transitions, layers and native integration unfinished |</s>

</details>

Diagnostic run 506 temporarily sets Marksman ammunition to zero so the AI approaches and uses melee. It restores both creature configuration and user settings byte for byte afterwards. That battle read **63 body frames in 12 groups**, including all three melee directions, movement, start/stop, both turns, hit, holding, hover and death. Together with the previous shooting and death runs, native logs now cover **87 distinct body images in 15 groups**. Run 503 also exercised upward shooting. The ten-frame defence group still lacks native coverage.

![Marksman melee diagnostic capture; the temporary ammunition override has been removed](/images/castle-halberdier-01/marksman-melee506-battle.png)

These observations establish that the game selected and read those assets. They do not validate the visible sword draw, facing change, recovery or loading transitions.

### Marksman melee and turns

The offline body draft now covers **all 18 original groups and 101 frame slots**. Groups 9 and 10 duplicate the two turn clips, leaving 97 distinct body images. Each directional melee clip has six frames; each turn half has two. Coverage is complete at the body-draft level. <s>Pose fidelity, transitions, shadow and player-colour layers, projectile handling and native acceptance remain unfinished.</s> Body, shadow, selection-outline and projectile drafts are now installed; the preceding section lists observed native coverage and remaining work.

The original keeps the crossbow in the left hand while the right uses a short sword. This pass reuses the independent sword previously generated through the Meshy API, with no additional generation charge. Astra aligns the grip and authors the wind-up, strike and recovery in Blender. The final melee frame still holds the sword; drawing and sheathing across the empty-handed holding pose remain unresolved.

<video controls loop muted playsinline preload="metadata" src="/images/castle-halberdier-01/marksman-melee473.mp4"></video>

An 8 fps offline review, with four-frame pauses added at each clip boundary.

![Front strike, high-resolution static Blender render](/images/castle-halberdier-01/marksman-melee-front475.png)

![Six-frame front melee comparison](/images/castle-halberdier-01/marksman-melee-front475-comparison.png)

![Upward strike, high-resolution static Blender render](/images/castle-halberdier-01/marksman-melee-up475.png)

![Six-frame upward melee comparison](/images/castle-halberdier-01/marksman-melee-up475-comparison.png)

![Downward strike with the crossbow carried back, static Blender render](/images/castle-halberdier-01/marksman-melee-down475.png)

![Six-frame downward comparison; stance and body amplitude still need reference work](/images/castle-halberdier-01/marksman-melee-down475-comparison.png)

The first forward and downward paths exceeded arm reach by as much as 12 cm. Bringing the grip closer restored attachment. Reusing the crossbow finger pose also left the sword resting on an open-looking palm; the revised grip bends the four fingers farther and rotates the hand around the handle. The battle camera exposed another mismatch: the initial front strike projected too low and the downward strike too vertically. The latest paths adjust both sword direction and the bow arm's backward travel.

Each saved scene was reopened and sampled at 321 times. Maximum right-hand drift against the sword is about 2.89 mm across the three clips, with no coarse body-edge distortion flags. These measurements do not establish finger anatomy, clearance around the guard or fidelity to the original poses.

<details>
<summary>Superseded crossbow-grip trial</summary>

![Earlier front strike with an open-looking palm and incorrect projected sword direction](/images/castle-halberdier-01/marksman-melee448-rejected-grip.png)

</details>

![Front-facing turn pose, high-resolution static Blender render](/images/castle-halberdier-01/marksman-turn475.png)

![First two turn frames against the original](/images/castle-halberdier-01/marksman-turn-l475-comparison.png)

![Second two turn frames against the original](/images/castle-halberdier-01/marksman-turn-r475-comparison.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-halberdier-01/marksman-turn473.mp4"></video>

This offline demonstration follows VCMI's existing sequence: play the first half, flip facing, then play the second half. The engine source was read and left unchanged. Both halves share a frontal pose, but native positioning, the visible weapon-side change and footwork still require an in-game review.

### Marksman reactions, hover and death drafts

<s>The current body set has eleven draft groups and 75 frames.</s> This records the stage before melee and turns; the current coverage is listed above. This pass revises hit and defence, adds the original nine-frame hover interaction, and introduces a six-frame death draft. Astra authored the animation in Blender around existing Meshy geometry, with no new generation charges. <s>All four groups remain offline.</s> They are now included in installed test package 479; death timing and the final pose still need substantial reference work.

<video controls loop muted playsinline preload="metadata" src="/images/castle-halberdier-01/marksman-reactions441.mp4"></video>

This video retains death version 437. The revised 499 comparison, stills and native capture appear below.

The review adds four-frame pauses at each clip boundary. Its 8 fps playback is for inspection and does not establish engine timing.

![Hit peak, high-resolution static Blender render](/images/castle-halberdier-01/marksman-hitted442.png)

![Six hit frames, using a shared crop for original and candidate](/images/castle-halberdier-01/marksman-hitted442-comparison.png)

![Defence now raises the crossbow in front of the face, static Blender render](/images/castle-halberdier-01/marksman-defence442.png)

![Ten-frame defence comparison](/images/castle-halberdier-01/marksman-defence442-comparison.png)

The stronger recoil and higher defensive carry preserve continuous left-hand attachment. Maximum sampled drift is 0.50 mm for hit and 0.56 mm for defence. Defence starts and ends at holding; the hit also returns to the same evaluated body and weapon endpoint. Finger anatomy and cloth contact remain unaccepted.

![Hover interaction, high-resolution static Blender render](/images/castle-halberdier-01/marksman-mouseon442.png)

![Nine hover frames against the original](/images/castle-halberdier-01/marksman-mouseon442-comparison.png)

The first hover draft put the crossbow below the left hand's reachable range, leaving more than 5 cm of error. Raising it and moving it toward that shoulder reduced drift to 0.05 mm across 129 samples. Both endpoints match holding. The original still looks farther down toward the weapon.

Death revision 499 replaces the supine, extended-leg ending with a prone pose and asymmetrical knee bends. The fall also reaches the ground sooner in frames four and five. It reuses editable Meshy geometry and local animation without another API charge. Test package 502 installs the six revised body frames and their geometry shadows.

![High-resolution Blender still of the new prone ending; the tumble and overall reference fidelity remain under review](/images/castle-halberdier-01/marksman-death502.png)

![Original and revised six-frame death sequence; frame four and the rolling path still differ visibly](/images/castle-halberdier-01/marksman-death502-comparison.png)

A ground-plane render exposed elevated hands and a floating crossbow that were less obvious against transparency. Lowering the torso, hands and weapon brought them close to the floor. Across 321 reopened-scene samples, the gripping hand drifts by at most 0.047 mm relative to the bow, with up to 0.074 mm of floor penetration and no coarse long-edge flags. This does not validate finger anatomy, cloth contact or the tumble's timing.

![Blender ground-plane diagnostic for torso, hand and crossbow placement](/images/castle-halberdier-01/marksman-death502-ground.png)

The native client read all six revised 2× death bodies and shadows. Its battlefield now shows the prone corpse below. Only 24 body/shadow images across both resolutions were replaced; 1,099 other mod files retained identical bytes.

![Native VCMI battle capture with the revised corpse at the upper right](/images/castle-halberdier-01/marksman-death503-battle.png)

<details><summary>Rejected trials and earlier death versions</summary>

Trial 482 bent both legs too symmetrically. Trial 485 crossed them, requiring a correction to the outward rotation. Trial 489 delayed the roll until frame five left the body balanced on its side. Trial 493 rolled earlier but still floated its hands and bow above the ground. The following revisions lowered the torso and weapon; the failed ground render is retained here.

![Rejected trial 493: knees touch the ground while hands and crossbow remain elevated](/images/castle-halberdier-01/marksman-death493-floating.png)

![Final death pose, static Blender render; visual acceptance pending](/images/castle-halberdier-01/marksman-death442.png)

![Six death frames: the draft lands later and leaves the legs more extended](/images/castle-halberdier-01/marksman-death442-comparison.png)

<s>The first fall merely rotated the recoil pose and left the free arm raised at the end. It is rejected. The revised scene settles the arm and weapon as the body falls backward. Across 321 samples, the body, hands, bow and string stay above the floor within numerical precision; left-hand drift peaks at 2.11 mm. These checks do not establish plausible support or collision-free cloth. Frames four and five need an earlier, more compact fall, and the final legs need to follow the original more closely.</s>

![Rejected first death draft, with the free arm still raised](/images/castle-halberdier-01/marksman-death424-rejected.png)

<s>Directional melee, turns, the constrained trigger finger, loading continuity, layered export and native review remain unfinished.</s> Melee and turn body drafts now exist; the other issues remain open.

</details>

<details>
<summary>Hit and defence at candidate 415 (superseded by 421)</summary>

### Marksman hit and defence candidates

<s>The new clips preserve the original six hit frames and ten defence frames, bringing the current body draft to nine groups and 60 frames. Astra authored these actions in Blender using the existing Meshy body, hands and crossbow. The hit raises one leg and opens the free hand; defence brings both hands onto the weapon with a small crouch. Comparison with the original still shows insufficient sideways recoil and a less protective weapon position near the head. These are offline candidates awaiting further pose work and game review.</s>

![Six hit frames: original on the left, candidate on the right](/images/castle-halberdier-01/marksman-hitted419-comparison.png)

![Hit pose, high-resolution static Blender render](/images/castle-halberdier-01/marksman-hitted418.png)

![Ten defence frames: original on the left, candidate on the right](/images/castle-halberdier-01/marksman-defence419-comparison.png)

![Two-handed defensive carry, high-resolution static Blender render](/images/castle-halberdier-01/marksman-defence418.png)

<s>The first hit draft needed a stronger recoil and leg lift. A later subframe check caught a separate defect: equivalent quaternion rotations had opposite signs on adjacent keys, producing a roughly 38 cm left-hand jump during defence. Keeping quaternion signs continuous reduced the maximum grip drift to 0.32 mm across 145 samples; the hit measured 0.49 mm across 81 samples. Defence endpoints and the final hit pose match holding to below 0.001 mm across the evaluated body, hands, bow and string. These checks cover continuity and endpoint geometry, leaving finger anatomy, cloth collisions and fidelity to the original unresolved.</s>

</details>

<details>
<summary>Grip close-ups and rejected corrections</summary>

Comparing the hit endpoint with holding shows that the original also finishes with a released hand. The endpoint was therefore not replaced by holding just to remove the jump. Native transition review remains outstanding.

Close-ups expose the current unfinished grip: four fingers curl around the pole while the thumb remains outside. Trial 166 adds thumb opposition that fades out with the hand-opening control. All sixty-three poses preserve vertices outside its mask, and fully open poses restore the original hand. It nevertheless increases thumb penetration and was rejected.

![Unfinished current grip, rejected thumb opposition 166, and rejected radial correction 167](/images/castle-halberdier-01/halberdier-grip-failures167.jpg)

Trial 167 pushes vertices inside the approximate shaft cylinder outward. In holding frame one, left/right inside-vertex counts fall from 108/124 to 13/0, but the correction creates spikes and an unnatural palm shape. It was also rejected. These vertex distances do not prove surface clearance. Further work needs joint-based finger and palm shaping from the original open-hand mesh. Preview package 164 remains unchanged.

Trial 168 labels five digits from distal connected regions of the original open-hand mesh, then propagates those labels along mesh edges. The little finger ends closer to the wrist than the other three fingers. Trials 169 and 170 introduce three bending segments, but close-ups still show collapsed joints and holding-frame shaft penetration exceeds the previous candidate. Both were rejected. Grip location, palm shape and finger joints need joint calibration; the segmentation data is retained for that work.

![Rejected segmented-finger trial 170; visible joint collapse and shaft intersections](/images/castle-halberdier-01/halberdier-finger-joints170-rejected.png)

Audit 171 found a generation bug. `shape_key_add` defaults to `from_mix=True`, so creating the right-hand key captured the already active left-hand correction. Trial 170's right-hand key carried changes to 862 left-hand vertices. The earlier check considered only vertices outside the union of both hand masks and missed this cross-hand effect. Explicit `from_mix=False` creation passes separate checks for both keys.

![Left hand after removing duplicated deformation in 171; grip remains unaccepted](/images/castle-halberdier-01/halberdier-grip171-isolated.png)

This explains part of the deformation, not correct gripping: 171 still penetrates the shaft and has not replaced the preview package. The public tools repository includes the [per-key mask checker](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/check_shape_key_isolation.py) and [usage notes](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/docs/shape-key-isolation.md). It rejects known-failing 170 and passes the independently regenerated keys in 171.

</details>

<details>
<summary>Candidate 126 attack record, superseded by further edits in 131</summary>

### Three attack directions

<s>Candidate 126 contains six front, six upward and seven downward attack frames, matching the original counts. Each direction has its own preparation, strike and recovery poses. Together with holding and walking, the editable scene now has five groups and thirty-three frames. These remain offline candidates.</s>

![Original frames above Blender candidate 126 in each direction; matching display scale without per-frame resizing](/images/castle-halberdier-01/halberdier-attacks126-comparison.jpg)

Draft 123 drove the shaft through the body during front preparation and put the late downward grip beyond the left arm's reach, missing by as much as 0.051 units. Pulling the hands inward or advancing the torso introduced chest intersections. Candidate 126 adjusts hand spacing, low-strike direction and grip positions. After reopening the scene, all nineteen attack frames have grip-target errors below 5.2×10⁻⁷ units and no edges above the existing stretch threshold. Nine longitudinal shaft samples miss non-hand body and plate triangles across all thirty-three frames. This does not certify the blade surface, finger contact or motion between frames.

![Front strike, an 1800×1400 Blender still of the offline candidate](/images/castle-halberdier-01/halberdier-impact126.png)

<s>All thirty-three frames fit the fixed native camera, and both locomotion loops retain matching closure keys. The comparison still shows differences in raised-hand height, the upward wind-up and knee bend during the strike and recovery. Those poses and the fingers need more work, followed by hit, defence, death, turns and hover. Shadow layers and game integration are unfinished.</s>


</details>

### Earlier Halberdier fragment rig

The holding and walking images below document the earlier local rig. They do not establish finished motion on the new skin.

<s>Halberdier: eight-frame holding cadence</s>

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

### Marksman body and crossbow separation (September 18)

Lowering the crossbow toward the original nine-frame hover pose exposed severe shoulder and sleeve distortion in trials 173 and 174. Earlier continuity reviews did not cover this pose. Both trials are rejected; earlier model and action files remain available.

![Rejected trial 174: lowering the crossbow distorts the shoulders, rendered in Blender](/images/castle-halberdier-01/marksman-hover174-rejected.png)

Candidate 175 starts with an empty-handed A-pose body so the crossbow can receive separate controls. Built-in imagegen produced the reference; Meshy API model meshy-7 generated the textured body for 30 credits. The request used a 40,000-polygon target and 4K textures; Blender imports 43,343 vertices and 69,924 triangles. Front, side and rear renders show no obvious volume collapse. Posed shoulders, fingers and crossbow attachment remain unverified, and the model is not installed.

![A-pose reference concept; not game artwork](/images/castle-halberdier-01/marksman-body175-concept.png)

![Meshy body 175, front view rendered in Blender](/images/castle-halberdier-01/marksman-body175-front.png)

![Side view of the same mesh](/images/castle-halberdier-01/marksman-body175-side.png)

<s>Meshy humanoid rigging subsequently completed for another 5 credits. Single-joint checks in Blender are in progress; crossbow handling, shooting and game frames have not been produced from this body.</s> Single-joint checks and three two-arm poses—low carry, level aim and raised aim—have since been rendered. These empty-handed tests did not reproduce the earlier severe shoulder distortion. Full actions and game frames remain unfinished.

A separate crossbow was generated through the Meshy API for another 30 credits. Astra calibrated its size, top orientation and attachment coordinates in Blender. This body, humanoid rig and crossbow cost 65 credits together, excluding earlier models and trials.

![Independent Meshy crossbow, top view rendered in Blender, showing the groove, paired limbs and string](/images/castle-halberdier-01/marksman-crossbow179-top.png)

![Oblique render of the same crossbow](/images/castle-halberdier-01/marksman-crossbow179-oblique.png)

### Separate hand geometry

The existing donor hands still broke down when the thumb moved across the stock. Moving the palm reduced sampled skin intersections, but the isolated hand renders exposed sharp web and wrist geometry. Trial 241 reached both thumb-bone targets while visibly tearing the skin, and is rejected.

![Rejected thumb trial 241; reaching bone targets does not establish usable skin deformation](/images/castle-halberdier-01/marksman-thumb241-rejected.png)

A new reference shows one open left hand with separated fingers and a short wrist. Built-in imagegen produced the reference; the Meshy API generated the textured model for 30 credits, using Meshy 7, a 20,000-quad target and 4K textures. Astra prepared the local Blender scene and inspected its turnarounds.

![Independent hand reference generated for Meshy; concept image, not the model](/images/castle-halberdier-01/marksman-hand242-concept.png)

The downloaded mesh contains 37,376 triangles. Welding coincident UV-seam vertices at a one-micrometre tolerance leaves one connected mesh with 18,690 vertices, no open edges and no non-manifold edges. The side views retain palm thickness and the five digits are distinct. These are static checks. <s>Finger rigging, thumb opposition, cuff fitting and posed skin contact still need to be done.</s> Local rigging follows below; cuff fitting and usable grasp remain unfinished. The earlier body, crossbow and hand candidates remain available; nothing from this hand branch is installed.

![1200×1400 Blender render of the new Meshy hand; unrigged candidate](/images/castle-halberdier-01/marksman-hand244-render.png)

The new hand now has three bones per digit, including a separate thumb-base joint, plus a wrist/palm root. The joint positions come from sections of the Meshy geometry. The first larger curl pinched the thumb base; moving that joint and widening its weight transition reduced the crease. Fifteen individual joint probes preserve the other connected fingertip regions within two micrometres, and rest geometry remains unchanged. This does not validate the complete grasp.

![Blender curl probe for the new hand rig; palm folds and contact still under review](/images/castle-halberdier-01/marksman-hand248-curl.png)

Combining the hand with the actual Meshy crossbow still produces skin intersections. The stock measures about 5.6 cm deep at the test grip. A 2.8 cm depth variant reduces some intersections; a separate trial preserves the original shape and changes placement. Neither passes, and the thinner variant has not been adopted as a fidelity correction. <s>The hand remains separate from the character while finger contact is repaired.</s> The subsequent body assembly is shown below. No additional API credits were used for these local rigging trials.

![Rejected first fit with the actual crossbow: the fingers penetrate the wood](/images/castle-halberdier-01/marksman-hand249-grasp-rejected.png)

The next fitting pass evaluates the deformed skin while retaining the original independent crossbow dimensions. In the standalone hand test, vertices more than 0.2 mm inside the stock fell from 2,998 to 65, with maximum depth falling from roughly 8.6 to 1.6 mm. This checks every hand vertex, but does not cover full triangle intersections or finger self-collision; the grip is still unaccepted.

The left hand and a mirrored right hand have now been assembled with the Marksman body. The first assembly exposed excess wrist geometry and placed the left wrist target about 6 cm beyond the arm’s reach. Trimming the extra wrist section and raising the carry brought both wrists onto their targets. Each hand retains its own finger rig and follows the character’s wrist.

![1400×1600 Blender still of the assembled body and new hands; a candidate, not an in-game result](/images/castle-halberdier-01/marksman-assembled262.png)

![Close-up of the same candidate, showing cuff points and contact still needing repair](/images/castle-halberdier-01/marksman-assembled262-grip.png)

Candidate 262 record:

<s>Moving the grips along the stock changes their cross-sections, so contact must be checked again. The assembled left hand has 29 vertices more than 0.2 mm inside the wood, reaching about 2.2 mm; the right has 176, reaching about 4.1 mm. Pointed cuff geometry is also visible in the close-up. These need repair before full motion. This is an editable body-and-hands candidate, with no new game installation or API charges.</s>

The cuff section extending into the palm has been shortened by 3 cm. Its endpoint now follows the wrist, with weights blending back into the forearm. Body faces, UVs and 37,330 central vertices remain unchanged. Refitting each hand to its own stock section leaves eight left-hand vertices more than 0.2 mm inside the wood, reaching roughly 0.37 mm; none are detected on the right. These are vertex tests. Palm folds and thumb anatomy still need close inspection.

![Blender close-up after shortening the cuffs and refitting both grips, candidate 269](/images/castle-halberdier-01/marksman-cuff269.png)

The assembled character now has a carry-to-aim study. With only three poses, hands followed the bow at the keys but drifted by about 2.1 cm between them. Solving 17 poses along the path reduces maximum relative drift to about 0.24 mm across 33 times checked after reopening the file. No body edge exceeded both three times its rest length and 8 cm in this coarse tear check. The nine-frame study covers raising the bow only; <s>firing, recovery and the other native actions remain unfinished</s>; the subsequent eight-frame body candidate is shown below, while the complete action package remains unfinished, with no game installation.

![Blender still of the raised-bow study, not a complete firing animation](/images/castle-halberdier-01/marksman-raise274.png)

![Side view of the same aim pose for wrist, cuff and crossbow review](/images/castle-halberdier-01/marksman-raise274-side.png)

### Native eight-frame shot

Reviewing `CHCBOW.DEF` frame by frame shows the right hand starting beside the waist, then joining the crossbow. Frames 4–6 hold a level aim, frame 7 raises the bow sharply, and frame 8 lowers it. The new body candidate follows that order, with the right fingers changing from a relaxed curl to their fitted grip. The first level aim sat at chest height; comparison led to a higher position closer to the original jaw-level aim.

![Original and new 2x body frames; original on the left of each pair](/images/castle-halberdier-01/marksman-shoot288-comparison.png)

<video controls loop muted playsinline preload="metadata" width="300"><source src="/images/castle-halberdier-01/marksman-shoot288-body.mp4" type="video/mp4"></video>

The clip presents the eight body frames at eight frames per second for review, not as a claim about in-game timing. They come from a Blender 3D action, rendered on a fixed 900×800 canvas and camera at 2x. None reaches the canvas edge.

![1400×1600 Blender still of the raised bow in frame 7](/images/castle-halberdier-01/marksman-shoot286-raised.png)

Reopening the file and checking 113 times gives a maximum hand-to-bow deviation of about 0.51 mm: the left grip is checked throughout, and the right from frame 4 onward. No coarse large-edge stretch check triggers. More solved poses and linear interpolation reduce sliding around the raised-bow reversal. All evaluated body, hand and bow vertices at the eight integer frames remain exactly unchanged by the interpolation update.

<s>This is still a front-shot body candidate. Projectile, string and trigger behavior, hand close-ups, the return to holding and the other actions remain unfinished. Nothing new has been installed. This pass reused existing Meshy models without additional API charges.</s>

That paragraph records body candidate 289. Subsequent string and bolt work follows below.

### String motion and projectile handoff

The independent Meshy crossbow and bolt remain the source models. Astra added an articulated 3D string and limb deformation in Blender. During release, the string centre advances with the bolt tail while the limbs return toward their relaxed shape. These are 1400×1400 Blender stills.

![Cocked crossbow with bent limbs and the bolt tail at the string centre](/images/castle-halberdier-01/marksman-string315-cocked.png)

![Mid-release: the bolt advances with the string](/images/castle-halberdier-01/marksman-string315-middle.png)

![Released string; the loaded bolt is hidden for the separate projectile handoff](/images/castle-halberdier-01/marksman-string315-released.png)

The saved scene was reopened at 68 times, including 65 distinct draw values during release. String length stays near 0.556 metres; maximum bolt-tail deviation from its centre is below 0.001 mm. All 15,175 protected central-stock vertices remain unchanged. This verifies the authored geometric relationship. Limb material strain was not simulated, and finger, trigger and full collision checks are unfinished.

Advancing the bolt also changes its launch origin. In the current battle camera, the front-shot offset draft is `(25, -56)`, still releasing on frame 4. The previous flying bolt was visibly oversized: recalibration reduces the horizontal alpha bounds from 54 to 23 pixels at 2x, close to the loaded bolt’s projected longitudinal span of 11.3 logical pixels. Up/down shots, native direction changes and readability still need review.

![Projectile size comparison on identical canvases: previous draft above, front-shot calibration below; shown at four times logical size](/images/castle-halberdier-01/marksman-projectile319-scale.png)

<details>
<summary>Rejected string and bolt motion trials</summary>

The first string-only edit kept the limbs rigid and stretched the cord from roughly 0.556 to 0.845 metres. It was rejected. Dense keys in the short release interval still introduced interpolation error. Formula drivers removed that error, but an integer control property then snapped between endpoints. Recreating the control as floating point and explicitly checking 65 different intermediate values exposed and fixed that mistake. A later render caught a stationary bolt while the string moved; the bolt tail now follows the string centre.

![Rejected early trial: moving the string centre without bending the limbs stretched the cord](/images/castle-halberdier-01/marksman-string303-rejected.png)

</details>

This remains an offline candidate, with no new Meshy charges or game installation. Trigger/finger interaction, recovery into holding and the other actions remain unfinished.

### Index finger and trigger draft

A view beneath the crossbow exposed a missing part of the grip review: the right index finger wrapped over the stock and could not reach the trigger lever.

![Candidate 314 before the grip revision: the index finger cannot operate the lever](/images/castle-halberdier-01/marksman-trigger321-before.png)

The first attempt moved the support hand far forward and inverted the rear grip. It failed: the support-hand target exceeded arm reach by as much as 12.4 cm, and the rear cuff turned upward. The replacement keeps the support hand in place, advances the rear grip by 2.5 cm and rotates it 45 degrees before articulating the index separately.

![Rejected broad grip change, with an upturned cuff and unreachable support-hand targets](/images/castle-halberdier-01/marksman-grip324-rejected.png)

The new 3D action brings the index toward the underside of the lever, rotates the lever slightly about its front attachment and resets it after release. An earlier target touched the upper side while lifting the lever, an inconsistent contact direction; the target is now underneath.

![Candidate 333 trigger close-up, a 1200×1000 Blender still; joint motion and surface contact remain under review](/images/castle-halberdier-01/marksman-trigger334-candidate.png)

The body, hand and crossbow are still Meshy assets, with local motion authored by Astra. The index solver does not yet constrain every joint degree of freedom. A small fingertip-to-target error does not establish anatomical motion or collision-free surfaces. Thumb folds, joint limits, metal contact and recovery into holding remain unfinished. Nothing was installed and no Meshy credits were spent. The preceding version 315 string views retain the earlier grip.

### Holding and the final shooting pose

The native eight-frame sequence exposed another pose mismatch: its final frame returns the right hand toward the waist, whereas the previous candidate retained a two-handed grip. Candidate 353 now releases the rear grip after the raised-bow pose, including the trigger finger, without changing the frame count.

![Original and current eight-frame shooting candidate; new images use the fixed battle camera at 2x](/images/castle-halberdier-01/marksman-shoot360-comparison.png)

<video controls loop muted playsinline preload="metadata" width="300"><source src="/images/castle-halberdier-01/marksman-shoot360.mp4" type="video/mp4"></video>

Playback is eight frames per second for offline review. The high-resolution final pose below shows the withdrawn right hand.

![Frame eight, a 1400×1600 Blender still](/images/castle-halberdier-01/marksman-recovery355.png)

Holding candidate 354 has eight frames, a nearly vertical bow beside the leg, the free hand near the waist and a small carriage motion. The first free-hand pose was too open; the fingers were subsequently curled further. Holding currently uses a relaxed string and no visible loaded bolt. Loading, cocking and the start of shooting still need a consistent treatment.

![Eight-frame holding candidate, shown as a 1400×1600 Blender still](/images/castle-halberdier-01/marksman-holding356.png)

Reopened checks find identical body vertices at the holding loop endpoints. The right-hand mesh also matches exactly between the final shot frame and the first holding frame. That is a partial handoff: the bow and support arm still differ, so the whole transition is not seamless. Both actions were sampled at 113 times without triggering the existing coarse body-edge stretch threshold.

The trigger remains unaccepted. Restricting the two distal index joints to their bending axes and limiting the knuckle leaves the current grip about 3.8 cm short of the selected contact target. This probe did not replace the old solver in the animation. It shows why reaching a target with unrestricted joint rotation was insufficient. Grip and contact must be revised together on the existing Meshy models. <s>Up/down shots still need the body orientation seen in the original.</s> Subsequent directional candidates follow below. No mod was installed and no new Meshy credits were spent.

### Torso orientation for directional shots

The original up/down shots also change the shooter’s orientation. Each new candidate retains eight frames, turning the torso during aim before lifting the bow, withdrawing the rear hand and returning. <s>Together with the front shot and holding, this body now has four offline groups totalling 32 frames.</s> That count describes directional candidate 369; subsequent walking work follows below.

The first directional draft rotated the entire character about the ground axis. Its attachments stayed aligned, but the feet swivelled with it, so it was discarded. The replacement turns the lower spine while preserving the leg pose; hands and weapon follow the torso. The downward turn was also reduced because the initial pose faced the camera too directly. These angles are authored against the images, not recovered original 3D parameters.

![Up-shot candidate, a 1400×1600 Blender still](/images/castle-halberdier-01/marksman-up370.png)

![Down-shot candidate, a 1400×1600 Blender still](/images/castle-halberdier-01/marksman-down370.png)

![Eight up-shot frames: original on the left of each pair, new fixed-camera 2x render on the right](/images/castle-halberdier-01/marksman-up373-comparison.png)

<video controls loop muted playsinline preload="metadata" width="300"><source src="/images/castle-halberdier-01/marksman-up373.mp4" type="video/mp4"></video>

![Eight down-shot frames with the leg pose retained while the torso turns](/images/castle-halberdier-01/marksman-down373-comparison.png)

<video controls loop muted playsinline preload="metadata" width="300"><source src="/images/castle-halberdier-01/marksman-down373.mp4" type="video/mp4"></video>

Both clips play at eight frames per second for review. Reopening each scene at 113 times found the selected 7,704 boot vertices unchanged from the front action. Hands, bow and bolt differed from the expected torso transform by less than 0.007 mm, and the existing coarse body-edge stretch threshold did not trigger. These checks cover assembly behavior during turning; grip anatomy, cloth appearance and pose fidelity still need review.

The configuration draft now includes all three launch offsets, each calculated at release frame 4. Loaded-bolt foreshortening differs by direction, so the separate projectile’s display size still needs corresponding calibration. The known finger-joint problem, loading transition, remaining actions and native validation are unresolved. This pass reused the Meshy models, with no new API charges or VCMI source changes.

### Walking and movement transitions

The original walk carries the crossbow across the waist, unlike the lowered holding pose. The new eight-frame cycle uses a two-handed carry with alternating steps. Local leg IK follows authored ankle paths, lifting the swing foot while moving the supporting foot backward. The gaze now stays forward; the first draft had inherited the shooting head tilt.

![Walking candidate, a 1400×1600 Blender still](/images/castle-halberdier-01/marksman-moving399.png)

![Eight walking frames compared with the original; new renders use the fixed battle camera at 2x](/images/castle-halberdier-01/marksman-moving402-comparison.png)

Move-start and move-end each retain two native frames, connecting the lowered bow to the waist-level carry. This preview uses those two start frames, eight walking frames and two end frames, with a brief holding pause at either end. Playback is eight frames per second for inspection, not a claim about the game’s final timing.

<video controls loop muted playsinline preload="metadata" width="300"><source src="/images/castle-halberdier-01/marksman-moving406-sequence.mp4" type="video/mp4"></video>

The first foot path sat too far behind the hips and exceeded the rear leg’s reach. A separate pelvis-update mistake first failed to apply the intended motion, then accumulated displacement and sank the body over successive poses; those drafts were discarded. Each pose now solves pelvis, ankles and grips afresh, correcting ankle height against the deformed soles. Reopening the cycle at 129 times reduces the earlier roughly 3.8 mm floor penetration to under 0.04 mm. The auxiliary cycle endpoint matches the starting body vertices exactly.

Each transition was sampled at 65 times. Auxiliary endpoints for body, hands, bow and string differ from their neighboring actions by less than 0.001 mm; the exported groups still contain two frames each. These are offline geometry and ground-clearance checks. Native movement speed and the known finger-anatomy problem remain unresolved.

<s>This body now has seven candidate groups totalling 44 frames: holding, walking, movement start/end and three shooting directions. Hit, defence, death, melee, turns and other actions remain unfinished. Nothing was installed; the existing Meshy models were reused without additional API charges.</s> Historical state at candidates 398/400; hit and defence drafts have since been added, as shown in the current table.

<details>
<summary>Historical stage summaries and early projectile trials</summary>

<s>| Marksman | Three eight-frame shooting directions plus eight holding frames, 32 offline candidate frames; all launch-offset drafts present; grip and finger constraints unaccepted, other actions and game integration pending |</s>

<s>| Marksman | Eight-frame shooting and eight-frame holding candidates; rear hand withdraws, string/projectile drafts present; grip and finger constraints unaccepted, other actions and game integration pending |</s>

<s>| Marksman | Eight-frame shooting-body candidate; coordinated string, limb and bolt motion, front-shot projectile scale and origin calibrated offline; trigger, hand detail, other actions and integration pending |</s>

<s>| Marksman | Eight-frame shooting-body candidate, loaded bolt and nine projectile direction drafts; string, trigger, hand detail, remaining actions and integration pending |</s>

### Loaded bolt and separate projectile

The existing independent Meshy bolt is now aligned along the new crossbow groove and follows the weapon while loaded. The first import retained quaternion rotation mode, so writing Euler angles did not change its actual orientation: the bolt lay across the stock. Explicitly switching rotation mode corrected that trial.

![Blender close-up of the loaded bolt; historical version 296, before the coordinated string motion shown above](/images/castle-halberdier-01/marksman-loaded296.png)

Release timing needs a configuration change. Both original resource archives set the Marksman’s climax to frame 7 in `CRANIM.TXT`. VCMI emits a separate projectile there and pauses the body animation while it travels. The new mod draft uses the level-aim frame 4, keeping the loaded bolt visible in frames 1–3 and hiding it from frame 4. This uses `graphics.missile.attackClimaxFrame`; no engine source was changed. <s>The draft is not installed.</s> Package 479 now installs this setting.

The flying bolt has separate renders for the nine directions in the original `PLCBOWX.DEF`, retaining its 30×30 logical canvas at 2x. The enlarged inspection grid below does not establish final display scale relative to the loaded bolt. A launch-offset draft is calculated from the loaded bolt centre in the current battle camera; it still needs native battle verification.

![Nine projectile direction renders from the Meshy bolt, each sourced from a 60×60 image](/images/castle-halberdier-01/marksman-projectile297-directions.png)

<s>These are projectile drafts. String cocking and release, the trigger, remaining actions and full integration are unfinished. No additional Meshy credits were used.</s>


</details>

<details>
<summary>Rejected first bolt import</summary>

![The rotation-mode mistake left the bolt across the stock](/images/castle-halberdier-01/marksman-loaded295-rejected.png)

</details>

<details>
<summary>Rejected first assembly</summary>

<s>| Marksman | Native eight-frame front-shot body candidate, 2x offline comparison and 113-time local checks complete; projectile work, hand detail, remaining actions and integration pending |</s>

<s>| Marksman | Cuffs and grips revised; carry-to-aim study checked at 33 times. Hand detail, full native actions and game integration pending |</s>

<s>| Marksman | Independent Meshy hands assembled and following body wrists; cuff points and grip intersections remain, full motion pending, not installed |</s>

<s>Separate Meshy body, crossbow and hand; local hand rig and 15 joint probes complete, grasp and body assembly pending. Full actions unfinished; not installed</s>

![Candidate 260: excess wrist geometry outside the cuff, with an unreachable left wrist target](/images/castle-halberdier-01/marksman-assembled260-rejected.png)

</details>

<details>
<summary>Donor-hand repairs (historical candidates, not final acceptance)</summary>

<s>| Marksman | Separate Meshy body and crossbow, 28 finger bones; wrist repair and low carry remain under review. Full actions unfinished; not installed |</s>

The wrist repair now fits the original Meshy body's cross-sections and trims the cuff with a plane. An earlier deletion trial also cut the coat and was rejected. The corrected hand selection preserves 37,330 central-body vertices and 60,952 polygons. All ten individual digit-control checks pass again. Close-up edge defects remain, so this is not final art acceptance.

![Candidate 205 wrist close-up; posed continuity remains under review](/images/castle-halberdier-01/marksman-wrist205.png)

Cross-section measurements place the wooden stock centre about 2.1 cm above the model origin. Trial 206 uses the measured centre and reduces hand spacing; both wrists reach their targets in all three test poses. Distributing some rotation through the forearms reduces the level-aim wrist distortion in trial 208. Neither result establishes finger contact with the stock.

![Level-aim trial 208, with finger contact still unaccepted](/images/castle-halberdier-01/marksman-level208-draft.png)

The previous carry was too high, with the rear stock extending toward the shoulder. Low-carry trials 210–211 move the grips toward the rear and adjust the Meshy crossbow's proportions, lowering its front toward the original silhouette. Trial 210 puts a hand inside the torso and is rejected. Trial 211 moves the grip forward, but wrist orientation, thumb opposition and contact remain unnatural; it is not adopted. Original-pose fitting and grasp repair continue, with no full animation or installation for this body. This pass incurred no new API charges.

![Unaccepted low-carry trial 211 after placement changes](/images/castle-halberdier-01/marksman-low211-draft.png)

A subsequent joint-direction check found that the four fingers curled away from the stock. Trial 212 reverses their flexion, bringing the fingertips around the wood. The close-up still shows intersections, an unfinished thumb and distorted wrist skin. It remains a rejected grasp candidate; fixing the rotation sign does not finish the hands.

![Trial 212 close-up after reversing finger flexion; intersections and wrist defects remain](/images/castle-halberdier-01/marksman-grip212-draft.png)

Trimming excess hand geometry beneath the cuff reduced the exposed skin in low-carry trial 218. Smooth wrist weights alone had made it worse and were discarded. A subsequent bone-contact fitter reduced sampled skin vertices inside the stock from 2,843 to 1,772, but left substantial intersections. Moving the palm and fitting again produced extended little fingers and distorted skin in trial 223, shown below. These grasp trials are rejected. <s>Finger-joint placement and cross-finger weights need inspection before further fitting</s>; the weight inspection and revision follow below; vertex counts alone do not establish a usable grip.

![Rejected trial 223: contact fitting produces unnatural fingers and skin deformation](/images/castle-halberdier-01/marksman-contact223-rejected.png)

The next check found cross-finger influence that the earlier whole-hand isolation test had missed. A first region selector also misclassified vertices between nearby fingers; the corrected check uses disjoint connected fingertip regions. Across ten single-joint probes, unintended motion in those regions fell from 5.15 mm to below 0.002 mm after the weight revision. The body's and hands' rest geometry is unchanged.

A hard division of all finger weights produced spikes in the webs and was rejected. Candidate 233 retains the palm transitions and changes the weights gradually toward the fingertips. This result covers the tested fingertip regions, not the complete grasp: the low-carry render still has stock intersections, wrist defects and an unfinished thumb. Full actions and game installation remain pending.

![Single middle-finger control probe after the weight revision; a Blender diagnostic, not a finished grasp](/images/castle-halberdier-01/marksman-digit233-probe.png)

</details>

<details>
<summary>Earlier grip and hand trials</summary>

<s>| Marksman | Low-carry trials 173 and 174 rejected for shoulder distortion; empty-handed Meshy body 175 generated. Posed rig and separate crossbow remain unverified; not installed |</s>

Combined trial 180 inverted the crossbow and bent the wrists incorrectly; it is rejected. Trial 181 corrects the orientation, but the hands remain open and carry is higher than the original. A subsequent uniform finger-curl trial, 182, compresses parts of the fingers and is also rejected. Individual finger fitting and original-pose registration are next. The combined images below are drafts, not installed artwork.

![Rejected combination 180, with inverted crossbow and wrist problems](/images/castle-halberdier-01/marksman-combined180-rejected.png)

![Combination 181: orientation adjusted; finger contact and carry height remain unfinished](/images/castle-halberdier-01/marksman-combined181-draft.png)

Close-up inspection found that some fingers in body 175 are fused in the mesh. The earlier full-body and shoulder reviews missed this defect; the existing geometry cannot directly support independent five-finger motion.

![Original hand from body 175, with partially fused fingers](/images/castle-halberdier-01/marksman-hand183-fused.png)

Trials 185–190 reuse five-finger geometry from the earlier Meshy Halberdier body, replacing only the hands while retaining the Marksman body and shoulder rig. Initial seam and curl trials failed. Subsequent welding and weight smoothing produced a rig with 28 added finger bones. After reopening the scene, ten individual digit-rotation checks left the body and opposite hand unchanged; hand vertex weights sum to one. These checks establish control isolation, not a correct grip.

![Replacement five-finger geometry; the wrist seam is still unfinished and unaccepted](/images/castle-halberdier-01/marksman-hand190-draft.png)

Combined trial 191 still has wrist-seam and contact problems. Its low-carry left wrist misses the target by about 2.5 cm, so it remains rejected. Wrist repair, thumb opposition and two-hand weapon placement precede full animation. This pass reused existing Meshy geometry and incurred no new API charges.

![Rejected level-aim trial 191, showing remaining wrist and grip problems](/images/castle-halberdier-01/marksman-combined191-rejected.png)

</details>

<details>
<summary>Earlier Marksman reviews (historical scope, not current acceptance)</summary>

<s>| Marksman | remote candidate 02: holding, moving, three-direction shooting, hit, defence, death and move transitions pass; melee candidate 01: separate sword mesh plus 6-frame three-direction attacks pass; three-direction projectile layers plus left/right turns pass; presentation groups next |</s>

The old Marksman rig could make a front shot but could not reliably lift the light crossbow to the original high-angle direction, so its draft was not treated as an upward attack. Candidate 02 starts again from an independent blue-and-gold crossbowman mesh and Meshy humanoid rig; eight static angles retain the crossbow, both hands and sleeve cuffs. A native six-frame `CHCBOW.DEF` upward attack then moves from low level aim through raise and high release into recovery. Front and side key frames keep the grip, crossbow, hands and sleeves continuous. Its eight-frame front shooting body action also passes: low carry, level aim, short release recoil and recovery retain the crossbow, both hands and sleeve cuffs in front and side review. A separate eight-frame downward shooting action then passes as well: the crossbow presses into a low aim and recovers after release while hands and sleeve cuffs remain continuous from both views. A third eight-frame upward shooting action then passes: it moves from low carry through high aim/release and recovery while crossbow, hands and sleeve cuffs remain continuous in both views. All three ranged shooting body Actions are saved independently; projectile VFX remains a separate layer. Hit and defence were independently reviewed on the same candidate: the six-frame hit uses torso recoil while both hands retain the light crossbow, and the ten-frame defence raises it across the chest without detachment in either view. These are Blender character-motion reviews only, with no DEF output or game installation.

<s>Candidate 02’s first eight-frame moving pass used excessive hip, knee and ankle amplitude, reading as a crouched jump in side view, so it is rejected and will not enter export.</s>

The same rig’s eight-frame holding and revised moving review then pass. The revision retains the clearly alternating stride in the original `CHCBOW.DEF` moving frames while removing the excessive crouch; front and side checks preserve the low carried crossbow, both hands, robe and legs. This remains local Blender review work rather than DEF or game art.

<s>Candidate 02’s first six-frame death probe attempted a root-side fall, but its terminal frames did not form a stable physical collapse and instead stretched the crossbow-hand chain. It is rejected and will not export. Death needs independent ground anchoring and a local arm-weight repair.</s>

Import hierarchy review showed that the Marksman mesh and Armature are siblings: rotating only the rig cannot physically carry the full model into a fall. The repaired version gives both a shared carrier parent and drives the sideward collapse through that parent. Its six-frame death now passes, resolving to a low fallen silhouette while the crossbow and both hands remain intact in front and side review.

Move-start and move-end were each reviewed against their native two-frame group: start enters the restrained stride from the low-carry standing pose, while end returns to it. Both retain crossbow, hands, robe and legs in front and side views.

The original six-frame `CHCBOW.DEF` `attack_front`, `attack_up` and `attack_down` groups are melee motions in which the Marksman draws a short sword; the crossbow-bearing remote candidate cannot stand in for them.

Remote candidate 02’s eight-frame front shot now also has a separate three-dimensional bolt layer. A Meshy bolt generated from its own concept passes static review, seats in the crossbow through aim/release, then travels left-forward. <s>The first probe launched it from the waist; the second moved it forward but remained below the crossbow groove; the fourth lifted the attachment too far above it. All three are rejected and will not export.</s> The fifth pass retains the bolt body and a coherent origin/flight path in front and oblique key frames, so the front projectile layer passes. <s>The first up-shot bolt layer reused the horizontal axis, so it neither seated on the raised groove nor remained in frame; it is rejected.</s> The second turns the bolt with the elevated crossbow, seats it through release and sends it upper-left over eight frames; front and oblique review pass. The down trajectory remains to be authored. This is still neither DEF output nor game installation. <s>A separate Meshy sword was generated for an overlay on remote candidate 02, but the crossbow is embedded in that mesh and its imported hand space does not provide a stable attachment: the sword detached, so the overlay is rejected and will not export.</s> Melee candidate 01 therefore starts again from a complete sword-bearing Marksman Meshy mesh and humanoid rig. Static front, side and rear review retains the sword in the right hand. Its three six-frame actions now pass too: front moves from low guard through raised wind-up into a forward slash and recovery; down resolves from a high wind-up into a low strike; up rises from low guard into a high upward strike and returns. The right-hand sword grip remains continuous in front and side key frames. This remains private Blender motion review, with no DEF output or game installation.

</details>

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

Crusader and Monk each now use their own Meshy humanoid rig (an additional 5 credits each); neither reuses the Swordsman's mesh or weights. The Crusader's eight-frame holding and walking reviews pass intact. Its seven-frame double-strike test is rejected because part of the sword remains weighted to the body chain, and will return after a local rebind. <s>The Monk's six-frame holding and walking reviews pass; its ten-frame front cast is saved as a gesture calibration. The robe remains intact, but the raised-hand amplitude needs refinement, so it is not a final spell delivery.</s> This was a continuity review of the gray-robed model, whose identity was rejected on September 18, 2026.

These trials show that a convincing Meshy surface is not automatically an animatable continuous character topology. The next pass will rebuild local weights from visible joints and connected regions. Until then, these are Blender review assets only: no creature frames, shadows, overlays, DEF output, or game installation.

<s>An Angel two-arm sword probe shows the sword remaining on the body chain while both arms move. It is rejected before attack authoring; a local component-level sword rebind is needed. </s>

After static review of the Angel Meshy humanoid rig, Astra did not rotate the whole wing as one object. It located wing components by position among 1,356 connected components of the shared surface. Four local root/tip bones control 10,319 wing vertices; an eight-frame restrained wing review keeps armour, two-handed sword and torso still. This is a holding-wing result only: flight and sword motion remain to be authored.

Angel now also has a seven-frame `CANGEL.DEF` moving review: root and tip bones drive the existing classified wing regions through a full flap, while the torso and two-handed sword remain continuous in front and side checks. It is flight motion only, still without the remaining action groups, creature layers, DEF output or game installation.

Archangel completed the same local wing process on its separate mesh: 8,888 position-classified wing vertices are assigned to four root/tip bones. The eight-frame review keeps upgraded armour, torso and two-handed sword stable. It does not reuse Angel vertex groups, and is not flight or game installation.

Archangel now has its own seven-frame `CRANGL.DEF` moving review, built from its separate wing mesh and weights. Front and side checks keep both wings, upgraded armour, torso and sword continuous through the flap. It does not cover its remaining action groups or game-ready layers.

Cavalier and Champion each ran a local horse-and-rider probe against their own meshes and original alpha-height anchors. Holding, walking, front lance, move start and move end pass crop checks; a three-frame side review also keeps the horse legs, rider, barding and lance connected through the gait. This is still a probe: each needs its complete 87-frame action set and per-action timing before export.

<s>Royal Griffin uses its own mesh for four root/tip wing bones and 24,793 component-classified wing vertices. Its eight-frame holding wing review passes; its ground gait will not reuse the rejected Griffin leg/tail weights.</s> Rechecking `CRGRIF.DEF` corrects the premise: its four-frame `MOVING` group is airborne flight, not a terrestrial gait. The first split root/tip flight attempt tears neck, chest and wing-root components, so it is rejected. A separate 30-credit Meshy candidate now passes initial eight-view static review with its airborne wings, talons, rear lion legs and tail present. <s>Its replacement assigned complete connected wing components to one shoulder bone per side, which removed the earlier wing-root tearing; chest feather defects remained in side review.</s> Candidate 03 was generated from a front-facing clean-plumage concept (30 credits): the chest improved, but side review exposed a near-planar wing spread, so it too is rejected. <s>Candidate 04 was generated from a strict three-quarter-volume concept and retained a real lion torso and layered wing roots, but chest mesh holes persisted after both shallow-geometry and UV-only repair probes.</s> It is rejected; Royal Griffin now moves to component-model reconstruction before a four-frame airborne review. No rejected candidate has DEF output or game installation.

<details>
<summary>History: gray-robed Monk rejected for identity on 2026-09-18</summary>

<s>The Monk’s original ten-frame gesture calibration was described as a stronger native-count front cast with hands opening and rising. A re-review of its rendered peak frame shows it remains near the clasped holding pose, so that claim and acceptance are withdrawn; the clip will not seed the remaining cast groups.</s>

<s>A second ten-frame Monk front-cast rebuild used the original `CMONKK.DEF` single-hand-forward silhouette. Its front and side peak frames still remain close to clasped holding, so the current Meshy rig is rejected for casting and a separate rig candidate is required.</s>

<s>A second Monk mesh candidate was generated from the reviewed concept as a 20k-quad, 4K-texture Meshy asset with image enhancement disabled (30 credits). Its eight-view static review passes: robe, sleeves and hands remain readable from every side. Its new 5-credit humanoid rig still fails all four arm-axis probes: each either stretches the integrated cloak/sleeve surface into a long sheet or collapses the hands. The candidate is therefore rejected for casting; static acceptance alone is not a motion delivery. Re-running automatic humanoid binding is not a repair for this robe topology.</s>

<s>A third Monk candidate was built from a new single-hand-forward concept, again as a 20k-quad, 4K-texture Meshy asset with enhancement disabled (30 credits), followed by a 5-credit humanoid rig. Its static eight-view and rig-rest checks preserve a distinct casting hand, cuff, support hand and torso. A low-range arm test also remains continuous, but the native ten-frame `SHOOT_FRONT` review only produces wrist-level movement; increasing the range reintroduces sleeve deformation. It does not recreate the original gather, forward cast and recovery, so this character-only clip is rejected. A local sleeve/hand separation is now required; no VFX, DEF or game installation was made.</s>

<s>The required local correction is now in place. Astra audited the automated weights and reweighted only the visible casting-arm vertices that already had strong `RightArm` / `RightForeArm` / `RightHand` membership, removing their erroneous torso and leg memberships. The repaired native-count ten-frame `CMONKK.DEF` front-cast review has a readable gather, forward-palm peak and recovery. Full front frames and side start/peak/recovery keep sleeve, wrist, hand and robe continuous. This is a character-motion review only: spell VFX, DEF assembly and game installation remain separate.</s>

<s>The first Monk front-cast VFX test used a global offset from the imported `RightHand` matrix. Its glTF hand-tail transform is malformed, placing the independent particles at the torso in side review, so the test was rejected. The replacement uses a per-frame selection of evaluated leading-palm mesh vertices in front-camera space, then places nine independent 3D particle meshes at that measured hand region. All ten front frames and side start, peak and recovery keep the pulse at the casting hand. This remains a Blender review only, without DEF assembly or game installation.</s>

<s>The native nine-frame `CMONKK.DEF` downward cast now uses the same local sleeve/hand rebind. The forward palm drops to waist height at the peak, then returns. Full front frames and side start, peak and recovery keep hand, sleeve, shoulder cape and robe continuous. It is character motion only; downward VFX, DEF assembly and game installation remain separate.</s>

<s>The Monk’s ten-frame upward cast now has its independent three-dimensional hand VFX: one blue core and eight physical spark meshes pulse with the raised right hand. The first screen-space vertex range anchored it on the chest; a local offset remained below the palm, and a later world offset occluded the hood. All were rejected. The repaired version reads the rebound right-hand bone in world space and applies a palm-side world offset, keeping hand, hood and VFX distinct at peak, start and recovery. This remains Blender review, with no DEF or game installation.</s>

</details>

### Archer identity and rig correction (2026-09-19) {#archer-identity}

The Archer is back in modeling. Comparing the old body with `CLCBOW.DEF` at battle scale exposed a mismatch: the long dark tunic, gold trim and tall pointed helmet had survived the earlier motion checks. The reference has a shorter blue tunic, visible white clothing and a low brimmed helmet. The old shooting experiments are retained below as history; their continuity results do not establish a faithful character design.

![Original Archer and the rejected old body at several camera angles](/images/castle-archer-829/old-identity.png)

The replacement reference was made with built-in image generation. Meshy 7 then generated the textured body through its image-to-3D API: 300,000 target triangles, 4K textures, image enhancement disabled, 30 credits. Its separate humanoid rig cost 5 credits. The body reference deliberately leaves out the crossbow so that the weapon can remain rigid and both hands can be posed around it.

![Body concept used as the Meshy reference; this is not a Blender render](/images/castle-archer-829/concept.png)

![Actual 1200-pixel Blender still of the new Meshy body, before posing and weapon attachment](/images/castle-archer-829/body-hq.png)

![Eight Blender views of the generated body](/images/castle-archer-829/turnaround.png)

The rig review found a normalization bug in our tool. Blender imported an unlinked bone-control sphere alongside the character, and its bounds were counted as part of the body. Requesting a 1.7 m character produced a 1.07 m body with its feet 0.63 m above the floor. The tool now excludes objects referenced as bone custom shapes before measuring the model; a synthetic, asset-free regression test checks poses before and after reopening the scene. The correction is in [the public tools repository](https://github.com/yzh119/h3-art-pipeline/commit/4faebac).

![Same camera before and after excluding the bone widget from normalization](/images/castle-archer-829/normalization.png)

Raising the arms also stretched two short edges at the upper back to about seven times their rest length. Their endpoints had inconsistent upper-arm influence. A first local weight transfer used a hard cutoff and made the boundary worse: thirteen edges exceeded six times their rest length. That attempt is rejected. A smoothly tapered transfer to the spine reduced the largest measured raised-arm ratio to 3.03; none exceeded six in the four sampled poses. The measurement includes edges longer than 1 mm at rest and does not establish collision-free skinning across a complete animation.

![Rest, raised arms, spread arms and one step pose, viewed from three angles in Blender](/images/castle-archer-829/probes.png)

All four three-quarter images reproduced pixel-for-pixel after reopening the saved scene. These are discrete deformation probes. The step has not been grounded into a walk cycle, and <s>the body still needs the light crossbow, hand grips, original action timing, shadows and game integration.</s> The later hand-attachment section records the current fitted trial; full actions and game integration remain unfinished. An unnecessary image-background cleanup also changed the cloth design; it was discarded and the initial reference above was used. The Archer replacement has not been installed.

A subsequent light-crossbow placement test reused the separate Meshy weapon from the Marksman work. The first setup wrote Euler angles to an object still in quaternion mode and rendered both trials at the same frame; those images were discarded. After fixing both errors, two-handed low carry left the support wrist 5.3 cm beyond its reachable target. Single-handed carry is the next basis for the holding pose. A later attempt to point each hand's weighted vertex centroid toward the stock merely clasped both hands over it. That grip is also rejected: individual fingers, palm roll and contact points still need a dedicated pass. The saved trial reproduces both reviewed three-quarter images after reopening, including these visible defects.

![Rejected carry and hand-orientation tests; these are Blender development images](/images/castle-archer-829/grip-failures.png)

#### Separate hand geometry

Close-up inspection explained why rotating the original hands did not produce a grip. The four long fingers were joined in the mesh, despite the visible grooves between them. Connectivity checks after identifying coincident UV-seam vertices still found a single non-thumb component below several cuts through the fingers.

An older Meshy hand from the Halberdier work had separate digits. We tried transferring it, adding finger bones and bridging the wrist. The curled fingers became pointed and collapsed, and the wrist retained a conspicuous shape and texture mismatch. The transfer is rejected for this Archer; the original body remains available unchanged.

![Original joined fingers and rejected donor-hand, curl and wrist attempts in Blender](/images/castle-archer-849/failures.png)

A new single-hand reference was generated with the built-in image tool, with all five fingers spread and a short bare forearm. Meshy 7 generated a separate textured hand through the API for 30 credits, with a 100,000-triangle target and 4K textures. The returned mesh has 102,884 faces. This request only supplied geometry and textures; Astra authored the finger rig locally.

![Single-hand image-generation reference submitted to Meshy](/images/castle-archer-849/concept.png)

![Actual 1200-pixel Blender render of the new Meshy palm before posing](/images/castle-archer-849/palm.png)

![Actual Blender render of the generated hand from the back](/images/castle-archer-849/back.png)

The new mesh has four distinct distal finger components and a separately identifiable thumb. A local rig adds fourteen finger bones plus palm and forearm controls. The first curl exposed dark seams; coincident UV vertices were then welded while retaining face UVs, reducing the vertex count from 59,145 to 51,446. Creases remain visible around the bent joints and still need review.

![Moderate finger-curl probe in Blender, after welding; joint creases remain under review](/images/castle-archer-849/curl.png)

![Side view of the same moderate curl](/images/castle-archer-849/curl-side.png)

Five separate digit-motion probes move the selected finger while the other fingers' fully weighted core vertices remain within numerical tolerance. This test excludes shared web and palm regions and does not establish collision-free motion. Three saved curl views reproduce pixel-for-pixel after reopening. <s>The hand is still an isolated modeling candidate: it has not replaced the Archer's hands or been fitted to the trigger and support grip. Mirroring, wrist attachment, skin-tone matching and full weapon contact remain unfinished.</s>

#### Hand attachment and crossbow pose

The separate Meshy hand is now attached on both sides of the blue-and-white body as an offline modeling trial. The first transfer left an obvious open cut at the forearm. We resampled both cut contours, fitted the donor forearm to the body and assigned the seam to the same forearm transform. In the earlier attached aim pose shown below, the largest sampled seam-pair separation is about 0.013 mm. This is a registration check for one pose, not a watertightness or full-animation claim.

![Initial open cut and matched wrist contour, before the later color transition](/images/castle-archer-875/wrist-comparison.png)

The first fitted hand bent its fingers sideways: the imported armature's scale turned a direction vector into a vector of length 100, and the bone-roll setup required a normalized direction. Correcting that input aligned the local finger axes. A later overhand grip reached the trigger but bent the wrist excessively, so that pose was also rejected.

![Rejected finger-axis and over-bent-wrist trials](/images/castle-archer-875/grip-history.png)

<s>The current trial brings the index control point near the trigger while the other hand supports the stock.</s> Surface measurements later found that the sampled support-palm region was still about 49 mm from the weapon; proximity of a fingertip control point did not establish a grip. Forearm rotation reduces the support wrist's twist. A material blend samples the body's skin color at the cut and fades into the generated hand texture; the source textures remain unchanged. The webbing between fingers still stretched sharply under curl, so part of the root influence was returned gradually to the palm. The largest measured hand-edge stretch fell from about 8.85× to 5.92× for rest edges longer than 0.3 mm. That remaining deformation still needs visual review.

![Earlier 1200-pixel Blender still of the fitted aim trial; no animation or game installation is implied](/images/castle-archer-875/body.png)

![Earlier close-up of the trigger and support-hand study; creases and contact remain under review](/images/castle-archer-875/grip.png)

The saved scene reproduces both of these views pixel-for-pixel after reopening. The hand-to-stock surface contact, thumb position, joint creases and the original Archer stance remain unfinished. No native action sequence, sprite package or new Archer installation was made in this step.

The next contact study moves the support palm toward the stock and adjusts each finger separately. Raising the trigger hand above the stock produced an excessive wrist bend and was rejected:

![Rejected raised-wrist grip, rendered in Blender](/images/castle-archer-885/rejected-wrist.png)

The following static draft used a lower trigger wrist and revised finger curls. Both hands now sit closer to the weapon, but the index finger still needs a proper trigger pose, and the wrist transition remains visible. Surface-distance and face-normal checks help locate gaps and possible intersections; they do not establish a usable grip. <s>This remains a static modeling study, with original stance, shooting motion and game integration still pending.</s> The raising probe below follows this static stage; a complete shooting action and game integration are still pending.

A further correction makes the palm orientation axes perpendicular before applying the pose, removing unintended scale from the hand transform. The figures below include this fix; the [preceding full-body](/images/castle-archer-885/body.png) and [grip trial](/images/castle-archer-885/grip.png) remain as history.

![Earlier static Blender contact study](/images/castle-archer-888/aim.png)

![Earlier hand close-up; trigger placement and wrist finish were unresolved](/images/castle-archer-888/grip.png)

The next grip approaches the trigger from below. Its index-finger surface sample is fitted toward a selected point on the trigger, followed by a small wrist adjustment. The close-up still shows the unfinished skin transition and crowded fingers; this is not an accepted grip.

![Revised trigger-hand study, actual 1200-pixel Blender render](/images/castle-archer-895/trigger.png)

An eight-frame raising probe now moves the crossbow and both arms from chest height toward the shoulder. Initial interpolation let the right-hand anchor slip by about <s>4</s> 3.2 mm relative to the weapon. Baking intermediate arm poses reduced the largest sampled slip to about <s>0.064</s> 0.051 mm across 113 times, while the export remains eight frames. The corrected distances include the weapon’s 0.8 scale and are in world units. These measurements track hand-bone anchors, not skin contact or intersection. The raised still reproduces pixel-for-pixel after reopening the scene.

![Raised crossbow in the new-body motion probe, actual 1200-pixel Blender render](/images/castle-archer-895/raised.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-archer-895/raise.mp4"></video>

The preview plays at five frames per second to expose the movement. <s>It only tests raising and lowering: the original stance and firing rhythm, moving string, bolt release, remaining actions and game installation are unfinished.</s> This earlier raising probe is followed by the front-shot candidate below; the full action set and installation remain unfinished.

The front-shot candidate now follows more of the original eight-frame sequence: right hand at the waist, two-handed aim, an upward recoil and lowering. The original animation data places projectile release on frame 7, using one-based numbering; VCMI converts that to index 6. This candidate keeps that timing.

It reuses the Meshy crossbow and bolt from the Marksman study, including the locally repaired bow limbs and separate animated cord. The first recoil pivot put the weapon above the frame and obscured the face; lowering the pivot produces the revised pose below. The stance, skin deformation and grip still need review.

![Rejected recoil with the weapon too high and the face obscured](/images/castle-archer-900/rejected-recoil.png)

![Revised aim, actual 1200-pixel Blender still](/images/castle-archer-909/front.png)

![Revised upward recoil, actual 1200-pixel Blender still](/images/castle-archer-909/recoil.png)

The loaded bolt follows the cord until it disappears from the body render on frame 7. The cord and bow limbs release together. Reopening and sampling 175 times checks the cord length, bolt-tail attachment, central-stock preservation and bolt visibility; those mechanism checks pass. They do not establish collision-free hands or a finished firing pose. The flying projectile, <s>directional shots</s>, remaining actions, layered export and native installation are still pending. Upward and downward shooting candidates now follow below; neither is installed.

![Loaded Meshy bolt and drawn cord, viewed from above in Blender; unfinished wrist seams remain visible](/images/castle-archer-909/loaded.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-archer-909/front.mp4"></video>

This eight-frame preview runs at five frames per second. The empty space after release is deliberate: the flying projectile belongs to a separate game layer and has not been added to this body-only preview.

The upward and downward candidates add changes to the torso and head as the crossbow changes angle. The right hand still starts near the waist and reaches the trigger before aiming. All three shooting directions now have eight-frame body trials, with release on frame 7; the new directions remain appearance candidates.

![Upward aiming candidate, actual 1200-pixel Blender still](/images/castle-archer-909/up.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-archer-909/up.mp4"></video>

![Downward aiming candidate, actual 1200-pixel Blender still](/images/castle-archer-909/down.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-archer-909/down.mp4"></video>

Both previews play at five frames per second. Each scene passed 175 sampled checks of cord length, bolt-tail attachment, central-stock preservation and visibility timing after reopening. The aiming render also reproduces across all RGBA channels. These checks leave grip, wrist finish and reference fidelity open. The existing Meshy projectile and nine direction-frame trials can be reused, but their size and emission position still need calibration against this Archer before packaging.

The new eight-frame holding loop lowers the crossbow beside the body, with the free hand near the waist and a small breathing motion. An extra authoring key closes the loop; only eight frames are rendered. Comparing the evaluated visible meshes at the start and loop boundary gives the same positions. Each shooting candidate now starts from that holding pose, with less than 0.001 mm of sampled mesh-position difference.

![Low crossbow holding candidate, actual 1200-pixel Blender still](/images/castle-archer-909/holding.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-archer-909/holding.mp4"></video>

For this candidate, holding leaves the cord relaxed and the bolt hidden. The cord is drawn during the opening of the shot; the bolt becomes visible on frame 3 and disappears on frame 7. This is an authored visibility and mechanism sequence, not a completed hand-loading action. The final shot pose also still differs from holding, so the return transition needs work.

The three shooting videos and their current stills above have been regenerated. Earlier previews remain available for [front](/images/castle-archer-900/shoot.mp4), [up](/images/castle-archer-903/up.mp4) and [down](/images/castle-archer-903/down.mp4), along with their earlier [front](/images/castle-archer-900/aim.png), [up](/images/castle-archer-903/up.png) and [down](/images/castle-archer-903/down.png) stills. <s>Holding and the three shot directions now account for four body-animation candidates;</s> the walking candidate below adds a fifth group; wrist finish, other actions, projectile calibration, layered export and game installation remain open.

The eight-frame walking candidate carries the crossbow in both hands near the waist, following the original moving reference. The shoulders counter the hips while the legs alternate; the held weapon limits the arm swing. The first pass lowered the hips too far and looked crouched, so the revised pass raises the body and centers the foot paths beneath the hips.

![Earlier crouched walking trial, retained as a failed pose study](/images/castle-archer-914/crouched.png)

![Revised two-handed walking candidate, actual 1200-pixel Blender still](/images/castle-archer-914/walk.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-archer-914/walk.mp4"></video>

Actual sole-vertex checks found about 2.7 mm of ground penetration in the intermediate pass. Foot targets now receive a small correction from the deformed sole surface. At 129 sampled times, the revised soles stay above the reference floor, with less than 0.9 mm of stance clearance. The visible meshes also match at the loop boundary, and the reopened first-frame render matches across all RGBA channels. These checks do not validate cloth intersections or sliding at the game's actual movement speed. The preview runs at five frames per second; movement transitions, appearance, the other actions and installation remain unfinished.

The Archer now also has two-frame start and stop drafts. Starting raises the lowered crossbow toward the two-handed carry; stopping releases the right hand and lowers it again. These are actual Blender renders, with start on the left and stop on the right. <s>This brings the candidate set to seven groups and 44 body frames, still uninstalled.</s> The hit, defence and hover drafts below bring it to ten groups and 68 frames, still uninstalled.

![Four Blender draft frames for the Archer movement start and stop](/images/castle-archer-916/sheet.png)

[Full start frame two](/images/castle-archer-916/start-02.png) · [Full stop frame two](/images/castle-archer-916/end-02.png)

The final stop pose now matches the first holding pose at the mesh level, and reopened renders reproduce the saved candidates. Entry into stopping remains unresolved: VCMI ends movement by travel progress, without guaranteeing a particular walking phase. Across all eight possible walking poses, the maximum visible-mesh displacement into this fixed stop frame is about 0.28–0.32 metres in model space, not screen pixels. Leg recovery and weapon speed still need playback review; these transitions are unfinished.


A six-frame hit-reaction draft now adds a backward flinch, a lifted leg, an opening free arm and an upward crossbow follow-through. The first pass looked like a knee lift and barely threw the free hand outward. The second moves the foot forward, throws the hand back and raises the bow further. <s>The elbow and wrist still look stiff, and recovery into low-bow holding remains unfinished.</s> The free-arm revision follows below; holding recovery remains unfinished. Appearance has not passed review.

![Earlier hit draft with insufficient leg extension and free-hand throw, retained as a failed pose study](/images/castle-archer-921/earlier.png)

This pass revises the free arm. In the old third frame, the right elbow rose about 9.7 cm above the shoulder while the palm retained its holding orientation. The throw now extends farther and the palm follows the forearm; the right elbow stays below the shoulder at all 161 checked times. One intermediate version lowered the elbow but looked like a shrug. Another brought the elbow control direction close to the arm axis and produced a rapid flip between poses. Both were discarded.

[Earlier raised elbow](/images/castle-archer-929/raised-elbow.png) · [Discarded palm-up version](/images/castle-archer-929/palm-up.png)

With the control direction revised, maximum adjacent elbow displacement at 1/32-frame sampling fell from 4.5 cm in the failed intermediate pass to 1.2 cm. This compares equal sampling intervals and does not establish final playback smoothness. Reopened checks cover soles, the bow-hand anchor and frame bounds, and the second-frame render reproduces exactly. The still and video below now show this version; the [previous still](/images/castle-archer-921/hitted.png), [frame sheet](/images/castle-archer-921/frames.png) and [video](/images/castle-archer-921/hitted.mp4) remain as history. Silhouette, skin seams and the return to holding still need work.

![Hit frame two with the revised free arm, actual 1200-pixel Blender render](/images/castle-archer-929/hitted.png)

[View all six frames](/images/castle-archer-929/frames.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-archer-929/hitted.mp4"></video>

After reopening, 161 sampled times keep the selected actual sole vertices above the reference floor, with about 0.5 mm of support-foot clearance and less than 0.08 mm of holding-hand anchor drift. The reopened second-frame render matches in every RGBA channel. This does not establish collision-free hands, weapon, cloth or legs. <s>There are now eight candidate groups and 50 body frames; ten groups, another 50 frames and game export remain unfinished.</s> <s>The defence draft below adds nine frames, bringing the current total to nine groups and 59 frames.</s> Defence and hover drafts follow below; the total at the hover stage was ten groups and 68 frames.

The stop-entry investigation also isolated ankle jumps of roughly 25–29 cm in the worst phases, alongside the weapon jump. In the current source, the same duration parameter scales walking frame rate and travel rate, yielding nominally five sprite frames per hex. An eight-frame loop can therefore end in different phases; adjusting walk duration alone cannot align every stop. The stop poses and actual game playback still need review.


The Archer now has a nine-frame defence draft. Following the original sequence, both hands raise the crossbow in front of the face as the knees bend; frames four through six hold the guard before the bow lowers again. It reuses the repaired 3D crossbow with a relaxed string and no loaded bolt. This remains an offline candidate.

A later check found an omission in the defence review: the hand anchors were stable, but the left forearm stretched by about 5.6 cm in full guard. Forcing the hand onto its target concealed this from the earlier anchor-only check. The bow now sits 6.5 cm closer to the body and 4 cm lower while retaining the raised guard, and upper-arm and forearm lengths are checked as well. Across 257 sampled times, revised arm lengths vary by less than 0.001 mm and the sole checks still pass. This does not establish collision-free hands or cloth. The still and video below are updated; the [old defence still](/images/castle-archer-932/defence.png), [frame sheet](/images/castle-archer-932/frames.png) and [video](/images/castle-archer-932/defence.mp4) remain as failed-version history. Defence transitions into and out of holding are still unfinished.

![Defence after repairing forearm stretch, actual 1200-pixel Blender render](/images/castle-archer-940/defence.png)

[View all nine frames](/images/castle-archer-940/defence-frames.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-archer-940/defence.mp4"></video>

After reopening, 257 sampled times keep the selected actual sole vertices above the reference floor. Both hand anchors remain stable during the full guard in frames four through six. Grip changes are checked separately from holding the guard, since intentional repositioning is not drift. All nine frames fit the canvas and the reopened fourth-frame render matches in every RGBA channel. Full hand-to-weapon contact, cloth intersections and transitions in the game remain unverified. <s>This brings the candidates to nine groups and 59 body frames; another nine groups, 41 frames, layered export and game installation remain unfinished.</s> The hover action below adds nine frames, bringing the hover-stage total to ten groups and 68 frames, still uninstalled.


A nine-frame mouse-hover candidate now brings the crossbow to waist height, turns the torso slightly, looks down and returns to holding. The first pass rotated the bow the wrong way, increasing its projected length. Correcting the turn then exposed about 1.2 cm of left-forearm stretch while reaching the bow; moving the bow closer resolved it. The generation scripts now fail on unreachable hand targets rather than forcing the hand into place.

[First pass with the wrong turn direction](/images/castle-archer-940/wrong-yaw.png)

![Middle hover pose, actual 1200-pixel Blender render](/images/castle-archer-940/mouseon.png)

[View all nine hover frames](/images/castle-archer-940/mouseon-frames.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-archer-940/mouseon.mp4"></video>

After reopening, visible meshes at both hover endpoints match the first holding pose within 0.001 mm. Arm-length and sole checks pass at 257 sampled times, all nine frames fit the canvas and the reopened fourth-frame render matches in every RGBA channel. Checking exported integer frames in the other existing actions found the same substantial stretch in the old defence draft, now repaired; this does not cover all intermediate poses in those other actions. <s>There are now ten candidate groups and 68 body frames, with eight groups, 32 frames, appearance work, layered export and game installation still remaining.</s> This is the hover-stage count; the melee section below records current progress.


The melee reference swings a short blade in the right hand while the left keeps the crossbow at the side. The existing longsword's guard and proportions did not fit, so this pass uses the [Meshy Text to 3D API](https://docs.meshy.ai/en/api/text-to-3d) for a plain dagger. Meshy 7.1 geometry consumed 20 credits and texturing consumed 10; both tasks succeeded. The downloaded base-colour texture is 4096 pixels.

![Meshy dagger preview before local handle fitting](/images/castle-archer-949/meshy-preview.png)

In Blender, the dagger was fitted to about 40 cm total length, with a longer and thicker handle for the fist. It remains a separate mesh constrained to the right-hand bone; three small wrist-rotation probes match the expected transform. The reopened full-body render differs in ten pixels by one channel value, with identical alpha and frame bounds. <s>This is a static grip study; the three six-frame melee directions have not been authored yet.</s> This records the static study at 949; the three melee drafts follow below.

![Right-hand dagger and left-hand crossbow pose, actual 1200-pixel Blender render with grip acceptance pending](/images/castle-archer-949/body.png)

![Grip with restricted thumb twist; the web and skin seam still need work](/images/castle-archer-949/grip.png)

The first thumb closure put the selected fingertip-surface centre about 0.11 mm from the handle target, but visibly creased the thumb web and was rejected. Restricting joint twist reduces the creasing while leaving about 15 mm to that target; the grip is unfinished. The next check must consider whether the thumb should rest on the index finger or the handle, together with actual surface contact. <s>The editable dagger follows the hand, but hand appearance and melee motion remain unfinished. The body-animation count stays at ten groups and 68 frames.</s> This records stage 949. Hand appearance remains unfinished; subsequent melee drafts follow below.

![Rejected thumb closure: close to the target, with visible web deformation](/images/castle-archer-949/creased.png)

### Archer melee drafts (September 19)

The textured dagger comes from the Meshy API task above. Astra authored three attack directions in Blender, retaining six frames each. The right hand carries the constrained dagger while the left moves the crossbow aside. These are actual 1200-pixel Blender renders; the review videos play at five frames per second.

![Front cut](/images/castle-archer-962/front.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-archer-962/front.mp4"></video>

![Upward thrust; blade contrast still needs work](/images/castle-archer-962/up.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-archer-962/up.mp4"></video>

![Downward thrust with the blade ahead of the legs](/images/castle-archer-962/down.png)

<video controls loop muted playsinline preload="metadata" src="/images/castle-archer-962/down.mp4"></video>

The [18-frame sheet](/images/castle-archer-962/frames.png) shows the full sequences. Earlier drafts had [insufficient forward reach](/images/castle-archer-962/short-reach.png) and a [blade obscured by the thigh](/images/castle-archer-962/hidden-blade.png). After moving the downward wrist target, denser pose keys also repaired about 0.038 mm of intermediate sole penetration. A reopened scene sampled at 321 times keeps the selected soles at least 0.343 mm above the reference floor.

Front and upward attacks were sampled at 161 times each. Across all three clips, upper-arm and forearm length errors stay below 0.001 mm and the left-hand anchor error below 0.16 mm. All 18 renders fit the current canvas. Reopened fourth-frame renders differ in 3, 1 and 6 pixels respectively, by one channel value; alpha is identical. These checks exclude full surface collision. Fingers, thumb web, upward blade contrast, cloth and timing still need work. Both melee endpoints hold the dagger, so switching to ordinary holding remains unresolved.

<s>The Archer now has **13 candidate groups and 86 body frames**. Death, both turns and groups 9 and 10 account for the remaining five groups and 14 frames.</s> This records the melee stage; the turn draft follows below. Native registration, projectiles, layered export and game integration are unfinished. The full Castle roster remains in progress.



### Archer turn drafts (September 19)

The original turn gathers the bow and faces forward in two frames. The draft slightly raises the left foot, narrows the stance and brings the crossbow to waist height. The second clip reverses this motion. This is an actual 1200-pixel Blender render; finger and wrist appearance still need repair.

![Front-facing turn pose rendered in Blender](/images/castle-archer-965/front.png)

![Two frames per turn in the offline review camera](/images/castle-archer-965/frames.png)

Each reopened scene was sampled at 65 times. The selected soles stay at least 0.498 mm above the reference floor, arm-length errors remain below 0.001 mm, and hand anchors follow their changing grip targets within 0.05 mm. The reopened front-facing renders match in every RGBA channel. These checks do not establish a planted foot pivot or correct surface contact.

The original groups 9 and 10 exactly duplicate both frames of the corresponding left and right turns, across body, shadow and overlay layers. VCMI marks these duplicate groups as unused. The current count is therefore **17 groups and 94 frame entries**, with four new turn renders reused for another four entries. Six death frames remain unauthored.

VCMI changes facing between the two turn clips. Registration across that flip, the apparent change in bow side and transitions to holding remain unverified. These drafts are offline; grip, cloth, foot placement and game integration still need work.


### Monk identity correction (2026-09-18)

**Current status: the Monk is installed as a private test; see [installation and runtime checks](#monk-installation). The following sections retain the offline development history, including their earlier uninstalled status.**

The original `CMONKK.DEF` also exposes a design mismatch in the old Monk. It wears a plain brown hooded robe and a pale rope belt, with a shadowed face and both arms participating in forward and raised casts. The old model has a gray-black robe and long stole, with motion built largely around one hand. Earlier skinning and continuity checks did not establish reference fidelity; those trials remain in the history above.

![Original Monk holding and directional casts, enlarged with nearest-neighbor sampling for reference](/images/castle-monk-641/original-reference.png)

Built-in imagegen produced a new reference constrained to the brown robe, short shoulder cowl, pale rope and non-glowing face. A relaxed low A-pose separates the sleeves from the torso for modeling; it is not the intended holding animation. The Meshy 7 API request used a 300,000-triangle target, 4K textures and disabled image enhancement, costing 30 credits. The returned static mesh contains 311,994 faces. Humanoid rigging cost another 5 credits.

![New imagegen concept reference; not a Blender render](/images/castle-monk-641/concept.png)

![Actual 1536×1536 Blender still of the Meshy model; proportions and materials remain open to revision](/images/castle-monk-641/model-hq.png)

![Eight Blender views of the same mesh for inspecting the hood, rope, robe and cuffs](/images/castle-monk-641/model-turnaround.png)

Astra then posed both arms in gathered, forward and raised positions, checking two views of each. These probes avoid the large stretched sheets seen in the previous candidate, but finger contact and the cuff-to-cowl relationship need closer work. An initial scale check mistakenly included an untextured origin sphere supplied with the rig. Excluding that 80-face helper restored character-only height normalization; the original GLB remains intact.

![Actual Blender pose probes on the new rig; not complete animation or a native game capture](/images/castle-monk-641/two-arm-probes.png)

<details>
<summary>Pose-only checkpoint, September 18; superseded below</summary>

<s>Gray robe and long stole rejected. Brown-robed model 641 and a new Meshy rig have static turnaround and two-arm pose probes; the full 15 groups, 109 frames and integration remain unfinished</s>

<s>The new Monk is not installed. Original groups 9 and 10 are pixel-identical duplicates of 7 and 8. Excluding them leaves 15 groups and 109 frames to author, along with 3D effects, shadows, outlines, projectile integration and native review. The old gray-robed clips will not be passed off as the finished replacement.</s>

</details>

<s>The new rig now has four body-action drafts: holding (6 frames), forward casting (10), upward casting (10) and downward casting (9). Astra authored the motion in Blender using the existing Meshy geometry and rig; this stage made no new paid Meshy requests. These 35 rendered body frames cover four of the required fifteen groups. The Monk is still not installed.</s> This was the first four-action checkpoint; the current nine-action scope is described below.

The first folded-arm pose left both palms facing outward. A hand-axis correction brought the hands across the opposite sleeves. A separate proportion pass widened the model in the horizontal plane: its projected holding width was about 28 original pixels, against 33 in the reference at the same 78-pixel height.

![Blender trials 645, 646 and 647: the splayed-hand failure, wrist correction and proportion adjustment](/images/castle-monk-641/hand-corrections.png)

The forward cast now keeps the preparation longer and reaches forward on frames six and seven. Upward casting raises both hands; downward casting bends and turns the torso. The first upward trial looked high enough in a close view but read too flat through the game camera, so the revised motion raises the hands further.

![Forward cast, actual 1200×1200 Blender still; body motion only](/images/castle-monk-641/cast-front-hq.png)

![Upward cast, actual 1200×1200 Blender still; sleeve and shoulder-cowl deformation still need work](/images/castle-monk-641/cast-up-hq.png)

![Downward cast, actual 1200×1200 Blender still; not a game screenshot](/images/castle-monk-641/cast-down-hq.png)

![Holding and forward cast: original above each new rendered row; the original includes effects, the new body draft does not](/images/castle-monk-641/holding-front-frames.png)

![Upward and downward casts in the fixed game camera: original above each new body row](/images/castle-monk-641/directional-frames.png)

All 35 body frames fit the 900×800 canvas. Forward and upward endpoints match holding pixel for pixel; downward endpoints differ at 30 pixels by at most 2 on an 8-bit channel. Reopening the saved scene and sampling the four actions at quarter-frame intervals found no adjacent keyed quaternion sign reversals. These checks cover framing and continuity, not clothing collisions or final appearance. <s>Fingers, sleeve/cowl deformation and reference fidelity remain open; the other eleven action groups, effects, shadows and game integration still need work.</s>


<s>The current scene contains nine body-action drafts: holding, three casting directions, three melee directions, recoil and defence. That is 76 frame slots from 50 body renders.</s> This records the nine-action checkpoint; five further groups follow below. Pixel comparisons against the original establish that melee reuses the casting poses: the forward sequence drops two preparation frames, upward drops one, and downward retains the same nine. The new melee actions preserve that timing in separate editable Blender actions; effects and projectiles still require separate treatment.

The shoulder-weight experiment below was rejected. Moving upper-arm influence toward the chest preserved holding within a micrometer, but produced a horizontal shelf at the shoulder when raised. The working scene retains the earlier weights. The first recoil draft also buried the lowered hand in the waist; the revised target moves it outside the torso.

![Rejected shoulder-weight trial: the raised-arm cowl forms a horizontal shelf; actual Blender render](/images/castle-monk-641/shoulder-weight-failure.png)

![Recoil draft after moving the lowered hand out of the torso, actual 1200×1200 Blender still](/images/castle-monk-641/recoil-hq.png)

![Defence body draft, actual 1200×1200 Blender still; the original light shield is not yet implemented](/images/castle-monk-641/defence-hq.png)

![Original recoil and defence above each new body row; original defence includes its light shield](/images/castle-monk-641/reaction-frames.png)

Reopening the saved scene confirmed all nine actions were retained. An earlier library-import attempt discarded unused actions on save; the corrected import explicitly retains them. The fifteen new recoil/defence body images fit the canvas. Their endpoints differ from holding at five pixels by at most one 8-bit channel value. <s>Walking, mouse-over, death, both turns and movement start remain unauthored on this model, along with cloth repair, effects, shadows and native integration.</s> The Monk is not installed.

Five further body drafts add the six-frame walk, two-frame movement start, two frames for each turn, and ten mouse-over frames. The saved scene now retains fourteen actions, covering 98 original frame slots with 72 rendered body images. <s>Death remains the one missing body group; clothing, effects, shadows and game integration are still unfinished.</s>

The first walking trial raised the knees too far and pushed a large bulge through the robe. A smaller stride and lower foot lift reduce that deformation while retaining the folded arms. The two-frame turns pass through a front-facing pose, matching the original reference sequence. Mouse-over adds a restrained head movement.

![Rejected larger-step walking trial: the raised knee bulges through the robe; actual Blender still](/images/castle-monk-641/walk-knee-failure.png)

![Revised smaller-step walk, actual 1200×1200 Blender still; gait and cloth remain under review](/images/castle-monk-641/walk-hq.png)

![Intermediate turn pose, actual 1200×1200 Blender still](/images/castle-monk-641/turn-hq.png)

![Walking, start, turns and mouse-over: original above each new body row](/images/castle-monk-641/movement-frames.png)

All 22 new body images fit the fixed 900×800 canvas. Movement start ends on the exact first walking image. The foot check confirms alternating lifts of about one centimetre, with the support foot near the floor; a few body vertices still dip by up to one millimetre. This is an offline geometry check, and does not establish a slide-free walk at VCMI's playback speed. <s>The next body action is the eleven-frame collapse; its first five original frames are pixel-identical to recoil.</s>

The eleven-frame death sequence now has a first motion trial. Its first five poses follow recoil; the remaining six spread the arms, bend the knees, fold the torso and roll onto the side. Reopening the scene confirms fifteen editable actions with the original 109 frame slots, and the eleven new images fit the canvas. **The death trial has not passed visual review.**

The first versions stopped in a crouch or kneel. Inspecting the actual bone hierarchy showed that this rig names its lower spine `Spine02` and its upper spine `Spine`. Redistributing the bend toward the waist and adding a final side fall changed the pose, but exposed severe robe deformation around the folded legs.

![Rejected kneeling endpoint, actual 1200×1200 Blender still](/images/castle-monk-641/death-kneeling-failure.png)

![Side-fall trial with stretched, overlapping robe folds; actual 1200×1200 Blender still, not an accepted result](/images/castle-monk-641/death-cloth-failure.png)

![Original death sequence above the new failed body trial](/images/castle-monk-641/death-trial-frames.png)

A volume-preserving skinning trial did not fix the skirt: the overlapping strips remain. A separate check found identical weights at coincident seam vertices, so averaging seam weights would not address this defect. <s>The next repair needs to handle the robe independently of the deeply bent legs.</s> The separate-surface trials below follow this checkpoint. The death trial is kept separately from the preceding fourteen-action scene; no game installation was made.

![Rejected volume-preserving skinning trial, actual Blender still](/images/castle-monk-641/death-volume-failure.png)

### A separate skirt for the Monk (2026-09-18)

Further weight and smoothing trials did not repair the folded robe. A dedicated skirt bone still left distorted boundaries; broader selections pulled the sleeves, and stronger smoothing softened the texture without restoring a usable collapse. The original Meshy model and the preceding fourteen-action scene are preserved.

A new surface follows the existing robe with 5,248 vertices and 5,120 quads, leaving the hem open. Its 2048×2048 colour texture was baked from the Meshy material. This isolated Blender render shows the transferred brown fabric and pale cord on the new surface; it is an intermediate mesh, not a finished unit.

![Separate skirt with colour baked from the Meshy model, actual 1200×1200 Blender still](/images/castle-monk-641/independent-skirt.png)

Separating the skirt from leg skinning removes the earlier strip-like stretching in the kneeling pose. The sideways collapse still leaves a rigid tube, however. Flattening it exposes gaps between the boots and the body. The latter two candidates in this comparison were rejected.

![Blender stills of the kneeling trial, rejected tubular collapse and rejected flattened skirt with exposed boot openings](/images/castle-monk-641/independent-skirt-trials.jpg)

A cloth trial spreads the eleven death poses over 101 simulation frames, pins the waist and uses simplified leg, torso and floor collisions. The bake completes, but the skirt contracts into the body. Reopening the saved scene and measuring the evaluated mesh confirms the contraction; the completed bake does not establish a usable result.

![Rejected cloth simulation with the skirt contracted into the body; actual 900×900 Blender still, not a game capture](/images/castle-monk-641/skirt-simulation-failure.png)

The separate surface and transferred texture remain available for further repair. <s>The simulation shrinkage and the connection around the boots need attention before reviewing the other actions with this mesh.</s> The diagnosis and follow-up trials are recorded below. Existing Meshy outputs were reused without new paid jobs. The Monk remains uninstalled.

### Incorrect collision lengths on the Monk (2026-09-18)

The contraction investigation found a concrete error in my local collision builder. It used bone tails from this scene: the left thigh's tail was roughly 34 metres from its head, while the knee joint was about 34 centimetres away. The collision surface was therefore about a hundred times too long. A run without collisions did not produce the same contraction. Using adjacent joint heads restores a skirt that bends around the knees. The existing Meshy model is unchanged.

![Kneeling trial after correcting joint collision lengths and adding inner leg surfaces; actual 1200×1200 Blender still, clothing unfinished](/images/castle-monk-641/joint-collision-kneel.png)

Removing the original robe also exposed missing internal surfaces between the body and boot openings. Dark-brown leg geometry now fills that space. A separate self-collision and forearm-collision trial still turned the hem outward and was rejected. The current candidate uses the corrected joint collisions and adds forward tilt to the last two poses, lowering the previously raised head. Waist seams, lifted boots and the final curled silhouette remain unaccepted.

![Forward-tilted final collapse, actual 1200×1200 Blender still; not an accepted result](/images/castle-monk-641/joint-collision-collapse.png)

Eleven body frames were exported again with the battle camera at 900×800; all remain inside the canvas. The complete comparison still shows differences from the original poses in the second half. This is an offline death trial. The preceding fourteen-action scene and the installed game resources have not been replaced.

![Original eleven-frame death sequence above the new offline body trial; not a running-game capture](/images/castle-monk-641/joint-collision-frames.png)

The reusable [joint collision builder](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/build_joint_colliders.py) now checks segment lengths across the requested frames before creating proxies. Its synthetic-rig regression needs no game assets. Models and complete mods remain local.

### Monk waist attachment and raised-arm direction (2026-09-18)

The skirt's upper 640 vertices now follow sampled points on the original body, retaining their holding offsets. Across the eleven sampled poses, the two fully pinned rings' maximum error relative to those targets falls from about 3.9 centimetres to less than 0.001 millimetres. This verifies the attachment targets, not the appearance of the waist folds. A longer hem also reduces the exposed boot openings in the standing pose.

![Standing pose with the longer hem, actual 1200×1200 Blender still; model still under repair](/images/castle-monk-641/longer-robe-standing.png)

A colour-and-foot-weight cleanup removed 315 suspected old robe faces in a separate trial, without visibly repairing the collapse folds; it was not adopted. Comparing the full sequence exposed another error: frames seven and eight raised the opposite screen-side arm from the original. Swapping the raised arm initially put the hand against the hood. Lifting and opening the arms improves that direction, while the high-resolution view shows distorted, layered folds at the shoulder/sleeve connection.

![Corrected raised-arm direction in frame seven, actual 1200×1200 Blender still; shoulder connection and palm orientation remain unfinished](/images/castle-monk-641/death-raised-arm.png)

The following pixel comparison records the arm-only edit before refreshing the cloth binding. All eleven frames were rendered again. Pixel comparison with the longer-skirt candidate confirms that this arm edit changes only frames seven and eight; the other nine match exactly. A forearm quaternion sign flip was also corrected before export. The timing of the body lowering, final collapse, shoulder connection and clothing still differ from the original. This remains a local trial, with no installed resource replacement.

The combined scene resamples the waist references to account for the few millimetres of body movement introduced by the arm changes, then rebakes the full cloth simulation. The sequence below now shows both repairs together.

![Original sequence above the eleven-frame waist and arm revision; offline body renders, not an accepted or installed result](/images/castle-monk-641/waist-arm-death-frames.png)

### Torso lean and arm spread in the Monk death sequence (2026-09-18)

Enlarging frames seven through nine showed that the waist heights in seven and eight were already fairly close to the original. The clearer differences were the missing lean toward screen right and arms drawn inward too early in frame nine. This trial keeps the waist position and revises the torso and wrists.

![Original, previous and revised frames seven through nine; the new candidate still lacks overall visual acceptance](/images/castle-monk-641/death-reference-three-poses.png)

Six wrist reference points were selected manually from the original three frames. After rotating the torso, the first arm solve kept the previous wrist depths and could not reach several targets. Adjusting depth along the camera rays reduces their mean projected error from about 19.6 to 2.8 logical pixels while retaining bone lengths. This describes the six manually estimated wrist targets only; it is not a score for overall pose fidelity. The [depth-selection helper](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/projected_ik.py) is now public, checked with synthetic cases and these six wrist solves.

![Revised torso lean and raised arm in frame seven, actual 1200×1200 Blender still; shoulder clothing and palms remain unfinished](/images/castle-monk-641/death-reference-frame7.png)

![Frame nine with the arms spread again, actual 1200×1200 Blender still; knee and waist folds remain unaccepted](/images/castle-monk-641/death-reference-frame9.png)

The torso rotation also requires new waist targets and an updated torso collision surface. These were refreshed before rebaking the 101-frame cloth simulation and exporting eleven 900×800 body images, all within the canvas. Reopening the saved scene reproduces frame seven pixel for pixel. The final collapse silhouette, shoulder and waist folds, palm orientation and integration with the other actions remain unfinished. Game resources have not been replaced.

![Complete eleven-frame trial after updating the torso, wrists, waist targets and collision surfaces, compared with the original](/images/castle-monk-641/death-reference-full-sequence.png)


#### Hood and inner lining revisions

The preceding figures retain the earlier hood geometry. Lowering its tip alone produced a backward-pointing spike; that candidate was rejected. Moving the upper tip toward the head as well produces the shorter hood below. Its height and match to the original silhouette still need review.

![Rejected height-only hood edit, actual Blender side render](/images/castle-monk-641/monk-hood-flat-tip-failure.png)

![Shorter hood and corrected lining, actual 1200×1200 Blender still; offline candidate, not installed](/images/castle-monk-641/monk-short-hood.png)

A triangular patch beside the upper leg came from the inner lining intersecting the robe. At four sampled camera rays, the lining was about 1–4 mm in front of the robe surface. The upper lining radius is now reduced by 18%, tapering smoothly to the unchanged knee. The edit covers all twelve shape keys and preserves the dimensions at the boot opening. After reopening the scene, all four patch samples and two adjacent control samples hit the robe first. The rendered triangle is gone.

![Cropped Blender renders before and after narrowing the upper lining, with the same camera](/images/castle-monk-641/monk-lining-comparison.png)

All eleven exported body frames fit the canvas. <s>The final pose still lifts the boots too far and bunches the clothing around the waist; it has not passed visual review.</s> This describes the preceding candidate; the next section records the subsequent foot and skirt revisions. This work reuses the Meshy model, with Astra editing and rendering the Blender geometry. There were no new paid generation jobs or changes to installed game assets.

![All eleven body frames with the revised hood, compared with the original; appearance remains unaccepted](/images/castle-monk-641/monk-hood-full-sequence.png)

![High-resolution Blender side view of the unfinished collapse, exposing the raised boots and waist folds](/images/castle-monk-641/monk-collapse-unfinished.png)



#### Foot placement and skirt folds during collapse

Both boots were suspended in the previous final pose. Revising lower-leg and foot rotations brings the soles close to the floor while retaining bone lengths. Editing only the last two native poses left a roughly 2 cm floor penetration during interpolation. Additional transition keys address that dip, with matching updates to the inner lining and collision surfaces.

![Previous raised boots, lowered feet with crumpled cloth, and the revised candidate; cropped Blender renders from the same camera](/images/castle-monk-641/monk-ground-contact-comparison.png)

A self-collision experiment took longer to simulate and retained tangled folds, so it was rejected. The current candidate smooths the free portion of the simulated skirt, excluding the fully pinned waist vertices. This reduces the fragmented folds near the hem; <s>the waist seam remains rough.</s> The following section records its subsequent repair.

![Rejected cloth self-collision experiment, actual high-resolution Blender still](/images/castle-monk-641/monk-self-collision-failure.png)

![Revised foot transitions and free skirt, actual 1200×1200 Blender still; the waist and overall design remain unaccepted](/images/castle-monk-641/monk-ground-contact-hq.png)

Reopening the saved scene reproduces the native-camera final frame pixel for pixel. Across forty-three poses sampled at half-frame intervals over the final part of the motion, vertices with combined foot/toe weight above 0.55 remain above the floor, with about 5.1 mm minimum clearance at the current model scale. This check covers the feet, not all intersections in the character. All eleven exported frames fit the canvas. <s>Waist seams, palms, hood proportions relative to the original and adaptation of the other fourteen actions to this skirt remain unfinished.</s> The following section records the waist repair and adaptation of the other fourteen actions; palms, original proportions, effects and integration remain unfinished. Installed game assets are unchanged.

![All eleven frames with the current foot and skirt revisions, compared with the original; offline body-only candidate](/images/castle-monk-641/monk-ground-contact-sequence.png)



#### Waist seam and full body-action drafts

These figures document the waist revision, before the shoulder correction in the next section.

The jagged waist edge came from the junction between the retained body and the separate skirt. Deleting whole triangles had left the boundary following irregular mesh edges. The revised body is split along a defined waist plane in its standing pose, interpolating UV coordinates and bone weights at new vertices before converting them back to animated model space. Skirt attachment offsets now follow the corresponding source vertices' skin transforms as well.

![Waist seam before and after revision, cropped Blender renders from the same camera](/images/castle-monk-641/monk-waist-comparison.png)

Tucking a wide band of the skirt inside the body produced a dark horizontal line while standing, so that trial was rejected. Narrowing the overlap removes the line and the jagged collapse boundary in the two views below.

![Rejected broad-overlap trial with a dark line across the waist, actual Blender still](/images/castle-monk-641/monk-waist-overlap-failure.png)

![Standing check after narrowing the overlap, actual 1200×1200 Blender still](/images/castle-monk-641/monk-waist-standing.png)

![Final collapse with the same revised model, actual 1200×1200 Blender still; overall pose fidelity remains unaccepted](/images/castle-monk-641/monk-waist-collapse.png)

The body, lining and separate skirt are now adapted to the other fourteen actions. Each action gets new waist targets, inner-leg poses, collision surfaces and its own cloth bake. Holding and walking simulate three cycles and export the third. The maximum skirt-vertex displacement across the holding wrap drops from about 3.3 cm to 1.8 mm; it is not perfectly seamless.

![Front-cast body draft, actual high-resolution Blender still; spell effects are absent](/images/castle-monk-641/monk-cloth-front-cast.png)

![Upward-cast body draft, actual high-resolution Blender still; shoulder compression and palms still need work](/images/castle-monk-641/monk-cloth-up-cast.png)

The original's fifteen effective groups now have 109 body images at 900×800, excluding duplicate turn aliases from the count. Every image fits the canvas. Bone transforms at the 98 native poses in the other fourteen actions match the preceding local skeletal drafts exactly. Each of the fifteen scenes was reopened and one frame rerendered, reproducing its corresponding image pixel for pixel. These checks establish reproducibility, not fidelity to the original or visual acceptance.

![Complete current body frames for holding, walking, mouse-over, move-start and turns](/images/castle-monk-641/monk-cloth-motion-sheet.png)

![Complete current body frames for three melee and three ranged directions; no effect layers](/images/castle-monk-641/monk-cloth-combat-sheet.png)

![Complete current body frames for hit reaction, defence and death](/images/castle-monk-641/monk-cloth-reaction-sheet.png)

This work reuses the Meshy model, with Astra authoring the Blender repair and action-adaptation scripts. Shoulder clothing, palms and proportions against the original still need review. <s>Spell effects, shadows, transitions and native-game validation are also unfinished.</s> Offline shadow candidates appear below; the other items remain open. The Monk has not been installed.



#### Shoulder volume during raised-arm poses

The junction between the mantle and upper arm becomes thin when the arms rise. Moving upper-arm weights to the torso produced a sideways flap, so that approach was rejected. Enabling volume-preserving skinning over the entire body filled out the shoulder but also moved the waist: selected waist-band vertices shifted by up to about 7 mm in the inspected upward-cast pose.

![Original linear skinning, rejected weight transfer and local volume blending during arm elevation; cropped Blender renders from the same camera](/images/castle-monk-641/monk-shoulder-comparison.png)

![Rejected full-body volume-preserving skinning experiment, which also changes the waist](/images/castle-monk-641/monk-shoulder-global-volume-failure.png)

The current candidate blends the two skinning methods near the shoulders, excluding vertices dominated by head, neck, hand and forearm bones. Leaving the local blend enabled throughout still changed the collapsed shoulder. Its influence now increases smoothly with upper-arm elevation relative to the torso, returning to the original linear deformation when the arms are lowered.

![Upward-cast draft with the shoulder correction controlled by arm elevation, actual 1200×1200 Blender still; mantle folds and palms remain unfinished](/images/castle-monk-641/monk-shoulder-raised-hq.png)

All fifteen groups and 109 native body frames were rerendered. Ten frames activate the correction; the other 99 match the preceding images pixel for pixel. The 172,195 vertices outside the selected region retain their positions across all 109 poses. Each scene was also reopened and one frame rerendered, matching its saved image exactly. These checks bound the change; they do not establish visual acceptance of every mantle deformation.

![Updated shoulder deformation in the three melee and ranged directions, body frames without effect layers](/images/castle-monk-641/monk-shoulder-combat-sheet.png)

![Updated hit, defence and death body frames; not installed](/images/castle-monk-641/monk-shoulder-reaction-sheet.png)

The [local skinning-blend helper](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/blend_armature_volume.py) is public. A synthetic mesh without game assets tests zero, full and partial influence, plus rejection of invalid settings. This round reuses the Meshy model with repair and verification scripts authored by Astra; no new paid model job was submitted. <s>Mantle folds, palms, original proportions, spell effects, shadows and native-game validation remain unfinished.</s> The next section adds offline shadow candidates; the other items remain open.


#### Separate shadows for all fifteen actions

The current body scenes now produce **109 geometry-projected shadow frames**. Each action retains its own saved cloth cache. The exporter evaluates the deformed body, lining and skirt, projects them onto the ground along one fixed direction, and renders through the body camera. Existing body images remain unchanged.

![Six offline body-and-shadow composites covering holding, walking, casting, defence and death; not installed](/images/castle-monk-641/monk-shadow-review.png)

All shadows use 50% opacity and a 1.6-pixel blur, with no per-frame resizing or recentering. Every composite fits the 900×800 canvas. Rendering the first frame of each action a second time gives identical pixels in all fifteen cases. This establishes repeatability; temporal stability during native playback still needs review.

![Complete body-and-shadow sequences for holding, walking, mouse-over, move-start and turns](/images/castle-monk-641/monk-shadow-motion.png)

![Three melee and three ranged directions with projected shadows; spell effects are still absent](/images/castle-monk-641/monk-shadow-combat.png)

![Complete hit, defence and death sequences with shadows](/images/castle-monk-641/monk-shadow-reaction.png)

Astra authored the projection and layer checks using the existing Meshy model. These are offline shadow candidates. Mantle folds, palms, original proportions, spells, transitions and game integration remain unfinished.

#### Directional casting effects

The original Monk starts its upward charge on frame 3, the horizontal charge on frame 4, and the downward charge on frame 2. White-blue pixel bounds provide a timing and size reference. Existing 3D stars and mist cores are positioned around the revised hands, with the evaluated body, sleeves and skirt supplying occlusion.

The first pass was too dense and cloud-like. Reducing the mist opacity and particle count made the second too sparse. The current trial restores some smaller particles while retaining larger stars. These are Blender effects composited over the saved body and shadow layers; the close-ups are enlarged for comparison.

![Three density trials: dense mist, sparse particles and the current revision; enlarged offline crops](/images/castle-monk-641/monk-effect-density-trials.png)

![All 29 upward, horizontal and downward casting frames with body, shadow and 3D effect layers](/images/castle-monk-641/monk-ranged-effects.png)

Fourteen effect frames remain empty, matching the original timing, and every composite fits the canvas. Reopening each of the three scenes and rendering frame 6 reproduces its saved output exactly. The source body scenes and all 109 body images retain their hashes. <s>Flight after release, effects required by melee or defence, appearance repairs, transitions and native validation remain unfinished.</s> The following section adds flight, melee and defence candidates; appearance, transitions and native validation remain open. Meshy supplies the reused creature model; Astra authored the 3D effects and adaptation scripts.

#### Melee, defence and projectile layers

The three melee directions add 26 effect slots using the same 3D sparks as casting. Defence needs a separate shape: the original opens a curved band of light. A seven-frame star arc now renders against the current sleeves and body as occluders.

![Complete offline melee composites in three directions; not installed](/images/castle-monk-641/monk-melee-effects.png)

The first ward was a thin, predominantly golden line. The revision gives the particles a thicker distribution and restores white-blue stars. Brightness and the unfolding motion still need comparison with the original.

![Rejected thin-line defence arc](/images/castle-monk-641/monk-defence-thin-failure.png)

![Revised seven-frame defence ward, still an offline candidate](/images/castle-monk-641/monk-defence-effects.png)

Flight uses the casting layer's actual star meshes and materials. Several initial angles touched the 120×120 canvas edges. Reducing the overall scale leaves transparent margins at all nine angles. The larger still below renders the same 3D model; native projectile size and its release position remain unverified.

![Nine directional projectile candidates](/images/castle-monk-641/monk-projectile-directions.png)

![Actual 900×900 Blender still of the same projectile model](/images/castle-monk-641/monk-projectile-hq.png)

The consolidated offline inventory contains 109 body-and-shadow frames and 62 effect slots, including 27 original-timing blanks. Reopening the three melee scenes, the ward scene and the projectile scene reproduces one sampled frame from each exactly. Body source files remain unchanged. Packaging, release alignment and native checks come next; clothing, palms, original proportions and full visual acceptance remain unfinished.

#### Local Monk test installation {#monk-installation}

The private Castle mod is now **0.6.0**, adding the brown-robed Monk at 1× and 2× with separate shadows, selection outlines and 3D spell projectiles. Its fifteen effective action groups contain 109 frames; duplicate original turn groups use the existing fallback behavior. Resource validation reports zero errors and warnings. The installation adds 491 files while preserving the hashes of 2,528 existing files. No VCMI source changes were made.

The original `CRANIM.TXT` fires the Monk projectile on frame **8**, compared with frame 6 for the Zealot. The test keeps the Monk timing. The first release comparison exposed a size jump: flight was visibly larger than the charge. The median ratio of alpha-weighted radii across three directions reduced the flight model to about 63.3% of its previous scale, followed by nine new renders. Offsets align charge and projectile alpha centroids. This offline alignment still needs native visual review.

![Rejected release comparison with an oversized flight cloud; offline composites](/images/castle-monk-641/monk-release-large-failure.png)

![Installed test candidate at release and successive flight positions in three directions; offline composites, not game captures](/images/castle-monk-641/monk-release-installed.png)

![Actual 900×900 Blender still from the current projectile scene](/images/castle-monk-641/monk-projectile-installed-hq.png)

Native logs collectively read **109 distinct 2× body images across 15 groups**, plus upward-diagonal, horizontal and downward-diagonal projectiles. The ranged test records 39 emissions. These were bounded observations, not proof of a completed battle or visual acceptance. Display settings and temporary creature parameters were restored byte for byte, and installed resources were checked again.

Defence requires a specific trigger. Choosing the defend action alone does not play the whole ward; VCMI uses that animation when a defending stack survives a melee attack. An initial test with neither side able to move or shoot did not cover it. A Marksman attack trial also failed to trigger it: ranged attacks count as indirect attacks in this code path. A subsequent setup uses a Crusader in melee. Effective groups still absent from the observed loading: `none`.

Window capture still reports `could not create image from window`, so the figures remain offline comparisons. Logs establish loading and execution; cloth, palms, proportions, transitions, ward brightness and native appearance remain under review.

### Zealot identity correction (2026-09-18)

The original `CZEALT.DEF` wears a navy hood and robe with narrow gold trim; its face is a featureless light. The previous mesh had a white robe, green stole and visible bearded face. Earlier continuity checks did not establish a faithful design. Those motion experiments remain in the collapsed history below, but the white-robed mesh is no longer a candidate for final integration.

![New Zealot concept, not a Blender render](/images/castle-zealot-512/concept.png)

Built-in imagegen produced this construction reference. A direct Meshy API request then generated a Meshy 7 model with 20k-quad remeshing and 4K textures for 30 credits. The actual Blender still below shows the revised hood and palette, along with visible holes at the image-left axilla and sleeve cuffs.

![Actual Blender front render of the new Meshy candidate, with visible holes](/images/castle-zealot-512/mesh-front.png)

![Blender clay diagnostic with the textures removed; holes remain](/images/castle-zealot-512/clay-front.png)

The clay render confirms a geometry defect. Welding duplicate vertices and recalculating normals did not resolve it. A further 5-credit Meshy remesh to 50k triangles also retained visible holes. This candidate is not ready for animation binding.

![Blender render after Meshy remeshing, still rejected for geometry defects](/images/castle-zealot-512/remesh-front.png)

A fresh Meshy request used the same concept with automatic remeshing disabled, retaining the dense reconstruction for another 30 credits. Its eight Blender views do not show the previous axilla or cuff holes. Because this was a fresh generation, the comparison alone cannot prove that remeshing caused all of the earlier defects.

![Actual Blender front render of the new dense candidate](/images/castle-zealot-512/dense-front.png)

![Eight Blender views of the dense candidate before binding](/images/castle-zealot-512/dense-turnaround.png)

The new mesh has 939,712 faces. The rigging API rejected it with HTTP 400 because it exceeds the 320,000-face limit. The 300,000-face result retains the closed axilla and cuffs in front/rear review, though small dark surface marks remain. The dense source is preserved for repair. Meshy completed the reduced model’s rig for 5 credits. <s>The emissive face material, original folded-arm pose and deformation checks also remain unfinished; this is not an in-game delivery.</s> Subsequent material and motion trials appear below; the model <s>remains uninstalled</s>.

<s>Astra then authored a two-arm IK probe in Blender, checking the rest pose, a midpoint and crossed forearms from front and side. The wide sleeves do not show the earlier large tears in these three sampled poses. Both palms still turn outward, however, instead of resting inside the original folded-arm silhouette. This is an unfinished pose test, not a completed holding animation. The face remains a gold surface awaiting its emissive material.</s>

![Actual Blender folded-arm probe with unfinished outward-facing palms](/images/castle-zealot-512/fold-front.png)

![Side view of the same Blender pose probe](/images/castle-zealot-512/fold-side.png)

The next local revision raises the crossed arms and turns the wrists inward. It adds six keyed holding frames and a ten-frame head-turn draft on the editable Blender rig. <s>These use the original frame counts but enlarged offline framing, not the game canvas.</s> The subsequent native-canvas comparison appears below. Too much of each hand remains exposed and the cuffs are more open than the reference; the pose is still under review.

The first emissive face selection missed much of the mask and accidentally lit the hood rim. Expanding that selection still leaked light. A mesh attribute now supplies a gradual emission mask, bright at the face centre and fading toward its edge, while retaining the trim’s ordinary material.

![Rejected Blender emission selection: a small face patch and accidental hood highlights](/images/castle-zealot-512/rejected-glow521.png)

![Current Blender holding still with graded face emission; folded arms and cuffs remain unfinished](/images/castle-zealot-512/holding524.png)

![Frame five of the ten-frame Blender head-turn draft, not an in-game capture](/images/castle-zealot-512/mouseon524.png)

Exporting a `900×800` body frame for the original `450×400` logical canvas exposed a proportion error that the large previews had obscured. At roughly 80 pixels tall, the narrow candidate projected to only about 24 pixels wide; the original bounding box is 37 pixels wide. Widening the Meshy mesh and rig brought the body projection to about 34 pixels. The comparison holds height and placement consistent and is entirely offline.

![Original, narrow candidate and widened clothing trial at common framing](/images/castle-zealot-512/native-comparison527.png)

Astra added a three-dimensional shoulder mantle, waist cord and hanging ends in Blender. A material mask fades the generated gold front seam below the chest. The additions still need repair: the mantle is too stiff and intersects the upper arm in places, while the folded hands and open cuffs remain unlike the reference. This is an unfinished shape trial.

![High-resolution Blender still of the wider clothing trial, with unfinished mantle](/images/castle-zealot-512/shape527.png)

The original fourteen-frame front cast gathers the hands, sends them forward at different heights, holds both arms raised, and recovers. The blue-robed rig now has separate 3D keys for that sequence. All fourteen frames and the forward pose’s side view were inspected. This is body motion only, without spell effects, a projectile or geometry shadows, and the cloth-intersection review remains unresolved.

![Fourth Blender casting frame with hands projected forward at different heights](/images/castle-zealot-512/cast528-release.png)

![Sixth Blender casting frame during the raised-arm hold](/images/castle-zealot-512/cast528-raised.png)

<s>Holding, fidget and front casting now have 30 RGBA body frames exported through one fixed camera at 900×800, all within the canvas. This verifies export and bounds for these three groups only. The other fifteen groups, shadows, effects and game integration remain unfinished.</s>

Two mantle constructions were tested next. Copying and thickening the Meshy surface amplified fragmented seams and irregular boundaries. Welding, normal repair and smoothing did not produce a usable garment; the failed trial is preserved below.

![Rejected copied-and-thickened mantle with a fragmented surface and edge](/images/castle-zealot-512/rejected-mantle530.png)

The replacement uses a continuous low-resolution mesh shaped against the shoulder surface, with skin weights transferred from the body. It now deforms with the shoulders during the forward cast without the fragmented surface seen above. The lifted lower edge, fit from other angles and hand contact still need review.

![Blender casting still with the continuous skinned mantle, still under review](/images/castle-zealot-512/mantle533-cast.png)

The new six-frame walk exposed another binding error: each leg pulled part of the long robe, producing a trouser-like silhouette. A separate garment bone removed most of that deformation. Remaining failures came from missed hem vertices and coincident UV-seam vertices with different weights. An attempted cut treated the mixed-weight region as a boot seam and created holes; that edit was discarded. The current mesh is intact, with garment selection based on texture colour, position and bone membership, and matching weights at coincident vertices.

![Rejected first walking trial, with the robe deformed by separate leg bones](/images/castle-zealot-512/rejected-walk534.png)

Walking is still not accepted: some hem edges stretch in the six-frame sequence. Floating soles were corrected separately by evaluating the sole vertices and adjusting the character root. The largest previous minimum-sole height was about 2.86 centimetres; the corrected minimum reaches the ground. That measurement establishes lowest-sole contact only, not complete gait or cloth acceptance.

![Revised Blender walking draft, with residual local hem stretching](/images/castle-zealot-512/walk544.png)

Two-frame move-start, left-turn and right-turn drafts were also added. They remain offline; the transition through the engine’s facing flip has not been verified in game. No `MOVE_END` group was invented for a source that does not contain one.

![Blender turn draft; mantle fit and the in-game facing transition remain under review](/images/castle-zealot-512/turn544.png)

<s>The seven current groups now have 42 body frames re-exported through a fixed camera at 900×800, all within the canvas. Eleven original groups, shadows, effects and integration remain unfinished, and walking is still an unaccepted draft.</s> This records candidate 545.

A follow-up on September 18 identified 54 missed garment vertices through mesh connectivity. Rebinding these islands to the robe bone preserved both the boot weights and the uncut mesh. The low-hem diagnostic counts edges longer than 3 cm and four times their rest length. Counts across the six walking frames fell from 111,134, 94,110,167 and 94 to 0, 22, 0, 0, 54 and 0. Two frames still contain roughly 3.6 cm stretches; the walk remains unaccepted.

![Third walking frame after the binding repair, high-resolution Blender still; other frames still fail the hem check](/images/castle-zealot-512/walk547.png)

The original hit sequence unfolds the arms, dips the head and raises one hand during recoil before returning to the folded pose. Defence separates the hands vertically in front of an arcing magical barrier. Those references now have eight-frame hit and seven-frame defence body drafts. The barrier has not been authored, and the raised arm still exposes angular mantle deformation and intersections in these actual Blender renders.

![Fifth hit frame, high-resolution Blender still with unresolved mantle deformation](/images/castle-zealot-512/hit550.png)

![Fourth defence frame, high-resolution Blender body draft without the magical barrier](/images/castle-zealot-512/defence550.png)

All fifteen new frames fit the fixed 900×800 export canvas. Each clip returns to holding with a maximum body-vertex difference of about 0.00037 mm; this checks endpoint continuity, not cloth intersections. <s>The current inventory is nine draft groups and 57 body frames. Nine original groups with 93 frames, shadows, effects and game integration remain unfinished. The earlier 42 rendered images predate this hem repair and must be regenerated before packaging.</s> This records candidate 551. Existing Meshy geometry and rigging were reused without new paid requests.

Upward and downward casting now each have thirteen body frames, with direction-specific facing, arm height and recovery. The upward pose turns farther from the camera; the downward pose bends toward it. Original melee counts are nine frames upward, eight forward and nine downward. Upper and lower melee recover sooner than their ranged counterparts, while the forward attack pushes both hands out horizontally. These actual Blender stills retain unresolved mantle intersections, cuffs and hand shapes.

![Sixth upward casting frame, high-resolution Blender still with unfinished mantle fit](/images/castle-zealot-512/up556.png)

![Sixth downward casting frame, high-resolution Blender still](/images/castle-zealot-512/down556.png)

![Fourth forward melee frame, high-resolution Blender still without casting effects](/images/castle-zealot-512/melee558.png)

All fourteen groups have now been re-rendered from the repaired scene: 109 body frames at 900×800, all within the canvas, with the complete contact sheets inspected. The five new clips add 52 body frames. Their endpoints match holding within 0.0004 mm at the body vertices. A separate RGBA comparison confirmed that all ten original special-action frames are identical across the three direction groups, allowing one shared body clip. <s>Eleven death frames, thirty frames across the special groups, cloth repairs, shadows, effects and game integration remain unfinished.</s> This records candidate 559. A mantle-weight smoothing trial preserved the holding shape and softened angular edges, but raised-arm intersections remained; it was not adopted as the current version.

A shared ten-frame special body clip now serves all three original direction groups. There are 119 distinct body images covering 139 frame slots across 17 native groups. The new clip fits the canvas and returns to holding; <s>the eleven-frame death remains unauthored.</s> This records candidate 563.

Spell effects are also built from three-dimensional Blender meshes. The first 49 glowing particles looked like white chunks and were rejected. A second trial used 181 crossed-axis sparks, but remained too small and sparse at native scale. The third expands the burst, adds five emissive core lobes and leaves the released tail in the air. It still lacks the original’s dense light and soft transition; mantle intersections also persist. These are unaccepted trials.

![Rejected particle effect, high-resolution Blender still](/images/castle-zealot-512/special563-rejected.png)

![Crossed sparks and emissive core trial, high-resolution Blender still; not accepted](/images/castle-zealot-512/special566.png)

![Original and draft special sequences at matched scale; effect density and pose differences remain visible](/images/castle-zealot-512/special566-compare.png)

Body and effects live in separate editable scenes so particles cannot accidentally appear in other clips. <s>The current exports are body images and combined review renders; game-ready effect layers and occlusion checks remain unfinished.</s> This records candidate 566; the later isolated-layer trial is described below.

The eleven-frame death draft starts with the hit poses, opens the arms, loses balance and falls forward. Bent legs and a shortened robe bone gather the lower garment in the later frames. Its first render exposed an object relationship error: the independent mantle deformed with the bones but did not follow the whole-character root during the fall, leaving it suspended above the body.

![Rejected death ending with a detached mantle, actual Blender render](/images/castle-zealot-512/death569-rejected.png)

Parenting the mantle to the armature object preserved the holding shape and made it follow the fall. Minimum-height checks across visible geometry found no substantial floor penetration in the eleven keyed frames; this does not establish correct hand or cloth contact. The corpse remains too extended for visual acceptance.

![Death ending after repairing mantle root following, high-resolution Blender still; pose remains unfinished](/images/castle-zealot-512/death570.png)

The first timing pass also reached the floor by frame nine, earlier than the original; a subsequent revision delays the main fall to the last frames. A further revision adjusts the falling root’s ground-plane travel with the camera held fixed. <s>The original ending occupies 44×28 logical pixels; the draft is about 44.5×40.5 and remains too tall.</s> These dimensions describe candidate 574. Body drafts now cover all eighteen native groups: 130 distinct images mapped to 150 active frame slots. <s>Cloth, hands, effects, shadows and game integration are still unfinished.</s> This records the outstanding work at candidate 574; shadow drafts follow below. <s>Earlier exports and separate effect scenes have not yet been regenerated with the mantle root-follow repair.</s> This records the export state at candidate 574.

![Original death and revised fall timing; the ending silhouette remains unaccepted](/images/castle-zealot-512/death574-compare.png)

Further trials showed that turning the corpse sideways or laying it flatter still left it too extended; one side-facing trial reached 90 logical pixels in width and was rejected. Folding the torso over bent knees produced a more compact pose. That stronger bend exposed another attachment error: the waist cord followed the chest and floated above the lower back.

![Folded-pose trial exposing a floating waist cord, high-resolution Blender still](/images/castle-zealot-512/corpse577-belt-failure.png)

The cord and both hanging ends now follow the pelvis while retaining their holding-pose positions. The revised pose has been incorporated into the eleven-frame death clip. Its ending occupies 44×33 logical pixels, closer to the original 44×28 but still too tall; hand and cloth shapes remain unaccepted.

![Compact death ending with repaired waist attachment, high-resolution Blender draft](/images/castle-zealot-512/death579.png)

![Original and revised eleven-frame death sequences](/images/castle-zealot-512/death579-compare.png)

An additional sweep checked 41 poses at quarter-frame intervals. It found roughly 1.6 mm of body penetration between keyed frames. The continuous motion therefore remains unaccepted even where the native keyed frames meet the floor.

All 130 body frame files have now been re-exported from one scene containing both attachment repairs. Every frame fits the fixed 900×800 canvas, and the full contact sheets were inspected. The mapping was checked against every original group: 150 active slots across eighteen groups, plus the duplicate turn slots referencing the same files. <s>Separate effect scenes still need these attachment repairs; game integration remains unfinished.</s> This records the synchronization state at candidate 581.

Two cloth simulations were then tested on the mantle. The front cast was stretched over 85 simulation frames, using a reduced body mesh for collisions. Pinning only the collar region let the first trial bunch into a scarf-like shape even at rest, so it was rejected.

![Rejected first cloth simulation at rest, actual Blender render](/images/castle-zealot-512/cloth584-rejected.png)

The second trial pins more of the shoulder, increases stiffness and retains 15% of the body mesh for collision instead of 5%. It preserves more of the resting silhouette, but raised-arm intersections and unnatural edges remain. It has not replaced the current mantle.

![Second simulation at rest, high-resolution Blender still; unaccepted](/images/castle-zealot-512/cloth586-holding.png)

![Raised-arm cast in the second simulation; intersections remain unresolved](/images/castle-zealot-512/cloth586-cast.png)

Both trials are saved separately; current body exports still use candidate 581. The separate effect scene now includes the mantle-root and waist-to-pelvis attachment repairs. All ten combined frames were re-rendered, checked and remain inside the canvas. Effect appearance is still unaccepted.

The special action also has ten transparent effect-layer renders. The body acts as an occluder without appearing in that layer. Frames 1, 9 and 10 are empty; the remaining effects can be composited over the existing body frames. Recomposition still differs from the integrated scene render, with a peak-frame mean RGBA channel error of about 6/255 over visible pixels. These layers are not yet accepted for the game.

![Body, isolated effect and recomposition, using actual Blender exports](/images/castle-zealot-512/special587-layers.png)

All 130 body frame files now have separate shadows. Each shadow projects the evaluated body, mantle and waist attachments onto the ground in a fixed direction, using the same camera as the body render. Denoising and animated random seeds are disabled. The masks then receive uniform 50% opacity and a 1.6-pixel blur on the 2× canvas.

Every shadow fits the canvas. Repeating the same holding pose produced identical RGBA pixels, and ten action endings matched the holding shadow exactly. These checks exclude random rendering differences and endpoint jumps in the tested poses; they do not establish flicker-free playback for the whole animation in game.

![Offline body and geometry-shadow composites for movement, turns, casting and death; these are not game screenshots](/images/castle-zealot-512/shadows590-review.png)

Defence also has a seven-frame curved magical ward built from independent three-dimensional star meshes. The first 151-spark trial was visible in a large render but too thin and faint at native size. The revision uses 241 larger sparks, leaves a released tail in frame six and has empty effect layers at both endpoints. All seven body, shadow and effect recompositions fit the canvas.

![Fourth defence frame, high-resolution Blender still; hands, cloth and effect appearance remain under review](/images/castle-zealot-512/ward592.png)

![Original defence and the draft with geometry shadows and a separate effect layer](/images/castle-zealot-512/ward592-compare.png)

<s>Only special actions and defence currently have isolated effect trials. Other casting and melee effects, the projectile, mantle intersections, hands, death pose and final layered appearance remain unfinished. The Zealot package is not installed in the game.</s> This records candidate 592.

On September 18, candidate 595 added 3D effects for front, upward and downward ranged casts and melee actions. The six clips occupy 66 original frame slots: 26 contain effects and the rest are empty. Each slot has a full-scene render and a transparent effect pass with body occlusion, composited offline over the existing body and shadow. All effects fit the canvas. Visible-pixel mean RGBA error between recomposition and full-scene rendering reaches 4.79/255; these are still trial layers.

The comparison exposes smaller bursts than the original, while the high-resolution stars look too hard. Upward casts also place the hands and burst too low. Sleeves still intersect the mantle. Both images retain this unaccepted attempt. <s>The original projectile has been extracted in nine directions for reference; its 3D replacement remains unmade, and the Zealot package is not installed.</s> This records candidate 595. A projectile draft follows below; <s>game integration remains unfinished</s>.

![Front cast frame five, actual high-resolution Blender render; unaccepted effect and cloth trial](/images/castle-zealot-512/cast595-front.png)

![Six complete comparisons: original above each offline body, shadow and effect composite; not game screenshots](/images/castle-zealot-512/cast595-compare.png)

The next revision raises both hands in upward ranged casting and melee, with 22 body frames re-exported. The first target shift exceeded arm reach and left the solver near a straight elbow. Candidate 599 caps targets at 94% of the combined arm-segment length. Keyed target error is below 0.001 mm and all 22 frames fit the canvas. This verifies target placement only; sleeve and mantle intersections remain.

Larger particles and a wider cloud then produced an overexposed white core in candidate 600. Candidate 601 reduces brightness and opacity, restores blue and gold, and rotates the elongated core toward the casting direction. It is still too blue and its high-resolution stars remain hard. Only frames four and five of the front and upward casts have been rendered for this comparison; <s>the complete 66-slot export above has not been replaced, and revised body shadows have not been regenerated.</s> This records candidate 601; candidate 611 below updates the complete export. These are actual Blender renders; the unit <s>remains uninstalled</s>.

![Frame five: original, candidate 595, overexposed 600 and revised 601](/images/castle-zealot-512/cast601-compare.png)

![Revised upward cast, high-resolution Blender still; colour, star shapes and cloth remain unfinished](/images/castle-zealot-512/cast601-up.png)

The projectile now has a separate 3D model with 900 crossed stars and 15 transparent cores. The original `CPRZEAX.DEF` contains nine directions, and the Zealot row in `CRANIM.TXT` releases it on frame six. The angles are 90°, 72°, 45°, 27°, 0° and the corresponding downward angles. Candidate 606 renders all nine onto a 120×120 canvas for a logical 60×60 image, with a separate 1× export. All nine fit the canvas. Resources and candidate launch offsets are stored locally, <s>not installed</s>.

The first cloud was small and showed distinct core boundaries. The larger revision also exposed dark patches where transparent cores overlapped. Raising Cycles transparent bounces to 64, with geometry and materials unchanged, removed those patches. The comparison preserves the original, faulty 604 and revised 606. Spherical core boundaries and hard star shapes still need work at high resolution.

![Nine directions: original, candidate 604 and revised 606; actual 3D renders](/images/castle-zealot-512/projectile606-compare.png)

![Horizontal projectile, high-resolution Blender still; shape remains under review](/images/castle-zealot-512/projectile606.png)

An offline handoff uses the fifth-frame charge centre to place the projectile on frame six, then illustrates travel by 16 and 32 logical pixels. Candidate offsets are `(22,-54)` forward, `(13,-74)` upward and `(9,-34)` downward. These come from the current camera and right-facing geometry, with no native validation yet. The downward charge still uses the earlier small effect and visibly jumps in size. The other directions also change colour. Charge and flight appearance need to be unified before native handoff testing.

![Offline release illustration in three directions; not a game capture or an accepted animation](/images/castle-zealot-512/projectile607-handoff.png)

Candidate 609 directly reuses projectile 606 geometry and materials, scaling by the pixel ratio between the orthographic cameras and rotating toward each casting direction. Effect layers share the projectile colour transform and retain body occlusion; existing body renders keep their own colour treatment. The downward size jump shown above is reduced in the new offline comparison. Fidelity and native handoff remain unverified.

All 66 directional effect slots have been re-exported, and every expected empty frame is empty. The raised-arm clips also have 22 regenerated shadows; all four start/end shadows match holding pixel for pixel. Candidate 611 consolidates 130 body frames, 130 shadows and 83 effect slots. Seventeen defence and special-action slots still use older trials. All composites fit the canvas. Cloth, hands, death and walking detail remain unfinished, and the unit is <s>not installed</s>.

![Release handoff with shared 3D geometry, offline composite](/images/castle-zealot-512/shared609-handoff.png)

![Six complete original-versus-candidate clips with revised arms and shadows](/images/castle-zealot-512/layered611-compare.png)

A separate mantle trial adds pose corrective shape keys. Candidate 613 moves nearby vertices outward when their nearest body-surface normal indicates penetration, then inverts skin deformation to store editable coordinates. The diagnostic count falls from 96, 86 and 116 to 3, 10 and 5 across three poses. This heuristic does not prove collision-free geometry; front and side renders still show underarm folds.

Candidate 615 extends the correction to all 14 front-cast frames and fades it at the endpoints. Corrective weights sum to one at all 53 quarter-frame samples, and all native rendered frames fit the canvas. These checks cover weight interpolation and bounds only. Hiding the added mantle leaves folds in the original underarm garment, so sleeve deformation also needs inspection. Neither trial replaces candidate 611 or enters the game.

![Three poses before and after local corrections, actual front and side Blender renders](/images/castle-zealot-512/mantle614-compare.png)

![Full fourteen-frame corrective trial, not adopted](/images/castle-zealot-512/mantle616-frames.png)

![Diagnostic render with the added mantle hidden; not a proposed new design](/images/castle-zealot-512/mantle617-hidden.png)

Further sleeve trials reject two shortcuts: preserve-volume skinning bulges the torso, while local smoothing creates broken underarm edges. Candidate 621 first welds coincident vertices, then applies the same smoothing to shoulder weight transitions. Vertex count falls from 247,757 to 132,649; polygon count stays 265,495 and the UV layer remains. The new raised-arm render avoids those broken edges, but folds still need work. Holding and front/upward casting total 33 checked native-canvas frames. This trial does not replace the main resource set.

![Actual Blender comparison: linear skinning, preserve-volume skinning, smoothing alone, then welding plus smoothing](/images/castle-zealot-512/sleeve622-compare.png)

**The Zealot test package was installed locally on September 18, 2026.** It uses candidate 611 layers and excludes the sleeve experiment above. The package covers 18 active groups and 150 slots, reusing 130 body images, at two resolutions, with geometry shadows, holding/hover outlines and nine projectile directions. All 1,401 existing files for the other four units are preserved.

The first test (624) reads 62 distinct 2× body images across holding, hover, hit, death, front shooting and upward shooting, plus two projectile directions. The actual screenshot below shows the new unit, corpse and flying cloud. <s>It does not prove playback of the other twelve groups.</s> This describes the first test; formation tests below extend its coverage. Cloth, hands, death shape, full action coverage and release handoff still need review. The client exited and original settings were restored. Logs also contain text-encoding errors and an exit-stage query error, so this is not an error-free run.

![Actual local VCMI battle with Zealot test 624; not a Blender composite](/images/castle-zealot-512/native624-battle.png)

Tests 626 and 627 temporarily removed ammunition to exercise movement, starting, turns and all three melee directions. A seven-stack ranged battle in test 628 also loaded downward shooting. Across the four runs, logs identify **113 distinct 2× body images in 14 groups**, plus the 27°, 0° and −27° projectile images. Defence and the three special groups still lack native loading evidence. Loading records alone do not establish correct display of every frame or acceptable motion.

The image below is an actual game-window capture from test 627. Test 628 produced logs but no successful window capture. Tests 626–628 required forced termination after their time limits; their original game settings and creature configuration were restored byte for byte. The installed unit retains its ranged attack. Cloth intersections, hands, corpse shape and release timing still need review.

![Actual seven-stack Zealot melee test 627; motion and cloth remain under review](/images/castle-zealot-512/native627-melee.png)

The next modeling trial changes how the mantle follows the arms. Candidate 630 retains 100%, 35% or none of the upper-arm weights, transfers the remainder to the chest bone and solves vertex positions back to the same holding shape. In the existing binding, an edge measuring 4.24 mm in holding stretches to about 27 cm on upward-cast frame six. Removing upper-arm influence lowers the worst edge-length ratio in that clip from 63.9 to 2.05 and reduces the pointed folds in the gold hem. This measures mesh stretch relative to holding; it is not a cloth-collision or physical-simulation test.

![Actual Blender close-ups with 100%, 35% and 0% upper-arm influence; sleeve-to-mantle contact remains unresolved](/images/castle-zealot-512/mantle630-bindings.png)

Candidate 631 also tried projecting the mantle away from the body at front-cast, upward-cast and defence poses. Contact still looks unresolved, so those corrective shapes were not adopted. Candidate 632 uses the binding with no upper-arm influence and exports all 130 body images inside the original canvas. Complete action comparisons were reviewed, with another 472 quarter-frame samples per binding measuring mantle deformation. At candidate 632: <s>This revised body is offline; the installed game still uses 611.</s> Installation 638 follows below. Sleeves, hands and corpse shape need further review. <s>Shadows and effect occlusion have not been regenerated for the new geometry.</s> This records the layer state at candidate 632.

![Body-only comparison for front and downward melee, special motion and death: installed 611 above offline 632 in each group; shadows and effects excluded](/images/castle-zealot-512/mantle632-motion.png)

The mantle revision is now installed locally as test 638, in mod version 0.5.1. Its new body has 130 regenerated geometry-shadow frames and 83 effect layers rendered with the revised mantle as an occluder. All 45 expected blank effect frames remain empty; repeating the holding shadow produces identical pixels. Every composite fits its canvas. The 1×/2× body, separate shadows and outlines pass resource checks against the original action inventory with zero errors and warnings. Appearance remains under review.

Installation adds 552 files, switches the two `CZEALT` indexes and updates the mod version, preserving the other 1,974 existing files. Ranged and melee tests 639–640 read 113 body images from the new `czealt636` resource directory across 14 groups, plus three projectile directions. Both clients required forced termination after their test limits; original settings and ammunition configuration were restored. Window capture failed in these runs, so the image below is an offline layer comparison. The earlier native screenshot from test 627 shows the previous version. Defence and the three special groups still lack native loading evidence; sleeves, hands, death shape and effects remain unfinished.

![Offline composites: previous 611 on the left of each pair, installed 636 layers on the right, including regenerated shadows and effect occlusion; not a native screenshot](/images/castle-zealot-512/layered636-installed.png)

The original action inventory contains 18 active groups and 150 frames after excluding two duplicate turn slots. It has a two-frame `MOVE_START` and no `MOVE_END`; the earlier description incorrectly called our additional settling clip a native group.

<details>
<summary>History: motion checks on the white-robed Zealot, rejected for identity on 2026-09-18</summary>

<s>The Zealot’s first fourteen-frame front-cast review used a symmetric two-hand raise. It stayed continuous, but extracted `CZEALT.DEF` frames show an asymmetric main-hand-forward silhouette, so this first pose is superseded.</s>

<s>The replacement native-count fourteen-frame front cast blocks from that asymmetric original silhouette. All frames and side start, peak and recovery checks keep both hands, sleeves, robe and stole continuous. It is character motion only; spell VFX, DEF assembly and game installation remain separate.</s>

<s>The first front-cast VFX probe parented particles to the imported hand bone, whose glTF tail scale threw them outside the canvas. A world-space replacement then attached correctly but was rejected because its burst was oversized.</s>

<s>The accepted front-cast VFX review uses nine independent 3D particle meshes keyed from the evaluated main-hand world position. All fourteen front frames and side start, peak and recovery keep the compact blue-white sparks attached to the casting hand.</s>

<s>The upward and downward casts now each key the same reusable particle meshes from their own evaluated hand positions. Their native 13-frame sequences and side start, peak and recovery checks remain hand-locked; all three directions still await DEF assembly and game installation.</s>

<s>The original `SPECIAL_UP`, `SPECIAL_FRONT` and `SPECIAL_DOWN` body frames are pixel-identical, so they use one shared native ten-frame special action rather than invented directional variants. The first 3D particle burst was continuous but too small against the original silhouette. The accepted revision uses 31 independent 3D particle meshes, a two-hand raise and an upper-body-sized burst; front full sequence and side start, peak and recovery remain continuous. DEF assembly and game installation remain separate.</s>

<s>The first eight-frame `ATTACK_FRONT` probe kept its main hand and cloth continuous, but its burst was too small against extracted original frames. The accepted replacement uses the native eight-frame main-hand-forward block and 23 independent 3D particles to project the burst toward the target. Front full sequence and side start, peak and recovery keep the hand, sleeves, robe and stole continuous.</s>

<s>The native nine-frame upward attack now keeps its 23-particle burst high at the casting hand; the native nine-frame downward attack uses the front-side low hand chain to keep its burst visible at waist height. Both pass front full-sequence and side start, peak and recovery checks. The first low-attack hand choice left its burst behind the robe in side view, so it was rejected. DEF assembly and game installation remain separate.</s>

<s>The Zealot’s first native-count thirteen-frame upward-cast review used a symmetric two-hand raise. It stayed continuous, but extracted `CZEALT.DEF` frames show a single high forward hand with the other compact, so the first pose is superseded.</s>

<s>The replacement thirteen-frame upward cast blocks from that original single-hand high-forward silhouette. Its front frames and side start, peak and recovery checks preserve hands, sleeves, robe and stole. It remains character motion only, without spell VFX, DEF assembly or game installation.</s>

<s>A first thirteen-frame downward-cast counterpart keeps cloth continuous but collapses both hands into the torso silhouette at its peak. It is rejected; the next attempt will use hand positions measured from original frames rather than reversing the upward pose.</s>

<s>A second thirteen-frame down-cast now blocks from extracted `CZEALT.DEF` frames: one hand projects low and forward while the other stays compact. All frames plus side start, peak and recovery keep the hands, sleeves, robe and stole continuous. This is character motion only; the original spell VFX, DEF assembly and game installation remain separate.</s>

</details>

<s>The Marksman now has its own equivalent review on its separate Meshy rig: its `CHCBOW.DEF` front-shot group also has eight frames, and the raise, aim, recoil and return keep the light crossbow, sleeves and hands continuous. It has no bolt release or up/down firing groups yet.</s>

Remote candidate 02 subsequently gained the native eight-frame up/down shooting body groups; bolt release still needs its own three-dimensional layer.

<details>
<summary>History: old Archer shooting experiments; body design rejected on 2026-09-19</summary>

<s>The Archer now has a separate Meshy-rig pose check after its earlier rejected local attempt: a five-key raised-crossbow motion keeps both sleeves and the light crossbow connected through the aiming pose. The first front-shot review now uses the original eight-frame group count at 450×400: raise, aim, recoil and return remain continuous. It still has no separate bolt release and no up/down groups, so it is not a finished firing clip.</s> <s>The native eight-frame `SHOOT_UP` body action has now passed front and side key-frame review: low carry rises to the aiming peak and recovers while the light crossbow, both hands and sleeve cuffs remain continuous. Its bolt layer and the separate downward group still need authoring; this is private Blender review only, with no DEF output or game installation.</s> <s>The native eight-frame `SHOOT_DOWN` body action now also passes front and side review: the low target aim and return keep light crossbow, hands and sleeve cuffs continuous. All three body shot directions are present; each still needs its own three-dimensional bolt layer. This remains private Blender review only, with no DEF output or game installation.</s> The first front bolt layer launched from the character’s left, and the second kept the correct rightward direction but sat below the crossbow groove; both are rejected. The third seats in the right-side groove through aim and exits rightward on recoil. Separate upward and downward layers use the same independently reviewed Meshy bolt but their own attached locations and rising/declining trajectories. All three eight-frame projectile layers pass front and side key-frame review. This remains private Blender review only, with no DEF output or game installation.

</details>

<details>
<summary>History: motion checks on the white-robed Zealot, rejected for identity on 2026-09-18</summary>

<s>The Zealot’s eight-frame `HITTED` probe used a rearward torso and defensive arms, but its peak silhouette remained close to holding because the robe hid the deformation. It is rejected and will not enter DEF assembly.</s>

<s>The replacement native-count eight-frame `HITTED` review makes the rearward recoil visible through a compact screen-left displacement and asymmetric defensive arms. Front full-sequence and side start, peak and recovery checks keep the hands, sleeves, robe and stole continuous. It is a Blender motion review only, with no DEF assembly or game installation.</s>

<s>The Zealot’s first seven-frame `DEFENCE` trial had a sound raised-hand pose, but keyed particles from an untransformed imported local hand matrix, leaving the effect outside the canvas. The accepted native-count replacement uses an upper forward ward hand and 17 independent world-space 3D particles. Front full-sequence and side start, peak and recovery checks keep the effect hand-locked and the hands, sleeves, robe and stole continuous. It remains a Blender review, without DEF assembly or game installation.</s>

<s>The Zealot’s first eleven-frame `DEATH` attempt wrote Euler rotations while the imported Armature remained in quaternion mode, so it did not collapse. The next two repairs corrected rotation but sent the late body outside the canvas through an external pivot and then insufficient positional compensation. The accepted native-count fourth review uses a physical diagonal collapse into a low horizontal final silhouette. Front full-sequence and side start, mid and end checks keep the complete body inside the canvas and preserve hands, sleeves, robe and stole continuity. It remains a Blender review, without DEF assembly or game installation.</s>

<s>The native two-frame `MOVE_START` and `MOVE_END` reviews now explicitly bridge holding to the first gait pose and back, rather than cutting the walking loop. Their front and side frames keep feet, sleeves, robe and stole continuous. They remain Blender reviews, without DEF assembly or game installation.</s>

</details>

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

All 76 body frames have been rendered on transparent 900×800 canvases, with holding height and foot placement registered to the original. No geometry exceeds the canvas. Comparing them with the original exposed another problem: the camera was too frontal, making the front strike point toward the viewer. The revised camera below gives a more side-on view. Each pair shows the original on the left and the new model on the right. <s>Turns still need adjustment for that camera; shadow and outline layers and in-game validation remain unfinished. The Crusader is not installed in the game.</s> Turns have since been adjusted for the camera and the full set rendered again, with shadows projected against a fixed ground line and precomputed hover outlines.

![Original holding and front strike alongside the revised camera candidate](/images/castle-halberdier-01/crusader-camera46-comparison.png)

The Crusader test package is now installed locally as a separate `castle-creature-animations` mod. It contains 76 frames at each of 1× and 2× resolution. All 340 installed files match the package, and validation against the original animation groups reports no errors or warnings. A fresh client confirms that the mod loads. <s>Battle playback remains unverified, including movement-to-stop transitions, repeated attacks, shadows and the creature information panel.</s> A subsequent isolated test map completed a battle and the client read 41 distinct 2× body frames with their effects, covering holding, hover, moving, move start/end, downward attack and death. System capture returned a black image and window capture failed. This verifies battle execution and resource loading only; visual behavior, other directions and the creature information panel remain unreviewed. Other Castle creatures still use their original artwork in the game.

One export also caught a Blender persistence failure: the revised turn played in the authoring session but its action disappeared when the file reopened. The actions are now explicitly retained, and the complete export ran from the reopened scene.

![Revised turn with the facing flip simulated offline](/images/castle-halberdier-01/crusader-turn48-flip.png)

![Packaged holding, moving, attack and death frames with shadows; offline composites, not game screenshots](/images/castle-halberdier-01/crusader-package48-poses.jpg)

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

<s>The Swordsman’s second seven-frame `ATTACK_DOWN` rebuild added the correct high-ready pose, but its low impact still carried the sword behind the torso instead of the original forward/downward cut. It is rejected alongside the earlier single-axis attempt; the next version requires a local forward hand rebind. A third through sixth attempt removed the low-impact lateral rotations and probed connected-bone translation plus imported hand offsets. They keep sword and hand connected, but side review still places the chain behind the torso; the old mesh/rig cannot supply the original forward/downward cut and will not be used for this group.</s> A separate Meshy candidate with a cleanly isolated sword, hand and shield is required. <s>Candidate 02 now passes static eight-view and Meshy humanoid-rig rest review: its blade, right hand, left-hand shield and torso remain distinct from every side. It used a 30-credit 20k-quad/4K Meshy mesh task and a separate 5-credit humanoid rig. A rigid rebinding of the two sword components prevents them from blending into the torso and gives a correct forward low-impact probe, but the automatic shoulder/elbow axes cannot also form the high-ready pose. A local sword-control bone derived from the right hand is now required; no new attack group is accepted yet.</s> The first rebuilt motion still placed the blade behind the body; a local `SwordControl` bone then isolated the components but inherited the malformed imported hand-scale axes and could not make a reliable high-ready pose. <s>The accepted repair separates the two Meshy sword components as an independent 3D object and rotates it at the measured grip pivot. Its native seven-frame `ATTACK_DOWN` now has a high-ready, forward/downward impact and recovery. Full front frames plus side start, high-ready, impact, recovery and end keep sword, right hand, shield and torso continuous. This remains Blender review only, with no DEF output or game installation. Candidate 02’s independent seven-frame `ATTACK_UP` subsequently passes as well: its low carry rises to the elevated strike and returns while the measured grip pivot keeps sword, right hand, shield and torso continuous in front and side key frames. It still has no DEF output or game installation. Candidate 02’s seven-frame `ATTACK_FRONT` now also passes: a high-ready resolves into the original forward horizontal strike and recovery. The default oblique and side views clearly show the blade travelling before the shield; the camera aligned with the sword axis naturally reads it as a thin line, while sword, right hand and body remain continuous. This remains Blender review only, with no DEF output or game installation. Candidate 02 now also passes an independent native eight-frame `HOLDING` review: restrained body breath and the measured grip-pivot sword preserve sword, hands, shield and armour in all front/side keys. No DEF output or game installation has been made.</s>

### Swordsman import and binding correction

The September 17 recoil review stretched the raised thigh into a narrow strip. A first attempt to redistribute leg weights did not fix it. The import audit exposed an earlier error: an `Icosphere` placeholder was included in the model bounds, and normalization transformed the meshes without transforming the armature. The rest render concealed the mismatch; bending the joints exposed it.

Reversing that recorded mesh transform reduces severely stretched edges at the same recoil peak from nine to zero, using a threshold of 0.08 model units and three times the rest length. The new leg keeps its volume. <s>The shield still bends and remains unfinished.</s> The shield has since been bound rigidly to the left hand and keeps its shape through all six recoil frames. Earlier attack scripts merely rotated the independent sword while the body stayed still; those acceptance claims remain withdrawn. New drafts use the shoulder, elbow, wrist and torso to drive the attack.

![Failed recoil with mismatched mesh and armature normalization](/images/castle-halberdier-01/swordsman-bind50-failure.png)

![Historical revision 53: repaired leg with the shield still bending](/images/castle-halberdier-01/swordsman-bind53-recoil.png)

![Revision 57 recoil with rigid shield binding](/images/castle-halberdier-01/swordsman-shield57-recoil.png)

<s>The new set contains 40 frames: eight holding, eleven defence, and seven attacks in each direction. They share a raised-sword guard, with the arm carrying the blade through the parry and swing. Reopening the saved scene preserves the selected shield surface and returns defence and attack endpoints to the holding pose. Leg lunges, full contact checks and the remaining groups are unfinished. The Swordsman is not installed in the game.</s>

The current Swordsman test candidate has thirteen groups and 76 frames and is installed in the local Castle mod. The preceding nine-group, 58-frame version added lunges and walking. Each attack direction adds a foot lift, forward step and recovery. The six-frame recoil returns to the same guard. The eight-frame walk alternates the legs and swings the sword hand opposite its same-side foot, raising the blade as the arm moves forward and lowering it on the backswing. Move start and move end each have two frames.

After reopening, the lowest body point across all 58 frames stays within about 0.0016 model units of the ground, and the walk closure key reproduces the first-frame mesh. These checks do not establish the absence of foot sliding, stop-phase jumps or intersections in the game. <s>Turns, hover and death remain unfinished, and the Swordsman is not installed.</s> Both turns contain two frames and mouse hover contains eight. Death and installation are covered below; sliding and stops from arbitrary walk phases still need native review.

![Front attack draft with a forward step](/images/castle-halberdier-01/swordsman-lunge61.png)

![Eight-frame walk and side key poses, rendered offline in Blender](/images/castle-halberdier-01/swordsman-walk63-review.jpg)

The turn rotates the body and equipment together while bringing the sword hand toward the chest and the blade upright. Mouse hover raises the sword, opens its angle, then returns to the common guard. Reopening and sampling all 70 frames gives a maximum selected-shield edge-length change of about 4.2×10⁻⁷ model units. This checks rigidity; it does not establish clearance between the shield and arms.

![Swordsman midpoint turn pose, a static Blender render](/images/castle-halberdier-01/swordsman-turn64-front.png)

![Both turns and eight mouse-hover poses, rendered offline in Blender](/images/castle-halberdier-01/swordsman-turns64-review.jpg)

The turn and hover images above retain their earlier diagnostic camera. The current test package registers the camera to the original holding height, horizontal centre and ground position.



The six-frame death leans back, lifts the legs and turns toward the camera as the body lands. The first draft fell too far sideways and left the lowest sword and shield points about 0.099 and 0.142 model units above the floor. That version was not used.

![Rejected first fall, with suspended equipment](/images/castle-halberdier-01/swordsman-death65-rejected.jpg)

The correction measures body support separately from equipment clearance and lowers the arm targets. The diagnostic floor below is excluded from exported game frames.

![Corrected final fall pose, a static Blender floor diagnostic](/images/castle-halberdier-01/swordsman-death69-ground.png)

The collision check had its own failure: the initial weight threshold selected three hand vertices and no triangles, so its zero-intersection result was invalid. An expanded mask covers 2,862 arm vertices and 3,968 triangles. It exposed crossings in defence frames 4 and 8 and death frames 2–6. Adjusting the elbow direction while preserving the wrist and shield poses removes those crossings in a reopened, 76-frame check. Coplanar contact and body regions outside the mask remain outside its scope.

![Collision mask: arm in red, shield in yellow](/images/castle-halberdier-01/swordsman-contact68-selection.png)

![Six death frames composited offline on the fixed game canvas with precomputed shadows](/images/castle-halberdier-01/swordsman-death69-sheet.jpg)

The local Castle mod is now version 0.2.0, adding Swordsman bodies, shadows and selection outlines at 1× and 2×. Existing Crusader files retain their hashes. All 76 frames fit the canvas, and format validation reports no errors or warnings. A subsequent native test battle reached its result and loaded 45 distinct 2× body frames across nine groups, plus shadows and outlines, for 106 distinct 2× resources. The observed groups were holding, mouse hover, movement, movement start/end, both turns, downward attack and death. This does not establish runtime coverage of all thirteen groups. Screen capture remained black, leaving visual acceptance and transition review open. Display settings were restored after the test.

![Six Swordsman poses using the client panel crop, composited offline](/images/castle-halberdier-01/swordsman-panel70.jpg)

Reproducing the client's 100×130 panel and crop origin places the holding silhouette at x=51/100. None of the six sampled poses clips the body. This is an offline placement check using the original Castle background, not a native window capture.

The following revision 60 guard and attack images are retained as history; the attacks did not yet have leg lunges.

![Blender draft of the Swordsman high guard](/images/castle-halberdier-01/swordsman-defence60.png)

![Seven-frame attack drafts in three directions; leg lunges are still missing](/images/castle-halberdier-01/swordsman-attacks60-review.jpg)

[The import-tool fix](https://github.com/yzh119/h3-art-pipeline/commit/10f900c) transforms the mesh and armature together and supports explicit placeholder exclusions. The Blender regression covers parented and unparented skinned meshes in three poses, including save/reopen preservation. Models, artwork and complete mods remain private.

<s>The following stills document the actual candidate rather than only its concept: mesh review, holding, the three attack directions, and the current walk key pose. They are Blender review renders, not DEF frames or an in-game installation.</s> The following six images are historical records and no longer establish complete rig or attack acceptance.

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


<details>
<summary>Superseded homepage summary</summary>

<s>Castle has fourteen independently reviewed Meshy meshes. Angel passes its independent sword, flight, three sword directions, hit, defence and move transitions; Archangel passes its independent sword, flight, three sword directions, defence, hit and move transitions in front and side review. These remain private Blender reviews, with no Castle unit installed in the game.</s>

</details>


<details>
<summary>Superseded Swordsman table entry</summary>

<s>replacement Meshy candidate 02: static/rig rest, 8-frame holding, all three 7-frame attack directions and an 8-frame walk pass local review; earlier candidate retains hit/death, defence and move-transition reviews Candidate 02 mesh/armature normalization corrected; recoil leg shape repaired; rigid shield binding pending shield corrected, with 40 new holding, defence and attack draft frames; previous action acceptance withdrawn; not installed</s>

</details>


<details>
<summary>Status and homepage summary before this revision</summary>

<s>The drafts now cover nine groups and 58 frames.</s>

<s>Mesh/rig alignment and shield bending corrected; nine groups and 58 draft frames including lunges, recoil, walking and move transitions; turns, hover, death and game integration remain</s>

<s>The Crusader 1×/2× test mod is installed and new resources were read during a test battle; visual acceptance remains pending. Swordsman mesh/rig alignment and shield bending are corrected, with new body-driven holding, defence and attack drafts. Other Castle creatures remain in progress.</s>

</details>


<details>
<summary>Swordsman status before installation</summary>

<s>| Swordsman | Mesh/rig alignment and shield bending corrected; twelve groups and 70 draft frames, now including both turns and mouse hover; death, full contact review and game integration remain |</s>

<s>The Crusader 1×/2× test package is installed and its resources were read in a test battle; visual acceptance remains pending. The Swordsman has twelve groups and 70 draft frames, including turns and mouse hover. Death and game integration remain; the rest of Castle is still in progress.</s>

<s>The current draft covers twelve groups and 70 frames.</s>

<s>Two two-frame turns and an eight-frame mouse-hover clip have since brought the draft to twelve groups and 70 frames. Death, full contact review and game integration remain unfinished.</s>

<s>These images use the diagnostic camera, which has not been registered for final game frames.</s>

</details>


<details>
<summary>Status before native testing and the new skin</summary>

<s>| Halberdier | Meshy body and original long-weapon components; holding, walk, three attack directions, 6-frame hit and 12-frame defence accepted in front and side review |</s>

<s>| Swordsman | The 1×/2× test candidate is installed with thirteen groups and 76 frames; import alignment, shield bending and detected forearm crossings corrected; native playback, movement transitions and creature-panel review remain |</s>

<s>Crusader and Swordsman 1×/2× test candidates are installed. The Swordsman now has thirteen groups and 76 frames, with corpse support and detected forearm crossings corrected; native playback is pending. Crusader resource loading was verified in a test battle, with visual acceptance still open. Other Castle creatures remain in progress.</s>

<s>These are offline renders; native Swordsman playback, movement transitions and creature-panel placement still need verification.</s>

</details>


<details>
<summary>Status before full-range Halberdier review</summary>

<s>| Halberdier | Existing Meshy model remeshed and given a humanoid skin; static, knee and arm probes rendered; full clips need rebuilding, with the earlier fragment-based rig retained as history |</s>

<s>Crusader and Swordsman 1×/2× test candidates are installed, with new resources read in test battles; visual acceptance remains open. The Halberdier now has a remeshed Meshy model and humanoid skin under joint-deformation review. Other Castle creatures remain in progress.</s>

</details>

<details>
<summary>Homepage summary and Halberdier status before September 18</summary>

<s>Crusader and Swordsman 1×/2× test candidates are installed and their new resources were read in test battles; visual acceptance remains open. The Halberdier weapon binding is corrected, but the two-hand attack exposes support-hand/clothing deformation and has not passed review. Other Castle creatures remain in progress.</s>

<s> /  Halberdier  /  Meshy remesh and humanoid skin obtained; rigid halberd binding corrected, but the six-frame two-hand attack still stretches the support-hand/clothing boundary; rejected and not installed  / </s>

</details>

<details>
<summary>Summary and status before the combined candidate</summary>

<s>Crusader and Swordsman test candidates are installed and read in test battles; visual acceptance remains open. A new arm-separated Meshy Halberdier body avoids the earlier coat strips in a six-frame arm test; shoulder armour and grips still need work. Other Castle creatures remain in progress.</s>

<s> /  Halberdier  /  New A-pose body and Meshy rig obtained; six unarmed arm-test frames stay below the large-edge threshold. Shoulder deformation, grips and full motion remain unfinished; not installed  / </s>

</details>

<details>
<summary>Summary and status before holding and walking</summary>

<s>Crusader and Swordsman test candidates are installed and read in test battles; visual acceptance remains open. The new Meshy Halberdier body now carries the independent weapon in a six-frame front-attack candidate, with grip order and arm/shaft intersections corrected. Finger detail, native camera and remaining clips are unfinished.</s>

<s> /  Halberdier  /  New Meshy body, independent plates and weapon combined in a six-frame front-attack candidate. Limited shaft sampling passes; finger detail, native stance/camera and full clips remain unfinished; not installed  / </s>

</details>

<details>
<summary>Summary before the September 18 attack-direction candidates</summary>

<s>Crusader and Swordsman test candidates are installed and read in test battles; visual acceptance remains open. The Halberdier now has holding, walking and front-attack candidates totalling 20 frames, registered to the original canvas. Attack reach, finger detail and remaining clips still need work.</s>

<s>| Halberdier | New Meshy body and independent weapon; 8 holding, 6 walking and 6 front-attack candidate frames. 2× native-canvas registration and loop checks done; complete visual acceptance, remaining clips and installation pending |</s>

<s>Eight holding frames and six walking frames now share the editable scene with the six-frame front attack: three candidate groups, twenty native frames.</s>

</details>

<details>
<summary>Summary before defence was added</summary>

<s>Crusader and Swordsman test candidates are installed; visual acceptance remains open. Halberdier holding, walking and three attack directions now total 33 candidate frames, with original-frame comparisons and a new high-resolution still. Pose fidelity, fingers and remaining clips need work.</s>

<s>| Halberdier | New Meshy body and independent weapon; holding, walking and three attack directions, 5 groups and 33 candidate frames. Native-canvas comparison done; pose fidelity, fingers, remaining clips and installation pending |</s>

</details>

<details>
<summary>Summary before the hit reaction was added</summary>

<s>Crusader and Swordsman test candidates are installed; visual acceptance remains open. Halberdier now has 45 candidate frames in six groups, including twelve-frame defence and revised attacks. Original-frame comparisons and a high-resolution Blender still show remaining finger and shoulder-trim work.</s>

<s>| Halberdier | New Meshy body and independent weapon; holding, walking, three attack directions and defence: 6 groups, 45 candidate frames. Defence returns to holding; visual detail, remaining clips and installation pending |</s>

</details>

<details>
<summary>Summary before turns and hover</summary>

<s>Crusader and Swordsman test candidates are installed; visual acceptance remains open. Halberdier now has 51 candidate frames in seven groups, including a six-frame hit reaction with hand release. Death, turns, hover and visual detail remain unfinished.</s>

<s>| Halberdier | New Meshy body and independent weapon; holding, walking, three attack directions, defence and hit: 7 groups, 51 candidate frames. Defence returns to holding; visual detail, remaining clips and installation pending |</s>

</details>

<details>
<summary>Homepage and status before layered review</summary>

<s>Halberdier turns and hover bring the working candidate to 59 frames in ten groups. A four-frame death trial is rejected for coat folds and corpse pose, with high-resolution failure images retained. Crusader and Swordsman test candidates are installed; Castle production continues.</s>

<s>Halberdier | New Meshy body and independent weapon; 10 groups, 59 candidate frames including turns and hover. Four-frame death trial rejected; cloth, grip, transitions and installation unfinished</s>

</details>

<details>
<summary>Historical homepage summary: candidate 592</summary>

<s>All 130 Zealot body frames now have geometry-projected shadows, plus a seven-frame curved ward and isolated effect layers. Cloth and effect appearance remain unfinished; the unit is not installed.</s>

</details>

<details>
<summary>Historical homepage summary: candidate 595</summary>

<s>Zealot casting and melee now have six directional effect drafts across 66 frame slots. Small bursts, raised-arm poses and cloth still need revision; the unit is not installed.</s>

</details>

<details>
<summary>Historical homepage summary: candidate 601</summary>

<s>Zealot upward casting and melee have 22 revised body frames, with larger effect trials and an overexposed failure comparison. Cloth, effect appearance and game integration remain unfinished.</s>

</details>

<details>
<summary>Candidate 606 homepage history</summary>

<s>Zealot now has a nine-direction 3D projectile and 1×/2× resource drafts. Transparent-core dark patches are fixed; charge-to-projectile size and colour jumps remain. Not installed.</s>

</details>

<details>
<summary>Before local Zealot installation</summary>

<s>Zealot charge and flight now share a 3D cloud. All 66 directional effect slots and 22 revised arm-pose shadows are consolidated into 130-frame offline layers. Cloth and native validation remain unfinished.</s>

<s>| Zealot | Body drafts cover all eighteen groups, with shared special frames. Death silhouette, cloth and hands, effects and integration remain unaccepted |</s>

</details>


<details>
<summary>Historical summary: first installation test 624</summary>

<s>Zealot 1×/2× test assets are installed. Native battle logs read 62 body frames in six groups and two projectile directions; an actual battle screenshot is included. Sleeve trials and full animation acceptance remain unfinished.</s>

<s>| Zealot | Installed 1×/2× test package: 18 active groups / 150 slots. Native logs read 62 body frames in 6 groups and 2 projectile directions. Cloth, hands, full coverage and release handoff remain unaccepted |</s>

</details>


<details>
<summary>Historical summary: formation tests 629</summary>

<s>Installed Zealot tests now read 113 body images across 14 groups and three projectile directions. A seven-stack melee screenshot is included; defence, special actions and visual acceptance remain under review.</s>

</details>


<details>
<summary>Historical summary: offline mantle trial 633</summary>

<s>Native Zealot tests cover 113 body images in 14 groups. New Blender close-ups and a complete body-motion comparison show a mantle binding repair; the revised binding is still offline.</s>

<s>| Zealot | Installed 1×/2× test: 18 groups, 150 slots. Combined native logs read 113 body images across 14 groups and three projectile directions. Defence, three special groups and visual acceptance remain unfinished |</s>

</details>


<details>
<summary>Historical homepage summary: Zealot installation 638</summary>

<s>The Zealot mantle revision is installed with regenerated shadows and effect occlusion. New ranged and melee tests read 113 body images across 14 groups; layered comparisons are included while visual review continues.</s>

<s>| Monk | original rig: 6-frame holding/walk accepted; candidate 03 adds locally repaired 10-frame front/up and 9-frame downward casts |</s>

</details>

<details>
<summary>Historical homepage summary and Monk overview before shadow export</summary>

<s>The Monk shoulder correction is checked across fifteen groups and 109 body frames. Volume blending activates in ten native frames; the other 99 match the preceding images exactly. New HQ comparisons and an open-source helper are available; no game installation.</s>

<s>| Monk | Fifteen groups and 109 body-draft frames now use the revised waist and independent skirt; one reopened render per group reproduced exactly. Shoulder cloth, palms, effects, shadows and integration remain unfinished |</s>

</details>

<details>
<summary>Historical homepage summary before directional casting</summary>

<s>The Monk now has 109 geometry-projected shadow frames across fifteen actions, with complete layered review sheets. Repeat renders match; spell effects, appearance review and game integration remain unfinished.</s>

</details>

<details>
<summary>Historical homepage summary before melee, defence and projectile layers</summary>

<s>The Monk has three directional 3D casting trials across 29 frames, including 14 original-timing blanks. Full layered sheets and three particle-density trials are shown; flight and game integration remain unfinished.</s>

</details>

<details>
<summary>Historical homepage summary and overview before Monk installation</summary>

<s>Monk melee effects, a curved defence ward and nine projectile directions now join 109 body-and-shadow frames and 62 effect slots. Full comparisons and a high-resolution projectile still are available; not installed.</s>

<s>| Monk | Offline body and geometry-shadow composites cover fifteen groups and 109 frames, including the shoulder correction and independent skirt. Cloth, palms, original proportions, spells, transitions and integration remain unfinished |</s>

</details>

<details>
<summary>Historical homepage summary: stage 949</summary>

<s>A new Meshy dagger follows the Archer’s right hand; high-resolution Blender grip studies include a rejected thumb closure. Hand deformation and melee motion remain unfinished.</s>

</details>

<details>
<summary>Historical roster table: Archer before melee drafts</summary>

<s> Meshy humanoid rig; three native 8-frame body shot directions and separate Meshy bolt layers pass continuity review New blue-and-white Meshy body and humanoid rig; four deformation probes reviewed, old design rejected. Crossbow, actions and integration pending Separate hands are now attached in a static crossbow trial; grip and wrist review continues</s>

</details>

<details>
<summary>Historical summary and roster row before the turn draft</summary>

<s>The Archer gains three six-frame melee drafts, with high-resolution Blender stills and videos. Downward blade visibility and intermediate sole penetration are repaired; grip, transitions and game integration remain unfinished.</s>

<s>New blue-and-white Meshy body, separate hands and crossbow; 13 groups and 86 offline body frames including three dagger melee directions. Grip, five remaining groups, layered export and installation unfinished</s>

</details>

<details>
<summary>Historical homepage summary before Crusader design correction</summary>

<s>Archer melee and two-frame turn drafts now have high-resolution Blender previews. Death, grip repairs, facing transitions and game integration remain in progress.</s>

</details>

<details>
<summary>Historical homepage summary before the empty-handed rigging trial</summary>

<s>The installed Crusader design was rejected for poor fidelity. A new Meshy model restores the round shield, enclosed helm and short white-and-blue cloth, with concept art and actual Blender renders.</s>

</details>

<details>
<summary>Historical homepage summary before the back-weight repair</summary>

<s>The armed Crusader failed pose estimation. A new empty-handed body now has a Meshy rig; four static probes expose shoulder and armpit stretching that needs repair before animation and installation.</s>

</details>

<details>
<summary>Historical homepage summary before the separate-shield review</summary>

<s>Crusader arm weights pulled the middle of the back during raised-arm poses. A local binding repair reduces that displacement; shoulder articulation and armpit stretching remain unfinished.</s>

</details>

<details>
<summary>Historical homepage summary before shield fitting</summary>

<s>The Crusader revision restores the closed helmet, short cloth and round shield. The separate shield mesh is ready for grip work; shoulder trials remain rejected and the replacement is not installed.</s>

</details>

<details>
<summary>Historical homepage summary before the separate-hand bootstrap</summary>

<s>The Crusader shield now has grip hardware and a retaining strap, with a character fit render. Finger-curl trials still penetrate the grip; the replacement is not installed.</s>

</details>

<details>
<summary>Historical homepage summary before grip realignment</summary>

<s>The Crusader gains separate Meshy gauntlet and sword drafts. Palm orientation and malformed hand geometry prompted a replacement; sword proportions are repaired. Equipment contact and animation remain unfinished.</s>

</details>
