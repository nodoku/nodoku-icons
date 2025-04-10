import { nameToReactIcon_pi_0 } from "./name-to-react-icon-pi-0";
import { nameToReactIcon_pi_1 } from "./name-to-react-icon-pi-1";
import { nameToReactIcon_pi_2 } from "./name-to-react-icon-pi-2";
import { nameToReactIcon_pi_3 } from "./name-to-react-icon-pi-3";
import { nameToReactIcon_pi_4 } from "./name-to-react-icon-pi-4";
import { nameToReactIcon_pi_5 } from "./name-to-react-icon-pi-5";
import { nameToReactIcon_pi_6 } from "./name-to-react-icon-pi-6";
import { nameToReactIcon_pi_7 } from "./name-to-react-icon-pi-7";
import { nameToReactIcon_pi_8 } from "./name-to-react-icon-pi-8";
import { nameToReactIcon_pi_9 } from "./name-to-react-icon-pi-9";
export function nameToReactIcon_pi(iconName) {
    if (!iconName.startsWith("nd-react-icons/")) {
        return undefined;
    }
    const iconName1 = iconName.substring("nd-react-icons/".length);
    return (nameToReactIcon_pi_0(iconName1) ||
        nameToReactIcon_pi_1(iconName1) ||
        nameToReactIcon_pi_2(iconName1) ||
        nameToReactIcon_pi_3(iconName1) ||
        nameToReactIcon_pi_4(iconName1) ||
        nameToReactIcon_pi_5(iconName1) ||
        nameToReactIcon_pi_6(iconName1) ||
        nameToReactIcon_pi_7(iconName1) ||
        nameToReactIcon_pi_8(iconName1) ||
        nameToReactIcon_pi_9(iconName1) ||
        undefined);
}
