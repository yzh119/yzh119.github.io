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

## Arena

Arena (`AVSARNA0`) is now redrawn as a compact limestone amphitheater with the original three arcade tiers, oval interior, front entrance and steps. Its generated checkerboard backdrop was removed by retaining only the connected object alpha; a final vertical projection calibration makes the 2×, 3× and 4× body bounds match the native top, left, right and bottom. Native shadows, overlays, canvas and object behavior remain unchanged.

![Native and final Arena redraw](/images/h3-environment-hd/arena-final-compare.png)

## Magic and knowledge landmarks

The magic spring and Seer's Hut are now included as well. Their redrawn bodies are fitted back into the native silhouette, shadow and interaction resources, so visit rules remain intact.

![Magic spring and Seer's Hut](/images/h3-environment-hd/functional-landmarks-compare.png)

## Reworked observatory and Dragon Utopia

The earlier giant redwood was sharper but still read as an ordinary tree. It is now an unmistakable observatory: an exterior spiral stair, circular platform, lookout cabin, telescope and pennant all survive in the silhouette.

![Observatory](/images/h3-environment-hd/observatory-compare.png)

<s>The first Dragon Utopia pass expanded the stone temple into a giant dragon roost; a later pass was planned to add only masonry, weathering and moss to the original outline. Review still found the generated result too fantastical, so it was fully withdrawn and the game used native `AVSUTOP0` artwork directly.</s>

The new review-approved redraw returns to the original's compact ochre-stone fortress: the same central keep, red tile roof hierarchy, four main round towers, curtain walls and pale rock base are retained. Detail is limited to masonry, roof tiles, weathering and restrained dragon reliefs. It is registered only into the native single-frame body layer at 2×, 3× and 4×; the source canvas, alpha footprint, interaction and layer order remain intact.

![Native and final Dragon Utopia redraw](/images/h3-environment-hd/dragon-utopia-final-compare.png)

## Review record

<s>The initial HD Hill Fort test was rejected: both drafts mistook the original low central roof for an extra tower and turned a compact outpost into a castle. An offline super-resolution trial retained the broad outline but rebuilt masonry, roof and edges, so it is reference material only and will not overwrite buildings.</s>

The 2026 retry confirms the same constraint. Its first redraw invented a curtain wall and a front tower; its second retained those inventions and also returned a checkerboard backdrop. Neither asset was registered. Hill Fort remains native until a redraw preserves its three towers, one low central roof, entrance placement, footprint and native interaction canvas.

![Hill Fort 2026 retry review](/images/h3-environment-hd/hill-fort-2026-retry-review.png)

## Waterside buildings

The shipyard, marketplace and watering hole are registered separately, so they retain the original object behaviour rather than becoming a painted background.

![Shipyard, marketplace and watering hole](/images/h3-environment-hd/shipyard-market-waterhole-compare.png)

When starting the Good to Go map locally, client logs actually read the new 4× redwood and rough-rock assets. That confirms mod parsing and asset selection, not a full-playthrough test. No VCMI source was changed.
