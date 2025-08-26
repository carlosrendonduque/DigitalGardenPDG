---
tipo: mapa
proyecto: "{{NOMBRE_PROYECTO}}"
tags: [mapa, conceptual]
---
# Mapa conceptual del proyecto

Este es el grafo central: conecta los módulos clave del laboratorio.

## Conceptos clave (enlaces rápidos)
- [[Visión del proyecto]]
- [[Estructura narrativa]]
- [[Personajes]]
- [[Universo]]
- [[Obstáculos y conflictos]]
- [[Experimentación narrativa expandida]]
- [[Recursos y referencias]]

## Diagrama (Mermaid)
```mermaid
graph TD
Proyecto[Proyecto] --> Narrativa[Estructura narrativa]
Proyecto --> Mundo[Universo]
Proyecto --> Personajes
Proyecto --> Conflictos[Obstáculos y conflictos]
Proyecto --> Expansiones[Experimentación narrativa expandida]
Proyecto --> Referentes[Recursos y referencias]

Narrativa --> Personajes
Narrativa --> Conflictos
Mundo --> Narrativa
Mundo --> Conflictos
Referentes --> Narrativa
Referentes --> Mundo
Expansiones --> Narrativa

