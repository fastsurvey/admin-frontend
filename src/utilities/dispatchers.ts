import {stateTypes, configTypes} from 'utilities';

const dispatchers = {
    logIn: (dispatch: any) => (
        oauth2_token: stateTypes.OAuth2Token,
        account: stateTypes.Account,
    ): void =>
        dispatch({
            type: 'LOG_IN',
            oauth2_token,
            account,
        }),
    logOut: (dispatch: any) => (): void =>
        dispatch({
            type: 'LOG_OUT',
        }),
    openModal: (dispatch: any) => (): void =>
        dispatch({
            type: 'OPEN_MODAL',
        }),
    closeModal: (dispatch: any) => (): void =>
        dispatch({
            type: 'CLOSE_MODAL',
        }),
    openMessage: (dispatch: any) => (message: stateTypes.Message): void =>
        dispatch({
            type: 'OPEN_MESSAGE',
            message,
        }),
    closeMessage: (dispatch: any) => (text: string): void =>
        dispatch({
            type: 'CLOSE_MESSAGE',
            text,
        }),
    closeAllMessages: (dispatch: any) => (): void =>
        dispatch({
            type: 'CLOSE_ALL_MESSAGES',
        }),
    addConfigs: (dispatch: any) => (
        configs: configTypes.SurveyConfig[],
    ): void =>
        dispatch({
            type: 'ADD_CONFIGS',
            configs,
        }),
    modifyConfig: (dispatch: any) => (config: configTypes.SurveyConfig): void =>
        dispatch({
            type: 'MODIFY_CONFIG',
            config,
        }),
    markDiffering: (dispatch: any) => (differing: boolean): void =>
        dispatch({
            type: 'MARK_DIFFERING',
            differing,
        }),
};

export default dispatchers;