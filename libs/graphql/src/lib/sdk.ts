import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Role: any;
  float8: any;
  timestamp: string;
  timestamptz: string;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "Role". All fields are combined with logical 'AND'. */
export type Role_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Role']>;
  _gt?: InputMaybe<Scalars['Role']>;
  _gte?: InputMaybe<Scalars['Role']>;
  _in?: InputMaybe<Array<Scalars['Role']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Role']>;
  _lte?: InputMaybe<Scalars['Role']>;
  _neq?: InputMaybe<Scalars['Role']>;
  _nin?: InputMaybe<Array<Scalars['Role']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "_prisma_migrations" */
export type _Prisma_Migrations = {
  __typename?: '_prisma_migrations';
  applied_steps_count: Scalars['Int'];
  checksum: Scalars['String'];
  finished_at: Maybe<Scalars['timestamptz']>;
  id: Scalars['String'];
  logs: Maybe<Scalars['String']>;
  migration_name: Scalars['String'];
  rolled_back_at: Maybe<Scalars['timestamptz']>;
  started_at: Scalars['timestamptz'];
};

/** aggregated selection of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate = {
  __typename?: '_prisma_migrations_aggregate';
  aggregate: Maybe<_Prisma_Migrations_Aggregate_Fields>;
  nodes: Array<_Prisma_Migrations>;
};

/** aggregate fields of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate_Fields = {
  __typename?: '_prisma_migrations_aggregate_fields';
  avg: Maybe<_Prisma_Migrations_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<_Prisma_Migrations_Max_Fields>;
  min: Maybe<_Prisma_Migrations_Min_Fields>;
  stddev: Maybe<_Prisma_Migrations_Stddev_Fields>;
  stddev_pop: Maybe<_Prisma_Migrations_Stddev_Pop_Fields>;
  stddev_samp: Maybe<_Prisma_Migrations_Stddev_Samp_Fields>;
  sum: Maybe<_Prisma_Migrations_Sum_Fields>;
  var_pop: Maybe<_Prisma_Migrations_Var_Pop_Fields>;
  var_samp: Maybe<_Prisma_Migrations_Var_Samp_Fields>;
  variance: Maybe<_Prisma_Migrations_Variance_Fields>;
};


/** aggregate fields of "_prisma_migrations" */
export type _Prisma_Migrations_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Prisma_Migrations_Avg_Fields = {
  __typename?: '_prisma_migrations_avg_fields';
  applied_steps_count: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_prisma_migrations". All fields are combined with a logical 'AND'. */
export type _Prisma_Migrations_Bool_Exp = {
  _and?: InputMaybe<Array<_Prisma_Migrations_Bool_Exp>>;
  _not?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
  _or?: InputMaybe<Array<_Prisma_Migrations_Bool_Exp>>;
  applied_steps_count?: InputMaybe<Int_Comparison_Exp>;
  checksum?: InputMaybe<String_Comparison_Exp>;
  finished_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  logs?: InputMaybe<String_Comparison_Exp>;
  migration_name?: InputMaybe<String_Comparison_Exp>;
  rolled_back_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "_prisma_migrations" */
export enum _Prisma_Migrations_Constraint {
  /** unique or primary key constraint on columns "id" */
  PrismaMigrationsPkey = '_prisma_migrations_pkey'
}

/** input type for incrementing numeric columns in table "_prisma_migrations" */
export type _Prisma_Migrations_Inc_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "_prisma_migrations" */
export type _Prisma_Migrations_Insert_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
  checksum?: InputMaybe<Scalars['String']>;
  finished_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  migration_name?: InputMaybe<Scalars['String']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type _Prisma_Migrations_Max_Fields = {
  __typename?: '_prisma_migrations_max_fields';
  applied_steps_count: Maybe<Scalars['Int']>;
  checksum: Maybe<Scalars['String']>;
  finished_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['String']>;
  logs: Maybe<Scalars['String']>;
  migration_name: Maybe<Scalars['String']>;
  rolled_back_at: Maybe<Scalars['timestamptz']>;
  started_at: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type _Prisma_Migrations_Min_Fields = {
  __typename?: '_prisma_migrations_min_fields';
  applied_steps_count: Maybe<Scalars['Int']>;
  checksum: Maybe<Scalars['String']>;
  finished_at: Maybe<Scalars['timestamptz']>;
  id: Maybe<Scalars['String']>;
  logs: Maybe<Scalars['String']>;
  migration_name: Maybe<Scalars['String']>;
  rolled_back_at: Maybe<Scalars['timestamptz']>;
  started_at: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "_prisma_migrations" */
export type _Prisma_Migrations_Mutation_Response = {
  __typename?: '_prisma_migrations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Prisma_Migrations>;
};

/** on_conflict condition type for table "_prisma_migrations" */
export type _Prisma_Migrations_On_Conflict = {
  constraint: _Prisma_Migrations_Constraint;
  update_columns?: Array<_Prisma_Migrations_Update_Column>;
  where?: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};

/** Ordering options when selecting data from "_prisma_migrations". */
export type _Prisma_Migrations_Order_By = {
  applied_steps_count?: InputMaybe<Order_By>;
  checksum?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  logs?: InputMaybe<Order_By>;
  migration_name?: InputMaybe<Order_By>;
  rolled_back_at?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _prisma_migrations */
export type _Prisma_Migrations_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "_prisma_migrations" */
export enum _Prisma_Migrations_Select_Column {
  /** column name */
  AppliedStepsCount = 'applied_steps_count',
  /** column name */
  Checksum = 'checksum',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  Logs = 'logs',
  /** column name */
  MigrationName = 'migration_name',
  /** column name */
  RolledBackAt = 'rolled_back_at',
  /** column name */
  StartedAt = 'started_at'
}

/** input type for updating data in table "_prisma_migrations" */
export type _Prisma_Migrations_Set_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
  checksum?: InputMaybe<Scalars['String']>;
  finished_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  migration_name?: InputMaybe<Scalars['String']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type _Prisma_Migrations_Stddev_Fields = {
  __typename?: '_prisma_migrations_stddev_fields';
  applied_steps_count: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Prisma_Migrations_Stddev_Pop_Fields = {
  __typename?: '_prisma_migrations_stddev_pop_fields';
  applied_steps_count: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Prisma_Migrations_Stddev_Samp_Fields = {
  __typename?: '_prisma_migrations_stddev_samp_fields';
  applied_steps_count: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "_prisma_migrations" */
export type _Prisma_Migrations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: _Prisma_Migrations_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type _Prisma_Migrations_Stream_Cursor_Value_Input = {
  applied_steps_count?: InputMaybe<Scalars['Int']>;
  checksum?: InputMaybe<Scalars['String']>;
  finished_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  logs?: InputMaybe<Scalars['String']>;
  migration_name?: InputMaybe<Scalars['String']>;
  rolled_back_at?: InputMaybe<Scalars['timestamptz']>;
  started_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type _Prisma_Migrations_Sum_Fields = {
  __typename?: '_prisma_migrations_sum_fields';
  applied_steps_count: Maybe<Scalars['Int']>;
};

/** update columns of table "_prisma_migrations" */
export enum _Prisma_Migrations_Update_Column {
  /** column name */
  AppliedStepsCount = 'applied_steps_count',
  /** column name */
  Checksum = 'checksum',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  Logs = 'logs',
  /** column name */
  MigrationName = 'migration_name',
  /** column name */
  RolledBackAt = 'rolled_back_at',
  /** column name */
  StartedAt = 'started_at'
}

export type _Prisma_Migrations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<_Prisma_Migrations_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<_Prisma_Migrations_Set_Input>;
  /** filter the rows which have to be updated */
  where: _Prisma_Migrations_Bool_Exp;
};

/** aggregate var_pop on columns */
export type _Prisma_Migrations_Var_Pop_Fields = {
  __typename?: '_prisma_migrations_var_pop_fields';
  applied_steps_count: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Prisma_Migrations_Var_Samp_Fields = {
  __typename?: '_prisma_migrations_var_samp_fields';
  applied_steps_count: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Prisma_Migrations_Variance_Fields = {
  __typename?: '_prisma_migrations_variance_fields';
  applied_steps_count: Maybe<Scalars['Float']>;
};

/** columns and relationships of "cart" */
export type Cart = {
  __typename?: 'cart';
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  updatedAt: Scalars['timestamp'];
  userId: Scalars['Int'];
};

/** aggregated selection of "cart" */
export type Cart_Aggregate = {
  __typename?: 'cart_aggregate';
  aggregate: Maybe<Cart_Aggregate_Fields>;
  nodes: Array<Cart>;
};

/** aggregate fields of "cart" */
export type Cart_Aggregate_Fields = {
  __typename?: 'cart_aggregate_fields';
  avg: Maybe<Cart_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Cart_Max_Fields>;
  min: Maybe<Cart_Min_Fields>;
  stddev: Maybe<Cart_Stddev_Fields>;
  stddev_pop: Maybe<Cart_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Cart_Stddev_Samp_Fields>;
  sum: Maybe<Cart_Sum_Fields>;
  var_pop: Maybe<Cart_Var_Pop_Fields>;
  var_samp: Maybe<Cart_Var_Samp_Fields>;
  variance: Maybe<Cart_Variance_Fields>;
};


/** aggregate fields of "cart" */
export type Cart_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Cart_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Cart_Avg_Fields = {
  __typename?: 'cart_avg_fields';
  id: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "cart". All fields are combined with a logical 'AND'. */
export type Cart_Bool_Exp = {
  _and?: InputMaybe<Array<Cart_Bool_Exp>>;
  _not?: InputMaybe<Cart_Bool_Exp>;
  _or?: InputMaybe<Array<Cart_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "cart" */
export enum Cart_Constraint {
  /** unique or primary key constraint on columns "id" */
  CartPkey = 'cart_pkey'
}

/** input type for incrementing numeric columns in table "cart" */
export type Cart_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "cart" */
export type Cart_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Cart_Max_Fields = {
  __typename?: 'cart_max_fields';
  createdAt: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['timestamp']>;
  userId: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Cart_Min_Fields = {
  __typename?: 'cart_min_fields';
  createdAt: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['timestamp']>;
  userId: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "cart" */
export type Cart_Mutation_Response = {
  __typename?: 'cart_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cart>;
};

/** on_conflict condition type for table "cart" */
export type Cart_On_Conflict = {
  constraint: Cart_Constraint;
  update_columns?: Array<Cart_Update_Column>;
  where?: InputMaybe<Cart_Bool_Exp>;
};

/** Ordering options when selecting data from "cart". */
export type Cart_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cart */
export type Cart_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "cart" */
export enum Cart_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "cart" */
export type Cart_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Cart_Stddev_Fields = {
  __typename?: 'cart_stddev_fields';
  id: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Cart_Stddev_Pop_Fields = {
  __typename?: 'cart_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Cart_Stddev_Samp_Fields = {
  __typename?: 'cart_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "cart" */
export type Cart_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cart_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cart_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Cart_Sum_Fields = {
  __typename?: 'cart_sum_fields';
  id: Maybe<Scalars['Int']>;
  userId: Maybe<Scalars['Int']>;
};

/** update columns of table "cart" */
export enum Cart_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type Cart_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cart_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cart_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cart_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cart_Var_Pop_Fields = {
  __typename?: 'cart_var_pop_fields';
  id: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Cart_Var_Samp_Fields = {
  __typename?: 'cart_var_samp_fields';
  id: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Cart_Variance_Fields = {
  __typename?: 'cart_variance_fields';
  id: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "inventory" */
export type Inventory = {
  __typename?: 'inventory';
  id: Scalars['Int'];
  productId: Scalars['Int'];
  quantity: Scalars['Int'];
  storeId: Scalars['Int'];
};

/** aggregated selection of "inventory" */
export type Inventory_Aggregate = {
  __typename?: 'inventory_aggregate';
  aggregate: Maybe<Inventory_Aggregate_Fields>;
  nodes: Array<Inventory>;
};

/** aggregate fields of "inventory" */
export type Inventory_Aggregate_Fields = {
  __typename?: 'inventory_aggregate_fields';
  avg: Maybe<Inventory_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Inventory_Max_Fields>;
  min: Maybe<Inventory_Min_Fields>;
  stddev: Maybe<Inventory_Stddev_Fields>;
  stddev_pop: Maybe<Inventory_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Inventory_Stddev_Samp_Fields>;
  sum: Maybe<Inventory_Sum_Fields>;
  var_pop: Maybe<Inventory_Var_Pop_Fields>;
  var_samp: Maybe<Inventory_Var_Samp_Fields>;
  variance: Maybe<Inventory_Variance_Fields>;
};


/** aggregate fields of "inventory" */
export type Inventory_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Inventory_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Inventory_Avg_Fields = {
  __typename?: 'inventory_avg_fields';
  id: Maybe<Scalars['Float']>;
  productId: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "inventory". All fields are combined with a logical 'AND'. */
export type Inventory_Bool_Exp = {
  _and?: InputMaybe<Array<Inventory_Bool_Exp>>;
  _not?: InputMaybe<Inventory_Bool_Exp>;
  _or?: InputMaybe<Array<Inventory_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  productId?: InputMaybe<Int_Comparison_Exp>;
  quantity?: InputMaybe<Int_Comparison_Exp>;
  storeId?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "inventory" */
export enum Inventory_Constraint {
  /** unique or primary key constraint on columns "id" */
  InventoryPkey = 'inventory_pkey'
}

/** input type for incrementing numeric columns in table "inventory" */
export type Inventory_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  storeId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "inventory" */
export type Inventory_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  storeId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Inventory_Max_Fields = {
  __typename?: 'inventory_max_fields';
  id: Maybe<Scalars['Int']>;
  productId: Maybe<Scalars['Int']>;
  quantity: Maybe<Scalars['Int']>;
  storeId: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Inventory_Min_Fields = {
  __typename?: 'inventory_min_fields';
  id: Maybe<Scalars['Int']>;
  productId: Maybe<Scalars['Int']>;
  quantity: Maybe<Scalars['Int']>;
  storeId: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "inventory" */
export type Inventory_Mutation_Response = {
  __typename?: 'inventory_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Inventory>;
};

/** on_conflict condition type for table "inventory" */
export type Inventory_On_Conflict = {
  constraint: Inventory_Constraint;
  update_columns?: Array<Inventory_Update_Column>;
  where?: InputMaybe<Inventory_Bool_Exp>;
};

/** Ordering options when selecting data from "inventory". */
export type Inventory_Order_By = {
  id?: InputMaybe<Order_By>;
  productId?: InputMaybe<Order_By>;
  quantity?: InputMaybe<Order_By>;
  storeId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: inventory */
export type Inventory_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "inventory" */
export enum Inventory_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'productId',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StoreId = 'storeId'
}

/** input type for updating data in table "inventory" */
export type Inventory_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  storeId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Inventory_Stddev_Fields = {
  __typename?: 'inventory_stddev_fields';
  id: Maybe<Scalars['Float']>;
  productId: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Inventory_Stddev_Pop_Fields = {
  __typename?: 'inventory_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
  productId: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Inventory_Stddev_Samp_Fields = {
  __typename?: 'inventory_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
  productId: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "inventory" */
export type Inventory_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Inventory_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Inventory_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  quantity?: InputMaybe<Scalars['Int']>;
  storeId?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Inventory_Sum_Fields = {
  __typename?: 'inventory_sum_fields';
  id: Maybe<Scalars['Int']>;
  productId: Maybe<Scalars['Int']>;
  quantity: Maybe<Scalars['Int']>;
  storeId: Maybe<Scalars['Int']>;
};

/** update columns of table "inventory" */
export enum Inventory_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'productId',
  /** column name */
  Quantity = 'quantity',
  /** column name */
  StoreId = 'storeId'
}

export type Inventory_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Inventory_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Inventory_Set_Input>;
  /** filter the rows which have to be updated */
  where: Inventory_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Inventory_Var_Pop_Fields = {
  __typename?: 'inventory_var_pop_fields';
  id: Maybe<Scalars['Float']>;
  productId: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Inventory_Var_Samp_Fields = {
  __typename?: 'inventory_var_samp_fields';
  id: Maybe<Scalars['Float']>;
  productId: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Inventory_Variance_Fields = {
  __typename?: 'inventory_variance_fields';
  id: Maybe<Scalars['Float']>;
  productId: Maybe<Scalars['Float']>;
  quantity: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "_prisma_migrations" */
  delete__prisma_migrations: Maybe<_Prisma_Migrations_Mutation_Response>;
  /** delete single row from the table: "_prisma_migrations" */
  delete__prisma_migrations_by_pk: Maybe<_Prisma_Migrations>;
  /** delete data from the table: "cart" */
  delete_cart: Maybe<Cart_Mutation_Response>;
  /** delete single row from the table: "cart" */
  delete_cart_by_pk: Maybe<Cart>;
  /** delete data from the table: "inventory" */
  delete_inventory: Maybe<Inventory_Mutation_Response>;
  /** delete single row from the table: "inventory" */
  delete_inventory_by_pk: Maybe<Inventory>;
  /** delete data from the table: "order" */
  delete_order: Maybe<Order_Mutation_Response>;
  /** delete single row from the table: "order" */
  delete_order_by_pk: Maybe<Order>;
  /** delete data from the table: "product" */
  delete_product: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  delete_product_by_pk: Maybe<Product>;
  /** delete data from the table: "store" */
  delete_store: Maybe<Store_Mutation_Response>;
  /** delete single row from the table: "store" */
  delete_store_by_pk: Maybe<Store>;
  /** delete data from the table: "user" */
  delete_user: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk: Maybe<User>;
  /** insert data into the table: "_prisma_migrations" */
  insert__prisma_migrations: Maybe<_Prisma_Migrations_Mutation_Response>;
  /** insert a single row into the table: "_prisma_migrations" */
  insert__prisma_migrations_one: Maybe<_Prisma_Migrations>;
  /** insert data into the table: "cart" */
  insert_cart: Maybe<Cart_Mutation_Response>;
  /** insert a single row into the table: "cart" */
  insert_cart_one: Maybe<Cart>;
  /** insert data into the table: "inventory" */
  insert_inventory: Maybe<Inventory_Mutation_Response>;
  /** insert a single row into the table: "inventory" */
  insert_inventory_one: Maybe<Inventory>;
  /** insert data into the table: "order" */
  insert_order: Maybe<Order_Mutation_Response>;
  /** insert a single row into the table: "order" */
  insert_order_one: Maybe<Order>;
  /** insert data into the table: "product" */
  insert_product: Maybe<Product_Mutation_Response>;
  /** insert a single row into the table: "product" */
  insert_product_one: Maybe<Product>;
  /** insert data into the table: "store" */
  insert_store: Maybe<Store_Mutation_Response>;
  /** insert a single row into the table: "store" */
  insert_store_one: Maybe<Store>;
  /** insert data into the table: "user" */
  insert_user: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one: Maybe<User>;
  /** update data of the table: "_prisma_migrations" */
  update__prisma_migrations: Maybe<_Prisma_Migrations_Mutation_Response>;
  /** update single row of the table: "_prisma_migrations" */
  update__prisma_migrations_by_pk: Maybe<_Prisma_Migrations>;
  /** update multiples rows of table: "_prisma_migrations" */
  update__prisma_migrations_many: Maybe<Array<Maybe<_Prisma_Migrations_Mutation_Response>>>;
  /** update data of the table: "cart" */
  update_cart: Maybe<Cart_Mutation_Response>;
  /** update single row of the table: "cart" */
  update_cart_by_pk: Maybe<Cart>;
  /** update multiples rows of table: "cart" */
  update_cart_many: Maybe<Array<Maybe<Cart_Mutation_Response>>>;
  /** update data of the table: "inventory" */
  update_inventory: Maybe<Inventory_Mutation_Response>;
  /** update single row of the table: "inventory" */
  update_inventory_by_pk: Maybe<Inventory>;
  /** update multiples rows of table: "inventory" */
  update_inventory_many: Maybe<Array<Maybe<Inventory_Mutation_Response>>>;
  /** update data of the table: "order" */
  update_order: Maybe<Order_Mutation_Response>;
  /** update single row of the table: "order" */
  update_order_by_pk: Maybe<Order>;
  /** update multiples rows of table: "order" */
  update_order_many: Maybe<Array<Maybe<Order_Mutation_Response>>>;
  /** update data of the table: "product" */
  update_product: Maybe<Product_Mutation_Response>;
  /** update single row of the table: "product" */
  update_product_by_pk: Maybe<Product>;
  /** update multiples rows of table: "product" */
  update_product_many: Maybe<Array<Maybe<Product_Mutation_Response>>>;
  /** update data of the table: "store" */
  update_store: Maybe<Store_Mutation_Response>;
  /** update single row of the table: "store" */
  update_store_by_pk: Maybe<Store>;
  /** update multiples rows of table: "store" */
  update_store_many: Maybe<Array<Maybe<Store_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete__Prisma_MigrationsArgs = {
  where: _Prisma_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Prisma_Migrations_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CartArgs = {
  where: Cart_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cart_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_InventoryArgs = {
  where: Inventory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Inventory_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_OrderArgs = {
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Order_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_StoreArgs = {
  where: Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Store_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert__Prisma_MigrationsArgs = {
  objects: Array<_Prisma_Migrations_Insert_Input>;
  on_conflict: InputMaybe<_Prisma_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Prisma_Migrations_OneArgs = {
  object: _Prisma_Migrations_Insert_Input;
  on_conflict: InputMaybe<_Prisma_Migrations_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CartArgs = {
  objects: Array<Cart_Insert_Input>;
  on_conflict: InputMaybe<Cart_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cart_OneArgs = {
  object: Cart_Insert_Input;
  on_conflict: InputMaybe<Cart_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InventoryArgs = {
  objects: Array<Inventory_Insert_Input>;
  on_conflict: InputMaybe<Inventory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Inventory_OneArgs = {
  object: Inventory_Insert_Input;
  on_conflict: InputMaybe<Inventory_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
  objects: Array<Order_Insert_Input>;
  on_conflict: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
  object: Order_Insert_Input;
  on_conflict: InputMaybe<Order_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>;
  on_conflict: InputMaybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input;
  on_conflict: InputMaybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StoreArgs = {
  objects: Array<Store_Insert_Input>;
  on_conflict: InputMaybe<Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Store_OneArgs = {
  object: Store_Insert_Input;
  on_conflict: InputMaybe<Store_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate__Prisma_MigrationsArgs = {
  _inc: InputMaybe<_Prisma_Migrations_Inc_Input>;
  _set: InputMaybe<_Prisma_Migrations_Set_Input>;
  where: _Prisma_Migrations_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Prisma_Migrations_By_PkArgs = {
  _inc: InputMaybe<_Prisma_Migrations_Inc_Input>;
  _set: InputMaybe<_Prisma_Migrations_Set_Input>;
  pk_columns: _Prisma_Migrations_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Prisma_Migrations_ManyArgs = {
  updates: Array<_Prisma_Migrations_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CartArgs = {
  _inc: InputMaybe<Cart_Inc_Input>;
  _set: InputMaybe<Cart_Set_Input>;
  where: Cart_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cart_By_PkArgs = {
  _inc: InputMaybe<Cart_Inc_Input>;
  _set: InputMaybe<Cart_Set_Input>;
  pk_columns: Cart_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cart_ManyArgs = {
  updates: Array<Cart_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_InventoryArgs = {
  _inc: InputMaybe<Inventory_Inc_Input>;
  _set: InputMaybe<Inventory_Set_Input>;
  where: Inventory_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_By_PkArgs = {
  _inc: InputMaybe<Inventory_Inc_Input>;
  _set: InputMaybe<Inventory_Set_Input>;
  pk_columns: Inventory_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Inventory_ManyArgs = {
  updates: Array<Inventory_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrderArgs = {
  _inc: InputMaybe<Order_Inc_Input>;
  _set: InputMaybe<Order_Set_Input>;
  where: Order_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Order_By_PkArgs = {
  _inc: InputMaybe<Order_Inc_Input>;
  _set: InputMaybe<Order_Set_Input>;
  pk_columns: Order_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Order_ManyArgs = {
  updates: Array<Order_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _inc: InputMaybe<Product_Inc_Input>;
  _set: InputMaybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _inc: InputMaybe<Product_Inc_Input>;
  _set: InputMaybe<Product_Set_Input>;
  pk_columns: Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Product_ManyArgs = {
  updates: Array<Product_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StoreArgs = {
  _inc: InputMaybe<Store_Inc_Input>;
  _set: InputMaybe<Store_Set_Input>;
  where: Store_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Store_By_PkArgs = {
  _inc: InputMaybe<Store_Inc_Input>;
  _set: InputMaybe<Store_Set_Input>;
  pk_columns: Store_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Store_ManyArgs = {
  updates: Array<Store_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc: InputMaybe<User_Inc_Input>;
  _set: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc: InputMaybe<User_Inc_Input>;
  _set: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** columns and relationships of "order" */
export type Order = {
  __typename?: 'order';
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  totalPrice: Scalars['float8'];
  updatedAt: Scalars['timestamp'];
  userId: Scalars['Int'];
};

/** aggregated selection of "order" */
export type Order_Aggregate = {
  __typename?: 'order_aggregate';
  aggregate: Maybe<Order_Aggregate_Fields>;
  nodes: Array<Order>;
};

/** aggregate fields of "order" */
export type Order_Aggregate_Fields = {
  __typename?: 'order_aggregate_fields';
  avg: Maybe<Order_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Order_Max_Fields>;
  min: Maybe<Order_Min_Fields>;
  stddev: Maybe<Order_Stddev_Fields>;
  stddev_pop: Maybe<Order_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Order_Stddev_Samp_Fields>;
  sum: Maybe<Order_Sum_Fields>;
  var_pop: Maybe<Order_Var_Pop_Fields>;
  var_samp: Maybe<Order_Var_Samp_Fields>;
  variance: Maybe<Order_Variance_Fields>;
};


/** aggregate fields of "order" */
export type Order_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Order_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
  __typename?: 'order_avg_fields';
  id: Maybe<Scalars['Float']>;
  totalPrice: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
  _and?: InputMaybe<Array<Order_Bool_Exp>>;
  _not?: InputMaybe<Order_Bool_Exp>;
  _or?: InputMaybe<Array<Order_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  totalPrice?: InputMaybe<Float8_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** unique or primary key constraints on table "order" */
export enum Order_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrderPkey = 'order_pkey'
}

/** input type for incrementing numeric columns in table "order" */
export type Order_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  totalPrice?: InputMaybe<Scalars['float8']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "order" */
export type Order_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  totalPrice?: InputMaybe<Scalars['float8']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
  __typename?: 'order_max_fields';
  createdAt: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['Int']>;
  totalPrice: Maybe<Scalars['float8']>;
  updatedAt: Maybe<Scalars['timestamp']>;
  userId: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
  __typename?: 'order_min_fields';
  createdAt: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['Int']>;
  totalPrice: Maybe<Scalars['float8']>;
  updatedAt: Maybe<Scalars['timestamp']>;
  userId: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "order" */
export type Order_Mutation_Response = {
  __typename?: 'order_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Order>;
};

/** on_conflict condition type for table "order" */
export type Order_On_Conflict = {
  constraint: Order_Constraint;
  update_columns?: Array<Order_Update_Column>;
  where?: InputMaybe<Order_Bool_Exp>;
};

/** Ordering options when selecting data from "order". */
export type Order_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  totalPrice?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: order */
export type Order_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "order" */
export enum Order_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  TotalPrice = 'totalPrice',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "order" */
export type Order_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  totalPrice?: InputMaybe<Scalars['float8']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
  __typename?: 'order_stddev_fields';
  id: Maybe<Scalars['Float']>;
  totalPrice: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
  __typename?: 'order_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
  totalPrice: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
  __typename?: 'order_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
  totalPrice: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "order" */
export type Order_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Order_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  totalPrice?: InputMaybe<Scalars['float8']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
  userId?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
  __typename?: 'order_sum_fields';
  id: Maybe<Scalars['Int']>;
  totalPrice: Maybe<Scalars['float8']>;
  userId: Maybe<Scalars['Int']>;
};

/** update columns of table "order" */
export enum Order_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  TotalPrice = 'totalPrice',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type Order_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Order_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Order_Set_Input>;
  /** filter the rows which have to be updated */
  where: Order_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
  __typename?: 'order_var_pop_fields';
  id: Maybe<Scalars['Float']>;
  totalPrice: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
  __typename?: 'order_var_samp_fields';
  id: Maybe<Scalars['Float']>;
  totalPrice: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
  __typename?: 'order_variance_fields';
  id: Maybe<Scalars['Float']>;
  totalPrice: Maybe<Scalars['Float']>;
  userId: Maybe<Scalars['Float']>;
};

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product';
  cartId: Maybe<Scalars['Int']>;
  createdAt: Scalars['timestamp'];
  description: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image: Maybe<Scalars['String']>;
  name: Scalars['String'];
  orderId: Maybe<Scalars['Int']>;
  price: Scalars['float8'];
  storeId: Scalars['Int'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
  __typename?: 'product_aggregate';
  aggregate: Maybe<Product_Aggregate_Fields>;
  nodes: Array<Product>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  __typename?: 'product_aggregate_fields';
  avg: Maybe<Product_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Product_Max_Fields>;
  min: Maybe<Product_Min_Fields>;
  stddev: Maybe<Product_Stddev_Fields>;
  stddev_pop: Maybe<Product_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Product_Stddev_Samp_Fields>;
  sum: Maybe<Product_Sum_Fields>;
  var_pop: Maybe<Product_Var_Pop_Fields>;
  var_samp: Maybe<Product_Var_Samp_Fields>;
  variance: Maybe<Product_Variance_Fields>;
};


/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Product_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Product_Avg_Fields = {
  __typename?: 'product_avg_fields';
  cartId: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  orderId: Maybe<Scalars['Float']>;
  price: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Bool_Exp>>;
  _not?: InputMaybe<Product_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Bool_Exp>>;
  cartId?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orderId?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Float8_Comparison_Exp>;
  storeId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductPkey = 'product_pkey'
}

/** input type for incrementing numeric columns in table "product" */
export type Product_Inc_Input = {
  cartId?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  orderId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  storeId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  cartId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  storeId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  cartId: Maybe<Scalars['Int']>;
  createdAt: Maybe<Scalars['timestamp']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  orderId: Maybe<Scalars['Int']>;
  price: Maybe<Scalars['float8']>;
  storeId: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  cartId: Maybe<Scalars['Int']>;
  createdAt: Maybe<Scalars['timestamp']>;
  description: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  image: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  orderId: Maybe<Scalars['Int']>;
  price: Maybe<Scalars['float8']>;
  storeId: Maybe<Scalars['Int']>;
  updatedAt: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product>;
};

/** on_conflict condition type for table "product" */
export type Product_On_Conflict = {
  constraint: Product_Constraint;
  update_columns?: Array<Product_Update_Column>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** Ordering options when selecting data from "product". */
export type Product_Order_By = {
  cartId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orderId?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  storeId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: product */
export type Product_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  CartId = 'cartId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  Price = 'price',
  /** column name */
  StoreId = 'storeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  cartId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  storeId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: 'product_stddev_fields';
  cartId: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  orderId: Maybe<Scalars['Float']>;
  price: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: 'product_stddev_pop_fields';
  cartId: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  orderId: Maybe<Scalars['Float']>;
  price: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: 'product_stddev_samp_fields';
  cartId: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  orderId: Maybe<Scalars['Float']>;
  price: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "product" */
export type Product_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Product_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Stream_Cursor_Value_Input = {
  cartId?: InputMaybe<Scalars['Int']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  orderId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  storeId?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields';
  cartId: Maybe<Scalars['Int']>;
  id: Maybe<Scalars['Int']>;
  orderId: Maybe<Scalars['Int']>;
  price: Maybe<Scalars['float8']>;
  storeId: Maybe<Scalars['Int']>;
};

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  CartId = 'cartId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  OrderId = 'orderId',
  /** column name */
  Price = 'price',
  /** column name */
  StoreId = 'storeId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Product_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Product_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Product_Set_Input>;
  /** filter the rows which have to be updated */
  where: Product_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
  __typename?: 'product_var_pop_fields';
  cartId: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  orderId: Maybe<Scalars['Float']>;
  price: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: 'product_var_samp_fields';
  cartId: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  orderId: Maybe<Scalars['Float']>;
  price: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: 'product_variance_fields';
  cartId: Maybe<Scalars['Float']>;
  id: Maybe<Scalars['Float']>;
  orderId: Maybe<Scalars['Float']>;
  price: Maybe<Scalars['Float']>;
  storeId: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "_prisma_migrations" */
  _prisma_migrations: Array<_Prisma_Migrations>;
  /** fetch aggregated fields from the table: "_prisma_migrations" */
  _prisma_migrations_aggregate: _Prisma_Migrations_Aggregate;
  /** fetch data from the table: "_prisma_migrations" using primary key columns */
  _prisma_migrations_by_pk: Maybe<_Prisma_Migrations>;
  /** fetch data from the table: "cart" */
  cart: Array<Cart>;
  /** fetch aggregated fields from the table: "cart" */
  cart_aggregate: Cart_Aggregate;
  /** fetch data from the table: "cart" using primary key columns */
  cart_by_pk: Maybe<Cart>;
  /** fetch data from the table: "inventory" */
  inventory: Array<Inventory>;
  /** fetch aggregated fields from the table: "inventory" */
  inventory_aggregate: Inventory_Aggregate;
  /** fetch data from the table: "inventory" using primary key columns */
  inventory_by_pk: Maybe<Inventory>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk: Maybe<Order>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk: Maybe<Product>;
  /** fetch data from the table: "store" */
  store: Array<Store>;
  /** fetch aggregated fields from the table: "store" */
  store_aggregate: Store_Aggregate;
  /** fetch data from the table: "store" using primary key columns */
  store_by_pk: Maybe<Store>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk: Maybe<User>;
};


export type Query_Root_Prisma_MigrationsArgs = {
  distinct_on: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};


export type Query_Root_Prisma_Migrations_AggregateArgs = {
  distinct_on: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};


export type Query_Root_Prisma_Migrations_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootCartArgs = {
  distinct_on: InputMaybe<Array<Cart_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Cart_Order_By>>;
  where: InputMaybe<Cart_Bool_Exp>;
};


export type Query_RootCart_AggregateArgs = {
  distinct_on: InputMaybe<Array<Cart_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Cart_Order_By>>;
  where: InputMaybe<Cart_Bool_Exp>;
};


export type Query_RootCart_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInventoryArgs = {
  distinct_on: InputMaybe<Array<Inventory_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Inventory_Order_By>>;
  where: InputMaybe<Inventory_Bool_Exp>;
};


export type Query_RootInventory_AggregateArgs = {
  distinct_on: InputMaybe<Array<Inventory_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Inventory_Order_By>>;
  where: InputMaybe<Inventory_Bool_Exp>;
};


export type Query_RootInventory_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootOrderArgs = {
  distinct_on: InputMaybe<Array<Order_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Order_Order_By>>;
  where: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_AggregateArgs = {
  distinct_on: InputMaybe<Array<Order_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Order_Order_By>>;
  where: InputMaybe<Order_Bool_Exp>;
};


export type Query_RootOrder_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProductArgs = {
  distinct_on: InputMaybe<Array<Product_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Product_Order_By>>;
  where: InputMaybe<Product_Bool_Exp>;
};


export type Query_RootProduct_AggregateArgs = {
  distinct_on: InputMaybe<Array<Product_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Product_Order_By>>;
  where: InputMaybe<Product_Bool_Exp>;
};


export type Query_RootProduct_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStoreArgs = {
  distinct_on: InputMaybe<Array<Store_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Store_Order_By>>;
  where: InputMaybe<Store_Bool_Exp>;
};


export type Query_RootStore_AggregateArgs = {
  distinct_on: InputMaybe<Array<Store_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Store_Order_By>>;
  where: InputMaybe<Store_Bool_Exp>;
};


export type Query_RootStore_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUserArgs = {
  distinct_on: InputMaybe<Array<User_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Order_By>>;
  where: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on: InputMaybe<Array<User_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Order_By>>;
  where: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "store" */
export type Store = {
  __typename?: 'store';
  address: Scalars['String'];
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "store" */
export type Store_Aggregate = {
  __typename?: 'store_aggregate';
  aggregate: Maybe<Store_Aggregate_Fields>;
  nodes: Array<Store>;
};

/** aggregate fields of "store" */
export type Store_Aggregate_Fields = {
  __typename?: 'store_aggregate_fields';
  avg: Maybe<Store_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<Store_Max_Fields>;
  min: Maybe<Store_Min_Fields>;
  stddev: Maybe<Store_Stddev_Fields>;
  stddev_pop: Maybe<Store_Stddev_Pop_Fields>;
  stddev_samp: Maybe<Store_Stddev_Samp_Fields>;
  sum: Maybe<Store_Sum_Fields>;
  var_pop: Maybe<Store_Var_Pop_Fields>;
  var_samp: Maybe<Store_Var_Samp_Fields>;
  variance: Maybe<Store_Variance_Fields>;
};


/** aggregate fields of "store" */
export type Store_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<Store_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Store_Avg_Fields = {
  __typename?: 'store_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "store". All fields are combined with a logical 'AND'. */
export type Store_Bool_Exp = {
  _and?: InputMaybe<Array<Store_Bool_Exp>>;
  _not?: InputMaybe<Store_Bool_Exp>;
  _or?: InputMaybe<Array<Store_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "store" */
export enum Store_Constraint {
  /** unique or primary key constraint on columns "id" */
  StorePkey = 'store_pkey'
}

/** input type for incrementing numeric columns in table "store" */
export type Store_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "store" */
export type Store_Insert_Input = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type Store_Max_Fields = {
  __typename?: 'store_max_fields';
  address: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type Store_Min_Fields = {
  __typename?: 'store_min_fields';
  address: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['timestamp']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "store" */
export type Store_Mutation_Response = {
  __typename?: 'store_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Store>;
};

/** on_conflict condition type for table "store" */
export type Store_On_Conflict = {
  constraint: Store_Constraint;
  update_columns?: Array<Store_Update_Column>;
  where?: InputMaybe<Store_Bool_Exp>;
};

/** Ordering options when selecting data from "store". */
export type Store_Order_By = {
  address?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: store */
export type Store_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "store" */
export enum Store_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "store" */
export type Store_Set_Input = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Store_Stddev_Fields = {
  __typename?: 'store_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Store_Stddev_Pop_Fields = {
  __typename?: 'store_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Store_Stddev_Samp_Fields = {
  __typename?: 'store_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "store" */
export type Store_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Store_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Store_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type Store_Sum_Fields = {
  __typename?: 'store_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "store" */
export enum Store_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Store_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Store_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Store_Set_Input>;
  /** filter the rows which have to be updated */
  where: Store_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Store_Var_Pop_Fields = {
  __typename?: 'store_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Store_Var_Samp_Fields = {
  __typename?: 'store_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Store_Variance_Fields = {
  __typename?: 'store_variance_fields';
  id: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "_prisma_migrations" */
  _prisma_migrations: Array<_Prisma_Migrations>;
  /** fetch aggregated fields from the table: "_prisma_migrations" */
  _prisma_migrations_aggregate: _Prisma_Migrations_Aggregate;
  /** fetch data from the table: "_prisma_migrations" using primary key columns */
  _prisma_migrations_by_pk: Maybe<_Prisma_Migrations>;
  /** fetch data from the table in a streaming manner: "_prisma_migrations" */
  _prisma_migrations_stream: Array<_Prisma_Migrations>;
  /** fetch data from the table: "cart" */
  cart: Array<Cart>;
  /** fetch aggregated fields from the table: "cart" */
  cart_aggregate: Cart_Aggregate;
  /** fetch data from the table: "cart" using primary key columns */
  cart_by_pk: Maybe<Cart>;
  /** fetch data from the table in a streaming manner: "cart" */
  cart_stream: Array<Cart>;
  /** fetch data from the table: "inventory" */
  inventory: Array<Inventory>;
  /** fetch aggregated fields from the table: "inventory" */
  inventory_aggregate: Inventory_Aggregate;
  /** fetch data from the table: "inventory" using primary key columns */
  inventory_by_pk: Maybe<Inventory>;
  /** fetch data from the table in a streaming manner: "inventory" */
  inventory_stream: Array<Inventory>;
  /** fetch data from the table: "order" */
  order: Array<Order>;
  /** fetch aggregated fields from the table: "order" */
  order_aggregate: Order_Aggregate;
  /** fetch data from the table: "order" using primary key columns */
  order_by_pk: Maybe<Order>;
  /** fetch data from the table in a streaming manner: "order" */
  order_stream: Array<Order>;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch aggregated fields from the table: "product" */
  product_aggregate: Product_Aggregate;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk: Maybe<Product>;
  /** fetch data from the table in a streaming manner: "product" */
  product_stream: Array<Product>;
  /** fetch data from the table: "store" */
  store: Array<Store>;
  /** fetch aggregated fields from the table: "store" */
  store_aggregate: Store_Aggregate;
  /** fetch data from the table: "store" using primary key columns */
  store_by_pk: Maybe<Store>;
  /** fetch data from the table in a streaming manner: "store" */
  store_stream: Array<Store>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type Subscription_Root_Prisma_MigrationsArgs = {
  distinct_on: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};


export type Subscription_Root_Prisma_Migrations_AggregateArgs = {
  distinct_on: InputMaybe<Array<_Prisma_Migrations_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<_Prisma_Migrations_Order_By>>;
  where: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};


export type Subscription_Root_Prisma_Migrations_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_Root_Prisma_Migrations_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<_Prisma_Migrations_Stream_Cursor_Input>>;
  where: InputMaybe<_Prisma_Migrations_Bool_Exp>;
};


export type Subscription_RootCartArgs = {
  distinct_on: InputMaybe<Array<Cart_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Cart_Order_By>>;
  where: InputMaybe<Cart_Bool_Exp>;
};


export type Subscription_RootCart_AggregateArgs = {
  distinct_on: InputMaybe<Array<Cart_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Cart_Order_By>>;
  where: InputMaybe<Cart_Bool_Exp>;
};


export type Subscription_RootCart_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCart_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Cart_Stream_Cursor_Input>>;
  where: InputMaybe<Cart_Bool_Exp>;
};


export type Subscription_RootInventoryArgs = {
  distinct_on: InputMaybe<Array<Inventory_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Inventory_Order_By>>;
  where: InputMaybe<Inventory_Bool_Exp>;
};


export type Subscription_RootInventory_AggregateArgs = {
  distinct_on: InputMaybe<Array<Inventory_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Inventory_Order_By>>;
  where: InputMaybe<Inventory_Bool_Exp>;
};


export type Subscription_RootInventory_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInventory_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Inventory_Stream_Cursor_Input>>;
  where: InputMaybe<Inventory_Bool_Exp>;
};


export type Subscription_RootOrderArgs = {
  distinct_on: InputMaybe<Array<Order_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Order_Order_By>>;
  where: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_AggregateArgs = {
  distinct_on: InputMaybe<Array<Order_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Order_Order_By>>;
  where: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootOrder_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootOrder_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Order_Stream_Cursor_Input>>;
  where: InputMaybe<Order_Bool_Exp>;
};


export type Subscription_RootProductArgs = {
  distinct_on: InputMaybe<Array<Product_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Product_Order_By>>;
  where: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_AggregateArgs = {
  distinct_on: InputMaybe<Array<Product_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Product_Order_By>>;
  where: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProduct_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Product_Stream_Cursor_Input>>;
  where: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootStoreArgs = {
  distinct_on: InputMaybe<Array<Store_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Store_Order_By>>;
  where: InputMaybe<Store_Bool_Exp>;
};


export type Subscription_RootStore_AggregateArgs = {
  distinct_on: InputMaybe<Array<Store_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<Store_Order_By>>;
  where: InputMaybe<Store_Bool_Exp>;
};


export type Subscription_RootStore_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStore_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Store_Stream_Cursor_Input>>;
  where: InputMaybe<Store_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on: InputMaybe<Array<User_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Order_By>>;
  where: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on: InputMaybe<Array<User_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<Array<User_Order_By>>;
  where: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where: InputMaybe<User_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  createdAt: Scalars['timestamp'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Maybe<Scalars['String']>;
  password: Scalars['String'];
  role: Scalars['Role'];
  surname: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max: Maybe<User_Max_Fields>;
  min: Maybe<User_Min_Fields>;
  stddev: Maybe<User_Stddev_Fields>;
  stddev_pop: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp: Maybe<User_Stddev_Samp_Fields>;
  sum: Maybe<User_Sum_Fields>;
  var_pop: Maybe<User_Var_Pop_Fields>;
  var_samp: Maybe<User_Var_Samp_Fields>;
  variance: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<Array<User_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<Role_Comparison_Exp>;
  surname?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'user_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  surname?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  createdAt: Maybe<Scalars['timestamp']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  role: Maybe<Scalars['Role']>;
  surname: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  createdAt: Maybe<Scalars['timestamp']>;
  email: Maybe<Scalars['String']>;
  id: Maybe<Scalars['Int']>;
  name: Maybe<Scalars['String']>;
  password: Maybe<Scalars['String']>;
  role: Maybe<Scalars['Role']>;
  surname: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  surname?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  surname?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Role = 'role',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type User_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id: Maybe<Scalars['Float']>;
};



export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {

  };
}
export type Sdk = ReturnType<typeof getSdk>;