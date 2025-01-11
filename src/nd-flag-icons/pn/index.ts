import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { pn_flag_1x1 } from "./pn-flag-1x1";
import { pn_flag_4x3 } from "./pn-flag-4x3";

export function pn_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => pn_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => pn_flag_4x3(props, className);
    }

    return undefined;
}

export function pn_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "pn") {
        return pn_flag(format, className)
    }

    return undefined;
}

export default pn_flag;