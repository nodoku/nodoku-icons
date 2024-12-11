import type {IconType} from "react-icons";
import { nameToReactIcon_fi_0 } from "./name-to-react-icon-fi-0";

export async function nameToReactIcon_fi(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_fi_0(iconName) ||
        undefined
    );

}