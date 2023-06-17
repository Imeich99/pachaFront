// Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla

function ejercicio01() {
    // Obteniendo los valores de los input
    let nro1 = Number(document.getElementById("nro01").value);
    let nro2 = Number(document.getElementById("nro02").value);
  
    // Calculando la suma
    let suma = nro1 + nro2;
  
    // Imprimiendo el resultado en pantalla
    document.getElementById("rpt01").innerHTML = `El resultado de la suma es ${suma}`;
  }

function ejercicio02() {
    // Obteniendo los valores de los input
    let nt01 = Number(document.getElementById("nt01").value);
    let nt02 = Number(document.getElementById("nt02").value);
    let nt03 = Number(document.getElementById("nt03").value);
    let nt04 = Number(document.getElementById("nt04").value);

    // Calculando el promedio
    let promedio = (nt01 + nt02 + nt03 + nt04) / 4;

    // Imprimiendo el resultado en pantalla
    document.getElementById("rpt02").innerHTML = `El promedio de las notas es ${Math.round(promedio)}`;
}

function ejercicio03() {
    // Obteniendo los valores de los input
    let ancho = Number(document.getElementById("ancho").value);
    let altura = Number(document.getElementById("altura").value);

    // Calculando el area del rectangulo (b*h)
    let area = ancho * altura;

    // Imprimiendo el resultado en pantalla
    document.getElementById("rpt03").innerHTML = `El área del rectangulo es ${area}cm2`;
}

function ejercicio04() {
    // Obteniendo los valores de los input
    let base_tr = Number(document.getElementById("base_tr").value);
    let altura_tr = Number(document.getElementById("altura_tr").value);

    // Calculando el area del triangulo (b*h)/2
    let area_tr = (base_tr * altura_tr)/2;

    // Imprimiendo el resultado en pantalla
    document.getElementById("rpt04").innerHTML = `El área del triangulo es ${area_tr}cm2`;
}

function ejercicio05() {
    // Obteniendo los valores de los input
    let radio_circu = Number(document.getElementById("radio_circu").value);

    // Calculando el area de la circuferencia pi*radio*radio
    let area_cr = 3.1416 * (radio_circu*radio_circu);

    // Imprimiendo el resultado en pantalla
    document.getElementById("rpt05").innerHTML = `El área de la circunferencia es ${area_cr}cm2`;
}

function ejercicio06() {
    // Obteniendo los valores de los input
    let horas_tr = Number(document.getElementById("horas_tr").value);
    const salario_hr = 40;

    // Calculando el sueldo semanal del trabajador
    let salario_sm = salario_hr * horas_tr;

    // Imprimiendo el resultado en pantalla
    document.getElementById("rpt06").innerHTML = `El salario semanal es S/. ${salario_sm}`;
}

function ejercicio07() {
    // Obteniendo los valores de los input
    let metros_tela = Number(document.getElementById("metros_tela").value);
    const pulgadas = 39.37;

    // Calculando la tela a pedir
    let conversion = metros_tela * pulgadas;

    // Imprimiendo el resultado en pantalla
    document.getElementById("rpt07").innerHTML = `Deberás pedir ${Math.round(conversion)} pulgadas de tela`;
}

function ejercicio08() {
    // Obteniendo los valores de los input
    let soles = Number(document.getElementById("soles").value);
    const precio_dolar = 3.72;

    // Calculando la conversion a dolares
    let conversion_dolar = soles / precio_dolar;

    // Imprimiendo el resultado en pantalla
    document.getElementById("rpt08").innerHTML = `La cantidad ingresada sería $.${conversion_dolar.toFixed(2)} `;
}

function ejercicio09() {
    // Obteniendo los valores de los input
    let fch_nacimiento = document.getElementById("fch_nacimiento").value;    
    let hoy = new Date();

    // Calculando la edad
    let fechaNac = new Date(fch_nacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
    edad--;
    }

    // Imprimiendo el resultado en pantalla
    document.getElementById("rpt09").innerHTML = `Tiene la edad de ${edad} años`;
}

function ejercicio10() {
  // Obteniendo los valores de los input
  let nombre_1 = document.getElementById("nombre_1").value;    
  let nombre_2 = document.getElementById("nombre_2").value;
  let nombre_3 = document.getElementById("nombre_3").value;
  let edad_1 = document.getElementById("edad_1").value;
  let edad_2 = document.getElementById("edad_2").value;
  let edad_3 = document.getElementById("edad_3").value;

  // Calculando la edad
  let fechaNac = new Date(fch_nacimiento);
  let edad = hoy.getFullYear() - fechaNac.getFullYear();
  let mes = hoy.getMonth() - fechaNac.getMonth();

  if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
  edad--;
  }

  // Imprimiendo el resultado en pantalla
  document.getElementById("rpt09").innerHTML = `Tiene la edad de ${edad} años`;
}

function ejercicio12() {
    // Obtener el salario inicial del input
    const salarioInicial = 1500;
  
    // Calcular el salario después de 6 años con incremento del 10% anual
    let salario = salarioInicial;
    const incrementoAnual = 0.1;
    const numAnios = 6;
    const salariosPorAnio = [];
    for (let i = 0; i < numAnios; i++) {
      salario = salario * (1 + incrementoAnual);
      salariosPorAnio.push(salario);
    }
  
    // Mostrar los resultados en el HTML
    const resultadoSalario = document.getElementById("resultadoSalario");
    resultadoSalario.innerHTML = `El salario después de 6 años es de $${salario.toFixed(
      2
    )}.`;
  
    const resultadoSalariosPorAnio = document.getElementById("resultadoSalariosPorAnio");
    resultadoSalariosPorAnio.innerHTML = `El salario por cada año durante los últimos 6 años es:<br>${salariosPorAnio.map(
      (salario, index) => `Año ${index + 1}: $${salario.toFixed(2)}`
    ).join("<br>")}`;
  }

 
    