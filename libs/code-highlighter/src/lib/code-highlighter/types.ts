// Define your array of strings
export const themesArray = ['github-light', 'github-dark'] as const;
// Create a type from the array elements
export type ThemeType = (typeof themesArray)[number];

// Define your array of strings
export const langsArray = ['angular-ts', 'angular-html', 'shellscript'] as const;
// Create a type from the array elements
export type LangType = (typeof langsArray)[number];
