import type {IconType} from "react-icons";
import { nameToReactIcon_ti_0 } from "./name-to-react-icon-ti-0";

export async function nameToReactIcon_ti(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_ti_0(iconName) ||
        undefined
    );

}