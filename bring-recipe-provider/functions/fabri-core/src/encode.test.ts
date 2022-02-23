import encode from './encode'
import { Recipe } from './types'
import decode from './decode'

describe('encode and decode', () => {
  // TODO: marmer 23.02.2022 Handle escapes
  it('encoding and decoding should come to the same results', async () => {
    // Preparation
    const recipeToEncode: Recipe = {
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
        }
      ],
    }

    // Execution
    const encoded = await encode(recipeToEncode)
    const result = await decode(encoded)

    // Assertion
    expect(encoded).not.toStrictEqual(result)
    expect(result).toStrictEqual(recipeToEncode)
  })
})
