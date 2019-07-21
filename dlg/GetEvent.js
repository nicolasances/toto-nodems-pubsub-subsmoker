
var eventHandler = require('../evt/HandleEvent');

/**
 * Retrieves a specific event from the cache
 */
exports.do = (req) => {

    return new Promise((success, failure) => {

        let event = eventHandler.get(req.params.id);

        success(event ? event : {});

    })
}