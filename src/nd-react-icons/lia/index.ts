import type {IconType} from "react-icons";
import { nameToReactIcon_lia_0 } from "./name-to-react-icon-lia-0";
import { nameToReactIcon_lia_1 } from "./name-to-react-icon-lia-1";

export function nameToReactIcon_lia(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_lia_0(iconName1) ||
        nameToReactIcon_lia_1(iconName1) ||
        undefined
    );

}