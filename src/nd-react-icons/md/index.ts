import type {IconType} from "react-icons";
import { nameToReactIcon_md_0 } from "./name-to-react-icon-md-0";
import { nameToReactIcon_md_1 } from "./name-to-react-icon-md-1";
import { nameToReactIcon_md_2 } from "./name-to-react-icon-md-2";
import { nameToReactIcon_md_3 } from "./name-to-react-icon-md-3";
import { nameToReactIcon_md_4 } from "./name-to-react-icon-md-4";

export function nameToReactIcon_md(iconName: string): IconType | undefined {

    return (
        nameToReactIcon_md_0(iconName) ||
        nameToReactIcon_md_1(iconName) ||
        nameToReactIcon_md_2(iconName) ||
        nameToReactIcon_md_3(iconName) ||
        nameToReactIcon_md_4(iconName) ||
        undefined
    );

}