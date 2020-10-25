import React, {useState} from 'react';
import InputComponent from '../../../components/input';
import Button from '../../../components/buttons/Button';
import ButtonRow from '../../../components/buttons/ButtonRow';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {JWT, Account, ReduxState} from '../../../utilities/types';
import {authPostRequest} from '../../../utilities/axiosClients';
import {
    logInAction,
    openMessageAction,
    closeAllMessagesAction,
} from '../../../utilities/reduxActions';

interface VerifyFormProps {
    loggingIn: boolean;
    logIn(jwt: JWT, account: Account): void;
    openMessage(content: string): void;
    closeAllMessages(): void;
}

function VerifyForm(props: VerifyFormProps) {
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const queryParams = new URLSearchParams(window.location.search);
    let email_token = queryParams.get('token');

    function handleVerify() {
        if (!disabled() && email_token !== null) {
            authPostRequest('/verify', {password, email_token})
                .then((response) => {
                    props.closeAllMessages();
                    // new jwt and account since the accout payload has been updated
                    props.logIn(response.data.jwt, response.data.account);
                    setSuccess(true);
                })
                .catch((error) => {
                    if (error?.response?.status === 401) {
                        props.openMessage('Invalid password or wrong link');
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
        return password.length < 8;
    }

    return (
        <div className='w-20vw'>
            {!success && (
                <React.Fragment>
                    <h3 className='mb-4 text-center no-selection'>
                        Verify your email
                    </h3>
                    {email_token !== null && (
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
                            <ButtonRow center className={'pt-2'}>
                                <Button
                                    onClick={handleVerify}
                                    text='Verify'
                                    disabled={disabled()}
                                />
                            </ButtonRow>
                        </React.Fragment>
                    )}
                    {email_token === null && (
                        <p>
                            Sorry, we couldn't find any email token in the url.
                            Please use exactly the link we've sent to you.
                        </p>
                    )}
                </React.Fragment>
            )}
            {success && (
                <React.Fragment>
                    <h3 className='mb-4 text-center no-selection'>Success!</h3>
                    <ButtonRow center className={'pt-2'}>
                        <Link to='/configurations'>
                            <Button
                                onClick={handleVerify}
                                text='Continue to Admin Panel'
                                disabled={disabled()}
                            />
                        </Link>
                    </ButtonRow>
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
export default connect(mapStateToProps, mapDispatchToProps)(VerifyForm);
