---
title: "Adventure map: landmarks"
date: 2026-09-10T08:05:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

This post records high-resolution replacements for interactive and large static landmarks. A landmark is not a flat background: unbuilt states, upgraded forms, occlusion and click bounds all need to survive, so new art only replaces the body layer inside the original resource.

## Small knowledge buildings

The Witch Hut and Learning Stone have also been redrawn. The hut retains its low straw roof, smoke and roots; the shrine retains its dome, columns and central bookstand. Both improve materials without changing their recognizable map scale.

![Witch Hut and Learning Stone](/images/h3-environment-hd/knowledge-buildings-compare.png)

## Resource and service landmarks

Mines, altars, wells, taverns, graveyards, oases, pyramids, boats and the three obelisk colours have replacements. Each keeps its original shadow, masks and metadata.

![Early landmarks](/images/h3-environment-hd/adventure-landmarks-compare.png)

![Wells, taverns and graveyards](/images/h3-environment-hd/landmark-set-compare.png)

![Pyramids, ships and obelisks](/images/h3-environment-hd/pyramid-ship-obelisks-compare.png)

## Terrain signposts

The five single-frame terrain signposts are now redrawn for grass, sand, lava, snow and water. Their boards keep the original non-readable marking pattern, while the native alpha masks preserve their posts and terrain bases. Multi-frame landmarks remain on native art until their Blender animation work is complete.

## Well variants by biome

The rough-land and snow wells have distinct redraws while retaining the original small stone well, short wooden posts and roof proportions. Rough land keeps terracotta tiles and moss; snow uses a snow-capped roof and snow-dusted masonry.

![Rough and snow wells](/images/h3-environment-hd/well-biomes-compare.png)

## Large landmarks

The giant redwood and a large castle-style landmark have also been redrawn while retaining their native transparent silhouettes and layer order.

![Giant redwood](/images/h3-environment-hd/redwood-compare.png)

![Castle landmark](/images/h3-environment-hd/castle-landmark-compare.png)

## Fidelity corrections

Review found several earlier redraws had become more elaborate by changing the original landmark type. `AVXALTAR` is again a low sacrifice altar with its broken rear arch and red ritual surface; `AVXTHRN` is again the compact, irregular ochre castle on rock; and `AVXSHYD0` is again an open timber slipway with lifting posts rather than a warehouse pier. The green, red and blue obelisks have also returned to simple coloured monoliths with small stone bases. These are single-frame bodies at 2×, 3× and 4×; native canvas, shadows, overlays and object behavior remain intact.

![Original base and final fidelity corrections](/images/h3-environment-hd/fidelity-corrections-compare.png)

The Haunted Graveyard review also found eight body frames. It was deliberately not overwritten with a static redraw: a correction there requires the deferred Blender animation workflow.

## Arena

Arena (`AVSARNA0`) is now redrawn as a compact limestone amphitheater with the original three arcade tiers, oval interior, front entrance and steps. Its generated checkerboard backdrop was removed by retaining only the connected object alpha; a final vertical projection calibration makes the 2×, 3× and 4× body bounds match the native top, left, right and bottom. Native shadows, overlays, canvas and object behavior remain unchanged.

![Native and final Arena redraw](/images/h3-environment-hd/arena-final-compare.png)

## Marletto Tower

Marletto Tower (`AVSMARL`) now has a faithful high-detail body: its open crenellated crown, stacked cylindrical sections, narrow windows, front door and thin blue water ring remain in place. Shared horizontal and vertical projection calibration returns its 2×, 3× and 4× body bounds to the native footprint, while native shadows, overlays and object behavior are retained.

![Native and final Marletto Tower redraw](/images/h3-environment-hd/marletto-final-compare.png)

## Magic and knowledge landmarks

~~The magic spring, Seer's Hut and Library are now included as well.~~

Correction: Magic Spring (AVSFNTN0) is an eight-frame animated object, so it does not belong in this static-landmark batch and remains on its native sequence. It will only be replaced with a Blender-rendered animation. Seer's Hut and Library are the completed static entries; Library (AVSLIBR0) retains its two low roof wings, centered pediment and stair, open colonnade and small foundation stones; its 2x, 3x and 4x body bounds were vertically calibrated to the native placement. Their redrawn bodies leave native shadows and interaction resources intact, so visit rules remain unchanged.

~~![Rejected static Magic Spring draft; it was not installed](/images/h3-environment-hd/functional-landmarks-compare.png)~~

![Native and final Library redraw](/images/h3-environment-hd/library-final-compare.png)

Temple (`AVSTMPL0`) now retains its original shallow stepped roof, two gold finials, front colonnade and central stair at a clearer material resolution. Its body is fitted to the native 2×, 3× and 4× bounds; shadows, overlays and interaction stay native.

![Native and final Temple redraw](/images/h3-environment-hd/temple-final-compare.png)

## Warlock's Lab

Warlock's Lab (AVSWAR20) now preserves the two tall rear towers, central round tower, lower front gate and four small corner towers in a clearer 2x, 3x and 4x body. Its native canvas, shadow and interaction layers stay untouched.

