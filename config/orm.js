// require the connection.js file here.
const connection = require('./connection');

const orm = {
    // what queries will you need to get or give all of the information needed.
    // selectAll: (for getBranches) (SELECT * FROM) (select all from branch table)
 
    // selectAndUpdate: (for updateBranch) (SELECT data FROM branch_table UPDATE) (will need the branch_id, branch_name, children, min_range, max_range)

    // deleteBranch: (for deleteBranch) (will need the branch_id)

    // createBranch: (for createBranch) (Insert into...) (needs branch_name and branch_id)

};


// the ORM will have all of the intial crud functionality as well as the functionality
// for converting the data inserted in the app to an object then converting it into
// mysql data.

// protect against injection here too with a place question marks function

// the initial CRUD functionality will be specific to both the Roots and Branches.

