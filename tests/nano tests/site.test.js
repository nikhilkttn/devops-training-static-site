const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");

test("required website files exist", () => {
  assert.ok(fs.existsSync("index.html"));
  assert.ok(fs.existsSync("style.css"));
  assert.ok(fs.existsSync("script.js"));
});