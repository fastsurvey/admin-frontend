import {icons} from 'assets';
import React from 'react';
import {colors} from 'utilities';
import {configTypes} from 'utilities';

interface Props {
    insertField(fieldType: configTypes.FieldType): void;
}
function AddFieldPopup(props: Props) {
    const fields: configTypes.FieldType[] = [
        'Email',
        'Option',
        'Radio',
        'Selection',
        'Text',
    ];
    return (
        <div className='px-1 w-60'>
            {fields.map((fieldType: configTypes.FieldType) => (
                <div
                    key={fieldType}
                    className={
                        'flex flex-row items-start justify-start ' +
                        'my-1 text-lg leading-10 font-weight-600 rounded ' +
                        'opacity-70 hover:opacity-100 cursor-pointer ' +
                        colors.colorToClasses(
                            colors.fieldTypeToColor(fieldType),
                        )
                    }
                    onClick={() => props.insertField(fieldType)}
                >
                    <div className='w-10 h-10 p-2 ml-1 opacity-70'>
                        {icons.widgets}
                    </div>
                    <div className=''>{fieldType}</div>
                </div>
            ))}
        </div>
    );
}

export default AddFieldPopup;
