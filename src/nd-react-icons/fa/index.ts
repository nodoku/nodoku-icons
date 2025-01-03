import type {IconType} from "react-icons";
import { nameToReactIcon_fa_0 } from "./name-to-react-icon-fa-0";
import { nameToReactIcon_fa_1 } from "./name-to-react-icon-fa-1";

export function nameToReactIcon_fa(iconName: string): IconType | undefined {

    return (
        nameToReactIcon_fa_0(iconName) ||
        nameToReactIcon_fa_1(iconName) ||
        undefined
    );

}