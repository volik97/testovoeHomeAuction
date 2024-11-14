'use client';
import React from 'react';
import {Formik, Form} from 'formik';
import CustomField from "@/shared/ui/customField/CustomField";
import {Button, Input} from "@chakra-ui/react";
import validationSchema from "@/helpers/yup/formHomeCharacters";

function FormHomeCharacters() {
    return (
        <Formik
            className={'flex flex-col gap-10'}
            initialValues={{
                name: '',
                address: '',
                floor: -1,
                totalFloors: 3,
                square: 0,
                livingSquare: 0,
                kitchenSquare: 0
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                alert(`Отправлено: ${values}`);
            }}
        >
                <Form className={'flex flex-col gap-8 items-center'}>
                    <CustomField
                        label="Название объекта"
                        name="name"
                        as={Input}
                        placeholder="Введите название объекта"
                    />
                    <CustomField
                        label="Адрес"
                        name="address"
                        as={Input}
                        colorPalette={'gray'}
                        placeholder="Введите адрес"
                    />
                    <CustomField
                        label="Этаж"
                        name="floor"
                        colorPalette={'gray'}
                        as={Input}
                        placeholder="-1"
                    />
                    <CustomField
                        label="Количество этажей в доме"
                        name="totalFloors"
                        colorPalette={'gray'}
                        as={Input}
                        placeholder="3"
                    />
                    <CustomField
                        label="Площадь"
                        name="square"
                        colorPalette={'gray'}
                        as={Input}
                        placeholder="0"
                    />
                    <CustomField
                        label="Жилая площадь"
                        name="livingSquare"
                        colorPalette={'gray'}
                        as={Input}
                        placeholder="0"
                    />
                    <CustomField
                        label="Площадь кухни"
                        name="kitchenSquare"
                        colorPalette={'gray'}
                        as={Input}
                        placeholder="0"
                    />
                    <Button className={'border-black w-[200px] rounded-xl px-4 py-6 mt-2 border hover:bg-gray-300'} type="submit">Отправить</Button>
                </Form>
        </Formik>
    );
};

export default FormHomeCharacters;