---
{
	"title": "Beginner Chip Guide",
	"tags": ["gear"],
	"authors": ["Stitch#8913"]
}
---

This guide will go over some of the more notable and prevalent chips, their uses, and some explanations as to why these chips stand out in comparison to others. We will focus on chips present on the standard banner. This is because most of your black crystals—granted you’re on a budget—will be going into weapon banners rather than chips. Standard chips are able to cover most of the roles you would want, while also being easier to obtain and star up, leading to higher base stats.

## Chip Breakdown
As of now we know that SR chips have a level cap of 70. **SSR chips can exceed 70, but because we have a soft cap of level 70 for now, we don’t know the level cap on SSR chips**. This is notable because beyond level 70 SSR chips (which already give more stats than SR chips) also have a higher level cap giving them even more of an edge.

This, however, doesn’t mean that SR chips are always worse than SSR chips because the set effects you receive by fulfilling certain requirements contribute far more to your build. You wouldn’t want to exchange a 6% unconditional increase to lightning damage for a 15% increase to lightning damage when healed (if you don’t heal).

In addition, R chips only have a *4p (4-set) effect*, while SR have a *3p (3-set) effect*. With these, you only get one possible effect depending on the set. SSR sets have *both 2p and 4p effects*, so you can mix and match 2p effects to better suit your build, as this offers much more flexibility.

{% macro matrix(name) %}
<h3 class="card block">
	<div class="item-frame mb-2xs" data-variant="matrix">
		<img src="/assets/images/chip/{{ name }}.png" alt="" width="205" height="205">
	</div>
	<a href="{{ getCollection(collections.matrices, name).url }}" data-variant="hover">
		{{ getData(collections.matrices, name).name }}
	</a>
</h3>
{% endmacro %}

## DPS Chips
{{ matrix('crow') }}
#### 2p: **Targets under 60% HP take 33%+ more crit damage**
Crow 2p is great for DPS, as optimally you want to build for crit and will have no trouble hitting crits consistently. He provides a strong crit damage buff with an easy condition to maintain as its reliant on enemy hp.

His 4p, however, is bleed which generally isn’t good. Bleed effects are dot per sec, and don’t scale with attack buffs so it ends up being better to buff attack directly, especially when u can deal dmg multiple times in a second.

{{ matrix('samir') }}
#### 2p: **1.5% damage up, 10+ stacks**
Samir 2p is bound to be a top DPS chip set with it’s unconditional damage increase, since you cant go wrong with it.

Samir 4p isn’t considered worth using despite the additional damage. Her 4p adds a 10%+ damage additional hit, however it only applies to the target (meaning the enemy targeted, meaning 1 additional attack). While it may be good for bosses, there are options like Crow 2p that would provide universal benefits regardless of the content (bosses vs mobs).

## Shield Breaker Chips
{{ matrix('shiro') }}
#### 2p: **Targets >50% HP take 15%+ damage/shield break**
Shiro has a strong damage and shield break buff, that is effortless to maintain, granted you lose its effects when targets drop below 50%. It’s great for shield break weapons because it boosts their utility, often giving the edge you need to prevent bosses from triggering their ults.

Her 4p however falls off because a 20%+ damage boost upon entering combat is not enough to outweigh a universal damage boost, especially when you consider set up time, and content where fights last over 40 seconds.

{{ matrix('king') }}
#### 2p: **4%+ damage based on shield value reduced, 3 stack**
King 2p is strong for shield break weapons as well, because it boosts damage based on target shield value which comes naturally in combat.

King 4p however is life steal based on attack. This effect is irrelevant because attack in comparison to hp is practically nothing, so it doesn’t even heal for much, and even then it requires 3+ enemies.

## Support Chips
{{ matrix('coco-ritter') }}
#### 2p: **8%+ heal boost**
#### 4p: **10%+ attack buff**
Coco is a great support chip for both 2p and 4p as it does exactly what you want as a support. It increases the amount of heals you provide from 2p, as well as buffing party attack damage with the 4p.

{{ matrix('zero') }}
#### 2p: **120%+ shield based on attack**
#### 4p: **16%+ damage boost**
Zero is a decent support chip as well. He grants a minor party shield, which might save a life as small as the shield is.

The 4p however improves upon this effect by increasing party damage of members with the shield. As a support, boosting party offensive capabilities is very valuable.

## Utility Chips
{{ matrix('claudia') }}
#### 2p: **Refreshes jumps upon aerial damage, 13%+ aerial damage**
Claudia 2p is niche as it only improves aerial combat. However, it’s very strong and makes aerial combat much more fluid with the ability to refresh jumps mid-air. It enables weapons like Crow and Samir to push beyond their limits and even provides a sense of safety with better aerial mobility.

Her 4p however is even more niche, as such it isn’t typically worth running. Her 4p reduces skill cd, however not by a significant amount, but the 36%+ combo damage it grants is quite good.

{{ matrix('pepper') }}
#### 3p: **10%+ Weapon recharge rate**
Weapon recharge is great to have because it boosts the rate at which you can use your switch skills. It boosts offensive capabilities, and is often a great filler set since it’s an SR set. It’s great to have on side weapons that don’t provide the majority of your damage, by increasing uptime on your main weapon.

{{ matrix('barbarossa') }}
#### 3p: **50%+ Reflect Damage, 20%+ damage**
Barbarossa is niche because reflect damage has to meet a few conditions before being worth using. After all, is there any point in reflecting 100k damage when you can do that much with ease from strictly going DPS?

However, if a boss hits you for 2m, it suddenly becomes far more worth to reflect half of that back. This creates an issue however since you have to take that 2m damage still to reflect it, since there is no point if you die. This is where Zero comes in. His switch skill provides the party with a 3 second invincibility-frame. That is free reflect damage when timed properly. When switching off this weapons, you get a damage buff for 5 seconds—minimal but useful.

***

As you can see, this list only has standard chips as well as Claudia, because generally it isn’t worth to pull on limited chips when most of your resources will be going towards weapons. Whales, however, are able to get limited chips maxed but guide isn’t geared towards whales. Chips also have dupes which increase the values on their set effects, which makes standard chips even more worth it.

There are also no tank chips present because, tanking as a role already covers anything you might want as a tank, and shield breaking is the biggest thing a tank should focus on apart from survivability (which shouldn’t be reliant on chips). This leaves the rest of the chips for support, DPS, or even niches such as *reflect dmg* which tanks may love.
