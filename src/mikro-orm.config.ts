import "dotenv/config";
import { Options } from "@mikro-orm/core";
import { MySqlDriver } from "@mikro-orm/mysql";


const config: Options<MySqlDriver> = {
  debug: true,
  multipleStatements: true,
  entities: ["build/entities/*"],
  entitiesTs: ["src/entities/*"],
  dbName: "mediumint-missing-mikro-orm",
  type: "mysql",
  host: "localhost",
  port: 3306,
  user: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
}

export default config;
