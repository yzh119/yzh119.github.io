---
title: "[AI] Castle cavalry and angels"
date: 2026-09-26T12:20:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
homeSummary: "Angel: 94 frames installed in 0.27.18. The Archangel has a corrected griffin shield and 65 checked non-death poses, with new Blender stills and failure records; final death folding remains pending."
tags: ["vcmi", "ai", "graphics", "blender", "meshy", "flux", "castle"]
---

All fourteen Castle units have local drafts, with realism revisions proceeding unit by unit. Local mod **0.27.18** installs the revised Angel after the Marksman and Swordsman, with a blue-edged long robe and all 16 native groups, 94 frames. The Archangel has new grips and a corrected griffin shield with non-death poses checked; its collapse still needs work before installation, followed by Griffin review. The approved Crusader is retained. The game stayed on a black startup screen during this check, so there is no new Angel battle capture yet.

![Complete 0.27.18 Angel assembly, a 1400 × 1600 Blender still with revised body, wing roots and blade; this is not a battle capture](/images/castle-top-tier-01/angel-realism03-complete.png)

## Version record: 0.27.8–0.27.17

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

Six missing Royal Griffin turn frames are now rendered, bringing the gold talons to all 13 groups and 85 frames. The first colour-threshold pass missed highlights and shaded areas, leaving brown and yellow patches. The replacement mask comes from paired renders of the same pose before and after talon colouring, preserving the silver feathers and brown lion body. The body silhouettes retain their registration. The package passed validation with zero errors or warnings and is installed with rollback files; 0.27.9 has not had a new battle check. The body is still too broad and the folded wings need work.

![Original, previous draft, rejected colour mask, and installed 0.27.9; idle above and a turn below. New images are Blender game frames, not a new battle capture](/images/castle-top-tier-01/royal-gold-talons05.png)

The latest multi-image Meshy Pikeman also failed visual review. It still has a helmet, a mostly white chest and a blocky heraldic motif inherited from the low-resolution references. This candidate was not installed.

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

![Latest 1400 × 1600 Blender assembly still, showing the shield back in idle; not installed](/images/castle-top-tier-01/archangel-realism03-shield-corrected.png)

![High-resolution Blender still of the shield front, retaining Meshy's gold griffin](/images/castle-top-tier-01/archangel-realism03-shield-front.png)

![High-resolution Blender still of the corrected plain back, grip and geometric rim](/images/castle-top-tier-01/archangel-realism03-shield-back.png)

Reopening all 65 non-death poses with this replacement shows no intersections among the tested body, sword, main shield surface and wings, with body PBR maps retained. This excludes the grip, small rim, complete finger contacts and continuous interpolation. Full replacement still requires the death animation.

The inherited death script also needed replacement. It knelt forward, whereas the original recoils, lifts its legs and falls backward, with the wings closing around the body. The new backward-collapse draft clears the tested equipment surfaces, but its final wings remain too flat and the shield sits incorrectly. It is still being revised and has not been installed. The comparison below includes the original, the rejected kneeling version and the backward-fall draft.

![Original and two rejected collapse drafts; new images are Blender renders, with final wing folding still incomplete](/images/castle-top-tier-01/archangel-realism03-death-rejected.jpg)

The local mod remains **0.27.18** and still uses the previous Archangel. The revised shield is assembled and checked across non-death poses; installation waits for the complete revised action set. Griffins follow afterward.

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
