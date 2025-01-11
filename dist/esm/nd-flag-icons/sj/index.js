import { sj_flag_1x1 } from "./sj-flag-1x1";
import { sj_flag_4x3 } from "./sj-flag-4x3";
export function sj_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => sj_flag_1x1(props, className);
        case "4x3":
            return (props) => sj_flag_4x3(props, className);
    }
    return undefined;
}
export function sj_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "sj") {
        return sj_flag(format, className);
    }
    return undefined;
}
export default sj_flag;
