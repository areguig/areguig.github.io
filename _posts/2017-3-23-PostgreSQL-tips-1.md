---
layout: post
title: PostgreSQL tips
tags: postgres postgresql tips
published: true
---

> PostgreSQL is a powerful, open source object-relational database system.
> It has more than 15 years of active development and a proven architecture
> that has earned it a strong reputation for reliability, data integrity, and correctness.

#### Show running queries (postgres 9.2+)

```sql
SELECT now() - query_start as "runtime",client_addr, waiting, state, query
  FROM  pg_stat_activity
 ORDER BY runtime DESC;
 ```
 
#### Show last autovacuum and last autoanalyze by table

```sql
 select relname,last_vacuum, last_autovacuum, last_analyze, last_autoanalyze 
 from pg_stat_user_tables;
 ```
 
#### Kill a query (use with caution)
_running_

```SQL
select relname,last_vacuum, last_autovacuum, last_analyze, last_autoanalyze 
 from pg_stat_user_tables;
 ```
 
_idle_

```sql
SELECT pg_terminate_backend(procpid);
```

#### Tables indexes usage.

```sql
SELECT relname, 100 * idx_scan / (seq_scan + idx_scan) percent_of_times_index_used,
  n_live_tup rows_in_table
FROM pg_stat_user_tables
ORDER BY n_live_tup DESC;
```

#### Estimated dead rows, initiated sequences and indexes scans on tables.

```sql
SELECT relname,(n_dead_tup+n_live_tup) AS estimated_total_rows,
  n_dead_tup AS estimated_dead_rows,
  seq_scan,idx_scan
FROM pg_catalog.pg_stat_all_tables
WHERE n_dead_tup > 0  
  -- and relname =  '<TABLE_NAME>'
  AND schemaname='<SCHEMA_NAME>'
ORDER BY n_dead_tup desc;
```

#### Size of tables on disk

``` sql
SELECT *, pg_size_pretty(total_bytes) AS total
    , pg_size_pretty(index_bytes) AS INDEX
    , pg_size_pretty(toast_bytes) AS toast
    , pg_size_pretty(table_bytes) AS TABLE
FROM (
  SELECT *, total_bytes-index_bytes-COALESCE(toast_bytes,0) AS table_bytes FROM (
      SELECT c.oid,nspname AS table_schema, relname AS TABLE_NAME
              , c.reltuples AS row_estimate
              , pg_total_relation_size(c.oid) AS total_bytes
              , pg_indexes_size(c.oid) AS index_bytes
              , pg_total_relation_size(reltoastrelid) AS toast_bytes
          FROM pg_class c
          LEFT JOIN pg_namespace n ON n.oid = c.relnamespace
          WHERE relkind = 'r'
  ) a
) a;
```
