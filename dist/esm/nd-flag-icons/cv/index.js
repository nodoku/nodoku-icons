import { cv_flag_1x1 } from "./cv-flag-1x1";
import { cv_flag_4x3 } from "./cv-flag-4x3";
export function cv_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => cv_flag_1x1(props, className);
        case "4x3":
            return (props) => cv_flag_4x3(props, className);
    }
    return undefined;
}
export function cv_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "cv") {
        return cv_flag(format, className);
    }
    return undefined;
}
export default cv_flag;
