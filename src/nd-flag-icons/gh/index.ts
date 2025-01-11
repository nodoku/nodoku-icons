import {IconType} from "react-icons";
import {IconBaseProps} from "react-icons";
import { gh_flag_1x1 } from "./gh-flag-1x1";
import { gh_flag_4x3 } from "./gh-flag-4x3";

export function gh_flag(format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {

    switch (format) {
        case "1x1":
            return (props: IconBaseProps) => gh_flag_1x1(props, className);
        case "4x3":
            return (props: IconBaseProps) => gh_flag_4x3(props, className);
    }

    return undefined;
}

export function gh_flag_nameToFlagIcon(iconName: string, format: "1x1" | "4x3" = "1x1", className: string = ""): IconType | undefined {
    if (!iconName.startsWith("nd-flag-icons/")) {
        return undefined;
    }

    const countryCode = iconName.substring("nd-flag-icons/".length);

    if (countryCode === "gh") {
        return gh_flag(format, className)
    }

    return undefined;
}

export default gh_flag;