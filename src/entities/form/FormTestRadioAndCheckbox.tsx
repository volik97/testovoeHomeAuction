'use client'
import React from 'react';
import {Form, Formik} from "formik";
import CustomField from "@/shared/ui/customField/CustomField";
import {Checkbox} from "@/components/ui/checkbox";
import {RadioGroup} from "@/components/ui/radio";
import {Button} from "@chakra-ui/react";

function FormTestRadioAndCheckbox() {
    return (
        <Formik initialValues={{checkbox: undefined, radiogroup: undefined}} onSubmit={(values)=>{console.log(values)}}>
            <Form>
                <CustomField name={'checkbox'} as={Checkbox} label={'Чекбокс'}/>
                <CustomField name={'radiogroup'} as={RadioGroup} label={'Радиогрупп'} options={['1', '2']}/>
                <Button type={'submit'}/>
            </Form>
        </Formik>
    );
}

export default FormTestRadioAndCheckbox;