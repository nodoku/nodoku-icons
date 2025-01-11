import { wf_flag_1x1 } from "./wf-flag-1x1";
import { wf_flag_4x3 } from "./wf-flag-4x3";
export function wf_flag(format = "1x1", className = "") {
    switch (format) {
        case "1x1":
            return (props) => wf_flag_1x1(props, className);
        case "4x3":
            return (props) => wf_flag_4x3(props, className);
    }
    return undefined;
}
export function wf_flag_nameToFlagIcon(iconName, format = "1x1", className = "") {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }
    const countryCode = iconName.substring("nd-flag-icons/".length);
    if (countryCode === "wf") {
        return wf_flag(format, className);
    }
    return undefined;
}
export default wf_flag;
