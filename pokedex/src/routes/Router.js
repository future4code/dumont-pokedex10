import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Router = () => {
    //const [bla, setBla] = useState([]) aqui deve vir um estado

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <p>Home</p>
                </Route>
                <Route exact path={'/pokedex'}>
                    <p>Pokedex</p>
                </Route>
                <Route exact path={'/detalhes'}>
                    <p>Página de detalhes</p>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router