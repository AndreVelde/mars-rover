export function isValidEnumAndReturn<T extends object>(enumType: T, value: unknown): T[keyof T] {
    const result = Object.values(enumType)
        .find((x) => x === value);

    if (!result) {
        throw new Error(`Invalid value: ${value}`);
    }

    return result as T[keyof T];
}
