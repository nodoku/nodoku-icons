import type {IconType} from "react-icons";
import { nameToReactIcon_lu_0 } from "./name-to-react-icon-lu-0";
import { nameToReactIcon_lu_1 } from "./name-to-react-icon-lu-1";

export async function nameToReactIcon_lu(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_lu_0(iconName) ||
        await nameToReactIcon_lu_1(iconName) ||
        undefined
    );

}