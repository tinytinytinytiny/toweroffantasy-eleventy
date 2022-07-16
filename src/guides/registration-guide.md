---
{
	"title": "Registration Guide",
	"authors": ["Pyrosu#6969", "Zakum#3080", "TheKingOppaiDragon / 👑킹젖가슴드래곤👑#5969"],
	"tags": ["technical", "china"],
	"articleData": {
		"pc": {
			"name": "PC",
			"color": "#99c9f3"
		},
		"android": {
			"name": "Android",
			"color": "#8BD674"
		},
		"ios": {
			"name": "iOS",
			"color": "#ed8cdc"
		}
	}
}
---

{% macro platforms(list, size) %}
<ul class="cluster gap-xs {{ 'my-0' if size === 's' }}">
{% for os in list -%}
	<li class="chip {{ 'text-step--1' if size === 's' }}" data-variant="underline" style="color: {{ articleData[os].color }};">{{ articleData[os].name }}</li>
{%- endfor %}
</ul>
{% endmacro %}

Tower of Fantasy in China has a few different versions.

The client you choose to register for will determine what information you need to provide, which servers you will play on, and what devices you can play on.

You cannot directly play with players from other servers. You may come across them indirectly through random matchmaking, though its possible not all servers are connected.

{% aside %}
The Perfect World Games client is the official version, with three other redistributions by Bilibili, Huawei, and QooApp.
{% endaside %}

**Android versions can be played on PC** with a 64-bit emulator, such as LDPlayer and MuMu Player. Below you can view the various registration methods for each client, with their requirements and supported devices.

