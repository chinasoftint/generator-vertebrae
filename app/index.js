'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var VertebraeGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Vertebrae generator.'));

    var prompts = [{
      name: 'appName',
      message: 'What would you like to name this app?'
    }, {
      name: 'appDescription',
      message: 'Briefly describe the app.',
      default: ''
    }, {
      name: 'authorName',
      message: 'What is your name?',
      default: 'Steve Pember'
    }, {
      name: 'authorEmail',
      message: 'What is your email address?',
      default: 'spember@gmail.com'
    }];

    this.prompt(prompts, function (props) {
      this.appName = props.appName;
      this.appDescription = props.appDescription;
      this.authorName = props.authorName;
      this.authorEmail = props.authorEmail;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/templates');

    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('_index.html', 'index.html');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = VertebraeGenerator;
