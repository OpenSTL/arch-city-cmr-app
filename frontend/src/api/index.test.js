const api = require('./index');

describe('api', () => {
    const mockSuccessResponse = {};
    let fetchSpy;
    beforeAll(() => {
        // mock fetch; we only care about the parameters sent to fetch
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        });
        fetchSpy = jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);
    });
    afterEach(() => {
        fetchSpy.mockClear();
    });
    afterAll(() => {
        fetchSpy.mockRestore();
    });

    function expectFetchCalledForUrl(url) {
        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch.mock.calls[0][0]).toEqual(url);
    }

    describe('createApplicant', () => {
        it('should POST to applicants/add and return result', async () => {
            const result = await api.createApplicant({}, 'mytoken');
            expectFetchCalledForUrl('http://test/applicants/add');
            expect(global.fetch.mock.calls[0][1]).toMatchSnapshot();
            expect(result).toEqual(mockSuccessResponse);
        });
    });

});
