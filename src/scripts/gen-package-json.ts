import fs from "fs";
import path from "path";
import Mustache from "mustache"
import * as pjson from "../../package.json"

const dist = path.resolve("./dist", "esm", "nd-react-icons");
const distTypes = path.resolve("./dist", "types", "nd-react-icons");

const packageJsonTpl = fs.readFileSync(path.resolve("./src/scripts/tpl", "module-package.json.hbs")).toString()
const globalPackageJsonTpl = fs.readFileSync(path.resolve("./src/scripts/tpl", "global-package.json.hbs")).toString()

const iconsSrcFolder = "nd-react-icons";

const modules: string[] = []
fs.readdirSync(dist).forEach(file => {

    console.log("found ", file)

    modules.push(file)

    try {
        const stats: fs.Stats = fs.statSync(path.resolve(dist, file));
        if (stats.isDirectory()) {
            console.log("generating package.json for ", path.resolve(dist, `./esm/${iconsSrcFolder}/${file}/package.json`))
            const packageJson = Mustache.render(packageJsonTpl, {version: pjson.version});
            fs.writeFile(path.resolve(dist, `./${file}/package.json`), packageJson, () => {})

            fs.readdirSync(path.resolve(distTypes, file)).forEach(f => {
                console.log("copying ", f)
                fs.copyFileSync(path.resolve(distTypes, file, f), path.resolve(dist, file, f))
            })

        }
    } catch (e) {
        console.log("error processing", path.resolve(dist, file), ": ", e)
    }
})

const globalPackageJsonModel = {
    version: pjson.version,
    reactVer: pjson.peerDependencies.react,
    reactIconsVer: pjson.peerDependencies["react-icons"],
    modules: modules.map((m, i) => ({name: m, isLast: i === modules.length - 1}))
}
const globalPackageJson = Mustache.render(globalPackageJsonTpl, globalPackageJsonModel);
fs.writeFile(path.resolve(path.resolve("./dist"), "package.json"), globalPackageJson, () => {})