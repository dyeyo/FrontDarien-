# 🚀 Angular Frontend App

Este proyecto es una aplicación **frontend desarrollada con Angular**.

---

## 📦 Requisitos Previos

- **Node.js**: v18.x o superior (recomendado)
- **Angular CLI**: Para instalarlo globalmente, ejecuta:

  ```bash
  npm install -g @angular/cli
  ```

---

## 🔧 Instalación y Ejecución

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/dyeyo/backDarien
   cd angular-app
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**:

   ```bash
   ng serve
   ```

   Esto compilará el proyecto y abrirá la aplicación en tu navegador en:  
   👉 `http://localhost:4200`

4. **¿Necesitas otro puerto?**  
   Usa:

   ```bash
   ng serve --port=4300
   ```

---

## 🛠️ Tecnologías Utilizadas

- **Angular v17+**
- **RxJS**
- **Tailwind CSS** 
- **Servicios HTTP** para consumo de APIs externas

---

## 🗂️ Estructura del Proyecto

```
src/
├── app/
│   ├── auth/       
│   ├── components/ 
│   ├── interfaces/      
│   ├── services/        
│   ├── pages/           
│   └── ...               # Otros módulos
├── environments/
│   ├── environment.ts                   # Configuración por defecto
│   └── environment.development.ts       # Configuración para producción
angular.json                      # Configuración global del proyecto
```

---

## ⚙️ Variables de Entorno

Las variables de entorno están en:

```
src/environments/environment.development.ts
```

Puedes tener diferentes configuraciones para otros entornos como:

```
src/environments/environment.ts
```

---

## 🧪 Pruebas

> 🔒 **Este proyecto no tiene pruebas unitarias configuradas por el momento.**

---

## 🏗️ Construcción para Producción

Para compilar el proyecto para producción, ejecuta:

```bash
ng build --configuration production
```

Los archivos generados se ubicarán en la carpeta:

```
dist/
```

---

## 📚 Documentación

Para más información sobre Angular, visita la documentación oficial:  
👉 [https://angular.io](https://angular.io)

---

## 👤 Autor

**Diego Vallejo**  
📧 Contacto: [diegovallejob@gmail.com](mailto:diegovallejob@gmail.com)  
🔗 Repositorio: [hhttps://github.com/dyeyo](hhttps://github.com/dyeyo)

---
