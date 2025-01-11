import type {IconType} from "react-icons";
import { nameToReactIcon_si_0 } from "./name-to-react-icon-si-0";
import { nameToReactIcon_si_1 } from "./name-to-react-icon-si-1";
import { nameToReactIcon_si_2 } from "./name-to-react-icon-si-2";
import { nameToReactIcon_si_3 } from "./name-to-react-icon-si-3";

export function nameToReactIcon_si(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_si_0(iconName1) ||
        nameToReactIcon_si_1(iconName1) ||
        nameToReactIcon_si_2(iconName1) ||
        nameToReactIcon_si_3(iconName1) ||
        undefined
    );

}