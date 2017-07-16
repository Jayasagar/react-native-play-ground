import {ajax} from 'rxjs/observable/dom/ajax';
import {mergeMap} from 'rxjs/add/operator/mergeMap';
import {map} from 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {LOAD_USER} from './constants';
import {loadUserSuccess} from './actions';

//epic
const loadUserEpic = action$ =>
    action$.ofType(LOAD_USER)
        .mergeMap(action =>
                ajax.getJSON(`https://api.github.com/users/${action.payload}`)
                    .map(response => {
                        console.log('Network output' + response);
                        return loadUserSuccess(response)
                    })
        );

export default loadUserEpic;

