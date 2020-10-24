export interface ReduxState {
    loggingIn: boolean;
    loggedIn: boolean;
    jwt: undefined | JWT;
    account: undefined | Account;
    messages: Message[];
}

export interface JWT {
    accessToken: string;
    refreshToken: string;
    bearer: string;
}

export interface Account {
    email: string;
    email_verified: boolean;
}

export type Message = string;

export type ReduxAction =
    | LogInAction
    | LogOutAction
    | OpenMessageAction
    | CloseMessageAction
    | CloseAllMessagesAction;

export interface LogInAction {
    type: 'LOG_IN';
    jwt: JWT;
    account: Account;
}

export interface LogOutAction {
    type: 'LOG_OUT';
}

export interface OpenMessageAction {
    type: 'OPEN_MESSAGE';
    text: string;
}

export interface CloseMessageAction {
    type: 'CLOSE_MESSAGE';
    text: string;
}

export interface CloseAllMessagesAction {
    type: 'CLOSE_ALL_MESSAGES';
}
