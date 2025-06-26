export const color = {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
};
export const background = {
    light: '#f8f9fa',
    dark: '#343a40',
};
export const text = {
    light: '#f8f9fa',
    dark: '#343a40',
};
export const border = {
    light: '#dee2e6',
    dark: '#495057',
};
export const button = {
    primary: {
        backgroundColor: color.primary,
        color: text.light,
    },
    secondary: {
        backgroundColor: color.secondary,
        color: text.light,
    },
    success: {
        backgroundColor: color.success,
        color: text.light,
    },
    danger: {
        backgroundColor: color.danger,
        color: text.light,
    },
    warning: {
        backgroundColor: color.warning,
        color: text.dark,
    },
    info: {
        backgroundColor: color.info,
        color: text.light,
    },
    light: {
        backgroundColor: color.light,
        color: text.dark,
    },
    dark: {
        backgroundColor: color.dark,
        color: text.light,
    },
};



export const g = {
    color: {
        primary: '#007bff',
        secondary: '#6c757d',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#343a40',
    },
    background: {
        light: '#f8f9fa',
        dark: '#343a40',
    },
    text: {
        light: '#f8f9fa',
        dark: '#343a40',
    },
    border: {
        light: '#dee2e6',
        dark: '#495057',
    },
    button: {
        primary: {
            backgroundColor: color.primary,
            color: text.light,
        },
        secondary: {
            backgroundColor: color.secondary,
            color: text.light,
        },
        success: {
            backgroundColor: color.success,
            color: text.light,
        },
        danger: {
            backgroundColor: color.danger,
            color: text.light,
        },
        warning: {
            backgroundColor: color.warning,
            color: text.dark,
        },
        info: {
            backgroundColor: color.info,
            color: text.light,
        },
        light: {
            backgroundColor: color.light,
            color: text.dark,
        },
        dark: {
            backgroundColor: color.dark,
            color: text.light,
        },
    }

}
// export const input = {
//     backgroundColor: background.light,
//     color: text.dark,
//     borderColor: border.light,
//     placeholderColor: '#6c757d',
//     focusBorderColor: color.primary,
//     errorBorderColor: color.danger,
//     disabledBackgroundColor: '#e9ecef',
//     disabledColor: '#6c757d',
//     disabledBorderColor: '#ced4da',
//     borderRadius: 4,
//     padding: 10,
//     fontSize: 16,
//     lineHeight: 1.5,
//     height: 40,
//     boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
//     transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
//     '&:focus': {
//         borderColor: input.focusBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:disabled': {
//         backgroundColor: input.disabledBackgroundColor,
//         color: input.disabledColor,
//         borderColor: input.disabledBorderColor,
//         cursor: 'not-allowed',
//     },
//     '&::placeholder': {
//         color: input.placeholderColor,
//         opacity: 1, // Ensures placeholder is visible
//     },
//     '&:invalid': {
//         borderColor: input.errorBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.danger}, 0.25)`,
//     },
//     '&:valid': {
//         borderColor: input.focusBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:hover': {
//         borderColor: input.focusBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:active': {
//         borderColor: input.focusBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:focus-visible': {
//         outline: 'none',
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:focus-within': {
//         borderColor: input.focusBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover)': {
//         borderColor: input.borderColor,
//         boxShadow: 'none',
//     },
//     '&:not(:disabled):not(:focus):not(:hover):valid': {
//         borderColor: input.focusBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):invalid': {
//         borderColor: input.errorBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.danger}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):placeholder-shown': {
//         borderColor: input.borderColor,
//         boxShadow: 'none',
//     },
//     '&:not(:disabled):not(:focus):not(:hover):valid:placeholder-shown': {
//         borderColor: input.focusBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):invalid:placeholder-shown': {
//         borderColor: input.errorBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.danger}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):valid:focus': {
//         borderColor: input.focusBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):invalid:focus': {
//         borderColor: input.errorBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.danger}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):valid:hover': {
//         borderColor: input.focusBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):invalid:hover': {
//         borderColor: input.errorBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.danger}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):valid:active': {
//         borderColor: input.focusBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):invalid:active': {
//         borderColor: input.errorBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.danger}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):valid:focus-visible': {
//         outline: 'none',
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):invalid:focus-visible': {
//         outline: 'none',
//         boxShadow: `0 0 0 0.2rem rgba(${color.danger}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):valid:focus-within': {
//         borderColor: input.focusBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):invalid:focus-within': {
//         borderColor: input.errorBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.danger}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):valid:not(:placeholder-shown)': {
//         borderColor: input.focusBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.primary}, 0.25)`,
//     },
//     '&:not(:disabled):not(:focus):not(:hover):invalid:not(:placeholder-shown)': {
//         borderColor: input.errorBorderColor,
//         boxShadow: `0 0 0 0.2rem rgba(${color.danger}, 0.25)`,
//     },
// }