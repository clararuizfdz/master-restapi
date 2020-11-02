import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { HotelCollectionScene, HotelScene } from 'scenes';
import { CharacterCollectionScene } from 'scenes/character-collection.scene';
import { CharacterScene } from 'scenes/character.scene';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={CharacterCollectionScene}
        />
        <Route
          exact= {true}
          path={switchRoutes.createCharacter}
          component={CharacterScene}
        />
         <Route
          exact= {true}
          path={switchRoutes.editCharacter}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.hotelCollection}
          component={HotelCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.createHotel}
          component={HotelScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editHotel}
          component={HotelScene}
        />
      </Switch>
    </HashRouter>
  );
};
