import type {IconType} from "react-icons";
import { nameToReactIcon_lia_0 } from "./name-to-react-icon-lia-0";
import { nameToReactIcon_lia_1 } from "./name-to-react-icon-lia-1";

export async function nameToReactIcon_lia(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_lia_0(iconName) ||
        await nameToReactIcon_lia_1(iconName) ||
        undefined
    );

}