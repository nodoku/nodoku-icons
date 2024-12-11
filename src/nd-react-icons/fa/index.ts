import type {IconType} from "react-icons";
import { nameToReactIcon_fa_0 } from "./name-to-react-icon-fa-0";
import { nameToReactIcon_fa_1 } from "./name-to-react-icon-fa-1";

export async function nameToReactIcon_fa(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_fa_0(iconName) ||
        await nameToReactIcon_fa_1(iconName) ||
        undefined
    );

}