import { gg_flag_1x1 } from "./gg-flag-1x1";
import { gg_flag_4x3 } from "./gg-flag-4x3";
export function gg_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => gg_flag_1x1(props, className);
        case "4x3":
            return (props) => gg_flag_4x3(props, className);
    }
    return undefined;
}
export function gg_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "gg") {
        return gg_flag(format, className);
    }
    return undefined;
}
export default gg_flag;
