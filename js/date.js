const lastmod = document.querySelector("#lastmod");
lastmod.innerHTML = `<em> Last Modification: ${document.lastModified}</em`;

document.getElementById("currentyear").innerHTML = new Date(). getFullYear();