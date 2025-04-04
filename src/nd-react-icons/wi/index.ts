import type {IconType} from "react-icons";
import { nameToReactIcon_wi_0 } from "./name-to-react-icon-wi-0";

export function nameToReactIcon_wi(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_wi_0(iconName1) ||
        undefined
    );

}