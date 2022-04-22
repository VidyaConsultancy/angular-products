let store = {}

export const mockLocalStorage = {
    getItem: (key: string) => key in store ? store[key] : null,
    setItem: (key: string, value: string) => store[key] = value,
    clear: () => store = {},
    // removeItem: (key: string) => store[key] = null
}