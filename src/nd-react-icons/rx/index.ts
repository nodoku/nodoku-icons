import type {IconType} from "react-icons";
import { nameToReactIcon_rx_0 } from "./name-to-react-icon-rx-0";

export function nameToReactIcon_rx(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_rx_0(iconName1) ||
        undefined
    );

}