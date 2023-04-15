const ValidateEmail = (email: string): boolean => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
};

const ValidateNickname = (name: string): boolean => {
  console.log(name.length);
  return !/[^a-z|A-Z|0-9|ㄱ-ㅎ|가-힣]/g.test(name) && name.length >= 2;
};

const ValidatePassword = (password: string): boolean => {
  return password.length >= 8;
};

export { ValidateEmail, ValidateNickname, ValidatePassword };
