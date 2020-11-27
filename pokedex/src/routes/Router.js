import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../Components/Home/Home';
import Pokedex from '../Components/PokeCard/Pokedex';
import Header from '../hearder/Header';


const Router = () => {
    //const [bla, setBla] = useState([]) aqui deve vir um estado

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <Header/>
                    <p>Home</p>
                    <Home />
                </Route>
                <Route exact path={'/pokedex'}>
                    <Header/>
                    <Pokedex/>
                    <p>Pokedex</p>
                </Route>
                <Route exact path={'/detalhes'}>
                    <Header/>
                    <p>Página de detalhes</p>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router