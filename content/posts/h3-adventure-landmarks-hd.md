---
title: "[AI] Adventure map: landmarks"
date: 2026-09-10T08:05:00+08:00
series: ["Enhancing Heroes III with Generative AI"]
ai: true
tags: ["vcmi", "ai", "graphics", "astra"]
---

This post records high-resolution replacements for interactive and large static landmarks. A landmark is not a flat background: unbuilt states, upgraded forms, occlusion and click bounds all need to survive, so new art only replaces the body layer inside the original resource.

## Resource and service landmarks

Mines, altars, wells, taverns, graveyards, oases, pyramids, boats and the three obelisk colours have replacements. Each keeps its original shadow, masks and metadata.

![Early landmarks](/images/h3-environment-hd/adventure-landmarks-compare.png)

![Wells, taverns and graveyards](/images/h3-environment-hd/landmark-set-compare.png)

![Pyramids, ships and obelisks](/images/h3-environment-hd/pyramid-ship-obelisks-compare.png)

## Well variants by biome

The rough-land and snow wells have distinct redraws while retaining the original small stone well, short wooden posts and roof proportions. Rough land keeps terracotta tiles and moss; snow uses a snow-capped roof and snow-dusted masonry.

![Rough and snow wells](/images/h3-environment-hd/well-biomes-compare.png)

## Large landmarks

The giant redwood and a large castle-style landmark have also been redrawn while retaining their native transparent silhouettes and layer order.

![Giant redwood](/images/h3-environment-hd/redwood-compare.png)

![Castle landmark](/images/h3-environment-hd/castle-landmark-compare.png)

## Magic and knowledge landmarks

The magic spring and Seer's Hut are now included as well. Their redrawn bodies are fitted back into the native silhouette, shadow and interaction resources, so visit rules remain intact.

![Magic spring and Seer's Hut](/images/h3-environment-hd/functional-landmarks-compare.png)

## Reworked observatory and Dragon Utopia

The earlier giant redwood was sharper but still read as an ordinary tree. It is now an unmistakable observatory: an exterior spiral stair, circular platform, lookout cabin, telescope and pennant all survive in the silhouette.

![Observatory](/images/h3-environment-hd/observatory-compare.png)

~~The first Dragon Utopia pass expanded the stone temple into a giant dragon roost, which drifted too far from the original.~~ The revision returns to the original compact gable, rectangular gate, side pillars and warm grey sandstone palette, adding only masonry, weathering and moss detail.

![Faithful Dragon Utopia redraw](/images/h3-environment-hd/dragon-utopia-faithful-compare.png)

## Waterside buildings

The shipyard, marketplace and watering hole are registered separately, so they retain the original object behaviour rather than becoming a painted background.

![Shipyard, marketplace and watering hole](/images/h3-environment-hd/shipyard-market-waterhole-compare.png)

When starting the Good to Go map locally, client logs actually read the new 4× redwood and rough-rock assets. That confirms mod parsing and asset selection, not a full-playthrough test. No VCMI source was changed.
