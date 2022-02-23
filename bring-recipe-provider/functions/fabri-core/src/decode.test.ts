import decode from './decode'
import { Recipe } from './types'

describe('encode', () => {
  // TODO: marmer 23.02.2022 Handle escapes of '=' and maybe linebreaks?

  it('should be able to encode a recipe into a base64 String', async () => {
    // Preparation
    const toDecode = 'SHVtdXMgbWl0IEVyZGJlZXJlbg0KS2ljaGVyZXJic2VuPTIwMGcNCsOWbD03MG1sDQpFcmRiZWVyZW4NCkZldHRlIEfDpG5zZT0zDQpQZXRlcnNpbGllPTFCdW5k'
    // Execution
    const result = await decode(toDecode)

    // Assertion
    expect(result).toStrictEqual<Recipe>({
        name: 'Humus mit Erdbeeren',
        ingredients: [
          {
            name: 'Kichererbsen',
            quantity: '200g'
          },
          {
            name: 'Öl',
            quantity: '70ml'
          },
          {
            name: 'Erdbeeren',
          },
          {
            name: 'Fette Gänse',
            quantity: '3'
          },
          {
            name: 'Petersilie',
            quantity: '1Bund'
          },
        ],
      }
    )
  })
})
