import type {IconType} from "react-icons";
import { nameToReactIcon_go_0 } from "./name-to-react-icon-go-0";

export function nameToReactIcon_go(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_go_0(iconName1) ||
        undefined
    );

}