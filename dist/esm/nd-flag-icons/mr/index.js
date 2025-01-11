import { mr_flag_1x1 } from "./mr-flag-1x1";
import { mr_flag_4x3 } from "./mr-flag-4x3";
export function mr_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => mr_flag_1x1(props, className);
        case "4x3":
            return (props) => mr_flag_4x3(props, className);
    }
    return undefined;
}
export function mr_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "mr") {
        return mr_flag(format, className);
    }
    return undefined;
}
export default mr_flag;
