import type {IconType} from "react-icons";
import { nameToReactIcon_md_0 } from "./name-to-react-icon-md-0";
import { nameToReactIcon_md_1 } from "./name-to-react-icon-md-1";
import { nameToReactIcon_md_2 } from "./name-to-react-icon-md-2";
import { nameToReactIcon_md_3 } from "./name-to-react-icon-md-3";
import { nameToReactIcon_md_4 } from "./name-to-react-icon-md-4";

export async function nameToReactIcon_md(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_md_0(iconName) ||
        await nameToReactIcon_md_1(iconName) ||
        await nameToReactIcon_md_2(iconName) ||
        await nameToReactIcon_md_3(iconName) ||
        await nameToReactIcon_md_4(iconName) ||
        undefined
    );

}