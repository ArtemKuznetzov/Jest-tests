import {useSettings} from '../useSettings';
import {renderHookWithProviders} from '../../utils/renderWithProviders';
import {Theme} from "providers/types";

describe('useSettings', () => {
    it('should return showSpecialFeature as true when theme is dark', () => {
        const { result } = renderHookWithProviders(useSettings, {
            theme: Theme.DARK
        });

        expect(result.current.showSpecialFeature).toBe(true);
    });

    it('should return showSpecialFeature as false when theme is light', () => {
        const { result } = renderHookWithProviders(useSettings);

        expect(result.current.showSpecialFeature).toBe(false);
    });
});