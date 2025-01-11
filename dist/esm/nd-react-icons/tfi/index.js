import { nameToReactIcon_tfi_0 } from "./name-to-react-icon-tfi-0";
export function nameToReactIcon_tfi(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_tfi_0(iconName1) ||
        undefined);
}
