import { nameToReactIcon_lia_0 } from "./name-to-react-icon-lia-0";
import { nameToReactIcon_lia_1 } from "./name-to-react-icon-lia-1";
export function nameToReactIcon_lia(iconName) {
    return (nameToReactIcon_lia_0(iconName) ||
        nameToReactIcon_lia_1(iconName) ||
        undefined);
}
