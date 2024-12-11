import type {IconType} from "react-icons";
import { nameToReactIcon_bs_0 } from "./name-to-react-icon-bs-0";
import { nameToReactIcon_bs_1 } from "./name-to-react-icon-bs-1";
import { nameToReactIcon_bs_2 } from "./name-to-react-icon-bs-2";

export async function nameToReactIcon_bs(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_bs_0(iconName) ||
        await nameToReactIcon_bs_1(iconName) ||
        await nameToReactIcon_bs_2(iconName) ||
        undefined
    );

}