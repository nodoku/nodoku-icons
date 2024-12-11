import type {IconType} from "react-icons";
import { nameToReactIcon_sl_0 } from "./name-to-react-icon-sl-0";

export async function nameToReactIcon_sl(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_sl_0(iconName) ||
        undefined
    );

}