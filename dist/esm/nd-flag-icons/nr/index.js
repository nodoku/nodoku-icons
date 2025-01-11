import { nr_flag_1x1 } from "./nr-flag-1x1";
import { nr_flag_4x3 } from "./nr-flag-4x3";
export function nr_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => nr_flag_1x1(props, className);
        case "4x3":
            return (props) => nr_flag_4x3(props, className);
    }
    return undefined;
}
export function nr_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "nr") {
        return nr_flag(format, className);
    }
    return undefined;
}
export default nr_flag;
