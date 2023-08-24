const url = "https://script.google.com/macros/s/AKfycbzkRT_iLj0wjmjIqfxqz-3eJ1pgmW3j6E5A9OZ2XTAmhRXxZ_n3W8p23XNBQUNjb-C8Jg/exec";

const getsheetAPI = async () => {
    const sheet = `${url}?skey=1JxQkbgQCdNpmb7FSAgA-X7uCGinN6R9-OagA90pJAt0&sname=sayfoneWeb`;
    const res = await fetch(sheet);
    const data = await res.json();
    const createData = data.map(([a, b, c, d, e]) => {
        return { id: a, siteName: b, siteType: c, link: d, icon: e };
    })
    return createData;
}

const getWebType = async () => {
    const sheet = `${url}?skey=1JxQkbgQCdNpmb7FSAgA-X7uCGinN6R9-OagA90pJAt0&sname=WebType`;
    const res = await fetch(sheet);
    const data = await res.json();
    const createData = data.map(([a, b]) => {
        return { id: a, siteType: b };
    })
    return createData;
}

export default getsheetAPI;

export { getWebType }