import { nameToReactIcon_gr_0 } from "./name-to-react-icon-gr-0";
export function nameToReactIcon_gr(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_gr_0(iconName1) ||
        undefined);
}
