import fs from "fs";
import path from "path";
import Mustache from "mustache"

const nodeModules = path.resolve("./node_modules/flag-icons/flags");
const pathIcons4x3 = path.resolve("./node_modules/flag-icons/flags/4x3");
const pathIcons1x1 = path.resolve("./node_modules/flag-icons/flags/1x1");

const flagIcon1x1Tpl = fs.readFileSync(path.resolve("./src/scripts/tpl", "flag-icon-1x1.ts.hbs")).toString()
const flagIcon4x3Tpl = fs.readFileSync(path.resolve("./src/scripts/tpl", "flag-icon-4x3.ts.hbs")).toString()

const iconsSrcFolder = "nd-flag-icons";

try {
    const dirStat = fs.statSync(path.resolve(`./src/${iconsSrcFolder}`))
    if (!dirStat.isDirectory()) {
        fs.mkdirSync(path.resolve(`./src/${iconsSrcFolder}`));
    }
} catch (e) {
    fs.mkdirSync(path.resolve(`./src/${iconsSrcFolder}`));
}

fs.readdirSync(pathIcons4x3).forEach(file => {
    try {
        const stats: fs.Stats = fs.statSync(path.resolve(pathIcons4x3, file));
        if (stats.isFile() && file.endsWith(".svg")) {
            const countryCode = file.substring(0, file.length - ".svg".length);
            const svg_4x3 = fs.readFileSync(path.resolve(pathIcons4x3, file))


            const fileContent = Mustache.render(flagIcon4x3Tpl, {countryCode: countryCode.replaceAll("-", "_"), svg_4x3: prepareSvg(svg_4x3.toString())});
            fs.writeFile(path.resolve(`./src/${iconsSrcFolder}/${countryCode}-flag-4x3.tsx`), fileContent, () => {})

            // console.log("txt", txt.toString());
        }
    } catch (e) {
        console.log("error processing", path.resolve(pathIcons4x3, file), ": ", e)
    }
})

fs.readdirSync(pathIcons1x1).forEach(file => {
    try {
        const stats: fs.Stats = fs.statSync(path.resolve(pathIcons1x1, file));
        if (stats.isFile() && file.endsWith(".svg")) {
            const countryCode = file.substring(0, file.length - ".svg".length);
            const svg_1x1 = fs.readFileSync(path.resolve(pathIcons1x1, file))

            const fileContent = Mustache.render(flagIcon1x1Tpl, {countryCode: countryCode.replaceAll("-", "_"), svg_1x1: prepareSvg(svg_1x1.toString())});
            fs.writeFile(path.resolve(`./src/${iconsSrcFolder}/${countryCode}-flag-1x1.tsx`), fileContent, () => {})

            // console.log("txt", txt.toString());
        }
    } catch (e) {
        console.log("error processing", path.resolve(nodeModules, file), ": ", e)
    }
})

function prepareSvg(svg: string): string {
    return svg
        .replaceAll("xmlns:xlink=\"http://www.w3.org/1999/xlink\"", "xlinkHref={\"http://www.w3.org/1999/xlink\"}")
        .replaceAll(/xlink:href="([#\w-]+)"/g, (match, p1): string => "xlinkHref={\"" + p1 + "\"}")
        .replaceAll(/class="([\w -]+)"/g, (match, p1): string => "className={\"" + p1 + "\"}")
        .replaceAll(/style="([\w:-]+)"/g, (match, p1): string => "")
        .replaceAll("stroke-miterlimit", "strokeMiterlimit")
        .replaceAll("stroke-width", "strokeWidth")
        .replaceAll("stroke-linecap", "strokeLinecap")
        .replaceAll("stroke-linejoin", "strokeLinejoin")
        .replaceAll("fill-rule", "fillRule")
        .replaceAll("clip-path", "clipPath")
        .replaceAll("fill-opacity", "fillOpacity")
        .replaceAll("font-family", "fontFamily")
        .replaceAll("font-size", "fontSize")
        .replaceAll("font-weight", "fontWeight")
        .replaceAll("stroke-dasharray", "strokeDasharray")
        .replaceAll("stroke-opacity", "strokeOpacity")
}