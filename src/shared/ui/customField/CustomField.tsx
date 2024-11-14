'use client'
import React, {Fragment} from 'react';
import {ErrorMessage, useField} from "formik";
import {Radio, RadioGroup} from "@/components/ui/radio";

type CustomFieldType = {
    name: string;
    as: React.ElementType; // тип компонента, который мы передаем
    options?: string[]; // для RadioGroup
    label: string; // лейбл поля
    [key: string]: never; // доп пропсы
};
function CustomField({ as: Component, options, label, ...props }: CustomFieldType) {
    const [field, meta] = useField(props);
    return (
        <div className={'space-y-2 w-full'}>
            <label>{label}</label>
            {options ? (
                <div className={'relative'}>
                    {/* будет работать и с Select*/}
                    <Component {...field} {...props}>
                        {options.map((option,index) => (
                            <Fragment key={index}>
                                {Component === RadioGroup ? (
                                    <Radio value={option}>{option}</Radio>
                                ) : (
                                    <option value={option}>{option}</option>
                                )}
                            </Fragment>
                        ))}
                    </Component>
                    <ErrorMessage className={'absolute'} name={field.name} />
                </div>
            ) : (
                <div className={'relative'}>
                    <Component {...field} {...props}/>
                    {meta.touched && meta.error && <div className={'absolute text-red-500 -mb-2 text-sm'}><ErrorMessage name={field.name}/></div>}
                </div>
            )}
        </div>
    )
}

export default CustomField;