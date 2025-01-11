import fs from "fs";
import path from "path";
import Mustache from "mustache"

const nodeModules = path.resolve("./node_modules/flag-icons/flags");
const pathIcons4x3 = path.resolve("./node_modules/flag-icons/flags/4x3");
const pathIcons1x1 = path.resolve("./node_modules/flag-icons/flags/1x1");

const flagIcon1x1Tpl = fs.readFileSync(path.resolve("./src/scripts/tpl", "flag-icon-1x1.tsx.hbs")).toString()
const flagIcon4x3Tpl = fs.readFileSync(path.resolve("./src/scripts/tpl", "flag-icon-4x3.tsx.hbs")).toString()
const flagIconIndexTpl = fs.readFileSync(path.resolve("./src/scripts/tpl", "flag-icon-index.ts.hbs")).toString()
const allFlagIconsIndexTpl = fs.readFileSync(path.resolve("./src/scripts/tpl", "all-flag-icons-index.ts.hbs")).toString()

const iconsSrcFolder = "nd-flag-icons";

function createDir(dirName: string) {
    try {
        const dirStat = fs.statSync(dirName)
        if (!dirStat.isDirectory()) {
            fs.mkdirSync(dirName);
        }
    } catch (e) {
        fs.mkdirSync(dirName);
    }
}

createDir(path.resolve(`./src/${iconsSrcFolder}`))

// const createdFiles: string[] = [];
// const createdIcons: {countryCode: string, format: "1x1" | "4x3", fnName: string, fileName: string}[] = []

const allIcons: {
    [key: string]: {
        "1x1": {
            fnName: string,
            fileName: string,
            svgContent: string
        } | undefined,
        "4x3": {
            fnName: string,
            fileName: string,
            svgContent: string
        } | undefined,
        fnName: string | undefined
    }
} = {}

fs.readdirSync(pathIcons4x3).forEach(file => {
    try {
        const stats: fs.Stats = fs.statSync(path.resolve(pathIcons4x3, file));
        if (stats.isFile() && file.endsWith(".svg")) {
            const countryCode = file.substring(0, file.length - ".svg".length);
            const svg_4x3 = fs.readFileSync(path.resolve(pathIcons4x3, file)).toString().replaceAll("<svg", "<svg className={className}")


            const fnName = countryCode.replaceAll("-", "_") + "_flag_4x3";
            const fileContent = Mustache.render(flagIcon4x3Tpl, {fnName, svg_4x3: prepareSvg(svg_4x3.toString())});
            // fs.writeFile(path.resolve(`./src/${iconsSrcFolder}/${countryCode}/${countryCode}-flag-4x3.tsx`), fileContent, () => {})
            // createdFiles.push(`${countryCode}-flag-4x3`)
            // createdIcons.push({countryCode: countryCode, format: "4x3", fnName: `${countryCode}_flag_4x3`.replaceAll("-", "_"), fileName: `${countryCode}-flag-4x3`})
            if (!allIcons[countryCode]) {
                allIcons[countryCode] = {"1x1": undefined, "4x3": undefined, fnName: undefined}
            }
            allIcons[countryCode]["4x3"] = {
                fnName,
                fileName: `${countryCode}-flag-4x3`,
                svgContent: fileContent
            }
            if (!allIcons[countryCode].fnName) {
                allIcons[countryCode].fnName = countryCode.replaceAll("-", "_") + "_flag"
            }

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
            const svg_1x1 = fs.readFileSync(path.resolve(pathIcons1x1, file)).toString().replaceAll("<svg", "<svg className={className}")

            const fnName = countryCode.replaceAll("-", "_") + "_flag_1x1";
            const fileContent = Mustache.render(flagIcon1x1Tpl, {fnName, svg_1x1: prepareSvg(svg_1x1.toString())});
            // fs.writeFile(path.resolve(`./src/${iconsSrcFolder}/${countryCode}/${countryCode}-flag-1x1.tsx`), fileContent, () => {})
            // createdFiles.push(`${countryCode}-flag-1x1`)
            // createdIcons.push({countryCode: countryCode, format: "1x1", fnName: `${countryCode}_flag_1x1`.replaceAll("-", "_"), fileName: `${countryCode}-flag-1x1`})
            // createdIcons[countryCode]["1x1"]= {
            //     fnName: `${countryCode}_flag_1x1`.replaceAll("-", "_"),
            //     fileName: `${countryCode}-flag-1x1`
            // }
            if (!allIcons[countryCode]) {
                allIcons[countryCode] = {"1x1": undefined, "4x3": undefined, fnName: undefined}
            }
            allIcons[countryCode]["1x1"] = {
                fnName,
                fileName: `${countryCode}-flag-1x1`,
                svgContent: fileContent
            }
            if (!allIcons[countryCode].fnName) {
                allIcons[countryCode].fnName = countryCode.replaceAll("-", "_") + "_flag"
            }

            // console.log("txt", txt.toString());
        }
    } catch (e) {
        console.log("error processing", path.resolve(nodeModules, file), ": ", e)
    }
})

