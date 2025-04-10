import { md_flag_1x1 } from "./md-flag-1x1";
import { md_flag_4x3 } from "./md-flag-4x3";
export function md_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => md_flag_1x1(props, className);
        case "4x3":
            return (props) => md_flag_4x3(props, className);
    }
    return undefined;
}
export function md_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "md") {
        return md_flag(format, className);
    }
    return undefined;
}
export default md_flag;
