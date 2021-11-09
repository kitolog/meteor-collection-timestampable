Package.describe({
  git: 'https://github.com/kitolog/meteor-collection-timestampable.git',
  name: 'kitolog:collection-timestampable',
  summary: 'Add timestamps to collections',
  version: '1.0.10'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use([
    'check',
    'coffeescript',
    'underscore'
  ]);

  api.use([
    'matb33:collection-hooks@1.1.0',
    'zimme:collection-behaviours@1.1.3'
  ]);

  api.use([
    'aldeed:autoform@7.0.0',
    'aldeed:collection2@3.2.2',
    'aldeed:simple-schema@1.5.4'
  ], ['client', 'server'], {weak: true});

  api.imply('zimme:collection-behaviours');

  api.addFiles('timestampable.coffee');
});
