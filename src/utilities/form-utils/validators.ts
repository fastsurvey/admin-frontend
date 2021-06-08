import {types} from 'types';

export const validators = {
    fieldOptions: (config: types.SurveyConfig) =>
        config.fields.filter(
            (fieldConfig: types.SurveyField) =>
                (fieldConfig.type === 'radio' ||
                    fieldConfig.type === 'selection') &&
                fieldConfig.fields.length < 2,
        ).length === 0,

    authMode: (config: types.SurveyConfig) =>
        config.authentication !== 'email' ||
        config.fields.filter((fieldConfig) => fieldConfig.type === 'email')
            .length === 1,

    timing: (config: types.SurveyConfig) => config.start <= config.end,

    title: (title: string) => 1 <= title.length && title.length <= 120,

    surveyName: (
        configs: types.SurveyConfig[] | undefined,
        thisConfig: types.SurveyConfig,
    ) => (survey_name: string) =>
        survey_name.match(/^[a-zA-Z0-9-_]*$/) !== null &&
        3 <= survey_name.length &&
        survey_name.length <= 120 &&
        configs?.filter(
            (config) =>
                config.local_id !== thisConfig.local_id &&
                config.survey_name === survey_name,
        ).length === 0,

    newSurveyName: (configs: types.SurveyConfig[] | undefined) => (
        survey_name: string,
    ) =>
        survey_name.match(/^[a-zA-Z0-9-_]*$/) !== null &&
        3 <= survey_name.length &&
        survey_name.length <= 120 &&
        configs?.filter((config) => config.survey_name === survey_name)
            .length === 0,

    description: (description: string) =>
        0 <= description.length && description.length <= 2000,

    submissionLimit: (submission_limit: number) =>
        1 <= submission_limit && submission_limit <= 10000,

    regex: (regex: string) => regex.length <= 250,
    hint: (hint: string) => hint.length <= 120,
    minChars: (fieldConfig: types.TextField) => (min_chars: number) =>
        0 <= min_chars && min_chars <= fieldConfig.max_chars,
    maxChars: (max_chars: number) => max_chars <= 2000,
    minSelect: (fieldConfig: types.SelectionField) =>
        0 <= fieldConfig.min_select &&
        fieldConfig.min_select <= fieldConfig.max_select,
    maxSelect: (fieldConfig: types.SelectionField) =>
        fieldConfig.max_select <= fieldConfig.fields.length,
};