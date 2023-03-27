import type { GraphQLClient } from 'graphql-request';
import type * as Dom from 'graphql-request/dist/types.dom';
import { print } from 'graphql'
import gql from 'graphql-tag';
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
  Color: any;
  Role: any;
  Size: any;
  float8: any;
  timestamp: any;
};

/** Boolean expression to compare columns of type "Color". All fields are combined with logical 'AND'. */
export type IColor_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Color']>;
  _gt?: InputMaybe<Scalars['Color']>;
  _gte?: InputMaybe<Scalars['Color']>;
  _in?: InputMaybe<Array<Scalars['Color']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Color']>;
  _lte?: InputMaybe<Scalars['Color']>;
  _neq?: InputMaybe<Scalars['Color']>;
  _nin?: InputMaybe<Array<Scalars['Color']>>;
};

/** columns and relationships of "Image" */
export type IImage = {
  /** An object relationship */
  Product: IProduct;
  id: Scalars['Int'];
  productId: Scalars['Int'];
  url: Scalars['String'];
};

/** aggregated selection of "Image" */
export type IImage_Aggregate = {
  aggregate?: Maybe<IImage_Aggregate_Fields>;
  nodes: Array<IImage>;
};

export type IImage_Aggregate_Bool_Exp = {
  count?: InputMaybe<IImage_Aggregate_Bool_Exp_Count>;
};

export type IImage_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<IImage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<IImage_Bool_Exp>;
  predicate: IInt_Comparison_Exp;
};

/** aggregate fields of "Image" */
export type IImage_Aggregate_Fields = {
  avg?: Maybe<IImage_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<IImage_Max_Fields>;
  min?: Maybe<IImage_Min_Fields>;
  stddev?: Maybe<IImage_Stddev_Fields>;
  stddev_pop?: Maybe<IImage_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<IImage_Stddev_Samp_Fields>;
  sum?: Maybe<IImage_Sum_Fields>;
  var_pop?: Maybe<IImage_Var_Pop_Fields>;
  var_samp?: Maybe<IImage_Var_Samp_Fields>;
  variance?: Maybe<IImage_Variance_Fields>;
};


/** aggregate fields of "Image" */
export type IImage_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<IImage_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Image" */
export type IImage_Aggregate_Order_By = {
  avg?: InputMaybe<IImage_Avg_Order_By>;
  count?: InputMaybe<IOrder_By>;
  max?: InputMaybe<IImage_Max_Order_By>;
  min?: InputMaybe<IImage_Min_Order_By>;
  stddev?: InputMaybe<IImage_Stddev_Order_By>;
  stddev_pop?: InputMaybe<IImage_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<IImage_Stddev_Samp_Order_By>;
  sum?: InputMaybe<IImage_Sum_Order_By>;
  var_pop?: InputMaybe<IImage_Var_Pop_Order_By>;
  var_samp?: InputMaybe<IImage_Var_Samp_Order_By>;
  variance?: InputMaybe<IImage_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Image" */
export type IImage_Arr_Rel_Insert_Input = {
  data: Array<IImage_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<IImage_On_Conflict>;
};

/** aggregate avg on columns */
export type IImage_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Image" */
export type IImage_Avg_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
};

/** Boolean expression to filter rows from the table "Image". All fields are combined with a logical 'AND'. */
export type IImage_Bool_Exp = {
  Product?: InputMaybe<IProduct_Bool_Exp>;
  _and?: InputMaybe<Array<IImage_Bool_Exp>>;
  _not?: InputMaybe<IImage_Bool_Exp>;
  _or?: InputMaybe<Array<IImage_Bool_Exp>>;
  id?: InputMaybe<IInt_Comparison_Exp>;
  productId?: InputMaybe<IInt_Comparison_Exp>;
  url?: InputMaybe<IString_Comparison_Exp>;
};

/** unique or primary key constraints on table "Image" */
export enum IImage_Constraint {
  /** unique or primary key constraint on columns "id" */
  ImagePkey = 'Image_pkey'
}

/** input type for incrementing numeric columns in table "Image" */
export type IImage_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "Image" */
export type IImage_Insert_Input = {
  Product?: InputMaybe<IProduct_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type IImage_Max_Fields = {
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "Image" */
export type IImage_Max_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
  url?: InputMaybe<IOrder_By>;
};

/** aggregate min on columns */
export type IImage_Min_Fields = {
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "Image" */
export type IImage_Min_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
  url?: InputMaybe<IOrder_By>;
};

/** response of any mutation on the table "Image" */
export type IImage_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<IImage>;
};

/** on_conflict condition type for table "Image" */
export type IImage_On_Conflict = {
  constraint: IImage_Constraint;
  update_columns?: Array<IImage_Update_Column>;
  where?: InputMaybe<IImage_Bool_Exp>;
};

