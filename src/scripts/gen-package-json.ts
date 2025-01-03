import fs from "fs";
import path from "path";
import Mustache from "mustache"
import * as pjson from "../../package.json"

const ndReactIconsDistJs = path.resolve("./dist", "esm", "nd-react-icons");
const ndReactIconsDistTypes = path.resolve("./dist", "types", "nd-react-icons");
const ndFlagIconsDistJs = path.resolve("./dist", "esm", "nd-flag-icons");
const ndFlagIconsDistTypes = path.resolve("./dist", "types", "nd-flag-icons");

const packageJsonTpl = fs.readFileSync(path.resolve("./src/scripts/tpl", "module-package.json.hbs")).toString()
const globalPackageJsonTpl = fs.readFileSync(path.resolve("./src/scripts/tpl", "global-package.json.hbs")).toString()

const iconsSrcFolder = "nd-react-icons";

const modules: string[] = []
fs.readdirSync(ndReactIconsDistJs).forEach(file => {

    console.log("found nd-react-icons", file)

    modules.push(file)

    try {
        const stats: fs.Stats = fs.statSync(path.resolve(ndReactIconsDistJs, file));
        if (stats.isDirectory()) {
            console.log("generating package.json for ", path.resolve(ndReactIconsDistJs, `./esm/${iconsSrcFolder}/${file}/package.json`))
            const packageJson = Mustache.render(packageJsonTpl, {version: pjson.version});
            fs.writeFile(path.resolve(ndReactIconsDistJs, `./${file}/package.json`), packageJson, () => {})

            fs.readdirSync(path.resolve(ndReactIconsDistTypes, file)).forEach(f => {
                console.log("copying ", f)
                fs.copyFileSync(path.resolve(ndReactIconsDistTypes, file, f), path.resolve(ndReactIconsDistJs, file, f))
            })

        }
    } catch (e) {
        console.log("error processing", path.resolve(ndReactIconsDistJs, file), ": ", e)
    }
})

const flagIcons: string[] = []
fs.readdirSync(ndFlagIconsDistJs).forEach(file => {

    console.log("found nd-flag-icons", file)
    flagIcons.push(file);

})

const globalPackageJsonModel = {
    version: pjson.version,
    reactVer: pjson.peerDependencies.react,
    reactIconsVer: pjson.peerDependencies["react-icons"],
    modules: modules.map((m, i) => ({name: m, isLast: i === modules.length - 1})),
    flagIcons: flagIcons.map((f: string, i) => ({name: f, isLast: i === flagIcons.length - 1})),
}
const globalPackageJson = Mustache.render(globalPackageJsonTpl, globalPackageJsonModel);
fs.writeFile(path.resolve(path.resolve("./dist"), "package.json"), globalPackageJson, () => {})

