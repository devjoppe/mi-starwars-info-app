import { createTheme } from '@mui/material/styles';

// This is my App Theme file to change and overrides styles in the MUI framework.

export const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#041449',
                    boxShadow: 'none',
                    color: 'white',
                    padding: '18px'
                },
            },
        },
        MuiBreadcrumbs: {
            styleOverrides: {
                root: {
                    color: 'white',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "#f45957",
                    color: '#461f1d',
                    padding: '8px 16px',
                    fontSize: '14px',
                    fontWeight: 700,
                    [`&:hover`]: {
                        color: '#461f1d',
                        textDecoration: 'underline',
                        backgroundColor: "#f45957",
                    },
                },
            },
            variants: [
                {
                    props: { type: 'submit' },
                    style: {
                        backgroundColor: '#041449',
                        color: '#b5b5b5',
                        padding: '0 24px'
                    },
                },
            ],
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& input[type="text"]': {
                        backgroundColor: '#041449',
                        color: 'white',
                        marginRight: '8px'
                    },
                },
            },
        },
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f45957',
                    fontWeight: 700,
                    borderRadius: '4px',
                    [`&.Mui-selected`]: {
                        color: '#f45957',
                    },
                    [`&:hover`]: {
                        backgroundColor: "#f45957",
                    },
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    color: '#dd5e56',
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    color: '#f45957',
                    borderColor: '#f45957',
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: '#b5b5b5',
                },
            },
        },
    },
    typography: {
        fontFamily: 'Almarai',
        fontSize: 16,
        fontWeightRegular: 300,
        body1: {
          color: 'white'
        },
        h2: {
            fontFamily: 'Teko',
        },
        h3: {
            fontFamily: 'Teko',
            fontSize: '2.3rem',
            fontWeightRegular: 500,
            marginBottom: '16px',
        },
    },
});