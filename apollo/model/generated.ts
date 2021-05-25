export type Maybe<T> = T | null;
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
  Time: any;
};

export type FootPrint = {
  __typename?: 'FootPrint';
  CreatedAt: Scalars['Time'];
  UpdatedAt: Scalars['Time'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};

export type NewUser = {
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  GetUsers: Array<User>;
};


export type User = {
  __typename?: 'User';
  Uid: Scalars['String'];
  Email: Scalars['String'];
  LastName: Scalars['String'];
  FirstName: Scalars['String'];
  Gender: Scalars['String'];
  CreatedAt: Scalars['Time'];
  UpdatedAt: Scalars['Time'];
  DeletedAt: Scalars['Time'];
};
