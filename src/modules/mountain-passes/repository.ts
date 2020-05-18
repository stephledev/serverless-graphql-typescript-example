import { MountainPass } from './model'
import fetch from '../../providers/crudCrud'

const RESOURCE = process.env.MOUNTAIN_PASSES_RESOURCE as string

const getAll = (): Promise<MountainPass[]> => fetch(RESOURCE, { method: 'GET' }).then(response => response.json())

export default {
  getAll,
}
