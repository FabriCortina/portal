import { createTheme } from "@mui/material/styles";

// Definimos los colores principales que matchean bastante bien con el template Spruko CRM
const lightPalette = {
  mode: "light" as const,
  primary: {
    main: "#4f46e5", // Indigo 600 (Tailwind Indigo similar al Spruko Template)
  },
  secondary: {
    main: "#6366f1", // Indigo 500
  },
  background: {
    default: "#f9fafb", // Tailwind Gray 50
    paper: "#ffffff",  // Blanco para tarjetas
  },
  text: {
    primary: "#111827", // Gray 900
    secondary: "#6b7280", // Gray 500
  },
};

const darkPalette = {
  mode: "dark" as const,
  primary: {
    main: "#6366f1", // Indigo claro
  },
  secondary: {
    main: "#818cf8", // Indigo 400
  },
  background: {
    default: "#1f2937", // Gray 800
    paper: "#374151",   // Gray 700
  },
  text: {
    primary: "#f9fafb", // Gray 50
    secondary: "#9ca3af", // Gray 400
  },
};

export const theme = (mode: "light" | "dark") => createTheme({
  palette: mode === "light" ? lightPalette : darkPalette,
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Similar a botones del template Spruko
          textTransform: 'none', // No todo en mayúsculas
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
  },
});
