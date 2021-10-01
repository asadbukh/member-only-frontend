import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SignInPage } from '../auth';
import { CreateGroupPage, GroupPage, GroupListPage } from '../groups';
import { Navbar } from '../navbar';
const routes: any[] = [
    {
        path: '/',
        Component: GroupListPage,
        exact: true
    }, {
        path: '/groups/:id',
        Component: GroupPage,
        exact: true
    }, {
        path: '/sign-in',
        Component: SignInPage,
        exact: true
    }
    , {
        path: '/create-group',
        Component: CreateGroupPage,
        exact: true
    }
];

export const Routes = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                {routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                        >
                            <route.Component />
                        </Route>
                    )
                })}
            </Switch>
        </Router>
    )
}


