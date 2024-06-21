import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './Cart';
import ProductList from './ProductList';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ProductList} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  );
};

export default Routes;
