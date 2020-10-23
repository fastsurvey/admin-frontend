import React, {useEffect, useState} from 'react';
import {closeMessageAction} from '../utilities/reduxActions';
import {ReduxState, Message} from '../utilities/types';
import {connect} from 'react-redux';
import {ICONS} from '../assets/icons/icons';

interface MessageComponentProps {
    content: string | React.ReactNode;
    close(): void;
}

function MessageComponent(props: MessageComponentProps) {
    const [size, setSize] = useState('h-0 py-0');
    const [delay, setDelay] = useState('delay-200');
    const [toBeClosed, setToBeClosed] = useState(false);

    useEffect(() => {
        if (size === 'h-0 py-0' && !toBeClosed) {
            setSize('h-12 py-2');
        }
    });

    function handleClose() {
        setToBeClosed(true);
        setDelay('');
        setSize('h-0 py-0');
        setTimeout(() => {
            props.close();
        }, 300);
    }

    return (
        <div
            className={
                'flex flex-row items-center text-gray-800 font-weight-600 ' +
                'overflow-hidden px-2 m-2 bg-gray-100 rounded shadow ' +
                size +
                ' ' +
                delay +
                ' transition-all duration-300'
            }
        >
            <div className='text-lg'>{props.content}</div>
            <div className='flex-grow' />
            <div className='cursor-pointer' onClick={handleClose}>
                {ICONS.close}
            </div>
        </div>
    );
}

interface MessageQueueComponentProps {
    messages: Message[];
    closeMessage(index: number): void;
}

function MessageQueueComponent(props: MessageQueueComponentProps) {
    return (
        <div className='fixed bottom-0 w-30vw mx-35vw'>
            {props.messages.map((message: Message, index: number) => (
                <MessageComponent
                    content={message.content}
                    close={() => props.closeMessage(index)}
                />
            ))}
        </div>
    );
}

const mapStateToProps = (state: ReduxState) => ({
    messages: state.messages,
});
const mapDispatchToProps = (dispatch: any) => ({
    closeMessage: (index: number) => dispatch(closeMessageAction(index)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MessageQueueComponent);
