export function validateImage(imageFile) {
    let status = true;
    let message = "Image size validated successfully";

    if (imageFile.size > 1 * 1024 * 1024) { // 1MB size limit
        status = false;
        message = 'Image size exceeds the limit (1MB)';
    }

    return { status, message };
}