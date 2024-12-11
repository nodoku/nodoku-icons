import type {IconType} from "react-icons";
import { nameToReactIcon_hi_0 } from "./name-to-react-icon-hi-0";

export async function nameToReactIcon_hi(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_hi_0(iconName) ||
        undefined
    );

}