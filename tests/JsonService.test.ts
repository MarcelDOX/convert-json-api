import { JsonService } from '../src/services/JsonService';
import { JsonContent } from '../src/entities/JsonContent';

describe('JsonService', () => {
    let jsonService: JsonService;

    beforeEach(() => {
        jsonService = new JsonService();
    });

    it('should remove specified values from a flat object', () => {
        const input: JsonContent = { a: '', b: 'valid', c: '#' };
        const expected: JsonContent = { b: 'valid' };
        expect(jsonService.removeValues(input)).toEqual(expected);
    });

    it('should remove specified values from an object with nested objects', () => {
        const input: JsonContent = {
            a: '',
            b: { c: '#', d: 'valid' },
            e: 'valid',
        };
        const expected: JsonContent = {
            b: { d: 'valid' },
            e: 'valid',
        };
        expect(jsonService.removeValues(input)).toEqual(expected);
    });

    it('should remove specified values from an array', () => {
        const input: JsonContent = ['', 'valid', '#'];
        const expected: JsonContent = ['valid'];
        expect(jsonService.removeValues(input)).toEqual(expected);
    });
});
