---
title: "[AI] Castle cavalry and angels"
date: 2026-09-26T12:20:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
homeSummary: "The integrated Angel and all 94 frames are installed in local version 0.27.33 and shown in battle. The Archangel remains unchanged. Includes gameplay and rejected trials."
tags: ["vcmi", "ai", "graphics", "blender", "meshy", "flux", "castle"]
---

All fourteen Castle creatures have local drafts. On October 1, **0.27.32** gives the Cavalier downward attack a grounded turn and downward thrust, correcting slight hoof penetration during transitions. The Champion has not received these revisions; upward attacks and other roster motion remain under review.

## Angel installed in the game (October 2, 0.27.33)

The integrated Angel body, revised neck and hair, sword-hand connection, and fitted wing roots now replace the local CANGEL assets. All **16 groups and 94 frames** retain the native layout, with 1× and 2× images, shadows, and selection outlines. Packaging reports **0 errors and 0 warnings**. Replaced files were backed up, other creatures remain unchanged, and no VCMI source was modified.

![Local VCMI battle in 0.27.33. The black-haired Angel in the white robe at lower right is updated; the nearby Archangel remains the previous draft. Actual gameplay capture.](/images/castle-top-tier-01/angel-02733-battle.png)

A local test battle confirms the revised Angel appears on the battlefield. The wings follow the new spine, with a local root adjustment applied across all 94 frames. This remains a test draft: hair joins, wrist materials, robe texture borders, and some flight deformation need work. The screenshot and packaging checks do not constitute a complete visual review of every action. **The Archangel has not received these changes.**

<details>
<summary>Pre-installation neck, hair, and wrist trials (status statements describe those earlier drafts)</summary>

## Angel and Archangel face revision history

The latest feedback identifies two problems: both faces look too youthful for mature warriors, and the Archangel's wings detach from the body in flight. <s>The local game remains on **0.27.32**. None of the head or attachment revisions below has replaced the installed sprites.</s> This preserves the pre-installation record. The Angel was installed as 0.27.33 on October 2; the Archangel remains unchanged.

### An integrated head, neck, and body

![Rejected separate-head fit with a visible neck transition. Actual Blender still; not installed](/images/castle-top-tier-01/angel-neck152-rejected.png)

Separate head fitting left a neck ledge, broken hair edges, and mismatched materials. Boundary bridges, skin-color blending, and color-based hair trimming did not produce a usable fit. The Angel now uses a single Meshy 7 reconstruction of the head, neck, and body, keeping the white robe, blue trim, and mature face reference. Geometry cost 30 credits and the rig cost 5. Wings, sword, and the existing articulated sword hand remain separate.

![Side view of the integrated Angel body, an actual high-resolution Blender still. Not installed.](/images/castle-top-tier-01/angel-body162-side.png)

The first motion transfer tilted the head downward and compressed the neck. Astra corrected rotation transfer for the head and neck bones. The idle pose below shows the resulting transition on the rigged body.

![Angel neck after the motion-transfer correction, an actual high-resolution Blender still. Not concept art; not installed.](/images/castle-top-tier-01/angel-body166-neck.png)

Record from the first integrated-body fit on October 2: <s>Twelve poses were sampled across flight, display, forward attack, and death. Flight and the raised-sword pose show an improved neck transition, but the final death pose still stretches hair at the nape, and fitting the existing sword hand leaves a visible wrist seam. Welding vertices along UV seams and recalculating normals did not resolve these defects. A dark-color hair-weight trial also affected the blue neckline and was rejected. The full action set and in-game review remain unfinished. The Archangel has not received an integrated body yet.</s> Subsequent hair and wrist revisions follow below. The installed game has not changed.

### Neck proportions and nape hair

Further work on October 2 slightly shortened the neck and widened its base. The adjustment is a reversible Blender shape key. Selected idle, movement, attack, and death poses have been reviewed; the complete animation set has not.

![Neck proportion revision, an actual high-resolution Blender still. Not installed.](/images/castle-top-tier-01/angel-neck220-proportions.png)

Earlier repair record: <s>The nape remains unfinished. Fine gaps already exist in the source hair geometry, and changing skin weights alone did not remove them. An inner backing exposed a smooth lid; a surface reconstructed from the hair envelope left visible edges. Both were rejected. Filling open boundaries repaired only a few gaps, so the source topology still needs work.</s>

Further work on October 2 retained the new forehead hairline and reused the complete rear locks from the earlier Meshy model. Missing faces were restored and the side lock was fitted around the neck and shoulder. Broad face deletion damaged shoulder skin; local smoothing pulled the collar. Both trials were rejected. These are actual Blender renders of the revised offline model.

![Revised Angel side locks and hair UVs. Actual high-resolution Blender still; not installed.](/images/castle-top-tier-01/angel-hair298-front.png)

![Rear hair and nape after repair. Actual high-resolution Blender still; not installed.](/images/castle-top-tier-01/angel-hair298-back.png)

Skin-colored patches lay inside hair triangles and escaped the earlier vertex-color sampling. Sampling triangle interiors identified 154 faces for UV correction. The same scan found no remaining skin-colored samples afterward, and selected idle, movement, attack, and death stills were reviewed. Hard facets on the nose and brows had a separate shading cause: averaging normals across coincident vertices at UV splits improved the head surface. Remapping small forehead UV patches removed fine lines but left triangular shading patches; that trial has not been adopted.

![Head normal correction preview. Actual Blender still; forehead marks and hairline joins remain unfinished. Not installed.](/images/castle-top-tier-01/angel-face304-normals.png)

![Rejected nape backing: a smooth lid becomes visible when the head bends. Actual Blender still; not installed.](/images/castle-top-tier-01/angel-nape222-rejected.png)

### Joining the sword hand to the new forearm

The existing sword hand retains its finger rig. The new body's open hand was cut away, and a deforming mesh joins the two boundaries. A wrist adjustment that worked in one pose curled into the palm during an attack. Rotating the whole hand changed the sword direction. Neither approach was retained.

A separate animation defect came from recording the hand attachment in world space: between keys, it drifted away from the new wrist. Making adjacent quaternion keys consistent did not fix that separation. Parenting the attachment to the actual hand bone and recording local offsets removed the large gap in the reviewed transition pose while preserving the original integer-frame poses.

![Attack transition after the attachment hierarchy correction. Actual Blender clay render for geometry review, not final materials.](/images/castle-top-tier-01/angel-wrist216-clay.png)

Earlier check: <s>Across four actions, 104 integer and quarter-frame samples showed the bridge endpoints following both source meshes. Local intersection candidates remain in attack and death, and texture and shading continuity are unfinished. The game remains on **0.27.32**; none of these neck, hair, or wrist revisions is installed. The Archangel head and wing attachments also remain in progress.</s>

Check recorded before extending the action set: <s>October 2 revision: a triangle-crossing check calibrated at small scales confirmed genuine folds in the earlier attack and death wrist bridge. Repairing a local notch in the forearm boundary removed detected bridge self-intersections across 104 samples in four actions. Sword world transforms stayed unchanged; the maximum endpoint gap was about 0.00024 mm. This checks the bridge itself, not every contact with the body, hand, or other parts. The wrist still resembles a smooth sleeve, and robe, elbow, and wing-root defects remain. The installed game stays on **0.27.32**. These revisions are offline; the Archangel and full action review remain unfinished.</s>

### The revised Angel across the full action set

Further work on October 2 removed 23 detached fragments around the neck, lowered protruding collar edges, and softened the serrated hair ends. Smoothing discontinuous skin weights improved some robe and elbow folds. Projecting hair outside the body distorted the hair sheets; transferring normals across the hair join introduced black patches. Neither trial was adopted.

![Revised shoulder, collar, and hair ends. Actual high-resolution Blender still; hair joins and texture borders remain unfinished. Not installed.](/images/castle-top-tier-01/angel-hair350-front.png)

The revised body now carries the existing **16 action groups and 94 frames**, including hit reactions, defence, turns, three attack directions, and movement transitions. The repaired hand-bone attachment hierarchy is retained, with local grip offsets recorded for each group. This step used the existing Meshy model and changed no VCMI source code.

![A middle pose from the display animation on the revised body. Actual high-resolution Blender still; wing attachment remains incorrect. Not installed.](/images/castle-top-tier-01/angel-actions353-display.png)

The wrist-bridge crossing check now covers all 16 groups at **328 integer and quarter-frame positions**, with no detected self-intersections in that mesh. This result covers only the bridge. Full-body contacts, complete playback, and comparison with the original motion still require review. Wrist materials, garment texture borders, local hair overlap, and wing attachment remain unfinished, and the Archangel has not received these changes. The installed game remains on **0.27.32**; these Blender scenes have not been exported as a new game replacement.

### Separate-head fitting history

The workflow still uses imagegen references, Meshy geometry, and Astra's Blender assembly. The Angel keeps long black hair; the Archangel keeps brown hair and the winged circlet. The revisions focus on the brow, eye sockets, and jaw. Sculpting the existing heads first produced an awkward chin without the intended character, so separate replacement heads followed.

![Rejected Angel head, actual Blender render. The black cheek regions are geometric tunnels; this model was not installed.](/images/castle-top-tier-01/angel-head131-rejected.png)

The first Meshy 6 Angel head contained tunnels through both cheeks. They remained after disabling transparency and normal maps, and under a plain gray material. Rays passed through the cheek to the back of the head. Welding coincident vertices in a diagnostic copy left no boundary edges, but the tunnels still existed. Local patches then produced visible raised surfaces and UV seams; those repairs were rejected too.

A new Angel reconstruction uses Meshy 7 with remeshing enabled, again costing 30 credits. Of 60 rays through the original cheek defect regions, 26 reached the rear surface on the rejected head and zero did on the new one. Front and side renders also show no recurrence of those holes. This is a regional check, not acceptance of the entire model or its animation.

![New Angel head, a Blender still of the actual 3D model. Not concept art; not installed.](/images/castle-top-tier-01/angel-head137-model.png)

![New Archangel head, a Blender still of the actual 3D model, retaining the winged circlet. Not installed.](/images/castle-top-tier-01/archangel-head131-model.png)

~~Both heads are being fitted to the existing bodies. Cutting the old heads by bone weights initially left jagged neck edges. A clean cut still needs the replacement bust base fitted to the original neck. Overlapping and projecting the surfaces left a protruding bust base, stretching, and flickering, so those fits were rejected. Directly bridging the cut boundaries and their textures is now being tested. Neck weights, material transitions, and the complete action set remain unfinished.~~

October 2 correction: this separate-head fitting route has been discontinued. The Angel now uses the integrated candidate above, with motion and attachment work still pending. The Archangel head candidates remain available as references.

The old flight animation also has a visible gap between the wing roots and the torso. Earlier intersection checks missed attachment continuity. Moving the entire wings inward closed the gap but pushed long feathers through the legs during the downstroke. Local attachment and weight repairs are now under review. The folded-wing and seven-frame flight candidates described below also remain unfinished.

</details>

## Archangel folded-wing revision (October 1, not installed)

<s>The game still runs 0.27.32.</s> The mod reached 0.27.33 on October 2, but the Archangel assets remain unchanged. Comparing the Archangel with the original showed that thinner feathers alone had not fixed the folded silhouette: the old wings hang like straight panels, missing the rounded upper edge and darker inner layers. Bending the old rig produced a pinched elbow. This revision keeps the body and equipment and rebuilds the wings.

![Folded-wing reference generated with built-in image_gen for Meshy; not game animation](/images/castle-top-tier-01/archangel-wing116-concept.png)

Meshy reconstructed front and back surfaces with depth, consuming 30 credits. Astra separated the wings in Blender and adjusted their size and attachment positions. This high-resolution still shows the actual 3D model. It is a folded-pose fitting, not an installed animation replacement.

![High-resolution Blender still of the replacement Meshy wings fitted to the body; not concept art](/images/castle-top-tier-01/archangel-wing116-fit.png)

Two unfolding attempts failed. Treating connected mesh components as individual feathers and assigning bones by their roots opened gaps at the elbow. Blending weights uniformly within each component then produced fragmentation. A diagnostic weld revealed why: the 199 / 227 components per side were separated by texture seams. Merging coincident vertices within 0.000001 scene units on a diagnostic copy produced one connected component per wing.

![Rejected component-based binding with visible elbow gaps during unfolding; Blender still, not installed](/images/castle-top-tier-01/archangel-wing119-rejected.png)

Continuous per-vertex weights now preserve the original texture layout while preventing those seams from separating. The wings have been tested on the seven-frame flying body animation, but the fully opened root still curls and the recovery silhouette needs more comparison with the original. Full action coverage, collision review and in-game acceptance remain unfinished. The Cavalier upward-attack and Champion candidates also remain local and uninstalled.

## Cavalier downward attack

The previous downward attack reused a rotated front attack, including its rearing horse. The original instead turns into a low thrust. This revision retains the repaired grip and changes the horse stance, rider lean and turning phases. An intermediate attempt held a frontal orientation throughout the middle frames and looked stalled; the revised turn peaks at frame 4 and then eases back.

