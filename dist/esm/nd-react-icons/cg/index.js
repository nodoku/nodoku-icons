import { nameToReactIcon_cg_0 } from "./name-to-react-icon-cg-0";
export function nameToReactIcon_cg(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_cg_0(iconName1) ||
        undefined);
}
