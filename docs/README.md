# TurboTraffic Service - VTEX

## Descripción del proyecto
Servicio en node para la conexión e indexación de turbotraffic desarrollado para tiendas VTEX

<br/>

## Requerimientos
- Tener acceso al ambiente **master** de tu página.
- Validar que tengas tus keywords publicadas.

<br/>

## Instalación
Debes crear un ambiente de producción
```
vtex use {workspaceName} --production
```
Instalar el servicio en el ambiente de pruebas
```
vtex install estrategiamicpartnerco.turbotraffic-app
```
Verifica que funcione
```
https://{workspaceName}--{vendor}.myvtex.com/t/{keyword}
```

**¿Todo en orden?**
<br/>
Instalalo en el workspace **master**
```
vtex use master && vtex install estrategiamicpartnerco.turbotraffic-app
```
<br/>

## Ejecución
Si la instalación fue exitosa puedes validar en tu sitio web público que el template funcione correctamente
```
https://tupagina.com/t/tu-keyword
```
<br/>

## Autor
Alejandro González Serna - agonzalez@turbotraffic.com
