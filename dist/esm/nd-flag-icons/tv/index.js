import { tv_flag_1x1 } from "./tv-flag-1x1";
import { tv_flag_4x3 } from "./tv-flag-4x3";
export function tv_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => tv_flag_1x1(props, className);
        case "4x3":
            return (props) => tv_flag_4x3(props, className);
    }
    return undefined;
}
export function tv_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "tv") {
        return tv_flag(format, className);
    }
    return undefined;
}
export default tv_flag;