![Nine Blender-rendered frames using the fixed game-export camera; not concept art](/images/castle-top-tier-01/cavalier-down032.jpg)

![High-resolution Blender still: grip and arm at downward-attack frame 4](/images/castle-top-tier-01/cavalier-grip032.png)

Reopening the Blender scene and sampling 33 poses found no lance–horse intersections. Endpoint meshes differ from holding by less than 0.000001 scene units at any vertex. These checks cover specific issues; they do not certify every self-intersection or the appearance of every action.

Local 0.27.32 entered a test battle, confirming loading and battle progression. This capture does not cover all nine downward-attack frames in playback.

![VCMI 0.27.32](/images/castle-top-tier-01/castle-battle02732.png)

<details>
<summary>Record at 0.27.31</summary>

<s>All fourteen Castle creatures have local drafts. On October 1, **0.27.31** extends the Cavalier grip revision across all 13 groups and 81 frames, including leg clearance during turns and the transition into dropping the lance. The Champion has not received this revision. Native-pose comparisons for upward and downward attacks, and motion review of other creatures, continue.</s>

</details>

Local 0.27.31 entered a test battle, confirming loading and battle progression. Every action has not yet been captured in full.

![Local VCMI battle running 0.27.31, with the Cavalier in the lower-right engagement](/images/castle-top-tier-01/castle-battle02731.png)

<details>
<summary>Status at 0.27.30</summary>

<s>All fourteen Castle creatures have local drafts. On October 1, **0.27.30** revises the Cavalier’s front-attack lance timing and grip, retaining the Swordsman arm swing and earlier revisions. Other attack directions, the Champion and roster-wide motion comparisons remain under review.</s>

</details>

Local 0.27.30 entered a test battle and displayed normally. This capture does not cover the complete ten-frame attack playback.

![Local VCMI test battle running 0.27.30](/images/castle-top-tier-01/castle-battle02730.png)

<details>
<summary>Status at 0.27.29</summary>

<s>All fourteen Castle creatures have local drafts. On October 1, **0.27.29** adds the Swordsman’s walking arm swing, retaining the Griffin, Angel and Pikeman revisions. The new version has entered a test battle. Motion and fidelity review across the roster continues.</s>

</details>

![Local 0.27.29 test battle confirms loading and display; a single capture does not verify the complete walking loop](/images/castle-top-tier-01/castle-battle02729.png)

<details>
<summary>Status at 0.27.28</summary>

<s>All fourteen Castle creatures have local drafts. On October 1, **0.27.28** improves Griffin wing layering during flight and death, retaining the larger span and the Angel, Pikeman and Swordsman revisions. A fresh test run produced a usable battle capture of 0.27.28, confirming that the revised assets load and display. Detailed motion review remains necessary.</s>

</details>

![Local VCMI battle running 0.27.28, showing the revised Griffins, Swordsman and Angel; the Pikeman is at the upper right](/images/castle-top-tier-01/castle-battle02728.png)

<details>
<summary>Status at 0.27.27</summary>

<s>All fourteen Castle creatures have local drafts. On October 1, **0.27.27** repairs the Angel wing attachment and clearance while retaining the Pikeman costume, Griffin wings and Swordsman arm revisions. The revised assets have loaded in a test battle, with the Angel relocated and battle progressing after its attack. Detailed appearance and motion review remains necessary.</s>

</details>

![Local 0.27.27 test battle with the revised Angel at the lower right](/images/castle-top-tier-01/castle-battle02727.png)

<details>
<summary>Status at 0.27.26</summary>

<s>All fourteen Castle creatures have local drafts. On October 1, **0.27.26** adds the revised Pikeman costume after the Griffin wings, Swordsman arm and Angel proportion and idle-wing repairs. The new assets have entered a test battle; detailed appearance and motion review remains necessary.</s>

</details>

![Local 0.27.26 test battle; the revised Pikeman is at the upper right](/images/castle-top-tier-01/castle-battle02726.png)

<details>
<summary>Status at 0.27.25</summary>

<s>All fourteen Castle units have local drafts. On October 1, local mod **0.27.25** installed the Swordsman free-arm correction, larger wings for both Griffins, and revised Angel proportions and idle wings. Version 0.27.25 has entered a test battle and has a new capture; exhaustive motion review remains pending. These revisions address feedback on Griffin span, the Swordsman arm and Angel proportions and idle wings. The revised Pikeman body now has offline motions; skirt edging still needs repair and the model is not installed.</s>

</details>

## October 1 model revisions

Version 0.27.25 subsequently entered a local test battle. Capturing only the window owned by this test process produced 93 frames, with the revised assets visible as battle progressed. This does not establish acceptance of every action. Earlier status: <s>The new 0.27.25 revision has not yet been checked in battle.</s>

![Local 0.27.25 test battle with revised Griffins, Swordsman and Angel visible; not exhaustive action acceptance](/images/castle-top-tier-01/castle-battle02725.png)

The 0.27.22 test battle confirmed that all fourteen units could be displayed. This capture predates the latest Swordsman arm correction and does not establish full animation playback quality.

![Local VCMI test battle with fourteen Castle units in 0.27.22; this predates completion of the latest revisions](/images/castle-top-tier-01/castle-battle02722.png)

The Swordsman's free-side elbow projected forward before the forearm bent back down. Astra adjusted the wrist target and elbow direction, keeping the separate hand attached while preserving the sword arm and its existing swing. The correction covers 13 groups and 76 frames. Version **0.27.23** installs 336 body, shadow and outline images with unchanged animation configurations. Installed format validation reports zero errors or warnings; 6,805 other files remain unchanged, and backup and rollback validation passed. Full in-game motion still needs review.

The October 1 walking comparison exposed another issue: the sword hand stayed almost fixed in front. **0.27.29** swings it back toward the hip, bringing the blade closer to horizontal while the free arm comes forward. Both independent hand attachments follow their wrists. The first trial intersected the body with the blade in frame five; reducing that frame’s swing cleared the tested blade, hilt and pommel surfaces in all eight exported poses. Body and matching shadows were rendered again, replacing 28 images while preserving all other actions and configurations. Installed validation and rollback checks passed without errors or warnings. This addresses the arm swing; the gait still differs from the original.

![Top: original H3; middle: 0.27.28; bottom: 0.27.29. Eight walking frames at a common scale; both replacement rows are Blender renders](/images/castle-top-tier-01/swordsman-walk029.jpg)

![High-resolution Blender still of the Swordsman free-arm correction, subsequently applied across the action set; not an in-game capture](/images/castle-top-tier-01/swordsman-arm20-still.png)

Both Griffins now have larger wings while retaining their original folding proportions and body scale. All 170 revised poses fit the game canvas and keep the wings above the ground. The complete set is installed in **0.27.24**, with zero format errors or warnings. The update changes 744 images and the mod metadata; 6,399 other files remain unchanged, including the revised Swordsman. Backup and rollback validation passed. In-game playback still needs review.

![Blender still of the Griffin with larger wings; the corresponding revision is installed in 0.27.24, not an in-game capture](/images/castle-top-tier-01/griffin-wings146-offline.png)

Reviewing all 170 enlarged-wing poses found wing overlap in one flight frame and the end of the death action. Rotating the whole right wing raised the final pose too far, so that trial was rejected. The next revision makes a small flight adjustment and uses Blender shape keys to separate the crossing feathers locally during the fall, preserving the roots and prone silhouette. Some overlap remains at the root connection; this is not a claim of zero intersections across the model. The revision is installed in local **0.27.28**. Actual changes comprise 67 images and mod metadata, with 7,076 other files unchanged. All four animation configurations are unchanged; installed validation reports zero errors or warnings, and backup and rollback validation passed. October 1 verification history: ~~Window captures from this test were black; a usable battle capture of this revision is still missing.~~ A retry that day entered battle and produced a usable capture. The cause of the first black capture remains undetermined.

![Rejected death correction with the right wing raised too far, a Blender still](/images/castle-top-tier-01/griffin-layer159-rejected.png)

![Final death pose with locally separated feathers and a flat silhouette, a Blender still; installed in 0.27.28](/images/castle-top-tier-01/griffin-feather162-death.png)

The Angel continues to use Meshy body and wing geometry, with binding and motion edited by Astra. Comparison with the original led to a more compact idle-wing silhouette, broader shoulders, shorter forearms and a smaller free hand. All 94 frames and shadows are installed in **0.27.25**, with unchanged animation configurations. The update changes 412 images and the mod metadata, leaving 6,731 other files unchanged. Installed format validation reports zero errors or warnings; backup and rollback validation passed. Continuous in-game playback still needs review.

### Revising the Angel wing attachment

Further inspection found feathers entering the back in the compact-wing revision installed in 0.27.25. Moving the entire wings outward cleared the intersection checks but left visibly floating roots from behind. A broader blend into the back then stretched the inner feathers into bands. Neither trial was installed.

![Rejected outward shift with floating wing roots in flight, a rear three-quarter Blender render](/images/castle-top-tier-01/angel-root41-rejected.png)

![Rejected broad binding patch with stretched inner feathers, a Blender still](/images/castle-top-tier-01/angel-root45-rejected.png)

The new candidate keeps the Meshy wings, with a smaller binding transition near each root following the torso. The roots now retain a fixed position relative to the torso while the wings rotate. A right-wing adjustment also clears the sword during the wind-up. All 94 poses were reopened: no sword/body or sword/wing surface intersections, body/wing contact confined to the designated attachment patch, and intact wrist seams and game framing. This does not certify every self-intersection or continuous interpolation. All 94 frames and their shadows are installed in local **0.27.27**. The update changes 412 images and mod metadata, leaving 6,731 other files unchanged. Animation configurations are unchanged; installed validation reports zero errors or warnings, and backup and rollback validation passed. The assets loaded and battle progressed in a test run; this spot check does not establish acceptance of every action.

![High-resolution Blender idle still of the Angel revision candidate; corresponding actions installed in 0.27.27](/images/castle-top-tier-01/angel-root54-holding.png)

![Flight pose of the same model, a high-resolution Blender still; corresponding actions installed in 0.27.27](/images/castle-top-tier-01/angel-root54-moving.png)

![High-resolution Blender wind-up still after clearing the right wing; corresponding actions installed in 0.27.27](/images/castle-top-tier-01/angel-root54-attack.png)

![Final death pose of the same model, a high-resolution Blender still; corresponding actions installed in 0.27.27](/images/castle-top-tier-01/angel-root54-death.png)

<details>
<summary>October 1 export-stage record</summary>

<s>local mod **0.27.24** installed the Swordsman free-arm correction and larger wings for both Griffins. A battle capture is available for 0.27.22; the new 0.27.24 revision has not yet been checked in battle.</s>

<s>The Angel continues to use Meshy body and wing geometry, with binding and motion edited by Astra. Comparison with the original led to a more compact idle-wing silhouette, broader shoulders, shorter forearms and a smaller free hand. The revision covers 94 frames and is being rendered; it remains an offline candidate.</s>

</details>

![High-resolution Blender still of the Angel proportion and compact-wing revision, now installed across the action set in 0.27.25; not an in-game capture](/images/castle-top-tier-01/angel-proportion28-offline.png)

An earlier trial pointed the first wing joint upwards and folded the next two downwards. The existing weights curled the upper feathers into loops, so that version was rejected. The current candidate retains smoother feather geometry while reducing the idle silhouette, with the extended span retained in flight.

![Rejected Angel fold trial with visibly curled upper feathers](/images/castle-top-tier-01/angel-fold26-rejected.png)

<details>
<summary>Opening recorded at version 0.27.22</summary>

<s>All fourteen Castle units have local drafts, with realism revisions continuing. Local mod **0.27.22** installs larger, more visible claws and revised poses for both Griffins, retaining the Archangel collapse from 0.27.21. The approved Crusader is unchanged. Feather joins, motion fidelity and actual battle display still require review.</s>

</details>

<details>
<summary>Status recorded at version 0.27.21</summary>

<s>All fourteen Castle units have local drafts, with realism revisions continuing. Local mod **0.27.21** includes the revised Griffins and an updated Archangel collapse with folded legs, closer wings and downward feather tips. The approved Crusader is unchanged. Feather joins, motion fidelity and actual battle display still require review. The latest Griffin claw revision is described below and remains offline while its complete animation is exported.</s>

</details>

<details>
<summary>Status recorded at version 0.27.20</summary>

<s>All fourteen Castle units have local drafts, with realism revisions continuing. The local mod is **0.27.20**, including the revised Griffin and Royal Griffin alongside the Marksman, Swordsman, Angel and Archangel drafts. The approved Crusader is unchanged. Further Archangel leg-fold and wing-enclosure work remains offline in Blender and has not replaced its installed animation. The desktop is locked, so in-game visual verification remains pending.</s>

</details>


<details>
<summary>Status recorded at version 0.27.19</summary>

