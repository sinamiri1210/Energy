(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular/forms':             '/@angular/forms/bundles/forms.umd.js',
    'rxjs':                       'libs',//'node_modules/rxjs'
    'angular2-highcharts':        'libs',
    'highcharts' :                 '/@highcharts',
    'angular2-google-maps/core':  '@maps/core.umd.js',
    'ng2-pagination':             '/@pagination'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        {main: 'boot.js',  defaultExtension: 'js' },
    'rxjs':                       {defaultExtension: 'js' },
    'angular2-highcharts':        {main: 'index.js', defaultExtension: 'js'},
    'highcharts':                 {main: 'highcharts.src.js', defaultExtension: 'js'},
    'ng2-pagination':             {main: 'ng2-pagination.js', defaultExtension: 'js' }
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);