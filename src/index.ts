import {JSX} from "react";
import {IconType} from "react-icons";

export namespace NodokuIcons {

    export type nameToIcon = (iconName: string) => Promise<IconType | undefined>;

    export type NdIconProps = {
        size: string;
    }

    export async function NdIconProvider(iconName: string, props: NdIconProps = {size: "32"}, nameToIconConverters: nameToIcon[]): Promise<JSX.Element | undefined> {

        let icon: IconType | undefined;
        if (iconName.startsWith("react-icons/")) {
            let i = 0
            do {
                icon = await nameToIconConverters[i++](iconName.substring("react-icons/".length));
            } while (!icon && i < nameToIconConverters.length);

        }

        if (icon) {
            console.log("function for icon found ", iconName, icon)
            return icon({size: props.size})
        }

        return undefined;

    }
}