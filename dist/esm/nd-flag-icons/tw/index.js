import { tw_flag_1x1 } from "./tw-flag-1x1";
import { tw_flag_4x3 } from "./tw-flag-4x3";
export function tw_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => tw_flag_1x1(props, className);
        case "4x3":
            return (props) => tw_flag_4x3(props, className);
    }
    return undefined;
}
export function tw_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "tw") {
        return tw_flag(format, className);
    }
    return undefined;
}
export default tw_flag;
