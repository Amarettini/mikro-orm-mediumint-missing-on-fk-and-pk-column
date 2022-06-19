## Problem

Mikro-orm does not create FK columns of type `MEDIUMINT`. Setting `columntType="MEDIUMINT` on property has no
affect on the generated schema.

## Commands History
```bash
# Creates new schema and dumps to file
npx mikro-orm schema:create --dump>generated-schemas/basic.sql


# Drops and creates new schema
npx mikro-orm schema:fresh --run


```
