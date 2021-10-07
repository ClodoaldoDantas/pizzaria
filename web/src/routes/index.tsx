import { Switch, Route } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Orders } from '../pages/Orders';
import { Products } from '../pages/Products';

export function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/products" component={Products} />
      <Route path="/orders" component={Orders} />
      <Route />
    </Switch>
  );
}
