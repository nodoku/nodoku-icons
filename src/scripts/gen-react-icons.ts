import fs from "fs";
import path from "path";
import Mustache from "mustache"
import {GenIcon} from "react-icons";

const nodeModules = path.resolve("./", "node_modules", "react-icons");

const iconRegex = /export declare const (.*): IconType;$/;

const iconsChunkFile = fs.readFileSync(path.resolve("./src/scripts/tpl", "icon-chunk-file.ts.hbs")).toString()
const moduleFile = fs.readFileSync(path.resolve("./src/scripts/tpl", "module-file.ts.hbs")).toString()
const commonFile = fs.readFileSync(path.resolve("./src/scripts/tpl", "common-file.ts.hbs")).toString()

const MAX_ICONS_PER_FILE = 1000;
const iconsSrcFolder = "nd-react-icons";

const files: {[key: string]: {iconName: string[]}[]} = {}

fs.readdirSync(nodeModules).forEach(file => {
    try {
        const stats: fs.Stats = fs.statSync(path.resolve(nodeModules, file));
        if (stats.isDirectory()) {
            const txt = fs.readFileSync(path.resolve(nodeModules, file, "index.d.ts"))

            txt.toString().split("\n").forEach(line => {
                const res = iconRegex.exec(line)
                if (res && res.length > 1) {

                    const iconName = res[1];
                    if (!files[file]) {
                        files[file] = []
                    }
                    if (files[file].length == 0) {
                        // files[file].push({imports: [], code: []})
                        files[file].push({iconName: []})
                    }
                    if (files[file][files[file].length - 1].iconName.length >= MAX_ICONS_PER_FILE) {
                        files[file].push({iconName: []})
                    }
                    files[file][files[file].length - 1].iconName.push(iconName)

                    // console.log("found icon", file, res[1]);
                }
            })

            // console.log("txt", txt.toString());
        }
    } catch (e) {
        console.log("error processing", path.resolve(nodeModules, file), ": ", e)
    }
})


Object.keys(files).forEach((file: string) => {

    console.log("in ", file, files[file].length, "file('s)");

    let numbers: number[] = [];
    files[file].forEach((iconsPerFile: {iconName: string[]}, fileIndex) => {
        if (iconsPerFile.iconName.length > 0) {
            numbers.push(fileIndex)
            console.log("writing ", fileIndex)
            const fileContent = Mustache.render(iconsChunkFile, {icons: iconsPerFile.iconName, module: file, fileIndex: fileIndex});

            try {
                const dirStat = fs.statSync(path.resolve(`./src/${iconsSrcFolder}/${file}`))
                if (!dirStat.isDirectory()) {
                    fs.mkdirSync(path.resolve(`./src/${iconsSrcFolder}/${file}`));
                }
            } catch (e) {
                fs.mkdirSync(path.resolve(`./src/${iconsSrcFolder}/${file}`));
            }

            fs.writeFile(path.resolve(`./src/${iconsSrcFolder}/${file}/name-to-react-icon-${file}-${fileIndex}.ts`), fileContent, () => {})
        }
    })

    console.log("numbers" ,numbers)

    const moduleFileContent = Mustache.render(moduleFile, {numbers: numbers, module: file});
    fs.writeFile(`./src/${iconsSrcFolder}/${file}/index.ts`, moduleFileContent, () => {})

})


function TfiAlert(props: any) {
    return GenIcon({
        "tag": "svg",
        "attr": {"version": "1.1", "viewBox": "0 0 17 17"},
        "child": [{"tag": "g", "attr": {}, "child": []}, {
            "tag": "path",
            "attr": {"d": "M8.454 1.492l-8.242 14.508h16.581l-8.339-14.508zM8.459 3.508l6.605 11.492h-13.134l6.529-11.492zM9 10.938h-1v-3.938h1v3.938zM9.5 13.031c0 0.552-0.447 1-1 1s-1-0.448-1-1 0.447-1 1-1 1 0.448 1 1z"},
            "child": []
        }]
    })(props);
};
