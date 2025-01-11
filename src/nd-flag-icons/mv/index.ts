import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { mv_flag_1x1 } from "./mv-flag-1x1";
import { mv_flag_4x3 } from "./mv-flag-4x3";

export function mv_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => mv_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => mv_flag_4x3(props, className);
    }

    return undefined;
}

export function mv_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "mv") {
        return mv_flag(format, className)
    }

    return undefined;
}

export default mv_flag;