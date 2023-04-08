'use strict';

/**
 * dossier-patient service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dossier-patient.dossier-patient');
