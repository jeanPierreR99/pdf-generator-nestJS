import { Injectable, Res } from '@nestjs/common';
import { resolve } from 'path';
const PDFDocument = require('pdfkit-table');

@Injectable()
export class AppService {
  private estudiantes = [{
    "nombre": "Andreolli",
    "notas": 14,
    "sugerencias": "KMFV"
  }, {
    "nombre": "Draye",
    "notas": 18,
    "sugerencias": "KATS"
  }, {
    "nombre": "Danilevich",
    "notas": 12,
    "sugerencias": "VYSW"
  }, {
    "nombre": "Brixham",
    "notas": 12,
    "sugerencias": "ZSJN"
  }, {
    "nombre": "Jirasek",
    "notas": 20,
    "sugerencias": "KBHB"
  }, {
    "nombre": "Maylard",
    "notas": 17,
    "sugerencias": "GMMC"
  }, {
    "nombre": "MacGarvey",
    "notas": 14,
    "sugerencias": "HAAB"
  }, {
    "nombre": "Krop",
    "notas": 10,
    "sugerencias": "RJSH"
  }, {
    "nombre": "Cardon",
    "notas": 13,
    "sugerencias": "NZPM"
  }, {
    "nombre": "Clamo",
    "notas": 15,
    "sugerencias": "HANG"
  }, {
    "nombre": "Banasiak",
    "notas": 15,
    "sugerencias": "YBDG"
  }, {
    "nombre": "Tromans",
    "notas": 20,
    "sugerencias": "SSNO"
  }, {
    "nombre": "Husher",
    "notas": 13,
    "sugerencias": "ZYQQ"
  }, {
    "nombre": "McGrane",
    "notas": 14,
    "sugerencias": "CZO"
  }, {
    "nombre": "Gianetti",
    "notas": 18,
    "sugerencias": null
  }, {
    "nombre": "Benedick",
    "notas": 16,
    "sugerencias": "OIZH"
  }, {
    "nombre": "Dulanty",
    "notas": 9,
    "sugerencias": null
  }, {
    "nombre": "Mathison",
    "notas": 16,
    "sugerencias": "UUWW"
  }, {
    "nombre": "Tuft",
    "notas": 18,
    "sugerencias": "AYDO"
  }, {
    "nombre": "Swapp",
    "notas": 11,
    "sugerencias": null
  }, {
    "nombre": "Tebb",
    "notas": 14,
    "sugerencias": "SIMK"
  }, {
    "nombre": "Cruces",
    "notas": 20,
    "sugerencias": "WMKI"
  }, {
    "nombre": "Seeman",
    "notas": 11,
    "sugerencias": "GOOY"
  }, {
    "nombre": "Hackin",
    "notas": 17,
    "sugerencias": "VYSW"
  }, {
    "nombre": "Bielefeld",
    "notas": 12,
    "sugerencias": null
  }, {
    "nombre": "Edgworth",
    "notas": 10,
    "sugerencias": "NTGT"
  }, {
    "nombre": "Effaunt",
    "notas": 14,
    "sugerencias": "PLWN"
  }, {
    "nombre": "Gonzales",
    "notas": 18,
    "sugerencias": "KSUN"
  }, {
    "nombre": "Ebbage",
    "notas": 18,
    "sugerencias": "NTGU"
  }, {
    "nombre": "McEnteggart",
    "notas": 9,
    "sugerencias": null
  }, {
    "nombre": "Sizey",
    "notas": 12,
    "sugerencias": "OAGN"
  }, {
    "nombre": "Quarrie",
    "notas": 17,
    "sugerencias": "SNBC"
  }];
private pdfWidth = 610;

  private plCellOne = 50;
  private plCellTwo = 250;
  private plCellTrhee = 310;

  private cellHeight = 20;

  getWidthCell(num: number){
    const aux = this.pdfWidth - num;

    return this.pdfWidth - aux;
  }

   drawTableBorder(doc:any, y:number) {
    doc.lineWidth(1);
    doc.rect(this.plCellOne, y, this.getWidthCell(200), this.cellHeight).stroke(); // Ajusta las coordenadas y el tamaño según tu diseño
    doc.rect(this.plCellTwo, y, this.getWidthCell(60), this.cellHeight).stroke(); // Ajusta las coordenadas y el tamaño según tu diseño
    doc.rect(this.plCellTrhee, y, this.getWidthCell(250), this.cellHeight).stroke(); // Ajusta las coordenadas y el tamaño según tu diseño
}

  async generarPDF(@Res() res:any){
    const doc = new PDFDocument();

var aux = 75;
// var y = 12;
var y = 50;


doc.font('Helvetica-Bold').fontSize(12);
doc.text('NOMBRES: REYES FRSIANCHO KEVIN EJAN PIERRE', this.plCellOne ,5);
doc.text('GRADO: "5E"', this.plCellOne, 17);
doc.text('RESPONSABLE: JOAQUIN', this.plCellOne, 29);


doc.font('Helvetica-Bold').fontSize(12);
doc.text('Cursos', this.plCellOne + 5, y + 5);
doc.text('Notas', this.plCellTwo + 5, y + 5);
doc.text('Sugerencias', this.plCellTrhee + 5, y + 5);
this.drawTableBorder(doc, y); //Dibujar bordes para la fila actual

// Datos de los estudiantes en la tabla
doc.font('Helvetica').fontSize(10);

this.estudiantes.forEach(estudiante => {
    doc.text(estudiante.nombre, this.plCellOne + 5, aux);
    doc.text(estudiante.notas.toString(), this.plCellTwo + 5, aux);
    doc.text(estudiante.sugerencias, this.plCellTrhee + 5, aux);
    doc.moveDown();
    aux = aux + this.cellHeight;
    y = y + this.cellHeight;
    this.drawTableBorder(doc, y); // Dibujar bordes para la fila actual
});

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline; filename=jean.pdf');
  
      doc.pipe(res);
      doc.end();
  }
}
