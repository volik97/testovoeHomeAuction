'use client'
import React from 'react';
import {ErrorMessage, useField} from "formik";
import {Radio, RadioGroup} from "@/components/ui/radio";

type CustomFieldType = {
    name: string;
    placeholder?: string;
    as: React.ElementType; // тип компонента, который мы передаем
    options?: string[]; // для радио и селект
    label: string; // лейбл поля
    [key: string]: never; // доп пропсы
    className?: string
};
function CustomField({ as: Component, options, label, className, ...props }: CustomFieldType) {
    const [field, meta] = useField(props);
    return (
        <div className={`space-y-1 w-full ${className}`}>
            <label>{label}</label>
            {/* будет работать и с селектом*/}
            {options ?
                    ( <Component className={'flex gap-2 flex-col'} {...field} {...props}>
                        {options.map((option,index) => (
                                Component === RadioGroup ? (
                                    <Radio key={index} className={'flex gap-2'} value={option}>{option}</Radio>
                                ) : (
                                    <option key={index} value={option}>{option}</option>
                                )
                        ))}
                    </Component>) : (
                    <Component className={'space-x-2'} {...field} {...props}/>
            )}
            {meta.touched && meta.error && <div className={'text-red-500 text-sm'}><ErrorMessage name={field.name}/></div>}
        </div>
    )
}

export default CustomField;