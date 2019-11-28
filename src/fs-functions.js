// Common file system tasks
const fs = require('fs');

module.exports = {
    writeRawDataToFile: function(file, rawData) {
        fs.writeFileSync(rawPageData, rawData);
    },
    writeJsonToFile: function(file, jsonData = {}) {
        let data = JSON.stringify(jsonData);
        fs.writeFileSync(cacheFile, data);
    },
    fetchCacheData: function(file, json = false) {
        let data = fs.readFileSync(file);
        if (json) {
            data = JSON.parse(rawData);            
        }
        return data;
    }
}
