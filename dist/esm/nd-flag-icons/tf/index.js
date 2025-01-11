import { tf_flag_1x1 } from "./tf-flag-1x1";
import { tf_flag_4x3 } from "./tf-flag-4x3";
export function tf_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => tf_flag_1x1(props, className);
        case "4x3":
            return (props) => tf_flag_4x3(props, className);
    }
    return undefined;
}
export function tf_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "tf") {
        return tf_flag(format, className);
    }
    return undefined;
}
export default tf_flag;
