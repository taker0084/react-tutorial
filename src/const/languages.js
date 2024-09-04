export const LANGUAGES = [      //言語の配列
    'JavaScript',
    'C++',
    'Ruby',
    'Java', 
    'PHP', 
    'Go'
];
export const getLanguages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(LANGUAGES);
        }, 1000);
    })
}
