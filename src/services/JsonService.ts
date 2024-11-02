import { JsonContent } from "../entities/JsonContent";

export class JsonService {
    readonly valuesToRemove: Set<string> = new Set(['', '#']);

    removeValues(object: JsonContent): JsonContent {
        if (Array.isArray(object)) {
            return this.removeValuesFromArray(object);
        }

        if (typeof object === 'object' && object !== null) {
            return this.removeValuesFromObject(object);
        }

        return object;
    }

    private hasValueToRemove(value: any): boolean {
        if (typeof value === 'string') {
            return this.valuesToRemove.has(value);
        }

        return false;
    }

    private removeValuesFromArray(object: any[]): any[] {
        return object.filter(item => !this.hasValueToRemove(item));
    }

    private removeValuesFromObject(object: JsonContent): JsonContent {
        const result = {} as JsonContent;

        for (const key in object) {
            const value = this.removeValues(object[key]);

            if (this.hasValueToRemove(value)) {
                continue;
            }

            result[key] = value;
        }

        return result;
    }
}
  