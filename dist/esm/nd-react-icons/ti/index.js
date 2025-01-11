import { nameToReactIcon_ti_0 } from "./name-to-react-icon-ti-0";
export function nameToReactIcon_ti(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_ti_0(iconName1) ||
        undefined);
}
