import { kr_flag_1x1 } from "./kr-flag-1x1";
import { kr_flag_4x3 } from "./kr-flag-4x3";
export function kr_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => kr_flag_1x1(props, className);
        case "4x3":
            return (props) => kr_flag_4x3(props, className);
    }
    return undefined;
}
export function kr_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "kr") {
        return kr_flag(format, className);
    }
    return undefined;
}
export default kr_flag;
