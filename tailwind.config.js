const defaultColors = require("tailwindcss/colors");
module.exports = {
    darkMode: 'class',
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./widgets/**/*.{js,ts,jsx,tsx}", "./views/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
        }, screens: {
            sm: '480px', md: '768px', lg: '976px', xl: '1440px'
        }, colors: {
            primaryLight: "#00629f",
            primaryDark: "#9acbff",
            onPrimaryLight: "#ffffff",
            onPrimaryDark: "#003355",
            primaryContainerLight: "#eef6ff",
            primaryContainerDark: "#004a79",
            onPrimaryContainerLight: "#000000",
            onPrimaryContainerDark: "#d0e4ff",
            secondaryLight: "#526070",
            secondaryDark: "#bac8da",
            onSecondaryLight: "#ffffff",
            onSecondaryDark: "#243240",
            secondaryContainerLight: "#d6e4f7",
            secondaryContainerDark: "#3b4857",
            onSecondaryContainerLight: "#0f1d2a",
            onSecondaryContainerDark: "#d6e4f7",
            errorLight: "#ba1a1a",
            errorDark: "#ffb4ab",
            onErrorLight: "#ffffff",
            onErrorDark: "#690005",
            errorContainerLight: "#ffdad6",
            errorContainerDark: "#93000a",
            onErrorContainerLight: "#410002",
            onErrorContainerDark: "#ffdad6",
            backgroundLight: "#ffffff",
            backgroundDark: "#1b1b1e",
            onBackgroundLight: "#1a1c1e",
            onBackgroundDark: "#e2e2e6",
            surfaceLight: "#fdfbff",
            surfaceDark: "#202023",
            onSurfaceLight: "#004ec4",
            onSurfaceDark: "#e2e2e6",
            outlineLight: "#73777f",
            outlineDark: "#8c9199",
            codeCommentLight: "#2E7D32",
            codeCommentDark: "#2E7D32",
            codeLight: "#BF360C",
            codeDark: "#BF360C",
            bracketsLight: "#1B5E20",
            bracketsDark: "#1B5E20",
            variablesLight: "#311B92",
            variablesDark: "#9575CD",
            instagramColor: "#e95950",
            twitterColor: "#1DA1F2",
            linkedInColor: "#0077b5",
            gitHubColor: "#171515",
            defaultColors,
        }, extend: {},
    },
    plugins: [],
}
