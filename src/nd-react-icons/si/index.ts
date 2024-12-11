import type {IconType} from "react-icons";
import { nameToReactIcon_si_0 } from "./name-to-react-icon-si-0";
import { nameToReactIcon_si_1 } from "./name-to-react-icon-si-1";
import { nameToReactIcon_si_2 } from "./name-to-react-icon-si-2";
import { nameToReactIcon_si_3 } from "./name-to-react-icon-si-3";

export async function nameToReactIcon_si(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_si_0(iconName) ||
        await nameToReactIcon_si_1(iconName) ||
        await nameToReactIcon_si_2(iconName) ||
        await nameToReactIcon_si_3(iconName) ||
        undefined
    );

}