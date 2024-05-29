export const catchAsyncError = (theFunction) => {
    return (req, res) => {
        Promise.resolve(theFunction(req, res, next)).catch(next);
    };
};