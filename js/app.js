async function loadSection(id, file) {
    const response = await fetch(file);
    const html = await response.text();

    document.getElementById(id).innerHTML = html;
}

async function loadPage() {
    await Promise.all([
        loadSection("navbar", "sections/navbar.html"),
        loadSection("hero", "sections/hero.html"),
        loadSection("form", "sections/form.html"),
        loadSection("footer", "sections/footer.html"),
        loadSection("overview", "sections/overview.html"),
        loadSection("example", "sections/example.html")
    ]);
}

loadPage();