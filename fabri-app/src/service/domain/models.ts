export interface Ingredient {
  name: string,
  quantity: string
}

export interface Recipe {
  name: string,
  ingredients: Array<Ingredient>
}
