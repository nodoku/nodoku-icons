import { nameToReactIcon_sl_0 } from "./name-to-react-icon-sl-0";
export function nameToReactIcon_sl(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_sl_0(iconName1) ||
        undefined);
}
