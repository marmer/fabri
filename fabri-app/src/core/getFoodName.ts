const drinks = ['soda', 'coffee', 'water', 'tea', 'wine', 'beer', 'juice']
const dairy = ['milk', 'cheese', 'butter', 'cream', 'yogurt', 'quark', 'half and half']
const dessert = ['cake', 'cookies', 'chocolate', 'ice-cream', 'brownies', 'pie', 'creams']
const fruit = ['apple', 'orange', 'banana', 'grapes', 'pineapple', 'kiwi', 'lemon']
const grains = ['wheat', 'rye', 'cereal', 'toast', 'bread', 'roll', 'potato']
const meat = ['chicken', 'pork', 'salmon', 'trout', 'lamb', 'buffalo']
const vegetables = ['beans', 'lettuce', 'carrots', 'broccoli', 'cauliflower', 'peas', 'egg plan']

const ingredients = [...drinks, ...dairy, ...dessert, ...fruit, ...grains, ...meat, ...vegetables]

const adjectives = [
  'acidic',
  'bland',
  'creamy',
  'fatty',
  'fruity',
  'healthy',
  'nutty',
  'oily',
  'raw',
  'salty',
  'sharp',
  'sour',
  'spicy',
  'sweet',
  'tender',
  'tough'
]

export default () => Math.random() < 0.3
  ? `${Math.floor(Math.random() * adjectives.length)} ${Math.floor(Math.random() * ingredients.length)}`
  : `${Math.floor(Math.random() * ingredients.length)}`
