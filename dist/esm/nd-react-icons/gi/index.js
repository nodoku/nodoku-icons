import { nameToReactIcon_gi_0 } from "./name-to-react-icon-gi-0";
import { nameToReactIcon_gi_1 } from "./name-to-react-icon-gi-1";
import { nameToReactIcon_gi_2 } from "./name-to-react-icon-gi-2";
import { nameToReactIcon_gi_3 } from "./name-to-react-icon-gi-3";
import { nameToReactIcon_gi_4 } from "./name-to-react-icon-gi-4";
export function nameToReactIcon_gi(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_gi_0(iconName1) ||
        nameToReactIcon_gi_1(iconName1) ||
        nameToReactIcon_gi_2(iconName1) ||
        nameToReactIcon_gi_3(iconName1) ||
        nameToReactIcon_gi_4(iconName1) ||
        undefined);
}
