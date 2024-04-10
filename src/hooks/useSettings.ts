import {useTheme} from "providers/useTheme";
import {Theme} from "providers/types";

const useSettings = () => {
    const {theme} = useTheme()

    return {
        showSpecialFeature: theme === Theme.DARK
    }
}

export {useSettings}