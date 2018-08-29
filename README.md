# nespresso-de-vertuo-2018-page 

#README UPDATE NEEDED

Nespresso The Positive Cup 2016: *website*.
### Development environment setup
For compilation of JS and SCSS files we used [CodeKit App](https://incident57.com/codekit/). Main JS file is `/source/scripts/main.js`, main SCSS files are `/source/styles/main.scss`, please point them in the application, and set the output directory respectively to `/deploy/assets/scripts/` and `/deploy/assets/styles` folders. Addiitonal wrapper styles are used only for demo/wrapper purposes.

### Development snapshot
*	for styling, project is using [SASS](http://sass-lang.com/) with [Jeet](http://jeet.gs/) mixins, [autoprefixer](https://incident57.com/codekit/help.html#autoprefixer) needs to be set to: > 1%, last 2 versions, Firefox ESR, Opera 12.1, ie >= 11`,
*	for front end code JavaScript is being used along with [jQuery](https://jquery.com/),
*	all icons are crated using SVG font via [IcoMoon.io](https://icomoon.io/app). Current set can be extended by importing `/setup/icomoon.io.json` file and adding needed assets. Then after replacing generated font files in `/assets/fonts/`. Code in `_fonts.scss` also needs to be updated accordingly to point new assets.
*	for back end we used PHP with [CodeIgniter](https://www.codeigniter.com/).

### Deployment
*	in local environment page runs using PHP on Apache server at `local.npc2016.com` (please set your local environemnt accordingly). Delivery contains only static files, in order to prepare the package required by Nespresso team please edit `/deploy/data/distribution.json` and set `distribution_url` to final domain with path. Then open the page with `/renderhtml`. This will render all 4 variants of the page and place them in the `/distribution` server,
*	production deployment was handled via Nespresso DE team,
*	access to staging environment needs to be separately requested as given credentials have expiration date

### Content update
*	all text is placed in `data_en.json` and `data_de.json` files