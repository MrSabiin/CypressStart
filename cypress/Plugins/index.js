

const cucumber = require('cypress-cucumber-preprocessor').default
/**
*@type {Cypress.PluginConfig}
*/
module.exports = (on, config) => {
// 'on' is used to hook into various events Cypress emits
// 'config' is resolved Cypress config

on('file:preprocessor', cucumber())
}