import React, { Suspense, CSSProperties } from 'react';
import { Route, Switch, Link, RouteComponentProps} from 'react-router-dom';
import Spinner from '../spinner';

import SearchBar from './searchBar'
import ImageSection from './detailView/imageSection';




const MasterView = React.lazy(() => import(/* webpackChunkName: "masterView" */ './masterView'));
const DetailView = React.lazy(() => import(/* webpackChunkName: "detailView" */ './detailView/detailView'));

/** React function component */
export default class ViewContainer extends React.Component {
    

    render() {
        return (
            <Suspense fallback={<Spinner/>}>
                    <Switch>
                        <Route path="/:id" component={DetailView}></Route>       
                        <div style={centeredForm}>
                            <SearchBar />
                            <ImageSection />
                        </div>
                    </Switch>
                    
            </Suspense>
            
        );
    }
}

const centeredForm: CSSProperties = {
    height: '100%',
    textAlign: 'center',
    marginTop: '5em'
}



