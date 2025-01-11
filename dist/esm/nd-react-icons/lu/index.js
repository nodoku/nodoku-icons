import { nameToReactIcon_lu_0 } from "./name-to-react-icon-lu-0";
import { nameToReactIcon_lu_1 } from "./name-to-react-icon-lu-1";
export function nameToReactIcon_lu(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_lu_0(iconName1) ||
        nameToReactIcon_lu_1(iconName1) ||
        undefined);
}
