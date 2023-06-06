export const getBase64Svg = (src: string): string => `data:image/svg+xml;base64,${btoa(src)}`;

