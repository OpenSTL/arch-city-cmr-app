import { headers, url } from './util';

describe('api.util', () => {
    describe('headers', () => {
        it('should generate minimum request headers', () => {
            expect(
                headers('mytoken')
            ).toEqual({
                headers: {
                    Authorization: 'Bearer mytoken',
                },
            });
        });
    });
    describe('url', () => {
        it('should prefix endpoint with base url', () => {
            // http://test/ comes from .env.test
            expect(url('endpoint')).toEqual('http://test/endpoint');
        });
    });
});
