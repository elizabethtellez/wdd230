const lastmod = document.querySelector("#lastmod");
lastmod.innerHTML = `<em> Last Modification: ${document.lastModified}</em`;

document.getElementById("year").innerHTML = new Date(). getFullYear();