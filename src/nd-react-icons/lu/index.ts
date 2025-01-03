import type {IconType} from "react-icons";
import { nameToReactIcon_lu_0 } from "./name-to-react-icon-lu-0";
import { nameToReactIcon_lu_1 } from "./name-to-react-icon-lu-1";

export function nameToReactIcon_lu(iconName: string): IconType | undefined {

    return (
        nameToReactIcon_lu_0(iconName) ||
        nameToReactIcon_lu_1(iconName) ||
        undefined
    );

}