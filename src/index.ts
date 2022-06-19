import { MikroORM } from "@mikro-orm/core";
import { MySqlDriver } from "@mikro-orm/mysql";
import config from "./mikro-orm.config";

(async () => {
  const orm = await MikroORM.init(config);
  console.log(orm);
})();
