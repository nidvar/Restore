export type BasketType = {
  basketId: string;
  items: ItemType[];
};

export type ItemType = {
  productId: number;
  name: string;
  price: number;
  pictureUrl: string;
  brand: string;
  type: string;
  quantity: number;
};