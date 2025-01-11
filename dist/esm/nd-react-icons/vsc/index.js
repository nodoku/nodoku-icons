import { nameToReactIcon_vsc_0 } from "./name-to-react-icon-vsc-0";
export function nameToReactIcon_vsc(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_vsc_0(iconName1) ||
        undefined);
}
