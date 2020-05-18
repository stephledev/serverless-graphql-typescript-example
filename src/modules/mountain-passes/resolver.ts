import { MountainPass } from './model'
import mountainPassesRepository from './repository'
import municipalityRepository from '../municipalities/repository'

export default {
  Query: {
    mountainPasses: () => mountainPassesRepository.getAll(),
  },
  MountainPass: {
    from: async (mountainPass: MountainPass) => municipalityRepository.getByName(mountainPass.from),
    to: async (mountainPass: MountainPass) => municipalityRepository.getByName(mountainPass.to),
  },
}
