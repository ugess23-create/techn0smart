export type PriceItem = {
  model: string;
  price: number;
};

export type PriceCategory = {
  id: string;
  titleKey: string;
  icon: 'battery' | 'display' | 'backGlass';
  items: PriceItem[];
};

export const priceCategories: PriceCategory[] = [
  {
    id: 'battery',
    titleKey: 'battery',
    icon: 'battery',
    items: [
      { model: 'iPhone X', price: 30 },
      { model: 'iPhone XS', price: 30 },
      { model: 'iPhone XR', price: 30 },
      { model: 'iPhone XS Max', price: 35 },
      { model: 'iPhone 11', price: 40 },
      { model: 'iPhone 11 Pro', price: 45 },
      { model: 'iPhone 11 Pro Max', price: 50 },
      { model: 'iPhone 12', price: 45 },
      { model: 'iPhone 12 mini', price: 45 },
      { model: 'iPhone 12 Pro', price: 50 },
      { model: 'iPhone 12 Pro Max', price: 55 },
      { model: 'iPhone 13', price: 50 },
      { model: 'iPhone 13 mini', price: 50 },
      { model: 'iPhone 13 Pro', price: 50 },
      { model: 'iPhone 13 Pro Max', price: 60 },
      { model: 'iPhone 14', price: 60 },
      { model: 'iPhone 14 Plus', price: 65 },
      { model: 'iPhone 14 Pro', price: 80 },
      { model: 'iPhone 14 Pro Max', price: 90 },
    ],
  },
  {
    id: 'display',
    titleKey: 'display',
    icon: 'display',
    items: [
      { model: 'iPhone X', price: 65 },
      { model: 'iPhone XS', price: 65 },
      { model: 'iPhone XR', price: 55 },
      { model: 'iPhone XS Max', price: 85 },
      { model: 'iPhone 11', price: 70 },
      { model: 'iPhone 11 Pro', price: 100 },
      { model: 'iPhone 11 Pro Max', price: 120 },
      { model: 'iPhone 12', price: 120 },
      { model: 'iPhone 12 mini', price: 120 },
      { model: 'iPhone 12 Pro', price: 120 },
      { model: 'iPhone 12 Pro Max', price: 160 },
      { model: 'iPhone 13', price: 130 },
      { model: 'iPhone 13 mini', price: 150 },
      { model: 'iPhone 13 Pro', price: 170 },
      { model: 'iPhone 13 Pro Max', price: 200 },
      { model: 'iPhone 14', price: 150 },
      { model: 'iPhone 14 Plus', price: 180 },
      { model: 'iPhone 14 Pro', price: 250 },
      { model: 'iPhone 15', price: 330 },
      { model: 'iPhone 15 Pro Max', price: 280 },
    ],
  },
  {
    id: 'backGlass',
    titleKey: 'backGlass',
    icon: 'backGlass',
    items: [
      { model: 'iPhone X, XS, XR, XS Max', price: 45 },
      { model: 'iPhone 11', price: 50 },
      { model: 'iPhone 11 Pro, 11 Pro Max', price: 60 },
      { model: 'iPhone 12', price: 60 },
      { model: 'iPhone 12 Pro, 12 Pro Max', price: 70 },
      { model: 'iPhone 13', price: 70 },
      { model: 'iPhone 13 Pro, 13 Pro Max', price: 80 },
      { model: 'iPhone 14', price: 80 },
      { model: 'iPhone 14 Pro, 14 Pro Max', price: 100 },
      { model: 'iPhone 15', price: 100 },
      { model: 'iPhone 15 Pro, 15 Pro Max', price: 120 },
    ],
  },
];
