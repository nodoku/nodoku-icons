import type {IconType} from "react-icons";
import { nameToReactIcon_rx_0 } from "./name-to-react-icon-rx-0";

export async function nameToReactIcon_rx(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_rx_0(iconName) ||
        undefined
    );

}