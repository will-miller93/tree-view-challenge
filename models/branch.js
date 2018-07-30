// require the ORM here. will need the individual functionality that was made
const orm = require('../config/orm');

const Branch = {
    create: function(cols, vals, callback) {
        orm.createBranch('branches', cols, vals, function(res){
            // console.log(res);
            callback(res);
        });
    },
    delete: function(cols, vals, callback) {
        orm.deleteBranch('branches', cols, vals, function(res){
            // console.log(res);
            callback(res);
        });
    },
    update: function(colVals, condition, callback) {
        orm.updateBranch('branches', colVals, condition, function(res){
            // console.log(res);
            callback(res);
        });
    },
    selectAll: function(callback) {
        orm.selectAll('branches', function(res) {
            callback(res);
        });
    }

};

module.exports = Branch;