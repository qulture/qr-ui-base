Package.describe({
  name: 'qulture:qr-ui-base',
  version: '0.0.11',
  summary: 'QR base react components and styles',
  git: 'https://github.com/qulture/qr-ui-base',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.export('QRComponents');

  api.use('ecmascript');
  api.use('fourseven:scss@3.4.3');
  api.use('wolves:bourbon@3.1.0');
  api.use('cinn:react-form-helpers@0.0.1');

  api.addAssets([
    'public/fonts/font-icons.eot',
    'public/fonts/font-icons.ttf',
    'public/fonts/font-icons.woff',
    'public/fonts/font-icons.svg'
  ], 'client');

  api.addFiles('styles/_qr-base.scss', 'client', { isImport: true });
});
