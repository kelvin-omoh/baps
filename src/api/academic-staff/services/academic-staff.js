'use strict';

/**
 * academic-staff service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::academic-staff.academic-staff');
