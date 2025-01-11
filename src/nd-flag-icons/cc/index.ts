import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { cc_flag_1x1 } from "./cc-flag-1x1";
import { cc_flag_4x3 } from "./cc-flag-4x3";

export function cc_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => cc_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => cc_flag_4x3(props, className);
    }

    return undefined;
}

export function cc_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "cc") {
        return cc_flag(format, className)
    }

    return undefined;
}

export default cc_flag;