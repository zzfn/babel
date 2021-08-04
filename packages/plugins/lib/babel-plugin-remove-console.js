const types = require('@babel/types')
const declare = require("@babel/helper-plugin-utils").declare

module.exports = declare(({types: t, assertVersion}) => {
    assertVersion(7);
    return {
        visitor: {
            ExpressionStatement(path, {opts}) {
                console.log()
                console.log(types.identifier('abc'))
                const {object, property} = path.node.expression.callee
                if (!object || object.name !== 'console') return
                const isIgnore = (opts.ignore || []).find(ele => ele === property.name)
                if (!isIgnore) path.remove()
            },
        },
    };
})