/** Ordering options when selecting data from "Image". */
export type IImage_Order_By = {
  Product?: InputMaybe<IProduct_Order_By>;
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
  url?: InputMaybe<IOrder_By>;
};

/** primary key columns input for table: Image */
export type IImage_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Image" */
export enum IImage_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'productId',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "Image" */
export type IImage_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type IImage_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Image" */
export type IImage_Stddev_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
};

/** aggregate stddev_pop on columns */
export type IImage_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Image" */
export type IImage_Stddev_Pop_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
};

/** aggregate stddev_samp on columns */
export type IImage_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Image" */
export type IImage_Stddev_Samp_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
};

/** Streaming cursor of the table "Image" */
export type IImage_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: IImage_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<ICursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type IImage_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  productId?: InputMaybe<Scalars['Int']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type IImage_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "Image" */
export type IImage_Sum_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
};

/** update columns of table "Image" */
export enum IImage_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'productId',
  /** column name */
  Url = 'url'
}

export type IImage_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<IImage_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IImage_Set_Input>;
  /** filter the rows which have to be updated */
  where: IImage_Bool_Exp;
};

/** aggregate var_pop on columns */
export type IImage_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Image" */
export type IImage_Var_Pop_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
};

/** aggregate var_samp on columns */
export type IImage_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Image" */
export type IImage_Var_Samp_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
};

/** aggregate variance on columns */
export type IImage_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Image" */
export type IImage_Variance_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IInt_Comparison_Exp = {
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

/** columns and relationships of "Product" */
export type IProduct = {
  /** An array relationship */
  Images: Array<IImage>;
  /** An aggregate relationship */
  Images_aggregate: IImage_Aggregate;
  /** An object relationship */
  Product?: Maybe<IProduct>;
  /** An array relationship */
  Products: Array<IProduct>;
  /** An aggregate relationship */
  Products_aggregate: IProduct_Aggregate;
  color?: Maybe<Scalars['Color']>;
  createdAt: Scalars['timestamp'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  price: Scalars['float8'];
  size?: Maybe<Scalars['Size']>;
  updatedAt: Scalars['timestamp'];
};


/** columns and relationships of "Product" */
export type IProductImagesArgs = {
  distinct_on?: InputMaybe<Array<IImage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IImage_Order_By>>;
  where?: InputMaybe<IImage_Bool_Exp>;
};


/** columns and relationships of "Product" */
export type IProductImages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IImage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IImage_Order_By>>;
  where?: InputMaybe<IImage_Bool_Exp>;
};


/** columns and relationships of "Product" */
export type IProductProductsArgs = {
  distinct_on?: InputMaybe<Array<IProduct_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IProduct_Order_By>>;
  where?: InputMaybe<IProduct_Bool_Exp>;
};


/** columns and relationships of "Product" */
export type IProductProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IProduct_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IProduct_Order_By>>;
  where?: InputMaybe<IProduct_Bool_Exp>;
};

/** aggregated selection of "Product" */
export type IProduct_Aggregate = {
  aggregate?: Maybe<IProduct_Aggregate_Fields>;
  nodes: Array<IProduct>;
};

export type IProduct_Aggregate_Bool_Exp = {
  avg?: InputMaybe<IProduct_Aggregate_Bool_Exp_Avg>;
  corr?: InputMaybe<IProduct_Aggregate_Bool_Exp_Corr>;
  count?: InputMaybe<IProduct_Aggregate_Bool_Exp_Count>;
  covar_samp?: InputMaybe<IProduct_Aggregate_Bool_Exp_Covar_Samp>;
  max?: InputMaybe<IProduct_Aggregate_Bool_Exp_Max>;
  min?: InputMaybe<IProduct_Aggregate_Bool_Exp_Min>;
  stddev_samp?: InputMaybe<IProduct_Aggregate_Bool_Exp_Stddev_Samp>;
  sum?: InputMaybe<IProduct_Aggregate_Bool_Exp_Sum>;
  var_samp?: InputMaybe<IProduct_Aggregate_Bool_Exp_Var_Samp>;
};

export type IProduct_Aggregate_Bool_Exp_Avg = {
  arguments: IProduct_Select_Column_Product_Aggregate_Bool_Exp_Avg_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<IProduct_Bool_Exp>;
  predicate: IFloat8_Comparison_Exp;
};

export type IProduct_Aggregate_Bool_Exp_Corr = {
  arguments: IProduct_Aggregate_Bool_Exp_Corr_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<IProduct_Bool_Exp>;
  predicate: IFloat8_Comparison_Exp;
};

export type IProduct_Aggregate_Bool_Exp_Corr_Arguments = {
  X: IProduct_Select_Column_Product_Aggregate_Bool_Exp_Corr_Arguments_Columns;
  Y: IProduct_Select_Column_Product_Aggregate_Bool_Exp_Corr_Arguments_Columns;
};

