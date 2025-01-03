import {JSX} from "react";
import {IconType} from "react-icons";
// import {flag1, flag1s} from "./nd-flag-icons";

const ReactDOMServer = (await import('react-dom/server')).default;

export namespace NodokuIcons {

    export type nameToIcon = (iconName: string) => IconType | undefined;

    export type NdIconProps = {
        size: string;
    }

    export function iconProvider(iconName: string, nameToIconConverters: nameToIcon[], props: NdIconProps = {size: "32"}): JSX.Element | undefined {

        let icon: IconType | undefined;
        if (iconName.startsWith("nd-react-icons/")) {
            let i = 0
            do {
                icon = nameToIconConverters[i++](iconName.substring("nd-react-icons/".length));
            } while (!icon && i < nameToIconConverters.length);

        }

        if (icon) {
            // console.log("function for icon found ", iconName, icon)
            return icon({size: props.size})
        }

        return undefined;

    }

    export function iconTextPostProcessorFactory(nameToIconConverters: nameToIcon[]) {

        return (text: string): string => {

            const iconRegex = /\{icon:([\w-]+\/[\w:]+)\}/g

            if (text.indexOf("icon:") > 0) {
                let res = text;
                let m;
                do {
                    m = iconRegex.exec(res)
                    if (m) {
                        // console.log("m ", m)
                        const k = m.index
                        const l = m[0]
                        const iconName = m[1]
                        const icon = iconProvider(iconName, nameToIconConverters);
                        if (icon) {
                            const iconHtml = ReactDOMServer.renderToStaticMarkup(icon)
                            res = res.replaceAll(l, iconHtml)
                        } else {
                            res = res.replaceAll(l, "<icon />")
                        }
                    }
                } while (m)
                return res;
            }

            return text;
        }

    }

    export async function flagIconProvider(countryCode: string, format: "1x1" | "4x3", className: string): Promise<JSX.Element | undefined> {

        const flag = (await import(`./nd-flag-icons/${countryCode}-flag-${format}`)).default
        if (flag) {
            return flag(className);
        }

        return undefined;
    }

}