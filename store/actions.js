export const LogIn = (mobile, verification) => {
    console.log(verification, 1);
    if (verification){
    return {
        type: 'LogIn',
        mobile: mobile
        }
    }
    else {
        return {
            type: 'InvalidUser',
        }
    }
}