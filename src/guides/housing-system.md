---
{
	"title": "Housing System",
	"date": "git Last Modified",
	"authors": ["Pyrosu#6969"],
	"tags": ["gathering"]
}
---

## Getting Started
Accept the quest in the “Event/Reward Box” menu on the top of your screen. You need to collect 10× Developer Logs from Artificial Island to unlock the Housing menu, which will let you travel to your Home Island.

<figure class="max-w-full">
<img src="/assets/images/guides/developer-logs.jpg" alt="Map of Artificial Island showing locations for Developer Logs" width="1366" height="768">
</figure>

{% aside -%}
<div class="profile">
<div><img class="rounded-full drop-shadow-lg" src="/assets/images/guides/developer-log.jpg" alt="Developer Log" width="80" height="80"></div>
<div class="stack">
{% markdown -%}
Developer Logs are marked on the map with this icon.

To find Artificial Island on the [Interactive Map](https://static-web.ghzs.com/cspage_pro/huantaMap.html#/map623d5c94e4616a000162d95d), the Chinese name for Artificial Island is *人工岛地图*.
{%- endmarkdown %}
</div>
</div>
{%- endaside %}

To build on your Home Island, you will need 1170 exploration points on Artificial Island (inner island only).

## Construction
While on your Home Island, you can construct and upgrade buildings that generate materials over time. These materials are used in upgrading, and also act as a currency in the housing shop where you can buy limited chip pulls, avatars and avatar frames, Relic fragments, and craft chips.

The main source of materials is killing creatures on your Artificial Island, including not only animals and normal mobs, but also weakened world bosses. The higher the status of the creature (boss > leader > regular), the more materials will drop from it.

* Animals and mobs respawn 3 days after they are killed. World bosses respawn after 7 days.
* Different creatures will drop different materials, but world bosses drop a large amount of all resources at once.
* By upgrading buildings (except for the Development Center), you will increase the number of your workers and, accordingly, the amount of resources they extract.

<figure class="max-w-full">
	<img src="/assets/images/guides/housing-map.jpg" alt="Map showing areas in which to obtain housing resources" width="1112" height="1328">
</figure>

### Total Resources
{% macro resource(item) -%}
<img class="inline-block" src="/assets/images/guides/Home{{ item }}.png" alt="{{ item }}" width="42" height="42">
{%- endmacro %}

{% table %}
<table>
	<thead>
		<tr>
			<th>Resource</th>
			<th>Animals</th>
			<th>Mobs</th>
			<th>World Bosses</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th class="whitespace-nowrap w-max">{{ resource('Shell') }}</th>
			<td>7–10 per kill</td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<th class="whitespace-nowrap w-max">{{ resource('Pumpkin') }} {{ resource('Ore') }}</th>
			<td></td>
			<td>1638–1744</td>
			<td></td>
		</tr>
		<tr>
			<th class="whitespace-nowrap w-max">{{ resource('FishBones') }} {{ resource('Meat') }}</th>
			<td></td>
			<td>1606–1674</td>
			<td></td>
		</tr>
		<tr>
			<th class="whitespace-nowrap w-max">{{ resource('Rattan') }} {{ resource('Twigs') }}</th>
			<td></td>
			<td></td>
			<td>284–288</td>
		</tr>
	</tbody>
</table>
{% endtable %}

### Building Levels
Resources will accumulate for up to 24 hours, after which they must be collected.

{% table %}
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
{% endtable %}
