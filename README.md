# TurboTraffic Service - VTEX

## Descripción del proyecto :page_facing_up:
Servicio en node para la conexión e indexación de turbotraffic desarrollado para tiendas VTEX

<br/>

## Requerimientos :memo:
- Tener acceso al ambiente **master** de tu página.
- Validar que tengas tus keywords publicadas.

<br/>

## Instalación :house_with_garden:
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
```
https://{workspaceName}--{vendor}.myvtex.com/t/xmls/1
```
**¿Todo en orden?**
<br/>
Instálalo en el workspace **master**
```
vtex use master && vtex install estrategiamicpartnerco.turbotraffic-app
```
<br/>

## Ejecución :zap:
Si la instalación fue exitosa puedes validar en tu sitio web público
```
https://tupagina.com/t/tu-keyword
```

También verifica el XML generado
```
https://tupagina.com/t/xmls/1
```
<br/>

## Autor :copyright:
Alejandro González Serna - development@turbotraffic.com
