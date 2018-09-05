# Nespresso DE Vertuo 2018

Below list describes actions required in order to properly integrate provided in package code with exising CMS' pages.


#### Instructions


* 1) please copy the `DIV` element with id `nvertuo2018` to your markup (this content has to be treated as code not simple text, we have noticed that some CMS is removing parts of our markup),
* 2) please point in all the `CSS` and `JS` resources (`main.css`, `main.js`) (**please note**: code asssums that [*Modernizr*](https://modernizr.com/) and [*jQuery*](https://jquery.com) are present on the page as it was set in the example page, also assumes that order/placement of links to resources is going to follow the presented page examples,
* 3) assets folders structure has to be kept or links to resources will not work absolute paths are in use (`BASEURL/assets/styles`, `BASEURL/assets/scripts`, `BASEURL/assets/fonts`, `BASEURL/assets/images`, where `BASEURL` is provided: _https://www.nespresso.com/de/en/mitglied-werden-vertuo-original_ or _https://www.nespresso.com/de/en/mitglied-werden-vertuo-original_ depending on the language).