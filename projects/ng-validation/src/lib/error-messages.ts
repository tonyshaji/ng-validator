export const ERROR_MESSAGE = {
    // error: {
    required: (name: string, {...args}): string => `${name} is required`,
    minlength: (name: string, {...args}): string => `${name} cannot be less than ${args?.["requiredLength"]} characters`,
    maxlength: (name: string, {...args}): string => `${name} cannot be more than ${args?.["requiredLength"]} characters`,
    min: (name: string, {...args},): string => `${name} cannot be less than ${args?.["min"]}`,
    max: (name: string, {...args},): string => `${name} cannot be more than ${args?.["max"]}`,
    email: (name: string, {...args}): string => `${name} is not a valid email`,
    isNotAlphabet: (name: string, {...args}): string => `${name} should be alphabets`,
    isNotSmallCase: (name: string, {...args}): string => `${name} should be smallcase charecters`,
    isNotLargeCase: (name: string, {...args}): string => `${name} should be largecase charecters`,
    isNotNumeric: (name: string, {...args}): string => `${name} should be number`,
    isNotCode: (name: string, {...args}): string => `${name} should be alphanumeric`,
    isUrl: (name: string, {...args}): string => `${name} should be url`,
    isColourCode: (name: string, {...args}): string => `${name} should be color`,
    isGeoLocation: (name: string, {...args}): string => `${name} should be geo location`,
    ipv4: (name: string, {...args}): string => `${name} should be ipv4`,
    ipv6: (name: string, {...args}): string => `${name} should be ipv6`,
    // }
};