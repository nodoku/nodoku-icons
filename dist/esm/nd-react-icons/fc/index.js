import { nameToReactIcon_fc_0 } from "./name-to-react-icon-fc-0";
export function nameToReactIcon_fc(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_fc_0(iconName1) ||
        undefined);
}
