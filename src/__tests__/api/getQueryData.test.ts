import axios from 'axios';
import { API, fetchQuery } from '../../api/getQueryData';

const axiosSpy = jest.spyOn(axios, 'get');
const errorSpy = jest.spyOn(console, 'error');
describe('fetchQuery', () => {
    it('fetches successfully data from an API', async () => {
        const data = {
            data: {
                hits: [
                    {
                        objectID: '1',
                        title: 'a',
                    },
                    {
                        objectID: '2',
                        title: 'b',
                    },
                ],
            },
        };

        axiosSpy.mockImplementationOnce(() => Promise.resolve(data));

        await expect(fetchQuery('react')).resolves.toEqual(data);

        expect(axios.get).toHaveBeenCalledWith(
            `${API}/search?query=react`,
        );
    });

    it('fetches erroneously data from an API', async () => {
        const errorMessage = 'Network Error';

        axiosSpy.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

        await expect(fetchQuery('react')).rejects.toThrow(errorMessage);
    });
});
