import type {IconType} from "react-icons";
import { nameToReactIcon_lia_0 } from "./name-to-react-icon-lia-0";
import { nameToReactIcon_lia_1 } from "./name-to-react-icon-lia-1";

export function nameToReactIcon_lia(iconName: string): IconType | undefined {

    return (
        nameToReactIcon_lia_0(iconName) ||
        nameToReactIcon_lia_1(iconName) ||
        undefined
    );

}