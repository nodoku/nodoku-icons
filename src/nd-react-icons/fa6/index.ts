import type {IconType} from "react-icons";
import { nameToReactIcon_fa6_0 } from "./name-to-react-icon-fa6-0";
import { nameToReactIcon_fa6_1 } from "./name-to-react-icon-fa6-1";
import { nameToReactIcon_fa6_2 } from "./name-to-react-icon-fa6-2";

export function nameToReactIcon_fa6(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_fa6_0(iconName1) ||
        nameToReactIcon_fa6_1(iconName1) ||
        nameToReactIcon_fa6_2(iconName1) ||
        undefined
    );

}