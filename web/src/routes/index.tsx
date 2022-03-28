import { Switch, Route } from 'react-router-dom';
import { Products } from '../pages/Products';
import { AddProduct } from '../pages/AddProduct';
import { EditProduct } from '../pages/EditProduct';
import { Orders } from '../pages/Orders';
import { OrderDetails } from '../pages/OrderDetails';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Products} />
      <Route path="/products/new" component={AddProduct} />
      <Route path="/products/:id" component={EditProduct} />
      <Route exact path="/orders" component={Orders} />
      <Route path="/orders/:id" component={OrderDetails} />
    </Switch>
  );
}