export type IProduct_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<IProduct_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<IProduct_Bool_Exp>;
  predicate: IInt_Comparison_Exp;
};

export type IProduct_Aggregate_Bool_Exp_Covar_Samp = {
  arguments: IProduct_Aggregate_Bool_Exp_Covar_Samp_Arguments;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<IProduct_Bool_Exp>;
  predicate: IFloat8_Comparison_Exp;
};

export type IProduct_Aggregate_Bool_Exp_Covar_Samp_Arguments = {
  X: IProduct_Select_Column_Product_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
  Y: IProduct_Select_Column_Product_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns;
};

export type IProduct_Aggregate_Bool_Exp_Max = {
  arguments: IProduct_Select_Column_Product_Aggregate_Bool_Exp_Max_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<IProduct_Bool_Exp>;
  predicate: IFloat8_Comparison_Exp;
};

export type IProduct_Aggregate_Bool_Exp_Min = {
  arguments: IProduct_Select_Column_Product_Aggregate_Bool_Exp_Min_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<IProduct_Bool_Exp>;
  predicate: IFloat8_Comparison_Exp;
};

export type IProduct_Aggregate_Bool_Exp_Stddev_Samp = {
  arguments: IProduct_Select_Column_Product_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<IProduct_Bool_Exp>;
  predicate: IFloat8_Comparison_Exp;
};

export type IProduct_Aggregate_Bool_Exp_Sum = {
  arguments: IProduct_Select_Column_Product_Aggregate_Bool_Exp_Sum_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<IProduct_Bool_Exp>;
  predicate: IFloat8_Comparison_Exp;
};

export type IProduct_Aggregate_Bool_Exp_Var_Samp = {
  arguments: IProduct_Select_Column_Product_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<IProduct_Bool_Exp>;
  predicate: IFloat8_Comparison_Exp;
};

/** aggregate fields of "Product" */
export type IProduct_Aggregate_Fields = {
  avg?: Maybe<IProduct_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<IProduct_Max_Fields>;
  min?: Maybe<IProduct_Min_Fields>;
  stddev?: Maybe<IProduct_Stddev_Fields>;
  stddev_pop?: Maybe<IProduct_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<IProduct_Stddev_Samp_Fields>;
  sum?: Maybe<IProduct_Sum_Fields>;
  var_pop?: Maybe<IProduct_Var_Pop_Fields>;
  var_samp?: Maybe<IProduct_Var_Samp_Fields>;
  variance?: Maybe<IProduct_Variance_Fields>;
};


