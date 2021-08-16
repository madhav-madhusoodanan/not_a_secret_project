import React, {FunctionComponent, ReactNode} from 'react';
import {
  NavigationState,
  SceneRendererProps,
  TabView,
  TabViewProps,
} from 'react-native-tab-view';

export interface ComTabRoute {
  key: string;
  title: string;
}

export interface ComTabViewProps
  extends Pick<TabViewProps<ComTabRoute>, 'renderScene'> {
  routes: ComTabRoute[];
  width: number;
  index: number;
  setIndex: (i: number) => void;
  renderTabBar: (
    props: SceneRendererProps & {
      navigationState: NavigationState<ComTabRoute>;
      setIndex: (i: number) => void;
    },
  ) => ReactNode;
  swipeEnabled?: boolean;
}

export const ComTabView: FunctionComponent<ComTabViewProps> = ({
  routes,
  width,
  renderTabBar,
  index,
  setIndex,
  renderScene,
  swipeEnabled = true,
}) => {
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={p =>
        renderTabBar({
          ...p,
          setIndex,
        })
      }
      onIndexChange={setIndex}
      initialLayout={{width}}
      swipeEnabled={swipeEnabled}
    />
  );
};
