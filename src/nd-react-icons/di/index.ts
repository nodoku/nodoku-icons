import type {IconType} from "react-icons";
import { nameToReactIcon_di_0 } from "./name-to-react-icon-di-0";

export function nameToReactIcon_di(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_di_0(iconName1) ||
        undefined
    );

}