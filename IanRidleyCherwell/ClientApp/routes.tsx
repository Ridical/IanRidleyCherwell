import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { OneA } from './components/1A';
import { OneAFull } from './components/1AFull';
import { OneB } from './components/1B';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/1A' component={ OneA } />
    <Route path='/1AFull' component={ OneAFull } />
    <Route path='/1B' component={ OneB } />
</Layout>;
