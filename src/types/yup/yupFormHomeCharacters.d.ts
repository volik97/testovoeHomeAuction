// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { NumberSchema } from 'yup';

declare module 'yup' {
    interface NumberSchema {
        moreThanSumOfFields(fields: string[], message?: string): this;
        sanitize(): this;
    }
}