import { ng_flag_1x1 } from "./ng-flag-1x1";
import { ng_flag_4x3 } from "./ng-flag-4x3";
export function ng_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ng_flag_1x1(props, className);
        case "4x3":
            return (props) => ng_flag_4x3(props, className);
    }
    return undefined;
}
export function ng_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ng") {
        return ng_flag(format, className);
    }
    return undefined;
}
export default ng_flag;
