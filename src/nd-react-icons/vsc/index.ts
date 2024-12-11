import type {IconType} from "react-icons";
import { nameToReactIcon_vsc_0 } from "./name-to-react-icon-vsc-0";

export async function nameToReactIcon_vsc(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_vsc_0(iconName) ||
        undefined
    );

}