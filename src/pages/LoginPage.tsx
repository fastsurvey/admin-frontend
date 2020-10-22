import React, {useState} from 'react';
import InputComponent from '../components/input';
import ButtonComponent from '../components/button';
import ButtonRowComponent from '../components/buttonRow';
import {Link} from 'react-router-dom';

interface LoginPageComponentProps {}

function LoginPageComponent(props: LoginPageComponentProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function disabled() {
        return email.length < 5 || password.length < 8;
    }

    return (
        <React.Fragment>
            <h2 className='mb-4 text-center no-selection'>Login</h2>
            <InputComponent
                placeholder='email'
                value={email}
                onChange={setEmail}
            />
            <InputComponent
                placeholder='password'
                value={password}
                onChange={setPassword}
                type='password'
            />
            <ButtonRowComponent center className={'pt-2'}>
                <ButtonComponent text='Login' disabled={disabled()} />
            </ButtonRowComponent>
            <div
                className={
                    'w-full text-center pt-4 text-gray-500 font-weight-500 no-selection'
                }
            >
                <Link to='/register'>Don't have an account yet?</Link>
            </div>
        </React.Fragment>
    );
}

export default LoginPageComponent;
