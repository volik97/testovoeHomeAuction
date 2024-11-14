import { NumberSchema } from 'yup';

declare module 'yup' {
    interface NumberSchema {
        moreThanSumOfFields(fields: string[], message?: string): this;
        sanitize(): this;
    }
}