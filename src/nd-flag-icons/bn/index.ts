import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { bn_flag_1x1 } from "./bn-flag-1x1";
import { bn_flag_4x3 } from "./bn-flag-4x3";

export function bn_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => bn_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => bn_flag_4x3(props, className);
    }

    return undefined;
}

export function bn_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "bn") {
        return bn_flag(format, className)
    }

    return undefined;
}

export default bn_flag;