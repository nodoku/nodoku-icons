import { gl_flag_1x1 } from "./gl-flag-1x1";
import { gl_flag_4x3 } from "./gl-flag-4x3";
export function gl_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => gl_flag_1x1(props, className);
        case "4x3":
            return (props) => gl_flag_4x3(props, className);
    }
    return undefined;
}
export function gl_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "gl") {
        return gl_flag(format, className);
    }
    return undefined;
}
export default gl_flag;
