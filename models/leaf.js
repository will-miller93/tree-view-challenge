// this will be the model for Leaves. not routes.
const orm = require('../config/orm');

const Leaf = {
    create: function(cols, vals, callback){
        orm.createLeaves('leaves', cols, vals, function(res){
            callback(res);
        });
    },
    delete: function(cols, vals, callback){
        orm.deleteLeaves('leaves', cols, vals, function(res){
            callback(res);
        });
    },
    selectAll: function(callback){
        orm.selectAll('leaves', function(res){
            callback(res);
        });
    }
};

module.exports = Leaf;
