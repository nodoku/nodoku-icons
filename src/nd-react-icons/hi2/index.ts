import type {IconType} from "react-icons";
import { nameToReactIcon_hi2_0 } from "./name-to-react-icon-hi2-0";

export async function nameToReactIcon_hi2(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_hi2_0(iconName) ||
        undefined
    );

}