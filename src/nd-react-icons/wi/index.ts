import type {IconType} from "react-icons";
import { nameToReactIcon_wi_0 } from "./name-to-react-icon-wi-0";

export function nameToReactIcon_wi(iconName: string): IconType | undefined {

    return (
        nameToReactIcon_wi_0(iconName) ||
        undefined
    );

}