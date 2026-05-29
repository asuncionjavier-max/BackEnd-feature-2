const Selector = {
    NOT_FOUND : 'notFound',
    BAD_ERROR : 'badError',
    INTERNAL_ERROR : 'internal_error'
}

const errors = {  
    [selector.INTERNAL_ERROR] :{
    statusCode: 500,
    message:'Internal server Error'
},
[Selector.BAD_ERROR]:{
    statusCode: 400,
    message: 'Bad Request'
},
[Selector.NOT_FOUND] :{
    statusCode: 404, 
    message: 'Nor found',
}
}

export class CErrors extends Error{
    constructor(ErrorType, customStatusCode = 418){
        super('');

        this.customCode = customStatusCode

        this.statusCode;
        this.message;

    }
    _getError(ErrorType = Selector.BAD_ERROR){
        return errors[ErrorType] ?? this._customMsg(ErrorType);
    }

    _customMsg(message){
        return {statusCode: this.customCode, message}
    }

}