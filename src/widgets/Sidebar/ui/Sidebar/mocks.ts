import { ROUTS } from '@/shared/consts/routes';

type Category = {
  id: string;
  name: string;
  link: string;
  image?: string;
};

export const categories: Category[] = [
  {
    id: '1',
    name: 'Черный чай',
    link: `${ROUTS.CATALOG}/black-tea`,
    image: 'https://eda.yandex/images/3808326/c23bf3c27c3620b24ea48943af9418c5.png',
  },
  {
    id: '2',
    name: 'Зеленый чай',
    link: `${ROUTS.CATALOG}/green-tea`,
    image: 'https://eda.yandex/images/3529621/28f6cad55cfb4e797c5a907cd5373944.png',
  },
  {
    id: '3',
    name: 'Травяной чай',
    link: `${ROUTS.CATALOG}/herbal-tea`,
    image:
      'https://avatars.mds.yandex.net/get-eda/3569651/cc0861090b89429a8272e84b779136a6/400x400',
  },
  {
    id: '4',
    name: 'Фруктовый чай',
    link: `${ROUTS.CATALOG}/fruit-tea`,
    image: 'https://eda.yandex/images/3401132/e1fe492a8659b8e5e4b3970621bbe245.png',
  },
  {
    id: '5',
    name: 'Китайский чай',
    link: `${ROUTS.CATALOG}/сhinese-tea`,
    image: 'https://eda.yandex/images/3667559/4cf7e8ca3d2fdd0f80e7aadd1c3f35c9.png',
  },
  {
    id: '6',
    name: 'Кофе',
    link: `${ROUTS.CATALOG}/coffee`,
    image:
      'https://avatars.mds.yandex.net/get-eda/3609085/4661ca1fbc79c50e036f221b6f56bc7a/400x400',
  },
  {
    id: '7',
    name: 'Сладости',
    link: `${ROUTS.CATALOG}/sweets`,
    image: 'https://eda.yandex/images/3808326/514aae6ba31d4eb69096370a6759a205.png',
  },
];
