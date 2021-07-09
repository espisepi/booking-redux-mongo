const connectDB = require("./config/connectDB");
const Table = require("./models/table").model;
const fs = require("fs");
require("dotenv").config();
const allTables = require("./data/allTables");
const colors = require("colors");

// let tableData = fs.readFileSync(__dirname + "/allTables.json");
// tableData = JSON.parse(tableData).tables;

// let allTables = [];
// tableData.forEach(table => {
//   allTables.push(new Table(table));
// });

// console.log(allTables);

connectDB();

/** Add data To mongodb */

const importData = async () => {
    try {
        await Table.deleteMany();
        await Table.insertMany(allTables);
        console.log('Data Imported!'.green.inverse)
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Table.deleteMany();
    } catch (error) {
        console.log(`${error}`)
        process.exit(1);
    }
}

if(process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}