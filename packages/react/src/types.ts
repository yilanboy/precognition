import { Config, NamedInputEvent } from 'laravel-precognition'

export interface Form<Data extends Record<string, unknown>> {
    processing: boolean,
    validating: boolean,
    touched(name: keyof Data): boolean,
    data: Data,
    setData(key: keyof Data, value: unknown): Form<Data>,
    errors: Partial<Record<keyof Data, string>>,
    hasErrors: boolean,
    valid(name: keyof Data): boolean,
    invalid(name: keyof Data): boolean,
    validate(name: keyof Data|NamedInputEvent): Form<Data>,
    setErrors(errors: Partial<Record<keyof Data, string|string[]>>): Form<Data>
    setValidationTimeout(duration: number): Form<Data>,
    submit(config?: Config): Promise<unknown>,
    reset(...names: (keyof Partial<Data>)[]): Form<Data>,
}