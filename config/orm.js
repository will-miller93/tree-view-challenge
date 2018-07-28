// require the connection.js file here.
const connection = require('./connection');

// helper function for escaping query values
function escapeValues(number) {
    // declare array to put ? in for each instance
    var arr = [];
    // looping over number to decide how many ?
    for (var i = 0; i < number; i++) {
        // now push ? into array.
        arr.push('?');
    }
    // return that array information and make it into a string.
    return arr.toString();
};

// helper function for dynamically inserting and formatting cols in query.
function formatObj(object) {
    var arr = [];
    for (keys in object) {
        //  assigning the value of value variable based on For...In loop
        var value = object[keys];
        if (Object.hasOwnProperty.call(object, keys)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // pushing key and value into array in format key = value
            arr.push(key + "=" + value);
        }
    }
    // returning the array information after turning back into strings.
    return arr.toString();
};

const orm = {
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
    createBranch: function(table, cols, vals, callback) {
        var queryString = `INSERT INTO ${table} (${cols}) VALUES ('${vals}');`;
        connection.query(queryString, vals, function(err, res){
            if (err) {
                console.log('error in creating branch');
                console.log(err);
            };
            console.log(res);
            callback(res);
        });
    },
    updateBranch: function(table, colVals, condition, callback) {
        // may need to include a value for condition for branch_id = value
        var queryString = `UPDATE ${table} SET ${formatObj(colVals)} WHERE ${condition};`;
        connection.query(queryString, function(err, res) {
            if (err) {
                console.log('err in updating branch');
                throw err;
            } else {
                console.log(res);
                callback(res);
            };
        });

    },
    // delete by branch_id
    deleteBranch: function(table, cols, vals, callback) {
        var queryString = `DELETE FROM ${table} WHERE ${cols.toString()} = ${vals} ;`;
        connection.query(queryString, function(err, res) {
            if (err) {
                console.log('err in deleting branch');
                throw err;
            } else {
                console.log(res);
                callback(res);
            };
        });
    },
    createLeaves: function(table, cols, vals, callback) {
        var queryString = `INSERT INTO ${table} (${cols}) VALUES ${escapeValues(vals.length)};`;
        connection.query(queryString, vals, function(err, res) {
            if (err) {
                console.log('err in creating leaves');
                throw err;
            } else {
                console.log(res);
                callback(res);
            };
        });
    },
    // delete by branch_id 
    deleteLeaves: function(table, cols, callback) {
        var queryString = `DELETE FROM ${table} WHERE ${cols.toString()} = ?;`;
        connection.query(queryString, function(err, res) {
            if (err) {
                console.log("err in deleting leaves.");
                throw err;
            } else {
                console.log(res);
                callback(res);
            };
        });
    }
};

module.exports = orm;



