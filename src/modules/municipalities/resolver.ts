import municipalityRepository from './repository'

export default {
  Query: {
    municipalities: () => municipalityRepository.getAll(),
  },
}
