function formatDate(dateToFormat: Date) {
    return new Intl.DateTimeFormat("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(dateToFormat));
}

export {
    formatDate
}