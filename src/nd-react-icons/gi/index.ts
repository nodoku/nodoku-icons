import type {IconType} from "react-icons";
import { nameToReactIcon_gi_0 } from "./name-to-react-icon-gi-0";
import { nameToReactIcon_gi_1 } from "./name-to-react-icon-gi-1";
import { nameToReactIcon_gi_2 } from "./name-to-react-icon-gi-2";
import { nameToReactIcon_gi_3 } from "./name-to-react-icon-gi-3";
import { nameToReactIcon_gi_4 } from "./name-to-react-icon-gi-4";

export async function nameToReactIcon_gi(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_gi_0(iconName) ||
        await nameToReactIcon_gi_1(iconName) ||
        await nameToReactIcon_gi_2(iconName) ||
        await nameToReactIcon_gi_3(iconName) ||
        await nameToReactIcon_gi_4(iconName) ||
        undefined
    );

}