'use strict';

// Docsify plugin functions
function plugin(hook, vm) {
    hook.beforeEach(function (content) {
        // Replace [[img|picture.png|50]] and [[img|picture.png|50|150]] with docsify syntax
        // Will also drop the first entry in the path due to how docsify resolves resourses
        content = content.replace(/\[\[img\|(.+?)\|(\d+)(?:\|(\d+))?\]\]/g, function (match, src, width, height) {
            return `![](${src.split('/').slice(1).join('/')} ':size=${width}${height ? 'x' + height : ''}')`;
        });
        return content;
    });
}

if (typeof window !== "undefined") {
  if (!window.$docsify) {
      console.error('no docsify');
  } else {
      window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
  }
} else {
  module.exports = {plugin}
}

