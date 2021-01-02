module.exports = async function (context, req, todo) {

    const title = req.body.title;
    const author = req.body.author;
    const year = req.body.year

    context.bindings.outputDocument = todo[0];
    context.bindings.outputDocument.title = title
    context.bindings.outputDocument.author = author
    context.bindings.outputDocument.year = year

    context.res = {
        body: {'result': 'success'}
    };
};