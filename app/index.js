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

};

Generator.prototype.buildDeps = function () {
  this.installDependencies();
};
