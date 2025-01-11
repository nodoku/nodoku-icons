import type {IconType} from "react-icons";
import { nameToReactIcon_bs_0 } from "./name-to-react-icon-bs-0";
import { nameToReactIcon_bs_1 } from "./name-to-react-icon-bs-1";
import { nameToReactIcon_bs_2 } from "./name-to-react-icon-bs-2";

export function nameToReactIcon_bs(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_bs_0(iconName1) ||
        nameToReactIcon_bs_1(iconName1) ||
        nameToReactIcon_bs_2(iconName1) ||
        undefined
    );

}