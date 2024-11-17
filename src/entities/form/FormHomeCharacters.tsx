"use client";
import React from "react";
import { Formik, Form } from "formik";
import CustomField from "@/shared/ui/customField/CustomField";
import { Button, Input } from "@chakra-ui/react";
import validationSchema from "@/helpers/yup/formHomeCharacters";
import IFormHomeCharacters from "@/types/form/formHomeCharacters";

const initialValues: IFormHomeCharacters = {
	name: "",
	address: "",
	floor: -1,
	totalFloors: 3,
	square: 0,
	livingSquare: 0,
	kitchenSquare: 0,
};

function FormHomeCharacters() {
	return (
		<Formik
			className={"flex flex-col gap-10"}
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values: IFormHomeCharacters, { resetForm }) => {
				console.log(values);
				resetForm();
			}}
		>
			<Form className={"flex flex-col gap-4 items-center"}>
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
					placeholder="Введите адрес"
				/>
				<CustomField label="Этаж" name="floor" as={Input} placeholder="-1" />
				<CustomField
					label="Количество этажей в доме"
					name="totalFloors"
					as={Input}
					placeholder="3"
				/>
				<CustomField label="Площадь" name="square" as={Input} placeholder="0" />
				<CustomField
					label="Жилая площадь"
					name="livingSquare"
					as={Input}
					placeholder="0"
				/>
				<CustomField
					label="Площадь кухни"
					name="kitchenSquare"
					as={Input}
					placeholder="0"
				/>
				<Button
					className={
						"border-black w-[200px] rounded-xl px-4 py-6 mt-2 border hover:bg-gray-300"
					}
					type="submit"
				>
					Отправить
				</Button>
			</Form>
		</Formik>
	);
}

export default FormHomeCharacters;
