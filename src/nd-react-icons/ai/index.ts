import type {IconType} from "react-icons";
import { nameToReactIcon_ai_0 } from "./name-to-react-icon-ai-0";

export function nameToReactIcon_ai(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_ai_0(iconName1) ||
        undefined
    );

}