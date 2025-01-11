import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { nr_flag_1x1 } from "./nr-flag-1x1";
import { nr_flag_4x3 } from "./nr-flag-4x3";

export function nr_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => nr_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => nr_flag_4x3(props, className);
    }

    return undefined;
}

export function nr_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "nr") {
        return nr_flag(format, className)
    }

    return undefined;
}

export default nr_flag;