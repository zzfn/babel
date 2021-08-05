const template =require("@babel/template").default

module.exports = function ({types: t}) {
    return {
        visitor: {
            ImportDeclaration(path, {opts}){
                const {lib}=opts
                if(path.node.source.value!==lib){
                    return
                }
                const imports=[]
                for (const spec of path.node.specifiers) {
                    const buildRequire = template(`import IMPORT_NAME from "SOURCE";`);
                    // const newImports = [t.importDeclaration([t.importDefaultSpecifier(spec.imported)], t.StringLiteral(`${lib}/${spec.imported.name}`))]
                    imports.push(buildRequire({
                        IMPORT_NAME: t.identifier(spec.imported.name),
                        SOURCE: t.StringLiteral(`${lib}/${spec.imported.name}`),
                    }))
                }
                path.replaceWithMultiple(imports);
            },
            // ExpressionStatement(path, {opts}) {
            //     const {object, property} = path.node.expression.callee
            //     if (object.name !== 'console') return
            //     const isIgnore = (opts.ignore || []).find(ele => ele === property.name)
            //     if (!isIgnore) path.remove()
            // },
        },
    };
}