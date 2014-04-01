# Vertebrae Generator

Yeoman generator based around Backbone and RequireJS.

[Yeoman](http://yeoman.io) generator that scaffolds out a front-end web app.


## Technologies

I've incorporated the following technologies into the structure which I consider extremely useful for structuring and driving your front end application:

*	[Backbone][backbone]: Thus the title. Brings decently coherent structure to your app
*	[Underscore][underscore]: Required for Backbone; adds some nice convenience methods
*  [jQuery][jquery] (optional): Ever-prevalent JS library
*	[Zepto][zepto] (optional): I generally prefer it over jQuery
*	[Handlebars][handlebars]: My favorite JS templating engine; has a nice balance between feature set and being light-weight
*	[RequireJS][require]: Asynchronous module management for your front end code. Really can't say enough good things about it. Once you understand how it works, you'll be writing highly modular, easily testable code in no time.
*	[Sass][sass]: Helps to manage your CSS
*	[Bootstrap][bootstrap] (optional): Heavy-weight CSS and JS framework for starting up a responsive, feature-heavy app
*	[Font Awesome][fontawesome] (optional): Bring font-based icons to your project
*	[Fastclick][fastclick] (optional): Brief JS library for eliminating the 300ms delay when clicking on mobile browsers

Additionally, for development/deployment purposes Vertabrae also includes:

*	[NodeJS][nodejs]: The __only__ way to run your server-side JS. Required by several build tools (e.g. [Grunt][grunt])
*	[Grunt][grunt]: Fantastic JS-based Task Runner. Used to drive just about everything: tests, handlebars
*	[Karma][karma]: Used to be called 'Testacular'. A JS Test runner that can execute your tests in multiple browsers simultaneously, or go headless via PhantomJS and run in the background
*	[Jasmine][jasmine]: BDD JS testing
*	[Bower][bower]: Package Manager; use to download libraries rather than check into source code

The overall goal of encouraging the usage of a task runner like [Grunt][grunt] is to reinforce and encourage practices from the server-side world to your front end code.


## Getting Started

### Yeoman
- Install: `npm install -g yo`

### Vertebrae Generator
- Install: `npm install -g generator-vertebrae`
- Run: `yo vertebrae`


## License

MIT

[jquery]: http://jquery.com/ "jQuery"
[zepto]: http://zeptojs.com/ "Zepto"
[underscore]: http://underscorejs.org/ "Underscore.js"
[backbone]: http://backbonejs.org/  "Backbone.js"
[handlebars]: http://handlebarsjs.com/ "Handlebars"
[require]: http://requirejs.org/ "Require.js"
[nodejs]: http://nodejs.org/ "NodeJS"
[grunt]: http://gruntjs.com/ "Grunt"
[karma]: http://karma-runner.github.io/0.10/index.html "Karma"
[jasmine]: http://pivotal.github.io/jasmine/ "Jasmine"
[bower]: http://bower.io/ "Bower"
[sass]: http://sass-lang.com/ "Sass"
[amd]: http://requirejs.org/docs/whyamd.html "Why AMD?"
[bootstrap]: http://getbootstrap.com/ "Bootstrap"
[fontawesome]: http://fortawesome.github.io/Font-Awesome/ "Font Awesome"
[fastclick]: https://github.com/ftlabs/fastclick "Fastclick"
