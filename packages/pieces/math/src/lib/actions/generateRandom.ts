import { PieceAuth, Property, Validators, createAction } from "@activepieces/pieces-framework";

export const generateRandom = createAction({
    name: 'generateRandom_math',
    auth: PieceAuth.None(),
    displayName: 'Generate Random Number',
    description: 'Generate random number between two numbers (inclusive)',
    props: {
        first_number: Property.Number({
            displayName: 'First Number',
            description: undefined,
            required: true,
            validators: [Validators.number]
        }),
        second_number: Property.Number({
            displayName:  'Second Number',
            description: undefined,
            required: true,
            validators: [Validators.number]
        })
    },
    async run(context) {
        const min = context.propsValue['first_number'];
        const max = context.propsValue['second_number'];
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});