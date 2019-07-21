
const MAX_CACHE_SIZE = 10;
var cache = [];

/**
 * Handles the event
 * This method will store the last event in a cache of max depth 10.
 * It is only used to see that the PubSub infrastructure works fine.
 */
exports.do = (event) => {

    return new Promise((success, failure) => {

        // 1. Check the size of the cache and remove the oldest element 
        if (cache.size >= MAX_CACHE_SIZE) cache.shift();

        // 2. Add the event
        cache.push(event);

        // 3. Done
        success();

    });
}

exports.get = (eventId) => {
    
    for (var i = 0; i < cache.length; i++) {

        if (cache[i].id === eventId) return cache[i];
    }

    return null;
}