import { ck_flag_1x1 } from "./ck-flag-1x1";
import { ck_flag_4x3 } from "./ck-flag-4x3";
export function ck_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => ck_flag_1x1(props, className);
        case "4x3":
            return (props) => ck_flag_4x3(props, className);
    }
    return undefined;
}
export function ck_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "ck") {
        return ck_flag(format, className);
    }
    return undefined;
}
export default ck_flag;
