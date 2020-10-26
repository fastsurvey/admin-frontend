import React, {useState, useEffect} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {ReduxAction, ReduxState, JWT, Account} from '../utilities/types';
import Cookies from 'js-cookie';
import {logInAction, logOutAction} from '../utilities/reduxActions';
import {generateValidOAuthToken} from '../utilities/jwtEncryption';

function storeReducer(
    state = {
        loggingIn: true,
        loggedIn: false,
        jwt: undefined,
        account: undefined,
        messages: [],
        modalOpen: false,
    },
    action: ReduxAction,
) {
    const newState: ReduxState = {
        loggingIn: state.loggingIn,
        loggedIn: state.loggedIn,
        jwt: state.jwt,
        account: state.account,
        messages: state.messages,
        modalOpen: state.modalOpen,
    };

    switch (action.type) {
        case 'LOG_IN':
            newState.loggingIn = false;
            newState.loggedIn = true;
            newState.jwt = action.jwt;
            newState.account = action.account;
            Cookies.set('jwt', JSON.stringify(action.jwt), {expires: 7});
            break;
        case 'LOG_OUT':
            newState.loggingIn = false;
            newState.loggedIn = false;
            newState.jwt = undefined;
            newState.account = undefined;
            Cookies.remove('jwt');
            break;
        case 'OPEN_MESSAGE':
            if (!newState.messages.includes(action.text)) {
                newState.messages = [action.text].concat(newState.messages);
            }
            break;
        case 'CLOSE_MESSAGE':
            newState.messages = [...newState.messages].filter((text) => {
                return text !== action.text;
            });
            break;
        case 'CLOSE_ALL_MESSAGES':
            newState.messages = [];
            break;
        case 'OPEN_MODAL':
            newState.modalOpen = true;
            break;
        case 'CLOSE_MODAL':
            newState.modalOpen = false;
            break;
        default:
            break;
    }

    return newState;
}

// @ts-ignore
const store = createStore(storeReducer);

interface ReduxWrapperProps {
    children: React.ReactChild;
}
export function ReduxWrapper(props: ReduxWrapperProps) {
    const [cookieLogin, setCookieLogin] = useState(false);

    function logIn(jwt: JWT, account: Account) {
        store.dispatch(logInAction(jwt, account));
    }

    useEffect(() => {
        async function loginFromCookie() {
            try {
                await generateValidOAuthToken(logIn);
            } catch {
                store.dispatch(logOutAction());
            }
        }

        if (!cookieLogin) {
            setCookieLogin(true);
            loginFromCookie();
        }
    }, [cookieLogin]);

    return <Provider store={store}>{props.children}</Provider>;
}

export default ReduxWrapper;
