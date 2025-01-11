import type {IconType} from "react-icons";
import { nameToReactIcon_fa_0 } from "./name-to-react-icon-fa-0";
import { nameToReactIcon_fa_1 } from "./name-to-react-icon-fa-1";

export function nameToReactIcon_fa(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_fa_0(iconName1) ||
        nameToReactIcon_fa_1(iconName1) ||
        undefined
    );

}