import type {IconType} from "react-icons";
import { nameToReactIcon_hi_0 } from "./name-to-react-icon-hi-0";

export function nameToReactIcon_hi(iconName: string): IconType | undefined {

    return (
        nameToReactIcon_hi_0(iconName) ||
        undefined
    );

}