import type {IconType} from "react-icons";
import { nameToReactIcon_fc_0 } from "./name-to-react-icon-fc-0";

export async function nameToReactIcon_fc(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_fc_0(iconName) ||
        undefined
    );

}