import type {IconType} from "react-icons";
import { nameToReactIcon_tfi_0 } from "./name-to-react-icon-tfi-0";

export async function nameToReactIcon_tfi(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_tfi_0(iconName) ||
        undefined
    );

}