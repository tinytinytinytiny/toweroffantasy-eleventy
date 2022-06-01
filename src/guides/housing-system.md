---
{
	"title": "Housing System",
	"authors": ["Pyrosu#6969"],
	"tags": ["gathering"]
}
---

## Getting Started
Accept the quest in the “Event/Reward Box” menu on the top of your screen. You need to collect 10× Developer Logs from Artificial Island to unlock the Housing menu, which will let you travel to your Home Island.

<figure class="max-w-none">
<img src="/assets/images/guides/developer-logs.jpg" alt="Map of Artificial Island showing locations for Developer Logs" width="1366" height="768">
</figure>

{% aside %}
<img class="rounded-full" src="/assets/images/guides/developer-log.jpg" alt="Developer Log" width="80" height="80">

Developer Logs are marked on the map with the icon above.

To find Artificial Island on the [Interactive Map](https://static-web.ghzs.com/cspage_pro/huantaMap.html#/map623d5c94e4616a000162d95d), the Chinese name for Artificial Island is **人工岛地图**.
{% endaside %}

To build on your Home Island, you will need 1170 exploration points on Artificial Island (inner island only).

## Construction
While on your Home Island, you can construct and upgrade buildings that generate materials over time. These materials are used in upgrading, and also act as a currency in the housing shop where you can buy limited chip pulls, avatars and avatar frames, Relic fragments, and craft chips.

The main source of materials is killing creatures on your Artificial Island, including not only animals and normal mobs, but also weakened world bosses. The higher the status of the creature (boss > leader > regular), the more materials will drop from it.

* Animals and mobs respawn 3 days after they are killed. World bosses respawn after 7 days.
* Different creatures will drop different materials, but world bosses drop a large amount of all resources at once.
* By upgrading buildings (except for the Development Center), you will increase the number of your workers and, accordingly, the amount of resources they extract.

<figure class="max-w-none">
	<img src="/assets/images/guides/housing-map.jpg" alt="Map showing areas in which to obtain housing resources" width="1112" height="1328">
</figure>

### Total Resources
{% macro resource(item) -%}
<img class="inline-block" src="/assets/images/guides/Home{{ item }}.png" alt="{{ item }}" width="64" height="64">
{%- endmacro %}

{% bigTable %}
| Resource                                           | Animals       | Mobs (Elites Included) | World Bosses |
|----------------------------------------------------|---------------|------------------------|--------------|
| {{ resource('Shell') }}                            | 7–10 per kill |                        |              |
| {{ resource('Pumpkin') }} {{ resource('Ore') }}    |               | 1638–1744              |              |
| {{ resource('FishBones') }} {{ resource('Meat') }} |               | 1606–1674              |              |
| {{ resource('Rattan') }} {{ resource('Twigs') }}   |               |                        | 284–288      |
{% endbigTable %}

### Building Levels
Resources will accumulate for up to 24 hours, after which they must be collected.

| Level | Resources per Hour | Max Resources (24 hr) |
|-------|--------------------|-----------------------|
| 1     | 4                  | 96                    |
| 2     | 8                  | 192                   |
| 3     | 12                 | 288                   |
| 4     | 15                 | 360                   |
| 5     | 17                 | 408                   |
| 6     | 19                 | 456                   |
| 7     | 21                 | 504                   |
| 8     | 23                 | 552                   |
| 9     | 25                 | 600                   |
