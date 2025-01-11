import { nameToReactIcon_ri_0 } from "./name-to-react-icon-ri-0";
import { nameToReactIcon_ri_1 } from "./name-to-react-icon-ri-1";
import { nameToReactIcon_ri_2 } from "./name-to-react-icon-ri-2";
import { nameToReactIcon_ri_3 } from "./name-to-react-icon-ri-3";
export function nameToReactIcon_ri(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_ri_0(iconName1) ||
        nameToReactIcon_ri_1(iconName1) ||
        nameToReactIcon_ri_2(iconName1) ||
        nameToReactIcon_ri_3(iconName1) ||
        undefined);
}
