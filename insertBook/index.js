module.exports = async function (context, req) {

    const title= req.body.title; 
    const author = req.body.author; 
    const year = req.body.year;

    if (title && author && year != null) {

        context.bindings.outputDocument = req.body;
        context.res = {
            body: {'result': 'success'}
        };
    }else{
        context.res = {
            status: 400,
            body: {'result': 'error'}
        };
    }
};