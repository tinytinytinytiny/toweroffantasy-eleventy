---
{
	"title": "Upgrading Gear",
	"date": "git Last Modified",
	"authors": ["Zakum#3080"],
	"tags": ["gear"]
}
---

## Armor
Armor improves your combat effectiveness through passive stat increases, and can be obtained through various dungeons and shops.

Each piece of armor has fixed stats, which increase through **Enhancement**, and random stats, which increase through **Fusion**.

<figure data-border="none">
{% for armor in ['helmet', 'shoulder', 'arm', 'top', 'gloves', 'belt', 'bottom', 'shoes'] -%}
	<div class="item-frame">
		<img src="/assets/images/armor/{{ armor }}.png" alt="{{ armor | capitalize }}" width="128" height="128">
	</div>
{%- endfor %}
</figure>

### Enhancement
Enhancement will add a + sign on your armor, increasing the fixed stats of that piece. Every 5th enhancement (+5, +10, +15…) is a breakthrough level—when all of your pieces reach that level, you will receive bonus stats. How high you can enhance your equipment is limited by your character level.

<figure data-border="none">
	<div class="item-frame">
		<img src="/assets/images/mat/armor1.png" alt="Enhancement module" width="128" height="128">
	</div>
	<div class="item-frame">
		<img src="/assets/images/coin/gold.png" alt="Gold coin" width="128" height="128">
	</div>
	<div class="item-frame">
		<img src="/assets/images/mat/armor2.png" alt="Enhancement module" width="128" height="128">
	</div>
</figure>

You will need Enhancement Modules and Gold, and breakthrough levels require Superior Modules as well.

**Enhancement level will carry over when replacing armor**, given that you don't discard the item it was last attached to. In other words, if you have +10 on your current gloves, you can equip a new pair of gloves and they will also be +10. Think of it as enhancing the slot where they are equipped. Be careful though, if you choose to unequip an enhanced armor piece (without replacing), it is possible to dismantle the enhanced one.

### Fusion
Fusion will add stars on your armor, increasing one random stat per star. The rarity of your armor will determine how many stars it can have, and how much EXP is required to level it up.

<figure data-border="none">
{% for i in range(1, 4) -%}
	<div class="item-frame">
		<img src="/assets/images/mat/exp{{ i }}.png" alt="EXP crystal" width="128" height="128">
	</div>
{%- endfor %}
</figure>

You will need EXP crystals, which can be obtained from breaking the large crystal veins in the overworld and through various shops. You can also use armor copies of the same piece (i.e. feed pants into pants) or dismantle the armor into crystals—it will give half the EXP if you dismantle it.

**Fusion stars will NOT carry over between pieces**, meaning new armor will have to be leveled up from the beginning. You can use previously starred armor for EXP, though it will not give 100% of the EXP you spent to reach that star (it's something like base EXP of that armor + 70–80% I think). Meaning feeding a 5 star armor into a brand new one will result in 4 stars + some EXP.

<figure data-border="none">
{% for element in ['fire', 'ice', 'physic', 'thunder'] -%}
	<div class="item-frame">
		<img src="/assets/images/armor/core_orange_{{ element }}.png" alt="{{ element | capitalize }} arc core" width="128" height="128">
	</div>
{%- endfor %}
</figure>

Arc Cores are a unique piece of armor acquired through 8-player raids. You must use materials rewarded from these raids for fusion on them—armor and EXP crystals will not work.

## Weapons
Weapons can be obtained through the various gacha banners in the game, through world bosses, and potentially through events. They can be upgraded with duplicate copies which add stars, and through leveling them up.

### Upgrading
Leveling a weapon consumes Weapon Batteries to provide EXP to the weapon. Every level will provide stat increases to that weapon, and every 10 levels will increase its damage multiplier for attacks. Every 10 levels you will need breakthrough materials to raise the level cap further.

<figure data-border="none">
	<div class="item-frame">
		<img src="/assets/images/mat/red1.png" alt="Red breakthrough material" width="128" height="128">
	</div>
	<div class="item-frame">
		<img src="/assets/images/mat/green1.png" alt="Green breakthrough material" width="128" height="128">
	</div>
	<div class="item-frame">
		<img src="/assets/images/mat/black1.png" alt="Black breakthrough material" width="128" height="128">
	</div>
	<div class="item-frame">
		<img src="/assets/images/mat/fire1.png" alt="Fire breakthrough material" width="128" height="128">
	</div>
	<div class="item-frame">
		<img src="/assets/images/mat/ice1.png" alt="Ice breakthrough material" width="128" height="128">
	</div>
	<div class="item-frame">
		<img src="/assets/images/mat/physical1.png" alt="Physical breakthrough material" width="128" height="128">
	</div>
	<div class="item-frame">
		<img src="/assets/images/mat/electric1.png" alt="Electric breakthrough material" width="128" height="128">
	</div>
</figure>

Weapon breakthrough materials can be obtained through dungeons, events, battle pass, overworld veins (elemental materials only) and shops. The required materials increase as the weapon level increases. How high you can level your weapon is limited by your character level.

### Awakening
Using duplicate copies will add stars to your current weapon, unlocking powerful effects and considerably increasing its stats.

<figure data-border="none">
	<div class="item-frame">
		<img src="/assets/images/mat/weapon_star.png" alt="Weapon star" width="128" height="128">
	</div>
</figure>

The max stars is 6, so with the base copy you will need to pull a weapon 7 times to max it out. Subsequent copies will be converted into 10 Black Market Tokens.
