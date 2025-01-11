import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { tc_flag_1x1 } from "./tc-flag-1x1";
import { tc_flag_4x3 } from "./tc-flag-4x3";

export function tc_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => tc_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => tc_flag_4x3(props, className);
    }

    return undefined;
}

export function tc_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "tc") {
        return tc_flag(format, className)
    }

    return undefined;
}

export default tc_flag;