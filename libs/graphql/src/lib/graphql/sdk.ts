import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch((process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT_URL ?? "http://localhost:9090/v1/graphql") as string, {
    method: "POST",
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Color: any;
  Size: any;
  float8: any;
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

/** order by max() on columns of table "Image" */
export type IImage_Max_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
  url?: InputMaybe<IOrder_By>;
};

/** order by min() on columns of table "Image" */
export type IImage_Min_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
  url?: InputMaybe<IOrder_By>;
};

/** Ordering options when selecting data from "Image". */
export type IImage_Order_By = {
  Product?: InputMaybe<IProduct_Order_By>;
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
  url?: InputMaybe<IOrder_By>;
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

/** order by stddev() on columns of table "Image" */
export type IImage_Stddev_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
};

/** order by stddev_pop() on columns of table "Image" */
export type IImage_Stddev_Pop_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
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

/** order by sum() on columns of table "Image" */
export type IImage_Sum_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
};

/** order by var_pop() on columns of table "Image" */
export type IImage_Var_Pop_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
};

/** order by var_samp() on columns of table "Image" */
export type IImage_Var_Samp_Order_By = {
  id?: InputMaybe<IOrder_By>;
  productId?: InputMaybe<IOrder_By>;
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
  /** An object relationship */
  Product?: Maybe<IProduct>;
  /** An array relationship */
  Products: Array<IProduct>;
  color?: Maybe<Scalars['Color']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  parentId?: Maybe<Scalars['Int']>;
  price: Scalars['float8'];
  size?: Maybe<Scalars['Size']>;
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
export type IProductProductsArgs = {
  distinct_on?: InputMaybe<Array<IProduct_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<IProduct_Order_By>>;
  where?: InputMaybe<IProduct_Bool_Exp>;
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

/** order by avg() on columns of table "Product" */
export type IProduct_Avg_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** Boolean expression to filter rows from the table "Product". All fields are combined with a logical 'AND'. */
export type IProduct_Bool_Exp = {
  Images?: InputMaybe<IImage_Bool_Exp>;
  Product?: InputMaybe<IProduct_Bool_Exp>;
  Products?: InputMaybe<IProduct_Bool_Exp>;
  _and?: InputMaybe<Array<IProduct_Bool_Exp>>;
  _not?: InputMaybe<IProduct_Bool_Exp>;
  _or?: InputMaybe<Array<IProduct_Bool_Exp>>;
  color?: InputMaybe<IColor_Comparison_Exp>;
  description?: InputMaybe<IString_Comparison_Exp>;
  id?: InputMaybe<IInt_Comparison_Exp>;
  name?: InputMaybe<IString_Comparison_Exp>;
  parentId?: InputMaybe<IInt_Comparison_Exp>;
  price?: InputMaybe<IFloat8_Comparison_Exp>;
  size?: InputMaybe<ISize_Comparison_Exp>;
};

/** order by max() on columns of table "Product" */
export type IProduct_Max_Order_By = {
  color?: InputMaybe<IOrder_By>;
  description?: InputMaybe<IOrder_By>;
  id?: InputMaybe<IOrder_By>;
  name?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
  size?: InputMaybe<IOrder_By>;
};

/** order by min() on columns of table "Product" */
export type IProduct_Min_Order_By = {
  color?: InputMaybe<IOrder_By>;
  description?: InputMaybe<IOrder_By>;
  id?: InputMaybe<IOrder_By>;
  name?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
  size?: InputMaybe<IOrder_By>;
};

/** Ordering options when selecting data from "Product". */
export type IProduct_Order_By = {
  Images_aggregate?: InputMaybe<IImage_Aggregate_Order_By>;
  Product?: InputMaybe<IProduct_Order_By>;
  Products_aggregate?: InputMaybe<IProduct_Aggregate_Order_By>;
  color?: InputMaybe<IOrder_By>;
  description?: InputMaybe<IOrder_By>;
  id?: InputMaybe<IOrder_By>;
  name?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
  size?: InputMaybe<IOrder_By>;
};

/** select columns of table "Product" */
export enum IProduct_Select_Column {
  /** column name */
  Color = 'color',
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
  Size = 'size'
}

/** order by stddev() on columns of table "Product" */
export type IProduct_Stddev_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** order by stddev_pop() on columns of table "Product" */
export type IProduct_Stddev_Pop_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
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
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  size?: InputMaybe<Scalars['Size']>;
};

/** order by sum() on columns of table "Product" */
export type IProduct_Sum_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** order by var_pop() on columns of table "Product" */
export type IProduct_Var_Pop_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** order by var_samp() on columns of table "Product" */
export type IProduct_Var_Samp_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
};

/** order by variance() on columns of table "Product" */
export type IProduct_Variance_Order_By = {
  id?: InputMaybe<IOrder_By>;
  parentId?: InputMaybe<IOrder_By>;
  price?: InputMaybe<IOrder_By>;
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
  /** fetch data from the table: "Image" using primary key columns */
  Image_by_pk?: Maybe<IImage>;
  /** fetch data from the table: "Product" */
  Product: Array<IProduct>;
  /** fetch data from the table: "Product" using primary key columns */
  Product_by_pk?: Maybe<IProduct>;
};


