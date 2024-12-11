import type {IconType} from "react-icons";
import { nameToReactIcon_bi_0 } from "./name-to-react-icon-bi-0";
import { nameToReactIcon_bi_1 } from "./name-to-react-icon-bi-1";

export async function nameToReactIcon_bi(iconName: string): Promise<IconType | undefined> {

    return (
        await nameToReactIcon_bi_0(iconName) ||
        await nameToReactIcon_bi_1(iconName) ||
        undefined
    );

}