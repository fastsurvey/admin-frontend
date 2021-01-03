import React from 'react';
import {configTypes} from 'utilities';
import ControlStrip from './control-strip/control-strip';
import Settings from './settings/settings';
import FieldConfigForm from './fields/field/field';
import AddFieldPanel from './add-field-panel/add-field-panel';

interface Props {
    centralConfig: configTypes.SurveyConfig;
    modifyConfig(config: configTypes.SurveyConfig): void;
    saveState(): void;
    publishState(): void;
    revertState(): void;

    localConfig: configTypes.SurveyConfig;
    setLocalConfigState(config: configTypes.SurveyConfig): void;

    updateValidator(newIndex: number, newState: boolean): void;
    setLocalConfig(config: configTypes.SurveyConfig): void;
    setFieldConfig(
        newFieldConfig: configTypes.SurveyField,
        newIndex: number,
    ): void;

    insertField(index: number, fieldType: configTypes.FieldType): void;
    pasteField(index: number): void;
    removeField(index: number): void;
}
function VisualEditor(props: Props) {
    return (
        <React.Fragment>
            <ControlStrip
                config={props.centralConfig}
                setConfig={props.modifyConfig}
                saveState={props.saveState}
                publishState={props.publishState}
                revertState={props.revertState}
            />
            <div
                className={
                    'left-0 right-0 min-h-100vh flex flex-col items-center ' +
                    'pt-10 px-8 bg-gray-100 no-selection ' +
                    'pb-64 lg:ml-104 xl:ml-124 2xl:ml-144 '
                }
            >
                <Settings
                    config={props.localConfig}
                    setConfig={props.setLocalConfig}
                    updateValidator={(newState: boolean) =>
                        props.updateValidator(0, newState)
                    }
                />
                {props.localConfig.fields.map((fieldConfig, index) => (
                    <div className='w-full' key={fieldConfig.local_id}>
                        <AddFieldPanel
                            insertField={(fieldType: configTypes.FieldType) =>
                                props.insertField(index, fieldType)
                            }
                            pasteField={() => props.pasteField(index)}
                        />
                        <FieldConfigForm
                            fieldConfig={fieldConfig}
                            setFieldConfig={(
                                newFieldConfig: configTypes.SurveyField,
                            ) => props.setFieldConfig(newFieldConfig, index)}
                            disabled={!props.localConfig.draft}
                            updateValidator={(newState: boolean) =>
                                props.updateValidator(1 + index, newState)
                            }
                            removeField={() => props.removeField(index)}
                        />
                    </div>
                ))}
                <AddFieldPanel
                    insertField={(fieldType: configTypes.FieldType) =>
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
        </React.Fragment>
    );
}

export default VisualEditor;
