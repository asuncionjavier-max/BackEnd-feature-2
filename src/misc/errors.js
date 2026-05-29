// const selector = {
//     NOT_FOUND : 'notFound',
//     BAD_ERROR : 'badError',
//     INTERNAL_ERROR : 'internal_error'
// }

// const errors = {  
//     [selector.INTERNAL_ERROR] :{
//     statusCode: 500,
//     message:'Internal server Error'
// },
// [selector.BAD_ERROR]:{
//     statusCode: 400,
//     message: 'Bad Request'
// },
// [selector.NOT_FOUND] :{
//     statusCode: 404, 
//     message: 'Nor found',
// }
// }

// export class CErrors extends Error{
//     constructor(ErrorType, customStatusCode = 418){
//         super('');

//         this.customCode = customStatusCode
//         const{statusCode, message} = this._getError(ErrorType)
//         this.statusCode = statusCode;
//         this.message = message;

//     }
//     _getError(ErrorType = selector.BAD_ERROR){
//         return errors[ErrorType] ?? this._customMsg(ErrorType);
//     }

//     _customMsg(message){
//         return {statusCode: this.customCode, message}
//     }

// }