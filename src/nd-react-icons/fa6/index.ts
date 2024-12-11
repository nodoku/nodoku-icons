import type {IconType} from "react-icons";
import { nameToReactIcon_fa6_0 } from "./name-to-react-icon-fa6-0";
import { nameToReactIcon_fa6_1 } from "./name-to-react-icon-fa6-1";
import { nameToReactIcon_fa6_2 } from "./name-to-react-icon-fa6-2";

export async function nameToReactIcon_fa6(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_fa6_0(iconName) ||
        await nameToReactIcon_fa6_1(iconName) ||
        await nameToReactIcon_fa6_2(iconName) ||
        undefined
    );

}