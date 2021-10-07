import { Switch, Route } from 'react-router-dom';
import { AddProduct } from '../pages/AddProduct';
import { Dashboard } from '../pages/Dashboard';
import { EditProduct } from '../pages/EditProduct';
import { Orders } from '../pages/Orders';
import { Products } from '../pages/Products';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/products" component={Products} />
      <Route path="/products/new" component={AddProduct} />
      <Route path="/products/:id" component={EditProduct} />
      <Route path="/orders" component={Orders} />
      <Route />
    </Switch>
  );
}
