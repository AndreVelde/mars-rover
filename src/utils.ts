export function isValidEnumAndReturn<T>(enumType: T, value: unknown): T[keyof T] {
    const result = enumType[value as keyof typeof enumType];

    if (!result) {
        throw new Error(`Invalid value: ${value}`);
    }

    return result;
}
