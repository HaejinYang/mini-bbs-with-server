const ValidateEmail = (email: string): boolean => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

const ValidateNickname = (name: string): boolean => {
    return !(/[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣]/g.test(name));
}

const ValidatePassword = (password: string): boolean => {
    return password.length >= 8;
}

export {ValidateEmail, ValidateNickname, ValidatePassword};