export type IQuery_RootImageArgs = {
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


export type IQuery_RootProduct_By_PkArgs = {
  id: Scalars['Int'];
};

export type ISubscription_Root = {
  /** fetch data from the table: "Image" */
  Image: Array<IImage>;
  /** fetch data from the table: "Image" using primary key columns */
  Image_by_pk?: Maybe<IImage>;
  /** fetch data from the table in a streaming manner: "Image" */
  Image_stream: Array<IImage>;
  /** fetch data from the table: "Product" */
  Product: Array<IProduct>;
  /** fetch data from the table: "Product" using primary key columns */
  Product_by_pk?: Maybe<IProduct>;
  /** fetch data from the table in a streaming manner: "Product" */
  Product_stream: Array<IProduct>;
};


export type ISubscription_RootImageArgs = {
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


export type ISubscription_RootProduct_By_PkArgs = {
  id: Scalars['Int'];
};


export type ISubscription_RootProduct_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<IProduct_Stream_Cursor_Input>>;
  where?: InputMaybe<IProduct_Bool_Exp>;
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


export const GetProductDocument = /*#__PURE__*/ `
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
export const useGetProductQuery = <
      TData = IGetProductQuery,
      TError = Error
    >(
      variables: IGetProductQueryVariables,
      options?: UseQueryOptions<IGetProductQuery, TError, TData>
    ) =>
    useQuery<IGetProductQuery, TError, TData>(
      ['getProduct', variables],
      fetcher<IGetProductQuery, IGetProductQueryVariables>(GetProductDocument, variables),
      options
    );
useGetProductQuery.document = GetProductDocument;


useGetProductQuery.getKey = (variables: IGetProductQueryVariables) => ['getProduct', variables];
;

export const useInfiniteGetProductQuery = <
      TData = IGetProductQuery,
      TError = Error
    >(
      pageParamKey: keyof IGetProductQueryVariables,
      variables: IGetProductQueryVariables,
      options?: UseInfiniteQueryOptions<IGetProductQuery, TError, TData>
    ) =>
    useInfiniteQuery<IGetProductQuery, TError, TData>(
      ['getProduct.infinite', variables],
      (metaData) => fetcher<IGetProductQuery, IGetProductQueryVariables>(GetProductDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );


useInfiniteGetProductQuery.getKey = (variables: IGetProductQueryVariables) => ['getProduct.infinite', variables];
;

export const GetProductIDsDocument = /*#__PURE__*/ `
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
export const useGetProductIDsQuery = <
      TData = IGetProductIDsQuery,
      TError = Error
    >(
      variables?: IGetProductIDsQueryVariables,
      options?: UseQueryOptions<IGetProductIDsQuery, TError, TData>
    ) =>
    useQuery<IGetProductIDsQuery, TError, TData>(
      variables === undefined ? ['getProductIDs'] : ['getProductIDs', variables],
      fetcher<IGetProductIDsQuery, IGetProductIDsQueryVariables>(GetProductIDsDocument, variables),
      options
    );
useGetProductIDsQuery.document = GetProductIDsDocument;


useGetProductIDsQuery.getKey = (variables?: IGetProductIDsQueryVariables) => variables === undefined ? ['getProductIDs'] : ['getProductIDs', variables];
;

export const useInfiniteGetProductIDsQuery = <
      TData = IGetProductIDsQuery,
      TError = Error
    >(
      pageParamKey: keyof IGetProductIDsQueryVariables,
      variables?: IGetProductIDsQueryVariables,
      options?: UseInfiniteQueryOptions<IGetProductIDsQuery, TError, TData>
    ) =>
    useInfiniteQuery<IGetProductIDsQuery, TError, TData>(
      variables === undefined ? ['getProductIDs.infinite'] : ['getProductIDs.infinite', variables],
      (metaData) => fetcher<IGetProductIDsQuery, IGetProductIDsQueryVariables>(GetProductIDsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );


useInfiniteGetProductIDsQuery.getKey = (variables?: IGetProductIDsQueryVariables) => variables === undefined ? ['getProductIDs.infinite'] : ['getProductIDs.infinite', variables];
;

export const GetProductsDocument = /*#__PURE__*/ `
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
export const useGetProductsQuery = <
      TData = IGetProductsQuery,
      TError = Error
    >(
      variables: IGetProductsQueryVariables,
      options?: UseQueryOptions<IGetProductsQuery, TError, TData>
    ) =>
    useQuery<IGetProductsQuery, TError, TData>(
      ['getProducts', variables],
      fetcher<IGetProductsQuery, IGetProductsQueryVariables>(GetProductsDocument, variables),
      options
    );
useGetProductsQuery.document = GetProductsDocument;


useGetProductsQuery.getKey = (variables: IGetProductsQueryVariables) => ['getProducts', variables];
;

export const useInfiniteGetProductsQuery = <
      TData = IGetProductsQuery,
      TError = Error
    >(
      pageParamKey: keyof IGetProductsQueryVariables,
      variables: IGetProductsQueryVariables,
      options?: UseInfiniteQueryOptions<IGetProductsQuery, TError, TData>
    ) =>
    useInfiniteQuery<IGetProductsQuery, TError, TData>(
      ['getProducts.infinite', variables],
      (metaData) => fetcher<IGetProductsQuery, IGetProductsQueryVariables>(GetProductsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );


useInfiniteGetProductsQuery.getKey = (variables: IGetProductsQueryVariables) => ['getProducts.infinite', variables];
;
