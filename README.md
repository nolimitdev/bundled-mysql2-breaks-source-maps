1.) Run npm run build

2.) Run npm run server

A) without mysql2 bundled/webpacked (see webpack/config.js externals) result is correct with considering source maps:
webpack:///resources/server.js:2
console.log(someUndefVar);
^
ReferenceError: someUndefVar is not defined
  at <anonymous> (webpack:///resources/server.js:2:1)

B) with mysql2 bundled/webpacked (see webpack/config.js externals) result is incorrect without considering source maps:
ReferenceError: someUndefVar is not defined
  at file://.....etc...../distribute/server.js:25142:13

Note: When mysql2 is replaced with old mysql source maps works well.
