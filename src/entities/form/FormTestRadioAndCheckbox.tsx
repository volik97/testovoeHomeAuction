'use client'
import React, {useState} from 'react';
import {Form, Formik} from "formik";
import CustomField from "@/shared/ui/customField/CustomField";
import {Checkbox} from "@/components/ui/checkbox";
import {RadioGroup} from "@/components/ui/radio";
import {Button} from "@/components/ui/button";
import IFormTestRadioAndCheckbox from "@/types/form/formTestRadioAndCheckbox";
import * as Yup from 'yup'

const initialValues:IFormTestRadioAndCheckbox = {checkbox: undefined, radiogroup: undefined}

const validationSchema = Yup.object({
    checkbox: Yup.array().min(1, 'Необходимо выбрать вариант').required('Обязательное поле'),
    radiogroup: Yup.string().required('Обязательное поле'),
});
function FormTestRadioAndCheckbox() {
    // небольшой костыль
    // Не сбрасывались значения с формы после submit, добавил key, что бы форма перерендеривалась и значения сбрасывались
    const [formKey, setFormKey] = useState(0);

    return (
        <Formik
            key={formKey}
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={true}
            validateOnBlur={true}
            onSubmit={(values) => {
                console.log(values);
                setFormKey(prevKey => prevKey + 1); // Обновляем ключ
            }}
        >
            <Form className={'flex flex-col gap-4 items-center'}>
                <CustomField name={'checkbox'} as={Checkbox} label={'Готовы приступить к работе?'}/>
                <CustomField name={'radiogroup'} as={RadioGroup} label={'Взять на работу?'} options={['Да', 'Конечно, да']}/>
                <Button type={'submit'} className={'border-black w-[200px] rounded-xl px-4 py-6 mt-2 border hover:bg-gray-300'}>Отправить</Button>
            </Form>
        </Formik>
    );
}

export default FormTestRadioAndCheckbox;