import { io_flag_1x1 } from "./io-flag-1x1";
import { io_flag_4x3 } from "./io-flag-4x3";
export function io_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => io_flag_1x1(props, className);
        case "4x3":
            return (props) => io_flag_4x3(props, className);
    }
    return undefined;
}
export function io_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "io") {
        return io_flag(format, className);
    }
    return undefined;
}
export default io_flag;
