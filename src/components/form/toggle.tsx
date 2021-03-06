import React from 'react';

export default function Toggle(props: {
    value: boolean;
    setValue(v: boolean): void;
    disabled?: boolean;
}) {
    const {value, setValue} = props;

    const sharedClasses = (active: boolean = false) =>
        'w-12 text-center h-7 ringable-dark font-weight-600 rounded ' +
        (props.disabled
            ? active
                ? 'text-blue-700 bg-blue-300 cursor-not-allowed '
                : ' text-gray-400 cursor-not-allowed '
            : active
            ? 'text-blue-900 bg-blue-200 '
            : ' text-gray-500');

    return (
        <div className='relative my-1 bg-gray-100 rounded centering-row gap-x-1'>
            <button
                className={sharedClasses(value)}
                onClick={!props.disabled ? () => setValue(true) : () => {}}
                disabled={props.disabled === true}
            >
                Yes
            </button>
            <button
                className={sharedClasses(!value)}
                onClick={!props.disabled ? () => setValue(false) : () => {}}
                disabled={props.disabled === true}
            >
                No
            </button>
        </div>
    );
}
