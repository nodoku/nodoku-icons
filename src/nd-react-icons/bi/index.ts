import type {IconType} from "react-icons";
import { nameToReactIcon_bi_0 } from "./name-to-react-icon-bi-0";
import { nameToReactIcon_bi_1 } from "./name-to-react-icon-bi-1";

export function nameToReactIcon_bi(iconName: string): IconType | undefined {

    return (
        nameToReactIcon_bi_0(iconName) ||
        nameToReactIcon_bi_1(iconName) ||
        undefined
    );

}