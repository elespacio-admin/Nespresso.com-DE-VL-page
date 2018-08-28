### Nespresso DE Vertuo 2018

#README UPDATE NEEDED

Below list describes actions required in order to properly integrate provided in package code with exising CMS' pages.


#### Instructions


* 1) please copy the `DIV` element with id `npc2016` to your markup (this content has to be treated as code not simple text, we have noticed that CMS is removing parts of our markup),
* 2) please point in the `HEAD` tag all CSS and JS resources (**please note**: if you are already using [*Modernizr*](https://modernizr.com/) covering our tests `borderradius, cssanimations, cssgradients, csspointerevents, csstransforms, csstransforms3d, csstransitions, generatedcontent, matchmedia-setclasses`, or [*picturefill*](https://github.com/scottjehl/picturefill) do not use delivered corresponding files):
	- DESKTOP: `modernizr.js`, `main.css`, `main.js`, 
	- MOBILE: `modernizr.js`, `picturefill.js`, `main.css`, `main.js`
* 3) please note: assets folders contain same resources but our CSS files are using absolute, full URL paths so related files have to be placed in proper instances
* 4) remaining tags from `HEAD` are already on the page or are no crucial. Decision regarding using provided titles, desctiptions or *Open Graph* tags is left up to the integration team but it will influence search results and social media appearance.