// const createdIcons: {countryCode: string, format: "1x1" | "4x3", fnName: string, fileName: string}[] = []
const createdIcons: {countryCode: string, fnName: string}[] = []
Object.keys(allIcons).forEach((countryCode: string) => {

    let fnName1x1: string = `${countryCode}-1x1-n/a`;
    let fnName4x3: string = `${countryCode}-4x3-n/a`;
    let fileName1x1: string = `${countryCode}-1x1-n/a`;
    let fileName4x3: string = `${countryCode}-4x3-n/a`;

    const fileContent1x1 = allIcons[countryCode]["1x1"]?.svgContent;
    if (fileContent1x1) {
        fileName1x1 = allIcons[countryCode]["1x1"]?.fileName || fileName1x1;
        fnName1x1 = allIcons[countryCode]["1x1"]?.fnName || fnName1x1;
        createDir(`./src/${iconsSrcFolder}/${countryCode}`)
        fs.writeFile(path.resolve(`./src/${iconsSrcFolder}/${countryCode}/${fileName1x1}.tsx`), fileContent1x1, () => {})
    }

    const fileContent4x3 = allIcons[countryCode]["4x3"]?.svgContent;
    if (fileContent4x3) {
        fileName4x3 = allIcons[countryCode]["4x3"]?.fileName || fileName4x3;
        fnName4x3 = allIcons[countryCode]["4x3"]?.fnName || fnName4x3
        createDir(`./src/${iconsSrcFolder}/${countryCode}`)
        fs.writeFile(path.resolve(`./src/${iconsSrcFolder}/${countryCode}/${fileName4x3}.tsx`), fileContent4x3, () => {})
    }
    createdIcons.push({countryCode: countryCode, fnName: allIcons[countryCode].fnName || `${countryCode}-fnName-n/a` })

    const indexFileContent = Mustache.render(flagIconIndexTpl, {countryCode: countryCode.replaceAll("-", "_"), fnName1x1, fnName4x3, fileName1x1, fileName4x3});
    fs.writeFile(path.resolve(`./src/${iconsSrcFolder}/${countryCode}/index.ts`), indexFileContent, () => {})

})


const indexFileContent = Mustache.render(allFlagIconsIndexTpl, {createdIcons});
fs.writeFile(path.resolve(`./src/${iconsSrcFolder}/index.ts`), indexFileContent, () => {})

function prepareSvg(svg: string): string {
    return svg
        .replaceAll("xmlns:xlink=\"http://www.w3.org/1999/xlink\"", "xlinkHref={\"http://www.w3.org/1999/xlink\"}")
        .replaceAll(/xlink:href="([#\w-]+)"/g, (match, p1): string => "xlinkHref={\"" + p1 + "\"}")
        .replaceAll(/xml:space="preserve"/g, (match, p1): string => "xmlSpace={\"preserve\"}")
        .replaceAll(/class="([\w -]+)"/g, (match, p1): string => "className={\"" + p1 + "\"}")
        .replaceAll(/style="([\w:&;\- %]+)"/g, (match, p1): string => "")
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