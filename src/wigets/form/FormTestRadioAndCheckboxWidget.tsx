import React from 'react';
import FormTestRadioAndCheckbox from "@/entities/form/FormTestRadioAndCheckbox";
import {Text} from "@chakra-ui/react";

function FormTestRadioAndCheckboxWidget() {
    return (
        <div className={'flex flex-col items-center gap-4'}>
            <Text>1. Придумать решение, при помощи которого можно будет привязывать инпуты к контексту взаимодействия с Formik. Протестировать работу необходимо на следующих компонентах: Radio, CheckBox.</Text>
            <Text>Реализовал универсальный компонент с хуком useField для привязки полей к контексу Formik</Text>
            <div className={'p-8 border w-full max-w-[700px] border-black rounded-xl'}>
                <FormTestRadioAndCheckbox/>
            </div>
        </div>
    );
}

export default FormTestRadioAndCheckboxWidget;