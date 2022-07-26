import md5 from "js-md5";

export const gravatarUrl = (email, size) => {
    return `https://www.gravatar.com/avatar/${md5(email)}?d=identicon&s=${size}`;
};

export function joinClassNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
