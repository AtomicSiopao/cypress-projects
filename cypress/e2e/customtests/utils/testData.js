export const creditCardData = {
    ccNumber: '4242 4242 4242 4242',
    ccExpiry: '12/34',
    ccCVV: '123'
}

export const customerData = [
    {
        type: 'select', selector: '#country', value: 'United Kingdom'
    },
    {
        type: 'select', selector: '#city', value: 'Bristol'
    },
    { type: 'input', selector: '#name', value: 'Firstname Lastname' },
    { type: 'input', selector: '#email', value: 'email@email.com' },
    { type: 'input', selector: '#address', value: '123 Street' },
    { type: 'input', selector: '#address2', value: 'Compound' },
    { type: 'input', selector: '#zip', value: '12345' },
    { type: 'input', selector: '#cc-name', value: 'Firstname Lastname' },
    { type: 'input', selector: '#cc-number', value: creditCardData.ccNumber },
    { type: 'input', selector: '#cc-expiration', value: creditCardData.ccExpiry },
    { type: 'input', selector: '#cc-cvv', value: creditCardData.ccCVV }
];