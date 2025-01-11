import { nameToReactIcon_im_0 } from "./name-to-react-icon-im-0";
export function nameToReactIcon_im(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_im_0(iconName1) ||
        undefined);
}
