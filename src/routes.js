import Comments from './page/Comments/Comments';
import Offs from './page/Offs/Offs';
import Orders from './page/Orders/Orders';
import Products from './page/Products/Products';
import Users from './page/Users/Users';

const routes = [
    { path: '/products', element: <Products /> },
    { path: '/comments', element: <Comments /> },
    { path: '/users', element: <Users /> },
    { path: '/orders', element: <Orders /> },
    { path: '/offs', element: <Offs /> },
]

export default routes