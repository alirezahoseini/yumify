export type IMeal = {
  idMeal: string
  strMeal: string
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags?: string
  strYoutube?: string
  [key: string]: string | undefined
}
  
export type ICategory = {
  idCategory: string
  strCategory: string
  strCategoryThumb: string
  strCategoryDescription: string
}
  
export type IArea = {
  strArea: string
}
  
export type IIngredient = {
  idIngredient: string
  strIngredient: string
  strDescription?: string
}
  

// Response Types 
export type IMealResponse = {
  meals: IMeal[] | null
}
  
export type ICategoryResponse = {
  categories: ICategory[]
}
  
export type IAreaResponse = {
  meals: IArea[]
}
  
export type IIngredientResponse = {
  meals: IIngredient[]
}