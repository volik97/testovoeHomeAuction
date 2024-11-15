import * as Yup from "yup";
import {Reference} from "yup";

Yup.setLocale({
    mixed: {
        required: 'Поле обязательно для заполнения',
    },
    number: {
        min: ({ min }) => `Значение не может быть меньше ${min}`,
        max: ({ max }) => `Значение не может быть больше ${max}`,
    },
});
Yup.addMethod(Yup.number, 'moreThanSumOfFields', function (fields: string[]) {
    return this.test(
        'more-than-sum-of-fields',
        `Общая площадь должна быть больше суммы жилой площади и площади кухни`,
        function (value) {
            const { parent } = this;
            const sum = fields.reduce((acc, fieldName) => {
                const fieldValue = parent[fieldName] || 0;
                return acc + fieldValue;
            }, 0);
            return value > sum;
        }
    );
});

const validationSchema = Yup.object({
    name: Yup.string().required(),
    address: Yup.string().required(),
    floor: Yup.number()
        .required()
        .min(-1)
        .max(Yup.ref<number>('totalFloors') as Reference<number>),
    totalFloors: Yup.number()
        .required()
        .min(3)
        .max(200),
    square: Yup.number()
        .required()
        .min(0)
        .max(400)
        .moreThanSumOfFields(['kitchenSquare', 'livingSquare']),
    livingSquare: Yup.number().required().min(0),
    kitchenSquare: Yup.number().required().min(0),
});
export default validationSchema;