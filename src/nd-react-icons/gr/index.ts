import type {IconType} from "react-icons";
import { nameToReactIcon_gr_0 } from "./name-to-react-icon-gr-0";

export async function nameToReactIcon_gr(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_gr_0(iconName) ||
        undefined
    );

}