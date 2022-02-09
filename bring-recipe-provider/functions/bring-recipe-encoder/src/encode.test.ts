import encode from './encode'
import { Recipe } from './types'

describe('encode', () => {
  it('should be able to encode a recipe into a base64 String', async () => {
    // Preparation
    const recipeToEncode: Recipe = {
      n: 'Humus mit Erdbeeren',
      i: {
        'Kichererbsen': '200g',
        'Öl': '70ml',
        'Erdbeeren': '',
        'Fette Gänse': '3',
        'Petersilie': '1Bund'
      },
    }

    // Execution
    const result = await encode(recipeToEncode)

    // Assertion
    expect(result).toStrictEqual('q1bKU7JS8ijNLS1WyM0sUXAtSklKTS1KzVPSUcpUsqpW8s5MzgDyi5KKgWJWSkYGBulAqcPTcoAcc4PcHCAHocdKCch1Sy0pSVVwP7wkrzgVKGIMFApILUktKs7MyQQJGDqV5qUo1dYCAA')
  })
})
