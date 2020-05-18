import { Municipality } from './model'
import createClient from '../../providers/dynamoDb'

const TABLE = process.env.MUNCIPALITIES_TABLE as string

const getAll = (): Promise<Municipality[]> =>
  createClient()
    .scan({
      TableName: TABLE,
    })
    .promise()
    .then(result => result.Items as Municipality[])

const getByName = (name: string): Promise<Municipality> =>
  createClient()
    .get({
      TableName: TABLE,
      Key: { name },
    })
    .promise()
    .then(result => result.Item as Municipality)

export default {
  getAll,
  getByName,
}
