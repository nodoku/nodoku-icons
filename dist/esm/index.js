// import {IconBaseProps} from "react-icons";
const ReactDOMServer = (await import('react-dom/server')).default;
export var NodokuIcons;
(function (NodokuIcons) {
    function iconProvider(iconName, nameToIconConverters, props = { size: "32" }) {
        let icon;
        let i = 0;
        do {
            icon = nameToIconConverters[i++](iconName);
        } while (!icon && i < nameToIconConverters.length);
        if (icon) {
            // console.log("function for icon found ", iconName, icon)
            return icon({ size: props.size });
        }
        return undefined;
    }
    NodokuIcons.iconProvider = iconProvider;
    function iconTextPostProcessorFactory(nameToIconConverters) {
        return (text) => {
            const iconRegex = /\{icon:([\w-]+\/[\w:]+)\}/g;
            if (text.indexOf("icon:") > 0) {
                let res = text;
                let m;
                do {
                    m = iconRegex.exec(res);
                    if (m) {
                        // console.log("m ", m)
                        const k = m.index;
                        const l = m[0];
                        const iconName = m[1];
                        const icon = iconProvider(iconName, nameToIconConverters);
                        if (icon) {
                            const iconHtml = ReactDOMServer.renderToStaticMarkup(icon);
                            res = res.replaceAll(l, iconHtml);
                        }
                        else {
                            res = res.replaceAll(l, "<icon />");
                        }
                    }
                } while (m);
                return res;
            }
            return text;
        };
    }
    NodokuIcons.iconTextPostProcessorFactory = iconTextPostProcessorFactory;
    // export async function asyncFlagIconProvider(countryCode: string, format: "1x1" | "4x3", className: string): Promise<JSX.Element | undefined> {
    //
    //     const flag: (props: IconBaseProps, className: string) => JSX.Element = (await import(`./nd-flag-icons/${countryCode}/${countryCode}-flag-${format}.jsx`)).default
    //     if (flag) {
    //         return flag({}, className);
    //     }
    //
    //     return undefined;
    // }
})(NodokuIcons || (NodokuIcons = {}));