**You may consider using [textPlus](https://textplus.com/) to generate a phone number if you do not wish to use your own.**

<figure>
	<table>
		<thead>
			<th scope="col">Client</th>
			<th scope="col">Supported Platforms</th>
		</thead>
		<tbody>
			<tr>
				<th scope="row">
					<a href="#{{ 'Perfect World Games' | slugify }}" data-underline="on-hover">Perfect World Games</a>
				</th>
				<td>{{ platforms(['pc', 'android', 'ios'], 's') }}</td>
			</tr>
			<tr>
				<th scope="row">
					<a href="#{{ 'bilibili' | slugify }}" data-underline="on-hover">bilibili</a>
				</th>
				<td>{{ platforms(['android'], 's') }}</td>
			</tr>
			<tr>
				<th scope="row">
					<a href="#{{ 'Huawei' | slugify }}" data-underline="on-hover">Huawei</a>
				</th>
				<td>{{ platforms(['android'], 's') }}</td>
			</tr>
			<tr>
				<th scope="row">
					<a href="#{{ 'QooApp (9game)' | slugify }}" data-underline="on-hover">QooApp (9game)</a>
				</th>
				<td>{{ platforms(['android'], 's') }}</td>
			</tr>
		</tbody>
	</table>
</figure>

<small>Note: We don't provide guides for registering through *QQ, WeChat, or Weibo* as they specifically require a Chinese phone number. These services act as login authentication layers, just like how you can sign up for things using your Google and Facebook accounts.</small>

{% macro onboarding() %}
<div class="sheet box-border stack copy p-s-m">
<h3>Getting Started</h3>
{{ caller() }}
</div>
{% endmacro %}

{% macro requirements() %}
<div class="sheet box-border stack copy p-s-m" data-layer="1">
<h4>Requirements</h4>
{% markdown %}{{ caller() }}{% endmarkdown %}
</div>
{% endmacro %}

{% macro servers() %}
<div class="sheet box-border stack copy p-s-m" data-layer="1">
<h4>Recommended Servers</h4>
{% markdown %}{{ caller() }}{% endmarkdown %}
</div>
{% endmacro %}

<h2 id="{{ 'Perfect World Games' | slugify }}">Perfect World Games</h2>
{{ platforms(['pc', 'android', 'ios']) }}

{% call onboarding() %}
{% call requirements() %}
- Chinese ID number with matching name
- Phone number (any country)
{% endcall %}
{% call servers() %}
- **星岛 HT-05** (EN/ES community)
- **班吉斯 HT-03** (RU community)
{% endcall %}
{% endcall %}

### Laohu Registration (Faster)
[Text Guide](https://docs.google.com/document/d/1N7UsgrplqUIL3plYk9gQJzYPECwJ5QP1r2zPNXBbsJU)

### PWG Douliu Registration (Slower)
[Text Guide](https://docs.google.com/spreadsheets/d/19BjfRHMYR04GPEPGKhngnAFaPuesCD4dFk26Q8XplEk/edit#gid=2112692818)  
[Video Guide](https://www.youtube.com/watch?v=9RSegv4ntoQ)

We highly recommended that you connect your account to an email and password for security—if you used a publicly available phone number, your account could be stolen. Add them through the Douliu app as mentioned in the guides, and it will be bound to your [Laohu](https://i.laohu.com/) account, so you can login to the game using an email and password instead of phone number and password. Laohu also lets you see your purchases.

<small>Note: We don't provide guides for registering for the PWG client through QQ, WeChat, or Perfect World Passport as they additionally require a **Chinese** phone number.</small>

<h2 id="{{ 'bilibili' | slugify }}">bilibili</h2>
{{ platforms(['android']) }}

{% call onboarding() %}
{% call requirements() %}
- Government-issued passport (any country)
- Phone number (any country)
{% endcall %}
{% call servers() %}
- **悯雨岛 HT-06** (EN community)
- **悯雨岛 HT-02** (RU community)
{% endcall %}
{% endcall %}

### Step 1
Visit [Bilibili’s website](https://www.bilibili.com/) and follow [this video](https://youtu.be/HByc8KNjiD4?t=12) from 00:12–1:46.

### Step 2
Email Bilibili customer support ([gamehelp@bilibili.com](mailto:gamehelp@bilibili.com)) to verify your foreign ID/Passport & Realname.

<figure class="sheet-wrapper wrapper">
{% sheet %}
{% macro mono(text) %}
<span class="text-accent font-mono text-step--1">{{ text }}</span>
{% endmacro %}

<h4 class="text-primary inline-block">Subject:</h4>
<span>&nbsp;Bili_game ID验证提交</span>

<h4 class="text-primary mt-s">Message:</h4>
<div class="sheet p-s stack-space-s" data-layer="1">
{% markdown %}
哔哩哔哩游戏账号实名认证——海外及中国港澳台用户

1. 证件类型：{{ mono('(Government Issued ID card 身份证 / Passport或护照)') }}
2. 真实姓名：{{ mono('(Your name)') }}
3. 证件号码：{{ mono('(Your Government issued ID card or Passport ID number)') }}
4. 国家：{{ mono('(Your Country)') }}
5. 联系方式： {{ mono('(Your contact information e.g Phone and email)') }}
6. B站UID：{{ mono('(found here [PC](https://imgur.com/a/n1sgqRB) [Mobile](https://imgur.com/a/oWHiz9m))') }}
7. Bili_LoginID：{{ mono('(found here [PC](https://imgur.com/a/gGpj47X))') }}
8. 证件正面照片：{{ mono('(attach photo of front and back of ID)') }}
9. 申请人本人手持证件照片：{{ mono('(attach photo of yourself holding the ID)') }}
{% endmarkdown %}
</div>
{% endsheet %}
<figcaption>Account verificaiton email template. There should be 3 photos in total: your id/passport front, back, and photo of yourself holding your id/passport.</figcaption>
</figure>

### Step 3
When you receive a verification approved email, you can [download the Bilibili client here](https://www.biligame.com/detail/?id=105409).

<small>Note: We don't provide guides for registering for a Bilibili account through QQ, WeChat, or Weibo as they additionally require a **Chinese** phone number.</small>

<h2 id="{{ 'Huawei' | slugify }}">Huawei</h2>
{{ platforms(['android']) }}

{% call onboarding() %}
{% call requirements() %}
- Phone number (any country)
{% endcall %}
{% call servers() %}
- **红石柱 HT-05** (EN/ES community)
{% endcall %}
{% endcall %}

This guide works for any Android 9+ users and PC users by using emulator.  
(For emulator users: Only LD player 64 bit & newest version of MuMu works)

### Step 1
Download and install the [Huawei Gallery app](https://consumer.huawei.com/en/mobileservices/appgallery/)

### Step 2
Launch the app and continue with account registration by pressing the “Me” icon on the home page.

**Don't swap region before the registration process!**

In here you need to enter an email address, password and phone number.

### Step 3
Once successfully logged in, continue on the “Me” page and press the “settings page”.

Press the “Country/Region” option and change your country to China. This will restart the app in Chinese.

### Step 4

Search for **幻塔** on the home page and proceed with downloading and installing the Huawei version of the game.  
Afterwards, launch the game and login with your Huawei ID (the account you created in Step 2).

<h2 id="{{ 'QooApp (9game)' | slugify }}">QooApp (9game)</h2>
{{ platforms(['android']) }}

We have not documented the registration process for 9game. It may require a Chinese ID, and there is unlikely to be any global community to play with there.
