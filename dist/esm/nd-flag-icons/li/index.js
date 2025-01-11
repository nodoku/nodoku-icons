import { li_flag_1x1 } from "./li-flag-1x1";
import { li_flag_4x3 } from "./li-flag-4x3";
export function li_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => li_flag_1x1(props, className);
        case "4x3":
            return (props) => li_flag_4x3(props, className);
    }
    return undefined;
}
export function li_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "li") {
        return li_flag(format, className);
    }
    return undefined;
}
export default li_flag;
