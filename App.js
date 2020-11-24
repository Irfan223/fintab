import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import OrderSummaryScreen from './Screens/OrderSummaryScreen';
import OrderDetailsScreen from './Screens/OrderDetailsScreen';
const navigator = createStackNavigator(
  {
    OrderSummary: OrderSummaryScreen,
    OrderDetails: OrderDetailsScreen,
  },
  {
    initialRouteName: 'OrderSummary',
    defaultNavigationOptions: {
      headerShown: true,
      title: 'Order Management'
    }
  }
);

export default createAppContainer(navigator);