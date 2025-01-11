import { bn_flag_1x1 } from "./bn-flag-1x1";
import { bn_flag_4x3 } from "./bn-flag-4x3";
export function bn_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bn_flag_1x1(props, className);
        case "4x3":
            return (props) => bn_flag_4x3(props, className);
    }
    return undefined;
}
export function bn_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bn") {
        return bn_flag(format, className);
    }
    return undefined;
}
export default bn_flag;
