/* global hexo */

'use strict';

const crypto = require('crypto');

hexo.extend.helper.register('gitalk_md5', function(path) {
  var str = this.url_for(path);
  str = encodeURI(str);
  str.replace('index.html', '');
  return crypto.createHash('md5').update(str).digest('hex');
});

hexo.extend.helper.register('hexo_env', type => hexo.env[type]);

hexo.extend.helper.register('next_env', type => {
  const path = require('path');
  const env = require(path.normalize('../../package.json'));
  return env[type];
});

hexo.extend.helper.register('canonical', function() {
  const permalink = hexo.config.permalink;
  const canonical = hexo.theme.config.canonical;
  if (permalink.endsWith('.html')) {
    return canonical ? `<link rel="canonical" href="${this.url.replace('index.html', '')}">` : '';
  }
  return canonical ? `<link rel="canonical" href="${this.url.replace('index.html', '').replace('.html', '')}">` : '';
});
