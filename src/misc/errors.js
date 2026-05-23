Const Selector = {
    NOT_FOUND : 'notFound',
    BAD_ERROR : 'badError',
    INTERNAL_ERROR : 'internal_error'
}

const errors ={  
    [selector.BAD_ERROR]: {
    statusCode: 500,
    message:'Internal server Error' ,
},
{
    statusCode: 400,
    message: 'Bad Request',
},
{
    statusCode: 404, 
    message: 'Nor found',
}
}