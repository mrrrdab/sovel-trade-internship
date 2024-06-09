import React from 'react';
import { Review } from './Review';

const reviewData = [
  {
    id: 0,
    avatarUrl: '',
    name: 'Mariya Izerakova',
    date: '2024-08-06',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ratings: {
      serviceQuality: 4,
      productQuality: 4,
      deliveryQuality: 1,
    },
    images: {},
  },

  {
    id: 1,
    avatarUrl: '',
    name: 'Nikita',
    date: '2024-08-07',
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ratings: {
      serviceQuality: 1,
      productQuality: 3,
      deliveryQuality: 2,
    },
    images: [
      {
        id: 0,
        src: 'https://cdn.pixabay.com/photo/2012/06/27/15/02/candy-50838_1280.jpg',
      },
      {
        id: 1,
        src: 'https://www.masslive.com/resizer/v2/ZFJMDNGGXJBE3C5E2JWEZEP4F4.jfif?auth=c54de9f8bd5366d923507b800d677b01c7cdc3e5d0566b1127bf02b09fa51e36&width=500&quality=90',
      },
    ],
  },
];

export const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      {reviewData.map(data => (
        <div key={data.id} style={{ marginBottom: '20px' }}>
          <Review {...data} />
        </div>
      ))}
    </div>
  );
};
