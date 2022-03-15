'use strict';

/**
 * film service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::film.film');
