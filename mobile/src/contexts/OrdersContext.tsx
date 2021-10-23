import React, { useContext } from 'react';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { OrderType } from '../interfaces/Order';
import { api } from '../services/api';

type OrdersContextData = {
  orders: OrderType[];
};

type OrdersProviderProps = {
  children: ReactNode;
};

const OrdersContext = createContext({} as OrdersContextData);

export function OrdersProvider({ children }: OrdersProviderProps) {
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    api.get('orders').then(response => {
      setOrders(response.data as OrderType[]);
    });

    const socket = io('http://192.168.100.6:3333');

    socket.on('newOrder', data => {
      const newOrder: OrderType = data;
      setOrders(prevState => [newOrder, ...prevState]);
    });

    socket.on('statusChange', data => {
      const orderUpdated: OrderType = data;
      setOrders(prevState =>
        prevState.map(order => {
          if (order._id === orderUpdated._id) {
            return orderUpdated;
          } else {
            return order;
          }
        })
      );
    });
  }, []);

  return (
    <OrdersContext.Provider value={{ orders }}>
      {children}
    </OrdersContext.Provider>
  );
}

export const useOrders = () => useContext(OrdersContext);
