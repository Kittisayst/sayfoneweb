import getsheetAPI, { getWebType } from "./googleAPI.js";

let WebTypes = {};
let WebSites = {};
const fetchData = async () => {
    WebTypes = await getWebType();
    showType();
    WebSites = await getsheetAPI();
    showWebsite();
}



const showType = async () => {
    const el = document.getElementById("webtype");
    el.innerHTML = "";
    WebTypes.forEach(data => {
        const layout = document.createElement("div");
        const radio = document.createElement("input");
        const lable = document.createElement("label");
        layout.className = "form-check";
        radio.className = "form-check-input";
        radio.type = "radio";
        radio.value = data.siteType;
        radio.name = "rdWebtype";
        radio.id = `web${data.id}`;
        lable.className = "form-check-label";
        lable.setAttribute("for", `web${data.id}`);
        lable.innerHTML = data.siteType;
        radio.addEventListener("change", (e) => handelFilter(data.siteType));
        layout.appendChild(radio);
        layout.appendChild(lable);
        el.appendChild(layout);
    });

}

const handelFilter = (type) => {
    showFilter(type);
}



const showWebsite = async () => {
    const root = document.getElementById("root");
    root.innerHTML = "";
    let webstr = "";
    WebSites.forEach(data => {
        webstr += `
            <a href="${data.link}" target="_blank" class="card m-2 p-4 fs-5 text-center col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3" id="webstype">
                <span><img src="${data.icon}" alt="appIcon" width="40px">
                    ${data.siteName}</span>
                <span class="fs-6 text-warning mt-2">${data.siteType}</span>
            </a>`;
    });
    root.innerHTML = webstr;
}



const showFilter = async (text) => {
    if (text == "ທັງໝົດ") {
        showWebsite();
    } else {
        const root = document.getElementById("root");
        root.innerHTML = "";
        let webstr = "";
        const fillter = WebSites.filter((data) => data.siteType == text);
        fillter.forEach(data => {
            webstr += `
                <a href="${data.link}" class="card m-2 p-5 fs-5 text-center col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3" id="webstype">
                    <span><img src="${data.icon}" alt="appIcon" width="40px">
                        ${data.siteName}</span>
                    <span class="fs-6 text-warning mt-2">${data.siteType}</span>
                </a>`;
        });
        root.innerHTML = webstr;
    }
}
fetchData();

