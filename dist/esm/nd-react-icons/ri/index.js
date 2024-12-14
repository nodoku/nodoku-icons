import { nameToReactIcon_ri_0 } from "./name-to-react-icon-ri-0";
import { nameToReactIcon_ri_1 } from "./name-to-react-icon-ri-1";
import { nameToReactIcon_ri_2 } from "./name-to-react-icon-ri-2";
import { nameToReactIcon_ri_3 } from "./name-to-react-icon-ri-3";
export function nameToReactIcon_ri(iconName) {
    return (nameToReactIcon_ri_0(iconName) ||
        nameToReactIcon_ri_1(iconName) ||
        nameToReactIcon_ri_2(iconName) ||
        nameToReactIcon_ri_3(iconName) ||
        undefined);
}
