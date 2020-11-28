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
                {/* página home */}
                <Route exact path={'/'}>
                    <Header/>
                    <Home />
                </Route>
                 {/* página pokedex */}
                <Route exact path={'/pokedex'}>
                    <Header/>
                    <Pokedex/>
                </Route>
                 {/* página detalhes */}
                <Route exact path={'/detalhes'}>
                    <Header/>
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router