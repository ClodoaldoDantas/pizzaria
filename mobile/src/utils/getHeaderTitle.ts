import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export function getHeaderTitle(route: any) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Menu';

  switch (routeName) {
    case 'Menu':
      return 'Cardápio';
    case 'Orders':
      return 'Meus Pedidos';
  }
}
