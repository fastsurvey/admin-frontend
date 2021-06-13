import React from 'react';
import {types} from 'types';
import Settings from './settings/settings';
import Field from './fields/field';
import AddFieldPanel from './add-field-panel/add-field-panel';
import EditorHeader from './editor-header/editor-header';

function VisualEditor(props: {
    centralConfigName: string;
    localConfig: types.SurveyConfig;
    setLocalConfig(configChanges: object): void;
    setLocalFieldConfig(fieldConfigChanges: object, newIndex: number): void;

    updateValidator(newIndex: number, newState: types.ValidationResult): void;
    fieldValidation: types.ValidationResult[];

    insertField(index: number, fieldType: types.FieldType): void;
    pasteField(index: number): void;
    removeField(index: number): void;

    saveState(configChanges?: object): void;
    revertState(): void;
}) {
    return (
        <div className={'w-full py-16 min-h-screen bg-gray-100 flex-col-top'}>
            <div className={'w-full max-w-3xl '}>
                <EditorHeader
                    localConfig={props.localConfig}
                    saveState={props.saveState}
                    revertState={props.revertState}
                    setLocalConfig={props.setLocalConfig}
                />
                <Settings
                    centralConfigName={props.centralConfigName}
                    config={props.localConfig}
                    setLocalConfig={props.setLocalConfig}
                    updateValidator={(newState: types.ValidationResult) =>
                        props.updateValidator(0, newState)
                    }
                    validation={props.fieldValidation[0]}
                />
                {props.localConfig.fields.map((fieldConfig, index) => (
                    <div className='w-full' key={fieldConfig.local_id}>
                        <AddFieldPanel
                            insertField={(fieldType: types.FieldType) =>
                                props.insertField(index, fieldType)
                            }
                            pasteField={() => props.pasteField(index)}
                        />
                        <Field
                            fieldConfig={fieldConfig}
                            setLocalFieldConfig={(newFieldConfig: object) =>
                                props.setLocalFieldConfig(newFieldConfig, index)
                            }
                            disabled={!props.localConfig.draft}
                            updateValidator={(
                                newState: types.ValidationResult,
                            ) => props.updateValidator(1 + index, newState)}
                            removeField={() => props.removeField(index)}
                        />
                    </div>
                ))}
                <AddFieldPanel
                    insertField={(fieldType: types.FieldType) =>
                        props.insertField(
                            props.localConfig.fields.length,
                            fieldType,
                        )
                    }
                    pasteField={() =>
                        props.pasteField(props.localConfig.fields.length)
                    }
                />
            </div>
        </div>
    );
}

export default VisualEditor;
