# Nespresso DE Vertuo 2018

Below list describes actions required in order to properly integrate provided in package code with exising CMS' pages.


#### Instructions


* 1) please copy the `DIV` element with id `nvertuo2018` to your markup (this content has to be treated as code not simple text, we have noticed that some CMS is removing parts of our markup),
* 2) please point in all the `CSS` and `JS` resources (`main.css`, `main.js`) (**please note**: code asssums that [*Modernizr*](https://modernizr.com/) and [*jQuery*](https://jquery.com) are present on the page as it was set in the example page.
* 3) please note: assets folders contain same resources but our CSS files are using absolute, full URL paths so related files have to be placed in proper instances.