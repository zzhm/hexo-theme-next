/* global hexo */

'use strict';

const crypto = require('crypto');

hexo.extend.helper.register('hexo_env', type => hexo.env[type]);

hexo.extend.helper.register('next_env', type => {
  const path = require('path');
  const env = require(path.normalize('../../package.json'));
  return env[type];
});

hexo.extend.helper.register('canonical', function() {
  const permalink = hexo.config.permalink;
  const canonical = hexo.theme.config.canonical;
  if (!canonical) return '';
  var url = this.url.replace(/index\.html$/, '');
  if (!permalink.endsWith('.html')) {
    url = url.replace(/\.html$/, '');
  }
  return `<link rel="canonical" href="${url}">`;
});

hexo.extend.helper.register('gitalk_md5', function(path) {
  var str = this.url_for(path);
  str = encodeURI(str);
  str.replace('index.html', '');
  return crypto.createHash('md5').update(str).digest('hex');
});