/** aggregate fields of "Product" */
export type IProduct_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<IProduct_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "Product" */
export type IProduct_Aggregate_Order_By = {
  avg?: InputMaybe<IProduct_Avg_Order_By>;
  count?: InputMaybe<IOrder_By>;
  max?: InputMaybe<IProduct_Max_Order_By>;
  min?: InputMaybe<IProduct_Min_Order_By>;
  stddev?: InputMaybe<IProduct_Stddev_Order_By>;
  stddev_pop?: InputMaybe<IProduct_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<IProduct_Stddev_Samp_Order_By>;
  sum?: InputMaybe<IProduct_Sum_Order_By>;
  var_pop?: InputMaybe<IProduct_Var_Pop_Order_By>;
  var_samp?: InputMaybe<IProduct_Var_Samp_Order_By>;
  variance?: InputMaybe<IProduct_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Product" */
export type IProduct_Arr_Rel_Insert_Input = {
  data: Array<IProduct_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<IProduct_On_Conflict>;
};

/** aggregate avg on columns */
export type IProduct_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "Product" */
export type IProduct_Avg_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** Boolean expression to filter rows from the table "Product". All fields are combined with a logical 'AND'. */
export type IProduct_Bool_Exp = {
  Images?: InputMaybe<IImage_Bool_Exp>;
  Images_aggregate?: InputMaybe<IImage_Aggregate_Bool_Exp>;
  Product?: InputMaybe<IProduct_Bool_Exp>;
  Products?: InputMaybe<IProduct_Bool_Exp>;
  Products_aggregate?: InputMaybe<IProduct_Aggregate_Bool_Exp>;
  _and?: InputMaybe<Array<IProduct_Bool_Exp>>;
  _not?: InputMaybe<IProduct_Bool_Exp>;
  _or?: InputMaybe<Array<IProduct_Bool_Exp>>;
  color?: InputMaybe<IColor_Comparison_Exp>;
  createdAt?: InputMaybe<ITimestamp_Comparison_Exp>;
  description?: InputMaybe<IString_Comparison_Exp>;
  id?: InputMaybe<IInt_Comparison_Exp>;
  name?: InputMaybe<IString_Comparison_Exp>;
  parentId?: InputMaybe<IInt_Comparison_Exp>;
  price?: InputMaybe<IFloat8_Comparison_Exp>;
  size?: InputMaybe<ISize_Comparison_Exp>;
  updatedAt?: InputMaybe<ITimestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "Product" */
export enum IProduct_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductPkey = 'Product_pkey'
}

/** input type for incrementing numeric columns in table "Product" */
export type IProduct_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  parentId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "Product" */
export type IProduct_Insert_Input = {
  Images?: InputMaybe<IImage_Arr_Rel_Insert_Input>;
  Product?: InputMaybe<IProduct_Obj_Rel_Insert_Input>;
  Products?: InputMaybe<IProduct_Arr_Rel_Insert_Input>;
  color?: InputMaybe<Scalars['Color']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  size?: InputMaybe<Scalars['Size']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type IProduct_Max_Fields = {
  color?: Maybe<Scalars['Color']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  size?: Maybe<Scalars['Size']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "Product" */
export type IProduct_Max_Order_By = {
  color?: InputMaybe<IOrder_By>;
  createdAt?: InputMaybe<IOrder_By>;
  description?: InputMaybe<IOrder_By>;
  id?: InputMaybe<IOrder_By>;
  name?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
  size?: InputMaybe<IOrder_By>;
  updatedAt?: InputMaybe<IOrder_By>;
};

/** aggregate min on columns */
export type IProduct_Min_Fields = {
  color?: Maybe<Scalars['Color']>;
  createdAt?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  size?: Maybe<Scalars['Size']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "Product" */
export type IProduct_Min_Order_By = {
  color?: InputMaybe<IOrder_By>;
  createdAt?: InputMaybe<IOrder_By>;
  description?: InputMaybe<IOrder_By>;
  id?: InputMaybe<IOrder_By>;
  name?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
  size?: InputMaybe<IOrder_By>;
  updatedAt?: InputMaybe<IOrder_By>;
};

/** response of any mutation on the table "Product" */
export type IProduct_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<IProduct>;
};

/** input type for inserting object relation for remote table "Product" */
export type IProduct_Obj_Rel_Insert_Input = {
  data: IProduct_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<IProduct_On_Conflict>;
};

/** on_conflict condition type for table "Product" */
export type IProduct_On_Conflict = {
  constraint: IProduct_Constraint;
  update_columns?: Array<IProduct_Update_Column>;
  where?: InputMaybe<IProduct_Bool_Exp>;
};

/** Ordering options when selecting data from "Product". */
export type IProduct_Order_By = {
  Images_aggregate?: InputMaybe<IImage_Aggregate_Order_By>;
  Product?: InputMaybe<IProduct_Order_By>;
  Products_aggregate?: InputMaybe<IProduct_Aggregate_Order_By>;
  color?: InputMaybe<IOrder_By>;
  createdAt?: InputMaybe<IOrder_By>;
  description?: InputMaybe<IOrder_By>;
  id?: InputMaybe<IOrder_By>;
  name?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
  size?: InputMaybe<IOrder_By>;
  updatedAt?: InputMaybe<IOrder_By>;
};

/** primary key columns input for table: Product */
export type IProduct_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "Product" */
export enum IProduct_Select_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  Price = 'price',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "Product_aggregate_bool_exp_avg_arguments_columns" columns of table "Product" */
export enum IProduct_Select_Column_Product_Aggregate_Bool_Exp_Avg_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "Product_aggregate_bool_exp_corr_arguments_columns" columns of table "Product" */
export enum IProduct_Select_Column_Product_Aggregate_Bool_Exp_Corr_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "Product_aggregate_bool_exp_covar_samp_arguments_columns" columns of table "Product" */
export enum IProduct_Select_Column_Product_Aggregate_Bool_Exp_Covar_Samp_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "Product_aggregate_bool_exp_max_arguments_columns" columns of table "Product" */
export enum IProduct_Select_Column_Product_Aggregate_Bool_Exp_Max_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "Product_aggregate_bool_exp_min_arguments_columns" columns of table "Product" */
export enum IProduct_Select_Column_Product_Aggregate_Bool_Exp_Min_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "Product_aggregate_bool_exp_stddev_samp_arguments_columns" columns of table "Product" */
export enum IProduct_Select_Column_Product_Aggregate_Bool_Exp_Stddev_Samp_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "Product_aggregate_bool_exp_sum_arguments_columns" columns of table "Product" */
export enum IProduct_Select_Column_Product_Aggregate_Bool_Exp_Sum_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** select "Product_aggregate_bool_exp_var_samp_arguments_columns" columns of table "Product" */
export enum IProduct_Select_Column_Product_Aggregate_Bool_Exp_Var_Samp_Arguments_Columns {
  /** column name */
  Price = 'price'
}

/** input type for updating data in table "Product" */
export type IProduct_Set_Input = {
  color?: InputMaybe<Scalars['Color']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  size?: InputMaybe<Scalars['Size']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type IProduct_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "Product" */
export type IProduct_Stddev_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** aggregate stddev_pop on columns */
export type IProduct_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "Product" */
export type IProduct_Stddev_Pop_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** aggregate stddev_samp on columns */
export type IProduct_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "Product" */
export type IProduct_Stddev_Samp_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** Streaming cursor of the table "Product" */
export type IProduct_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: IProduct_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<ICursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type IProduct_Stream_Cursor_Value_Input = {
  color?: InputMaybe<Scalars['Color']>;
  createdAt?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  size?: InputMaybe<Scalars['Size']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type IProduct_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
};

/** order by sum() on columns of table "Product" */
export type IProduct_Sum_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** update columns of table "Product" */
export enum IProduct_Update_Column {
  /** column name */
  Color = 'color',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  Price = 'price',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type IProduct_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<IProduct_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IProduct_Set_Input>;
  /** filter the rows which have to be updated */
  where: IProduct_Bool_Exp;
};

/** aggregate var_pop on columns */
export type IProduct_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "Product" */
export type IProduct_Var_Pop_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** aggregate var_samp on columns */
export type IProduct_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "Product" */
export type IProduct_Var_Samp_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** aggregate variance on columns */
export type IProduct_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
  parentId?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "Product" */
export type IProduct_Variance_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** Boolean expression to compare columns of type "Role". All fields are combined with logical 'AND'. */
export type IRole_Comparison_Exp = {
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

/** Boolean expression to compare columns of type "Size". All fields are combined with logical 'AND'. */
export type ISize_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Size']>;
  _gt?: InputMaybe<Scalars['Size']>;
  _gte?: InputMaybe<Scalars['Size']>;
  _in?: InputMaybe<Array<Scalars['Size']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Size']>;
  _lte?: InputMaybe<Scalars['Size']>;
  _neq?: InputMaybe<Scalars['Size']>;
  _nin?: InputMaybe<Array<Scalars['Size']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type IString_Comparison_Exp = {
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

/** columns and relationships of "User" */
export type IUser = {
  createdAt: Scalars['timestamp'];
  email: Scalars['String'];
  id: Scalars['Int'];
  lastSeen: Scalars['timestamp'];
  name?: Maybe<Scalars['String']>;
  passwordHash: Scalars['String'];
  role: Scalars['Role'];
  surname?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamp'];
};

/** aggregated selection of "User" */
export type IUser_Aggregate = {
  aggregate?: Maybe<IUser_Aggregate_Fields>;
  nodes: Array<IUser>;
};

/** aggregate fields of "User" */
export type IUser_Aggregate_Fields = {
  avg?: Maybe<IUser_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<IUser_Max_Fields>;
  min?: Maybe<IUser_Min_Fields>;
  stddev?: Maybe<IUser_Stddev_Fields>;
  stddev_pop?: Maybe<IUser_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<IUser_Stddev_Samp_Fields>;
  sum?: Maybe<IUser_Sum_Fields>;
  var_pop?: Maybe<IUser_Var_Pop_Fields>;
  var_samp?: Maybe<IUser_Var_Samp_Fields>;
  variance?: Maybe<IUser_Variance_Fields>;
};


/** aggregate fields of "User" */
export type IUser_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<IUser_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type IUser_Avg_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type IUser_Bool_Exp = {
  _and?: InputMaybe<Array<IUser_Bool_Exp>>;
  _not?: InputMaybe<IUser_Bool_Exp>;
  _or?: InputMaybe<Array<IUser_Bool_Exp>>;
  createdAt?: InputMaybe<ITimestamp_Comparison_Exp>;
  email?: InputMaybe<IString_Comparison_Exp>;
  id?: InputMaybe<IInt_Comparison_Exp>;
  lastSeen?: InputMaybe<ITimestamp_Comparison_Exp>;
  name?: InputMaybe<IString_Comparison_Exp>;
  passwordHash?: InputMaybe<IString_Comparison_Exp>;
  role?: InputMaybe<IRole_Comparison_Exp>;
  surname?: InputMaybe<IString_Comparison_Exp>;
  updatedAt?: InputMaybe<ITimestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "User" */
export enum IUser_Constraint {
  /** unique or primary key constraint on columns "email" */
  UserEmailKey = 'User_email_key',
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'User_pkey'
}

/** input type for incrementing numeric columns in table "User" */
export type IUser_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "User" */
export type IUser_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastSeen?: InputMaybe<Scalars['timestamp']>;
  name?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  surname?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate max on columns */
export type IUser_Max_Fields = {
  createdAt?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastSeen?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Role']>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type IUser_Min_Fields = {
  createdAt?: Maybe<Scalars['timestamp']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastSeen?: Maybe<Scalars['timestamp']>;
  name?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['Role']>;
  surname?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamp']>;
};

/** response of any mutation on the table "User" */
export type IUser_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<IUser>;
};

/** on_conflict condition type for table "User" */
export type IUser_On_Conflict = {
  constraint: IUser_Constraint;
  update_columns?: Array<IUser_Update_Column>;
  where?: InputMaybe<IUser_Bool_Exp>;
};

/** Ordering options when selecting data from "User". */
export type IUser_Order_By = {
  createdAt?: InputMaybe<IOrder_By>;
  email?: InputMaybe<IOrder_By>;
  id?: InputMaybe<IOrder_By>;
  lastSeen?: InputMaybe<IOrder_By>;
  name?: InputMaybe<IOrder_By>;
  passwordHash?: InputMaybe<IOrder_By>;
  role?: InputMaybe<IOrder_By>;
  surname?: InputMaybe<IOrder_By>;
  updatedAt?: InputMaybe<IOrder_By>;
};

/** primary key columns input for table: User */
export type IUser_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "User" */
export enum IUser_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Name = 'name',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  Role = 'role',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "User" */
export type IUser_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastSeen?: InputMaybe<Scalars['timestamp']>;
  name?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  surname?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type IUser_Stddev_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type IUser_Stddev_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type IUser_Stddev_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "User" */
export type IUser_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: IUser_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<ICursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type IUser_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamp']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  lastSeen?: InputMaybe<Scalars['timestamp']>;
  name?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['Role']>;
  surname?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type IUser_Sum_Fields = {
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "User" */
export enum IUser_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Name = 'name',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  Role = 'role',
  /** column name */
  Surname = 'surname',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type IUser_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<IUser_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IUser_Set_Input>;
  /** filter the rows which have to be updated */
  where: IUser_Bool_Exp;
};

/** aggregate var_pop on columns */
export type IUser_Var_Pop_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type IUser_Var_Samp_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type IUser_Variance_Fields = {
  id?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum ICursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type IFloat8_Comparison_Exp = {
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

/** mutation root */
export type IMutation_Root = {
  /** delete data from the table: "Image" */
  delete_Image?: Maybe<IImage_Mutation_Response>;
  /** delete single row from the table: "Image" */
  delete_Image_by_pk?: Maybe<IImage>;
  /** delete data from the table: "Product" */
  delete_Product?: Maybe<IProduct_Mutation_Response>;
  /** delete single row from the table: "Product" */
  delete_Product_by_pk?: Maybe<IProduct>;
  /** delete data from the table: "User" */
  delete_User?: Maybe<IUser_Mutation_Response>;
  /** delete single row from the table: "User" */
  delete_User_by_pk?: Maybe<IUser>;
  /** insert data into the table: "Image" */
  insert_Image?: Maybe<IImage_Mutation_Response>;
  /** insert a single row into the table: "Image" */
  insert_Image_one?: Maybe<IImage>;
  /** insert data into the table: "Product" */
  insert_Product?: Maybe<IProduct_Mutation_Response>;
  /** insert a single row into the table: "Product" */
  insert_Product_one?: Maybe<IProduct>;
  /** insert data into the table: "User" */
  insert_User?: Maybe<IUser_Mutation_Response>;
  /** insert a single row into the table: "User" */
  insert_User_one?: Maybe<IUser>;
  /** update data of the table: "Image" */
  update_Image?: Maybe<IImage_Mutation_Response>;
  /** update single row of the table: "Image" */
  update_Image_by_pk?: Maybe<IImage>;
  /** update multiples rows of table: "Image" */
  update_Image_many?: Maybe<Array<Maybe<IImage_Mutation_Response>>>;
  /** update data of the table: "Product" */
  update_Product?: Maybe<IProduct_Mutation_Response>;
  /** update single row of the table: "Product" */
  update_Product_by_pk?: Maybe<IProduct>;
  /** update multiples rows of table: "Product" */
  update_Product_many?: Maybe<Array<Maybe<IProduct_Mutation_Response>>>;
  /** update data of the table: "User" */
  update_User?: Maybe<IUser_Mutation_Response>;
  /** update single row of the table: "User" */
  update_User_by_pk?: Maybe<IUser>;
  /** update multiples rows of table: "User" */
  update_User_many?: Maybe<Array<Maybe<IUser_Mutation_Response>>>;
};


/** mutation root */
export type IMutation_RootDelete_ImageArgs = {
  where: IImage_Bool_Exp;
};


/** mutation root */
export type IMutation_RootDelete_Image_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type IMutation_RootDelete_ProductArgs = {
  where: IProduct_Bool_Exp;
};


/** mutation root */
export type IMutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type IMutation_RootDelete_UserArgs = {
  where: IUser_Bool_Exp;
};


/** mutation root */
export type IMutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type IMutation_RootInsert_ImageArgs = {
  objects: Array<IImage_Insert_Input>;
  on_conflict?: InputMaybe<IImage_On_Conflict>;
};


/** mutation root */
export type IMutation_RootInsert_Image_OneArgs = {
  object: IImage_Insert_Input;
  on_conflict?: InputMaybe<IImage_On_Conflict>;
};


/** mutation root */
export type IMutation_RootInsert_ProductArgs = {
  objects: Array<IProduct_Insert_Input>;
  on_conflict?: InputMaybe<IProduct_On_Conflict>;
};


/** mutation root */
export type IMutation_RootInsert_Product_OneArgs = {
  object: IProduct_Insert_Input;
  on_conflict?: InputMaybe<IProduct_On_Conflict>;
};


/** mutation root */
export type IMutation_RootInsert_UserArgs = {
  objects: Array<IUser_Insert_Input>;
  on_conflict?: InputMaybe<IUser_On_Conflict>;
};


/** mutation root */
export type IMutation_RootInsert_User_OneArgs = {
  object: IUser_Insert_Input;
  on_conflict?: InputMaybe<IUser_On_Conflict>;
};


/** mutation root */
export type IMutation_RootUpdate_ImageArgs = {
  _inc?: InputMaybe<IImage_Inc_Input>;
  _set?: InputMaybe<IImage_Set_Input>;
  where: IImage_Bool_Exp;
};


/** mutation root */
export type IMutation_RootUpdate_Image_By_PkArgs = {
  _inc?: InputMaybe<IImage_Inc_Input>;
  _set?: InputMaybe<IImage_Set_Input>;
  pk_columns: IImage_Pk_Columns_Input;
};


/** mutation root */
export type IMutation_RootUpdate_Image_ManyArgs = {
  updates: Array<IImage_Updates>;
};


/** mutation root */
export type IMutation_RootUpdate_ProductArgs = {
  _inc?: InputMaybe<IProduct_Inc_Input>;
  _set?: InputMaybe<IProduct_Set_Input>;
  where: IProduct_Bool_Exp;
};


/** mutation root */
export type IMutation_RootUpdate_Product_By_PkArgs = {
  _inc?: InputMaybe<IProduct_Inc_Input>;
  _set?: InputMaybe<IProduct_Set_Input>;
  pk_columns: IProduct_Pk_Columns_Input;
};


/** mutation root */
export type IMutation_RootUpdate_Product_ManyArgs = {
  updates: Array<IProduct_Updates>;
};


/** mutation root */
export type IMutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<IUser_Inc_Input>;
  _set?: InputMaybe<IUser_Set_Input>;
  where: IUser_Bool_Exp;
};


/** mutation root */
export type IMutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<IUser_Inc_Input>;
  _set?: InputMaybe<IUser_Set_Input>;
  pk_columns: IUser_Pk_Columns_Input;
};


/** mutation root */
export type IMutation_RootUpdate_User_ManyArgs = {
  updates: Array<IUser_Updates>;
};

/** column ordering options */
export enum IOrder_By {
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

export type IQuery_Root = {
  /** fetch data from the table: "Image" */
  Image: Array<IImage>;
  /** fetch aggregated fields from the table: "Image" */
  Image_aggregate: IImage_Aggregate;
  /** fetch data from the table: "Image" using primary key columns */
  Image_by_pk?: Maybe<IImage>;
  /** fetch data from the table: "Product" */
  Product: Array<IProduct>;
  /** fetch aggregated fields from the table: "Product" */
  Product_aggregate: IProduct_Aggregate;
  /** fetch data from the table: "Product" using primary key columns */
  Product_by_pk?: Maybe<IProduct>;
  /** fetch data from the table: "User" */
  User: Array<IUser>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: IUser_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<IUser>;
};


export type IQuery_RootImageArgs = {
  distinct_on?: InputMaybe<Array<IImage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IImage_Order_By>>;
  where?: InputMaybe<IImage_Bool_Exp>;
};


export type IQuery_RootImage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IImage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IImage_Order_By>>;
  where?: InputMaybe<IImage_Bool_Exp>;
};


export type IQuery_RootImage_By_PkArgs = {
  id: Scalars['Int'];
};


export type IQuery_RootProductArgs = {
  distinct_on?: InputMaybe<Array<IProduct_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IProduct_Order_By>>;
  where?: InputMaybe<IProduct_Bool_Exp>;
};


export type IQuery_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IProduct_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IProduct_Order_By>>;
  where?: InputMaybe<IProduct_Bool_Exp>;
};


export type IQuery_RootProduct_By_PkArgs = {
  id: Scalars['Int'];
};


export type IQuery_RootUserArgs = {
  distinct_on?: InputMaybe<Array<IUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IUser_Order_By>>;
  where?: InputMaybe<IUser_Bool_Exp>;
};


export type IQuery_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IUser_Order_By>>;
  where?: InputMaybe<IUser_Bool_Exp>;
};


export type IQuery_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};

export type ISubscription_Root = {
  /** fetch data from the table: "Image" */
  Image: Array<IImage>;
  /** fetch aggregated fields from the table: "Image" */
  Image_aggregate: IImage_Aggregate;
  /** fetch data from the table: "Image" using primary key columns */
  Image_by_pk?: Maybe<IImage>;
  /** fetch data from the table in a streaming manner: "Image" */
  Image_stream: Array<IImage>;
  /** fetch data from the table: "Product" */
  Product: Array<IProduct>;
  /** fetch aggregated fields from the table: "Product" */
  Product_aggregate: IProduct_Aggregate;
  /** fetch data from the table: "Product" using primary key columns */
  Product_by_pk?: Maybe<IProduct>;
  /** fetch data from the table in a streaming manner: "Product" */
  Product_stream: Array<IProduct>;
  /** fetch data from the table: "User" */
  User: Array<IUser>;
  /** fetch aggregated fields from the table: "User" */
  User_aggregate: IUser_Aggregate;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<IUser>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<IUser>;
};


export type ISubscription_RootImageArgs = {
  distinct_on?: InputMaybe<Array<IImage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IImage_Order_By>>;
  where?: InputMaybe<IImage_Bool_Exp>;
};


export type ISubscription_RootImage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IImage_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IImage_Order_By>>;
  where?: InputMaybe<IImage_Bool_Exp>;
};


export type ISubscription_RootImage_By_PkArgs = {
  id: Scalars['Int'];
};


export type ISubscription_RootImage_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<IImage_Stream_Cursor_Input>>;
  where?: InputMaybe<IImage_Bool_Exp>;
};


export type ISubscription_RootProductArgs = {
  distinct_on?: InputMaybe<Array<IProduct_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IProduct_Order_By>>;
  where?: InputMaybe<IProduct_Bool_Exp>;
};


export type ISubscription_RootProduct_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IProduct_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IProduct_Order_By>>;
  where?: InputMaybe<IProduct_Bool_Exp>;
};


