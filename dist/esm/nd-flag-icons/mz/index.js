import { mz_flag_1x1 } from "./mz-flag-1x1";
import { mz_flag_4x3 } from "./mz-flag-4x3";
export function mz_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => mz_flag_1x1(props, className);
        case "4x3":
            return (props) => mz_flag_4x3(props, className);
    }
    return undefined;
}
export function mz_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "mz") {
        return mz_flag(format, className);
    }
    return undefined;
}
export default mz_flag;
