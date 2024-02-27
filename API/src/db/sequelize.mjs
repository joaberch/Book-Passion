import { DataType, Sequelize, sequelize } from "sequelize";

const sequelize = new Sequelize("db_books", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 6033,
  logging: true,
});

let initDB = () => {
  return sequelize.sync({ force: true }).then(() => {
    console.log("The database has been synchronized.");
  });
};

export { initDB };
