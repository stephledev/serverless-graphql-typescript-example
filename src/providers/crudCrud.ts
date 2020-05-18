import nodeFetch, { RequestInit } from 'node-fetch'

const ENDPOINT_IDENTIFIER = process.env.CRUD_CRUD_ENDPOINT_IDENTIFIER

const fetch = (resource: string, init: RequestInit) =>
  nodeFetch(`https://crudcrud.com/api/${ENDPOINT_IDENTIFIER}/${resource}`, init)

export default fetch
