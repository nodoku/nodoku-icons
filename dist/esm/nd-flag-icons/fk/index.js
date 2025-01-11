import { fk_flag_1x1 } from "./fk-flag-1x1";
import { fk_flag_4x3 } from "./fk-flag-4x3";
export function fk_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => fk_flag_1x1(props, className);
        case "4x3":
            return (props) => fk_flag_4x3(props, className);
    }
    return undefined;
}
export function fk_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "fk") {
        return fk_flag(format, className);
    }
    return undefined;
}
export default fk_flag;
