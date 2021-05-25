const Sequelize = require('sequelize');
                                //database username   password
const sequelize = new Sequelize('gamedb', 'postgres', 'ghastb0i', {
    host: 'localhost',
    dialect: 'postgres',
    // add string below to avoid deprecated warnings
    operatorsAliases: false,
    port: 5433
})

sequelize.authenticate().then(
    function success() {
        console.log("Connected to DB");
    },

    function fail(err) {
        console.log(`Error: ${err}`);
    }
)

// missed module exports declaration
module.exports = sequelize;
