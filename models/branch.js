// require the ORM here. will need the individual functionality that was made
const orm = require('../config/orm');

// this model should create, update, and delete branches from the 'root'

const Branch = {
    create: function(callback) {
        orm.createBranch('branches', cols, vals, function(err, res){
            if (err) throw err;
            callback(res);
        });
    },
    delete: function(callback) {
        orm.deleteBranch('branches', cols, function(err, res){
            if (err) throw err;
            callback(res);
        });
    },
    update: function(callback) {
        orm.updateBranch('branches', colVals, condition, function(err, res){
            if (err) throw err;
            callback(res);
        });
    },
    selectAll: function(callback) {
        orm.selectAll('branches', function(err, res) {
            if (err) throw err;
            callback(res);
        });
    }

};

export default Branch;