import { nameToReactIcon_fi_0 } from "./name-to-react-icon-fi-0";
export function nameToReactIcon_fi(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_fi_0(iconName1) ||
        undefined);
}
