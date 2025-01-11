import type {IconType} from "react-icons";
import { nameToReactIcon_fc_0 } from "./name-to-react-icon-fc-0";

export function nameToReactIcon_fc(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_fc_0(iconName1) ||
        undefined
    );

}