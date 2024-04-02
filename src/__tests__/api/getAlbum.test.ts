import axios from 'axios';
import { fetchAlbum } from 'api/getAlbums';

describe('fetch albums', () => {
    it('mock axios get function', async () => {
        expect.assertions(1);
        const album = {
            userId: 1,
            id: 2,
            title: 'sunt qui excepturi placeat culpa',
        };
        const payload = { data: album };
        // Now mock axios get method
        axios.get = jest.fn().mockResolvedValue(payload);
        await expect(fetchAlbum()).resolves.toEqual(album);
    });
});
