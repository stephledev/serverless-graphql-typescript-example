/* eslint-disable spaced-comment */
import { makeExecutableSchema } from 'graphql-tools'
/// <reference path="./gql.d.ts" />
import rootTypeDef from './rootTypeDef.gql'
/// <reference path="./gql.d.ts" />
import mountainPassesTypeDef from './modules/mountain-passes/typeDef.gql'
/// <reference path="./gql.d.ts" />
import municipaltiesTypeDef from './modules/municipalities/typeDef.gql'
import mountainPassesResolver from './modules/mountain-passes/resolver'
import municipalitiesResolver from './modules/municipalities/resolver'

const schema = makeExecutableSchema({
  typeDefs: [rootTypeDef, mountainPassesTypeDef, municipaltiesTypeDef],
  resolvers: [mountainPassesResolver, municipalitiesResolver],
})

export default schema
