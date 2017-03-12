var LOG = function() {};

console.log("in log.js");

LOG.prototype.info = function(message){
    console.log(new Date()+"::::"+message);
}

module.exports = new LOG();