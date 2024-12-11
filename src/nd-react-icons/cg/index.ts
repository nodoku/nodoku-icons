import type {IconType} from "react-icons";
import { nameToReactIcon_cg_0 } from "./name-to-react-icon-cg-0";

export async function nameToReactIcon_cg(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_cg_0(iconName) ||
        undefined
    );

}