import { bi_flag_1x1 } from "./bi-flag-1x1";
import { bi_flag_4x3 } from "./bi-flag-4x3";
export function bi_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => bi_flag_1x1(props, className);
        case "4x3":
            return (props) => bi_flag_4x3(props, className);
    }
    return undefined;
}
export function bi_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "bi") {
        return bi_flag(format, className);
    }
    return undefined;
}
export default bi_flag;
