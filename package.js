Package.describe({
  name: 'swemyss:infinite-scroll',
  version: '0.0.1',
  summary: 'Template level infinite scrolling.',
  git: 'https://github.com/wemyss/meteor-infinite-scroll',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use(['jquery', 'reactive-var', 'templating'], 'client');
  api.use(['check', 'ecmascript'], ['client', 'server']);
  api.export('InfiniteScroll');
  api.addFiles('infiniteScroll.html', 'client');
  api.addFiles('infinite-scroll.js', 'client');
  api.addFiles('infinite-scroll.css', 'client');
});
