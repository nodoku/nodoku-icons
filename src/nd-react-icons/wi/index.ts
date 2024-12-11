import type {IconType} from "react-icons";
import { nameToReactIcon_wi_0 } from "./name-to-react-icon-wi-0";

export async function nameToReactIcon_wi(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_wi_0(iconName) ||
        undefined
    );

}