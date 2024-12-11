import type {IconType} from "react-icons";
import { nameToReactIcon_go_0 } from "./name-to-react-icon-go-0";

export async function nameToReactIcon_go(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_go_0(iconName) ||
        undefined
    );

}