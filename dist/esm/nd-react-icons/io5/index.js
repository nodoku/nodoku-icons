import { nameToReactIcon_io5_0 } from "./name-to-react-icon-io5-0";
import { nameToReactIcon_io5_1 } from "./name-to-react-icon-io5-1";
export function nameToReactIcon_io5(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_io5_0(iconName1) ||
        nameToReactIcon_io5_1(iconName1) ||
        undefined);
}
