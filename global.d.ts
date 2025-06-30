export type RootStackParamList = {
  Tab: undefined; // no params
  Profile: { userId: string }; // expects a param
  Settings: { toggleDarkMode: boolean } | undefined; // optional params
};
export type BottomTabParamList = {
  Home: undefined; // no params
  Search: undefined; // no params
  Notifications: undefined; // no params
  Profile: { userId: string }; // expects a param
  Chats: undefined; // no params
  Aviator: undefined; // no params
  AviatorAnimation: undefined; // no params
};
export type DrawerParamList = {
  DHome: undefined; // no params
  DSearch: undefined; // no params
  DNotifications: undefined; // no params
  DProfile: { userId: string }; // expects a param
};