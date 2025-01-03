import type {IconType} from "react-icons";
import { nameToReactIcon_rx_0 } from "./name-to-react-icon-rx-0";

export function nameToReactIcon_rx(iconName: string): IconType | undefined {

    return (
        nameToReactIcon_rx_0(iconName) ||
        undefined
    );

}