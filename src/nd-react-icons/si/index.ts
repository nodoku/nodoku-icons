import type {IconType} from "react-icons";
import { nameToReactIcon_si_0 } from "./name-to-react-icon-si-0";
import { nameToReactIcon_si_1 } from "./name-to-react-icon-si-1";
import { nameToReactIcon_si_2 } from "./name-to-react-icon-si-2";
import { nameToReactIcon_si_3 } from "./name-to-react-icon-si-3";

export function nameToReactIcon_si(iconName: string): IconType | undefined {

    return (
        nameToReactIcon_si_0(iconName) ||
        nameToReactIcon_si_1(iconName) ||
        nameToReactIcon_si_2(iconName) ||
        nameToReactIcon_si_3(iconName) ||
        undefined
    );

}