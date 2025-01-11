import type {IconType} from "react-icons";
import { nameToReactIcon_tb_0 } from "./name-to-react-icon-tb-0";
import { nameToReactIcon_tb_1 } from "./name-to-react-icon-tb-1";
import { nameToReactIcon_tb_2 } from "./name-to-react-icon-tb-2";
import { nameToReactIcon_tb_3 } from "./name-to-react-icon-tb-3";
import { nameToReactIcon_tb_4 } from "./name-to-react-icon-tb-4";
import { nameToReactIcon_tb_5 } from "./name-to-react-icon-tb-5";

export function nameToReactIcon_tb(iconName: string): IconType | undefined {

    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }

    const iconName1 = iconName.substring("nd-react-icons/".length);

    return (
        nameToReactIcon_tb_0(iconName1) ||
        nameToReactIcon_tb_1(iconName1) ||
        nameToReactIcon_tb_2(iconName1) ||
        nameToReactIcon_tb_3(iconName1) ||
        nameToReactIcon_tb_4(iconName1) ||
        nameToReactIcon_tb_5(iconName1) ||
        undefined
    );

}