import type {IconType} from "react-icons";
import { nameToReactIcon_ri_0 } from "./name-to-react-icon-ri-0";
import { nameToReactIcon_ri_1 } from "./name-to-react-icon-ri-1";
import { nameToReactIcon_ri_2 } from "./name-to-react-icon-ri-2";
import { nameToReactIcon_ri_3 } from "./name-to-react-icon-ri-3";

export async function nameToReactIcon_ri(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_ri_0(iconName) ||
        await nameToReactIcon_ri_1(iconName) ||
        await nameToReactIcon_ri_2(iconName) ||
        await nameToReactIcon_ri_3(iconName) ||
        undefined
    );

}