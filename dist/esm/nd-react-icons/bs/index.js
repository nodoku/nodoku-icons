import { nameToReactIcon_bs_0 } from "./name-to-react-icon-bs-0";
import { nameToReactIcon_bs_1 } from "./name-to-react-icon-bs-1";
import { nameToReactIcon_bs_2 } from "./name-to-react-icon-bs-2";
export function nameToReactIcon_bs(iconName) {
    return (nameToReactIcon_bs_0(iconName) ||
        nameToReactIcon_bs_1(iconName) ||
        nameToReactIcon_bs_2(iconName) ||
        undefined);
}
