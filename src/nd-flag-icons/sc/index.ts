import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { sc_flag_1x1 } from "./sc-flag-1x1";
import { sc_flag_4x3 } from "./sc-flag-4x3";

export function sc_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => sc_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => sc_flag_4x3(props, className);
    }

    return undefined;
}

export function sc_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "sc") {
        return sc_flag(format, className)
    }

    return undefined;
}

export default sc_flag;