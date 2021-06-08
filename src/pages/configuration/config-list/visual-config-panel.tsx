import React from 'react';
import {types} from 'types';
import icons from 'assets/icons/icons';
import {TimePill, IconButton} from 'components';

interface Props {
    account: types.Account;
    config: types.SurveyConfig;
}
function VisualConfigPanel(props: Props) {
    const {title, survey_name, limit} = props.config;
    const {username} = props.account;

    return (
        <div
            className={
                'w-full rounded shadow centering-col ' +
                'no-selection cursor-pointer group bg-white '
            }
        >
            <div className={'w-full p-3 bg-white rounded-t flex-col-left'}>
                <div className='w-full mb-1 flex-row-top'>
                    <div
                        className={
                            'pr-4 text-lg text-gray-800 font-weight-600 ' +
                            'truncate'
                        }
                    >
                        {title}
                    </div>
                    <div className='flex-max' />
                    <div className='flex-shrink-0'>
                        <TimePill config={props.config} flat />
                    </div>
                </div>
                <div className='text-sm flex-row-left'>
                    <div className='p-1 mr-0.5 w-7 h-7 icon-gray'>
                        {icons.compass}
                    </div>
                    <div className='text-gray-600 truncate font-weight-500'>
                        /{username}/{survey_name}
                    </div>
                </div>
                <div className='text-sm flex-row-left'>
                    <div className='ml-[1.875rem] text-gray-600 truncate font-weight-500'>
                        Max. {limit} submissions
                    </div>
                </div>
            </div>
            <div
                className={
                    'w-full px-3 py-2 bg-gray-100 rounded-b group-hover:bg-gray-200 ' +
                    'text-center text-blue-900 font-weight-600'
                }
            >
                Edit Survey
            </div>
        </div>
    );
}

export default VisualConfigPanel;
