// Global configuration for the Christmas tree experience.
// Update IMAGE_URLS to point to your own photos inside the assets folder.
const IMAGE_URLS = [
  './assets/1.jpg',
  './assets/2.jpg',
  './assets/3.jpg',
  './assets/4.jpg',
  './assets/5.jpg',
  './assets/6.jpg',
  './assets/7.jpg',
  './assets/8.jpg',
  './assets/9.jpg',
  './assets/10.jpg'
];

// Keep PHOTO_COUNT in sync with the number of configured images.
const PHOTO_COUNT = IMAGE_URLS.length;

if (typeof module !== 'undefined') {
  module.exports = { IMAGE_URLS, PHOTO_COUNT };
}