<s>All fourteen Castle units have local drafts, with realism revisions continuing. Local mod **0.27.19** installs the revised Archangel after the Marksman, Swordsman and Angel: its new body, griffin shield and thin-feather wings cover all 16 native groups and 91 frames. The final death fold remains too wide, so this is a local test version with further refinement pending. Griffin review and revision have begun; the approved Crusader is retained. This GUI capture was black, and the Mac was confirmed locked, so battle display of the new assets remains unverified.</s>

</details>


![Complete 0.27.18 Angel assembly, a 1400 × 1600 Blender still with revised body, wing roots and blade; this is not a battle capture](/images/castle-top-tier-01/angel-realism03-complete.png)

## Version record: 0.27.8–0.27.18

<details>
<summary>Status when the Angel was installed in 0.27.18</summary>

<s>All fourteen Castle units have local drafts, with realism revisions proceeding unit by unit. Local mod **0.27.18** installs the revised Angel after the Marksman and Swordsman, with a blue-edged long robe and all 16 native groups, 94 frames. The Archangel has new grips, a corrected griffin shield and replacement wings, with 65 non-death poses rechecked; its collapse now clears the main surface checks but needs a tighter folded silhouette before installation, followed by Griffin review. The approved Crusader is retained. The game stayed on a black startup screen during this check, so there is no new Angel battle capture yet.</s>

</details>

<details>
<summary>Earlier introduction and battle captures through 0.27.17</summary>

<s>All fourteen Castle units have local drafts, but the Angel, Archangel and other models still need substantial revision. Local mod **0.27.17** installs the realistic Swordsman after the Marksman, with all 13 actions and 76 frames. The approved Crusader is retained. The Angel and Archangel are next, followed by a review of the Griffins.</s>

![Local VCMI battle running 0.27.17: revised Swordsman fourth from the top on the right, below the Griffin. This bounded run confirms loading and display, not every action in full](/images/castle-top-tier-01/castle-battle02717.png)

<s>All fourteen Castle units have local drafts, and several still need substantial work. Local mod **0.27.16** adds the revised Marksman, matching the more realistic Pikeman, Halberdier and Archer, with all 16 actions and 97 frames installed. The new Marksman stands second from the top on the left in the battle below. The user liked the Archer revision. Next comes the Swordsman, while retaining the approved Crusader, then the Angel and Archangel, followed by a review of the Griffins.</s>

![Local VCMI battle with 0.27.16: revised Marksman second from the top on the left, Archer opposite on the right. This bounded run verifies loading and display, not complete playback of every action](/images/castle-top-tier-01/castle-battle02716.png)

<s>All fourteen Castle units have local drafts, and several still need substantial work on costume, colour, proportions and motion. Local mod **0.27.15** includes the revised Pikeman's 76 frames, Halberdier's 63 frames and Archer's 96 frames. The Archer now has separate waist equipment and repaired crossbow clearance in all three shooting directions and its display action. All three have entered a test battle. Their revised style awaits the user's review; the remaining creatures still need individual attention.</s>

![Local VCMI battle running 0.27.15. The new Archer is second from the top on the right, below the Pikeman; the revised Halberdier is at the upper left](/images/castle-top-tier-01/castle-battle02715.png)

![Local VCMI battle running 0.27.14, with the new Halberdier at the upper left and Pikeman at the upper right](/images/castle-top-tier-01/castle-battle02714.png)

![Local VCMI battle running 0.27.13. The revised Pikeman is at the upper right; the other creatures retain their earlier drafts](/images/castle-top-tier-01/castle-battle02713.png)

</details>

The following records each version's changes and verification at the time. The latest Pikeman work appears under “Realism revision.” Earlier status on 26 September: <s>The local mod is at 0.27.12, refining the Marksman's three melee impact poses. It retains the bareheaded, blue-clad Pikeman, upright cavalry lances and gold Royal Griffin forelegs and talons.</s> Version 0.27.13 replaces that Pikeman while retaining the other units.

Both carry the lance upward while standing and moving, lower it during an attack, and raise it again afterward. Each retains the original 13 groups and 81 frames. Body, shadow and selection layers at 1× and 2× total 342 PNGs per unit. Both packages passed format validation with zero errors and warnings, and installation preserved backups and rollback scripts. This update checked the exported frames and installed files; it has no new battle screenshot. The battle image in the historical record below shows an earlier version.

![Original H3, version 0.27.6, and installed 0.27.8, from left to right; Cavalier above, Champion below. The new sprites are Blender renders; original pixels are enlarged with nearest-neighbour sampling](/images/castle-top-tier-01/cavalry-upright3274.png)

On October 1, **0.27.30** updates the Cavalier’s ten front-attack frames. The previous lance was already level in frame three; the revision delays lowering until around frame five. A wrist-only timing trial drove the rear shaft through the gauntlet, and two elbow-only trials failed too. The selected revision preserves the lance’s world position and direction, turns the palm relative to the handle and solves the arm with two-bone IK. During the level thrust, an additional palm rotation moves the forearm away from the shaft. Reopening 145 sampled poses gives a maximum wrist-target error of about 0.00000038 metres. Contact checks still include the grip and a small cuff transition; this is not a claim of zero intersections throughout the model.

The body frames and matching shadows are installed: 40 images and metadata changed, 7,103 files stayed unchanged, and animation configurations were preserved. Installation and rollback checks passed. The native downward attack lowers its lance earlier, so it must be reviewed separately. Other directions and the Champion retain their previous assets.

![Rejected wrist-only trial, with the rear shaft passing through the gauntlet; a high-resolution Blender close-up](/images/castle-top-tier-01/cavalier-grip-failed3275.png)

![Revised level-thrust grip, a high-resolution Blender close-up; the complete poses appear below](/images/castle-top-tier-01/cavalier-grip030.png)

![Ten Cavalier front-attack frames and matching shadows installed in 0.27.30, rendered in Blender at game resolution](/images/castle-top-tier-01/cavalier-front030.jpg)

**The full-action grip revision in 0.27.31.** The remaining actions keep their lance trajectories while the palm and arm are repositioned together. The display action and left turn also exposed an old shaft–leg intersection. The hand and lance now move outward together, then return smoothly. Transition checks covered idle, movement start and stop, display, turns and death. The old right-turn wrist orientation did not match its neighbouring actions, and the death clip had missed the upright-lance revision. Reusing those transforms produced roughly 5–9 centimetres of wrist displacement at transitions. The revised right arm and lance now reverse the left-turn sequence. Death starts from the corrected carrying pose and blends into the previous falling trajectory during release.

The reopened death scene was checked at 113 samples: no lance–horse surface intersections or lance penetration below the floor were detected. This does not certify every self-intersection in the model. The repaired right-turn and death boundaries now agree at the wrist within floating-point precision. All body frames and shadows are installed, with format and rollback checks passing. The movement-to-stop boundary retains an existing difference of roughly 3 centimetres; native-pose review of the upward and downward attacks remains unfinished.

![The display grip moves outward to clear the leg, a high-resolution Blender still](/images/castle-top-tier-01/cavalier-clearance031.png)

![Top: the death-transition trial; bottom: the revision beginning with an upright lance. Both rows are Blender frames](/images/castle-top-tier-01/cavalier-death031.jpg)

<details>
<summary>Sampled poses across 0.27.31 actions</summary>

![Sampled Cavalier actions and matching shadows rendered in Blender](/images/castle-top-tier-01/cavalier-actions031.jpg)

</details>

Six missing Royal Griffin turn frames are now rendered, bringing the gold talons to all 13 groups and 85 frames. The first colour-threshold pass missed highlights and shaded areas, leaving brown and yellow patches. The replacement mask comes from paired renders of the same pose before and after talon colouring, preserving the silver feathers and brown lion body. The body silhouettes retain their registration. The package passed validation with zero errors or warnings and is installed with rollback files; 0.27.9 has not had a new battle check. The body is still too broad and the folded wings need work.

![Original, previous draft, rejected colour mask, and installed 0.27.9; idle above and a turn below. New images are Blender game frames, not a new battle capture](/images/castle-top-tier-01/royal-gold-talons05.png)

<s>The latest multi-image Meshy Pikeman also failed visual review. It still has a helmet, a mostly white chest and a blocky heraldic motif inherited from the low-resolution references. This candidate was not installed.</s> October 1 correction: the helmet and blocky motif remain problems with that candidate, but treating the light chest region itself as an error was too broad. The subsequent navy-cloth costume also drifted from the original.

![Rejected Pikeman candidate: a high-resolution static Blender render of the Meshy model, with the incorrect helmet and white chest](/images/castle-top-tier-01/pikeman-rejected-multi2.png)

Codex's built-in image_gen produced a new concept from original idle and turn references: bare head, navy clothing, empty hands and an A-pose. Meshy has finished the mesh and rig, at 30 and 5 credits respectively. Front and back review confirms that the helmet and large white chest are gone. All 11 unique action groups and 76 frames are now transferred and installed in 0.27.10. The Marksman's arm extension and the Halberdier's open helmet still need work. Earlier FLUX and direct-Meshy experiments are retained below.

![New image_gen Pikeman concept. The pike is assembled separately; finished game frames appear below](/images/castle-top-tier-01/pikeman-concept03.jpg)

![High-resolution static Blender render of the new Pikeman body in an A-pose, before attaching the separate articulated hands and pike](/images/castle-top-tier-01/pikeman-mesh03.png)

The first motion transfer left open hands several centimetres away from the shaft. The repair keeps the earlier separately modelled hands and finger animation, then fits the new arms to their wrist positions. This also preserves the release during death. Four downward-attack frames needed up to about one centimetre of shoulder movement to reach, without stretching the arm bones. Rendering is complete; samples from every action were inspected for grip, turns and death. Format validation reports zero errors and warnings, all 328 installed files match their recorded hashes, and backups and rollback scripts are retained. Version 0.27.10 has not had a new battle check.

![Previous installed Pikeman, new body with loose grips, and installed repair with articulated hands. Idle above and front attack below; these are Blender game frames](/images/castle-top-tier-01/pikeman-grip04.png)

Codex handled this handover, packaging and installation. The upright-lance scenes and exports were already available at handover.

## Marksman melee blade

<s>The Marksman's melee sword direction remains unresolved.</s> Version 0.27.11, installed on 26 September, rotates the blade face and wrist and reduces foreshortening at impact. The previous blade faced the camera nearly edge-on and looked like a thin line. The repair also restores the separately modelled sword hand with its finger animation. All 18 frames across upward, front and downward attacks were updated. Surface intersection checks found no blade contacts with the body or crossbow. Format validation passed and all 424 installed files match their hashes; there is no new battle check yet.

![Original, previous draft and 0.27.11 for each melee direction. New images are Blender game frames. Columns are cropped and fitted independently for inspection, so they do not compare in-game sizes](/images/castle-top-tier-01/marksman-melee05.png)

The assessment at 0.27.11 was: <s>The blade is easier to see, but the full motion still differs from the original: the upward strike angle and arm extension need further work.</s> Version 0.27.12 uses the original impact frames to adjust grip positions and blade angles. The front and upward strikes use arm and clavicle changes; the downward strike also changes the torso, left arm and crossbow. Moving the right hand alone first produced an unreachable target. Bending the torso then left the crossbow overhead, so the left hand and weapon had to move together toward the original upper-left position.

![Original, 0.27.11 and 0.27.12 impact poses, using the same registered crop to compare hand and weapon positions. These are rendered frames, not battle captures](/images/castle-top-tier-01/marksman-pose07.png)

All 18 melee frames were exported again, the 424 installed files match their hashes, and rollback files are retained. Landmarks were read manually from the original images. Body proportions, shoulder deformation and playback still need review; matching a hand position does not establish overall likeness. The Halberdier's open helmet and the Royal Griffin's proportions and folded wings remain unfinished.

## Version 0.27.12 test battle

The local test map includes all fourteen Castle creatures and successfully entered combat. The new blue Pikeman is visible at the upper right, and the Royal Griffin's gold forelegs on the left. The capture also shows scale, colour and occlusion against the actual battlefield. This short run verifies loading and display; it did not capture complete playback of all three Marksman melee directions and does not sign off the full animation set.

