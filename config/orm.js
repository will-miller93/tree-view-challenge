// require the connection.js file here.
const connection = require('./connection');

// helper function for escaping query values for createLeaves vals.
function escapeValues(number) {
    // declare array to put ? in for each instance
    var arr = [];
    // looping over number to decide how many ?
    for (var i = 0; i < number; i++) {
        // now push ? into array.
        arr.push('(?)');
    }
    // return that array information and make it into a string.
    return arr.toString();
};


// helper function for dynamically inserting and formatting cols in updateBranch query.
// this is to help keep the format of UPDATE table SET col = 'val' WHERE condition = 'conditionVal'
function formatObj(object) {
    var arr = [];
    for (keys in object) {
        //  assigning the value of value variable based on For...In loop
        var value = object[keys];
        if (Object.hasOwnProperty.call(object, keys)) {
            if (typeof value === "string") {
                value = "'" + value + "'";
            }
            // pushing key and value into array in format key = value
            arr.push(keys + " = " + value);
        }
    }
    // returning the array information after turning back into strings.
    return arr.toString();
};

const orm = {
    // SELECT * FROM branches(or leaves depending who is calling it). (* = all)
    selectAll: function(table, callback){
        var queryString = `SELECT * FROM ${table};`;
        connection.query(queryString, function(err, res){
            if (err) {
                console.log('err in getting all branches. in orm.js');
                console.log(err);
            };
            // console.log(res);
            callback(res);
        });
    },
    // INSERT INTO branches (name) VALUES ('nameValues')
    createBranch: function(table, cols, vals, callback) {
        var queryString = `INSERT INTO ${table} (${cols}) VALUES ('${vals}');`;
        connection.query(queryString, vals, function(err, res){
            if (err) {
                console.log('error in creating branch');
                console.log(err);
            };
            // console.log(res);
            callback(res);
        });
    },
    // UPDATE branches SET (name = 'nameValue', children = 'childrenValue', min_range = 'min_rangeValue', max_range = 'max_rangeValue') WHERE 'branch_id' = value of branch_id
    updateBranch: function(table, colVals, condition, callback) {
        // may need to include a value for condition for branch_id = value
        var queryString = `UPDATE ${table} SET ${formatObj(colVals)} WHERE ${condition};`;
        connection.query(queryString, function(err, res) {
            if (err) {
                console.log('err in updating branch');
                console.log(err);
            };
            console.log(res);
            callback(res);
        });

    },
    // DELETE FROM branches WHERE 'branch_id' = value of branch_id
    deleteBranch: function(table, cols, vals, callback) {
        var queryString = `DELETE FROM ${table} WHERE (${cols}) = ('${vals}') ;`;
        connection.query(queryString, function(err, res) {
            if (err) {
                console.log('err in deleting branch');
                console.log(err);
            };
            // console.log(res);
            callback(res);
        });
    },
    // INSERT INTO leaves (branch_id, name) VALUES ("idvalue", "namevalue"), ("idvalue", "namevalue")...etc 
    createLeaves: function(table, cols, vals, callback) {
        var queryString = `INSERT INTO ${table} (${cols}) VALUES ${escapeValues(vals.length)};`;
        connection.query(queryString, vals, function(err, res) {
            if (err) {
                console.log('err in creating leaves');
                console.log(err);
            };
                console.log(res);
                callback(res);
        });
    },
    // DELETE FROM leaves WHERE 'branch_id' = value of branch_id
    deleteLeaves: function(table, cols, vals, callback) {
        var queryString = `DELETE FROM ${table} WHERE (${cols}) = ('${vals}');`;
        connection.query(queryString, function(err, res) {
            if (err) {
                console.log("err in deleting leaves.");
                console.log(err);
            };
            console.log(res);
            callback(res);
        });
    }
};

module.exports = orm;



