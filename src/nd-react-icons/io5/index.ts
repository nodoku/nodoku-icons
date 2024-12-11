import type {IconType} from "react-icons";
import { nameToReactIcon_io5_0 } from "./name-to-react-icon-io5-0";
import { nameToReactIcon_io5_1 } from "./name-to-react-icon-io5-1";

export async function nameToReactIcon_io5(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_io5_0(iconName) ||
        await nameToReactIcon_io5_1(iconName) ||
        undefined
    );

}