import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { tj_flag_1x1 } from "./tj-flag-1x1";
import { tj_flag_4x3 } from "./tj-flag-4x3";

export function tj_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => tj_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => tj_flag_4x3(props, className);
    }

    return undefined;
}

export function tj_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "tj") {
        return tj_flag(format, className)
    }

    return undefined;
}

export default tj_flag;