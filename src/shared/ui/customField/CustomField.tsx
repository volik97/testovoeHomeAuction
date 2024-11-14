import React, {Fragment} from 'react';
import {ErrorMessage, useField} from "formik";
import {Radio, RadioGroup} from "@/components/ui/radio";

type CustomFieldProps = {
    name: string;
    as: React.ElementType; // Тип компонента, который мы передаем
    options?: string[]; // Для RadioGroup или Select
    label: string; // Метка поля
    [key: string]: never; // Дополнительные пропсы
};
function UniversalField({ as: Component, options, ...props }: CustomFieldProps) {
    const [field] = useField(props);

    return options ? (
        // Если есть опции, создаем RadioGroup или Select
        <>
            <Component {...field} {...props}>
                {options.map((option) => (
                    <Fragment key={option}>
                        {Component === RadioGroup ? (
                            <Radio value={option}>{option}</Radio>
                        ) : (
                            <option value={option}>{option}</option>
                        )}
                    </Fragment>
                ))}
            </Component>
            <ErrorMessage name={field.name} />
        </>
    ) : (
        // Если нет опций, просто рендерим переданный компонент
        <>
            <Component {...field} {...props} />
            <ErrorMessage name={field.name} />
        </>
    );
}

export default UniversalField;