---
tipo: mapa
proyecto: "{{NOMBRE_PROYECTO}}"
tags: [conflictos, mapa, tensiones]
---

# Mapa de tensiones

Visualización de cómo se cruzan las metas y obstáculos entre personajes.

## Diagrama (Mermaid)

```mermaid
graph TD
Jerico["Jericó: desea aniquilación"]
FuncionarioX["Funcionario X: sostener burocracia"]
Testantes["Testantes: mantener espectáculo"]
Burocracia["Regla del inventario"]

Jerico -->|Obstáculo| FuncionarioX
Jerico -->|Amenaza su meta| Testantes
FuncionarioX -->|Depende de| Burocracia
Testantes -->|Legitiman| Burocracia
