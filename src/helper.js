// obtiene la diferencia de años
export function getDiferentYear(year) {
    return new Date().getFullYear() - year;
}

// calcula el total a pagar segun la marca
export function calculateBrand(brand) {
    let incremente;
    switch(brand) {
        case 'europeo':
            incremente = 1.30; // el 30% del valor actual
            break;
        case 'americano':
            incremente = 1.15; // el 30% del valor actual
            break;
        case 'asiatico':
            incremente = 1.05; // el 30% del valor actual
            break;

        default:
            break;
    }
    return incremente
}

// calcular el tipo de seguro
export function getPlan(plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}

// Muestra la primera letra mayuscula

export function firstUpperCase(text) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}