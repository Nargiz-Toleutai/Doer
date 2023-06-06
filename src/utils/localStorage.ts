export const getNumberFromLocalStorage = (key: string): number | null => {
    const value = window.localStorage.getItem(key);
    return value === null ? null : Number(value);
};