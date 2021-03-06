'use strict';

var utils = require('../utils');

var IMAGE_WIDTH = 124;
var IMAGE_HEIGTH = 124;

var templateElement = document.querySelector('#review-template');
var elementToClone = utils.getElementToClone(templateElement, '.review');


/**
 * Сборка и добавление отзыва.
 * @param  {obj} data Объект который нужно добавить.
 */
var getReviewsElement = function(data) {
  var element = elementToClone.cloneNode(true);
  var authorImage = element.querySelector('.review-author');
  element.querySelector('.review-text').textContent = data.getDescription();


  var rating = element.querySelector('.review-rating');
  var ratingArray = ['', '', 'two', 'three', 'four', 'five'];
  if (data.getRating() > 1) {
    rating.classList.add('review-rating-' + ratingArray[data.getRating()]);
  }


  utils.loadImage(data.getPictureUrl(), function(isOk) {
    if (isOk) {
      authorImage.src = data.getPictureUrl();
      authorImage.width = IMAGE_WIDTH;
      authorImage.height = IMAGE_HEIGTH;
    } else {
      authorImage.src = '';
      element.classList.add('review-load-failure');
    }
  });

  return element;
};

module.exports = getReviewsElement;
