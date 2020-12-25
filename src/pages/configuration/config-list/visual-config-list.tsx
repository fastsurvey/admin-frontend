import React from 'react';

interface Props {
    children: React.ReactNode;
}
function VisualConfigList(props: Props) {
    return (
        <div
            className={
                'fixed flex flex-col p-2 h-screen ' +
                'lg:ml-44 lg:w-60 xl:ml-54 xl:w-70 2xl:ml-64 2xl:w-80 ' +
                'border-r-4 border-gray-500 bg-gray-300 ' +
                'overflow-y-scroll overflow-x-hidden'
            }
        >
            {props.children}
        </div>
    );
}

export default VisualConfigList;
