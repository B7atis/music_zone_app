export const initialState = {
  products: {
    data: [
      {
        id: '1',
        title: 'saxophone',
        price: 3500,
        image: 'https://cdn.pixabay.com/photo/2021/09/01/14/20/saxophone-6591475_960_720.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
      },
      {
        id: '2',
        title: 'guitar',
        price: 2800,
        image: 'https://cdn.pixabay.com/photo/2016/10/12/23/22/electric-guitar-1736291_960_720.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
      },
      {
        id: '3',
        title: 'violin',
        price: 4500,
        image: 'https://cdn.pixabay.com/photo/2016/11/23/14/48/bowed-instrument-1853324_960_720.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
      },
      {
        id: '4',
        title: 'trumpet',
        price: 1600,
        image: 'https://cdn.pixabay.com/photo/2017/09/05/12/29/trumpet-2717460_960_720.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
      },
      {
        id: '5',
        title: 'piano',
        price: 9899,
        image: 'https://cdn.pixabay.com/photo/2017/12/06/09/55/piano-3001357_960_720.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  cart: [
    {
      id: '1',
      title: 'saxophone',
      price: 3500,
      image: 'https://cdn.pixabay.com/photo/2021/09/01/14/20/saxophone-6591475_960_720.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
    },
    {
      id: '4',
      title: 'trumpet',
      price: 1600,
      image: 'https://cdn.pixabay.com/photo/2017/09/05/12/29/trumpet-2717460_960_720.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eleifend quam adipiscing vitae proin sagittis nisl. Sed augue lacus viverra vitae congue eu. Et tortor at risus viverra adipiscing at in. Nibh ipsum consequat nisl vel pretium lectus.',
    },
  ],
};