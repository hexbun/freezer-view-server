'use strict'

const Joi = require('joi');

module.exports = {
    id: Joi.number().integer().min(1).required()
}