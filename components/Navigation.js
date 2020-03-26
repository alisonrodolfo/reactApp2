import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import ContactsList from '../screens/ContactsList';
import ContactDetails from '../screens/ContactDetails';
import ActionsList from '../screens/ActionsList';

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => (
  <ContactsStack.Navigator>
    <ContactsStack.Screen
      name="ContactsList"
      component={ContactsList}
      options={{
        headerTitle: 'Lista de Contatos',
      }}
    />
    <ContactsStack.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={({ route }) => {
        return {
          headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
        };
      }}
    />
  </ContactsStack.Navigator>
);

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
  <ActionsStack.Navigator>
    <ActionsStack.Screen name="Configurações" component={ActionsList} />
  </ActionsStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen
      name="Contatos"
      component={ContactsStackScreen}
      options={{
        tabBarIcon: props => (
          <Ionicons name="ios-contacts" size={props.size} color={props.color} />
        ),
      }}
    />
    <AppTabs.Screen
      name="Configurações"
      component={ActionsStackScreen}
      options={{
        tabBarIcon: props => (
          <Ionicons
            name="ios-checkmark-circle-outline"
            size={props.size}
            color={props.color}
          />
        ),
      }}
    />
  </AppTabs.Navigator>
);


export default () => (
  <NavigationContainer>
    <AppTabsScreen />
  </NavigationContainer>
);