import type {IconType} from "react-icons";
import { nameToReactIcon_io_0 } from "./name-to-react-icon-io-0";

export function nameToReactIcon_io(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_io_0(iconName1) ||
        undefined
    );

}