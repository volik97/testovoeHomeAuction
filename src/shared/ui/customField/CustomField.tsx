"use client";
import React from "react";
import { ErrorMessage, useField } from "formik";
import { Radio } from "@/components/ui/radio";
import { Checkbox } from "@/components/ui/checkbox";

interface CustomFieldType {
	name: string;
	placeholder?: string;
	as: React.ElementType; // тип компонента, который мы передаем
	options?: string[]; // для радио
	label: string; // лейбл поля
	className?: string; // опциональная кастомизация
}
function CustomField({
	as: Component,
	options,
	label,
	className,
	...props
}: CustomFieldType) {
	const [field, meta, helpers] = useField(props);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked, value } = e.target;
		if (Component === Checkbox) {
			if (checked) {
				helpers.setValue([...field.value, value]);
			} else {
				helpers.setValue(field.value.filter((v: string) => v !== value));
			}
		} else {
			helpers.setValue(value);
		}
	};
	return (
		<div className={`space-y-1 w-full ${className}`}>
			<label>{label}</label>
			{options ? (
				<Component className={"flex gap-2 flex-col"} {...field} {...props}>
					{options.map((option, index) => (
						<Radio key={index} className={"flex gap-2"} value={option}>
							{option}
						</Radio>
					))}
				</Component>
			) : (
				<Component
					className={"space-x-2"}
					{...field}
					{...props}
					onChange={handleChange}
				/>
			)}
			{meta.touched && meta.error && (
				<div className={"text-red-500 text-sm"}>
					<ErrorMessage name={field.name} />
				</div>
			)}
		</div>
	);
}

export default CustomField;
