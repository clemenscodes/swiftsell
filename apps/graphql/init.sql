-- We will create a separate user to grant permissions on hasura-specific
-- schemas and information_schema and pg_catalog.
-- These permissions/grants are required for Hasura to work properly.

-- create a separate user for to manage metadata database
CREATE USER hasurauser WITH PASSWORD 'hasurauser';

-- create the schemas required by the hasura system
-- NOTE: If you are starting from scratch: drop the below schemas first, if they exist.
CREATE SCHEMA IF NOT EXISTS hdb_catalog;

-- make the user an owner of the schema
ALTER SCHEMA hdb_catalog OWNER TO hasurauser;

-- See section below on pgcrypto in PG search path
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- grant select permissions on information_schema and pg_catalog. This is
-- required for hasura to query the list of available tables.
-- NOTE: these permissions are usually available by default to all users via PUBLIC grant
GRANT SELECT ON ALL TABLES IN SCHEMA information_schema TO hasurauser;
GRANT SELECT ON ALL TABLES IN SCHEMA pg_catalog TO hasurauser;

-- The below permissions are optional. This is dependent on what access to your
-- tables/schemas you want give to hasura. If you want expose the public
-- schema for GraphQL query then give permissions on public schema to the
-- hasura user.
-- Be careful to use these in your production db. Consult the Postgres manual or
-- your DBA and give appropriate permissions.

-- grant all privileges on all tables in the public schema. This can be customized:
-- For example, if you only want to use GraphQL regular queries and not mutations,
-- then you can set: GRANT SELECT ON ALL TABLES...
GRANT USAGE ON SCHEMA public TO hasurauser;
GRANT ALL ON ALL TABLES IN SCHEMA public TO hasurauser;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO hasurauser;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO hasurauser;

-- Similarly add these for other schemas as well, if you have any.
-- GRANT USAGE ON SCHEMA <schema-name> TO hasurauser;
-- GRANT ALL ON ALL TABLES IN SCHEMA <schema-name> TO hasurauser;
-- GRANT ALL ON ALL SEQUENCES IN SCHEMA <schema-name> TO hasurauser;
-- GRANT ALL ON ALL FUNCTIONS IN SCHEMA <schema-name> TO hasurauser;

-- By defaults users won't have access to tables they have not created (and thus do not own).
-- You can change these default privileges to grant access to any object created in the future.
-- ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES;
-- ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES;
-- ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON FUNCTIONS;
-- Alternatively, you may restrict this to objects created by a specific user
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO hasurauser;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON SEQUENCES TO hasurauser;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON FUNCTIONS TO hasurauser;
