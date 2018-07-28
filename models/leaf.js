// this will be the model for Leaves. not routes.
const orm = require('../config/orm');

// this model is for creating and deleting leaves from branches.
// you also need to get all of the leaves for branches so maybe you need a selectAll

const Leaf = {
    create: function(callback){
        orm.createLeaves('leaves', cols, vals, function(res){
            callback(res);
        });
    },
    delete: function(callback){
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
