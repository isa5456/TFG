![Universidad de Granada](/images/ugr.jpg)

<p align="center">
  <h1>Entrenamiento de Redes Convolucionales mediante la Transformada de Fourier</h1>
</p>


Este repositorio alberga el Trabajo de Fin de Grado (TFG) de Isabel María Moreno Cuadrado, presentado para la obtención del Doble Grado en Matemáticas e Ingeniería Informática por la Universidad de Granada.

## Descripción del Proyecto

En este TFG, estructurado en dos partes distintas, una de índole matemática y otra de naturaleza informática, se exploran cuestiones vinculadas al campo del Aprendizaje Automático (DL), concretamente de las Redes Convolucionales (CNN), estableciendo una interconexión entre ambas áreas.

En la parte matemática de este TFG, correspondiente a la primera sección del mismo, se estudia en profundidad el análisis de Fourier en $\mathscr{L}^1(\mathbb{R}^n)$. El análisis de la Transformada de Fourier en este espacio, motivará  posteriormente la definición de su versión en el marco discreto, la Transformada de Fourier Discreta (DFT), cuyas propiedades y características más importantes emergerán de manera natural y estarán inspiradas por su similitud con las propiedades descritas en el ámbito continuo. Adicionalmente, se presentará en esta primera parte, la operación de convolución, que junto con el Teorema de Convolución consolidarán la base teórica para el desarrollo de la segunda parte de esta memoria.

En la parte informática de este TFG, correspondiente a la segunda sección del mismo, se estudia un método alternativo para realizar la operación de convolución entre un núcleo y una imagen, usando el Teorema de Convolución y las propiedades de la DFT. Este método utiliza la Transformada Rápida de Fourier (FFT) para convertir los productos matriciales entre ambos operandos en productos puntuales. En esta parte, se realizan, por tanto, una serie de experimentos con objeto de evaluar la viabilidad del nuevo método de convolución propuesto, en problemas de Visión por Computador (VC).
Posteriormente, se analiza la eficiencia de este algoritmo, lo cual requiere un estudio detallado de la eficiencia del algoritmo de la FFT. Finalmente, este algoritmo se termina incorporando en la arquitectura de una CNN, estudiando una nueva metodología propuesta en los trabajos futuros del artículo de Michael Mathieu, Mikael Henaff, Yann LeCun [Fast Training of Convolutional Networks through FFTs](https://arxiv.org/abs/1312.5851)
 para entrenar esta red íntegramente en el dominio de la frecuencia, y realizando posteriormente una comparativa de su rendimiento con el entrenamiento en una arquitectura clásica.

Esta aproximación permite entrenar una CNN usando menos operaciones y, por lo tanto, representa un avance prometedor en la línea de investigación; aceleración del entrenamiento de una CNN. Este avance es especialmente relevante dado el aumento en el número de mapas de características en las CNN modernas, que además suelen trabajar con datos de grandes dimensiones. Esta metodología se alinea con la creciente concienciación sobre la ``Green AI'', que busca desarrollar tecnologías y técnicas de Inteligencia Aritificial sostenibles, promoviendo un enfoque más eficiente y responsable.

Se muestra, por tanto, en el presente repostiorio, el código asociado a la parte experimental del TFG junto con la memoria del TFG.

## Estructura del Repositorio

El repositorio está organizado en varias carpetas, cada una destinada a un aspecto específico del proyecto:

- **`docs`**: Contiene artículos de referencia y otros documentos importantes.

- **`Memoria`**: Aloja la memoria del TFG.

- **`Notebooks`**: Incluye tres cuadernos de Jupyter, detallando diferentes aspectos del proyecto:
  1. **`MétodoDeConvolución`**: Estudio del nuevo método de convolución propuesto y su viabilidad.
  2. **`ComparacionMetodosConvolución`**: Análisis comparativo de métodos de convolución.
  3. **`EntrenamientoCNNMNIST`**: Comparación entre el entrenamiento en el dominio de la frecuencia y el entrenamiento tradicional de una CNN con el dataset MNIST.
  4. **`EntrenamientoCNNMNIST`**: Comparación entre el entrenamiento en el dominio de la frecuencia y el entrenamiento tradicional de una CNN con el dataset fashion-MNIST.
  5. **`OtrosExperimentos`**: Otros experimentos que me han permitido comprender mejor el tema del TFG y que han formado parte del mismo en el Capítulo 11, 13 y 14 .
- **`images`**: Imágenes usadas en los experimentos:

     
## AUTOR
Isabel María Moreno Cuadrado
     
