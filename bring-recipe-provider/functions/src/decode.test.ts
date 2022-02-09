import decode from './decode'

describe('encode', () => {
  it('should be able to encode a recipe into a base64 String', async () => {
    // Preparation
    const toDecode = 'q1bKU7JS8ijNLS1WyM0sUXAtSklKTS1KzVPSUcpUsqpW8s5MzgDyi5KKgWJWSkYGBulAqcPTcoAcc4PcHCAHocdKyVipthYA'
    // Execution
    const result = await decode(toDecode)

    // Assertion
    expect(result).toStrictEqual({
      n: 'Humus mit Erdbeeren',
      i: {
        'Kichererbsen': '200g',
        'Öl': '70ml',
        'Erdbeeren': '3',
      },
    })
  })
})
