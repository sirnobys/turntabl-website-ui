export function validateImage(imageFile) {
    let status = true;
    let message = "Image size validated successfully";

    if (imageFile.size > 1 * 1024 * 1024) { // 1MB size limit
        status = false;
        message = 'Image size exceeds the limit (1MB)';
    }

    return { status, message };
}

export function validatePdf(file){
    let status = true;
    let message = "file validated successfully"
    const extension = file?.name?.substring(file?.name?.lastIndexOf('.') + 1)
    if(extension !== 'pdf'){
        status=false
        message="Please upload pdf files only"
    }
    else if(file?.size > 1 * 1024 * 1024){
        status=false
        message="Pdf size exceeds the limit (1MB)"
    }

    return{status,message}
}