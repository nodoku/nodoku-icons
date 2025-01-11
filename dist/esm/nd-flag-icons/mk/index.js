import { mk_flag_1x1 } from "./mk-flag-1x1";
import { mk_flag_4x3 } from "./mk-flag-4x3";
export function mk_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => mk_flag_1x1(props, className);
        case "4x3":
            return (props) => mk_flag_4x3(props, className);
    }
    return undefined;
}
export function mk_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "mk") {
        return mk_flag(format, className);
    }
    return undefined;
}
export default mk_flag;
