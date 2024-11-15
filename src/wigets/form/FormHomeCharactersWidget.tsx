import React from 'react';
import FormHomeCharacters from "@/entities/form/FormHomeCharacters";
import {Text} from "@chakra-ui/react";
function FormHomeCharactersWidget() {
    return (
        <div className={'flex flex-col items-center gap-4'}>
            <Text>2. На основе предыдущего задания необходимо построить форму, для валидации использовать связку Formik + Yup. UI-кит можно подобрать самим. Например, ChakraUI
            </Text>
            <Text>Выполены все требования по валидации + опицональное решение по добавлению метода в Formik</Text>
        <div className={'p-8 border w-full max-w-[700px] border-black rounded-xl'}>
            <FormHomeCharacters/>
        </div></div>
    );
}

export default FormHomeCharactersWidget;