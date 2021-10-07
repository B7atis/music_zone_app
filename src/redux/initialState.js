export const initialState = {
  products: {
    data: [
      {
        id: 1,
        title: 'saxophone',
        price: 3500,
        image: 'https://cdn.pixabay.com/photo/2021/09/01/14/20/saxophone-6591475_960_720.jpg',
      },
      {
        id: 2,
        title: 'guitar',
        price: 2800,
        image: 'https://cdn.pixabay.com/photo/2016/10/12/23/22/electric-guitar-1736291_960_720.jpg',
      },
      {
        id: 3,
        title: 'violin',
        price: 4500,
        image: 'https://cdn.pixabay.com/photo/2016/11/23/14/48/bowed-instrument-1853324_960_720.jpg',
      },
      {
        id: 4,
        title: 'trumpet',
        price: 1600,
        image: 'https://cdn.pixabay.com/photo/2017/09/05/12/29/trumpet-2717460_960_720.jpg',
      },
      {
        id: 5,
        title: 'piano',
        price: 9899,
        image: 'https://cdn.pixabay.com/photo/2017/12/06/09/55/piano-3001357_960_720.jpg',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
};