![Local VCMI test battle running 0.27.12, with Castle's base and upgraded creatures on opposing sides](/images/castle-top-tier-01/castle-battle02712.png)

## Realism revision

After seeing the battle capture, the user found the Pikeman and other drafts too cartoonish. This iteration has not passed visual review. A bare head, blue clothing and working animations address only part of the problem; balloon sleeves, broad bright edging, puffed trousers and smooth surfaces still suggest a toy.

The material audit also found a pipeline error. The original Pikeman mesh GLB has metallic 0, roughness 0.8 and no emission. Meshy's rigged GLB adds emissive colour and strength 1, while omitting metallic, which imports into Blender as the default 1. The modelling preview had corrected these settings, but motion transfer did not restore the original material. The inspected Marksman, Halberdier and Archer action scenes have similar settings. A controlled render with metallic and emission disabled still looks stylized, so geometry, textures and lighting need attention too.

### Revisiting the Pikeman costume, October 1

The attempt to reduce the cartoonish costume also simplified the light chest structure into a navy cloth doublet. A fresh comparison restored light silver chest protection, blue clothing and narrow yellow edging. Steel remains a modeling interpretation of the low-resolution region, requiring fidelity review. Meshy completed the mesh and rig for 30 and 5 credits respectively. Restoring the original PBR material included verifying matching UVs across 74,521 triangles.

The new body retains the existing pike and separate gripping hands across 11 groups and 76 frames. Maximum wrist-target error is approximately 0.0053 mm, with less than 0.6 mm of shoulder adjustment. All images fit the original canvas. These checks cover grip alignment and output. After the edging repair and shadow render, **0.27.26** installs 326 images across 11 groups and 76 frames. Installed validation reports zero errors or warnings, with other creature files unchanged. A test battle confirms loading; detailed action review remains outstanding.

![High-resolution Blender still of the new Meshy Pikeman body; recorded before the edging repair; the revised version is installed in 0.27.26](/images/castle-top-tier-01/pikeman-costume05-model.png)

![Blender still after attaching the existing pike and separate hands to the new body; recorded before the edging repair; the revised version is installed in 0.27.26](/images/castle-top-tier-01/pikeman-costume05-holding.png)

The installed repair fits four front skirt-border curves and adjusts blue and yellow material only near those lines, across every action. Body geometry, motion and original PBR textures are preserved. One intermediate shader trial left the vertex alpha at its default and turned the body white; it was rejected. Correct initialization produced the installed revision. Fine texture irregularities remain.

![High-resolution Blender idle still after the edging repair](/images/castle-top-tier-01/pikeman-costume05-trim09.png)

![High-resolution Blender still of the revised Pikeman attack](/images/castle-top-tier-01/pikeman-costume05-attack.png)

Earlier failed trial, October 1: <s>The skirt edging still has jagged gaps. An attempted vertex-material repair smeared yellow across the border and was rejected. The motion draft above retains its original material, with this detail still pending repair.</s>

![Rejected edging repair with smeared yellow borders, retained as a failed trial](/images/castle-top-tier-01/pikeman-trim04-rejected.png)

<details>
<summary>Record at model submission on October 1</summary>

<s>The attempt to reduce the cartoonish costume also simplified the light chest structure into a navy cloth doublet. After the user flagged the clothing, a fresh comparison with the original led to a reference with light silver chest protection, blue clothing and narrow yellow edging. Steel is a modeling interpretation of the low-resolution light region and still needs assessment in the actual mesh. The new built-in imagegen concept has been submitted to Meshy; it has not replaced the installed Pikeman.</s>

</details>

![Revised Pikeman modeling concept; corresponding Blender stills appear above, recorded before the edging repair; the revised version is installed in 0.27.26](/images/castle-top-tier-01/pikeman-costume05-concept.png)

The new image_gen concept reduces shoulder volume, narrows the pale trim and uses fitted trousers. Meshy completed the mesh and rig for 30 + 5 credits, with [PBR maps enabled](https://docs.meshy.ai/en/api/image-to-3d). The material loss reproduced: the source had normal and metallic/roughness maps, while the rigged result omitted them and added emission.

![New photographic-direction Pikeman concept from image_gen, with restrained clothing shapes and trim. This is concept art, not a Blender render or installed asset](/images/castle-top-tier-01/pikeman-realism04.jpg)

The restoration tool first verifies matching UVs across all 74,835 triangles, then restores the source material while retaining the rig and animation. Its exported GLB keeps the normal and metallic/roughness maps without the added emission. The tool and usage notes are available in the [public code repository](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/restore_rig_materials.py).

![High-resolution static Blender render of the new candidate in an empty-handed A-pose, shown separately from its concept](/images/castle-top-tier-01/pikeman-realism04-model.png)

![Original, installed draft rejected as cartoonish, and new candidate with restored material. New and old drafts use the same game camera and registered crop; the idle frames are enlarged for inspection](/images/castle-top-tier-01/pikeman-realism04-game-scale.png)

Status during the single-frame experiment on 26 September: <s>Idle motion and the separate gripping hands have been transferred, and one frame rendered at game resolution. Costume volume and bright decoration are reduced, but the full animation set and battle checks remain unfinished. This candidate has not replaced the old model in 0.27.12, and its style has not been signed off.</s>

All 76 frames are now rendered with a more directional key light and weaker ambient and frontal fill, giving the cloth folds and boots clearer form. Every action scene retains the normal, roughness and metallic maps without emission. The separate finger animation is preserved, with the new arms fitted to its grip positions. Format validation reports zero errors and warnings, and all 328 installed files match their hashes. Backups and a rollback script are retained.

![Samples from every Pikeman action in 0.27.13, rendered in Blender with a shared camera and lighting, including three attacks and death](/images/castle-top-tier-01/pikeman-realism04-actions.jpg)

The revised unit has entered a local test battle, shown at the beginning of this article. This short run confirms loading and display; it does not validate every animation in playback or establish that the other Castle creatures have completed their realism revisions.

## Halberdier helmet and clothing

The previous Halberdier covered the original's visible face with a closed faceplate and reproduced its chest emblem as pixel blocks. A new built-in image_gen reference retains the blue-and-yellow clothing, white griffin and shoulder plates, with less inflated fabric. Meshy generated the replacement with PBR maps for 30 credits.

![Realistic Halberdier modelling reference from built-in image_gen. Empty hands allow the polearm to be attached separately](/images/castle-top-tier-01/halberdier-realism03-concept.jpg)

![Static Blender render of the actual Meshy model, retaining the open helmet and clean emblem. The back has also been inspected; animation integration is still pending](/images/castle-top-tier-01/halberdier-realism03-model.png)

Rigging subsequently completed for 5 credits. The source material was restored after verifying matching UVs across 74,318 triangles. Status at the single-frame trial: <s>The game still uses the earlier Halberdier. Grip and motion work remain: the source action scene has no separate finger bones, so the Pikeman hand-repair script cannot simply be reused.</s>

The earlier model already had closed-grip geometry and release shape keys. Its hands were retained separately, with the new arms fitted to the original wrists and the hit/death release drivers preserved. All 11 groups and 63 frames are rendered. Material maps and hand-release values passed frame-by-frame checks, and samples from every group were visually inspected. Format validation reports zero errors and warnings; all 278 installed files match their hashes. Version 0.27.14 retains backups and a rollback script.

![Blender frame samples from the revised Halberdier, including attacks, hit reactions with hand release, and death](/images/castle-top-tier-01/halberdier-realism03-actions.jpg)

The battle capture at the beginning of this article confirms loading and display. The short run did not cover complete playback of every action, and the art still needs further review.

## Archer colour placement and proportions

The previous Archer expanded the costume into a large blue-and-white chest split and had a visibly washed-out face. A new built-in image_gen reference follows the original's dark kettle helmet, pale neck protection, blue chest with white heraldry and asymmetric hose. The crossbow and melee dagger remain separate props. Meshy generated the replacement body with PBR maps for 30 credits, and its front and back have been inspected in Blender.

![Realistic Archer modelling reference from built-in image_gen, with empty hands for separately attached weapons](/images/castle-top-tier-01/archer-realism03-concept.jpg)

![Static Blender render of the actual Meshy Archer model, retaining the blue chest and asymmetric hose](/images/castle-top-tier-01/archer-realism03-model.png)

Source scenes for all 16 action groups and 96 frames have been located and checked. Rigging cost another 5 credits; source materials were restored after matching UVs across 72,659 triangles. The first 22 frames cover idle, forward shooting and forward melee, retaining the existing hands, crossbow, bolt and dagger motion.

![Three Archer motion probes rendered through the game camera in Blender; these are not battle captures](/images/castle-top-tier-01/archer-realism03-probes.jpg)

The recovery pose in shooting frame 7 put the crossbow stock through the new chest. Moving the weapon and both hands forward by 4 cm cleared that frame, but intermediate poses still collided and wrist mismatch reached almost 6 cm. A second attempt applies a smooth forward offset between frames 6 and 8, peaking at 8 cm, and refits both arms at denser intervals. After reopening the scene, 113 samples showed no crossbow/body surface overlaps. Intermediate wrist mismatch remains about 7 mm. This check excludes finger contact, containment and the other clips.

![Recovery frame 7: initial transfer, single-key trial and continuous repair, using the same camera and crop. The middle trial fails between frames, which this still alone cannot show](/images/castle-top-tier-01/archer-realism03-recovery.jpg)

Status during the 22-frame trial: <s>The other actions remain unexported. Melee equipment clearance and the original waist equipment also need review. This version has not been installed.</s> All 16 groups and 96 frames are now exported. Upward and downward shooting had the same recovery collision and received the continuous repair. An 8 cm offset in the display action exceeded arm reach; reducing it to 6 cm passed the sampled check. A separate slender leather attachment at the right hip was modelled in Blender and follows the pelvis.

Across all 96 exported frames, PBR maps are retained, with no crossbow/dagger surface overlaps against the body and no waist-case overlaps with weapons or floor penetration by the case. These checks exclude finger contact, body self-intersection and complete subframe motion. Samples from every action were visually inspected. Format validation reports zero errors and warnings, and all 630 installed files match their hashes. Version 0.27.15 retains backups and rollback instructions. The battle capture at the beginning confirms loading and display; complete in-game playback of every action has not been recorded.

<details>
<summary>Archer samples from every action</summary>

![All 16 Archer actions in 0.27.15, rendered through the game camera in Blender, including waist equipment and repaired crossbow recovery](/images/castle-top-tier-01/archer-realism03-actions.jpg)

</details>

## Matching the Marksman's style

The user asked for the Marksman to match the new Archer's realism. Built-in image_gen used the original equipment and the Archer reference to retain a pointed helmet, shoulder-covering mail and reinforced bracers while matching the human proportions, blue fabric and leather boots. Meshy completed modelling and rigging for 30 and 5 credits. Material restoration verified matching UVs across 74,003 triangles.

![Marksman modelling reference from built-in image_gen, matching the new Archer's visual style](/images/castle-top-tier-01/marksman-realism03-concept.jpg)

![Static Blender render of the actual Meshy model. Stray pale motifs on the rear skirt are separately tinted blue with a local material mask; source textures remain intact](/images/castle-top-tier-01/marksman-realism03-model.png)

Version 0.27.16 installs all 97 Marksman frames. The replacement retains the articulated hands and separate weapons. Walking and display poses adjust the two-handed crossbow hold; melee uses a steadier left-arm hold while the right arm swings the sword. Defence, hit reactions, death and movement transitions were also fitted to the new body. All exported frames retain PBR materials and pass body/weapon surface-intersection checks. Format validation reports zero errors and warnings, and an independent reread verifies all 424 installed files. Backups and rollback instructions are retained. The battle capture at the top confirms local loading and display.

![Blender render samples from all 16 Marksman actions, comprising 97 exported frames](/images/castle-top-tier-01/marksman-realism03-actions.jpg)

![Exported poses for the three melee directions and defence: separate crossbow and sword grips, with the crossbow raised for defence](/images/castle-top-tier-01/marksman-realism03-combat.jpg)

Several failed repairs exposed tooling faults. Choosing the older of two body rigs discarded earlier pose corrections. Restoring world-space bone matrices repeatedly during pose search accumulated parent-transform errors: one candidate cleared the weapon while detaching the wrist. Restoring local bone poses and checking wrist alignment separately caught that failure. Existing fractional-frame keys also survived newly inserted keys, so complete replacement of the edited curves was necessary for continuous-motion repairs.

**This delivery covers VCMI's discrete sprite frames.** Some source scenes still have cuff intersections or grip misalignment between those frames. They need further curve work before use as continuous three.js animation. The exported-frame checks do not certify containment, every finger contact or body self-intersection.

Initial trial recorded on 26 September, before installation: <s>The melee scenes retain both an older rig and the more recently repaired body rig. Motion transfer now explicitly selects the repaired one so those pose changes survive. The first 28 frames cover idle, forward shooting, forward melee and downward melee; weapon and hand-attachment transforms match their repaired sources. The replacement body introduces crossbow/body intersections, and two melee recovery frames also intersect the blade. This version is not installed; motion adaptation remains necessary alongside the style change.</s> The installed result above supersedes that pending status; the early failure sheet remains below.

![Samples from the first 28 Marksman frames, rendered in Blender. Melee intersections remain; this sheet records the pre-repair state](/images/castle-top-tier-01/marksman-realism03-probes.jpg)

## Revising the Swordsman

The user asked to keep the Crusader, revise the Swordsman next, then address the Angel and Archangel before reviewing the Griffins. The previous Swordsman had mail sleeves, an overly pointed helmet and a slender build with light-looking leg armour. The new reference follows the original costume, using the Crusader for believable materials and the Archer for a consistent photographic treatment. It restores bare upper arms, dark steel head and leg protection, and a short blue-and-white tabard, without adding a shield, cloak or scabbard.

![Swordsman modelling reference generated with built-in image_gen; sword and grip work are separate](/images/castle-top-tier-01/swordsman-realism03-concept.jpg)

Meshy completed the body and humanoid rig for 30 and 5 credits. Astra inspected eight Blender views and restored the source PBR materials after verifying matching UVs across 74,006 triangles. The following 1400 × 1600 still shows the actual mesh.

![High-resolution static Blender render of the new Meshy Swordsman body, captured before action adaptation and installation](/images/castle-top-tier-01/swordsman-realism03-model.png)

On 27 September, **0.27.17** installs all 13 Swordsman actions and 76 frames. Meshy supplied the body and humanoid rig. Astra reused articulated Meshy hands from existing work, replaced the open palms, built a leather hilt and steel pommel, adjusted the thumb and grip, and adapted walking, attacks, defence, reactions, death and turns.

![Static Blender close-up of the Swordsman grip, showing articulated fingers and the rebuilt hilt and pommel](/images/castle-top-tier-01/swordsman-realism03-grip.png)

The first transfer aimed the blade toward the camera, making it look short. Correcting its orientation exposed another problem: the old handle was only about 3.8 cm long. Subsequent action probes found a pommel/forearm collision during the wind-up and blade/body intersections during hit reactions. Wrist and weapon poses were adjusted together. Every rendered scene was reopened; all 76 exported poses pass body/blade, body/hilt and body/pommel surface-intersection checks, with no canvas clipping. Format validation reports zero errors and warnings, and an independent post-install read verifies 338 files. Backups and rollback records are retained. These checks cover exported game frames, not continuous 3D interpolation or detailed finger contact.

![Blender review sheet of all 76 Swordsman frames. Subjects are cropped for pose inspection here; the game frames retain their fixed canvas](/images/castle-top-tier-01/swordsman-realism03-actions.jpg)

Initial transfer record from 26 September: <s>The existing motion sources cover 13 groups and 76 frames. An initial transfer produced the eight idle frames, but sword orientation and grip still need work against the original reference. This body is not installed; the local game remains at 0.27.16, with the Crusader unchanged.</s> The installed result above supersedes that pending status; the original failure image remains below.

![First idle-transfer frame through the Blender game camera. Sword orientation and grip remain unresolved; this is a trial record](/images/castle-top-tier-01/swordsman-realism03-holding-probe.png)

## Revising the Angel and Archangel bodies

Work on these two models began on 27 September. The original Angel has dark shoulder-length hair, bare arms and an ankle-length white robe with blue edging. The Archangel wears dark steel armour with gold borders, white skirt panels and a winged headpiece. The earlier drafts departed from those references in robe length, trim, armour materials and shield shape. This pass builds separate bodies, leaving wings, swords and the Archangel's tall shield as independent attachments.

![Angel body reference generated with built-in image_gen; wings and sword are separate components](/images/castle-top-tier-01/angel-realism03-concept.jpg)

![Archangel body reference generated with built-in image_gen; tall shield, wings and sword are separate components](/images/castle-top-tier-01/archangel-realism03-concept.jpg)

Meshy has generated and rigged both bodies, at 30 + 5 credits each. Astra inspected eight Blender views of each model and restored their source PBR materials. These 1400 × 1600 stills show the actual 3D bodies; neither is a complete creature yet.

![Actual high-resolution Blender still of the revised Angel body, with long hair, a long robe and blue edging](/images/castle-top-tier-01/angel-realism03-model.png)

![Actual high-resolution Blender still of the revised Archangel body, with dark steel, gold borders and white skirt panels](/images/castle-top-tier-01/archangel-realism03-model.png)

Initial transfer recorded on 27 September: <s>The Angel's first motion probe covers eight idle and seven flight frames, using the existing wings and sword. The idle silhouette is closer to the original, but automatic skinning pulls the flying robe into two trouser-like legs. The wings also intersect the new body, and the sword grip remains open. Robe controls, hand grips and wing attachment need further work; the Archangel's tall shield and complete motion set are also pending. The original layouts have been checked: 16 groups and 94 frames for the Angel, 16 groups and 91 frames for the Archangel.</s>

![The Angel's first 15 Blender motion probes. Flight robe deformation, sword grip and wing intersections remain unresolved; this sheet records the failed transfer](/images/castle-top-tier-01/angel-realism03-probes.jpg)

Two local repairs followed the initial 15-frame probe. A shared three-part robe control replaces independent leg influence on the lower skirt, restoring a single trailing cloth silhouette in flight. An existing articulated Meshy hand was fitted to the sword, with a skinned wrist transition. Raising the hand-removal weight threshold left skin fragments, and moving the replacement hand did not close the seam; those attempts are retained, while the current candidate uses a separate wrist bridge.

![Angel flight robe before and after repair: automatic leg weights above, shared three-part robe controls below, rendered in Blender](/images/castle-top-tier-01/angel-realism03-cloth-repair.jpg)

![Static Blender close-up of the Angel sword grip and wrist transition; this remains an action-adaptation candidate](/images/castle-top-tier-01/angel-realism03-grip-repair.png)

27 September, before the full motion adaptation:

<s>Reopening all eight idle and seven flight poses shows no separation between the wrist bridge and forearm, and no sword/body surface intersections. This is a local check of those 15 exported poses, not certification of every finger contact or continuous interpolation. Adjusting the idle wing-root angle also removes the earlier arm intersections. Flight wings still intersect the waist and back: modest root translations did not clear every frame, and shortening the inner trailing feathers only reduced some contacts. That wing reshaping has not been selected for delivery. Remaining Angel actions and the Archangel's attachments and animations still need adaptation.</s>

<s>Neither revised Angel body is installed. The local game remains at the Swordsman update, **0.27.17**. The Crusader is retained, and Griffin review follows these two units.</s>

The flight problem was traced to wing geometry extending roughly 35 cm inward beyond the root joint. Translating the roots, twisting the whole wings and shortening inner feathers had not cleared the body consistently. Astra trimmed and capped the surplus root geometry, retained the outer feathers and textures, then made small pose adjustments for flight, turns and hit reactions. Wrist angles in the three attack windups were adjusted to clear the raised wings.

The first full death sequence kept the robe straight, lifting the kneeling body off its intended position. Folding the three robe controls let the body settle lower; the final two poses also needed wing-root clearance adjustments. Every action uses the same 3D body and rig.

A high-resolution still exposed another inherited defect: the sword tip carried a second handle-like structure. That candidate was briefly installed locally and then rolled back. The final version keeps the Meshy hilt and guard, with a single-point blade repaired by Astra in Blender, followed by a fresh export of every action.

<details>
<summary>Retained failed sword render</summary>

![The high-resolution assembly render exposed the extra handle-like geometry at the sword tip; this rejected version is retained as a failure record](/images/castle-top-tier-01/angel-realism03-rejected-sword.png)

</details>

![Final Angel Blender review sheet: 13 independent groups, 76 frames. Three shooting groups reuse the corresponding melee actions, giving 94 packaged frames](/images/castle-top-tier-01/angel-realism03-actions.jpg)

Each final scene was reopened to check all 76 independent exported poses: no wrist-seam separation or surface intersections between the body, sword and either wing were detected. The original body normal, metallic and roughness maps remain linked. These checks cover the integer frames used by VCMI; they do not certify every finger contact, self-intersection or continuous 3D interpolation. The 16-group, 94-frame package passes format validation with zero errors and warnings. All 414 installed files match their recorded hashes, with a backup and rollback script retained.

The local mod is now **0.27.18**, updating only the Angel. The bounded runtime check stayed on a black screen after renderer startup and was ended by the script; it does not demonstrate entry into battle. Older captures have not been presented as evidence for this version. The game still uses the previous Archangel assets while its new body's attachments and actions are adapted.

## Archangel grips, shield and collapse drafts

On 27 September, the revised Archangel body received separate closed gauntlets, a sword and wings. The body's original open hands did not grip the weapon. Existing Meshy gauntlet geometry supplies the closed grip; assembly aligns its cavity with the actual sword handle, shortens the excessive handle length and adds wrist liners. These gloves follow the wrists; this draft does not add individually articulated fingers.

![High-resolution Blender close-up of the Archangel sword grip, shortened handle and wrist connection](/images/castle-top-tier-01/archangel-realism03-grip.png)

The first replacement shield was a mistake. Reading the idle silhouette alone led to a rectangular shield with a central boss. The original turn, defence and death frames show that idle mostly exposes the back, while the front carries a gold griffin. I had also oriented the new front toward the idle camera. This shield cost 30 Meshy credits and remains a rejected trial; it was not installed.

<details>
<summary>Rejected shield concept and assembled Blender render</summary>

![Rejected shield concept from built-in image_gen; the central boss and missing griffin differ from the original](/images/castle-top-tier-01/archangel-realism03-shield-concept.jpg)

![1400 × 1600 Blender still with the rejected shield. The body and grips remain usable; shield design and orientation need replacement](/images/castle-top-tier-01/archangel-realism03-assembled.png)

</details>

With this trial shield, 12 non-death actions have been rendered as 65 independent poses. One attack wind-up needed both upper-arm and wing-root adjustments to clear the sword. The shield arm had also inherited the Angel's free-hand motion, requiring corrected attack, mouse-over and recovery poses. Reopening these scenes confirms retained body PBR maps and no intersections among the tested body, sword, shield and wing surfaces at those exported frames. These results apply to the rejected trial shield and integer frames only; the replacement needs fresh checks, and appearance remains unapproved.

<details>
<summary>Uninstalled motion-transfer review</summary>

![Blender review of 65 non-death poses, still carrying the rejected shield; neither final assets nor a battle capture](/images/castle-top-tier-01/archangel-realism03-actions-pending.jpg)

</details>

The replacement shield has now been generated for another 30 Meshy credits, retaining the gold griffin and rounded lower edge. Meshy duplicated the emblem on the rear, so Astra replaced rear shading in Blender and added a grip, mounts and a continuous metal rim. The shield faces forward and outward from the body: idle exposes the back, while turning reveals the front. Both turn actions also restore the carrying arm pose instead of inheriting the empty-hand motion that tipped the shield sideways.

![1400 × 1600 Blender assembly still from the shield revision, retaining the old wings, showing the shield back in idle; not installed](/images/castle-top-tier-01/archangel-realism03-shield-corrected.png)

![High-resolution Blender still of the shield front, retaining Meshy's gold griffin](/images/castle-top-tier-01/archangel-realism03-shield-front.png)

![High-resolution Blender still of the corrected plain back, grip and geometric rim](/images/castle-top-tier-01/archangel-realism03-shield-back.png)

At the shield-revision stage, still using the old wings, reopening all 65 non-death poses shows no intersections among the tested body, sword, main shield surface and wings, with body PBR maps retained. This excludes the grip, small rim, complete finger contacts and continuous interpolation. Full replacement still requires the death animation.

The inherited death script also needed replacement. It knelt forward, whereas the original recoils, lifts its legs and falls backward, with the wings closing around the body. Recorded on 27 September before replacing the wings: <s>The new backward-collapse draft clears the tested equipment surfaces, but its final wings remain too flat and the shield sits incorrectly. It is still being revised and has not been installed.</s> The later draft below changes the shield tilt and wing geometry. The comparison below includes the original, the rejected kneeling version and the backward-fall draft.

![Original and two rejected collapse drafts; new images are Blender renders, with final wing folding still incomplete](/images/castle-top-tier-01/archangel-realism03-death-rejected.jpg)

## Replacement Archangel wings

On 27 September, the thick, sculptural feathers prompted another wing model. Built-in image_gen supplied a thin-feather concept, and Meshy generated the mesh for 30 credits. Astra split the wings in Blender, bound each to the existing three-bone chain, and explicitly set non-metallic feather shading while retaining colour and normal maps.

![Thin-feather concept from built-in image_gen; this is the Meshy input, not a finished game asset](/images/castle-top-tier-01/archangel-realism03-wing-concept.jpg)

![1400 × 1600 Blender still with the replacement wings. The thinner feathers, wing roots and folded silhouette remain an unapproved draft; not installed](/images/castle-top-tier-01/archangel-realism03-new-wings.png)

Two initial idle and flight poses were checked before transferring all 12 non-death actions, totalling 65 poses. A uniform root adjustment introduced intersections during flight, so each clip now uses a fixed correction. Reopening the saved scenes finds no intersections among the tested body, sword, main shield surface and wings, with body PBR and rigid grips retained. These are exported integer poses; the check excludes all small attachments, complete self-intersections and continuous animation, and does not establish appearance acceptance.

The collapse silhouette remains unfinished. The first new-wing draft grounds the body, tilts the shield and bends the landing feathers through actual 3D deformation. Of its eight frames, the first six clear the tested main surface pairs. Frame seven still puts feathers below the floor, and the final two retain arm–feather intersections. The complete draft below records those remaining failures.

![Eight-frame Blender collapse draft, using a common crop and scale. Floor penetration in frame seven and intersections in the final two remain unresolved; not delivered assets](/images/castle-top-tier-01/archangel-realism03-wing-death-draft.jpg)

A later repair adjusts the final two wing-root poses and gives frame seven a separate feather-grounding shape key. Reopening all eight frames now finds no intersections among the tested main surface pairs; the wing tips in frames seven and eight remain about 3 mm above the floor. The result below still spreads the final wings too widely, like two side fans, whereas the original encloses the body more tightly. Passing these surface checks does not resolve that shape difference.

![Eight Blender frames after the main intersection and floor repairs. The final fold remains wider than the original; not installed](/images/castle-top-tier-01/archangel-realism03-wing-death-repaired.jpg)

The wide mesh also exposed a preview-tool problem: a fixed camera cropped the wing tips. The tool now fits one shared frame across eight viewing angles, checked with this mesh. The [public tool change](https://github.com/yzh119/h3-art-pipeline/commit/746dab3) is available.

Plan recorded before installation on 27 September: <s>The local mod remains **0.27.18** and still uses the previous Archangel. Installation waits for the complete action and appearance review. Griffins follow afterward.</s> The complete action set was subsequently installed as a local test version so the new body can be viewed in game. Final wing enclosure remains unfinished.

## Archangel test version 0.27.19 and Griffin revision

The collapse now begins with lowered wings that open as the body falls, closer to the original opening frames. Several tighter final folds were also tried, but introduced wing intersections with the body, shield and opposite wing. Those trials were rejected. Version 0.27.19 retains the wider fold that clears the tested main surfaces; final enclosure and the later wing-opening timing still need refinement.

![Installed 0.27.19 Archangel collapse frames, rendered in Blender. The opening has changed, while the final fold remains wide; animation fidelity is not complete](/images/castle-top-tier-01/archangel-realism03-death-installed19.jpg)

The full set contains 73 independent rendered poses and melee-action aliases, matching all 91 native frames. Tested main surface pairs clear at integer poses, render bounds are intact, and format validation reports zero errors or warnings. After installation, 396 file hashes were independently verified, with backup and rollback retained. VCMI source and the approved Crusader were unchanged. The GUI capture was black; a subsequent system-state check confirmed that the Mac was locked. This does not establish an asset-loading failure or a successful battle test.

### Folded legs, feather tips and between-frame checks

Comparison with the original also exposed how strongly the boot soles faced the camera. Revised calves and ankles in the final two frames keep the body grounded, while wing-root rotations bring the wings closer to its sides. Simply moving the roots inward caused body or shield intersections. Larger tilts required raising the roots away from the back; those trials were rejected.

![Rejected narrower wing pose with remaining body intersections; an actual Blender still](/images/castle-top-tier-01/archangel-death83-rejected.png)

The outer feather tips now turn downward, with local 3D bending where feathers reach the ground. The following 1000 × 800 Blender still shows the new final-pose draft. All eight frames have been rendered again. Tested main body, sword, shield and wing surface pairs clear at integer frames, with no floor penetration. Feather joins and the final silhouette still need review.

![Archangel final-pose draft with folded legs and downward feather tips; a high-resolution Blender still, not installed](/images/castle-top-tier-01/archangel-death93-still.png)

Sampling the transition from frame seven to eight at one-eighth-frame intervals found brief shield–body intersections. The installed predecessor has the same shield problem, along with intermediate wing intersections. Integer-frame checks did not cover those instants. The game currently uses pre-rendered frames; this is an interpolation issue in the 3D scene that remains to be corrected. Eight checked images do not establish a clean continuous animation.

### Collapse update in 0.27.21

The still and intersection findings above record the work before installation. Subsequent wrist and wing-root adjustments route the shield around the body and keep feather tips above ground. Added keys initially changed the incoming curve handle at frame seven, introducing a right-wing intersection in the preceding interval. Restoring that incoming curve and separately correcting the earlier shield path resolved the sampled contacts.

Reopening the scene and checking frames six through eight at 1/128-frame intervals covers **257 samples**. The tested main body, sword, shield and wing surface pairs clear, and visible meshes remain above ground. The eight exported poses are preserved. This result covers the final two intervals and specified surface pairs, not complete body self-intersection or every other action's interpolation.

The eight replacement frames and shadows are installed in local **0.27.21**. All 396 staged file hashes were checked. Actual changes are 32 death images and the mod metadata; another 7,111 files remain unchanged. Installed format validation reports zero errors or warnings, with backup and rollback verified. Griffins and the Crusader are unchanged by this update. <s>The desktop remains locked, so battle display is unverified.</s> On October 1, a 0.27.22 battle-display capture was added above; full motion review remains pending. Feather joins and details of the original silhouette remain refinement work.

## Griffin reference correction and rigging trials

On 27 September, a fresh extraction of CGRIFF.DEF from the original H3sprite.lod exposed a reference error. The idle image in a directory named native had been rendered from an earlier Blender scene. The original ordinary Griffin has two prominent upright ear tufts and higher foreclaws. Treating a swept-back head as an original feature was incorrect; the new concept and body inherited that mistake and still need correction.

![Left: an earlier Blender draft mistakenly labelled as original; right: an idle frame freshly extracted from the original CGRIFF.DEF, enlarged with nearest-neighbour sampling](/images/castle-top-tier-01/griffin-realism04-reference-correction.jpg)

Meshy completed the body for 30 credits. Automatic rigging returned HTTP 422 with “Pose estimation failed, please provide a valid model”; no rigging task was created. Astra then wrote Blender tooling for a fitted body, foreclaw, hind-leg, tail and wing skeleton. The wings reuse an existing Meshy feather mesh with segmented weights and adjusted colours.

Initial distance-based weights tolerated small movements but stretched chest feathers and claws into strips in a flight pose. The revised approach automatically weights a simplified continuous proxy in Blender, then transfers those weights to the detailed body. Independent checks after reopening the saved scenes confirm unchanged body vertices, faces, UVs and materials. The obvious tearing is reduced, though local deformation still needs work.

![Same body flight pose: failed distance weights on the left, transferred proxy weights on the right; both are Blender renders](/images/castle-top-tier-01/griffin-realism04-binding.jpg)

The [proxy skinning tool and usage notes](https://github.com/yzh119/h3-art-pipeline/blob/main/creature-art/proxy_skin.py) are public. Models and complete mods remain outside the tools repository.

![1400 × 1600 Blender still of the rigged Griffin assembly trial, with attached wings; the original upright ear tufts are still missing and the folded-wing silhouette is unfinished](/images/castle-top-tier-01/griffin-realism04-assembly.png)

Record before the local ear-tuft modelling trial on 27 September: <s>Work currently covers an idle pose trial and four flight poses. Claw height, tail direction, ear tufts and wing folding still need adjustment against the actual original. Stretching the head feathers and assembling clipped wing tips as ear tufts both failed visual review. The full action set, Royal Griffin variant and installation remain unfinished; the game still uses the earlier Griffins.</s>

The holding draft now has eight poses. Individually modelled ear feathers looked like smooth comb teeth, so built-in image_gen supplied a local tuft reference and Meshy generated a replacement for 30 credits.

![Isolated ear-tuft concept from image_gen for Meshy modelling; not a 3D render](/images/castle-top-tier-01/griffin-ear-concept.png)

The actual mesh has a pronounced fragmented surface. Disabling the normal map and fixing roughness did not remove it, so normal settings alone do not explain the result. The rejected close-up is retained below.

![Blender still of the Meshy ear-tuft model, showing the fragmented surface and its gap from the concept](/images/castle-top-tier-01/griffin-ear-mesh-trial.png)

After scaling and head attachment, the paired upright silhouette is restored. A smoothing trial pulled isolated vertices towards the origin; removing it fixed the attachment check at head rotations of 25 degrees in either direction. This verifies attachment only. Granularity, colour and root blending remain unfinished. Status at this trial: <s>The full animation set and Royal variant remain unfinished. No new Griffin has been installed.</s> The ordinary Griffin motion draft and Royal material variant were subsequently added, as described below; neither is installed.

![1200 × 1400 Blender assembly trial with paired upright ear tufts; surface quality remains unfinished, and this is not an installed result](/images/castle-top-tier-01/griffin-ear-assembly-trial.png)



## Complete Griffin animation draft

On 27 September, the ordinary Griffin draft reached **13 groups and 85 frames**: holding, hover response, turns, takeoff, flight, landing, three attack directions, hit reaction, defence and death. Six additional source frames duplicate the turns and are not counted as independent motion. All scenes were reopened to check frame counts, and all 85 previews have intact image bounds. Groups still use offline review framing; game registration and installation remain pending.

<details>
<summary>All 13 groups in Blender previews</summary>

![Ordinary Griffin: 13 groups and 85 Blender draft frames. Preview framing differs between groups; these are neither equally registered game frames nor battle captures](/images/castle-top-tier-01/griffin-actions52.jpg)

</details>

Larger movements exposed another binding error. A left talon crosses the body centreline, and automatic weights assigned it to both hands. Reassigning weights by the two connected claw regions reduced the stretching. Lower chest feathers still carry some arm weights. A position-based attempt to remove those weights damaged the transition further and was rejected.

The first death endpoint exposed the belly and lifted the hind legs too high. The revision changes the side of the fall and lowers the legs and tail, but ground contact and wing folding still need work. Both versions below remain unfinished.

![Rejected death endpoint, a Blender still with exposed belly and raised hind legs](/images/castle-top-tier-01/griffin-death50-rejected.png)

![Revised death endpoint after changing the roll direction, hind legs and tail; a Blender still of an unfinished draft](/images/castle-top-tier-01/griffin-death51-draft.png)

<details>
<summary>Status before mouth integration on 27 September</summary>

<s>Motion coverage is complete as a draft. Mouth opening, ear-tuft surface quality, chest deformation and some wing angles remain unfinished, and the Royal Griffin has not adopted the new body. The installed Griffins are unchanged.</s>

</details>

### Griffin mouth

The Meshy body's upper and lower beak were joined, leaving the mouth closed throughout attacks. The Blender revision separates the lower mandible and adds a jaw bone, beak tip, oral lining and tongue, while retaining the existing body, limb, tail and wing animation.

The first capping attempt treated duplicate vertices along texture seams as holes, leaving a dark gap even with the jaw closed. Welding coincident vertices in the mandible before filling the actual cut largely restored the closed outline. An additional surface connects the moving jaw at its hinge.

<details>
<summary>Failed capping in the closed-mouth render</summary>

![Rejected capping attempt: the closed mouth still has a dark gap, shown in an actual Blender still](/images/castle-top-tier-01/griffin-jaw-cut-failed.png)

</details>

![Blender close-up with the separate mandible and oral lining; mouth corners and interior remain a draft](/images/castle-top-tier-01/griffin-jaw-open-draft.png)

The mouth assembly is now present in all 13 action scenes and their 85 frames. Independent reopening confirmed unchanged transforms for every existing bone at every integer frame; only the jaw adds motion. All nine forward-attack frames were rendered, plus one probe from each other group. The full game asset set has not been re-exported with the new mouth.

![Mouth-opening trial during the forward pounce, a Blender still of the complete assembly rather than a battle capture](/images/castle-top-tier-01/griffin-jaw-attack-draft.png)

Status before the Royal material pass on 27 September: <s>Mouth corners and interior shape still need refinement, alongside ear-tuft quality, chest deformation, death and wing poses. The Royal Griffin, shared game framing and installation remain unfinished.</s>

### The Royal Griffin body

The Royal variant uses the same Meshy body and wings with the Blender rig. Its materials now follow the original silver-white head, neck and wings, gold beak and foreclaws, and brown lion body, retaining detail from the source textures. The first gold mask reached onto the forehead; the revised mask confines that area to the beak.

![Royal Griffin idle assembly, a 1200 × 1400 Blender still; ear quality and motion remain unfinished, and this version is not installed](/images/castle-top-tier-01/royal-griffin-newbody-idle.png)

The Royal materials are present in **13 action scenes covering 85 frames**. Independently reopening every scene confirmed identical mesh geometry and bone transforms at every integer frame, including the articulated mandible. One frame per group was rendered for material review. The complete Royal frame set has not been exported or installed.

![Royal Griffin open-mouth attack, a 1200 × 1400 Blender still using the same articulated mouth and animation](/images/castle-top-tier-01/royal-griffin-newbody-attack.png)

The earlier ear tufts were granular. A voxel reconstruction trial attempted to merge the fragments and project the Meshy texture back onto the surface. The finer result retained extensive holes; the coarser result formed lumpy masses. Neither was adopted.

<details>
<summary>Two rejected ear reconstructions, shown as Blender close-ups</summary>

![Fine voxel reconstruction retains fragments and holes; rejected](/images/castle-top-tier-01/griffin-tuft-remesh-fine-failed.png)

![Coarse reconstruction produces lumps rather than feathers; rejected](/images/castle-top-tier-01/griffin-tuft-remesh-coarse-failed.png)

</details>

Status before the ear replacement on 27 September: <s>Both Griffins remain offline drafts. Ear tufts, mouth corners, chest deformation, death and some wing poses need further work before shared game framing, full rendering and installation. The installed Griffins are unchanged.</s>

### Broad ear feathers

The previous mesh contained **1,571 disconnected components** in one ear tuft, including fragments at the tips. A new built-in image_gen reference uses seven broad, continuous feathers with much less fine fluff. Meshy 6 reconstructed it for **30 credits**.

<details>
<summary>The new modelling reference</summary>

![Built-in image_gen concept of seven broad feathers for Meshy reconstruction; not a 3D render](/images/castle-top-tier-01/griffin-ear-broad-concept.png)

</details>

The resulting feathers are coherent, but the asset is thin from the side. The first head attachment looked like spikes at a distance. Shortening, spreading and curving the cluster in Blender, then adding a shorter rear layer, gives it more volume. The render below shows the replacement for the fragmented surface. The roots could still blend more naturally into the head.

![Actual Blender close-up of the layered ear assembly, retaining the Meshy texture and feather geometry](/images/castle-top-tier-01/griffin-ear-layered-closeup.png)

The ears are present in both Griffins' **13 action scenes and 85 frames each**. Reopening every scene verified 170 integer-frame poses: existing bone transforms and non-ear geometry are unchanged, and the tufts follow the head without the earlier pull towards the origin. Idle, forward attack, flight and turn probes were rendered for each variant. Full game-frame export remains pending.

![Royal Griffin with the same layered ear geometry, a 1200 × 1400 Blender still; not installed](/images/castle-top-tier-01/royal-griffin-layered-ears.png)

Status before the death and weight corrections on 27 September: <s>Both remain offline drafts. Mouth corners, chest deformation, death and some wing poses still need work, followed by shared game framing, export and installation. The installed Griffins are unchanged.</s>

### Death poses and weight corrections

The final pose still looked suspended: foreclaws tucked beneath the body, hind legs raised and wings spread sideways. Extending the forelegs and lowering the hindquarters exposed another problem. Ground alignment used the tail tip as the lowest point, lifting the whole body back up whenever the torso was lowered. The tail had to be laid down before reviewing contact across the body.

<details>
<summary>The floating intermediate pose exposed by a ground render</summary>

![Rejected intermediate pose with actual Blender ground and shadows; one grounded vertex does not establish that the torso has settled](/images/castle-top-tier-01/griffin-death-ground-failed.png)

</details>

Chest feathers also carried influence from both forearms. During correction, a code bug emerged: saving `list(vertex.groups)` before removing memberships leaves stale Blender data references as the collection changes. Some old weights survived and were added to the replacement weights, producing totals as high as **1.81**. Copying numeric group indices before removal fixed that operation. The earlier claw repair had the same bug, so its 4,136 affected vertices were recalculated from the scene preceding that repair.

The [weight replacement helper and Blender regression test](https://github.com/yzh119/h3-art-pipeline/commit/68df57d) are public. The test checks that old memberships disappear and neighboring vertices remain unchanged; it does not establish anatomical fidelity.

Both variants' **13 groups and 85 frames each** were reopened. Body vertex weights now sum to one, with mesh geometry unchanged. The revised chest weights reduce the worst local stretch in the flight trial, although other regions and the later death poses still need work.

The second half of the death sequence now repositions the forelegs, hind legs and tail, with the wings laid flatter over the back. All nine frames were rendered for both Griffins. The stills below frame the final pose separately at high resolution; the animation uses one fixed camera throughout each sequence.

![Ordinary Griffin final death pose, a 1400 × 900 Blender still; local deformation remains unfinished](/images/castle-top-tier-01/griffin-death94-ordinary.png)

![Royal Griffin with the same death animation, a 1400 × 900 Blender still; not installed](/images/castle-top-tier-01/griffin-death94-royal.png)

27 September, before shared camera registration: <s>These remain offline drafts. The forearm-to-chest transition still stretches in the later death poses, and mouth corners and some feather joins need refinement. Shared game framing, export and installation follow those corrections. The installed Griffins are unchanged.</s>

Further trials ruled out weight smoothing, which moved strain to another seam, and volume-preserving deformation, which introduced ground penetration. A smaller elbow and foreclaw adjustment in the final two frames reduced local strain while keeping the claws visible ahead of the head. The first seven frames and the body, head and wing motion are unchanged. The two high-resolution stills above precede this small adjustment.

### Shared game camera

The modelling previews had been framed separately for each action, with different scales for standing and attacking. Both variants now use one fixed orthographic camera across their actions. Registration matches the original standing height of 89 pixels, horizontal centre and foot position. Scale is uniform; the model is not squeezed to match the original width.

![Ordinary and Royal Griffin camera checks: death, flight, downward attack, forward attack and standing; every cell uses the same crop and scale, from offline Blender renders](/images/castle-top-tier-01/griffin-fixed-camera114.jpg)

27 September, before full export: <s>All ten probes fit inside the canvas. The complete 170-frame sequence is being exported with this registration, alongside shadows projected from each posed mesh onto a fixed ground plane. Full export, shadow review, packaging and in-game verification remain pending, as do checks of local feather joins and mouth corners. The installed Griffins are unchanged.</s>

### Local test version 0.27.20

Reviewing the full action set exposed inconsistent lighting. Idle, mouse-over and both turn groups retained a darker environment, making the creature brighten abruptly when attacking. Both variants now share the same environment lighting. The 44 affected frames were rendered again; reopened scenes have identical geometry and bone motion, and exported alpha channels match pixel for pixel.

![Old dark idle, corrected idle, and attack opening frame; Blender renders with the same camera](/images/castle-top-tier-01/griffin-lighting120.jpg)

All **170 body frames and their shadows** are exported. Each shadow projects the actual posed mesh onto fixed ground and receives the same opacity and blur settings. The 1× and 2× bodies, shadows and selection outlines total 744 images. Native active groups, frame counts and file-format checks pass; validation after installation reports zero errors and zero warnings.

The local Castle mod is now **0.27.20**. All 748 installed asset and configuration files were hash-checked, and 6,395 untouched files were verified unchanged. Backups and a rollback script are retained. The approved Crusader is unchanged. <s>The desktop is locked, so visual verification inside the game remains pending.</s> The October 1 section includes a 0.27.22 battle-display capture; full motion review remains pending.

Outstanding work recorded at 0.27.20: <s>This is still a test build. The foreclaws are small, and mouth corners, feather joins and late-death deformation need refinement. Hit and defence amplitudes also differ from the original. The Archangel final death wing fold remains unfinished as well.</s> The Archangel collapse was updated in 0.27.21 above; further Griffin claw work follows below. Other shape and motion details still require review.


### Claw size and forearm pose

Offline revision after 0.27.21, September 27: the original Griffin has conspicuous raised talons, while the current model holds its smaller claws close to its chest. They become difficult to distinguish at game scale. Astra adjusted the existing Meshy geometry with a tapered enlargement from the wrist to 1.3× at the distal claws, then extended the forearms. Other body vertices and skin weights are unchanged.

![Original, currently installed art, and the offline claw revision, with identical game framing, crop and scale. The last two columns are Blender renders; the right column is not installed](/images/castle-top-tier-01/griffin-claw129-comparison.jpg)

![900 × 900 static Blender render of the claw revision, using the existing Meshy body and wings with local geometry and pose changes by Astra. Neither concept art nor an in-game screenshot](/images/castle-top-tier-01/griffin-claw129-still.png)

The size-only trial was rejected: it increased claw/chest intersections and introduced ground penetration in some actions. Extending the forearms improved most poses, but hit reactions, downward attacks and collapse required separate adjustments. The final collapse pose also needed a wrist rotation.

All 170 exported poses across both variants passed the claw/torso surface-intersection and claw-ground checks used here. Intermediate sampling then found brief ground penetration in downward attacks and collapse, reaching roughly four centimetres. After adding transition keys, those two actions were checked at 32 intervals per frame, totaling 1,028 sampled poses, with neither issue detected. These checks cover the claws, selected torso surfaces and ground; they do not certify all body parts, feathers or motion.

Recorded before installation on September 27: <s>The claw revision remains offline while complete action frames and shadows are rendered with the shared game camera. The installed mod remains **0.27.21**. Full export, installation checks and in-game review are still pending.</s>

### Claw revision installed in 0.27.22

All 170 frames and their shadows are exported using the shared game camera and fixed ground projection. Local **0.27.22** replaces 744 images across the 1× and 2× bodies, shadows and selection outlines, retaining the original 13 active groups and 85 frames per variant. The offline revision shown above is now installed.

![Both Griffins: original, 0.27.21 and revised claws, with identical framing and scale. The right column was labeled offline when this comparison was made; those assets are now installed in 0.27.22. These are not in-game screenshots](/images/castle-top-tier-01/griffin-claw133-both.jpg)

All 748 staged asset and configuration hashes match the installation, and installed format validation reports zero errors or warnings. Actual changes are 744 images and the mod metadata; another 6,399 files remain unchanged, including the Archangel and Crusader. Backup and rollback validation passed without applying a rollback. <s>The desktop remains locked, so this version has not been visually verified in-game.</s> A 0.27.22 battle-display capture was added on October 1, above; it does not verify every action. Claw shape, feather joins and differences from the original motion remain open to refinement.

<details>
<summary>Incorrect reference and unrigged-body record from 27 September</summary>

The earlier text and images are retained below. Claims about the original swept-back head and improved tall tufts are withdrawn. The left image in the three-column comparison is an earlier Blender draft; its embedded original label is incorrect.

<s>The current Griffins still differ visibly from the reference. The ordinary Griffin has overly tall head tufts and a thick torso; the Royal Griffin has conspicuous white feathers and gold talons, with body proportions also needing work. The comparison below scales each subject to its display area, for shape review only.</s>

![Mislabelled earlier Blender draft, installed ordinary Griffin, and installed Royal Griffin; independently fitted for comparison, not equal-scale game captures](/images/castle-top-tier-01/griffin-realism04-installed-review.jpg)

<s>Built-in image_gen supplied a revised body concept with a swept-back eagle head, buff-gold feathers, a leaner lion body and raised foreclaws. Wings are deliberately omitted so the body and movable wings can be modeled separately. Status at submission: The concept has been submitted to Meshy, with the 3D result still pending. This is not a Blender render or an installed Griffin replacement. Meshy completed the body later that day for 30 credits. The concept and actual mesh are shown separately below; the installed Griffin is unchanged.</s>

![Griffin body concept from built-in image_gen; wings deliberately omitted for separate modeling](/images/castle-top-tier-01/griffin-realism04-body-concept.jpg)

<s>Front, side and rear Blender views have been reviewed. The tall tufts and thick torso are reduced, while the beak, scaled claws, lion legs and tail remain. This is still an unrigged body without wings; claw articulation, joint deformation and the assembled silhouette have not passed motion review.</s>

![1400 × 1600 Blender still of the new Meshy Griffin body, without a rig or attached wings; neither concept art nor a game capture](/images/castle-top-tier-01/griffin-realism04-body-mesh.png)

</details>

## Historical record: 0.17.1–0.27.8

Status before the new Pikeman installation on 26 September: <s>Idle motion has been transferred, but the two-handed grip still needs adjustment; the other actions are being exported for inspection. The new Pikeman is not installed.</s> Version 0.27.10 completes this grip repair and installation; a new battle check is still pending.

Status recorded on 26 September at 0.27.8: <s>The Royal Griffin's gold talons are still awaiting installation, and its proportions need work. The latest Pikeman mesh needs review; the Marksman's melee sword direction and the Halberdier's open helmet remain unresolved.</s> Version 0.27.9 installs the talons; the Pikeman candidate has been reviewed and rejected. The other issues remain open.

The earlier text and images are retained below. References to the “new draft” or “current version” describe that particular iteration; superseded conclusions are struck through. The opening paragraphs describe the installed state today.

<details>
<summary>Earlier modelling work, failed attempts and battle evidence</summary>

None of the four units in Castle's top two tiers had a version that could go into the game. The Cavalier had offline drafts, the Champion was stuck on leg skin weights, and the Angel and Archangel had motion but the wrong models. This round all four got every animation group and went into the local Castle mod (0.17.1 to 0.20.0). They are test drafts; the art has not been signed off.

Claude Code wrote the scripts and motion this round. The Cavalier's other twelve groups came from earlier sessions; this round added the death and re-exported everything.

## Cavalier death

Death was the Cavalier's last missing group. The previous draft folded the legs by rotating them, which swung the hooves below the floor, so ground correction lifted the whole horse by **0.061**. Frames 1–4 barely moved, then frame 5 rolled over with the rider still sitting upright.

The new draft follows the original's order. The forefeet stay planted while the hindquarters sink (frames 2–4), the forelegs buckle and the belly goes down (4–6), then the horse rolls onto its side with its back to the camera (6–8). The legs are re-solved at every sample so the hooves stay on the ground and the body actually drops. The lance leaves the hand at frame 4.5 and lies flat from frame 6.

![Original (top) and new draft (bottom), eight death frames, both from the 1× game sprites at 2×](/images/castle-top-tier-01/cavalier-death.png)

Over 129 sampled times, the lance never intersects the horse's surface, and the lowest point dips **1.4 × 10⁻⁴** below the floor between two frames, which does not show in game.

## Which side the Cavalier shows

The original Cavalier faces right but shows the rider's **left** side: the lance comes up from behind the horse's neck, and the Champion's shield and rein hand are on the near side. The original is a mirrored render.

0.17.0 put the camera on the horse's right flank, which brought the lance in front of the body. 0.17.1 renders the left flank and flips the image, and goes back to the up/down attacks and turns that were made for that side.

![Left: original idle at 4×. Middle: 0.17.0, camera on the right. Right: 0.17.1, the near arm crosses in front of the lance](/images/castle-top-tier-01/cavalier-lance-side.png)

The camera angle is measured. In the original, the horse spans **83** pixels nose to tail; at 45° it spanned 66, and solving for that width gives an azimuth of 52.6°. Scale and position come from two points, the helmet top (181) and the hoof line (265).

## Champion

The original Champion has exactly the same bounding box and horse width as the Cavalier, so it reuses the Cavalier's rig, all 13 groups and the camera, and adds three things: a gold plume, a blue heater shield with a white eagle, and steel plates on the horse's neck and head. The steel is masked by the horse rig's own neck and head weights; the plume and shield are generated procedurally in Blender and follow the rider's head and left forearm.

![Original (top) and new draft (bottom): idle, front attack, upward attack, death](/images/castle-top-tier-01/champion.png)

<s>The original's barding has a white crenellated hem, which the draft does not have yet.</s> A later update on 26 September added it, as recorded in the battle-and-fixes section below.

## Angel and Archangel

The old Angel draft had two problems. Its concept was a knight in plate, where the original wears a white robe with blue trim, long dark hair and bare arms. And the Blender scenes had broken materials, so it rendered grey.

The new concept comes from [FLUX.2 [pro]](https://bfl.ai/) by Black Forest Labs: an empty-handed body in an A-pose without wings, a separate wing, and the sword kept from an earlier review. Meshy's [image-to-3D and rigging](https://www.meshy.ai/) built and rigged them. That took 6 FLUX images, about 27 credits, and on Meshy 150 credits for five meshes and 10 for two rigs.

![Left: the old draft, static render. Right: the new Angel body, Blender still, wings not attached](/images/castle-top-tier-01/angel-models.jpg)

Each wing has three bones hung off the chest, with weights blended by distance from the root, so body, wings and sword share one pose. <s>A folded wing bends 110–130° at the wrist; at 170° the outer part folds back onto the shoulder.</s>

### Wings rebuilt (26 September)

The first wings came from a FLUX concept of a single wing. They were short and broad, the feathers ran together, they stood straight up in flight, and folded they made a large fan behind the back. The rebuilt wings come from Meshy's text-to-3D, straight from a text prompt with no concept image. Two candidates cost 20 credits each for the preview and 10 for the texture. The one kept came back as a spread pair joined by a small piece of body, with layered coverts and separate primaries. Cut down the middle with the body removed, each half is one wing.

The poses were redone against the original frames too. In flight the original sweeps the wings back almost level, then raises them and strokes forward and down; they do not pump straight up and down. Folded, they hang flat against the back with the top above the shoulders and the tips at the thighs. Folding within the wing's own plane had turned the underside out, leaving a dark hole in the middle.

![Original (top), first wings (middle), rebuilt (bottom): idle and three flight frames](/images/castle-top-tier-01/angel-wings.png)

The original glows gold when attacking and when selected. The draft adds the glow during packaging, only on the frames that glow in the original, by pushing each pixel toward gold according to its brightness.

![Original (top) and new draft (bottom), front attack, 1× game sprites](/images/castle-top-tier-01/angel-attack.png)

The first death tipped the whole body forward from the hips, legs included, and the Angel ended lying flat. The original ends as a small heap of wings. The draft now kneels, bends forward from the lower spine, and drapes the wings over back and legs.

![Original (top) and new draft (bottom), eight death frames](/images/castle-top-tier-01/angel-death.png)

The Archangel uses the same scripts, with a bronze cuirass, white skirt, wavy sword and a shield on the left arm. Bound in the A-pose, the shield lay flat once the forearm came up; bound in the carrying pose, it stands in front of the chest. The flaming sword is an orange tint here, with no fire effect.

![Original (top) and new draft (bottom): idle, two attack frames, defence, death](/images/castle-top-tier-01/archangel.png)

The Angels' DEFs contain three shooting groups. Neither unit shoots, so those groups reuse the melee attack frames.

## Battle screenshot and a round of fixes (26 September)

All four units loaded their new sprites in one test battle: the log references the Cavalier 213 times, the Champion 204, the Angel 171 and the Archangel 201. Below is a game screenshot.

![In battle: the Angel flying, the Archangel standing with its shield, the Cavalier and Champion on the right](/images/castle-top-tier-01/battle.jpg)

The same round fixed several things:

- The Champion's barding has its white hem. The blue cloth is found from the horse texture, each panel gets a band along its lowest edge, and the band alternates between two heights to make the crenellation.
- In the last death frames the Angel's and Archangel's wings now hang to the ground on both sides instead of spreading backwards.
- The Archangel's attack glow is a bronze gold instead of orange, and weaker.

Comparing all fourteen Castle units against the originals turned up two more clear problems. The Royal Griffin was nearly white all over, where the original has silver-grey wings and a brown lion body. The fix is a colour correction on the packaged frames: unsaturated feathers go to silver-grey and the warm lion body goes to brown, across 170 body frames, without re-rendering.

![Original (top), before (middle), after (bottom)](/images/castle-top-tier-01/royal-griffin-palette.png)

When the Pikeman died, the man fell and the pike stayed standing in place. Now the pike tips over at frame 3 and lies flat under the body from frame 4; the first two frames overlap the previous render at 0.99.

![Original (top), before (middle) and after (bottom), five death frames](/images/castle-top-tier-01/pikeman-death.png)

## Walking and wing clipping (26 September)

The Castle walkers limped. Comparing all eight walk cycles with the originals frame by frame, the fault was in the legs. The two feet took unequal steps, a ratio of 0.40 to 0.69 against the original's 0.72 to 0.98; they were not half a cycle apart; and the body did not bob.

The fix keeps the upper-body motion and redoes the legs. Both feet share one stride, exactly half a cycle apart. The planted foot slides back at constant speed while the other swings forward on an arc, and the body rises and falls twice per cycle. The legs are solved analytically as two segments with the knee forward. The originals walk more side-on than they stand, so the body turns about 15° toward screen-right while walking. Separately animated weapons (pike, halberd, crossbow) follow the hip correction so they stay in the hands.

Before changing anything, each unit's original scene and camera re-rendered one frame and it was compared with the installed sprite. All five overlap at 0.99 or better, so the same setup is in use.

The Cavalier's and Champion's horses now trot: diagonal legs move together, the stride is longer, and the hoof folds back when lifted. This change is small, since the old horse already lifted its legs.

![Original (top), before (middle), after (bottom): Crusader, Pikeman, Cavalier](/images/castle-top-tier-01/walk-cycles.png)

Standing, the Angel's and Archangel's folded wings went partly into the body. With the wing roots on the spine, **14.9%** of the wing vertices were inside the body. Moving the roots 10 cm back and 8 cm out brings that to **0.7%**; the Archangel's armour is thicker, so 14 cm back, giving 0.2%.

This round installs up to 0.24.7: walks for the Crusader, Pikeman, Halberdier, Archer, Marksman and Swordsman, the trot for the Cavalier and Champion, and both angels' wings.

## Likeness against the originals (26 September)

The Crusader and Zealot already look like the originals; the rest did not. Putting all fourteen idle frames next to the originals at a large size showed two kinds of problem. Some were colour: the Angel's robe was cream, the Archangel's armour brown leather, the Champion's horse armoured only at the head and neck, the Griffin too pale. Others were the wrong costume: the Swordsman wore a cloth hood and carried a shield, where the original has a steel helmet, bare arms and no shield; the Pikeman wore a helmet he doesn't have; the Marksman lacked his mail coif.

Colour problems were fixed in the textures or materials. The Archangel's dark brown leather became gunmetal with the gold left alone; the Angel's robe went white with royal blue trim; the Champion's whole horse is plated, with the blue barding kept; the Griffin was recoloured to golden-ochre on the finished frames. The Cavalier's rider had been scaled to 0.73 with his steel multiplied by a dark 0.24; he is now 1.2 times larger and silver.

The five infantry units with the wrong costume (Pikeman, Halberdier, Archer, Marksman, Swordsman) were remodelled. The concepts use FLUX.2 [pro] image editing with the original idle frame, upscaled, as the reference, asking for the same costume and colours in an empty-handed A-pose, at 6 credits each. Meshy then built and rigged them.

Is the FLUX step necessary, or could Meshy do it directly? A test on the Halberdier: feeding the original sprite straight into Meshy's image-to-3D gave a surprisingly good likeness, with the right colours, stripes and eagle. But it kept the combat pose with the halberd grown into the hand, so it can neither be rigged nor reuse the existing animation. Meshy's text-to-3D got the colours wrong and fused the weapon too. Reusing the existing animation needs an empty-handed A-pose, <s>and for now only the FLUX step provides that.</s> Correction, 26 September: that described the experiments tried at the time. Further concepts will use image_gen.

The new bodies keep all the old animation. Both skeletons are Meshy humanoid rigs with the same bone names, but their rest poses hold the arms at different angles, so copying local rotations sent the arms elsewhere. Instead, each frame aligns every new bone's direction with the old bone's. Separately animated props such as the pike or crossbow find the bone they move with most rigidly and are re-attached to it. Before touching each unit, its original scene and camera re-rendered one frame and it was compared with the installed sprite; all overlap at 0.99 or better.

![Original (top), before (middle), after (bottom), idle frames: Pikeman, Halberdier, Archer, Marksman, Swordsman, Griffin, Cavalier, Champion, Angel, Archangel](/images/castle-top-tier-01/likeness.png)

The Royal Griffin's body shape is still off, as the original is leaner with tighter wings, and was not touched this round. The mod is now at 0.26.7.

## Dropping FLUX: Meshy only (26 September)

The FLUX concepts from the previous round came out cartoonish, most visibly on the Pikeman, Swordsman and Archer. So every Castle model built from a FLUX concept was replaced: the Pikeman, Halberdier, Archer, Marksman and Swordsman, plus the Angel and Archangel, including the Archangel's sword and shield. Tracing the sources showed that the other seven units never used FLUX.

All the new models come straight from Meshy, with no concept step:

- The infantry use Meshy's multi-image mode, fed the original idle, turn and walk frames (upscaled) together with an A-pose request. With a single frame, Meshy baked the pixels into the texture and invented helmets.
- The Angel was built directly from its original idle frame. The Archangel used four frames: idle, both turn directions, and mouse-over.
- The Archangel's sword and shield were made separately with Meshy text-to-3D.

Meshy's direct output welds wings, shield and weapons to the body in one mesh. The wings need their own bones to flap, so the mesh is cut by region: behind the back and away from the spine is wing, beyond the right hand is weapon, in front of the left arm is shield. The wing roots at the shoulders sit too close to the back for that, so a colour rule catches them: pale, colourless texture above the waist and not on the front is feather. The pike, which isn't weighted to the hands, is cut by distance from the skeleton, with a brown-wood colour test added.

The Swordsman's scene used Blender's AgX tone mapping, which flattened dark steel to grey, and the installed version had the same problem. Switching to Standard and darkening the grey steel on the finished frames brings it closer to the original's near-black armour with bright highlights. Meshy read the Swordsman's bare arms as armour, so the arms are tinted to skin by their bone weights.

![Original (top) and the new models (bottom): Pikeman, Halberdier, Archer, Marksman, Swordsman, Angel, Archangel](/images/castle-top-tier-01/meshy-only.png)

The mod is now at 0.27.6. Remaining gaps: the Pikeman wears a hat the original doesn't have, and the Marksman draws no sword in melee.

## What is installed

| Unit | Version | Frames | PNGs |
| --- | --- | --- | --- |
| Cavalier | 0.17.1 | 81 | 342 |
| Angel | 0.22.1 | 94 | 412 |
| Archangel | 0.22.2 | 91 | 394 |
| Champion | 0.22.0 | 81 | 342 |

Frame counts and canvases come from each unit's original DEF, and the packaging check reports 0 errors and 0 warnings. Versions are the whole mod's version at each install; it is now at 0.27.6. Every install backs up the files it replaces and has a checked rollback.

<s>The 0.17.0 Cavalier loaded in a real battle, but that was before the camera fix. The four new versions have no battle screenshots yet: the test client hung during start-up this time.</s> A battle screenshot was added on 26 September; see the previous section.

Known issues: <s>the Cavalier's idle lance is held level where the original holds it upright</s> (corrected in 0.27.7–0.27.8 on 26 September); the Royal Griffin's talons are still brown where the original's are gold.

</details>
