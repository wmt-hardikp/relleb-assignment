var elasticsearch = require('elasticsearch-browser');

var client = new elasticsearch.Client({
    host: 'http://192.168.1.127:9200/' 
    // http://localhost:9200/ 
    // http://root:12345@localhost:9200/ 
    // If you have set username and password
});



export default client;