export type ISubscription_RootProduct_By_PkArgs = {
  id: Scalars['Int'];
};


export type ISubscription_RootProduct_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<IProduct_Stream_Cursor_Input>>;
  where?: InputMaybe<IProduct_Bool_Exp>;
};


export type ISubscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<IUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IUser_Order_By>>;
  where?: InputMaybe<IUser_Bool_Exp>;
};


export type ISubscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<IUser_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IUser_Order_By>>;
  where?: InputMaybe<IUser_Bool_Exp>;
};


export type ISubscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type ISubscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<IUser_Stream_Cursor_Input>>;
  where?: InputMaybe<IUser_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type ITimestamp_Comparison_Exp = {
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

export type IGetProductQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type IGetProductQuery = { Product: Array<{ id: number, name: string, description?: string | null, color?: any | null, size?: any | null, price: any, Images: Array<{ id: number, url: string }> }> };

export type IGetProductIDsQueryVariables = Exact<{ [key: string]: never; }>;


export type IGetProductIDsQuery = { Product: Array<{ id: number, Images: Array<{ id: number, url: string }> }> };

export type IGetProductsQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type IGetProductsQuery = { Product: Array<{ id: number, name: string, description?: string | null, price: any, color?: any | null, size?: any | null, Images: Array<{ id: number, url: string }> }> };


export const GetProductDocument = /*#__PURE__*/ gql`
    query getProduct($id: Int!) {
  Product(where: {id: {_eq: $id}}) {
    id
    name
    description
    color
    size
    price
    Images {
      id
      url
    }
  }
}
    `;
export const GetProductIDsDocument = /*#__PURE__*/ gql`
    query getProductIDs {
  Product {
    id
    Images {
      id
      url
    }
  }
}
    `;
export const GetProductsDocument = /*#__PURE__*/ gql`
    query getProducts($offset: Int!, $limit: Int!) {
  Product(offset: $offset, limit: $limit) {
    id
    name
    description
    price
    color
    size
    Images {
      id
      url
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();
const GetProductDocumentString = print(GetProductDocument);
const GetProductIDsDocumentString = print(GetProductIDsDocument);
const GetProductsDocumentString = print(GetProductsDocument);
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getProduct(variables: IGetProductQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: IGetProductQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<IGetProductQuery>(GetProductDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProduct', 'query');
    },
    getProductIDs(variables?: IGetProductIDsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: IGetProductIDsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<IGetProductIDsQuery>(GetProductIDsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProductIDs', 'query');
    },
    getProducts(variables: IGetProductsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<{ data: IGetProductsQuery; extensions?: any; headers: Dom.Headers; status: number; }> {
        return withWrapper((wrappedRequestHeaders) => client.rawRequest<IGetProductsQuery>(GetProductsDocumentString, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getProducts', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;