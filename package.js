Package.describe({
  name: 'qr-base',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Qulture.Rocks base components and styles',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.export('QRComponents');

  api.use('ecmascript');
  api.use('fourseven:scss');
  api.use('wolves:bourbon');
  api.use('react-form-helpers');

  api.addAssets([
    'public/fonts/font-icons.eot',
    'public/fonts/font-icons.ttf',
    'public/fonts/font-icons.woff',
    'public/fonts/font-icons.svg'
  ], 'client');

  api.addFiles('styles/_qr-base.scss', 'client', { isImport: true });
});
