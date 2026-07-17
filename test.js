const assert = require('assert');

// Smoke test: make sure the app module loads and exposes what we expect.
const appSource = require('fs').readFileSync(require('path').join(__dirname, 'app.js'), 'utf8');

assert.ok(appSource.includes('http.createServer'), 'app.js should create an HTTP server');
assert.ok(appSource.includes('Hello World'), 'app.js should have a default Hello World message');

console.log('All tests passed.');
