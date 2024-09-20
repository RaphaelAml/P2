import { Sequelize } from "sequelize"; // Use sequelize ao invés de @sequelize/core

const sequelize = new Sequelize("bd_ts_example", "root", "1234", {
  host: "localhost",
  dialect: "mysql", // Aqui você pode usar 'mysql'
});

export default sequelize;
