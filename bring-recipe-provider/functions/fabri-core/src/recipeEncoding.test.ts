import { decode, encode } from './recipeEncoding'
import { Recipe } from './types'

describe('recipeEncoding and decode', () => {
  it('encoding and decoding should come to the same results', async () => {
    // Preparation
    const recipeToEncode: Recipe = {
      name: 'Humus mit Erd=beeren',
      ingredients: [
        {
          name: 'Kicher=erbsen',
          quantity: '200g'
        },
        {
          name: 'Öl',
          quantity: '70ml'
        },
        {
          name: 'Erd=bee=ren',
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
