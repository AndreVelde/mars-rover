import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: false,
        environment: 'node',
        passWithNoTests: true,
        coverage: {
            provider: 'istanbul',
            enabled: true,
            include: ['src/**/*.ts'],
            exclude: [...configDefaults.exclude],
            clean: true,
            reporter: ['text', 'lcov'],
        },
        exclude: [...configDefaults.exclude, '**/*.js'],
        include: ['**/*.test.ts'],
    },
});
