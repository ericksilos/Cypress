# Testing JS con CYPRESS prueba técnica QA Engineer


## Instalación
```bash
npm install cypress --save-dev
npm install -D cypress-xpath
```

## Ejecutando Cypress
Debes tener un directorio llamado tests, y en ellos ficheros .spec.test.
```bash
./node_modules/.bin/cypress open
```

```bash
npm run cy:open
```

## La carpeta Cypress
- Fixtures: Datos estáticos que pueden ser utilizados para los tests.
- Integration: Lugar donde colocaremos los tests. Por defecto contiene una carpeta de tests de ejemplo.
- Plugins: Permiten acceder, modificar o ampliar el comportamiento interno de Cypress.
- Support: Lugar para colocar comportamientos reutilizables, como comandos personalizados o anulaciones globales, que estarán disponibles para todos los tests.

## Ejecutando los Tests
El comando run ejecutará todos tests que tengamos dentro de la carpeta Integration.
```bash
./node_modules/.bin/cypress run
```

```bash
npm run cy:run
```
