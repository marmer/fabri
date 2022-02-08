import { Recipe } from '../lib'
import encode from './encode'

describe('encode', () => {
  it('should be able to encode a recipe into a base64 String', async () => {
    // Preparation
    const recipeToEncode: Recipe = {
      n: 'Humus mit Erdbeeren',
      i: {
        'Kichererbsen': '200g',
        'Öl': '70ml',
        'Erdbeeren': '3',
      },
    }

    // Execution
    const result = await encode(recipeToEncode)

    // Assertion
    expect(result).toStrictEqual('q1bKU7JS8ijNLS1WyM0sUXAtSklKTS1KzVPSUcpUsqpW8s5MzgDyi5KKgWJWSkYGBulAqcPTcoAcc4PcHCAHocdKyVipthYA')
  })
})