![Native and final Warlock's Lab redraw](/images/h3-environment-hd/warlocks-lab-final-compare.png)

## University

University (`AVSUNIV0`) now retains its four corner towers, paired red-tile roofs, courtyard and central gate at a clearer 2×, 3× and 4× body resolution. The native canvas, shadows, overlays and object behavior remain intact.

![Native and final University redraw](/images/h3-environment-hd/university-final-compare.png)

## Idol of Fortune

Idol of Fortune (`AVSIDOL0`) now preserves the native totem proportions, five crest pieces and three front beads in a clearer single-frame body at 2×, 3× and 4×. The original canvas, shadows, overlays and object behavior remain intact.

![Native and final Idol of Fortune redraw](/images/h3-environment-hd/idol-final-compare.png)

## Garden of Revelation

Garden of Revelation (`AVSGRDN0`) now retains its rounded hedge, small pale statue, front stone balustrade and flowerbed at a clearer 2×, 3× and 4× body resolution. The original canvas, body bounds, overlays and object behavior remain intact.

![Native and final Garden of Revelation redraw](/images/h3-environment-hd/garden-final-compare.png)

## Giant Redwood correction and Dragon Utopia

<s>The earlier giant redwood was sharper but still read as an ordinary tree. It is now an unmistakable observatory: an exterior spiral stair, circular platform, lookout cabin, telescope and pennant all survive in the silhouette.</s>

That made the landmark conspicuous by changing its identity. The final `AVXREDW` redraw returns to the original tall, narrow redwood: exposed roots, one exceptionally long trunk, sparse side boughs, and the small upper lookout with its broad diagonal pale-wood roof. It is a lookout built into a giant tree, not a separate fantasy tower. Only the single body frame is replaced at 2×, 3× and 4×; the original canvas, shadow, overlay and object behavior remain in use.

![Original base and faithful final Giant Redwood redraw](/images/h3-environment-hd/redwood-faithful-final-compare.png)

<s>The first Dragon Utopia pass expanded the stone temple into a giant dragon roost; a later pass was planned to add only masonry, weathering and moss to the original outline. Review still found the generated result too fantastical, so it was fully withdrawn and the game used native `AVSUTOP0` artwork directly.</s>

The new review-approved redraw returns to the original's compact ochre-stone fortress: the same central keep, red tile roof hierarchy, four main round towers, curtain walls and pale rock base are retained. Detail is limited to masonry, roof tiles, weathering and restrained dragon reliefs. It is registered only into the native single-frame body layer at 2×, 3× and 4×; the source canvas, alpha footprint, interaction and layer order remain intact.

![Native and final Dragon Utopia redraw](/images/h3-environment-hd/dragon-utopia-final-compare.png)

## Review record

### Axis Mundi retry

<s>Axis Mundi could be redrawn as the original five-spoke wheel on its low stone plinth.</s> Both 2026 attempts rendered six spokes despite explicit five-spoke constraints. They were rejected before registration; `AVSAXIS0` remains native.

![Axis Mundi retry review](/images/h3-environment-hd/axis-mundi-retry-review.png)

<s>The narrow shrine/monolith `AVSGZBO0` could receive a high-detail replacement at its original footprint.</s> After registration back into the native small canvas, the redraw offered no material visible improvement, so it was not installed.

<s>Fairy Ring `AVSRING0` could be repainted as its original tiny fairy and mushroom circle.</s> The candidate inflated the scene into an illustration with a background and oversized extra mushrooms, so it was rejected before registration.

<s>Mercenary Camp `AVSMERC0` could preserve its four tents, small campfire and spear rack in a crisp redraw.</s> The candidate changed the tent arrangement and added a background, shield and other unreferenced elements, so it was rejected before registration.

<s>School of War `AVSSCHM0` could retain its compact three-tier ring tower.</s> Its candidate introduced a background and exaggerated the roof and tower proportions, so it was rejected before registration.

<s>The initial HD Hill Fort test was rejected: both drafts mistook the original low central roof for an extra tower and turned a compact outpost into a castle. An offline super-resolution trial retained the broad outline but rebuilt masonry, roof and edges, so it is reference material only and will not overwrite buildings.</s>

The 2026 retry confirms the same constraint. Its first redraw invented a curtain wall and a front tower; its second retained those inventions and also returned a checkerboard backdrop. Neither asset was registered. Hill Fort remains native until a redraw preserves its three towers, one low central roof, entrance placement, footprint and native interaction canvas.

![Hill Fort 2026 retry review](/images/h3-environment-hd/hill-fort-2026-retry-review.png)

## Waterside buildings

The shipyard, marketplace and watering hole are registered separately, so they retain the original object behaviour rather than becoming a painted background.

![Shipyard, marketplace and watering hole](/images/h3-environment-hd/shipyard-market-waterhole-compare.png)

When starting the Good to Go map locally, client logs actually read the new 4× redwood and rough-rock assets. That confirms mod parsing and asset selection, not a full-playthrough test. No VCMI source was changed.
