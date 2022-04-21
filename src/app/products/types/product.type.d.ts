export type TProductRating = {
  rate: number;
  count: number;
};

export type TProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: TProductRating;
};

export type TAddProduct = {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}