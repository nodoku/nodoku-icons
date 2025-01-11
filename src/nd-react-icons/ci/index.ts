import type {IconType} from "react-icons";
import { nameToReactIcon_ci_0 } from "./name-to-react-icon-ci-0";

export function nameToReactIcon_ci(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_ci_0(iconName1) ||
        undefined
    );

}