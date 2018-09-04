# Nespresso DE Vertuo 2018


### Development environment setup
For compilation of JS and SCSS files we used [CodeKit App](https://incident57.com/codekit/). Main JS file is `/source/scripts/main.js`, main SCSS files are `/source/styles/main.scss`, please point them in the application, and set the output directory respectively to `/deploy/assets/scripts/` and `/deploy/assets/styles` folders. Additional wrapper styles are used only for demo/wrapper purposes.

### Development snapshot
*	for styling, project is using [SASS](http://sass-lang.com/), [autoprefixer](https://incident57.com/codekit/help.html#autoprefixer) needs to be set to: > 1%, last 2 versions, Firefox ESR, Opera 12.1, ie >= 11`,
*	for front end code JavaScript is being used along with [jQuery](https://jquery.com/) and [Modernizr](https://modernizr.com/) both of them linked from the Nespresso server,
*	for back end we used PHP with [CodeIgniter](https://www.codeigniter.com/).

### Deployment
*	in local environment page runs using PHP on Apache server at `local.nvertuo.com` (please set your local environemnt accordingly). Delivery contains only static files, in order to prepare the package required by Nespresso team please edit `/deploy/data/distribution.json` and set `distribution_url` to final domain with path. Then open the page with `/renderhtml`. This will render all defined variants of the page and place them in the `/distribution` folder,
*	production deployment was handled via Nespresso DE team

### Content update
*	all text is placed in `data_en.json` and `data_de.json` files