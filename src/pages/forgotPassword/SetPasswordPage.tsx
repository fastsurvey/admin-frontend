import React, {useState} from 'react';
import InputComponent from '../../components/input';
import ButtonComponent from '../../components/button';
import ButtonRowComponent from '../../components/buttonRow';
import {connect} from 'react-redux';
import {ReduxState, JWT, Account} from '../../utilities/types';
import {authPostRequest} from '../../utilities/axiosClients';
import {logInAction} from '../../utilities/reduxActions';
import {Link} from 'react-router-dom';
import {
    openMessageAction,
    closeAllMessagesAction,
} from '../../utilities/reduxActions';

interface SetPasswordPageProps {
    loggingIn: boolean;
    logIn(jwt: JWT, account: Account): void;
    openMessage(content: string): void;
    closeAllMessages(): void;
}

function SetPasswordPage(props: SetPasswordPageProps) {
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [success, setSuccess] = useState(false);

    const queryParams = new URLSearchParams(window.location.search);
    let password_token = queryParams.get('password_token');

    function handleSubmit() {
        if (!disabled() && password_token !== null) {
            authPostRequest('/set-new-password', {password, password_token})
                .then((response) => {
                    props.closeAllMessages();
                    props.logIn(response.data.jwt, response.data.account);
                    setSuccess(true);
                })
                .catch((error) => {
                    if (error?.response?.status === 401) {
                        props.openMessage('Invalid link');
                    } else {
                        // Invalid password formats will be catched by frontend
                        props.openMessage(
                            'Server error. Please try again later',
                        );
                    }
                });
        }
    }

    function disabled() {
        return password.length < 8 || password !== passwordConfirmation;
    }

    return (
        <div className='w-20vw'>
            {!success && (
                <React.Fragment>
                    <h3 className='mb-4 text-center no-selection'>
                        Set your new password
                    </h3>
                    {password_token !== null && (
                        <React.Fragment>
                            <InputComponent
                                placeholder='password'
                                value={password}
                                onChange={(newValue) => {
                                    props.closeAllMessages();
                                    setPassword(newValue);
                                }}
                                type='password'
                            />
                            <InputComponent
                                placeholder='confirm password'
                                value={passwordConfirmation}
                                onChange={(newValue) => {
                                    props.closeAllMessages();
                                    setPasswordConfirmation(newValue);
                                }}
                                type='password'
                            />
                            <ButtonRowComponent center className={'pt-2'}>
                                <ButtonComponent
                                    onClick={handleSubmit}
                                    text='Set Password'
                                    disabled={disabled()}
                                />
                            </ButtonRowComponent>
                        </React.Fragment>
                    )}
                    {password_token === null && (
                        <p>
                            Sorry, we couldn't find any password token in the
                            url. Please use exactly the link we've sent to you.
                        </p>
                    )}
                </React.Fragment>
            )}
            {success && (
                <React.Fragment>
                    <h3 className='mb-4 text-center no-selection'>Success!</h3>
                    <ButtonRowComponent center className={'pt-2'}>
                        <Link to='/configurations'>
                            <ButtonComponent text='Continue to Admin Panel' />
                        </Link>
                    </ButtonRowComponent>
                </React.Fragment>
            )}
        </div>
    );
}

const mapStateToProps = (state: ReduxState) => ({
    loggingIn: state.loggingIn,
});
const mapDispatchToProps = (dispatch: any) => ({
    logIn: (jwt: JWT, account: Account) => dispatch(logInAction(jwt, account)),
    openMessage: (content: string) => dispatch(openMessageAction(content)),
    closeAllMessages: () => dispatch(closeAllMessagesAction()),
});
export default connect(mapStateToProps, mapDispatchToProps)(SetPasswordPage);
