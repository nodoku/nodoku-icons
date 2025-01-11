import { gb_sct_flag_1x1 } from "./gb-sct-flag-1x1";
import { gb_sct_flag_4x3 } from "./gb-sct-flag-4x3";
export function gb_sct_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => gb_sct_flag_1x1(props, className);
        case "4x3":
            return (props) => gb_sct_flag_4x3(props, className);
    }
    return undefined;
}
export function gb_sct_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "gb_sct") {
        return gb_sct_flag(format, className);
    }
    return undefined;
}
export default gb_sct_flag;
