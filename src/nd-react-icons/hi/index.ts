import type {IconType} from "react-icons";
import { nameToReactIcon_hi_0 } from "./name-to-react-icon-hi-0";

export function nameToReactIcon_hi(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_hi_0(iconName1) ||
        undefined
    );

}