export const userLogin ={
    email: 'test@user.com',
    password: 'qwerty'
}

export const userData = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'first@lastname.com',
    address: '1234 Main St.',
    address2: 'Apt. 1',
    city: 'Bristol',
    country: 'United Kingdom',
    zip: '12345'
}

export const creditCardData = {
    ccName: userData.firstName + " " + userData.lastName,
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
    { type: 'input', selector: '#name', value: userData.firstName + ' ' + userData.lastName },
    { type: 'input', selector: '#email', value: userData.email },
    { type: 'input', selector: '#address', value: userData.address },
    { type: 'input', selector: '#address2', value: userData.address2 },
    { type: 'input', selector: '#zip', value: userData.zip },
    { type: 'input', selector: '#cc-name', value: userData.firstName + ' ' + userData.lastName },
    { type: 'input', selector: '#cc-number', value: creditCardData.ccNumber },
    { type: 'input', selector: '#cc-expiration', value: creditCardData.ccExpiry },
    { type: 'input', selector: '#cc-cvv', value: creditCardData.ccCVV }
];