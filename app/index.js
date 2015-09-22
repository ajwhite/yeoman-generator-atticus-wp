var Generator,
    path = require('path'),
    util = require('util'),
    yosay = require('yosay'),
    yeoman = require('yeoman-generator'),
    _ = require('lodash');

Generator = module.exports = function Generator () {
  yeoman.generators.Base.apply(this, arguments);
  this.argument('appname', {type: String, required: false});
  this.appname = this.appname || path.basename(process.cwd())
  this.appname = _.camelCase(this.appname);
  this.appnameSlug = _.kebabCase(this.appname);
};

util.inherits(Generator, yeoman.generators.Base);

Generator.prototype.welcome = function () {
  this.log(yosay('Hello! We\'re going to build a Wordpress project'));
};

Generator.prototype.buildTemplates = function () {
  this.template('_package.json', 'package.json');
  this.template('_travis.yml', '.travis.yml');
  this.template('README.md', 'README.md');
  this.template('gulpfile.js', 'gulpfile.js');
  this.copy('gitignore', '.gitignore');
  this.copy('jscsrc', '.jscsrc');
  this.copy('jshintrc', '.jshintrc');
  this.copy('editorconfig', '.editorconfig');
  this.copy('ruleset.xml', 'ruleset.xml');
};

Generator.prototype.buildDeps = function () {
  this.installDependencies();
};
