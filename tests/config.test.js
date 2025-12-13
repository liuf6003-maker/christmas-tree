const assert = require('node:assert');
const { describe, it } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const { IMAGE_URLS, PHOTO_COUNT } = require('../config');

const projectRoot = path.join(__dirname, '..');

describe('config', () => {
  it('PHOTO_COUNT matches the number of configured images', () => {
    assert.strictEqual(PHOTO_COUNT, IMAGE_URLS.length);
  });

  it('all configured images exist', () => {
    IMAGE_URLS.forEach((url) => {
      const relativePath = url.replace(/^\.\//, '');
      const fullPath = path.join(projectRoot, relativePath);
      assert.ok(fs.existsSync(fullPath), `Missing image asset: ${relativePath}`);
    });
  });

  it('image entries are unique', () => {
    const set = new Set(IMAGE_URLS);
    assert.strictEqual(set.size, IMAGE_URLS.length, 'Duplicate image paths found');
  });
});
