import { Sequelize } from "sequelize";

const db = new Sequelize('keuangan', 'stefanie', '123', {
    host: "34.101.48.4",
    dialect: "mysql"
});

export default db;
