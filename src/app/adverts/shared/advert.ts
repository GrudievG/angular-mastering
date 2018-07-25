export interface Advert {
  pk: number;
  owner: object;
  theme: string;
  text: string;
  price: number;
  currency: number;
  images: {
    advert: number,
    file: string,
    pk: number
  }[];
  contract_price: boolean;
  location: any;
  category: any;
  activated_at: string;
  is_active: boolean;
}
