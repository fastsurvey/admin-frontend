import React from 'react';
import FastSurveyIcon from '../assets/branding/rocket.svg';

function LogoComponent() {
    return (
        <div
            className={
                'mx-3 flex flex-row items-center justify-start mb-4 font-weight-600 p-2'
            }
        >
            <div className={'h-12 w-12 mr-3 no-selection'}>
                <img src={FastSurveyIcon} alt='FastSurvey' />
            </div>
            <div className={'text-gray-700 text-2xl no-selection'}>
                FastSurvey <span className='text-magenta'>Admin Panel</span>
            </div>
        </div>
    );
}

interface FormPageWrapperComponentProps {
    children: React.ReactNode;
    image: string;
}

function FormPageWrapperComponent(props: FormPageWrapperComponentProps) {
    return (
        <React.Fragment>
            <div className='fixed pt-4 pb-1 left top'>
                <LogoComponent />
            </div>
            <main className='flex-col center-content w-100vw h-100vh'>
                <div className='flex-row center-content w-100vw'>
                    <div className='center-content w-35vw'>
                        <div className='w-25vw no-selection'>
                            <img src={props.image} alt='Fast Surveys' />
                        </div>
                    </div>
                    <div className='flex-col center-content w-35vw'>
                        {props.children}
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default FormPageWrapperComponent;
