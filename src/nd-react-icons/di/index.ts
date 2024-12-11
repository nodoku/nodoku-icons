import type {IconType} from "react-icons";
import { nameToReactIcon_di_0 } from "./name-to-react-icon-di-0";

export async function nameToReactIcon_di(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_di_0(iconName) ||
        undefined
    );

}