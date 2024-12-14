import { nameToReactIcon_tb_0 } from "./name-to-react-icon-tb-0";
import { nameToReactIcon_tb_1 } from "./name-to-react-icon-tb-1";
import { nameToReactIcon_tb_2 } from "./name-to-react-icon-tb-2";
import { nameToReactIcon_tb_3 } from "./name-to-react-icon-tb-3";
import { nameToReactIcon_tb_4 } from "./name-to-react-icon-tb-4";
import { nameToReactIcon_tb_5 } from "./name-to-react-icon-tb-5";
export function nameToReactIcon_tb(iconName) {
    return (nameToReactIcon_tb_0(iconName) ||
        nameToReactIcon_tb_1(iconName) ||
        nameToReactIcon_tb_2(iconName) ||
        nameToReactIcon_tb_3(iconName) ||
        nameToReactIcon_tb_4(iconName) ||
        nameToReactIcon_tb_5(iconName) ||
        undefined);
}
